package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgmoneyinvbook;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgmoneyinvbookMapper;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.InvBookList;
import code_fb_cg.request.RbookList;
import code_fb_cg.service.TpCgmoneyinvbookService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
@Service("tpCgmoneyinvbookService")
public class TpCgmoneyinvbookServiceImpl implements TpCgmoneyinvbookService {

	@Autowired
	private TpCgmoneyinvbookMapper tpCgmoneyinvbookMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	//合同管理添加发票
	@Transactional
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> ADDfapiao(RequestObject<EmptyTag, RbookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgmoneyinvbook invbook = requestObject.getData().getList().get(0);
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(invbook.getcConnum());
		String money = invbook.getcMoney();
		invbook.setcMoney(ri.formatForTwo(new BigDecimal(money)));
		int row = tpCgmoneyinvbookMapper.insertSelective(invbook);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		TpCgcontractmt tmt = tpCgcontractmtMapper.selectByPrimaryKey(requestObject.getData().getConmt().get(0).getcId());
		BigDecimal bookmoney = new BigDecimal("0");//发票金额
		BigDecimal tntmoney = new BigDecimal(requestObject.getData().getConmt().get(0).getcConmoney());//合同金额
		book.setcConmtid(requestObject.getData().getConmt().get(0).getcId());
		List<TpCgmoneyinvbook> lsit = tpCgmoneyinvbookMapper.selectConmtid(book);
		for(TpCgmoneyinvbook moneyinvbook : lsit) {
			if(moneyinvbook.getcMoney().indexOf("-")==0) {
				bookmoney = bookmoney.subtract(new BigDecimal(moneyinvbook.getcMoney().replace("-", "")));			
			}else {
				bookmoney = bookmoney.add(new BigDecimal(moneyinvbook.getcMoney()));
			}
		}
		if(tntmoney.compareTo(bookmoney) == 0) {
			if(requestObject.getData().getConmt().get(0).getcCheckway().equals("1") && requestObject.getData().getConmt().get(0).getcSignstep().equals("1")) {
				tmt.setcTransway("1");
				if(!"4".equals(tmt.getcState())) {
					tmt.setcState("1");
				}
			}else {
				tmt.setcTransway("1");
				if(!"4".equals(tmt.getcState())) {
					tmt.setcState("3");
				}
			}
		}else if(tntmoney.compareTo(bookmoney) < 0){
			if(tstlist.size() > 0) {
				if(tstlist.get(0).getcUnit().equals("吨") || tstlist.get(0).getcUnit().equals("千克")) {
					if(requestObject.getData().getConmt().get(0).getcCheckway().equals("1") && requestObject.getData().getConmt().get(0).getcSignstep().equals("1")) {
						tmt.setcTransway("1");
						if(!"4".equals(tmt.getcState())) {
							tmt.setcState("1");
						}
					}else {
						tmt.setcTransway("1");
						if(!"4".equals(tmt.getcState())) {
							tmt.setcState("3");
						}
					}
				}else {
					if(!"4".equals(tmt.getcState())) {
						tmt.setcState("3");
					}
					tmt.setcTransway("2");
				}
			}else {
				if(!"4".equals(tmt.getcState())) {
					tmt.setcState("3");
				}
				tmt.setcTransway("2");
			}		
		}else {
			if(!"4".equals(tmt.getcState())) {
				tmt.setcState("3");
			}
			tmt.setcTransway("2");
		}
		int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
		if(row1 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		
		if(tstlist.size() > 0) {
			if(!tstlist.get(0).getcUnit().equals("吨") && !tstlist.get(0).getcUnit().equals("千克")) {
				if(tntmoney.compareTo(bookmoney) == -1) {
					return builder.errcode(Errcode.FailShowSuccessMsg).msg("发票总金额超出合同金额，请手动确认到票情况").build();
				}
			}
		}
		return builder.data(row).errcode(Errcode.Success).msg("添加成功").build();
	}
	public ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectConmtid(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		book.setcConmtid(requestObject.getData().getList().get(0).getcId());
		List<TpCgmoneyinvbook> lsit = tpCgmoneyinvbookMapper.selectConmtid(book);
		if(lsit.size()==0) {
			return builder.errcode(Errcode.Success).msg("查询成功：无数据").build();
		}
		return builder.data(lsit).errcode(Errcode.Success).msg("查询成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> uodateFAPIAO(RequestObject<EmptyTag, InvBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgmoneyinvbook> lsit = requestObject.getData().getList();
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(lsit.get(0).getcConnum());
		BigDecimal money;
		for(TpCgmoneyinvbook book : lsit) {
			money = new BigDecimal(book.getcMoney());
			book.setcMoney(ri.formatForTwo(money));
		}
		int row = tpCgmoneyinvbookMapper.updateByPrimaryKeySelective(lsit);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		BigDecimal bookmoney = new BigDecimal("0");//发票金额
		BigDecimal tntmoney = new BigDecimal(requestObject.getData().getMtList().get(0).getcConmoney());//合同金额
		book.setcConmtid(requestObject.getData().getMtList().get(0).getcId());
		List<TpCgmoneyinvbook> booklsit = tpCgmoneyinvbookMapper.selectConmtid(book);
		for(TpCgmoneyinvbook moneyinvbook : booklsit) {
			if(moneyinvbook.getcMoney().indexOf("-")==0) {
				bookmoney = bookmoney.subtract(new BigDecimal(moneyinvbook.getcMoney().replace("-", "")));			
			}else {
				bookmoney = bookmoney.add(new BigDecimal(moneyinvbook.getcMoney()));
			}
		}
		//已作废的不改变状态
		if(!"4".equals(requestObject.getData().getMtList().get(0).getcState())) {
			TpCgcontractmt tmt = new TpCgcontractmt();
			tmt.setcId(requestObject.getData().getMtList().get(0).getcId());
			if(tntmoney.compareTo(bookmoney) == 0) {
				if(requestObject.getData().getMtList().get(0).getcCheckway().equals("1") && requestObject.getData().getMtList().get(0).getcSignstep().equals("1")) {
					tmt.setcTransway("1");
					tmt.setcState("1");
				}else {
					tmt.setcTransway("1");
					tmt.setcState("3");
				}
			}else if(tntmoney.compareTo(bookmoney) < 0){
				if(tstlist.size() > 0) {
					if(tstlist.get(0).getcUnit().equals("吨") || tstlist.get(0).getcUnit().equals("千克")) {
						if(requestObject.getData().getMtList().get(0).getcCheckway().equals("1") && requestObject.getData().getMtList().get(0).getcSignstep().equals("1")) {
							tmt.setcTransway("1");
							tmt.setcState("1");
						}else {
							tmt.setcTransway("1");
							tmt.setcState("3");
						}
					}else {
						tmt.setcState("3");
						tmt.setcTransway("2");
					}
				}else {
					tmt.setcState("3");
					tmt.setcTransway("2");
				}		
			}else {
				tmt.setcState("3"); 
				tmt.setcTransway("2");
			}
			int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		
		if(tstlist.size() > 0) {
			if(!tstlist.get(0).getcUnit().equals("吨") && !tstlist.get(0).getcUnit().equals("千克")) {
				if(tntmoney.compareTo(bookmoney) == -1) {
					return builder.errcode(Errcode.FailShowSuccessMsg).msg("发票总金额超出合同金额，请手动确认到票情况").build();
				}
			}
		}
		return builder.data(row).errcode(Errcode.Success).msg("修改成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> deleteFAPIAO(RequestObject<EmptyTag, InvBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row = tpCgmoneyinvbookMapper.deleteFAPIAO(requestObject.getData().getList());
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		book.setcConmtid(requestObject.getData().getList().get(0).getcConmtid());
		List<TpCgmoneyinvbook> lsit = tpCgmoneyinvbookMapper.selectConmtid(book);
		TpCgcontractmt tmt = new TpCgcontractmt();
		tmt.setcId(requestObject.getData().getMtList().get(0).getcId());
		if(lsit.size() == 0) {
			tmt.setcTransway("0");
		}
		if(lsit.size() > 0) {
			BigDecimal bookmoney;//发票金额
			BigDecimal tntmoney = new BigDecimal(requestObject.getData().getMtList().get(0).getcConmoney());//合同金额
			for(TpCgmoneyinvbook moneyinvbook : lsit) {
				if(moneyinvbook.getcMoney().indexOf("-")==0) {
					bookmoney = new BigDecimal(moneyinvbook.getcMoney().replace("-", ""));
					tntmoney = tntmoney.add(bookmoney);
				}else {
					bookmoney = new BigDecimal(moneyinvbook.getcMoney());
					tntmoney = tntmoney.subtract(bookmoney);
				}
			}
			if(!"4".equals(requestObject.getData().getMtList().get(0).getcState())) {
				if(tntmoney.compareTo(new BigDecimal("0")) == 0 ) {
					if(requestObject.getData().getMtList().get(0).getcCheckway().equals("1") && requestObject.getData().getMtList().get(0).getcSignstep().equals("1")) {
						tmt.setcTransway("1");
						tmt.setcState("1");
					}else {
						tmt.setcTransway("1");
						tmt.setcState("3");
					}
				}else {
					tmt.setcState("3");
					tmt.setcTransway("2");
				}
			}
			
		}
		int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
		if(row1 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("删除成功").build();
	}
	public ResponseObject<EmptyTag, EmptyData> S1S31fapiao(RequestObject<EmptyTag, InvBookList> requestObject) {
		// 点击合同再点击一键发票，出现弹窗，在内输入发票开票时间，开票详情，点确认后开票金额与累计付款金额总和一致。
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mtList = requestObject.getData().getMtList();//合同信息
		List<TpCgmoneyinvbook> list = requestObject.getData().getList();//模态框中输入数据
		for (TpCgmoneyinvbook tpCgmoneyinvbook : list) {
			tpCgmoneyinvbook.setcMoney(mtList.get(0).getcSw01());//发票金额=合同付款金额（累计付款金额）
		}
		int row = tpCgmoneyinvbookMapper.ADDfapiao(list);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("修改成功").build();
	}
	public ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectNullValue() {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgmoneyinvbook> list = tpCgmoneyinvbookMapper.selectNullValue();
		if(list.size()==0) {
			return builder.errcode(Errcode.Success).msg("查询成功：无数据").build();
		}
		return builder.data(list).errcode(Errcode.Success).msg("查询成功").build();
	}
	public ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectTarate() {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> list = tpCgcontractmtMapper.selectByCpayway("13%");
		List<TpCgmoneyinvbook> booklist = new ArrayList<TpCgmoneyinvbook>();
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		System.out.println(list.size()+"aaaaaaaaaaaaaa");
		for (TpCgcontractmt tpCgcontractmt : list) {
			book.setcConmtid(tpCgcontractmt.getcId());
			booklist.addAll(tpCgmoneyinvbookMapper.selectConmtid(book));
		}
		System.out.println(booklist.size()+"bbbbbbbbbbbbbbb");
		if(booklist.size() == 0) {
			return builder.errcode(Errcode.Success).msg("查询成功：无数据").build();
		}
		return builder.data(booklist).errcode(Errcode.Success).msg("查询成功").build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> refundFAPIAO(RequestObject<EmptyTag, InvBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgmoneyinvbook> lsit = requestObject.getData().getList();
		for(TpCgmoneyinvbook book : lsit) {
			book.setcState("1");
		}
		int row = tpCgmoneyinvbookMapper.updateByPrimaryKeySelective(lsit);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("退票失败").build();
		}
		TpCgcontractmt tmt = new TpCgcontractmt();
		tmt.setcId(requestObject.getData().getMtList().get(0).getcId());
		tmt.setcState("3");
		tmt.setcTransway("2");
		int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
		if(row1 > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("退票失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("退票成功").build();
	}
}

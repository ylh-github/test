package code_fb_cg.service.impl;
import java.math.BigDecimal;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_CK_M1S1;
import code_fb.mapper.CG_CK_Mapper;
import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgmoneybook;
import code_fb_cg.entity.TpCgmoneyinvbook;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.entity.TpConrevocare;
import code_fb_cg.mapper.TbGuildataMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgmoneybookMapper;
import code_fb_cg.mapper.TpCgmoneyinvbookMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_cg.mapper.TpConrevocareMapper;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.ContractmtList;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.OrderMtAndSt;
import code_fb_cg.request.ZJHTrequest;
import code_fb_cg.service.TpCgcontractmtService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service("tpCgcontractmtService")
public class TpCgcontractmtServiceImpl implements TpCgcontractmtService {

	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	private TpCgmoneybookMapper tpCgmoneybookMapper;
	@Autowired
	private TpCgmoneyinvbookMapper tpCgmoneyinvbookMapper;
	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TpConrevocareMapper tpConrevocareMapper;
	@Autowired
	private TbGuildataMapper tbGuildataMapper;
	@Autowired
	@Qualifier("cgCkMapper")
	public CG_CK_Mapper cgCkMapper;
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> selectByConnum(
			RequestObject<EmptyTag, TpCgcontractmt> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mt = tpCgcontractmtMapper.selectByConnum(requestObject.getData().getcConnum());
		if(mt.size()!=0) {
			return builder.errcode(Errcode.FailParameterError).msg("合同号已存在，请重新输入").build();
		}
		return builder.errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> updateContractZF(
			RequestObject<EmptyTag, ContractmtList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByCountSt(requestObject.getData().getList().get(0).getcConnum());
		//作废合同时  查询该合同有几个请购单
//		List<String> str  = tpCgcontractstMapper.selectMTID(stList.get(0).getcConnum());
		//将请购单由完成  修改为 未完成
//		int row0 = tpCgordermtMapper.updateForZF(str);
//		if(row0 == 0) {
//			return builder.errcode(Errcode.FailParameterError).msg("作废失败").build();
//		}
		List<TpCgorderst> orstList = new ArrayList<TpCgorderst>();
		for (TpCgcontractst tpCgcontractst : stList) {
			TpCgorderst orst = tpCgorderstMapper.selectByPrimaryKey(tpCgcontractst.getcSw02());
			orstList.add(orst);
		}
		int row1 = tpCgorderstMapper.deleteByOrderst(orstList);
		if(row1 == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("作废失败").build();
		}
		List<TpCgcontractmt> mt = new ArrayList<TpCgcontractmt>();
		for (TpCgcontractmt tpCgcontractmt : requestObject.getData().getList()) {
			tpCgcontractmt.setcSw08(requestObject.getData().getcSw08());
			mt.add(tpCgcontractmt);
		}
		int row = tpCgcontractmtMapper.updateContractZF(mt);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("作废失败").build();
		}
		return builder.errcode(Errcode.Success).msg("作废成功").build();
	}

	public ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTST(
			RequestObject<EmptyTag, ConMtAndSt> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<ConMtAndSt> list = tpCgcontractmtMapper.selectByMTST(requestObject.getData());
		if(list.size()==0) {
			return builder.errcode(Errcode.FailShowInfoMsg).msg("查询成功，无数据").build();
		}
		return builder.data(list).errcode(Errcode.Success).msg("查询成功").build();
	}
	//一键到货
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> YJdaohuo(
			RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgcontractmt tmt = requestObject.getData().getList().get(0);
		System.err.println(requestObject.getData().getcSw06() + "bbbbbbbbbbbbbbbbbb");
		//添加到货详情
		if(!"1".equals(tmt.getcCheckway())) {
			
		}
		List<TpCgcontractst> tstList = tpCgcontractstMapper.selectByCountSt(tmt.getcConnum());
		List<TpCgreceivebook> booktList = new ArrayList<TpCgreceivebook>();
		
		BigDecimal goodsnum;//订购数量
		BigDecimal groudtotalnum;//到货数量
		for(TpCgcontractst tst : tstList) {
			goodsnum = new BigDecimal(tst.getcGoodsnum());
			groudtotalnum = new BigDecimal(tst.getcGroudtotalnum());
			if(!tst.getcState().equals("5")) {
				tst.setcState("1");
				if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
					if(groudtotalnum.compareTo(goodsnum) == 1) {	
						tst.setcGroudtotalnum(ri.formatToFour(groudtotalnum));
						tst.setcResiduenum(ri.formatToFour(new BigDecimal(tst.getcResiduenum())));
					}else {
						tst.setcGroudtotalnum(ri.formatToFour(new BigDecimal(tst.getcGoodsnum())));
						tst.setcResiduenum(ri.formatToFour(new BigDecimal("0")));
					}
				}else {
					if(groudtotalnum.compareTo(goodsnum) == 1) {
						tst.setcGroudtotalnum(ri.formatForTwo(groudtotalnum));
						tst.setcResiduenum(ri.formatForTwo(new BigDecimal(tst.getcResiduenum())));
					}else {
						tst.setcGroudtotalnum(ri.formatForTwo(new BigDecimal(tst.getcGoodsnum())));
						tst.setcResiduenum(ri.formatForTwo(new BigDecimal("0")));
					}
				}
			}
			if(tst.getcGroudtotalnum() == "" || tst.getcGroudtotalnum() == null) {
				tst.setcGroudtotalnum("0");
			}
			if(goodsnum.compareTo(groudtotalnum) == 1) {
				if(!tst.getcState().equals("5")) {
					TpCgreceivebook book = new TpCgreceivebook();			
					book.setcConnum(tst.getcConnum());
					book.setcConline(tst.getcConline());
					book.setcSw02(tst.getcGoodsname());
					book.setcGoodscleck(tst.getcSw08());
					if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
						book.setcArrivalnum(ri.formatToFour(goodsnum.subtract(groudtotalnum)));
					}else {
						book.setcArrivalnum(ri.formatForTwo(goodsnum.subtract(groudtotalnum)));
					}
					book.setcDeltime(requestObject.getData().getGettime());
					book.setcSw03(tst.getcUnit());
					book.setcSw04(tst.getcSpec());
					book.setcCreater(tmt.getcCreater());
					book.setcCreatetime(tmt.getcCreatetime());
					book.setcSw06(requestObject.getData().getcSw06());//到货港口
					booktList.add(book);
				}
			}
		}
		int row2 = tpCgcontractstMapper.S1S21DH(tstList);
		if(row2 == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
		}
		if(booktList.size() > 0) {
			int row1 = tpCgreceivebookMapper.insertFinashi(booktList);
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
			}
		}
		//修改主表到货情况
		for(TpCgcontractmt tpCgcontractmtmt : requestObject.getData().getList()) {
			tpCgcontractmtmt.setcGettime(requestObject.getData().getGettime());
			if(!"4".equals(tpCgcontractmtmt.getcState())) {
				if(tpCgcontractmtmt.getcTransway().equals("1") && tpCgcontractmtmt.getcSignstep().equals("1")) {
					tpCgcontractmtmt.setcState("1");
				}else {
					tpCgcontractmtmt.setcState("3");
				}
			}			
			if(tpCgcontractmtmt.getcDr()!=null && tpCgcontractmtmt.getcGettime()!=null) {
				BIGString bigs = new BIGString();
				int i = bigs.compare_date(tpCgcontractmtmt.getcDr(), tpCgcontractmtmt.getcGettime());
				try {
					if(i==1) {
						//相差的天数
						int daysBetween = bigs.daysBetween(tpCgcontractmtmt.getcGettime(), tpCgcontractmtmt.getcDr());
						tpCgcontractmtmt.setcSw12("+"+String.valueOf(daysBetween)+"天");
					}else if(i==-1) {
						int daysBetween = bigs.daysBetween(tpCgcontractmtmt.getcDr(), tpCgcontractmtmt.getcGettime());
						tpCgcontractmtmt.setcSw12("-"+String.valueOf(daysBetween)+"天");
					}else {
						int daysBetween = 0;
						tpCgcontractmtmt.setcSw12(String.valueOf(daysBetween)+"天");
					}
				} catch (ParseException e) {
					e.printStackTrace();
					System.out.println("计算天数异常！！！");
				}
			}
		}
		System.out.println(requestObject.getData().getGettime()+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		int row = tpCgcontractmtMapper.YJdaohuo(requestObject.getData().getList());
		if(row==0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
		}
		
		List<TpCgorderst> rstList = new ArrayList<TpCgorderst>();
		for(TpCgcontractst tstlist: tstList) {
			if(tstlist.getcSw02() != null && tstlist.getcSw02() != "") {
				TpCgorderst rst = new TpCgorderst();
				rst.setcId(tstlist.getcSw02());
				rst.setcState("3");
				rstList.add(rst);
			}
		}
		//修改请购单物资状态
		if(rstList.size() > 0) {
			int row3 = tpCgorderstMapper.updateTpCgorderst(rstList);
			if(row3 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
			}
		}
		List<TpCgcontractst> cgcontractstList = new ArrayList<TpCgcontractst>();
		for(int i = 0;i < tstList.size();i++) {
			if(tstList.get(i).getcSw03() != null) {
				cgcontractstList.add(tstList.get(i));
			}
		}
		if(cgcontractstList.size() > 0) {
			System.out.println(cgcontractstList.size() + "   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
			List<TpCgcontractst> contractstList = TpCgcontractmtServiceImpl.removeDuplicateTst(cgcontractstList);
			System.out.println(contractstList.size()+"aaaaaaaaaaaaaaa");
			int a;//购买完成
			int b;//未购买
			int c;//取消购买
			TpCgordermt tpCgordermt = new TpCgordermt();
			for (TpCgcontractst tpCgcontractst : contractstList) {
				tpCgordermt.setcOrdernum(tpCgcontractst.getcSw03());
				a = tpCgorderstMapper.selectFinished(tpCgcontractst.getcSw03());
				b = tpCgorderstMapper.selectNoPurchase(tpCgcontractst.getcSw03());
				c = tpCgorderstMapper.selectCancelPurchase(tpCgcontractst.getcSw03());
				System.out.println(a + "-----"+b + "-----" +c);
				if(!(a == 0 && b == 0 && c == 0)) {
					if(a == 0 && b == 0 && c != 0) {
						tpCgordermt.setcState("3");//取消购买
					}else {
						if(a == 0 && b !=0) {
							tpCgordermt.setcState("0");//未购买
						}
						if(b == 0 && a != 0) {
							tpCgordermt.setcState("1");//购买完成
						}
						if(a != 0 && b != 0) {
							tpCgordermt.setcState("2");//购买部分
						}
					}
					int row4 = tpCgordermtMapper.updateByOrdernum(tpCgordermt);
					if(row4 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
					}
				}
				
			}
		}
		
		//修改物资的出库状态
		List<TpCgcontractst> contracList = tpCgcontractstMapper.selectByCountSt(tmt.getcConnum());
		BigDecimal num;//累计出库量
		BigDecimal gnum;// 累计到货量
		for (TpCgcontractst tpCgcontractst : contracList) {
			if(tpCgcontractst.getcSw09() == null || tpCgcontractst.getcSw09() == "") {
				tpCgcontractst.setcSw09("0");
			}
			if(tpCgcontractst.getcGroudtotalnum() == null || tpCgcontractst.getcGroudtotalnum() == "") {
				tpCgcontractst.setcGroudtotalnum("0");
			}
			num = new BigDecimal(tpCgcontractst.getcSw09());
			gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum());
			if(num.compareTo(BigDecimal.ZERO) == 0) {
				tpCgcontractst.setcSw11("0");
			}else {
				if(num.compareTo(gnum) == 0) {
					tpCgcontractst.setcSw11("1");
				}else {
					tpCgcontractst.setcSw11("2");
				}
			}
		}
		int row5 = tpCgcontractstMapper.S1S21DH(contracList);
		if(row5 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("一键到货成功").build();
	}
	//一键出船
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> YJshipnum(
			RequestObject<EmptyTag, code_fb_cg.request.YJshipnum> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//根据合同ID查询合同下所有物资
		for (TpCgcontractmt mt : requestObject.getData().getMtList()) {
			List<TpCgcontractst> stList = tpCgcontractstMapper.YJshipnum(mt.getcId());
			if(stList.size()==0) {
				return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+mt.getcConnum()+"没有物资信息").build();
			}
			//查询该合同下物资是否存在船号
			for (TpCgcontractst  st: stList) {
				if(st.getcSw06()!=null) {
					return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+st.getcConnum()+" 已出船，无需再次出船").build();
				}
			}
			//修改物资表船号
			for (TpCgcontractst tpCgcontractst : stList) {
				tpCgcontractst.setcSw06(requestObject.getData().getNum().getcSw06());
				tpCgcontractst.setcSw07(requestObject.getData().getNum().getcSw07());
			}
			int row = tpCgcontractstMapper.updateYJshipnum(stList);
			if(row==0) {
				return builder.errcode(Errcode.FailParameterError).msg("一键出船失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("一键出船成功").build();
		
	}
	//一键发票
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> YJfapiao(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgcontractmt mt: requestObject.getData().getList()) {
			List<TpCgcontractst> stList = tpCgcontractstMapper.YJshipnum(mt.getcId());
			if(stList.size()==0) {
				return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+mt.getcConnum()+"没有物资信息").build();
			}
			TpCgmoneyinvbook book = new TpCgmoneyinvbook();
			book.setcConmtid(mt.getcId());
			List<TpCgmoneyinvbook> lsit = tpCgmoneyinvbookMapper.selectConmtid(book);
			if(lsit.size() == 0) {
				return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+mt.getcConnum()+"没有发票信息").build();
			}
		}
		for(TpCgcontractmt tpCgcontractmtmt : requestObject.getData().getList()) {
			if(!"4".equals(tpCgcontractmtmt.getcState())) {
				if(tpCgcontractmtmt.getcCheckway().equals("1") && tpCgcontractmtmt.getcSignstep().equals("1")) {
					tpCgcontractmtmt.setcState("1");
				}else {
					tpCgcontractmtmt.setcState("3");
				}
			}
			
		}
		int row = tpCgcontractmtMapper.YJfapiao(requestObject.getData().getList());
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("一键发票失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("一键发票成功").build();
	}
	//一键付清
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> YJfuqing(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractmt> mtList = new ArrayList<TpCgcontractmt>();
		List<TpCgmoneybook> bookList = new ArrayList<TpCgmoneybook>();
		BigDecimal money;//实际合同金额
		BigDecimal sw01;//已付金额
		for (TpCgcontractmt mt: requestObject.getData().getList()) {
			List<TpCgcontractst> stList = tpCgcontractstMapper.YJshipnum(mt.getcId());
			if(stList.size()==0) {
				return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+mt.getcConnum()+"没有物资信息").build();
			}
			money = new BigDecimal(mt.getcConmoney());
			sw01 = new BigDecimal(mt.getcSw01());
			
			if(money.compareTo(sw01) > 0) {
				TpCgmoneybook book = new TpCgmoneybook();
				book.setcConmtid(mt.getcId());
				book.setcConnum(mt.getcConnum());
				book.setcRethings("0");
				book.setcPaytime(requestObject.getData().getGettime());
				book.setcRemark("货到票到100");
				book.setcClearmoney(ri.formatForTwo(money.subtract(sw01)));
				book.setcCreater(mt.getcCreater());
				book.setcCreatetime(requestObject.getData().getGettime());
				bookList.add(book);
			}
			String conmoney = ri.formatForTwo(new BigDecimal(mt.getcConmoney()));
			mt.setcConmoney(conmoney);
			mt.setcSw01(conmoney);
			mt.setcSw02("0.00");
			mt.setcSignstep("1");
			if(!"4".equals(mt.getcState())) {
				if(mt.getcCheckway().equals("1") && mt.getcTransway().equals("1")) {
					mt.setcState("1");
				}else {
					mt.setcState("3");
				}
			}			
			mtList.add(mt);
		}
		if(bookList.size() > 0) {
			int row1 = tpCgmoneybookMapper.ADDfukuan(bookList);
			if(row1 == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("一键付清失败").build();
			}
		}
		int row = tpCgcontractmtMapper.YJfuqing(mtList);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("一键付清失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("一键付清成功").build();
	}
	//检验是否出船
	@Transactional
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> JYSFCC(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgcontractmt mt : requestObject.getData().getList()) {
			List<TpCgcontractst> stList = tpCgcontractstMapper.YJshipnum(mt.getcId());
			if(stList.size()==0) {
				return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+mt.getcConnum()+"没有物资信息").build();
			}
			//查询该合同下物资是否存在船号
			for (TpCgcontractst  st: stList) {
				if(st.getcSw06()!=null) {
					return builder.errcode(Errcode.FailShowInfoMsg).msg("合同号："+st.getcConnum()+" 已出船，无需再次出船").build();
				}
			}
		}
		return builder.data("1").errcode(Errcode.FailShowWarningMsg).build();
	}
	//追加合同
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> ZJHT(RequestObject<EmptyTag, ZJHTrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//追加合同就是在合同物资中添加一条物资信息
		RandomId ri = new RandomId();
		String cConnum = requestObject.getData().getConList().get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");//合同号
//		String cCludecom = requestObject.getData().getConList().get(0).getcCludecom();//签订公司
//		Date cCludetime = requestObject.getData().getConList().get(0).getcCludetime();//签订时间
//		String cSupplier = requestObject.getData().getConList().get(0).getcSupplier();//供应商
//		String cSw10 = requestObject.getData().getConList().get(0).getcSw10();//采购员
//		String cConmoney = ri.formatForTwo(new BigDecimal(requestObject.getData().getConList().get(0).getcConmoney()));//合同金额
//		String cSw01 = ri.formatForTwo(new BigDecimal(requestObject.getData().getConList().get(0).getcSw01()));//已付款金额
//		String cSw02 = ri.formatForTwo(new BigDecimal(requestObject.getData().getConList().get(0).getcSw02()));//未付款金额
//		String cPayway = requestObject.getData().getConList().get(0).getcPayway();//付款方式
//		Date cDr = requestObject.getData().getConList().get(0).getcDr();//预计到货时间
//		String cSw09 = requestObject.getData().getConList().get(0).getcSw09();//送货地点
		String cCreater = requestObject.getData().getConList().get(0).getcCreater();//创建人
		//查询合同号是否已存在
		List<TpCgcontractmt> b = tpCgcontractmtMapper.selectByConnum(cConnum);
		List<TpCgorderst> rstList = new ArrayList<TpCgorderst>();
		for (OrderMtAndSt ms : requestObject.getData().getOrderList()) {
			TpCgcontractst cost = new TpCgcontractst();
			cost.setcMtid(requestObject.getData().getConList().get(0).getcId());
			cost.setcGoodsname(ms.getcGoodsname());
			cost.setcSpec(ms.getcSpec());
//			if(ms.getcUnit() != null && ms.getcUnit() != "") {
//				String dw = ms.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//				TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//				if(thority != null) {
					cost.setcUnit(ms.getcUnit());// 单位						
//				}else {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.msg("物资名称为:  "+ms.getcGoodsname()+"  的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).build();	
//				}
//			}else {
//				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//				return builder.msg("物资名称为:  "+ms.getcGoodsname()+"  的物资单位不能为空").errcode(Errcode.FailShowWarningMsg).build();	
//			}
			//合同行号
			b = tpCgcontractmtMapper.selectByConnum(requestObject.getData().getConList().get(0).getcConnum());
			if(b.size()==1) {
//				List<TpCgcontractst> num = new ArrayList<TpCgcontractst>();
				List<TpCgcontractst> num1  = tpCgcontractstMapper.selectByColine(requestObject.getData().getConList().get(0).getcConnum());
				List<TpCgcontractst> num2  = tpCgcontractstMapper.selectByCountState(requestObject.getData().getConList().get(0).getcConnum());
				int len;
				int len1;
				int len2;
				if(num2.size() == 0) {
					len = Integer.parseInt(num1.get((num1.size()-1)).getcConline());
				}else {
					len2 = Integer.parseInt(num2.get((num2.size()-1)).getcConline());
					if(num1.get((num1.size()-1)).getcConline().length() > 5) {
						len1 = Integer.parseInt(num1.get((num1.size()-1)).getcConline().substring(0, 5));
					}else {
						len1 = Integer.parseInt(num1.get((num1.size()-1)).getcConline());
					}
					if(len1 > len2) {
						len = len1;
					}else {
						len = len2;
					}
				}
			
//				if(num1.size() <= num2.size()) {
//					num = num2;
//				}else {
//					num = num1;
//				}
//				for (int i = (num.size()-1); i < num.size(); i++) {
//					String cn = num.get(i).getcConline();//已有物资的合同行号
					//int len;
//					if(cn.length() > 5) {
//						len = Integer.parseInt(cn.substring(0, 5));//已有物资合同行号的数字格式
//					}else {
//						len = Integer.parseInt(cn);//已有物资合同行号的数字格式
//					}
					if(len<10) {
						//合同行号
						if((len+1)==10) {
							cost.setcConline("000"+String.valueOf(len+1));
						}else {
							cost.setcConline("0000"+String.valueOf(len+1));
						}
					}
					if(len>9 && len<100) {
						//合同行号
						if((len+1)==100) {
							cost.setcConline("00"+String.valueOf(len+1));
						}else {
							cost.setcConline("000"+String.valueOf(len+1));
						}
					}
					if(len>99 && len<1000) {
						//合同行号
						if((len+1)==1000) {
							cost.setcConline("0"+String.valueOf(len+1));
						}else {
							cost.setcConline("00"+String.valueOf(len+1));
						}
					}
					if(len>999 && len<10000) {
						//合同行号
						cost.setcConline("0"+String.valueOf(len+1));
					}
//				}
			}
			cost.setcGoodsnum(ms.getcNum());
			cost.setcGroudtotalnum("0");
			cost.setcResiduenum(ms.getcNum());
			cost.setcArrallyorn("0");
			cost.setcState("3");
			cost.setcCheckyorn("0");
			cost.setcDr("0");
			cost.setcTimestamp(new Date());
			cost.setcCreater(cCreater);
			cost.setcCreatetime(new Date());
			cost.setcOrid(ms.getcMtid());
			cost.setcSw02(ms.getcId());
			cost.setcSw03(ms.getcOrdernum());
			cost.setcSw04("0");
			cost.setcSw05(ms.getcNo());
			cost.setcSw09("0");
			cost.setcConnum(cConnum);
			//修改物资的状态
			TpCgorderst rst = new TpCgorderst();
			rst.setcId(ms.getcId());
			rst.setcState("1");
			rst.setcSw10(cConnum);
			rstList.add(rst);
//			TpCgorderbefore list = new TpCgorderbefore();
//			list.setcOrstid(ms.getcId());
//			int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
//			if(row0 == 0) {
//				return builder.msg("追加合同失败").errcode(Errcode.FailParameterError).build();	
//			}
			int row =tpCgcontractstMapper.insertSelective(cost);
			if(row == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("追加合同失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		if(rstList.size() > 0) {
			int row0 = tpCgorderstMapper.updateTpCgorderst(rstList);
			if (row0 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("追加合同失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		return builder.msg("追加合同成功").errcode(Errcode.Success).build();	
	}
	//撤销合同物资
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> SCHTWZ(RequestObject<EmptyTag, ZJHTrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (ConMtAndSt cmas : requestObject.getData().getConList()) {
			if(cmas.getcConline().length() > 5) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("请先撤销报关导入").errcode(Errcode.FailParameterError).build();
			}
			//还原物资状态为state = 0
			TpCgorderbefore list = new TpCgorderbefore();
			list.setcOrstid(cmas.getcSw02());//物资单号
			int row0 = tpCgorderbeforeMapper.update_st_Cstate2(list.getcOrstid());
			if(row0 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
			}
			//根据合同号和合同行号查询物资信息
			TpCgcontractst cons = tpCgcontractstMapper.selectNumber_Line(cmas.getcConnum(),cmas.getcConline());
			int row1 = tpCgcontractstMapper.deleteUPDATE(cons.getcId());
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
			}
			if(cmas.getcConline() != null && cmas.getcConline() != "") {
				
				//根据合同号和合同行号查询物资到货详情
				List<TpCgreceivebook> receivebook = tpCgreceivebookMapper.selectByPrimary(cmas.getcConnum(), cmas.getcConline());
				if(receivebook.size()>0) {
					int row2 = 0;
					row2 = tpCgreceivebookMapper.deleteByPrimaryKey(receivebook);
					if(row2 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
					}
				}
				//根据合同号和合同行号查询物资出库详情
				CG_CK_M1S1 m1s1 = new CG_CK_M1S1();
				m1s1.setcConnum(cmas.getcConnum());
				m1s1.setcConline(cmas.getcConline());
				List<CG_CK_M1S1> m1List = cgCkMapper.selectByConnumline(m1s1);
				if(m1List.size() > 0) {
					int row3 = 0;
					row3 = cgCkMapper.M1S11DCG_CK_M1S1(m1List);
					if(row3 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
					}
				}
			}
		}
		//查询是否所有物资都撤销
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(requestObject.getData().getConList().get(0).getcConnum());
		if(tstlist.size() == 0) {
			int row4 = 0;
			tpCgcontractstMapper.UpdateByMtid(requestObject.getData().getConList().get(0).getcId());
			//没有物资  删除该合同
			row4 = tpCgcontractmtMapper.deleteUpdate(requestObject.getData().getConList().get(0).getcId());
			if(row4 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		return builder.msg("撤销合同物资成功").errcode(Errcode.Success).build();	
	}
	//导出合同的查询
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> OUTconmt(
			RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mtList = new ArrayList<TpCgcontractmt>();
		//1.获取对应的合同数据以及对应form表单的数据 并进行数据筛选,返回给前台
		//合同年限
		requestObject.getData().getConBean().getcConnumtime();
		for (TpCgcontractmt tpCgcontractmt : requestObject.getData().getList()) {
			TpCgcontractmt contractmt = new TpCgcontractmt ();
			//将特殊合同和一般合同区分开
			if(tpCgcontractmt.getcConnum().contains("-")) {
				int indexOf = tpCgcontractmt.getcConnum().indexOf("-");//- 第一次出现的位置
				String connumtime = requestObject.getData().getConBean().getcConnumtime();//合同年限
				//判断合同号中是否包含某个年限
				if(tpCgcontractmt.getcConnum().substring(0, indexOf).contains(connumtime)) {
					BeanUtils.copyProperties(tpCgcontractmt, contractmt);
					mtList.add(contractmt);
				}
			}
			
		}
//		for (TpCgcontractmt mt : requestObject.getData().getList()) {
//			TpCgcontractmt m = new TpCgcontractmt();
//			m.setcConnum(mt.getcConnum());
//			m.setcSupplier(mt.getcSupplier());
//			m.setcSw10(mt.getcSw10());
//		}
		if(mtList.size() == 0) {
			return builder.msg("对不起，无数据").errcode(Errcode.FailParameterError).build();	
		}
		return builder.data(mtList).msg("查询成功").errcode(Errcode.Success).build();	
	}

	public ResponseObject<EmptyTag, List<TpCgcontractmt>> selectNUM() {
		// TODO 合同号查询
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mtlist  = tpCgcontractmtMapper.selectNUM();
		if(mtlist.size()==0) {
			return builder.data(null).errcode(Errcode.FailParameterError).build();	
		}
		return builder.data(mtlist).errcode(Errcode.Success).build();	
	}

	public ResponseObject<EmptyTag, List<TpCgcontractmt>> selectSUPPLIER() {
		// TODO 供应商查询
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mtlist  = tpCgcontractmtMapper.selectSUPPLIER();
		if(mtlist.size()==0) {
			return builder.data(null).errcode(Errcode.FailParameterError).build();	
		}
		return builder.data(mtlist).errcode(Errcode.Success).build();	
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11QX(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mt = requestObject.getData().getStList();
		for (TpCgcontractmt tpCgcontractmt : mt) {
			TpCgcontractmtt tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractmt.getcId());
			if(tmtt != null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("请走撤销回拟合同！").errcode(Errcode.FailParameterError).build();	
			}
			List<TpCgcontractst> list = tpCgcontractstMapper.selectByCountSt(tpCgcontractmt.getcConnum());
			for (TpCgcontractst tpCgcontractst : list) {
				TpCgorderbefore before = new TpCgorderbefore();
				before.setcOrstid(tpCgcontractst.getcSw02());//物资单号
				int row0 = tpCgorderbeforeMapper.update_st_Cstate2(before.getcOrstid());
				if(row0 == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("合同取消失败").errcode(Errcode.FailParameterError).build();	
				}
			}
			int rwos = tpCgcontractstMapper.UpdateByMtid(tpCgcontractmt.getcId());
			if(rwos == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("合同取消失败").errcode(Errcode.FailParameterError).build();
			}
		}
		int row1 = tpCgcontractmtMapper.updateQXHT(mt);
		if(row1 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("合同取消失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(row1).msg("合同取消成功").errcode(Errcode.Success).build();
	}

	@SuppressWarnings("unchecked")
	public ResponseObject<EmptyTag, EmptyData> Q001_4(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 采购助理查询功能
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String name = requestObject.getData().getStList().get(0).getcSw10();//采购员名称
		Date startTime = requestObject.getData().getStList().get(0).getStartTime();
		Date endTime = requestObject.getData().getStList().get(0).getEndTime();
		if(name==null) {
			return builder.errcode(Errcode.FailParameterError).msg("请选择采购员进行查询").build();
		}
		TpCgauthority auth = tpCgauthorityMapper.selectCAIGOUZHULI(name);
//		List<TpCgauthority> auList = tpCgauthorityMapper.selectWHOHAVEZL();//查询出都谁有助理
		//判断该助理的直接领导是谁
		//1判断是否是主任的助理
		if(!auth.getcSw01().equals("无")) {
			List<TpCgauthority> list = tpCgauthorityMapper.selectZRXIASHU(auth.getcSw01());
			String s = "'";
			for (TpCgauthority tpCgauthority : list) {
				s += tpCgauthority.getcSubitemid() + "','";
			}
			String ss = s.substring(0, s.length()-2);
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGZL(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
		//2判断是否是经理的助理
		if(!auth.getcSw02().equals("无")) {
			List<TpCgauthority> list = tpCgauthorityMapper.selectJLXIASHU(auth.getcSw02());
			String s = "'";
			for (TpCgauthority tpCgauthority : list) {
				s += tpCgauthority.getcSubitemid() + "','";
			}
			String ss = s.substring(0, s.length()-2);
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGZL(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
		//3判断是否是副总的助理
		if(!auth.getcSw03().equals("无")) {
			List<TpCgauthority> list = tpCgauthorityMapper.selectFZJLXIASHU(auth.getcSw03());
			String s = "'";
			for (TpCgauthority tpCgauthority : list) {
				s += tpCgauthority.getcSubitemid() + "','";
			}
			String ss = s.substring(0, s.length()-2);
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGZL(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
		return null;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> Q001_5(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 主任查询
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String name = requestObject.getData().getStList().get(0).getcSw10();//主任的名字
		Date startTime = requestObject.getData().getStList().get(0).getStartTime();
		Date endTime = requestObject.getData().getStList().get(0).getEndTime();
		if(name==null) {
			return builder.errcode(Errcode.FailParameterError).msg("请选择采购员进行查询").build();
		}
		TpCgauthority auth = tpCgauthorityMapper.selectZHUREN(name);
		List<TpCgauthority> list = tpCgauthorityMapper.selectZRXIASHU(auth.getcSubitemdes());
		if(list.size()!=0) {
			String s = "'";
			for (TpCgauthority tpCgauthority : list) {
				s += tpCgauthority.getcSubitemid() + "','";
			}
			String ss = s.substring(0, s.length()-2);
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGZR(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}else {
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGZR("'"+auth.getcSubitemid()+"'",startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> Q001_6(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 经理查询
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String name = requestObject.getData().getStList().get(0).getcSw10();//经理的名字
		Date startTime = requestObject.getData().getStList().get(0).getStartTime();
		Date endTime = requestObject.getData().getStList().get(0).getEndTime();
		if(name==null) {
			return builder.errcode(Errcode.FailParameterError).msg("请选择采购员进行查询").build();
		}
		//查询经理信息
		TpCgauthority auth = tpCgauthorityMapper.selectJINGLI(name);
		List<TpCgauthority> list = tpCgauthorityMapper.selectJLXIASHU(auth.getcSubitemdes());
		if(list.size()!=0) {
			String s = "'";
			for (TpCgauthority tpCgauthority : list) {
				s += tpCgauthority.getcSubitemid() + "','";
			}
			String ss = s.substring(0, s.length()-2);
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGJL(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}else {
			List<TpCgcontractmt> mtList = tpCgcontractmtMapper.selectCGJL("'"+auth.getcSubitemid()+"'",startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
	}

	public ResponseObject<EmptyTag, List<TpCgcontractst>> ExcelConSt(
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractst> excel = requestObject.getData().getExcel();
		List<TpCgcontractmt> tmtList = requestObject.getData().getStList();
		List<TpCgcontractst> tst = new ArrayList<TpCgcontractst>();
		List<TpCgcontractst> tst1  = tpCgcontractstMapper.selectByCountSt(tmtList.get(0).getcConnum());
		List<TpCgcontractst> tst2  = tpCgcontractstMapper.selectByCountState(tmtList.get(0).getcConnum());
		int len = 0;
		if(tst1.size() <= tst2.size()) {
			tst = tst2;
		}else {
			tst = tst1;
		}
		if(tst.size() == 0) {
			len = 1;
		}else {
			for (int i = (tst.size()-1); i < tst.size(); i++) {
				String cn = tst.get(i).getcConline();//已有物资的合同行号
				if(cn.length() > 5) {
					len = Integer.parseInt(cn.substring(0, 5));//已有物资合同行号的数字格式
					len++;
				}else {
					len = Integer.parseInt(cn);//已有物资合同行号的数字格式
					len++;
				}
			}
		}
		for(TpCgcontractst contractst : excel) {
			contractst.setcMtid(tmtList.get(0).getcId());
			contractst.setcConnum(tmtList.get(0).getcConnum());
			contractst.setcState("3");
			if (contractst.getcUnit().equals("吨") || contractst.getcUnit().equals("立方米") || contractst.getcUnit().equals("米")) {
				contractst.setcGoodsnum(ri.formatToFour(new BigDecimal(contractst.getcGoodsnum())));//订购数量
			}else {
				contractst.setcGoodsnum(ri.formatForTwo(new BigDecimal(contractst.getcGoodsnum())));//订购数量
			}
			if(len<10) {
				//合同行号
				if(len==10) {
					contractst.setcConline("000"+String.valueOf(len++));
				}else {
					contractst.setcConline("0000"+String.valueOf(len++));
				}
			}
			if(len>9 && len<100) {
				//合同行号
				if(len==100) {
					contractst.setcConline("00"+String.valueOf(len++));
				}else {
					contractst.setcConline("000"+String.valueOf(len++));
				}
			}
			if(len>99 && len<1000) {
				//合同行号
				if(len==1000) {
					contractst.setcConline("0"+String.valueOf(len++));
				}else {
					contractst.setcConline("00"+String.valueOf(len++));
				}
			}
			if(len>999 && len<10000) {
				//合同行号
				contractst.setcConline("0"+String.valueOf(len++));
			}
			int row = tpCgcontractstMapper.insertSelective(contractst);
			if (row == 0) {
				return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
			}
		}
		return builder.msg("合同物资导入成功").errcode(Errcode.Success).build();
	}

	
	public ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTSTT(User user,RequestObject<EmptyTag, ConMtAndSt> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgauthority thority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		List<ConMtAndSt> list = new ArrayList<ConMtAndSt>();
		if(thority == null) {
			list = tpCgcontractmttMapper.selectByMTSTT(requestObject.getData());
//			System.out.println("审核状态："+list.get(0).getcStatexxk());
		}else {			
			requestObject.getData().setcSw10(thority.getcSubitemid());
			list = tpCgcontractmttMapper.selectByMTSTT(requestObject.getData());
//			System.out.println("审核状态："+list.get(0).getcStatexxk());
		}
		if(list.size()==0) {
			return builder.errcode(Errcode.FailShowInfoMsg).msg("查询成功，无数据").build();
		}
		return builder.data(list).errcode(Errcode.Success).msg("查询成功").build();
	}
	
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11FL(User user,RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		int row = 0;
		int srow = 0;
		TpCgcontractst tst = new TpCgcontractst();
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			if(requestObject.getData().getcSw06() == null) {
				tpCgcontractmt.setcSw15("");
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
				if(row == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
				//在合同物资添加类别及分类时间
				tst.setcSw17("");
				tst.setcMtid(tpCgcontractmt.getcId());
				srow = tpCgcontractstMapper.updateFL(tst);
				if(srow == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
			}else {
				tpCgcontractmt.setcSw15(requestObject.getData().getcSw06().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				tpCgcontractmt.setcSw16(new Date());	
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
				if(row == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
				//在合同物资添加类别及分类时间
				tst.setcSw17(requestObject.getData().getcSw06().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				tst.setcSw18(new Date());
				tst.setcMtid(tpCgcontractmt.getcId());
				srow = tpCgcontractstMapper.updateFL(tst);
				if(srow == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
			}		
		}	
		if(requestObject.getData().getcSw06() != null) {
			TbGuildata data = new TbGuildata();
			data.setName(requestObject.getData().getcSw06().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			List<TbGuildata> selectInfo = tbGuildataMapper.selectInfo(data);
			if(selectInfo.size() == 0) {
				data.setCreator(user.getUserName());
				data.setCreateTime(new Date());
				int grow = 0;
				grow = tbGuildataMapper.insertSelective(data);
				if(grow == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
				}
			}
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11BS(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		int row = 0;
		int trow = 0;
		TpCgcontractmtt tpCgcontractmtt = new TpCgcontractmtt();
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			if("0".equals(requestObject.getData().getParame())) {
				tpCgcontractmt.setcSw17("0");
				tpCgcontractmt.setcSw19("");
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
				if(row == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
				List<TpCgcontractmtt> tmtt = tpCgcontractmttMapper.selectByConnum(tpCgcontractmt.getcConnum());
				if(tmtt.size() == 1) {
					tpCgcontractmtt.setcSw14("0");
					tpCgcontractmtt.setcSw15("");
					trow = tpCgcontractmttMapper.updatecuowu(tpCgcontractmtt);
					if(trow == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
					}
				}	
			}else {
				tpCgcontractmt.setcSw17("1");
				tpCgcontractmt.setcSw19(requestObject.getData().getcSw06().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				tpCgcontractmt.setcSw18(new Date());
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
				if(row == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
				}
				List<TpCgcontractmtt> tmtt = tpCgcontractmttMapper.selectByConnum(tpCgcontractmt.getcConnum());
				if(tmtt.size() == 1) {
					tpCgcontractmtt.setcSw14("1");
					tpCgcontractmtt.setcSw15(requestObject.getData().getcSw06().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					tpCgcontractmtt.setcSw16(new Date());
					trow = tpCgcontractmttMapper.updatecuowu(tpCgcontractmtt);
					if(trow == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
					}
				}	
			}
			
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}
	
	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S11WD(
			RequestObject<EmptyTag, TpCgcontractmt> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmt tpCgcontractmt = requestObject.getData();
		List<TpCgcontractmt> tmtt = tpCgcontractmtMapper.selectwdh(tpCgcontractmt);
		if(tmtt.size()==0) {
			return builder.errcode(Errcode.FailShowInfoMsg).msg("查询成功，无数据").build();
		}
		return builder.data(tmtt).errcode(Errcode.Success).msg("查询成功").build();
	}
	
	//去重
	private static ArrayList<TpCgcontractst> removeDuplicateTst(List<TpCgcontractst> users) {
        Set<TpCgcontractst> set = new TreeSet<TpCgcontractst>(new Comparator<TpCgcontractst>() {
            public int compare(TpCgcontractst o1, TpCgcontractst o2) {
                //字符串,则按照asicc码升序排列
            	//请购单单号
                return o1.getcSw03().compareTo(o2.getcSw03());
            }
        });
        set.addAll(users);
        return new ArrayList<TpCgcontractst>(set);
    }

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11TY(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		int row = 0;
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			if("1".equals(requestObject.getData().getParame())) {
				tpCgcontractmt.setcSw20("1");
				tpCgcontractmt.setcSw21(requestObject.getData().getcSw06());
				tpCgcontractmt.setcSw22(new Date());
			}else if("2".equals(requestObject.getData().getParame())) {
				tpCgcontractmt.setcSw20("2");
				tpCgcontractmt.setcSw21(requestObject.getData().getcSw06());
				tpCgcontractmt.setcSw22(new Date());
			}else {
				tpCgcontractmt.setcSw20("");
				tpCgcontractmt.setcSw21("");
			}
			row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(row == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11CX(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		List<TpCgcontractmtt> tmttlist = new ArrayList<TpCgcontractmtt>();
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			
			//查询是否有到货详情
			List<TpCgreceivebook> receivebookList = tpCgreceivebookMapper.selectByNum(tpCgcontractmt.getcConnum());
			if(receivebookList.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("发票/付款/到货/出库有记录无法撤销").build();
			}
			//查询是否有发票
			TpCgmoneyinvbook moneyinvbook = new TpCgmoneyinvbook();
			moneyinvbook.setcConmtid(tpCgcontractmt.getcId());
			List<TpCgmoneyinvbook> moneyinvbookList = tpCgmoneyinvbookMapper.selectConmtid(moneyinvbook);
			if(moneyinvbookList.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("发票/付款/到货/出库有记录无法撤销").build();
			}
			//查询是否有付款详情
			TpCgmoneybook moneybook = new TpCgmoneybook();
			moneybook.setcConmtid(tpCgcontractmt.getcId());
			List<TpCgmoneybook> data = tpCgmoneybookMapper.selectForMoneyBook(moneybook);
			if(data.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("发票/付款/到货/出库有记录无法撤销").build();
			}
			//查询是否有出库详情
			CG_CK_M1S1 cgck = new CG_CK_M1S1();
			cgck.setcConnum(tpCgcontractmt.getcConnum());
			List<CG_CK_M1S1> cgckList = cgCkMapper.M1S11QCG_CK_M1S1(cgck);
			if(cgckList.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("发票/付款/到货/出库有记录无法撤销").build();
			}
			
			tmttlist = tpCgcontractmttMapper.selectByConnum(tpCgcontractmt.getcConnum());
//			if(tmttlist.isEmpty()) {
//				return builder.errcode(Errcode.FailParameterError).msg("该合同没有拟合同请直接取消合同！！！！").build();
//			}else if(tmttlist.get(0)){
//		
//				
//			}
			
			
			
			if(tmttlist.size() == 1) {
				tmttlist.get(0).setcStatexxk("xxk07");
				tmttlist.get(0).setcSw19(requestObject.getData().getcSw06());
				int row = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmttlist.get(0));
				if(row >= 0) {
					return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
				}
				int mrow = tpCgcontractmtMapper.deleteByPrimaryKey(tpCgcontractmt.getcId());
				if(mrow >= 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
				}
				List<TpCgcontractst> st = tpCgcontractstMapper.selectByConAll(tpCgcontractmt.getcConnum());
//				for (TpCgcontractst tpCgcontractst : st) {
				if(st.size() > 0) {			
					for (TpCgcontractst tpCgcontractst : st) {
						TpCgorderst tp = new TpCgorderst();
						//修改请购单中的采购状态-已转合同
						if(tpCgcontractst.getcSw02()!= null && !"".equals(tpCgcontractst.getcSw02()) ) {
							if(tpCgcontractst.getcSw02().indexOf("/")!=-1) {
								String[] split = tpCgcontractst.getcSw02().split("/");								
								for (String string : split) {
									tp.setcId(string);
									tp.setcState("6");
									tpCgorderstMapper.updateByPrimaryKeySelective(tp);
								}
							}else {
								tp.setcId(tpCgcontractst.getcSw02());
								tp.setcState("6");
								tpCgorderstMapper.updateByPrimaryKeySelective(tp);
							}
						}
						
						
						int row1 = tpCgcontractstMapper.deleteByPrimaryKey(tpCgcontractst.getcId());
						if(row1 >= 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
						}
					}
					
				}
			}
			TpConrevocare conrevocare = new TpConrevocare();
			conrevocare.setcConnum(tpCgcontractmt.getcConnum());
			List<TpConrevocare> selectByConnum = tpConrevocareMapper.selectByConnum(conrevocare);
			for (TpConrevocare tpConrevocare : selectByConnum) {
				if(!"cx03".equals(tpConrevocare.getcState())) {
					tpConrevocare.setcState("cx03");
				}
				tpConrevocareMapper.updateByPrimaryKeySelective(tpConrevocare);
			}
		}
		return builder.errcode(Errcode.Success).msg("撤销成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11HTCL(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgcontractmtt element : requestObject.getData().getTpCgcontractmtt()) {
			//已处理
			element.setcSw14("0");
		}
		//修改拟合同的合同标识
		int rown = tpCgcontractmttMapper.M1S11UCG_MNHT_M1S13(requestObject.getData().getTpCgcontractmtt());
		if(rown>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("已处理未成功！！！").errcode(Errcode.FailParameterError).build();	
		}
		//修改正式合同合同标识
		int rowns = tpCgcontractmtMapper.M1S11UCG_MNHT_M1S13(requestObject.getData().getTpCgcontractmtt());
		if(rowns>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("已处理未成功！！！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("已处理成功！！！！").errcode(Errcode.Success).build();
	}
 
	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11TYSD(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			tpCgcontractmt.setcSw26(requestObject.getData().getcSw26());
			System.out.println("时间：：："+tpCgcontractmt.getcSw26());
			tpCgcontractmt.setcSw24(requestObject.getData().getcSw24());
			int row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(row >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("添加验收单成功！！！").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11TZBJ(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> tmtlist = requestObject.getData().getList();
		for (TpCgcontractmt tpCgcontractmt : tmtlist) {
			tpCgcontractmt.setcSw27(requestObject.getData().getcSw27());
			tpCgcontractmt.setcSw25(requestObject.getData().getcSw25());
			int row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(row >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("添加质保金成功！！！").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> AppRevocation(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> stList = requestObject.getData().getStList();
		TpConrevocare vocare = requestObject.getData().getConrevocare();
		TpConrevocare conrevocare = new TpConrevocare();
		conrevocare.setcConnum(stList.get(0).getcConnum());
		List<TpConrevocare> selectByConnum = tpConrevocareMapper.selectByConnum(conrevocare);
		for (TpConrevocare tpConrevocare : selectByConnum) {
			if(!"cx03".equals(tpConrevocare.getcState())) {
				return builder.errcode(Errcode.FailParameterError).msg("已有正在撤销的合同").build();
			}
		}		
		conrevocare.setcYnpayment(vocare.getcYnpayment());
		conrevocare.setcYnstorage(vocare.getcYnstorage());
		conrevocare.setcRemark(vocare.getcRemark());		
		conrevocare.setcCreater(user.getUserName());
		conrevocare.setcCreatetime(new Date());
		conrevocare.setcState("cx01");
		
		int row = tpConrevocareMapper.insertSelective(conrevocare);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("申请失败！").build();
		}
		return builder.errcode(Errcode.Success).msg("申请成功！").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> updateRevo1(User user,
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpConrevocare vocare = requestObject.getData().getConrevocare();
		TpConrevocare tpConrevocare = tpConrevocareMapper.selectByPrimaryKey(vocare.getcId());
		if("cx03".equals(tpConrevocare.getcState())) {
			return builder.errcode(Errcode.FailParameterError).msg("已完成！").build();
		}
		tpConrevocare.setcState("cx02");
		int row = tpConrevocareMapper.updateByPrimaryKeySelective(tpConrevocare);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("处理失败！").build();
		}
		return builder.errcode(Errcode.Success).msg("处理成功！").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> updateRevo2(User user,
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpConrevocare vocare = requestObject.getData().getConrevocare();
		TpConrevocare tpConrevocare = tpConrevocareMapper.selectByPrimaryKey(vocare.getcId());
		if("cx03".equals(tpConrevocare.getcState())) {
			return builder.errcode(Errcode.FailParameterError).msg("已完成！").build();
		}
		tpConrevocare.setcState("cx03");
		int row = tpConrevocareMapper.updateByPrimaryKeySelective(tpConrevocare);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("操作失败！").build();
		}
		return builder.errcode(Errcode.Success).msg("操作成功！").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocare(User user,
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpConrevocare vocare = requestObject.getData().getConrevocare();
		List<TpConrevocare> list;
		if(vocare != null) {
			list = tpConrevocareMapper.selectByConnum(vocare);
		}else {			
			list = tpConrevocareMapper.selectAll();
		}
		return builder.data(list).errcode(Errcode.Success).msg("查询成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocareNum(User user,
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpConrevocare vocare = requestObject.getData().getConrevocare();
		List<TpConrevocare> list = new ArrayList<>();
		if(vocare == null) {
			list = tpConrevocareMapper.selectRevocareNum();
		}
		return builder.data(list).errcode(Errcode.Success).msg("查询成功").build();
	}

	

	

}

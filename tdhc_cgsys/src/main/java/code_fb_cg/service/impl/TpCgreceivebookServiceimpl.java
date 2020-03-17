package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_CK_M1S1;
import code_fb.mapper.CG_CK_Mapper;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_cg.request.RbookList;
import code_fb_cg.request.ReveiceBookList;
import code_fb_cg.service.TpCgreceivebookService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
@Service("tpCgreceivebookService")
public class TpCgreceivebookServiceimpl implements TpCgreceivebookService {

	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	@Qualifier("cgCkMapper")
	public CG_CK_Mapper cgCkMapper;
	
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> insertFinashi(RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgreceivebook book = requestObject.getData().getBookList().get(0);
		TpCgcontractst tst = new TpCgcontractst();
		TpCgcontractst tst2 = new TpCgcontractst();
		tst.setcConnum(book.getcConnum());
		tst.setcConline(book.getcConline());
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByConSTone(tst);
		if(stList.get(0).getcState().equals("5")) {
			return builder.errcode(Errcode.FailParameterError).msg("物资已被锁定").build();
		}
		BigDecimal goodsnum = new BigDecimal(stList.get(0).getcGoodsnum());//订购数量
		BigDecimal groudtotalnum = new BigDecimal(stList.get(0).getcGroudtotalnum());//累计到货量
		BigDecimal residuenum = new BigDecimal(stList.get(0).getcResiduenum());//剩余数量
		BigDecimal arrivalnum;//到货量
		//当到货量未负数时
		if(book.getcArrivalnum().indexOf("-")==0) {
			arrivalnum = new BigDecimal(book.getcArrivalnum().replace("-", ""));
//			if(groudtotalnum.compareTo(arrivalnum) == -1) {//累计到货量小于到货量时
//				return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
//			}
			tst2.setcId(stList.get(0).getcId());
			if(stList.get(0).getcUnit().equals("吨") || stList.get(0).getcUnit().equals("立方米") || stList.get(0).getcUnit().equals("米")) {
				tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum)));//累积到货量-到货量
				tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum)));//剩余数量 + 到货量
			}else {
				tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum)));//累积到货量-到货量
				tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum)));//剩余数量 + 到货量
			}
			int row = tpCgcontractstMapper.updateByPrimaryKeySelective(tst2);
			if(row == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
			}
			int row1 = tpCgreceivebookMapper.insertSelective(book);
			if(row1 != 0) {
				return builder.errcode(Errcode.Success).msg("到货成功").build();
			}
		}
		//当到货量未正数时
		arrivalnum = new BigDecimal(book.getcArrivalnum());
//		if(goodsnum.compareTo(groudtotalnum.add(arrivalnum)) == -1) {//订购数量  < 累计到货量 + 到货量  
//			return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
//		}
		tst2.setcId(stList.get(0).getcId());
		tst2.setcState("3");
		if(stList.get(0).getcUnit().equals("吨") || stList.get(0).getcUnit().equals("立方米") || stList.get(0).getcUnit().equals("米")) {
			tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
			if((residuenum.subtract(arrivalnum)).compareTo(BigDecimal.ZERO) < 0 && (residuenum.subtract(arrivalnum)).compareTo(new BigDecimal(-1)) > 0) {
				tst2.setcResiduenum((residuenum.subtract(arrivalnum)).toString());//剩余数量 - 到货量
			}else {
				tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
			}
		}else {
			tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
			if((residuenum.subtract(arrivalnum)).compareTo(BigDecimal.ZERO) < 0 && (residuenum.subtract(arrivalnum)).compareTo(new BigDecimal(-1)) > 0) {
				tst2.setcResiduenum((residuenum.subtract(arrivalnum)).toString());//剩余数量 - 到货量
			}else {
				tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
			}
		}
		int row = tpCgcontractstMapper.updateByPrimaryKeySelective(tst2);
		if(row == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
		}
		int row2 = this.updapetmtCheckway(book.getcConnum(),requestObject.getData().getList().get(0));
		if(row2 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
		}
		if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
			book.setcArrivalnum(ri.formatToFour(new BigDecimal(book.getcArrivalnum())));
		}else {
			book.setcArrivalnum(ri.formatForTwo(new BigDecimal(book.getcArrivalnum())));
		}
		int row1 = tpCgreceivebookMapper.insertSelective(book);
		if(row1 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
		}
		return builder.errcode(Errcode.Success).msg("到货成功").build();
	}

	public ResponseObject<EmptyTag, List<TpCgreceivebook>> selectByNum(
			RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgreceivebook> book = tpCgreceivebookMapper.selectByNum(requestObject.getData().getList().get(0).getcConnum());
		return builder.data(book).errcode(Errcode.Success).msg("到货成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S51U(RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		// 合同管理页面 到货详情的修改功能
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgreceivebook> bookList = requestObject.getData().getBookList();
		List<TpCgcontractst> tstList = new ArrayList<TpCgcontractst>();
		TpCgcontractst tst = new TpCgcontractst();
		tst.setcConnum(bookList.get(0).getcConnum());
		tst.setcConline(bookList.get(0).getcConline());
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByConSTone(tst);
		if(stList.get(0).getcState().equals("5")) {
			return builder.errcode(Errcode.FailParameterError).msg("物资已被锁定").build();
		}
		TpCgreceivebook book = tpCgreceivebookMapper.selectByCId(bookList.get(0).getcId());
		BigDecimal groudtotalnum = new BigDecimal(stList.get(0).getcGroudtotalnum());//累计到货量
		BigDecimal residuenum = new BigDecimal(stList.get(0).getcResiduenum());//剩余数量
		BigDecimal arrivalnum;//修改前到货量
		BigDecimal arrivalnum2;//到货量
		TpCgcontractst tst2 = new TpCgcontractst();
		
		if(!book.getcArrivalnum().equals(bookList.get(0).getcArrivalnum())) {
			
			//当到货量为负数
			if(bookList.get(0).getcArrivalnum().indexOf("-") == 0) {
				arrivalnum2 = new BigDecimal(bookList.get(0).getcArrivalnum().replace("-", ""));
				//当修改前到货量为负数
				if(book.getcArrivalnum().indexOf("-") == 0) {
					arrivalnum = new BigDecimal(book.getcArrivalnum().replace("-", ""));
	//				if((groudtotalnum.add(arrivalnum)).compareTo(arrivalnum2) == -1) {
	//					return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
	//				}
					if(arrivalnum.compareTo(arrivalnum2) == -1) {//修改前到货量 < 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum2.subtract(arrivalnum))));//累计到货量 - （到货量 - 修改前到货量）
							tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum2.subtract(arrivalnum))));//剩余数量 + （到货量 + 修改前到货量）
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum2.subtract(arrivalnum))));//累计到货量 -  （到货量 - 修改前到货量）
							tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum2.subtract(arrivalnum))));//剩余数量 + （到货量 + 修改前到货量）
						}
					}
					if(arrivalnum.compareTo(arrivalnum2) == 1) {//修改前到货量 > 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum.subtract(arrivalnum2))));//累计到货量 +（修改前到货量 - 到货量）
							tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum.subtract(arrivalnum2))));//剩余数量 - （修改前到货量 - 到货量）
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum.subtract(arrivalnum2))));//累计到货量 +（修改前到货量 - 到货量）
							tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum.subtract(arrivalnum2))));//剩余数量 - （修改前到货量 - 到货量）
						}
					}
					if(arrivalnum.compareTo(arrivalnum2) == 0) {//修改钱到货量 == 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(new BigDecimal(stList.get(0).getcGroudtotalnum())));//值不变
							tst2.setcResiduenum(ri.formatToFour(new BigDecimal(stList.get(0).getcResiduenum())));//值不变
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(new BigDecimal(stList.get(0).getcGroudtotalnum())));//值不变
							tst2.setcResiduenum(ri.formatForTwo(new BigDecimal(stList.get(0).getcResiduenum())));//值不变
						}
					}
				}else {
					//当修改前到货量为正数
					arrivalnum = new BigDecimal(book.getcArrivalnum());
	//				if((groudtotalnum.subtract(arrivalnum)).compareTo(arrivalnum2) == -1) {
	//					return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
	//				}
					if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
						tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum).subtract(arrivalnum2)));//累积到货量 - 修改前到货量 - 到货量
						tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum).add(arrivalnum2)));//剩余到货量 + 修改前到货量 + 到货量
					}else {
						tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum).subtract(arrivalnum2)));//累积到货量 - 修改前到货量 - 到货量
						tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum).add(arrivalnum2)));//剩余到货量 + 修改前到货量 + 到货量
					}
				}
			}else {
				//当到货量为正数
				arrivalnum2 = new BigDecimal(bookList.get(0).getcArrivalnum());
				if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
					bookList.get(0).setcArrivalnum(ri.formatToFour(new BigDecimal(bookList.get(0).getcArrivalnum())));
				}else {
					bookList.get(0).setcArrivalnum(ri.formatForTwo(new BigDecimal(bookList.get(0).getcArrivalnum())));
				}
				//当修改前到货量为负数
				if(book.getcArrivalnum().indexOf("-") == 0) {
					arrivalnum = new BigDecimal(book.getcArrivalnum().replace("-", ""));
	//				if((residuenum.subtract(arrivalnum)).compareTo(arrivalnum2) == -1) {
	//					return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
	//				}
					if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
						tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum).add(arrivalnum2)));//累计到货量 + 修改前到货量 + 到货量
						tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum).subtract(arrivalnum2)));//剩余数量 - 修改前到货量 - 到货量
					}else {
						tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum).add(arrivalnum2)));//累计到货量 + 修改前到货量 + 到货量
						tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum).subtract(arrivalnum2)));//剩余数量 - 修改前到货量 - 到货量
					}
				}else {
					//当修改钱到货量为正数
					arrivalnum = new BigDecimal(book.getcArrivalnum());
	//				if((residuenum.add(arrivalnum)).compareTo(arrivalnum2) == -1) {
	//					return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
	//				}
					if(arrivalnum.compareTo(arrivalnum2) == -1) {//当修改前到货量  < 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum2.subtract(arrivalnum))));//累计到货量 + （到货量 - 修改前到货量）
							if((residuenum.subtract(arrivalnum2.subtract(arrivalnum))).compareTo(BigDecimal.ZERO) < 0 && (residuenum.subtract(arrivalnum2.subtract(arrivalnum))).compareTo(new BigDecimal(-1)) > 0) {
								tst2.setcResiduenum((residuenum.subtract(arrivalnum2.subtract(arrivalnum))).toString());//剩余数量 - （到货量 - 修改前到货量）
							}else {
								tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum2.subtract(arrivalnum))));//剩余数量 - （到货量 - 修改前到货量）
							}
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum2.subtract(arrivalnum))));//累计到货量 + （到货量 - 修改前到货量）						
							if((residuenum.subtract(arrivalnum2.subtract(arrivalnum))).compareTo(BigDecimal.ZERO) < 0 && (residuenum.subtract(arrivalnum2.subtract(arrivalnum))).compareTo(new BigDecimal(-1)) > 0) {
								tst2.setcResiduenum((residuenum.subtract(arrivalnum2.subtract(arrivalnum))).toString());//剩余数量 - （到货量 - 修改前到货量）
							}else {
								tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum2.subtract(arrivalnum))));//剩余数量 - （到货量 - 修改前到货量）
							}
						}
					}
					if(arrivalnum.compareTo(arrivalnum2) == 1) {//当修改前到货量  > 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum.subtract(arrivalnum2))));//累计到货量 - （修改前到货量 - 到货量）
							if((residuenum.add(arrivalnum.subtract(arrivalnum2))).compareTo(BigDecimal.ZERO) < 0 && (residuenum.add(arrivalnum.subtract(arrivalnum2))).compareTo(new BigDecimal(-1)) > 0) {
								tst2.setcResiduenum((residuenum.add(arrivalnum.subtract(arrivalnum2))).toString());//剩余数量 + （修改前到货量 - 到货量）
							}else {
								tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum.subtract(arrivalnum2))));//剩余数量 + （修改前到货量 - 到货量）
							}
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum.subtract(arrivalnum2))));//累计到货量 - （修改前到货量 - 到货量）
							if((residuenum.add(arrivalnum.subtract(arrivalnum2))).compareTo(BigDecimal.ZERO) < 0 && (residuenum.add(arrivalnum.subtract(arrivalnum2))).compareTo(new BigDecimal(-1)) > 0) {
								tst2.setcResiduenum((residuenum.add(arrivalnum.subtract(arrivalnum2))).toString());//剩余数量 + （修改前到货量 - 到货量）
							}else {
								tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum.subtract(arrivalnum2))));//剩余数量 + （修改前到货量 - 到货量）
							}
						}
					}
					if(arrivalnum.compareTo(arrivalnum2) == 0) {//当修改前到货量  == 到货量
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
							tst2.setcGroudtotalnum(ri.formatToFour(new BigDecimal(stList.get(0).getcGroudtotalnum())));//值不变
							if(Integer.parseInt(stList.get(0).getcResiduenum()) < 0 && Integer.parseInt(stList.get(0).getcResiduenum()) > -1) {
								tst2.setcResiduenum(stList.get(0).getcResiduenum());
							}else {
								tst2.setcResiduenum(ri.formatToFour(new BigDecimal(stList.get(0).getcResiduenum())));//值不变
							}
						}else {
							tst2.setcGroudtotalnum(ri.formatForTwo(new BigDecimal(stList.get(0).getcGroudtotalnum())));//值不变
							if(Integer.parseInt(stList.get(0).getcResiduenum()) < 0 && Integer.parseInt(stList.get(0).getcResiduenum()) > -1) {
								tst2.setcResiduenum(stList.get(0).getcResiduenum());
							}else {
								tst2.setcResiduenum(ri.formatForTwo(new BigDecimal(stList.get(0).getcResiduenum())));//值不变
							}
							
						}
					}
				}
			}
			tst2.setcId(stList.get(0).getcId());
			tst2.setcState("3");
			tstList.add(tst2);
			int row = tpCgcontractstMapper.S1S21DH(tstList);
			if(row == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
			}
			int row2 = this.updapetmtCheckway(bookList.get(0).getcConnum(),requestObject.getData().getList().get(0));
			if(row2 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
			}
		}
		
		
		int row1 = tpCgreceivebookMapper.S1S51U(bookList);
		if(row1 ==0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		return builder.errcode(Errcode.Success).msg("修改成功").build();
	}
	// 合同管理页面 到货详情的删除功能
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(
			RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		BIGString bigs = new BIGString();
		List<TpCgreceivebook> book = requestObject.getData().getBookList();
		Map<String, List<TpCgreceivebook>> map = new HashMap<String, List<TpCgreceivebook>>();
		
		
//		List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();//把合并后的到货详情放到这个集合
		List<TpCgcontractst> tstlist = new ArrayList<TpCgcontractst>();
		TpCgcontractst tst = new TpCgcontractst();
		tst.setcConnum(book.get(0).getcConnum());
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByConSTone(tst);//根据合同号查询所有物资
		for(TpCgcontractst contractst : stList) {
			for(TpCgreceivebook receivebook : book) {
				if(contractst.getcConline().equals(receivebook.getcConline())) {
					if(contractst.getcState().equals("5")) {
						return builder.errcode(Errcode.FailParameterError).msg("和同行号为:"+contractst.getcConline()+"的物资已被锁定").build();
					}
				}
			}
			
		}
//		BigDecimal goodsnum;//订购数量
		BigDecimal groudtotalnum;//累计到货量
		BigDecimal residuenum;//剩余数量
		BigDecimal arrivalnum;//到货量
//		BigDecimal arrivalnum2;//到货量
		try {
			map = bigs.groupBillingDataByExcpBatchCodecConline(book);
		} catch (Exception e) {
			System.out.println("分组异常！！！");
			e.printStackTrace();
		}
		Set<String> keySet = map.keySet();
		Iterator<String> it = keySet.iterator();
		while (it.hasNext()) {
			String key = it.next();
			List<TpCgreceivebook> value = map.get(key);
			System.out.println(key);
			tst.setcConline(key);
			List<TpCgcontractst> contractstList = tpCgcontractstMapper.selectByConSTone(tst);
			for(TpCgreceivebook receivebook : value) {
				groudtotalnum = new BigDecimal(contractstList.get(0).getcGroudtotalnum());
				residuenum = new BigDecimal(contractstList.get(0).getcResiduenum());
				if(receivebook.getcArrivalnum().indexOf("-") == 0) {//当到货量为负数时
					arrivalnum = new BigDecimal(receivebook.getcArrivalnum().replace("-", ""));						
					if(receivebook.getcSw03().equals("吨") || receivebook.getcSw03().equals("立方米") || receivebook.getcSw03().equals("米")) {
						contractstList.get(0).setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
						contractstList.get(0).setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
					}else {
						contractstList.get(0).setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
						contractstList.get(0).setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
					}
					tstlist.add(contractstList.get(0));
				}else {	
					//当到货量为正数是
					arrivalnum = new BigDecimal(receivebook.getcArrivalnum());					
					if(receivebook.getcSw03().equals("吨") || receivebook.getcSw03().equals("立方米") || receivebook.getcSw03().equals("米")) {
						contractstList.get(0).setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum)));//累计到货量 - 到货量
						contractstList.get(0).setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum)));//剩余数量 + 到货量
					}else {
						contractstList.get(0).setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum)));//累计到货量 - 到货量
						contractstList.get(0).setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum)));//剩余数量 + 到货量
					}
					contractstList.get(0).setcState("3");
					tstlist.add(contractstList.get(0));
				}
			}
		}
		
		
		
//		for(TpCgreceivebook bok : book) {//把要删除的到货详情中 合同行号相同的进行合并 
//			boolean isok = true;
//			if(booklist.size() > 0) {
//				for(TpCgreceivebook bk : booklist) {
//					if(bk.getcConline().equals(bok.getcConline())) {//当合同行号相同时，合并两条数据的到货量
//						if(bk.getcArrivalnum().indexOf("-") == 0) {
//							arrivalnum = new BigDecimal(bk.getcArrivalnum().replace("-", ""));
//							if(bok.getcArrivalnum().indexOf("-") == 0) {
//								arrivalnum2 = new BigDecimal(bok.getcArrivalnum().replace("-", ""));
//								bk.setcArrivalnum("-"+arrivalnum.add(arrivalnum2).toString());
//							}else {
//								arrivalnum2 = new BigDecimal(bok.getcArrivalnum());
//								if(arrivalnum.compareTo(arrivalnum2) == -1) {
//									bk.setcArrivalnum(arrivalnum2.subtract(arrivalnum).toString());
//								}
//								if(arrivalnum.compareTo(arrivalnum2) == 1) {
//									bk.setcArrivalnum("-" + arrivalnum.subtract(arrivalnum2).toString());
//								}
//								if(arrivalnum.compareTo(arrivalnum2) == 0) {
//									bk.setcArrivalnum("0");
//								}
//							}
//						}else {
//							arrivalnum = new BigDecimal(bk.getcArrivalnum());
//							if(bok.getcArrivalnum().indexOf("-") == 0) {
//								arrivalnum2 = new BigDecimal(bok.getcArrivalnum().replace("-", ""));
//								if(arrivalnum.compareTo(arrivalnum2) == -1) {
//									bk.setcArrivalnum("-" + arrivalnum2.subtract(arrivalnum).toString());
//								}
//								if(arrivalnum.compareTo(arrivalnum2) == 1) {
//									bk.setcArrivalnum(arrivalnum.subtract(arrivalnum2).toString());
//								}
//								if(arrivalnum.compareTo(arrivalnum2) == 0) {
//									bk.setcArrivalnum("0");
//								}
//							}else {
//								arrivalnum2 = new BigDecimal(bok.getcArrivalnum());
//								bk.setcArrivalnum(arrivalnum.add(arrivalnum2).toString());
//							}
//						}
//						isok = false;
//						break;
//					}
//				}
//				if(isok) {
//					booklist.add(bok);
//				}
//			}else {
//				booklist.add(bok);
//			}
//		}
//		for(TpCgreceivebook bookli : booklist) {
//			TpCgcontractst tst2 = new TpCgcontractst();
//			for(int i = 0; i <= stList.size()-1; i++) {
//				groudtotalnum = new BigDecimal(stList.get(i).getcGroudtotalnum());
//				residuenum = new BigDecimal(stList.get(i).getcResiduenum());
//				if(bookli.getcConline().equals(stList.get(i).getcConline())) {//当物质详情的和同行号 == 物资和同行号时
//					if(bookli.getcArrivalnum().indexOf("-") == 0) {//当到货量为负数时
//						arrivalnum = new BigDecimal(bookli.getcArrivalnum().replace("-", ""));						
//						if(stList.get(i).getcUnit().equals("吨") || stList.get(i).getcUnit().equals("立方米")) {
//							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
//							tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
//						}else {
//							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum)));//累计到货量 + 到货量
//							tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum)));//剩余数量 - 到货量
//						}
//						tst2.setcId(stList.get(i).getcId());
//						tstlist.add(tst2);
//					}else {	
//						//当到货量为正数是
//						arrivalnum = new BigDecimal(bookli.getcArrivalnum());					
//						if(stList.get(i).getcUnit().equals("吨") || stList.get(i).getcUnit().equals("立方米")) {
//							tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum)));//累计到货量 - 到货量
//							tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum)));//剩余数量 + 到货量
//						}else {
//							tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum)));//累计到货量 - 到货量
//							tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum)));//剩余数量 + 到货量
//						}
//						tst2.setcId(stList.get(i).getcId());
//						tst2.setcState("3");
//						tstlist.add(tst2);
//					}
//					break;
//				}
//			}
//					
//		}
		int row = tpCgcontractstMapper.S1S21DH(tstlist);
		if(row == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		int row2 = this.updapetmtCheckway(book.get(0).getcConnum(),requestObject.getData().getList().get(0));
		if(row2 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		int row1 = tpCgreceivebookMapper.deleteByPrimaryKey(book);
		if(row1 ==0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		return builder.errcode(Errcode.Success).msg("删除成功").build();
	}
	//判断物资是否到齐
	public int updapetmtCheckway(String connum,TpCgcontractmt tpCgcontractmtmt) {
		TpCgcontractst tst = new TpCgcontractst();
		tst.setcConnum(connum);
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByConSTone(tst);
		TpCgcontractmt tmt = new TpCgcontractmt();
		BigDecimal goodsnum;//订购数量
		BigDecimal groudtotalnum;//累计到货量
		BigDecimal residuenum;//剩余数量
		int row = 0;
		boolean isok = false;
		if(stList.size() > 0) {
			for(TpCgcontractst tsts : stList) {
				goodsnum = new BigDecimal(tsts.getcGoodsnum());
				groudtotalnum = new BigDecimal(tsts.getcGroudtotalnum());
				residuenum = new BigDecimal(tsts.getcResiduenum());
				if(groudtotalnum.compareTo(new BigDecimal("0")) != 0) {
					isok = !isok;
					break;
				}
			}			
			tmt.setcId(stList.get(0).getcMtid());
			if(isok) {
				tmt.setcCheckway("2");
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
			}else{
				tmt.setcCheckway("0");
				row = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
			}
		}
		return row;
	}

	public ResponseObject<EmptyTag, EmptyData> S1S51DHSJ(RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgreceivebook> booklist = requestObject.getData().getBookList();
		for(TpCgreceivebook book : booklist) {
			book.setcDeltime(requestObject.getData().getDeltime());
		}
		int row1 = tpCgreceivebookMapper.S1S51U(booklist);
		if(row1 ==0) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		return builder.errcode(Errcode.Success).msg("修改成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S51CK(RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgreceivebook> booklist = requestObject.getData().getBookList();
		List<CG_CK_M1S1> cklist = new ArrayList<CG_CK_M1S1>();
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(booklist.get(0).getcConnum());
		List<TpCgcontractst> contractstlist = new ArrayList<TpCgcontractst>();
		BigDecimal num;//累计出库量
		BigDecimal gnum;// 到货量
		BigDecimal goodsnum;//订购数量
		BigDecimal gnums;// 累计到货量
		boolean isok;
		String ship = requestObject.getData().getShipno();
		for(TpCgreceivebook book : booklist) {
			for(TpCgcontractst tst : tstlist) {
				if(book.getcConline().equals(tst.getcConline())) {
					gnum = new BigDecimal(book.getcArrivalnum());
					gnums = new BigDecimal(tst.getcGroudtotalnum());
					if(tst.getcSw09() == null || tst.getcSw09() == "") {
						tst.setcSw09("0");
					}
					num = new BigDecimal(tst.getcSw09());
					if(gnums.compareTo(num.add(gnum)) < 0) {
						return builder.msg("出库失败,不能大于已到货量").errcode(Errcode.FailParameterError).build();
					}
					if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米") || book.getcSw03().equals("米")) {
						tst.setcSw09(ri.formatToFour(num.add(gnum)));
					}else {
						tst.setcSw09(ri.formatForTwo(num.add(gnum)));
					}
					if(tst.getcSw06() != null && tst.getcSw06() != "") {
						if(tst.getcSw06().indexOf("/") == -1) {
							if(!tst.getcSw06().equals(ship)) {
								tst.setcSw06(tst.getcSw06() + "/" + ship);
							}
						}else {
							String[] shipno = tst.getcSw06().split("/");
							isok = true;
							for(String st : shipno) {
								if(st.equals(ship)) {
									isok = !isok;
									break;
								}
							}
							if(isok) {
								tst.setcSw06(tst.getcSw06() + "/" + ship);
							}
						}
					}else {
						tst.setcSw06(ship);
					}
					
					contractstlist.add(tst);
					break;
				}
			}		
			CG_CK_M1S1 ck = new CG_CK_M1S1();
			ck.setcConnum(book.getcConnum());//合同号
			ck.setcConline(book.getcConline());//合同行号
			ck.setcMtid(book.getcConmtid());//合同主键
			ck.setcGoodsname(book.getcSw02());//物资名称
			ck.setcSw01(book.getcGoodscleck());//报关物资名称
			ck.setcSpec(book.getcSw04());//规格型号
			ck.setcUnit(book.getcSw03());//单位
			ck.setcOuttime(requestObject.getData().getDeltime());//出库时间
			ck.setcCreater(book.getcModifier());//创建人
			ck.setcCreatetime(book.getcModifytime());//创建时间
			ck.setcOutsum(book.getcArrivalnum());//出库量
			if(requestObject.getData().getShipno() != null && requestObject.getData().getShipno() != "") {
				ck.setcShipno(requestObject.getData().getShipno());//船号
			}
			cklist.add(ck);
			
		}
		int row0 = 0;
		row0 = cgCkMapper.insertall(cklist);
		if(row0 == 0) {
			return builder.msg("出库失败").errcode(Errcode.FailParameterError).build();
		}
		
		if(contractstlist.size() > 0) {
			for(TpCgcontractst contractst : contractstlist) {
				num = new BigDecimal(contractst.getcSw09());
				goodsnum = new BigDecimal(contractst.getcGoodsnum());
				gnums = new BigDecimal(contractst.getcGroudtotalnum());
				if("1".equals(contractst.getcState()) || "5".equals(contractst.getcState())) {
					if(num.compareTo(gnums) == 0) {
						contractst.setcSw11("1");
					}else {
						contractst.setcSw11("2");
					}
				}else {
					if(gnums.compareTo(goodsnum) > 0) {
						if(num.compareTo(gnums) == 0) {
							contractst.setcSw11("1");
						}else {
							contractst.setcSw11("2");
						}
					}
					if(gnums.compareTo(goodsnum) == 0) {
						if(num.compareTo(gnums) == 0) {
							contractst.setcSw11("1");
						}else {
							contractst.setcSw11("2");
						}
					}
					if(gnums.compareTo(goodsnum) < 0 && num.compareTo(BigDecimal.ZERO) > 0) {
						contractst.setcSw11("2");
					}
				}
			}
			int row1 = tpCgcontractstMapper.S1S21DH(contractstlist);
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("出库失败").errcode(Errcode.FailParameterError).build();
			}
		}	
		return builder.errcode(Errcode.Success).msg("出库成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpCgreceivebook>> derivedData(
			RequestObject<EmptyTag, ReveiceBookList> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgreceivebook> book = tpCgreceivebookMapper.selectByCreatetime(requestObject.getData().getStartTime(),requestObject.getData().getEndTime());
		return builder.data(book).errcode(Errcode.Success).msg("查询成功").build();
	}

}

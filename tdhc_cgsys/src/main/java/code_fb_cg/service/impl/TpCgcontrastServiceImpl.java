package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontrast;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontrastMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_cg.request.TpCgcontrastrequest;
import code_fb_cg.service.TpCgcontrastService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("tpCgcontrastService")
public class TpCgcontrastServiceImpl implements TpCgcontrastService {

	@Autowired
	private TpCgcontrastMapper tpCgcontrastMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> Dbdaoru(User user,RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		//导入数据
		List<TpCgcontrast> contrastlist = requestObject.getData().getContrastlist();
		List<TpCgcontrast> trastlist = new ArrayList<>();
		int id = 1;//主键
		BigDecimal finalarrnum;//最终入库量
		BigDecimal arrivalnum;//合同到货量
		//导入数据进行循环
		for (TpCgcontrast tpCgcontrast : contrastlist) {
			if(tpCgcontrast.getcConnum() == null) {
				continue;
			}
			tpCgcontrast.setcId("" + id++);
			List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(tpCgcontrast.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("比对合同的条数:"+tmtlist.size());
			if(tmtlist.size() > 0) {
				
				tpCgcontrast.setcMtid(tmtlist.get(0).getcId());//合同主键
				
				tpCgcontrast.setcCheckway(tmtlist.get(0).getcCheckway());//到货状态
				tpCgcontrast.setcSw01(tmtlist.get(0).getcSw10());//采购员
				tpCgcontrast.setcGettime(tmtlist.get(0).getcGettime());//最后到货时间
				tpCgcontrast.setcCreater(user.getUserName());
				tpCgcontrast.setcCreatetime(new Date());
				List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(tpCgcontrast.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));		
				arrivalnum = new BigDecimal(0) ; //到货数量
				if(tstlist.size() > 0) {
					for (TpCgcontractst tpCgcontractst : tstlist) {
						if(tpCgcontractst.getcGroudtotalnum() != null) {
							if(tpCgcontractst.getcRemark() != null && tpCgcontractst.getcRemark().indexOf("赠品仓库") != -1) {
								continue;
							}
							arrivalnum = arrivalnum.add(new BigDecimal(tpCgcontractst.getcGroudtotalnum()));
						}					
					}
					tpCgcontrast.setcArrivalnum(arrivalnum.toString());//合同到货量
				}
				if(tpCgcontrast.getcFinalarrnum() != null) {
					finalarrnum = new BigDecimal(tpCgcontrast.getcFinalarrnum());
					//判断合同到货量 与 最终到货入库量是否一样 
					if(finalarrnum.compareTo(arrivalnum) == 0) {
						tpCgcontrast.setcState("dhl02");//dhl02 到货量一样
					}else {
						tpCgcontrast.setcState("dhl01");//dhl02 到货量不一样
					}
				}else {
					tpCgcontrast.setcState("dhl01");//dhl02 到货量不一样
				}
				
			}else {
				tpCgcontrast.setcState("dhl03");//dhl02 没有此合同
			}
			trastlist.add(tpCgcontrast);
		}
		if(trastlist.size() > 0) {
			int rowd = tpCgcontrastMapper.deleteAll();
			if(rowd >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
    			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
			}
			int pointsDataLimit = 100;//限制条数,【修改这里】
			int size = trastlist.size();
			if(size > pointsDataLimit) {//判断是否有必要分批
				int part = size / pointsDataLimit;//分批数
				System.out.println("共有 ： " + size + "条，！" + " 分为 ：" + part + "批");
				for (int i = 0; i < part; i++) {
					List<TpCgcontrast> tast = trastlist.subList(0, pointsDataLimit);
					int row = tpCgcontrastMapper.Batchinsert(tast);
					if(row >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
		    			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
					}
					System.out.println("第" + (i + 1) + "次添加");
					trastlist.subList(0, pointsDataLimit).clear();
				}
				if(!trastlist.isEmpty()) {
					int row = tpCgcontrastMapper.Batchinsert(trastlist);
					if(row >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
		    			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
					}
				}
			}else {
				int row = tpCgcontrastMapper.Batchinsert(trastlist);
				if(row >= 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
	    			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
				}
			}
		}
		return builder.errcode(Errcode.Success).msg("导入成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21Q(
			RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontrast tpCgcontrast = requestObject.getData().getTpCgcontrast();
		if(tpCgcontrast.getcConnum() != null) {
			List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(tpCgcontrast.getcConnum());	
			if(tstlist.size() > 0) {
				return builder.data(tstlist).errcode(Errcode.Success).msg("查询成功").build();
			}
		}
		return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpCgreceivebook>> selectList(
			RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontrast tpCgcontrast = requestObject.getData().getTpCgcontrast();
		if(tpCgcontrast.getcConnum() != null) {
			List<TpCgreceivebook> book = tpCgreceivebookMapper.selectByNum(tpCgcontrast.getcConnum());
			return builder.data(book).errcode(Errcode.Success).msg("查询成功").build();
		}
		return builder.errcode(Errcode.Success).msg("查询失败").build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpCgcontrast>> M1S1Q(
			RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontrast tpCgcontrast = requestObject.getData().getTpCgcontrast();
		List<TpCgcontrast> rastlist = tpCgcontrastMapper.selectByConnum(tpCgcontrast);
		return builder.data(rastlist).errcode(Errcode.Success).msg("查询成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> YJdaohuo(User user,RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgcontrast tpCgcontrast = requestObject.getData().getTpCgcontrast();


		List<TpCgcontractst> tstList = tpCgcontractstMapper.selectByCountSt(tpCgcontrast.getcConnum());
		List<TpCgreceivebook> booktList = new ArrayList<TpCgreceivebook>();
		
		BigDecimal goodsnum;//订购数量
		BigDecimal groudtotalnum;//到货数量
		for(TpCgcontractst tst : tstList) {
			goodsnum = new BigDecimal(tst.getcGoodsnum());
			groudtotalnum = new BigDecimal(tst.getcGroudtotalnum());
			if(!tst.getcState().equals("5")) {
				tst.setcState("1");
				if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米")) {
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
					if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米")) {
						book.setcArrivalnum(ri.formatToFour(goodsnum.subtract(groudtotalnum)));
					}else {
						book.setcArrivalnum(ri.formatForTwo(goodsnum.subtract(groudtotalnum)));
					}
					book.setcDeltime(requestObject.getData().getGettime());
					book.setcSw03(tst.getcUnit());
					book.setcSw04(tst.getcSpec());
					book.setcCreater(user.getUserName());
					book.setcCreatetime(new Date());
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
		List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(tpCgcontrast.getcConnum());
		for(TpCgcontractmt tpCgcontractmtmt : tmtlist) {
			tpCgcontractmtmt.setcGettime(requestObject.getData().getGettime());
			if(tpCgcontractmtmt.getcTransway().equals("1") && tpCgcontractmtmt.getcSignstep().equals("1")) {
				tpCgcontractmtmt.setcState("1");
			}else {
				tpCgcontractmtmt.setcState("3");
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
		int row = tpCgcontractmtMapper.YJdaohuo(tmtlist);
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
			List<TpCgcontractst> contractstList = TpCgcontrastServiceImpl.removeDuplicateTst(cgcontractstList);
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
		List<TpCgcontractst> contractst = tpCgcontractstMapper.selectByCountSt(tpCgcontrast.getcConnum());
		BigDecimal num;//累计出库量
		BigDecimal gnum;// 累计到货量
		for (TpCgcontractst tpCgcontractst : contractst) {
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
		int row5 = tpCgcontractstMapper.S1S21DH(contractst);
		if(row5 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
		}
		int roow = updateCgcontrast(tpCgcontrast);
		if(roow >= 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("一键到货失败").build();
		}
		return builder.data(row).errcode(Errcode.Success).msg("一键到货成功").build();
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
		public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21DH(
				RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
			ResponseObjectBuilder builder = ResponseObjectBuilder.create();
			RandomId ri = new RandomId();
			TpCgcontrast tpCgcontrast = requestObject.getData().getTpCgcontrast();
			List<TpCgcontractst> st = requestObject.getData().getExcel();
			List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
			List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();
			BigDecimal num; //订货数量
			BigDecimal gnum;// 累计到货量
			BigDecimal rnum;// 剩余数量
			BigDecimal cnum;// 累计出库量
			for (TpCgcontractst tpCgcontractst : st) {
				cnum = new BigDecimal(tpCgcontractst.getcSw09());
				if(cnum.compareTo(BigDecimal.ZERO) > 0) {//此判断是在出库完成状态下到货时，出库状态改为出库部分
					tpCgcontractst.setcSw11("2");
				}
				if(tpCgcontractst.getcQuadealline() ==null || tpCgcontractst.getcQuadealline() == "") {
					
					if(!BIGString.isNumeric(tpCgcontractst.getcGoodsnum().trim())) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("订货数量格式不正确！").errcode(Errcode.FailParameterError).build();
					}
					num = new BigDecimal(tpCgcontractst.getcGoodsnum()); //订货数量
					gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum());// 累计到货量
					if (tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米")) {
						tpCgcontractst.setcGoodsnum(ri.formatToFour(num));
						tpCgcontractst.setcGroudtotalnum(ri.formatToFour(num));
						tpCgcontractst.setcResiduenum(ri.formatToFour(new BigDecimal("0")));
					}else {
						tpCgcontractst.setcGoodsnum(ri.formatForTwo(num));
						tpCgcontractst.setcGroudtotalnum(ri.formatForTwo(num));
						tpCgcontractst.setcResiduenum(ri.formatForTwo(new BigDecimal("0")));
					}
					tpCgcontractst.setcState("1");//订购数量 == 累计到货量  状态改为已到齐
					newlist.add(tpCgcontractst);
					rnum = num.subtract(gnum);
					if(rnum.compareTo(new BigDecimal("0")) == 1) {
						TpCgreceivebook book = new TpCgreceivebook();
						book.setcConmtid(tpCgcontractst.getcMtid());//到货记录合同主键
						book.setcConnum(tpCgcontractst.getcConnum());//合同号
						book.setcConline(tpCgcontractst.getcConline());//合同行号
						if (tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米")) {
							book.setcArrivalnum(ri.formatToFour(rnum));//到货量=本次到货量
						}else {
							book.setcArrivalnum(ri.formatForTwo(rnum));//到货量=本次到货量
						}
						book.setcSw03(tpCgcontractst.getcUnit());//单位
						book.setcDeltime(requestObject.getData().getGettime());//到货时间
						book.setcSw02(tpCgcontractst.getcGoodsname());//物资名称
						book.setcSw04(tpCgcontractst.getcSpec());//规格型号
						book.setcGoodscleck(tpCgcontractst.getcSw08());//报关名称
						book.setcCreater(tpCgcontractst.getcModifier());//创建人
						book.setcCreatetime(tpCgcontractst.getcModifytime());//创建时间
						book.setcSw06(requestObject.getData().getcSw06());//到货港口
						booklist.add(book);
					}
				}else {
					TpCgreceivebook book = new TpCgreceivebook();
					book.setcConmtid(tpCgcontractst.getcMtid());//到货记录合同主键
					book.setcConnum(tpCgcontractst.getcConnum());//合同号
					book.setcConline(tpCgcontractst.getcConline());//合同行号
					if(tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米")) {
						book.setcArrivalnum(ri.formatToFour(new BigDecimal(tpCgcontractst.getcQuadealline())));//到货量=本次到货量
					}else {
						book.setcArrivalnum(ri.formatForTwo(new BigDecimal(tpCgcontractst.getcQuadealline())));//到货量=本次到货量
					}
					book.setcSw03(tpCgcontractst.getcUnit());//单位
					book.setcDeltime(requestObject.getData().getGettime());//到货时间
					book.setcSw02(tpCgcontractst.getcGoodsname());//物资名称
					book.setcGoodscleck(tpCgcontractst.getcSw08());//报关名称
					book.setcSw04(tpCgcontractst.getcSpec());//规格型号
					book.setcCreater(tpCgcontractst.getcModifier());//创建人
					book.setcCreatetime(new Date());//创建时间
					book.setcSw06(requestObject.getData().getcSw06());//到货港口
					BigDecimal benci;//本次到货数量
					if(!BIGString.vd(tpCgcontractst.getcGoodsnum()) && !BIGString.vd(tpCgcontractst.getcGroudtotalnum()) ) {
						if(tpCgcontractst.getcGoodsnum().indexOf(" ") != -1) {
							num = new BigDecimal(tpCgcontractst.getcGoodsnum().replaceAll(" ", ""));//合同数量
						}else {
							num = new BigDecimal(tpCgcontractst.getcGoodsnum());//合同数量
						}
						if(tpCgcontractst.getcGroudtotalnum().indexOf(" ") != -1) {
							gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum().replaceAll(" ", ""));//累计到货量
						}else {
							gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum());//累计到货量
						}
						if(tpCgcontractst.getcQuadealline().indexOf(" ") != -1) {
							benci = new BigDecimal(tpCgcontractst.getcQuadealline().replaceAll(" ", ""));//本次到货数量
						}else {
							benci = new BigDecimal(tpCgcontractst.getcQuadealline());//本次到货数量
						}
						rnum = num.subtract(gnum.add(benci));
						tpCgcontractst.setcQuadealline("");//本次到货量，每次填写后都清空该值
						if(tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米")) {
							tpCgcontractst.setcGoodsnum(ri.formatToFour(num));//订购数量
							tpCgcontractst.setcGroudtotalnum(ri.formatToFour(gnum.add(benci)));//累计到货量
							if(rnum.compareTo(BigDecimal.ZERO) < 0 && rnum.compareTo(new BigDecimal(-1)) > 0) {
								tpCgcontractst.setcResiduenum(rnum.toString());
							}else {
								tpCgcontractst.setcResiduenum(ri.formatToFour(rnum));
							}
						}else {
							tpCgcontractst.setcGoodsnum(ri.formatForTwo(num));//订购数量
							tpCgcontractst.setcGroudtotalnum(ri.formatForTwo(gnum.add(benci)));//累计到货量
							if(rnum.compareTo(BigDecimal.ZERO) < 0 && rnum.compareTo(new BigDecimal(-1)) > 0) {
								tpCgcontractst.setcResiduenum(rnum.toString());
							}else {
								tpCgcontractst.setcResiduenum(ri.formatForTwo(rnum));
							}
						}
						if(rnum.compareTo(BigDecimal.ZERO) == 0) {
							tpCgcontractst.setcState("1");
						}else if(rnum.compareTo(BigDecimal.ZERO) < 0){
							tpCgcontractst.setcState("5");
						}
					}else {
						tpCgcontractst.setcGoodsnum(tpCgcontractst.getcGoodsnum());
						tpCgcontractst.setcGroudtotalnum(tpCgcontractst.getcGroudtotalnum());
					}
					newlist.add(tpCgcontractst);
					booklist.add(book);
				}
			}
			if(booklist.size()!=0) {
				int row1 = tpCgreceivebookMapper.insertFinashi(booklist);
				if(row1 ==0) {
					return builder.errcode(Errcode.FailParameterError).msg("记录到货信息失败").build();
				}
			}
			int cons = tpCgcontractstMapper.S1S21DH(newlist);
			if (cons == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("到货失败").errcode(Errcode.FailParameterError).build();
			}
			
			TpCgcontractmt tmt = new TpCgcontractmt();

			int row2 = 0;			
			tmt.setcId(st.get(0).getcMtid());	
			tmt.setcCheckway("2");
			row2 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
			if(row2 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("到货失败").errcode(Errcode.FailParameterError).build();
			}
			int roow = updateCgcontrast(tpCgcontrast);
			if(roow >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("到货失败").build();
			}
			return builder.data(cons).msg("到货成功").errcode(Errcode.Success).build();
		}

		@Override
		public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21SD(
				RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
			ResponseObjectBuilder builder = ResponseObjectBuilder.create();
			List<TpCgcontractst> st = requestObject.getData().getExcel();
			List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
			BigDecimal ck;//累计出库量
			BigDecimal sy;//剩余数量
			BigDecimal dh;// 累计到货量
			for(TpCgcontractst tpCgcontractst : st) {
				ck = new BigDecimal(tpCgcontractst.getcSw09());
				sy = new BigDecimal(tpCgcontractst.getcResiduenum());
				dh = new BigDecimal(tpCgcontractst.getcGroudtotalnum());
				TpCgcontractst tst = new TpCgcontractst();
				tst.setcId(tpCgcontractst.getcId());		
				tst.setcState("5");			
				if(sy.compareTo(BigDecimal.ZERO) > 0 && ck.compareTo(dh) == 0) {
					tst.setcSw11("1");
				}
				newlist.add(tst);
			}
			int cons = tpCgcontractstMapper.S1S21DH(newlist);
			if(cons == 0) {
				return builder.msg("锁定失败").errcode(Errcode.FailParameterError).build();
			}
			return builder.data(cons).msg("锁定成功").errcode(Errcode.Success).build();
		}

		@Override
		public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21QXSD(
				RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
			ResponseObjectBuilder builder = ResponseObjectBuilder.create();
			List<TpCgcontractst> st = requestObject.getData().getExcel();
			List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
			for(TpCgcontractst tpCgcontractst : st) {
				TpCgcontractst tst = new TpCgcontractst();
				tst.setcId(tpCgcontractst.getcId());
				tst.setcState("3");
				newlist.add(tst);
			}
			int cons = tpCgcontractstMapper.S1S21DH(newlist);
			if(cons == 0) {
				return builder.msg("取消锁定失败").errcode(Errcode.FailParameterError).build();
			}
			TpCgcontractmt tmt = new TpCgcontractmt();
			tmt.setcId(requestObject.getData().getTpCgcontrast().getcMtid());
			tmt.setcCheckway("2");
			tmt.setcState("3");
			int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("取消锁定失败").errcode(Errcode.FailParameterError).build();
			}
			requestObject.getData().getTpCgcontrast().setcCheckway("2");
			int row = tpCgcontrastMapper.updateByPrimaryKeySelective(requestObject.getData().getTpCgcontrast());
			if(row >= 0 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("取消锁定失败").errcode(Errcode.FailParameterError).build();
			}
			return builder.data(cons).msg("取消锁定成功").errcode(Errcode.Success).build();
		}

		@Override
		public ResponseObject<EmptyTag, EmptyData> S1S51U(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
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
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
								tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.subtract(arrivalnum2.subtract(arrivalnum))));//累计到货量 - （到货量 - 修改前到货量）
								tst2.setcResiduenum(ri.formatToFour(residuenum.add(arrivalnum2.subtract(arrivalnum))));//剩余数量 + （到货量 + 修改前到货量）
							}else {
								tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.subtract(arrivalnum2.subtract(arrivalnum))));//累计到货量 -  （到货量 - 修改前到货量）
								tst2.setcResiduenum(ri.formatForTwo(residuenum.add(arrivalnum2.subtract(arrivalnum))));//剩余数量 + （到货量 + 修改前到货量）
							}
						}
						if(arrivalnum.compareTo(arrivalnum2) == 1) {//修改前到货量 > 到货量
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
								tst2.setcGroudtotalnum(ri.formatToFour(groudtotalnum.add(arrivalnum.subtract(arrivalnum2))));//累计到货量 +（修改前到货量 - 到货量）
								tst2.setcResiduenum(ri.formatToFour(residuenum.subtract(arrivalnum.subtract(arrivalnum2))));//剩余数量 - （修改前到货量 - 到货量）
							}else {
								tst2.setcGroudtotalnum(ri.formatForTwo(groudtotalnum.add(arrivalnum.subtract(arrivalnum2))));//累计到货量 +（修改前到货量 - 到货量）
								tst2.setcResiduenum(ri.formatForTwo(residuenum.subtract(arrivalnum.subtract(arrivalnum2))));//剩余数量 - （修改前到货量 - 到货量）
							}
						}
						if(arrivalnum.compareTo(arrivalnum2) == 0) {//修改钱到货量 == 到货量
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
					if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
						if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
							if(book.getcSw03().equals("吨") || book.getcSw03().equals("立方米")) {
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
				int row2 = this.updapetmtCheckway(bookList.get(0).getcConnum());
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
			int roow = updateCgcontrast(requestObject.getData().getTpCgcontrast());
			if(roow >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
			}
			return builder.errcode(Errcode.Success).msg("修改成功").build();
		}

		@Override
		public ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(
				RequestObject<EmptyTag, TpCgcontrastrequest> requestObject) {
			ResponseObjectBuilder builder = ResponseObjectBuilder.create();
			RandomId ri = new RandomId();
			BIGString bigs = new BIGString();
			List<TpCgreceivebook> book = requestObject.getData().getBookList();
			Map<String, List<TpCgreceivebook>> map = new HashMap<String, List<TpCgreceivebook>>();
			
			
//			List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();//把合并后的到货详情放到这个集合
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
//			BigDecimal goodsnum;//订购数量
			BigDecimal groudtotalnum;//累计到货量
			BigDecimal residuenum;//剩余数量
			BigDecimal arrivalnum;//到货量
//			BigDecimal arrivalnum2;//到货量
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
						if(receivebook.getcSw03().equals("吨") || receivebook.getcSw03().equals("立方米")) {
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
						if(receivebook.getcSw03().equals("吨") || receivebook.getcSw03().equals("立方米")) {
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
			
			
			

			int row = tpCgcontractstMapper.S1S21DH(tstlist);
			if(row == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
			}
			int row2 = this.updapetmtCheckway(book.get(0).getcConnum());
			if(row2 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
			}
			int row1 = tpCgreceivebookMapper.deleteByPrimaryKey(book);
			if(row1 ==0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
			}
			int roow = updateCgcontrast(requestObject.getData().getTpCgcontrast());
			if(roow >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
			}
			return builder.errcode(Errcode.Success).msg("删除成功").build();
		}
		//判断物资是否到齐
		public int updapetmtCheckway(String connum) {
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

		private int updateCgcontrast(TpCgcontrast tpCgcontrast) {
			List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(tpCgcontrast.getcConnum());
			if(tmtlist.size() > 0) {
				List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByCountSt(tpCgcontrast.getcConnum());		
				BigDecimal arrivalnum = new BigDecimal(0) ; //到货数量
				if(tstlist.size() > 0) {
					for (TpCgcontractst tpCgcontractst : tstlist) {
						if(tpCgcontractst.getcGroudtotalnum() != null) {
							arrivalnum = arrivalnum.add(new BigDecimal(tpCgcontractst.getcGroudtotalnum()));
						}					
					}
					tpCgcontrast.setcArrivalnum(arrivalnum.toString());//合同到货量
				}
				tpCgcontrast.setcCheckway(tmtlist.get(0).getcCheckway());//到货状态
				tpCgcontrast.setcGettime(tmtlist.get(0).getcGettime());//最后到货时间
				if(tpCgcontrast.getcFinalarrnum() != null && arrivalnum.compareTo(new BigDecimal(tpCgcontrast.getcFinalarrnum())) == 0) {
					tpCgcontrast.setcState("dhl02");
				}else {
					tpCgcontrast.setcState("dhl01");
				}
			}
			int row = tpCgcontrastMapper.updateByPrimaryKeySelective(tpCgcontrast);
			return row;
		}
}

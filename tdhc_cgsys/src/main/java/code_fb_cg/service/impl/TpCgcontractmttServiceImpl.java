package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgordermt2;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TbCgcontractMapper;
import code_fb_cg.mapper.TbDocumeformMapper;
import code_fb_cg.mapper.TbDocumeformsonMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgmoneybookMapper;
import code_fb_cg.mapper.TpCgmoneyinvbookMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.OrderMtAndSt;
import code_fb_cg.request.ZJHTrequest;
import code_fb_cg.service.TpCgcontractmttService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service("tpCgcontractmttService")
public class TpCgcontractmttServiceImpl implements TpCgcontractmttService {

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
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TbCgcontractMapper tbCgcontractMapper;
	@Autowired
	private TbDocumeformMapper tbDocumeformMapper;
	@Autowired
	private TbDocumeformsonMapper tbDocumeformsonMapper;			
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
		
		//防错处理
				String msg = "合同物资信息进行了更改";
				//BusinessJudge()方法放回值有5个
				//返回值 0  直接放行  不影响代码
				//返回值1  结束执行后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
				//放回值2  结束执行后续代码 并返回 “信息卡已提交，无法操作！”
				//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
				//返回值4 sql语句执行出错
				int fd = BusinessJudge2(cConnum,msg);
				if(fd == 1) {
					return builder.errcode(Errcode.FailParameterError).msg("无法追加!!!请撤回信息卡！！！").build();
				}else if(fd == 2) {
					return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法追加！！！！").build();
				}else if(fd == 4) {
					return builder.errcode(Errcode.FailParameterError).msg("追加失败").build();
				}
				
		List<TpCgorderst> rstList = new ArrayList<TpCgorderst>();
		List<TpCgcontractstt> num1  = tpCgcontractsttMapper.selectByColine(requestObject.getData().getConList().get(0).getcConnum());
		List<TpCgcontractstt> num2  = tpCgcontractsttMapper.selectByCountState(requestObject.getData().getConList().get(0).getcConnum());
		
		System.out.println(requestObject.getData().getConList().get(0).getcConnum());
		System.out.println(num1.size());
		System.out.println(num2.size());
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
		for (OrderMtAndSt ms : requestObject.getData().getOrderList()) {
			TpCgcontractstt cost = new TpCgcontractstt();
			cost.setcMtid(requestObject.getData().getConList().get(0).getcId());
			cost.setcGoodsname(ms.getcGoodsname());//物资名称
			cost.setcCuspec(ms.getcSpec());//规格型号
//			if(ms.getcUnit() != null && ms.getcUnit() != "") {
//				String dw = ms.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//				TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//				if(thority != null) {
			cost.setcUnit(ms.getcUnit());// 单位		
			cost.setcSw08(ms.getcGoodsname());//报关名称
			cost.setcSpec(ms.getcSpec());//报关规格
			cost.setcUnitspec(ms.getcUnit());//报关单位
//				}else {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.msg("物资名称为:  "+ms.getcGoodsname()+"  的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).build();	
//				}
//			}else {
//				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//				return builder.msg("物资名称为:  "+ms.getcGoodsname()+"  的物资单位不能为空").errcode(Errcode.FailShowWarningMsg).build();	
//			}
			//合同行号
//			int ab = tpCgcontractmttMapper.selectByConnum(requestObject.getData().getConList().get(0).getcConnum()).size();
//			if(ab == 1) {
//				List<TpCgcontractst> num = new ArrayList<TpCgcontractst>();
				
			
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
					len++;
//				}
//			}
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
			cost.setcConnum(cConnum);
			//修改物资的状态
			TpCgorderst rst = new TpCgorderst();
			rst.setcId(ms.getcId());
			rst.setcState("6");
			rst.setcSw10(cConnum);
			rstList.add(rst);
//			TpCgorderbefore list = new TpCgorderbefore();
//			list.setcOrstid(ms.getcId());
//			int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
//			if(row0 == 0) {
//				return builder.msg("追加合同失败").errcode(Errcode.FailParameterError).build();	
//			}
			int row =tpCgcontractsttMapper.insertSelective(cost);
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
	

		if(fd == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").build();
		}
		return builder.msg("追加合同成功").errcode(Errcode.Success).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> SCHTWZ(RequestObject<EmptyTag, ZJHTrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (ConMtAndSt cmas : requestObject.getData().getConList()) {
			//还原物资状态为state = 0
			TpCgorderbefore list = new TpCgorderbefore();
			list.setcOrstid(cmas.getcSw02());//物资单号
			int row0 = tpCgorderbeforeMapper.update_st_Cstate2(list.getcOrstid());
			if(row0 == 0) {
				return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
			}
			//根据合同号和合同行号查询物资信息
			TpCgcontractstt cons = tpCgcontractsttMapper.selectNumber_Line(cmas.getcConnum(),cmas.getcConline());
			int row1 = tpCgcontractsttMapper.deleteByPrimaryKey(cons.getcId());
			if(row1 == 0) {
				return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		//查询是否所有物资都撤销
				List<TpCgcontractstt> tstlist = tpCgcontractsttMapper.selectByCountSt(requestObject.getData().getConList().get(0).getcConnum());
				if(tstlist.size() == 0) {
					int row4 = 0;
					//没有物资  删除该合同
					row4 = tpCgcontractmttMapper.deleteByPrimaryKey(requestObject.getData().getConList().get(0).getcId());
					if(row4 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();	
					}
				}
		return builder.msg("撤销合同物资成功").errcode(Errcode.Success).build();	
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11CX(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmtt> tmtt = requestObject.getData().getTpCgcontractmtt();
		List<TpCgcontractmt> tmttlist = tpCgcontractmtMapper.selectByConnum(tmtt.get(0).getcConnum());
		if(!tmttlist.isEmpty()) {
			return builder.msg("正式合同已存在,请联系相关人员撤回正式合同，才能撤回拟合同！！！！").errcode(Errcode.FailParameterError).build();	
		}
		/*List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(tmtt.get(0).getcConnum());
		if(seletByeCconnum.size()>0) {
			return builder.msg("请联系相关人员删除信息卡信息，才能撤销拟合同！！！！").errcode(Errcode.FailParameterError).build();
		}*/
//		List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(tmtt.get(0).getcConnum());
		for (TpCgcontractmtt tpCgcontractmtt : tmtt) {
			List<TpCgcontractstt> tstt =tpCgcontractsttMapper.selectByColine(tpCgcontractmtt.getcConnum());
			
			System.out.println(tstt.size());
			if(tstt.size() > 0) {
				for (TpCgcontractstt tpCgcontractstt : tstt) {
					// 修改请购单中的采购状态-已转合同
					if (!"".equals(tpCgcontractstt.getcSw02()) && tpCgcontractstt.getcSw02() != null) {
						if (tpCgcontractstt.getcSw02().indexOf("/") != -1) {
							String[] split = tpCgcontractstt.getcSw02().split("/");
							System.out.println("截取::::::"+Arrays.toString(split));
							for (String string : split) {
								int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
								if (row0 > 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();// 事物回滚
									return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();
								}
							}
						} else {
							System.out.println("物资id:::::"+tpCgcontractstt.getcSw02());
							int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgcontractstt.getcSw02());
							if (row0 > 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();// 事物回滚
								return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();
							}
						}
					}

					//撤回合同物资
					int row1 = tpCgcontractsttMapper.deleteByPrimaryKey(tpCgcontractstt.getcId());
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
					}
				}		
			}
			List<TpCgcontractstt> tst = tpCgcontractsttMapper.selectFakedeath(tpCgcontractmtt.getcConnum());
			if(tst.size()>0) {
				for (TpCgcontractstt tpCgcontractstt : tst) {
					int row1 = tpCgcontractsttMapper.deleteByPrimaryKey(tpCgcontractstt.getcId());
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
					}
				}
			}
			//撤回合同主表信息，
			int row2 = tpCgcontractmttMapper.deleteByPrimaryKey(tpCgcontractmtt.getcId());
			if(row2 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
			}
			//撤回供应商，签订合同公司等信息
			List<TbCgcontract> selectBycConnum = tbCgcontractMapper.selectBycConnum(tpCgcontractmtt);
			if(selectBycConnum.size()>0) {
				int deleteBycConnum = tbCgcontractMapper.deleteBycConnum(tpCgcontractmtt.getcConnum());
				if(deleteBycConnum > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
			//删除信息卡信息 
			List<TbDocumeform> form = tbDocumeformMapper.seletByeCconnum(tpCgcontractmtt.getcConnum());
			if(form.size() > 0) {
				List<TbDocumeformson> formson = tbDocumeformsonMapper.M1S21Q4(form.get(0));
				if(formson.size() > 0) {
					int rows = tbDocumeformsonMapper.M1S21D(formson);
					if(rows > 0) {
						return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
					}
				}
				int rown = tbDocumeformMapper.deleteByPrimaryKey(form.get(0).getcId());
				if(rown > 0) {
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
		}
		return builder.msg("撤销合同成功").errcode(Errcode.Success).build();	
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> ExcelConSt(
			RequestObject<EmptyTag, code_fb_cg.request.ExcelCONST> requestObject) throws Exception{
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		BIGString bigs = new BIGString();
		List<TpCgcontractstt> excel = requestObject.getData().getTsttlist();// excel表中数据
		List<TpCgcontractstt> hblist = new ArrayList<TpCgcontractstt>();// 用来存放需要合的导入信息
		List<TpCgcontractstt> remark = new ArrayList<TpCgcontractstt>();// 用来存放需要合并在一起购买的导入信息
		
		
		for (TpCgcontractstt tpCgcontractstt : excel) {
			List<TpCgcontractstt> CShh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(tpCgcontractstt.getcConnum()
					.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null, null, null);
			if (CShh.size() == 0) {
				// 1.1.1根据合同号没查询到物资
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("合同号：错误")
						.errcode(Errcode.FailParameterError).build();
			}
			TpCgcontractstt tstt= tpCgcontractsttMapper.selectNumber_Line(tpCgcontractstt.getcConnum(), tpCgcontractstt.getcConline());
			if(tstt != null && tstt.getcQid() != null) {
				return builder.msg("不能对原物资进行合并或删除").errcode(Errcode.FailParameterError).build();
			}
		}
		//防错处理
		String msg = "合同物资信息进行了更改";
		//BusinessJudge()方法放回值有5个
		//返回值 0  直接放行  不影响代码
		//返回值1  立马结束  后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
		//放回值2  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “信息卡已提交过，请于信息卡人员联系！”
		//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
		//返回值4 sql语句执行出错
		int fd = BusinessJudge(excel.get(0).getcConnum().trim(),msg);
		if(fd == 1) {
			return builder.errcode(Errcode.FailParameterError).msg("无法导入，请撤回信息卡！！！").build();
		}else if(fd == 2) {
			return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法导入").build();
		}else if(fd == 4) {
			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
		}
		
		
		
		int s = excel.size();
		for (int i = 0; i < s; i++) {
			// 进行三步判断确定下来（合同号、合同行号、原货物名称）不能为空
			// 第一步判断合同号不能为空
			if (excel.get(i).getcConnum() == null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号】不能为空").errcode(Errcode.FailParameterError)
						.build();
			}
			// 第二步判断合同行号不能为空
			if (excel.get(i).getcConline() == null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同行号】不能为空").errcode(Errcode.FailParameterError)
						.build();
			}
			if(excel.get(i).getcGoodsnum() != null && !BIGString.isNumeric(excel.get(i).getcGoodsnum().trim())) {
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【订购数量】不正确").errcode(Errcode.FailParameterError)
						.build();
			}
			if(excel.get(i).getcPrice() != null && !BIGString.isNumeric(excel.get(i).getcPrice().trim())) {
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【含税单价】不正确").errcode(Errcode.FailParameterError)
						.build();
			}
			if(excel.get(i).getcSumprice() != null && !BIGString.isNumeric(excel.get(i).getcSumprice().trim())) {
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【含税总价】不正确").errcode(Errcode.FailParameterError)
						.build();
			}
			// 第三步判断原货物名称不能为空
//			if (excel.get(i).getcGoodsname() == null) {
//				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【物资名称】不能为空").errcode(Errcode.FailParameterError)
//						.build();
//			}
			//判断单位不能为空以及单位正确
//			if(excel.get(i).getcUnit() == null) {
//				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【单位】不能为空").errcode(Errcode.FailParameterError)
//						.build();
//			}else {
//				String dw = excel.get(i).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//				TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//				if(thority == null) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" + (i + 2) + "-行," + "【单位】不正确，请重新确认").build();
//				}
//			}
			TpCgcontractstt st = new TpCgcontractstt();// 实例化对象
			// 根据excel表中的(原名称、原规格、合同号、合同行号)查询合同物资中的请购单物资数据
//			String spec = excel.get(i).getYcSpec();
//			if (spec != null) {
				// 判断导入Excel中是否存在需要合并数据
				if ( excel.get(i).getMerge() == null || !"合并".equals(excel.get(i).getMerge())) {
					//规格不为空
//					if(excel.get(i).getcCuspec() != null) {
						
						// 将不需要合并的数据进行查询（根据合同号、合同行号、物资名称、规格型号查询该合同物资是否存在）
						TpCgcontractstt conList = tpCgcontractsttMapper.selForGoodsnameAndSpec(
								null,
								null,
								excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""),
								excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""));
						// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
						if (conList == null) {
							// 如果该物资没有找到 那么进行进一步判断
							// 1.1首先判断合同行号是否正确
							List<TpCgcontractstt> CShh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(excel.get(i).getcConnum()
									.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null, null, null);
							if (CShh.size() == 0) {
								// 1.1.1根据合同号没查询到物资
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号：错误】")
										.errcode(Errcode.FailParameterError).build();
							} else {
								// 1.1.2根据合同号查询到了物资，则进行进一步判断
								List<TpCgcontractstt> CShthAhh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(
										excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""),
										excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""),
										null, null);
								if (CShthAhh.size() == 0) {
									// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同行号：错误】")
											.errcode(Errcode.FailParameterError).build();
								} 
//								else {
//									// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
//									if (CShthAhh.size() == 1) {
//										// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
//										if (!CShthAhh.get(0).getcGoodsname().equals(excel.get(i).getcGoodsname()
//												.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
//											TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//											return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【货物名称：错误】")
//													.errcode(Errcode.FailParameterError).build();
//										}
//										if(CShthAhh.get(0).getcSpec() != null && CShthAhh.get(0).getcSpec() != "") {										
//											if (!CShthAhh.get(0).getcSpec().equals(excel.get(i).getcCuspec().replaceAll(" ", "")
//													.replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
//												TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//												return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【规格型号：错误】")
//														.errcode(Errcode.FailParameterError).build();
//											}
//										}
//									}
//								}
							}
						} else {
							st.setcMtid(
									conList.getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							
							if(excel.get(i).getcGoodsname() != null) {
								st.setcGoodsname(excel.get(i).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}else if(conList.getcGoodsname() != null){
								st.setcGoodsname(conList.getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}
							

							
							if(excel.get(i).getcSw08() != null) {
								st.setcSw08(excel.get(i).getcSw08().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));// 报关物资名称
								st.setcName(excel.get(i).getcSw08().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//品名
							}
							if(excel.get(i).getcCuspec() != null) {
								st.setcCuspec(excel.get(i).getcCuspec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//规格型号
							}else if(conList.getcCuspec() != null){
								st.setcCuspec(conList.getcCuspec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//规格型号
							}
							
							
							if(excel.get(i).getcPrice() != null) {
								st.setcPrice(excel.get(i).getcPrice().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//单价
							}else if(conList.getcPrice() != null){
								st.setcPrice(conList.getcPrice().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//单价
							}
							
							if(excel.get(i).getcSumprice() != null) {
								st.setcSumprice(excel.get(i).getcSumprice().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//总价
							}else if(conList.getcSumprice() != null){
								st.setcSumprice(conList.getcSumprice().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//总价
							}
						
							if (excel.get(i).getcSpec() == null) {
								st.setcSpec(null);
							} else {
								st.setcSpec(excel.get(i).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//报关规格型号
							}
							if(excel.get(i).getcUnitspec() == null) {
								st.setcUnitspec(null);
							}else {
								st.setcUnitspec(excel.get(i).getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//报关单位
							}
							if(excel.get(i).getcUnit() != null) {
								st.setcUnit(excel.get(i).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}else if(conList.getcUnit() != null){
								st.setcUnit(conList.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}
							
							if ((i + 1) < 10) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A000" + (i + 1));
							}
							if (10 <= (i + 1) && (i + 1) < 100) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A00" + (i + 1));
							}
							if (100 <= (i + 1) && (i + 1) < 1000) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A0" + (i + 1));
							}
							if (1000 <= (i + 1) && (i + 1) < 10000) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A" + (i + 1));
							}
							if(excel.get(i).getcGoodsnum() != null) {
								st.setcGoodsnum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//订货数量
								st.setcResiduenum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//剩余数量
							}else if(conList.getcGoodsnum() != null){
								st.setcGoodsnum(conList.getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//订货数量
								st.setcResiduenum(conList.getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));//剩余数量
							}
							
							st.setcGroudtotalnum("0");
							
							st.setcArrallyorn("0");
							if(excel.get(i).getcRemark() != null) {
								st.setcRemark(excel.get(i).getcRemark());
							}else{
								if(conList.getcRemark() == null) {
									st.setcRemark(null);
								}else {
									st.setcRemark(conList.getcRemark());
								}
							}
							st.setcState("3");
							st.setcCheckyorn("0");
							if(conList.getcOrid() != null){
								st.setcOrid(
										conList.getcOrid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}		
							st.setcDr("0");
							st.setcTimestamp(new Date());
							st.setcCreater(excel.get(i).getcCreater());
							st.setcCreatetime(excel.get(i).getcCreatetime());
							if(conList.getcSw02() != null){
								st.setcSw02(
										conList.getcSw02().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							
							if(conList.getcSw03() != null){
								st.setcSw03(
										conList.getcSw03().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							
							if(conList.getcSw04() != null){
								st.setcSw04(
										conList.getcSw04().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if(conList.getcSw05() != null){
								if ((i + 1) < 10) {
									st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", "") + "-N000" + (i + 1));
								}
								if (10 <= (i + 1) && (i + 1) < 100) {
									st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", "") + "-N00" + (i + 1));
								}
								if (100 <= (i + 1) && (i + 1) < 1000) {
									st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", "") + "-N0" + (i + 1));
								}
								if (1000 <= (i + 1) && (i + 1) < 10000) {
									st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", "") + "-N" + (i + 1));
								}
							}
							
							st.setcConnum(conList.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							int row = tpCgcontractsttMapper.insertSelective(st);
							if (row == 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
							}
						}
				} else {
					//合并
					if(excel.get(i).getYesno() == null) {
						hblist.add(excel.get(i));// 将多条合并一条的放进hblist的arrayList中
					}else {
						if ("是".equals(excel.get(i).getYesno().trim())) {
							remark.add(excel.get(i));// 将合并到一起买的的放进remark的arrayList中
						} else {
							hblist.add(excel.get(i));// 将多条合并一条的放进hblist的arrayList中
						}
					}
				}
		}
		
		
		
		
		
		// ------------------------------------将合并的物资进行分组------------------------------------------------
		System.out.println(hblist.size() + "条数据===========物资合并的数量");
		if (hblist.size() != 0) {  //hblist是没有备注的物资 需要合并的list 
			Map<String, List<TpCgcontractstt>> map = bigs.groupBillingDataBycSw08(hblist);
			System.out.println(map);
			// 取出map中的所有元素。
			// 原理，通过keySet方法获取map中所有的键所在的Set集合，在通过Set的迭代器获取到每一个键，
			// 在对每一个键通过map集合的get方法获取其对应的值即可。
			Set<String> keySet = map.keySet();
			Iterator<String> it = keySet.iterator();
			
			while (it.hasNext()) {
				String key = it.next();
				List<TpCgcontractstt> value = map.get(key);
//				Map<String, List<TpCgcontractstt>> map2 =bigs.groupBillingDataByExcpBatchCodecSpect(valuee);
//				Set<String> keySet2 = map2.keySet();
//				Iterator<String> it2 = keySet2.iterator();
//				while(it2.hasNext()) {
//					String key2 = it2.next();
//					List<TpCgcontractstt> value = map2.get(key2);
					
					System.out.println(key + ":" + value);
					List<TpCgcontractstt> newList = new ArrayList<TpCgcontractstt>();
					for (int g = 0; g < value.size(); g++) {

							TpCgcontractstt conList2 = tpCgcontractsttMapper.selForGoodsnameAndSpec(
									null,
									null,
									value.get(g).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", ""),
									value.get(g).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", ""));
							// 判断改导入的物资根据excel表中的合同号 合同行号 货物名称 规格型号 是否能够找到该物资
							if (conList2 == null) {
								// 如果该物资没有找到 那么进行进一步判断
								// 1.1首先判断合同行号是否正确
								List<TpCgcontractstt> CShh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(value.get(g)
										.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
										null, null, null);
								if (CShh.size() == 0) {
									// 1.1.1根据合同号没查询到物资
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("导入Excel表中需要合并的:" + key + "的第-" + (g + 1) + "-行," + "【合同号：错误】")
											.errcode(Errcode.FailParameterError).build();
								} else {
									// 1.1.2根据合同号查询到了物资，则进行进一步判断
									List<TpCgcontractstt> CShthAhh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(
											value.get(g).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
													.replaceAll("[\\n]", ""),
											value.get(g).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
													.replaceAll("[\\n]", ""),
											null, null);
									if (CShthAhh.size() == 0) {
										// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("导入Excel表中需要合并的:" + key + "的第-" + (g + 1) + "-行," + "【合同行号：错误】")
												.errcode(Errcode.FailParameterError).build();
									} 
								}
						}
							newList.add(conList2);
					}

					if (newList.size() > 0) {
						TpCgcontractstt tcst = new TpCgcontractstt();
//						String spec1 = "";// 合并后的规格型号
						String num = "";// 合并excel表格中数量
						String num2 = "";//合并原来的数量
						String sw02 = "";// 合并后的物资单号
						String sw03 = "";// 合并后的请购单号
						String line = "";// 合并后的合同行号
						String sumprice = "";// 合并excel表格中总金额
						String sumprice2 = "";//合并原来的总金额
						String unit = newList.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", "");// 合并后的单位
						String unitspec = "";
						String name = value.get(0).getcSw08().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", "");// 合并后的报关物资名称
//						if (value.get(0).getcSpec() == null) {
						tcst.setcSpec(null);// excel表格中的规格
//						} else {
//							String gg = value.get(0).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
//									.replaceAll("[\\n]", "");// excel表格中的规格
//							tcst.setcSpec(gg);
//						}
//						String yname = "";
						String orid = "";
						int hb = newList.size();
						for (int k = 0; k < value.size(); k++) {
							if (value.get(k).getcGoodsnum() != null) {
								num += value.get(k).getcGoodsnum() + "/";
							}
							if(value.get(k).getcSumprice() != null) {
								sumprice += value.get(k).getcSumprice() + "/";
							}
							if("".equals(unitspec) && value.get(k).getcUnitspec() != null) {
								unitspec = value.get(k).getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
						}
						for (int j = 0; j < hb; j++) {
//							if (newList.get(j).getcSpec() != null) {
//								spec1 += newList.get(j).getcSpec() + "/";
//							}
							if (newList.get(j).getcSw02() != null) {
								sw02 += newList.get(j).getcSw02() + "/";
							}
							if (newList.get(j).getcSw03() != null) {
								sw03 += newList.get(j).getcSw03() + "/";
							}
							if (newList.get(j).getcConline() != null) {
								line += newList.get(j).getcConline() + "/";
							}
							if (newList.get(j).getcOrid() != null) {
								orid += newList.get(j).getcOrid() + "/";
							}
//							if (newList.get(j).getcGoodsname() != null) {
//								yname += newList.get(j).getcGoodsname() + "/";
//							}
							if(newList.get(j).getcGoodsnum() != null) {
								num2 += newList.get(j).getcGoodsnum() + "/";
							}
							if(newList.get(j).getcSumprice() != null) {
								sumprice2 += newList.get(j).getcSumprice() + "/";
							}
							if("".equals(unitspec) && newList.get(j).getcUnitspec() != null) {
								unitspec = newList.get(j).getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
						}
//						if (spec1.equals("")) {
//							spec1 = null;
//						} else {
//							spec1 = spec1.substring(0, spec1.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
//									.replaceAll("[\\n]", "");
//						}
						if (sw02.length() == 0) {
							sw02 = null;
						} else {
							sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						}
						if (sw03.length() == 0) {
							sw03 = null;
						} else {
							sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						}
						if (line.length() == 0) {
							line = null;
						} else {
							line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						}
						if (orid.length() == 0) {
							orid = null;
						} else {
							orid = orid.substring(0, orid.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						}
//						if (yname.length() == 0) {
//							yname = null;
//						} else {
//							yname = yname.substring(0, yname.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
//									.replaceAll("[\\n]", "") + "等";
//						}
						if (newList.get(0).getcMtid() == null) {
							tcst.setcMtid(null);
						} else {
							tcst.setcMtid(newList.get(0).getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
						}
						if(newList.get(0).getcGoodsname() != null) {
							tcst.setcGoodsname(newList.get(0).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 原多个物资名称
						}
						if (name.length() == 0) {
							System.out.println(name);
							tcst.setcSw08(null);
						} else {
							tcst.setcSw08(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 报关名称
							tcst.setcName(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//品名
						}
						if (unit.length() == 0) {
							tcst.setcUnit(null);
						} else {
							tcst.setcUnit(unit.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (unitspec.length() == 0) {
							tcst.setcUnitspec(null);
						} else {
							tcst.setcUnitspec(unitspec.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (line.length() == 0) {
							System.out.println(line);
							tcst.setcConline(null);
						} else {
							tcst.setcConline(line.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (num.length() > 0) {
							num = num.substring(0, num.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						} else if(num2.length() > 0){
							num = num2.substring(0, num2.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");
						}
						if(num.length() > 0) {
							String sss = bigs.get_Goodsnum(unit, num);// 合并后的数量
							System.out.println(sss);
							tcst.setcGoodsnum(sss);
							tcst.setcGroudtotalnum("0");
							tcst.setcResiduenum(sss);
						}		
						
						
						
						if(sumprice.length() > 0) {
							String zzz = bigs.get_Sumprice(sumprice);
							tcst.setcSumprice(zzz);
						}else if(sumprice2.length() > 0) {
							sumprice = sumprice2;
							String zzz = bigs.get_Sumprice(sumprice);
							tcst.setcSumprice(zzz);
						}
						
						if(newList.get(0).getcRemark()==null) {
							tcst.setcRemark(null);
						}else {
							tcst.setcRemark(newList.get(0).getcRemark());
						}
						tcst.setcArrallyorn("0");
						tcst.setcState("3");
						tcst.setcCheckyorn("0");
						if (orid == null) {
							System.out.println(orid);
							tcst.setcOrid(null);
						} else {
							tcst.setcOrid(orid.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						tcst.setcDr(newList.get(0).getcDr());
						tcst.setcTimestamp(new Date());
						tcst.setcCreater(newList.get(0).getcCreater());
						tcst.setcCreatetime(newList.get(0).getcCreatetime());
						if (sw02 == null) {
							System.out.println(sw02);
							tcst.setcSw02(null);
						} else {
							tcst.setcSw02(sw02.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (sw03 == null) {
							tcst.setcSw03(null);
						} else {
							tcst.setcSw03(sw03.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						tcst.setcSw04("0");
						if(newList.get(0).getcSw05() != null) {
							// -N后面代表有多少个物资合并成
							if (newList.size() < 10) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N000" + (newList.size()));
							}
							if (10 <= (newList.size()) && (newList.size()) < 100) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N00" + (newList.size()));
							}
							if (100 <= (newList.size()) && (newList.size()) < 1000) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N0" + (newList.size()));
							}
							if (1000 <= (newList.size()) && (newList.size()) < 10000) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N" + (newList.size()));
							}
						}
						tcst.setcConnum(newList.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", ""));
						int row = tpCgcontractsttMapper.insertSelective(tcst);
						if (row == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
						}
					}
//				}
			}
		}
		// -----------------------------将合并在一起买的进行分组--------------------------------------------------------------------
		System.out.println(remark.size() + "条数据===========合并在一起买");
		List<TpCgcontractstt> newList21 = new ArrayList<TpCgcontractstt>();
		if (remark.size() != 0) {
			Map<String, List<TpCgcontractstt>> map1 = bigs.groupBillingDataBycSw08(remark);
			System.out.println(map1);
			//备注1={Object1，obj2，obj3，obj4}
			// 取出map中的所有元素。
			// 原理，通过keySet方法获取map中所有的键所在的Set集合，在通过Set的迭代器获取到每一个键，
			// 在对每一个键通过map集合的get方法获取其对应的值即可。
			Set<String> keySet1 = map1.keySet();
			Iterator<String> it1 = keySet1.iterator();

			while (it1.hasNext()) {
				String key1 = it1.next();
				List<TpCgcontractstt> value1 = map1.get(key1);
				
				//将备份一样的 用货物名称进一步分组
				Map<String, List<TpCgcontractstt>> map11 = bigs.groupBillingDataByExcpBatchCodecSpect(value1);
				System.out.println("map11::"+map11);
				Set<String> keySet11 = map11.keySet();
				Iterator<String> it11 = keySet11.iterator();
				while(it11.hasNext()) {
					String key11 = it11.next();
					List<TpCgcontractstt> value111 = map11.get(key11);
					
					//将货物名称一样的 用规格型号进一步分组
//					Map<String, List<TpCgcontractstt>> map111 = bigs.groupBillingDataByExcpBatchCodecSpec(value11);
//					System.out.println("map11::"+map11);
//					Set<String> keySet111 = map111.keySet();
//					Iterator<String> it111 = keySet111.iterator();
//					while(it111.hasNext()) {
//						String key111 = it111.next();
//						List<TpCgcontractstt> value111 = map111.get(key111);
					//A={OBJ1,OBJ3}
					//1，
					//2     1.2
					
						System.out.println(key11 + ":" + value111);
						List<TpCgcontractstt> newList2 = new ArrayList<TpCgcontractstt>();
						for (int h = 0; h < value111.size(); h++) {
							TpCgcontractstt conList2 = tpCgcontractsttMapper.selForGoodsnameAndSpec(
									null,
									null,
									value111.get(h).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
											""),
									value111.get(h).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
											""));
							// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
							if (conList2 == null) {
								// 如果该物资没有找到 那么进行进一步判断
								// 1.1首先判断合同行号是否正确
								List<TpCgcontractstt> CShh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(value111.get(h)
										.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null,
										null, null);
								if (CShh.size() == 0) {
									// 1.1.1根据合同号没查询到物资
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【合同号：错误】")
											.errcode(Errcode.FailParameterError).build();
								} else {
									// 1.1.2根据合同号查询到了物资，则进行进一步判断
									List<TpCgcontractstt> CShthAhh = tpCgcontractsttMapper.selNAMEASPECANUMALINE(
											value111.get(h).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
													.replaceAll("[\\n]", ""),
											value111.get(h).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
													.replaceAll("[\\n]", ""),
											null, null);
									if (CShthAhh.size() == 0) {
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
										return builder.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【合同行号：错误】")
												.errcode(Errcode.FailParameterError).build();
									} 
//									else {
//										// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
//										if (CShthAhh.size() == 1) {
//											// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
//											if (!CShthAhh.get(0).getcGoodsname().equals(value111.get(h).getcGoodsname()
//													.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
//												TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//												return builder
//														.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【原货物名称：错误】")
//														.errcode(Errcode.FailParameterError).build();
//											}
//										}
//									}
								}
							}
							newList2.add(conList2);
							newList21.add(conList2);
						}
						TpCgcontractstt tcst = new TpCgcontractstt();
//						String spec1 = "";// 合并后的规格
						String sw02 = "";// 合并后的物资单号
						String sw03 = "";// 合并后的请购单号
						String line = "";// 合并后的合同行号
						String unit = newList2.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]","");// 合并后的单位
						String name = value111.get(0).getcSw08().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");// 合并后的报关名称
						
//						String yname = "";
						String orid = "";
						int hb = value111.size();
//						for (int k = 0; k < value111.size(); k++) {
//						}
						//请购单物资名称和规格型号 取第一个
						if(newList2.get(0).getcGoodsname() != null) {
							tcst.setcGoodsname(newList2.get(0).getcGoodsname());
						}
						if(newList2.get(0).getcCuspec() != null) {
							tcst.setcCuspec(newList2.get(0).getcCuspec());
						}
						
						
						if (value111.get(0).getcGoodsnum() != null) {
							String gg = value111.get(0).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									"");// excel表格中的数量
							tcst.setcGoodsnum(gg);
							tcst.setcResiduenum(gg);							
						} else if(newList2.get(0).getcGoodsnum() != null){
							String gg = newList2.get(0).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									"");// 数量
							tcst.setcGoodsnum(gg);
							tcst.setcResiduenum(gg);
						}
						if (value111.get(0).getcSpec() == null) {
							String gg = null;// excel表格中的报关规格
							tcst.setcSpec(gg);
						} else {
							String gg = value111.get(0).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									"");// excel表格中的报关规格
							tcst.setcSpec(gg);
						}
						
						
						if(value111.get(0).getcPrice() != null) {
							tcst.setcPrice(value111.get(0).getcPrice().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));// excel表格中的单价							
						}else if(newList2.get(0).getcPrice() != null){
							tcst.setcPrice(newList2.get(0).getcPrice().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						
						
						if(value111.get(0).getcSumprice() != null) {
							tcst.setcSumprice(value111.get(0).getcSumprice().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));// excel表格中的总价
						}else if(newList2.get(0).getcSumprice() != null){
							tcst.setcSumprice(newList2.get(0).getcSumprice().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						if(value111.get(0).getcUnitspec() == null) {
							tcst.setcUnitspec(null);// excel表格中的报关单位
						}else {
							tcst.setcUnitspec(value111.get(0).getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						if(value111.get(0).getcRemark()!=null) {
							tcst.setcRemark(value111.get(0).getcRemark());// excel表格中的备注
						}else if(newList2.get(0).getcRemark() != null){
							tcst.setcRemark(newList2.get(0).getcRemark());
						}
						for (int j = 0; j < newList2.size(); j++) {
//							if (newList2.get(j).getcCuspec() != null) {
//								spec1 += newList2.get(j).getcCuspec() + "/";
//							}
							if (newList2.get(j).getcSw02() != null) {
								sw02 += newList2.get(j).getcSw02() + "/";
							}
							if (newList2.get(j).getcSw03() != null) {
								sw03 += newList2.get(j).getcSw03() + "/";
							}
							if (newList2.get(j).getcConline() != null) {
								line += newList2.get(j).getcConline() + "/";
							}
							if (newList2.get(j).getcOrid() != null) {
								orid += newList2.get(j).getcOrid() + "/";
							}
//							if (newList2.get(j).getcGoodsname() != null) {
//								yname += newList2.get(j).getcGoodsname() + "/";
//							}
						}
//						if (spec1.length() == 0) {
//							System.out.println(spec1);
//						} else {
//							spec1 = spec1.substring(0, spec1.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//						}
						if (sw02.length() == 0) {
							System.out.println(sw02);
						} else {
							sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
						}
						if (sw03.length() == 0) {
							System.out.println(sw03);
						} else {
							sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
						}
						if (line.length() == 0) {
							System.out.println(line);
						} else {
							line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
						}
						if (orid.length() == 0) {
							System.out.println(orid);
						} else {
							orid = orid.substring(0, orid.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
						}
//						if (yname.length() == 0) {
//							System.out.println(yname);
//						} else {
//							yname = yname.substring(0, yname.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "等";
//						}
						if (newList2.get(0).getcMtid() == null) {
							System.out.println(newList2.get(0).getcMtid());
							tcst.setcMtid(null);
						} else {
							tcst.setcMtid(newList2.get(0).getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
//						if (yname.length() == 0) {
//							System.out.println(yname);
//							tcst.setcGoodsname(null);
//						} else {
//							tcst.setcGoodsname(yname.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 原多个物资名称
//						}
						if (name.length() == 0) {
							System.out.println(name);
							tcst.setcSw08(null);
						} else {
							tcst.setcSw08(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 报关名称
							tcst.setcName(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//品名
						}
						if (unit.length() == 0) {
							System.out.println(unit);
							tcst.setcUnit(null);
						} else {
							tcst.setcUnit(unit.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (line.length() == 0) {
							System.out.println(line);
							tcst.setcConline(null);
						} else {
							System.out.println(line);
							tcst.setcConline(line.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
//						if (spec1.length() == 0) {
//							System.out.println(spec1);
//							tcst.setcCuspec(null);
//						} else {
//							System.out.println(spec1+ "aaaaaaaaaaaaa");
//							tcst.setcCuspec(spec1.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
//						}

						tcst.setcGroudtotalnum("0");
//						if (sss.length() == 0) {
//							System.out.println(sss);
//						} else {
//							tcst.setcResiduenum(sss);
//						}
						tcst.setcArrallyorn("0");
						tcst.setcState("3");
						tcst.setcCheckyorn("0");
						if (orid.length() == 0) {
							System.out.println(orid);
							tcst.setcOrid(null);
						} else {
							tcst.setcOrid(orid.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						
						tcst.setcDr("0");
						tcst.setcTimestamp(new Date());
						tcst.setcCreater(newList2.get(0).getcCreater());
						tcst.setcCreatetime(newList2.get(0).getcCreatetime());
						if (sw02.length() == 0) {
							System.out.println(sw02);
							tcst.setcSw02(null);
						} else {
							tcst.setcSw02(sw02.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						if (sw03.length() == 0) {
							System.out.println(sw03);
							tcst.setcSw03(null);
						} else {
							tcst.setcSw03(sw03.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						tcst.setcSw04("0");
						if(newList2.get(0).getcSw05() != null) {
							// -N后面代表有多少个物资合并成
							if (newList2.size() < 10) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N000" + (remark.size()));
							}
							if (10 <= (newList2.size()) && (newList2.size()) < 100) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N00" + (remark.size()));
							}
							if (100 <= (newList2.size()) && (newList2.size()) < 1000) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N0" + (remark.size()));
							}
							if (1000 <= (newList2.size()) && (newList2.size()) < 10000) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N" + (remark.size()));
							}
						}
						
						tcst.setcConnum(newList2.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						
						System.out.println("备注:::::"+newList2.get(0).getcRemark());
						
						
						System.out.println("备注:::::"+newList2.get(0).getcRemark());
						int row = tpCgcontractsttMapper.insertSelective(tcst);
						if (row == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
						}
						
//					}
				}
				}
				
				
				
		}
		// -------------------------------------------------------------------------------------
//		for (TpCgcontractstt tpCgcontractst : newList21) {
//			TpCgcontractstt contractst = tpCgcontractsttMapper.selForGoodsnameAndSpec(
//					null,
//					null,
//					tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
//					tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
//			if (contractst != null) {
//				int row0 = tpCgcontractsttMapper.deleteByUpdate(contractst.getcId());
//				if (row0 == 0) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
//				}
//			}
//		}
		for (TpCgcontractstt tpCgcontractst : excel) {
//			if (tpCgcontractst.getcSpec() != null) {
				TpCgcontractstt contractst = tpCgcontractsttMapper.selForGoodsnameAndSpec(
						null,
						null,
						tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
						tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
								""));
				if (contractst != null) {
					int row0 = tpCgcontractsttMapper.deleteByUpdate(contractst.getcId());
					if (row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
					}
				}
		}
//		for (TpCgcontractstt tpCgcontractst : hblist) {
//			TpCgcontractstt contractst = tpCgcontractsttMapper.selForGoodsnameAndSpec(
//					null,
//					null,
//					tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
//					tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
//			if (contractst != null) {
//				int row0 = tpCgcontractsttMapper.deleteByUpdate(contractst.getcId());
//				if (row0 == 0) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
//				}
//			}
//		}
		if(excel.size() > 0) {
			StaConmoney(excel.get(0).getcConnum());//计算合同金额
		}
		if(fd == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").build();
		}
		return builder.msg("合同物资导入成功").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11CXDR(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractstt> tsttlist = requestObject.getData().getTsttlist();
		TpCgcontractstt contractst = new TpCgcontractstt();
		
		//防错处理
		String msg = "合同物资信息进行了更改";
		//BusinessJudge()方法放回值有5个
		//返回值 0  直接放行  不影响代码
		//返回值1  立马结束  后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
		//放回值2  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “信息卡已提交过，请于信息卡人员联系！”
		//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
		//返回值4 sql语句执行出错
		int j = BusinessJudge(tsttlist.get(0).getcConnum().trim(),msg);
		if(j == 1) {
			return builder.errcode(Errcode.FailParameterError).msg("无法撤销，请撤销信息卡！！！").build();
		}else if(j == 2) {
			return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法撤销！！！").build();
		}else if(j == 4) {
			return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
		}
		
		for (TpCgcontractstt tpCgcontractstt : tsttlist) {
			if(tpCgcontractstt.getcConline().length() > 5) {
				if(tpCgcontractstt.getcConline().indexOf("-") != -1) {
									
					int row1 = tpCgcontractsttMapper.updateByDelete(tpCgcontractstt);
					if(row1 >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
					List<TpCgcontractstt> tstlist = tpCgcontractsttMapper.selectByConline(tpCgcontractstt.getcConnum(),tpCgcontractstt.getcConline().substring(0, 5));
					if(tstlist.size() == 0) {
						contractst.setcConline(tpCgcontractstt.getcConline().substring(0, 5));
						contractst.setcConnum(tpCgcontractstt.getcConnum());				
						int row0 = tpCgcontractsttMapper.updateByNumLine(contractst);
						if(row0 >= 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
						}
					}
					
				}
				if(tpCgcontractstt.getcConline().indexOf("/") != -1) {
					String[] str = tpCgcontractstt.getcConline().split("/");	
					for (String string : str) {
						contractst.setcConnum(tpCgcontractstt.getcConnum());
						contractst.setcConline(string);		
						int row0 = tpCgcontractsttMapper.updateByNumLine(contractst);
						if(row0 >= 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
						}
					}
					int row1 = tpCgcontractsttMapper.updateByDelete(tpCgcontractstt);
					if(row1 >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
				}
			}
		}
		if(j == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("合同状态已变更").build();
		}
		StaConmoney(tsttlist.get(0).getcConnum());//计算合同金额
		return builder.msg("撤销成功！").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11CL(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgcontractmtt element : requestObject.getData().getTpCgcontractmtt()) {
			//已处理
			element.setcSw14("2");
		}
		//修改拟合同的合同标识
		int rown = tpCgcontractmttMapper.M1S11UCG_MNHT_M1S12(requestObject.getData().getTpCgcontractmtt());
		if(rown>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("已处理未成功！！！").errcode(Errcode.FailParameterError).build();	
		}
		//修改正式合同合同标识
		int rowns = tpCgcontractmtMapper.M1S11UCG_MNHT_M1S12(requestObject.getData().getTpCgcontractmtt());
		if(rowns>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("已处理未成功！！！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("已处理成功！！！！").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21HB(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractstt contractstt = requestObject.getData().getContractstt();
		List<TpCgcontractstt> tpCgcontractstt = requestObject.getData().getTpCgcontractstt();
		
		//防错处理
		String msg = "物资合并：" + tpCgcontractstt.size() + "合成一条";
		//BusinessJudge()方法放回值有5个
				//返回值 0  直接放行  不影响代码
				//返回值1  立马结束  后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
				//放回值2  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “信息卡已提交过，请于信息卡人员联系！”
				//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
				//返回值4 sql语句执行出错
				int i = BusinessJudge(tpCgcontractstt.get(0).getcConnum().trim(),msg);
				if(i == 1) {
					return builder.errcode(Errcode.FailParameterError).msg("无法合并拟合同物资!!!请撤回信息卡！！！").build();
				}else if(i == 2) {
					return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法撤回拟合同物资信息！！！！").build();
				}else if(i == 4) {
					return builder.errcode(Errcode.FailParameterError).msg("追加失败").build();
				}
		
		
		String line = "";
		String sw02 = "";//请购物资主键
		String sw03 = "";//请购单号
		for (TpCgcontractstt tstt : tpCgcontractstt) {
			if(tstt.getcQid() != null) {
				return builder.msg("不能与原合同物资合并").errcode(Errcode.FailParameterError).build();
			}
			if(tstt.getcConline() != null) {
				line += tstt.getcConline()+"/";
			}
			if(tstt.getcSw02() != null) {
				sw02 += tstt.getcSw02()+"/";
			}
			if(tstt.getcSw03() != null) {
				sw03 += tstt.getcSw03()+"/";
			}
		}
		if(line.length() > 0) {
			line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		if(sw02.length() > 0) {
			sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		if(sw03.length() > 0) {
			sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
			
		
		
		if(contractstt.getcSw08() != null) {
			contractstt.setcName(contractstt.getcSw08());
		}
		contractstt.setcConnum(tpCgcontractstt.get(0).getcConnum());
		contractstt.setcMtid(tpCgcontractstt.get(0).getcMtid());
		contractstt.setcSw02(sw02);
		contractstt.setcSw03(sw03);
		if(tpCgcontractstt.get(0).getcSw05() != null) {
			contractstt.setcSw05(tpCgcontractstt.get(0).getcSw05());
		}		
		contractstt.setcConline(line);
		contractstt.setcState("3");
		int row = tpCgcontractsttMapper.insertSelective(contractstt);
		if (row >= 0) {
			return builder.msg("合并失败").errcode(Errcode.FailParameterError).build();
		}
		for (TpCgcontractstt tstt : tpCgcontractstt) {
			int row0 = tpCgcontractsttMapper.deleteByUpdate(tstt.getcId());
			if (row0 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("合并失败").errcode(Errcode.FailParameterError).build();
			}
		}
		if(tpCgcontractstt.size() > 0) {
			StaConmoney(tpCgcontractstt.get(0).getcConnum());//计算合同金额
		}
		
		/*if(i == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("合同状态已变更").build();
		}*/
		return builder.msg("合并成功！").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21CF(RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		
		TpCgcontractstt contractstt = requestObject.getData().getContractstt();
		List<TpCgcontractstt> tpCgcontractstt = requestObject.getData().getTpCgcontractstt();
		
		//防错处理
		String msg = "物资拆分：" + "一条物资" + tpCgcontractstt.size() + "条";
		//BusinessJudge()方法放回值有5个
				//返回值 0  直接放行  不影响代码
				//返回值1  立马结束  后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
				//放回值2  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “信息卡已提交过，请于信息卡人员联系！”
				//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
				//返回值4 sql语句执行出错
				int j = BusinessJudge(contractstt.getcConnum().trim(),msg);
				if(j == 1) {
					return builder.errcode(Errcode.FailParameterError).msg("无法拆分，请撤回信息卡！！！").build();
				}else if(j == 2) {
					return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，不能进行拆分物资").build();
				}else if(j == 4) {
					return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
				}
		
		int i = 0;//合同行号
//		BigDecimal price;//单价
//		BigDecimal sum;//数量
//		BigDecimal sumprice;//总价
		if(contractstt.getcQid() != null) {
			return builder.msg("不能对原合同物资拆分").errcode(Errcode.FailParameterError).build();
		}
		if(contractstt.getcConline().trim().length() > 5) {
			List<TpCgcontractstt> tpCgcont = tpCgcontractsttMapper.selectByConline(contractstt.getcConnum(), contractstt.getcConline().substring(0, 5));
			i = tpCgcont.size();
		}else {
			int row2 = tpCgcontractsttMapper.deleteByUpdate(contractstt.getcId());
			if (row2 >= 0) {
				return builder.msg("拆分失败").errcode(Errcode.FailParameterError).build();
			}
		}
		System.out.println(tpCgcontractstt.size()+ "aaaaaaaaaaaaaa");
		for (TpCgcontractstt tstt : tpCgcontractstt) {
			if(tstt.getcSw08() != null) {
				tstt.setcName(tstt.getcSw08());
			}
			if(tstt.getcUnitspec() != null && tstt.getcUnitspec() != "") {
				String unitsoec = tstt.getcUnitspec();
				TpCgauthority thority = tpCgauthorityMapper.selectDanWei(unitsoec, "DW");
				if(thority == null) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("报关单位错误").build();
				}
			}
			if(tstt.getcConnum() == null) {
				tstt.setcConnum(contractstt.getcConnum());
			}
			if ((i + 1) < 10) {
				tstt.setcConline(contractstt.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A000" + (i + 1));
			}
			if (10 <= (i + 1) && (i + 1) < 100) {
				tstt.setcConline(contractstt.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A00" + (i + 1));
			}
			if (100 <= (i + 1) && (i + 1) < 1000) {
				tstt.setcConline(contractstt.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A0" + (i + 1));
			}
			if (1000 <= (i + 1) && (i + 1) < 10000) {
				tstt.setcConline(contractstt.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A" + (i + 1));
			}
			i++;//合同行号加1
			if(tstt.getcPrice() != null && tstt.getcGoodsnum() != null) {
				BigDecimal price = new BigDecimal(tstt.getcPrice());
				BigDecimal sum = new BigDecimal(tstt.getcGoodsnum());
				BigDecimal sumprice = price.multiply(sum);
				tstt.setcSumprice(ri.formatForTwo(sumprice));//计算物资总价
			}
			
			tstt.setcMtid(contractstt.getcMtid());
			if(contractstt.getcSw02() != null) {
				tstt.setcSw02(contractstt.getcSw02());
			}
			if(contractstt.getcSw03() != null) {
				tstt.setcSw03(contractstt.getcSw03());
			}
			if(contractstt.getcSw05() != null) {
				tstt.setcSw05(contractstt.getcSw05());
			}
			
			
			
			tstt.setcState("3");
			tstt.setcCreater(contractstt.getcModifier());
			tstt.setcCreatetime(contractstt.getcModifytime());
			int row = tpCgcontractsttMapper.insertSelective(tstt);
			if (row >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("拆分失败").errcode(Errcode.FailParameterError).build();
			}
		}
		StaConmoney(contractstt.getcConnum());//计算合同金额
		
		if(j == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").build();
		}
		return builder.msg("拆分成功！").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> Excelimpoet(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractstt> tsttlist = requestObject.getData().getTsttlist();
		List<TpCgcontractstt> cgcontractstt = new ArrayList<TpCgcontractstt>();
		String cId = "";
		for (int i = 0; i < tsttlist.size(); i++) {
			// 判断合同号不能为空
			if (tsttlist.get(i).getcConnum() == null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号】不能为空").errcode(Errcode.FailParameterError)
						.build();
			}else {
				List<TpCgcontractmtt> CShh = tpCgcontractmttMapper.selectByConnum(tsttlist.get(i).getcConnum()
						.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				if (CShh.size() == 0) {
					// 1.1.1根据合同号没查询到物资
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("合同号：错误")
							.errcode(Errcode.FailParameterError).build();
				}
				cId = CShh.get(0).getcId();
			}
		}
		
		//防错处理
		String msg = "合同物资报关信息进行了更改";
		//BusinessJudge()方法放回值有5个
				//返回值 0  直接放行  不影响代码
				//返回值1  立马结束  后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
				//放回值2  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “信息卡已提交过，请于信息卡人员联系！”
				//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
				//返回值4 sql语句执行出错
				int j = BusinessJudge(tsttlist.get(0).getcConnum().trim(),msg);
				if(j == 1) {
					return builder.errcode(Errcode.FailParameterError).msg("无法进行报关导入，请撤回信息卡！！！").build();
				}else if(j == 2) {
					return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法导入").build();
				}else if(j == 4) {
					return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
				}
		
				List<TpCgcontractstt> num1  = tpCgcontractsttMapper.selectByColine(tsttlist.get(0).getcConnum());
				List<TpCgcontractstt> num2  = tpCgcontractsttMapper.selectByCountState(tsttlist.get(0).getcConnum());
			
				int len;
				int len1;
				int len2;
				if(num2.size() == 0) {
					len = Integer.parseInt(num1.get((num1.size()-1)).getcConline());
				}else if(num1.size() == 0){
					len = 0;
				}else{
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
				
			
		for (TpCgcontractstt tpCgcontractstt : tsttlist) {
			if(tpCgcontractstt.getcConline() != null && tpCgcontractstt.getcConline().trim().length() >= 5) {
				
				//根据合同号和合同行号 查询物资
				TpCgcontractstt tstt = tpCgcontractsttMapper.selectNumber_Line(tpCgcontractstt.getcConnum(), tpCgcontractstt.getcConline());
				if(tpCgcontractstt.getcSw08() != null) {//报关物资名称
					tstt.setcSw08(tpCgcontractstt.getcSw08().trim());
					tstt.setcName(tpCgcontractstt.getcSw08().trim());
				}else {
					tstt.setcSw08("");
					tstt.setcName("");
				}
				if(tpCgcontractstt.getcSpec() != null) {//报关规格
					tstt.setcSpec(tpCgcontractstt.getcSpec().trim());
				}else {
					tstt.setcSpec("");
				}
			
				if(tpCgcontractstt.getcUnitspec() != null) {//报关单位
					String unitsoec = tpCgcontractstt.getcUnitspec().trim();
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(unitsoec, "DW");
					if(thority == null) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("报关单位错误").build();
					}
					tstt.setcUnitspec(tpCgcontractstt.getcUnitspec().trim());		
					if(tpCgcontractstt.getcGoodsnum() != null) {//订货数量
						//报关单位是吨 和 立方米 时  保留4位小数 其他保留两位
						if("吨".equals(unitsoec) || "立方米".equals(unitsoec)) {
							tstt.setcGoodsnum(ri.formatToFour(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}else {
							tstt.setcGoodsnum(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}
					}else {
						tstt.setcGoodsnum("");
					}
				}else{
					tstt.setcUnitspec("");
					if(tpCgcontractstt.getcGoodsnum() != null) {//订货数量
						tstt.setcGoodsnum(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
					}else {
						tstt.setcGoodsnum("");
					}
				}
				
				if(tpCgcontractstt.getcPrice() != null) {
					tstt.setcPrice(tpCgcontractstt.getcPrice().trim());
				}else {
					tstt.setcPrice("");
				}
				
				if(tpCgcontractstt.getcPrice() != null && tpCgcontractstt.getcGoodsnum() != null) {
					tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcPrice().trim()).multiply(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim()))));
				}else if(tpCgcontractstt.getcPrice() != null && tpCgcontractstt.getcGoodsnum() == null){
					tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcPrice().trim())));
				}else {
					tstt.setcSumprice("");
				}
				
				
				
				if(tpCgcontractstt.getcRemark() != null) {
					tstt.setcRemark(tpCgcontractstt.getcRemark().trim());
				}else {
					tstt.setcRemark("");
				}
				tstt.setcModifier(user.getUserName());
				tstt.setcModifytime(new Date());
				cgcontractstt.add(tstt);
				
			}else {
				TpCgcontractstt tstt =  new TpCgcontractstt();
				tstt.setcMtid(cId);
				tstt.setcConnum(tpCgcontractstt.getcConnum());
				tstt.setcGoodsname(tpCgcontractstt.getcGoodsname());
				tstt.setcCuspec(tpCgcontractstt.getcCuspec());
				tstt.setcUnit(tpCgcontractstt.getcUnit());

				if(len<10) {
					//合同行号
					if((len+1)==10) {
						tstt.setcConline("000"+String.valueOf(len+1));
					}else {
						tstt.setcConline("0000"+String.valueOf(len+1));
					}
				}
				if(len>9 && len<100) {
					//合同行号
					if((len+1)==100) {
						tstt.setcConline("00"+String.valueOf(len+1));
					}else {
						tstt.setcConline("000"+String.valueOf(len+1));
					}
				}
				if(len>99 && len<1000) {
					//合同行号
					if((len+1)==1000) {
						tstt.setcConline("0"+String.valueOf(len+1));
					}else {
						tstt.setcConline("00"+String.valueOf(len+1));
					}
				}
				if(len>999 && len<10000) {
					//合同行号
					tstt.setcConline("0"+String.valueOf(len+1));
				}
				len++;
				
				tstt.setcState("3");
				if(tpCgcontractstt.getcSw08() != null) {//报关物资名称
					tstt.setcSw08(tpCgcontractstt.getcSw08().trim());
					tstt.setcName(tpCgcontractstt.getcSw08().trim());
				}
				if(tpCgcontractstt.getcSpec() != null) {//报关规格
					tstt.setcSpec(tpCgcontractstt.getcSpec().trim());
				}
				if(tpCgcontractstt.getcUnitspec() != null) {//报关单位
					String unitsoec = tpCgcontractstt.getcUnitspec().trim();
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(unitsoec, "DW");
					if(thority == null) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("报关单位错误").build();
					}
					tstt.setcUnitspec(tpCgcontractstt.getcUnitspec().trim());		
					if(tpCgcontractstt.getcGoodsnum() != null) {//订货数量
						//报关单位是吨 和 立方米 时  保留4位小数 其他保留两位
						if("吨".equals(unitsoec) || "立方米".equals(unitsoec)) {
							tstt.setcGoodsnum(ri.formatToFour(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}else {
							tstt.setcGoodsnum(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}
					}
				}else if(tstt.getcUnitspec() != null){
					String unitsoec = tstt.getcUnitspec().trim();
					if(tpCgcontractstt.getcGoodsnum() != null) {//订货数量
						//报关单位是吨 和 立方米 时  保留4位小数 其他保留两位
						if("吨".equals(unitsoec) || "立方米".equals(unitsoec)) {
							tstt.setcGoodsnum(ri.formatToFour(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}else {
							tstt.setcGoodsnum(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
						}
					}
				}else{
					if(tpCgcontractstt.getcGoodsnum() != null) {//订货数量
						tstt.setcGoodsnum(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim())));
					}
				}
				
				if(tpCgcontractstt.getcPrice() != null) {
					tstt.setcPrice(tpCgcontractstt.getcPrice().trim());
				}
				
				
	//			if(tpCgcontractstt.getcGoodsnum() == null) {
	//				if(tstt.getcGoodsnum() != null) {
	//					tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcPrice().trim()).multiply(new BigDecimal(tstt.getcGoodsnum().trim()))));
	//				}
	//			}
				if(tpCgcontractstt.getcPrice() != null && tpCgcontractstt.getcGoodsnum() != null) {
					tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcPrice().trim()).multiply(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim()))));
				}else if(tpCgcontractstt.getcPrice() == null && tpCgcontractstt.getcGoodsnum() != null){
					if(tstt.getcPrice() != null) {
						tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tstt.getcPrice().trim()).multiply(new BigDecimal(tpCgcontractstt.getcGoodsnum().trim()))));
					}else {
						tstt.setcSumprice("0.00");
					}
				}else if(tpCgcontractstt.getcPrice() != null && tpCgcontractstt.getcGoodsnum() == null) {
					if(tstt.getcGoodsnum() != null) {
						tstt.setcSumprice(ri.formatForTwo(new BigDecimal(tpCgcontractstt.getcPrice().trim()).multiply(new BigDecimal(tstt.getcGoodsnum().trim()))));
					}else {
						tstt.setcSumprice("0.00");
					}
				}
				
				if(tpCgcontractstt.getcRemark() != null) {
					tstt.setcRemark(tpCgcontractstt.getcRemark().trim());
				}
				tstt.setcCreater(user.getUserName());
				tstt.setcCreatetime(new Date());
				int rowi = tpCgcontractsttMapper.insertSelective(tstt);
				if(rowi >= 0 ) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("导入失败").errcode(Errcode.FailParameterError).build();
				}
			}
		}
		if(cgcontractstt.size() > 0) {
			int row = tpCgcontractsttMapper.updatetpCgcontractstt(cgcontractstt);
			if(row >= 0 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("导入失败").errcode(Errcode.FailParameterError).build();
			}
		}
		
		if(tsttlist.size() > 0) {
			StaConmoney(tsttlist.get(0).getcConnum());//计算合同金额
		}
	
		if(j == 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").build();
		}
		return builder.msg("导入成功").errcode(Errcode.Success).build();
	}
	/**
	 * 用来计算合同金额
	 * @param connum
	 */
	private void StaConmoney(String connum) {
		RandomId ri = new RandomId();
		BigDecimal sumprivate = new BigDecimal(0);//存放所有物资的总金额
		BigDecimal money = new BigDecimal(0);//合同金额
		List<TpCgcontractstt> cgcontractstt = tpCgcontractsttMapper.selectByCountSt(connum);
		List<TpCgcontractmtt> cgcontractmtt = tpCgcontractmttMapper.selectByConnum(connum);
		if(cgcontractmtt.size() > 0 ) {
			money = money.add(new BigDecimal(cgcontractmtt.get(0).getcConmoney()));
		}
		if(cgcontractstt.size() > 0) {
			for (TpCgcontractstt tpCgcontractstt : cgcontractstt) {
				if(tpCgcontractstt.getcSumprice() != null ) {
					sumprivate = sumprivate.add(new BigDecimal(tpCgcontractstt.getcSumprice()));
				}		
			}
			System.out.println("合同金额::"+money+";"+"物资计算金额::"+sumprivate);
			if(money.compareTo(sumprivate) != 0) {
				cgcontractmtt.get(0).setcConmoney(ri.formatForTwo(sumprivate));
				tpCgcontractmttMapper.updateTpCgcontractmtt(cgcontractmtt.get(0));
			}
			
		}
		
	}
	//防错 有限制作用
	private int  BusinessJudge(String connum, String msg) {
		List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectByConnum(connum);
		if(selectInfo.size() == 1) {
			String xxkState = selectInfo.get(0).getcStatexxk().trim();
//			String state = "";
//			if(selectInfo.get(0).getcMadestate() != null ) {
//				state = selectInfo.get(0).getcMadestate().trim();
//			}
			if(selectInfo.get(0).getcOutconnum()==null) {
				return 3;
			}
			
			if(selectInfo.get(0).getcConnum().contains("CSPL")) {
				return 5;
			}
			//xxk06 : 已生成正式合同 状态
			if("xxk06".equals(xxkState)) {
				return 2;
			}
			//判断拟合同状态 状态为 xxk05：信息卡驳回  或 xxk01:未提交信息卡  返回 1  xxk07被正式合同撤回
			if(!"xxk05".equals(xxkState) && !"xxk01".equals(xxkState) && !"xxk07".equals(xxkState) && !"xxk02".equals(xxkState) ) {
				return 1;
			}
			
//				/
//				List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(connum);
//				if(tbDocumeform.size() == 1 ) {
					//当拟合同状态为 xxk02 : 未审核 状态
					//判断相对应 信息卡制作人完成状态， 当信息卡制作人完成状态为mk002 : 未审核(已提交) 或  mk003 : 审核通过  返回 2 
					//其它信息卡状态返回 3
//					if("mk002".equals(state) || "mk003".equals(state)) {
//						return 2;
//					}else {
						//把信息卡状态改为 xxk08 : 	变更申请   添加变更原因 C_CSUBMITTIME
//						selectInfo.get(0).setcStatexxk("xxk08");
//						selectInfo.get(0).setcMadestate("mk007");
//						selectInfo.get(0).setcCsubmittime(new Date());
//						selectInfo.get(0).setcSw18(msg);
//						int row = tpCgcontractmttMapper.updateTpCgcontractmtt(selectInfo.get(0));
//						if(row >= 0) {
//							System.out.println("拟合同的信息卡状态改变失败");
//							return 4;
//						}
//						return 3;
//					}

//				}
//			}
		}
		//其它 返回 0
		return 0;
	}
	private int  BusinessJudge2(String connum, String msg) {
		List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectByConnum(connum);
		if(selectInfo.size() == 1) {
			String xxkState = selectInfo.get(0).getcStatexxk().trim();
			//xxk06 : 已生成正式合同 状态
			if("xxk06".equals(xxkState)) {
				return 2;
			}
			//判断拟合同状态 状态为 xxk05：信息卡驳回  或 xxk01:未提交信息卡  返回 1  xxk07被正式合同撤回  
			if(!"xxk05".equals(xxkState)  &&!"xxk01".equals(xxkState) && !"xxk07".equals(xxkState)) {
				return 1;
			}
			
//				/
//				List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(connum);
//				if(tbDocumeform.size() == 1 ) {
					//当拟合同状态为 xxk02 : 未审核 状态
					//判断相对应 信息卡制作人完成状态， 当信息卡制作人完成状态为mk002 : 未审核(已提交) 或  mk003 : 审核通过  返回 2 
					//其它信息卡状态返回 3
//					if("mk002".equals(state) || "mk003".equals(state)) {
//						return 2;
//					}else {
						//把信息卡状态改为 xxk08 : 	变更申请   添加变更原因 C_CSUBMITTIME
//						selectInfo.get(0).setcStatexxk("xxk08");
//						selectInfo.get(0).setcMadestate("mk007");
//						selectInfo.get(0).setcCsubmittime(new Date());
//						selectInfo.get(0).setcSw18(msg);
//						int row = tpCgcontractmttMapper.updateTpCgcontractmtt(selectInfo.get(0));
//						if(row >= 0) {
//							System.out.println("拟合同的信息卡状态改变失败");
//							return 4;
//						}
//						return 3;
//					}

//				}
//			}
		}
		//其它 返回 0
		return 0;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11RECALL(User user,RequestObject<EmptyTag, ContractmtList2> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//合同号
		System.out.println("撤回的合同号：：："+requestObject.getData().getTpCgcontractmtt().get(0).getcConnum());
		//判断是否已经生成正式合同
		List<TpCgcontractmt> selectTpCgcontractmt = tpCgcontractmtMapper.selectByConnum(requestObject.getData().getTpCgcontractmtt().get(0).getcConnum());
		if(!selectTpCgcontractmt.isEmpty()) {
			return builder.errcode(Errcode.FailParameterError).msg("该合同已经生成正式合同，请联系相关人员撤回拟合同！！！！！").build();
		}
		//修改信息卡
		List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(requestObject.getData().getTpCgcontractmtt().get(0).getcConnum());
		if(seletByeCconnum.size() > 0) {
			TbDocumeform tbDocumeform = new TbDocumeform();
			tbDocumeform.setcMadestate("mk005");//采购撤回
			tbDocumeform.setcCheckstate("xcc003");
			tbDocumeform.setcId(seletByeCconnum.get(0).getcId());
			tbDocumeform.setcXxkrecaller(user.getUserName());
			tbDocumeform.setcRecallstate("1");
			tbDocumeform.setcRecalltime(new Date());
			//撤回信息卡的审核状态
			int rown = tbDocumeformMapper.updateByPrimaryKeySelective(tbDocumeform);
			if(rown>0) {
				return builder.errcode(Errcode.FailParameterError).msg("撤回信息卡失败！！！").build();
			}
		}
		
		//修改拟合同
		List<TpCgcontractmtt> selectBycConnum = tpCgcontractmttMapper.selectBycConnum(requestObject.getData().getTpCgcontractmtt().get(0).getcConnum());
		int getcRecallnum = selectBycConnum.get(0).getcRecallnum();
		getcRecallnum++;
		TpCgcontractmtt tpCgcontractmtt  = new TpCgcontractmtt();
		tpCgcontractmtt.setcConnum(selectBycConnum.get(0).getcConnum());
		tpCgcontractmtt.setcMadestate("mk005");//采购撤回
		tpCgcontractmtt.setcStatexxk("xxk05");//驳回信息卡
		tpCgcontractmtt.setcRecallnum(getcRecallnum);
		tpCgcontractmtt.setcRecalltime(new Date());
		tpCgcontractmtt.setcXxkrecaller(user.getUserName());
		tpCgcontractmtt.setcRecallstate("1");//标记状态
		//修改拟合同对应的状态信息
		int row = tpCgcontractmttMapper.updateTpCgcontractmtt2(tpCgcontractmtt);
		if(row>0) {
			return builder.errcode(Errcode.FailParameterError).msg("撤回信息卡失败！！！").build();
		}
		return builder.errcode(Errcode.Success).msg("撤回信息卡成功！！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<CG_MNHT_M1S1>> tJXxkSJ(
			RequestObject<EmptyTag, ContractmtList2> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgordermt2 tpCgordermt2 = requestObject.getData().getCgQ001M1s14().get(0);
		List<CG_MNHT_M1S1> tJXxkSJ = tpCgcontractmttMapper.tJXxkSJ(tpCgordermt2);
		if(tJXxkSJ.isEmpty()) {
			return builder.data(tJXxkSJ).errcode(Errcode.FailParameterError).msg("查询无数据！！！").build();
		}
		
		return builder.data(tJXxkSJ).errcode(Errcode.Success).msg("查询成功！！！").build();
	}
}
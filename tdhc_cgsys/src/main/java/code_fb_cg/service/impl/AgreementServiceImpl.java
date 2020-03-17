package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb.mapper.CG_MNHT_Mapper;
import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb.response.CG_MNHT_Response_M1S1;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TpCancelment;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.mapper.TbDocumeformMapper;
import code_fb_cg.mapper.TbDocumeformsonMapper;
import code_fb_cg.mapper.TpCancelmentMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpSettlementMapper;
import code_fb_cg.request.AgreementRequest;
import code_fb_cg.request.TpCgorderRequest;
import code_fb_cg.service.AgreementService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service("agreementService")
public class AgreementServiceImpl implements AgreementService {

	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TbDocumeformMapper tbDocumeformMapper;
	@Autowired
	private TbDocumeformsonMapper tbDocumeformsonMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	@Qualifier("tpCgauthorityMapper")
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	@Autowired
	private TpSettlementMapper tpSettlementMapper;
	@Autowired
	private TpCancelmentMapper tpCancelmentMapper;
	@Autowired
	@Qualifier("cgMnhtMapper")
	public CG_MNHT_Mapper cgMnhtMapper;
	
	
	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> MNHTQ(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		String msg = "查询成功";
		String getcSubitemid = "";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
		System.out.println(user.getUserName());
		TpCgauthority tpCgauthority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		if(tpCgauthority != null) {
			getcSubitemid = tpCgauthority.getcSubitemid();
		}else {
			getcSubitemid = null;
		}
		List<CG_MNHT_M1S1> m1s11qcg_MNHT_M1S1 = cgMnhtMapper.selectAgreement(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
					cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime(),getcSubitemid);
		for (CG_MNHT_M1S1 cg_MNHT_M1S1 : m1s11qcg_MNHT_M1S1) {
			if(cg_MNHT_M1S1.getcSw22() == null && cg_MNHT_M1S1.getcDelivdate() != null) {
				cg_MNHT_M1S1.setcSw22(cg_MNHT_M1S1.getcDelivdate());
			}
		}
		return builder.data(m1s11qcg_MNHT_M1S1).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	
	@Override
	@Transactional 
	public ResponseObject<EmptyTag, EmptyData> ABGXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		Date date = new Date();
		String cId = ri.getRandomId();
		TpCgcontractmtt tpCgcontractmtt = requestObject.getTpCgcontractmtt();//新的 （供方 需方  合同号 签订时间）
		TpCgcontractmtt contractmtt = requestObject.getContractmtt();//变更信息
		List<TpCgcontractstt> tsttlist = requestObject.getTsttlist();//变更后的原合同物资
		List<TpCgorderRequest> tpCgorderRequest = requestObject.getTpCgorderRequest();//追加的物资
		List<TpCgcontractstt> tpCgcontractstt = new ArrayList<TpCgcontractstt>();
		TpCgorderst tpCgorderst = new TpCgorderst();
		//判断是不是已有此协议
		List<TpCgcontractmtt> tmtt = tpCgcontractmttMapper.selectByConnum(tpCgcontractmtt.getcConnum().trim());
		if(tmtt.size() > 0) {
			return builder.msg("请在已有的变更合同上做变更").errcode(Errcode.FailShowWarningMsg).build();
		}
		//获取原合同数据
		List<TpCgcontractmtt> cgcontractmtt = tpCgcontractmttMapper.selectByConnum(tsttlist.get(0).getcConnum());
		tpCgcontractmtt.setcId(cId);
		tpCgcontractmtt.setcConnum(tpCgcontractmtt.getcConnum().trim());
		tpCgcontractmtt.setcTrinvoice(contractmtt.getcTrinvoice().trim());//税改发票
		tpCgcontractmtt.setcConmoney(ri.formatForTwo(new BigDecimal(contractmtt.getcConmoney())));//合同金额
		tpCgcontractmtt.setcQid(cgcontractmtt.get(0).getcId());//变更前合同主键
		tpCgcontractmtt.setcQconnum(cgcontractmtt.get(0).getcConnum());//变更前合同号
		tpCgcontractmtt.setcCludeaddr(cgcontractmtt.get(0).getcCludeaddr());//送货地址
		tpCgcontractmtt.setcState(cgcontractmtt.get(0).getcState());//合同状态
		tpCgcontractmtt.setcForinland(cgcontractmtt.get(0).getcForinland());//传给国外时间		
		tpCgcontractmtt.setcForoutland(cgcontractmtt.get(0).getcForoutland());//回传国内时间
		tpCgcontractmtt.setcDr(cgcontractmtt.get(0).getcDr());//预计到货时间	
		tpCgcontractmtt.setcRemark(cgcontractmtt.get(0).getcRemark());//备注
		tpCgcontractmtt.setcSw17(cgcontractmtt.get(0).getcSw17());//收货单位
		tpCgcontractmtt.setcCreater(user.getUserName());//创建人
		tpCgcontractmtt.setcCreatetime(date);//创建时间
		tpCgcontractmtt.setcSw10(cgcontractmtt.get(0).getcSw10());//采购原
		tpCgcontractmtt.setcSw05(cgcontractmtt.get(0).getcSw05());//转卖合同号
		tpCgcontractmtt.setcSw03(cgcontractmtt.get(0).getcSw03());//货物名称
//		tpCgcontractmtt.setcCludetime(tpCgcontractmtt.getcCludetime());//签订时间
		tpCgcontractmtt.setcOutconnum(cgcontractmtt.get(0).getcOutconnum());//外贸合同号
		tpCgcontractmtt.setcSignplace(cgcontractmtt.get(0).getcSignplace());//签订地址
		tpCgcontractmtt.setcSw21(cgcontractmtt.get(0).getcSw21());//出口商		
		if(cgcontractmtt.get(0).getcConline() == null) {
			tpCgcontractmtt.setcConline(cgcontractmtt.get(0).getcId());
		}else {
			tpCgcontractmtt.setcConline(cgcontractmtt.get(0).getcConline());
		}
		if(contractmtt.getcPayway() != null && contractmtt.getcPayway() != "") {
			tpCgcontractmtt.setcPayway(contractmtt.getcPayway());//付款方式
			tpCgcontractmtt.setcSw23(contractmtt.getcSw23());//变更前付款方式
		}else {
			tpCgcontractmtt.setcPayway(contractmtt.getcSw23());//付款方式
//			tpCgcontractmtt.setcSw23("");//变更前付款方式
		}
		if(contractmtt.getcSw22() != null && contractmtt.getcSw22() != "") {
			tpCgcontractmtt.setcSw22(contractmtt.getcSw22());//交货期限
			tpCgcontractmtt.setcSw24(contractmtt.getcSw24());//变更前交货期限
		}else {
			tpCgcontractmtt.setcSw22(contractmtt.getcSw24());//交货期限
//			tpCgcontractmtt.setcSw24("");//变更前交货期限
		}
		if(contractmtt.getcSw25() != null && contractmtt.getcSw25() != "") {
			tpCgcontractmtt.setcSw25(contractmtt.getcSw25());
			if(contractmtt.getcSw27() != null && contractmtt.getcSw27() != "") {
				tpCgcontractmtt.setcSw27(contractmtt.getcSw27());
			}
		}
		if(contractmtt.getcSw26() != null && contractmtt.getcSw26() != "") {
			tpCgcontractmtt.setcSw26(contractmtt.getcSw26());
			if(contractmtt.getcSw28() != null && contractmtt.getcSw28() != "") {
				tpCgcontractmtt.setcSw28(contractmtt.getcSw28());
			}
		}
		//查询此合同的所有物资  确定新的合同行号
		List<TpCgcontractstt> contractstt = tpCgcontractsttMapper.selectBycConnum(contractmtt.getcConnum().trim());
		int conlin = 1;
		if(contractstt.size() > 0) {
			conlin = contractstt.size() + 1;
		}
		BigDecimal num;//数量
		BigDecimal price;//单价
		BigDecimal numprice;//总价
		if(tpCgorderRequest.size() > 0) {
			for (TpCgorderRequest tpCgorder : tpCgorderRequest) {
				TpCgcontractstt tstt = new TpCgcontractstt();
				tstt.setcMtid(cId);
				tstt.setcConnum(tpCgcontractmtt.getcConnum());
				if (conlin < 10) {
					tstt.setcConline("0000" + conlin);
				}
				if (10 <= conlin && conlin < 100) {
					tstt.setcConline("000" + conlin);
				}
				if (100 <= conlin && conlin < 1000) {
					tstt.setcConline("00" + conlin);
				}
				if (1000 <= conlin && conlin < 10000) {
					tstt.setcConline("0" + conlin);
				}
				conlin++;
//				String unit = "";
//				if(tstt.getcUnitspec()!=null) {
//					unit = tstt.getcUnitspec().trim();
//				}else {
//					unit = tstt.getcUnit().trim();
//				}
//				if(tstt.getcGoodsnum() != null) {
//					num = new BigDecimal(tstt.getcGoodsnum());//数量
//					if("吨".equals(unit) || "立方米".equals(unit)) {
//						tstt.setcGoodsnum(ri.formatToFour(num));
//					}else {
//						tstt.setcGoodsnum(ri.formatForTwo(num));
//					}
//				}
//				if(tstt.getcPrice() != null) {
//					price = new BigDecimal(tstt.getcPrice());//单价
//					tstt.setcPrice(ri.formatForTwo(price));
//				}
//				if(tstt.getcSumprice() != null) {
//					numprice = new BigDecimal(tstt.getcSumprice());//单价
//					tstt.setcSumprice(ri.formatForTwo(numprice));
//				}
				// 物资名称
				tstt.setcGoodsname(tpCgorder.getcGoodsname());
				if(tpCgorder.getcCuspec() != null && tpCgorder.getcCuspec().indexOf("*") != -1) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("报关规格不能带“*”号！！！").errcode(Errcode.FailShowWarningMsg).build();
				}
				// 报关规格型号
				tstt.setcSpec(tpCgorder.getcCuspec());
				//物资规格型号
				tstt.setcCuspec(tpCgorder.getcSpec());
				// 单位
				tstt.setcUnit(tpCgorder.getcUnit());
				//报关单位
//				tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				if(tpCgorder.getcUnitspec() == null) {
					tstt.setcUnitspec(tpCgorder.getcUnitspec());
				}else {
					String dw = tpCgorder.getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
					if(thority != null) {
						tstt.setcUnitspec(tpCgorder.getcUnitspec());
					}else {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("物资名称为: "+tpCgorder.getcGoodsname()+" 的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).build();
					}
				}
				
				
				// 含税单价
				tstt.setcPrice(tpCgorder.getcPrice());
				// 订货数量
				tstt.setcGoodsnum(tpCgorder.getcNum());
				////报关物资名称
				if(tpCgorder.getcCustoms() == null) {
					tstt.setcSw08("");
				}else {
					tstt.setcSw08(tpCgorder.getcCustoms());
				}
				//信息卡品名
				tstt.setcName(tstt.getcSw08());
				// 订货情况
				tstt.setcGoodscase(null);
				// 含税总价
				tstt.setcSumprice(tpCgorder.getcSumprice());
				// 预计到货时间
				tstt.setcBeforearrtime(null);
				// 预计到货说明
				tstt.setcArrgoodsex(null);
				// 到货时间
				tstt.setcArrgoodstime(null);
				// 累计到货量
				tstt.setcGroudtotalnum("0");
				// 剩余数量
				tstt.setcResiduenum(tpCgorder.getcNum());
				// 是/否到齐
				tstt.setcArrallyorn("0");
				// 备注
				tstt.setcRemark(tpCgorder.getcRemark());
				// 预登记状态
				tstt.setcState("3");
				// 是/否验收
				tstt.setcCheckyorn("0");
				// 质保期限
				tstt.setcQuadealline(null);
				// 请购单号ID
				if(tpCgorder.getcMtid() != null) {
					tstt.setcOrid(tpCgorder.getcMtid());
				}				
				// 删除标识
				tstt.setcDr("0");
				// 时间戳
				tstt.setcTimestamp(new Date());
				// 物资单号
				if(tpCgorder.getcId() != null) {
					tstt.setcSw02(tpCgorder.getcId());
				}			
				// 请购单号
				if(tpCgorder.getcOrdernum() != null) {
					tstt.setcSw03(tpCgorder.getcOrdernum());
				}
				
				// 是否有出船记录
				tstt.setcSw04("0");
				// 外贸号-存档号
				if(tpCgorder.getcNo() != null) {
					tstt.setcSw05(tpCgorder.getcNo());
				}				
				// 创建人
				tstt.setcCreater(user.getUserName());
				// 创建时间
				tstt.setcCreatetime(new Date());
			
//				if(tstt.getcGoodsnum() != null && tstt.getcPrice() != null) {
//					num = new BigDecimal(tstt.getcGoodsnum());//数量
//					price = new BigDecimal(tstt.getcPrice());//单价
//					numprice = num.multiply(price);	
//					tstt.setcPrice(ri.formatForTwo(price));
//					tstt.setcSumprice(ri.formatForTwo(numprice));
//					
//					if("吨".equals(unit) || "立方米".equals(unit)) {
//						tstt.setcGoodsnum(ri.formatToFour(num));
//					}else {
//						tstt.setcGoodsnum(ri.formatForTwo(num));
//					}
//				}		
				tpCgorderst.setcId(tpCgorder.getcId());
				 tpCgorderst.setcState("6");
				 tpCgorderst.setcSw10(contractmtt.getcConnum());
				 tpCgorderst.setcSw11("");
				 int srow = 0;
				 srow = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				 if(srow == 0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return builder.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).build();
				 }
				tpCgcontractstt.add(tstt);
			}
		}
		List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(contractmtt.getcConnum());
		BigDecimal num1;//累计到货量	
		for (TpCgcontractstt tstt : tsttlist) {
			if(tmtlist.size() > 0) {
				List<TpCgcontractst> tst = tpCgcontractstMapper.selectByConline(contractmtt.getcConnum(), tstt.getcConline());
//				System.out.println(contractmtt.getcConnum() + "aaaaaaaaaaaaaaaaaaaaa");
//				System.out.println(tstt.getcConline() + "b");
				if(tst.size() > 0) {
					num = new BigDecimal(tstt.getcGoodsnum());
					num1 = new BigDecimal(tst.get(0).getcGroudtotalnum());			
					if(num.compareTo(num1) < 0 ) {
						return builder.msg("已有到货量大于变更后数量，无法变更！！！").errcode(Errcode.FailShowWarningMsg).build();
					}
				}				
			}
			

				tstt.setcQid(tstt.getcId());	
				tstt.setcMtid(cId);
				String unit = "";
				if(tstt.getcUnitspec()!=null) {
					unit = tstt.getcUnitspec().trim();
				}else {
					unit = tstt.getcUnit().trim();
				}
				if(tstt.getcGoodsnum() != null) {
					num = new BigDecimal(tstt.getcGoodsnum());//数量
					if("吨".equals(unit) || "立方米".equals(unit)) {
						tstt.setcGoodsnum(ri.formatToFour(num));
					}else {
						tstt.setcGoodsnum(ri.formatForTwo(num));
					}
				}
				if(tstt.getcPrice() != null) {
					price = new BigDecimal(tstt.getcPrice());//单价
					tstt.setcPrice(ri.formatForTwo(price));
				}
				if(tstt.getcSumprice() != null) {
					numprice = new BigDecimal(tstt.getcSumprice());//单价
					tstt.setcSumprice(ri.formatForTwo(numprice));
				}
				tstt.setcConnum(tpCgcontractmtt.getcConnum());
				tpCgcontractstt.add(tstt);
//				num = new BigDecimal(tstt.getcGoodsnum());
//			if(num.compareTo(BigDecimal.ZERO) == 0 && tstt.getcSw02() != null) {
//				TpCgorderst cgorderst;
//				if(tstt.getcSw02().indexOf("/") != -1) {
//					String[] cs02 =  tstt.getcSw02().split("/");
//					cgorderst = tpCgorderstMapper.selectByPrimaryKey(cs02[0]);
//					if("1".equals(cgorderst.getcState()) || "6".equals(cgorderst.getcState())) {
//						if(contractmtt.getcConnum().equals(cgorderst.getcSw10()) || cgorderst.getcSw10() == null) {
//							for (String string : cs02) {								
//								int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
//								if(row0 == 0) {
//									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
//								}
//							}
//						}
//					}
//					
//				}else {
//					cgorderst = tpCgorderstMapper.selectByPrimaryKey(tstt.getcSw02());
//					if("1".equals(cgorderst.getcState()) || "6".equals(cgorderst.getcState())) {
//						if(contractmtt.getcConnum().equals(cgorderst.getcSw10()) || cgorderst.getcSw10() == null) {
//							int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tstt.getcSw02());
//							if(row0 == 0) {
//								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//								return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
//							}
//						}
//					}
//					
//				}
//			}			
		}
		int row = tpCgcontractmttMapper.insertSelective(tpCgcontractmtt);
		if(row > 0 ) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("新增失败").errcode(Errcode.FailParameterError).build();
		}
		int rows = tpCgcontractsttMapper.insertlist(tpCgcontractstt);
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("新增失败").errcode(Errcode.FailParameterError).build();
		}			
		return builder.msg("新增成功").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> UBGXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		Date date = new Date();
		TpCgcontractmtt tpCgcontractmtt = requestObject.getTpCgcontractmtt();//修改后的 （供方 需方  合同号 签订时间）
		TpCgcontractmtt contractmtt = requestObject.getContractmtt();//修改后变更信息
		TpCgcontractmtt tmtt = requestObject.getTmtt();//修改前的合同信息
		List<TpCgcontractstt> tsttlist = requestObject.getTsttlist();//修改的合同物资
		
		List<TpCgorderRequest> tpCgorderRequest = requestObject.getTpCgorderRequest();//追加的物资
		List<TpCgcontractstt> tpCgcontractstt = new ArrayList<TpCgcontractstt>();
		TpCgorderst tpCgorderst = new TpCgorderst();
		tmtt.setcCludecom(tpCgcontractmtt.getcCludecom());
		tmtt.setcSupplier(tpCgcontractmtt.getcSupplier());
		tmtt.setcConnum(tpCgcontractmtt.getcConnum());
		tmtt.setcCludetime(tpCgcontractmtt.getcCludetime());
		tmtt.setcConmoney(ri.formatForTwo(new BigDecimal(contractmtt.getcConmoney())));
		tmtt.setcTrinvoice(contractmtt.getcTrinvoice());	
		tmtt.setcModifier(user.getUserName());
		tmtt.setcModifytime(date);
		if(contractmtt.getcPayway() != null && contractmtt.getcPayway() != "") {
			tmtt.setcPayway(contractmtt.getcPayway());//付款方式
			tmtt.setcSw23(contractmtt.getcSw23());//变更前付款方式
		}else {
			tmtt.setcPayway(contractmtt.getcSw23());//付款方式
		}
		if(contractmtt.getcSw22() != null && contractmtt.getcSw22() != "") {
			tmtt.setcSw22(contractmtt.getcSw22());//交货期限
			tmtt.setcSw24(contractmtt.getcSw24());//变更前交货期限
		}else {
			tmtt.setcSw22(contractmtt.getcSw24());//交货期限
		}
		if(contractmtt.getcSw25() != null && contractmtt.getcSw25() != "") {
			tmtt.setcSw25(contractmtt.getcSw25());
			if(contractmtt.getcSw27() != null && contractmtt.getcSw27() != "") {
				tmtt.setcSw27(contractmtt.getcSw27());
			}
		}
		if(contractmtt.getcSw26() != null && contractmtt.getcSw26() != "") {
			tmtt.setcSw26(contractmtt.getcSw26());
			if(contractmtt.getcSw28() != null && contractmtt.getcSw28() != "") {
				tmtt.setcSw28(contractmtt.getcSw28());
			}
		}
		tmtt.setcSw29(tpCgcontractmtt.getcSw29());
		int row = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(row > 0) {
			return builder.msg("修改失败").errcode(Errcode.FailParameterError).build();
		}
		BigDecimal num;//数量
		BigDecimal price;//单价
		BigDecimal numprice;//总价
		BigDecimal num1;//累计到货量	
		for (TpCgcontractstt tstt : tsttlist) {
			if (tstt.getcQid() != null) {
				List<TpCgcontractst> tst = tpCgcontractstMapper.selectByConline(contractmtt.getcConnum(),
						tstt.getcConline());
				if(tst.size() > 0) {
					num = new BigDecimal(tstt.getcGoodsnum());
					num1 = new BigDecimal(tst.get(0).getcGroudtotalnum());
					if (num.compareTo(num1) < 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();// 事物回滚
						return builder.msg("已有到货量大于变更后数量，无法变更！！！").errcode(Errcode.FailShowWarningMsg).build();
					}
				}
				
			}
			String unit = "";
			if (tstt.getcUnitspec() != null) {
				unit = tstt.getcUnitspec().trim();
			} else {
				unit = tstt.getcUnit().trim();
			}
			if (tstt.getcGoodsnum() != null) {
				num = new BigDecimal(tstt.getcGoodsnum());// 数量
				if ("吨".equals(unit) || "立方米".equals(unit)) {
					tstt.setcGoodsnum(ri.formatToFour(num));
				} else {
					tstt.setcGoodsnum(ri.formatForTwo(num));
				}
			}
			if (tstt.getcPrice() != null) {
				price = new BigDecimal(tstt.getcPrice());// 单价
				tstt.setcPrice(ri.formatForTwo(price));
			}
			if (tstt.getcSumprice() != null) {
				numprice = new BigDecimal(tstt.getcSumprice());// 单价
				tstt.setcSumprice(ri.formatForTwo(numprice));
			}
		}
		int rowu = tpCgcontractsttMapper.updatetpCgcontractstt(tsttlist);
		if(rowu > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();// 事物回滚
			return builder.msg("修改失败").errcode(Errcode.FailParameterError).build();
		}
		//查询此合同的所有物资  确定新的合同行号
				List<TpCgcontractstt> contractstt = tpCgcontractsttMapper.selectBycConnum(contractmtt.getcConnum().trim());
				int conlin = 1;
				if(contractstt.size() > 0) {
					conlin = contractstt.size() + 1;
				}
		if(tpCgorderRequest.size() > 0) {
			for (TpCgorderRequest tpCgorder : tpCgorderRequest) {
				TpCgcontractstt tstt = new TpCgcontractstt();
				tstt.setcMtid(tmtt.getcId());
				tstt.setcConnum(tpCgcontractmtt.getcConnum());
				if (conlin < 10) {
					tstt.setcConline("0000" + conlin);
				}
				if (10 <= conlin && conlin < 100) {
					tstt.setcConline("000" + conlin);
				}
				if (100 <= conlin && conlin < 1000) {
					tstt.setcConline("00" + conlin);
				}
				if (1000 <= conlin && conlin < 10000) {
					tstt.setcConline("0" + conlin);
				}
				conlin++;
//				String unit = "";
//				if(tstt.getcUnitspec()!=null) {
//					unit = tstt.getcUnitspec().trim();
//				}else {
//					unit = tstt.getcUnit().trim();
//				}
//				if(tstt.getcGoodsnum() != null) {
//					num = new BigDecimal(tstt.getcGoodsnum());//数量
//					if("吨".equals(unit) || "立方米".equals(unit)) {
//						tstt.setcGoodsnum(ri.formatToFour(num));
//					}else {
//						tstt.setcGoodsnum(ri.formatForTwo(num));
//					}
//				}
//				if(tstt.getcPrice() != null) {
//					price = new BigDecimal(tstt.getcPrice());//单价
//					tstt.setcPrice(ri.formatForTwo(price));
//				}
//				if(tstt.getcSumprice() != null) {
//					numprice = new BigDecimal(tstt.getcSumprice());//单价
//					tstt.setcSumprice(ri.formatForTwo(numprice));
//				}
				
				
		
				// 物资名称
				tstt.setcGoodsname(tpCgorder.getcGoodsname());
				if(tpCgorder.getcCuspec() != null && tpCgorder.getcCuspec().indexOf("*") != -1) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("报关规格不能带“*”号！！！").errcode(Errcode.FailShowWarningMsg).build();
				}
				// 报关规格型号
				tstt.setcSpec(tpCgorder.getcCuspec());
				//物资规格型号
				tstt.setcCuspec(tpCgorder.getcSpec());
				// 单位
				tstt.setcUnit(tpCgorder.getcUnit());
				//报关单位
//				tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				if(tpCgorder.getcUnitspec() == null) {
					tstt.setcUnitspec(tpCgorder.getcUnitspec());
				}else {
					String dw = tpCgorder.getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
					if(thority != null) {
						tstt.setcUnitspec(tpCgorder.getcUnitspec());
					}else {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("物资名称为: "+tpCgorder.getcGoodsname()+" 的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).build();
					}
				}
				
				
				// 含税单价
				tstt.setcPrice(tpCgorder.getcPrice());
				// 订货数量
				tstt.setcGoodsnum(tpCgorder.getcNum());
				////报关物资名称
				if(tpCgorder.getcCustoms() == null) {
					tstt.setcSw08("");
				}else {
					tstt.setcSw08(tpCgorder.getcCustoms());
				}
				//信息卡品名
				tstt.setcName(tstt.getcSw08());
				// 订货情况
				tstt.setcGoodscase(null);
				// 含税总价
				tstt.setcSumprice(tpCgorder.getcSumprice());
				// 预计到货时间
				tstt.setcBeforearrtime(null);
				// 预计到货说明
				tstt.setcArrgoodsex(null);
				// 到货时间
				tstt.setcArrgoodstime(null);
				// 累计到货量
				tstt.setcGroudtotalnum("0");
				// 剩余数量
				tstt.setcResiduenum(tpCgorder.getcNum());
				// 是/否到齐
				tstt.setcArrallyorn("0");
				// 备注
				tstt.setcRemark(tpCgorder.getcRemark());
				// 预登记状态
				tstt.setcState("3");
				// 是/否验收
				tstt.setcCheckyorn("0");
				// 质保期限
				tstt.setcQuadealline(null);
				// 请购单号ID
				if(tpCgorder.getcMtid() != null) {
					tstt.setcOrid(tpCgorder.getcMtid());
				}				
				// 删除标识
				tstt.setcDr("0");
				// 时间戳
				tstt.setcTimestamp(new Date());
				// 物资单号
				if(tpCgorder.getcId() != null) {
					tstt.setcSw02(tpCgorder.getcId());
				}			
				// 请购单号
				if(tpCgorder.getcOrdernum() != null) {
					tstt.setcSw03(tpCgorder.getcOrdernum());
				}
				
				// 是否有出船记录
				tstt.setcSw04("0");
				// 外贸号-存档号
				if(tpCgorder.getcNo() != null) {
					tstt.setcSw05(tpCgorder.getcNo());
				}				
				// 创建人
				tstt.setcCreater(user.getUserName());
				// 创建时间
				tstt.setcCreatetime(new Date());
			
//				if(tstt.getcGoodsnum() != null && tstt.getcPrice() != null) {
//					num = new BigDecimal(tstt.getcGoodsnum());//数量
//					price = new BigDecimal(tstt.getcPrice());//单价
//					numprice = num.multiply(price);	
//					tstt.setcPrice(ri.formatForTwo(price));
//					tstt.setcSumprice(ri.formatForTwo(numprice));
//					
//					if("吨".equals(unit) || "立方米".equals(unit)) {
//						tstt.setcGoodsnum(ri.formatToFour(num));
//					}else {
//						tstt.setcGoodsnum(ri.formatForTwo(num));
//					}
//				}		
				tpCgorderst.setcId(tpCgorder.getcId());
				 tpCgorderst.setcState("6");
				 tpCgorderst.setcSw10(contractmtt.getcConnum());
				 tpCgorderst.setcSw11("");
				 int srow = 0;
				 srow = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				 if(srow == 0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return builder.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).build();
				 }
				tpCgcontractstt.add(tstt);
			}
			int rows = tpCgcontractsttMapper.insertlist(tpCgcontractstt);
			if(rows > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("修改失败").errcode(Errcode.FailParameterError).build();
			}	
		}	
		return builder.msg("修改成功").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> TJXXK(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		String cId = ri.getRandomId();
		Date date = new Date();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		if("1".equals(tmtt.getcSw29()) || "2".equals(tmtt.getcSw29())) {
			return builder.errcode(Errcode.FailParameterError).msg("无需走信息卡，直接更新正式合同即可！！！").build();
		}
		if(!tmtt.getcStatexxk().equals("xxk01")) {
			return builder.errcode(Errcode.FailParameterError).msg("该合同已经提交过信息卡，请走信息卡变更流程！！！").build();
		}
		tmtt.setcStatexxk("xxk02");
		tmtt.setcMadestate("mk004");//制作人完成状态--未审核
		int rowm = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(rowm > 0) {
			return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
		}
		List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeConId(tmtt.getcQid());		
		if(seletByeCconnum.size() == 0) {
			seletByeCconnum = tbDocumeformMapper.seletByeCconnum(tmtt.getcQconnum());
		}
		List<TbDocumeformson> tbDocumeformAdd = new ArrayList<TbDocumeformson>();//需要添加的信息卡物资
		if(seletByeCconnum.size() == 0) {
			TpCgcontractmtt tmtt2 = tpCgcontractmttMapper.selectByPrimaryKey(tmtt.getcQid());
			while("1".equals(tmtt2.getcSw29()) || "2".equals(tmtt2.getcSw29())) {
				tmtt2 = tpCgcontractmttMapper.selectByPrimaryKey(tmtt2.getcQid());
			}
			seletByeCconnum = tbDocumeformMapper.seletByeConId(tmtt2.getcId());		
			if(seletByeCconnum.size() == 0) {
				seletByeCconnum = tbDocumeformMapper.seletByeCconnum(tmtt2.getcConnum());
			}
//			String id = seletByeCconnum.get(0).getcId();
			seletByeCconnum.get(0).setcId(cId);//主键
			seletByeCconnum.get(0).setcConnum(tmtt.getcConnum());//合同号
			seletByeCconnum.get(0).setcConmoney(tmtt.getcConmoney());//合同金额
			seletByeCconnum.get(0).setcSupplier(tmtt.getcSupplier());//供应商
			TpCgauthority selectcItemidSubitemid = tpCgauthorityMapper.selectcItemidSubitemid(tmtt.getcCludecom(), "QDGS");
			if(selectcItemidSubitemid != null && selectcItemidSubitemid.getcSubitemdes() != null) {
				seletByeCconnum.get(0).setcExporter(selectcItemidSubitemid.getcSubitemdes());//采购单位
			}		
			seletByeCconnum.get(0).setcSw04(tmtt.getcId());//合同主键
//			seletByeCconnum.get(0).setcCheckstate("xcc001");//审核状态--未审核
			seletByeCconnum.get(0).setcMadestate("mk004");
			seletByeCconnum.get(0).setcCreater("");
			seletByeCconnum.get(0).setcCreatetime(new Date());
			int row = tbDocumeformMapper.insertSelective(seletByeCconnum.get(0));
			if(row > 0) {
				return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
			}
			List<TpCgcontractstt> tsttlist = tpCgcontractsttMapper.selectByCountSt(tmtt.getcConnum());
			for (TpCgcontractstt tstt : tsttlist) {
				if(new BigDecimal(tstt.getcGoodsnum()).compareTo(BigDecimal.ZERO) > 0) {
					TbDocumeformson form = new TbDocumeformson();
					form.setcGoodsname(tstt.getcSw08());
					form.setcName(tstt.getcSw08());
					form.setcSpec(tstt.getcSpec());
					form.setcNum(tstt.getcGoodsnum());
					form.setcUnit(tstt.getcUnitspec());
					form.setcSw04(tstt.getcSumprice());
					form.setcConnum(seletByeCconnum.get(0).getcConnum());
					form.setcSw01(tstt.getcId());
					form.setcFatherid(seletByeCconnum.get(0).getcId());
					form.setcCreater(user.getUserName());
					form.setcCreatetime(date);
					form.setcFatherid(cId);
					tbDocumeformAdd.add(form);
				}
			}
			//添加信息卡物资
			if(tbDocumeformAdd.size() > 0) {
				int insertSelective = tbDocumeformsonMapper.insertSelective(tbDocumeformAdd);
				if(insertSelective > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
				}
			}
		}else
		if(seletByeCconnum.size() > 0) {
			String id = seletByeCconnum.get(0).getcId();
			seletByeCconnum.get(0).setcId(cId);//主键
			seletByeCconnum.get(0).setcConnum(tmtt.getcConnum());//合同号
			seletByeCconnum.get(0).setcConmoney(tmtt.getcConmoney());//合同金额
			seletByeCconnum.get(0).setcSupplier(tmtt.getcSupplier());//供应商
			seletByeCconnum.get(0).setcShname(tmtt.getcSw17());//收货单位
			TpCgauthority selectcItemidSubitemid = tpCgauthorityMapper.selectcItemidSubitemid(tmtt.getcCludecom(), "QDGS");
			if(selectcItemidSubitemid != null && selectcItemidSubitemid.getcSubitemdes() != null) {
				seletByeCconnum.get(0).setcExporter(selectcItemidSubitemid.getcSubitemdes());//采购单位
			}		
			seletByeCconnum.get(0).setcSw04(tmtt.getcId());//合同主键
//			seletByeCconnum.get(0).setcCheckstate("xcc001");//审核状态--未审核
			seletByeCconnum.get(0).setcMadestate("mk004");
			seletByeCconnum.get(0).setcCreater("");
			seletByeCconnum.get(0).setcCreatetime(new Date());
			int row = tbDocumeformMapper.insertSelective(seletByeCconnum.get(0));
			if(row > 0) {
				return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
			}
			List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q5(id);
//			System.out.println(m1s21q.size() + " aaaaaaaaaaaaaaaaaa");
			
			//是否存在合并   如果有 拆分合并物资
			List<TbDocumeformson> tbDocumeformhb = new ArrayList<TbDocumeformson>();
			for (TbDocumeformson documeformson : m1s21q) {
				String csw01 = documeformson.getcSw01();
				if(csw01.indexOf(",") != -1) {
					int rwo = tbDocumeformsonMapper.updateDelete(documeformson);
					if(rwo > 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
					}
					String[] sw01 = csw01.split(",");
					for (String str : sw01) {
						int rwou = tbDocumeformsonMapper.updateBycId(str);
						if(rwou > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
						}
					}
					tbDocumeformhb.add(documeformson);
				}
			}
			
			//物资信息
			List<TbDocumeformson> m1s22q = tbDocumeformsonMapper.M1S21Q5(id);	
			List<TpCgcontractstt> tsttlist = tpCgcontractsttMapper.selectByCountSt(tmtt.getcConnum());
			System.out.println(tsttlist.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
			System.out.println(m1s22q.size() + "bbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
			BigDecimal num;//物资请购数量
			for (TbDocumeformson documeformson : m1s22q) {
				for (TpCgcontractstt tstt : tsttlist) {
					num = new BigDecimal(tstt.getcGoodsnum());
					System.out.println("----------------------------------");
					System.out.println(tstt.getcQid());
					System.out.println(num.compareTo(BigDecimal.ZERO) > 0);
					System.out.println(tstt.getcQid());
					System.out.println(documeformson.getcSw01());
					System.out.println("----------------------------------");
					//判断条件 1、 原合同物资主键不能为空
					// 2、合同物资数量必须大于0
					// 3、原合同物资主键 == 信息卡物资中 存的原物资主键
					if(tstt.getcQid() != null &&  num.compareTo(BigDecimal.ZERO) > 0 && tstt.getcQid().equals(documeformson.getcSw01())) {
						documeformson.setcSw01(tstt.getcId());
						documeformson.setcGoodsname(tstt.getcSw08());
						documeformson.setcName(tstt.getcSw08());
						documeformson.setcSpec(tstt.getcSpec());
						documeformson.setcNum(tstt.getcGoodsnum());
						documeformson.setcUnit(tstt.getcUnitspec());
						documeformson.setcSw04(tstt.getcSumprice());
						documeformson.setcConnum(seletByeCconnum.get(0).getcConnum());
						documeformson.setcCreater(user.getUserName());
						documeformson.setcCreatetime(date);
						documeformson.setcFatherid(cId);
						tbDocumeformAdd.add(documeformson);
					}
					
				}
					
			}
			for (TpCgcontractstt tstt : tsttlist) {
				if(tstt.getcQid() == null) {
					TbDocumeformson form = new TbDocumeformson();
					form.setcGoodsname(tstt.getcSw08());
					form.setcName(tstt.getcSw08());
					form.setcSpec(tstt.getcSpec());
					form.setcNum(tstt.getcGoodsnum());
					form.setcUnit(tstt.getcUnitspec());
					form.setcSw04(tstt.getcSumprice());
					form.setcConnum(seletByeCconnum.get(0).getcConnum());
					form.setcSw01(tstt.getcId());
					form.setcFatherid(seletByeCconnum.get(0).getcId());
					form.setcCreater(user.getUserName());
					form.setcCreatetime(date);
					form.setcFatherid(cId);
					tbDocumeformAdd.add(form);
				}
			}
			//添加信息卡物资
			if(tbDocumeformAdd.size() > 0) {
				int insertSelective = tbDocumeformsonMapper.insertSelective(tbDocumeformAdd);
				if(insertSelective > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
				}
			}
			//还原合并物资
			if(tbDocumeformhb.size() > 0) {
				for (TbDocumeformson formson : tbDocumeformhb) {
					formson.setcDr("0");
					tbDocumeformsonMapper.updateByPrimaryKeySelective(formson);
					String[] sw01 = formson.getcSw01().split(",");
					for (String str : sw01) {
						int rwou = tbDocumeformsonMapper.updateBycSw01(str);
						if(rwou > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("提交失败！！！").errcode(Errcode.FailParameterError).build();
						}
					}
				}
			}
		}
		
		return builder.msg("提交成功！！！").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> BGXXK(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		String cDenycauseCMT;
		String cDenycause = "";
		String[] cause = requestObject.getCause();
		List<String> strlist = new ArrayList<String>();//页面传过来的选中的原因
		System.out.println("长度"+cause.length);
		for (int i = 0; i < cause.length; i++){
			TpCgauthority tpCgauthority = tpCgauthorityMapper.selectcItemidSubitemid(cause[i],"BGCAUSE");
			cDenycause += tpCgauthority.getcSubitemdes()+",";
			strlist.add(cause[i]);
		}
		
		
//		List<CG_MNHT_M1S1> m1s1list = frcDao.M1S11QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
		int getcCsubmitnum = tmtt.getcCsubmitnum();
		if(tmtt.getcSw18() == null) {
			cDenycauseCMT = "";
		}else {
			cDenycauseCMT = tmtt.getcSw18();
		}
		
//		System.out.println("信息卡审核状态:"+cgMnhtM1s1.get(0).getcStatexxk());
		SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日  HH:mm");
		  String  denyTime=dateformat.format(new Date());		
		//拟合同变更提交，状态变成变更提交，信息卡变更人制作状态，变更提交，变更原因
//		for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
			//制作人完成状态
		  tmtt.setcMadestate("mk007");
		  tmtt.setcStatexxk("xxk08");//未审核
		  tmtt.setcCsubmittime(new Date());
		  tmtt.setcModifier(user.getUserName());
		  tmtt.setcModifytime(new Date());
		  tmtt.setcSw18("时间:"+denyTime+cDenycause+";"+cDenycauseCMT);//变更原因
		  tmtt.setcCsubmitnum(++getcCsubmitnum);
			//合同号
//			tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
//			//制作人完成状态----变更申请
//			tbDocumeform.setcMadestate("mk007");
//			tbDocumeformList.add(tbDocumeform);
//		}
		int rowm = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(rowm > 0) {
			return builder.msg("申请失败！！！").errcode(Errcode.FailParameterError).build();
		}
//		int row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
//		if (row0 >0) {
//			return builder.errcode(Errcode.FailParameterError).msg("申请失败！！！").session(session).build();
//		}
		
		//2.修改信息卡制作人的制作状态---变更提交
		List<TbDocumeformson> tbDocumeformAdd = new ArrayList<TbDocumeformson>();//需要添加的信息卡物资
		List<TbDocumeformson> tbDocumeformUpd = new ArrayList<TbDocumeformson>();//需要修改的信息卡物资
		List<TbDocumeformson> tbDocumeformDel = new ArrayList<TbDocumeformson>();//需要删除的信息卡物资
		List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeConId(tmtt.getcId());
//		List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
		if(seletByeCconnum.size() == 0) {
			seletByeCconnum = tbDocumeformMapper.seletByeCconnum(tmtt.getcConnum());
		}
		//修改信息卡主表信息
		if(seletByeCconnum.size() > 0) {
			seletByeCconnum.get(0).setcConnum(tmtt.getcConnum());//合同号
			seletByeCconnum.get(0).setcConmoney(tmtt.getcConmoney());//合同金额
			seletByeCconnum.get(0).setcSupplier(tmtt.getcSupplier());//供应商
//			seletByeCconnum.get(0).setcComphone(tmtt.getcSupphone());//联系电话
			seletByeCconnum.get(0).setcShname(tmtt.getcSw17());//收货单位
//			seletByeCconnum.get(0).setcOutconnum(tmtt.getcOutconnum());//外贸号
			TpCgauthority selectcItemidSubitemid = tpCgauthorityMapper.selectcItemidSubitemid(tmtt.getcCludecom(), "QDGS");
			if(selectcItemidSubitemid != null && selectcItemidSubitemid.getcSubitemdes() != null) {
				seletByeCconnum.get(0).setcExporter(selectcItemidSubitemid.getcSubitemdes());//采购单位
			}
			
//			if(tmtt.getcSw05() != null) {
//				seletByeCconnum.get(0).setcSw07(tmtt.getcSw05());//转卖合同号
//				String str = tmtt.getcConnum()+"、"+tmtt.getcSw05();
//				seletByeCconnum.get(0).setcSw06(str);//转卖内贸合同号
//				//收货单位
//				int indexOf1 = tmtt.getcSw05().indexOf("-");
//				int indexOf2 = tmtt.getcSw05().indexOf("-",indexOf1+1);
//				String substring = tmtt.getcSw05().substring(indexOf1+1, indexOf2);
//				seletByeCconnum.get(0).setcShname(substring);
//			}else {
//				seletByeCconnum.get(0).setcSw07("");
//				seletByeCconnum.get(0).setcSw06("");
//			}
//			//出口商
//			if(tmtt.getcSw21() != null) {
//				seletByeCconnum.get(0).setcSw05(tmtt.getcSw21());
//			}else {
//				seletByeCconnum.get(0).setcSw05("");
//			}
			seletByeCconnum.get(0).setcMadestate("mk007");//制作人完成状态----变更申请
			int roww =  tbDocumeformMapper.updateByPrimaryKeySelective(seletByeCconnum.get(0));
			if(roww > 0 ) {				
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).build();				
			}
			
			List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q5(seletByeCconnum.get(0).getcId());
			//是否存在
			for (TbDocumeformson documeformson : m1s21q) {
				String csw01 = documeformson.getcSw01();
				if(csw01.indexOf(",") != -1) {
					int rwo = tbDocumeformsonMapper.updateDelete(documeformson);
					if(rwo > 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).build();
					}
					String[] sw01 = csw01.split(",");
					for (String str : sw01) {
						int rwou = tbDocumeformsonMapper.updateBycId(str);
						if(rwou > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).build();
						}
					}
				}
			}
			//物资信息
			List<TbDocumeformson> m1s22q = tbDocumeformsonMapper.M1S21Q5(seletByeCconnum.get(0).getcId());
			List<TpCgcontractstt> tsttlist = tpCgcontractsttMapper.selectByCountSt(tmtt.getcConnum());
				for (TpCgcontractstt s1s2 : tsttlist) {
					if(new BigDecimal(s1s2.getcGoodsnum()).compareTo(BigDecimal.ZERO) == 0) {
						continue;
					}
					
					List<TbDocumeformson> formson = tbDocumeformsonMapper.M1S21Q6(s1s2.getcId(),seletByeCconnum.get(0).getcId());
					if(formson.size() == 0) {
						TbDocumeformson form = new TbDocumeformson();
						form.setcGoodsname(s1s2.getcSw08());
						form.setcName(s1s2.getcSw08());
						form.setcSpec(s1s2.getcSpec());
						form.setcNum(s1s2.getcGoodsnum());
						form.setcUnit(s1s2.getcUnitspec());
						form.setcSw04(s1s2.getcSumprice());
						form.setcConnum(seletByeCconnum.get(0).getcConnum());
						form.setcSw01(s1s2.getcId());
						form.setcFatherid(seletByeCconnum.get(0).getcId());
						form.setcCreater(user.getUserName());
						form.setcCreatetime(new Date());
						tbDocumeformAdd.add(form);
					}
					if(formson.size() > 0) {
						formson.get(0).setcGoodsname(s1s2.getcSw08());
						formson.get(0).setcName(s1s2.getcSw08());
						formson.get(0).setcSpec(s1s2.getcSpec());
						formson.get(0).setcNum(s1s2.getcGoodsnum());
						formson.get(0).setcUnit(s1s2.getcUnitspec());
						formson.get(0).setcSw04(s1s2.getcSumprice());
						formson.get(0).setcConnum(seletByeCconnum.get(0).getcConnum());
						tbDocumeformUpd.add(formson.get(0));
					}
				}
				for (TbDocumeformson documeformson : m1s22q) {
					int i = 0;
					for (TpCgcontractstt s1s2 : tsttlist) {
						if(s1s2.getcId().equals(documeformson.getcSw01())) {
							i = 1;
						}
					}
					if(i == 0) {
						tbDocumeformDel.add(documeformson);
					}
				}
				//添加信息卡物资
				if(tbDocumeformAdd.size() > 0) {
					int insertSelective = tbDocumeformsonMapper.insertSelective(tbDocumeformAdd);
					if(insertSelective > 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).build();
					}
				}
				
				//修改信息卡物资
				if(tbDocumeformUpd.size() > 0) {
					int rown = tbDocumeformsonMapper.updateByPrimaryKeySelective2(tbDocumeformUpd);
					if(rown>0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("变更失败！！！！").errcode(Errcode.FailParameterError).build();
					}
				}
				//删除信息卡物资
				if(tbDocumeformDel.size() > 0) {
					int rowd = tbDocumeformsonMapper.M1S21D(tbDocumeformDel);
					if(rowd>0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("变更失败！！！！").errcode(Errcode.FailParameterError).build();
					}
				}				
		}
		return builder.errcode(Errcode.Success).msg("申请成功！！！").build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> GXHT(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		RandomId ri = new RandomId();
		BigDecimal money;//已付金额
		BigDecimal sw02;//未付金额
		if(tmtt.getcOutconnum() != null && !"1".equals(tmtt.getcSw29()) && !"2".equals(tmtt.getcSw29()) ) {
			if(!"xxk03".equals(tmtt.getcStatexxk()) && !"xxk07".equals(tmtt.getcStatexxk())) {
				return builder.msg("信息卡未审核或已更新正式合同！！！").errcode(Errcode.FailParameterError).build();
			}
		}		
		TpCgcontractmt tpCgcontractmt = tpCgcontractmtMapper.selectByPrimaryKey(tmtt.getcConline());
		if(tpCgcontractmt == null) {
			return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
		}
		money = new BigDecimal(tmtt.getcConmoney());
		sw02 = money.subtract(new BigDecimal(tpCgcontractmt.getcSw01()));
		tpCgcontractmt.setcCludecom(tmtt.getcCludecom());
		tpCgcontractmt.setcSupplier(tmtt.getcSupplier());
		
		tpCgcontractmt.setcSw09(ri.formatForTwo(money));
		tpCgcontractmt.setcSw31(tmtt.getcSw29());//变更协议状态
		if("0".equals(tpCgcontractmt.getcSw29())) {
			tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
			tpCgcontractmt.setcSw02(ri.formatForTwo(sw02));
		}
		
		tpCgcontractmt.setcChaconnum(tmtt.getcConnum());
		System.out.println(tmtt.getcConnum() + "htydffdsfgfg");
		tpCgcontractmt.setcSw28("1");//状态改为有变更协议
		if("1".equals(tpCgcontractmt.getcCheckway())) {
			tpCgcontractmt.setcCheckway("2");
		}
		if("1".equals(tpCgcontractmt.getcTransway())) {
			tpCgcontractmt.setcTransway("2");
		}
		if("1".equals(tpCgcontractmt.getcSignstep())) {
			tpCgcontractmt.setcSignstep("2");
		}
		if("1".equals(tpCgcontractmt.getcState())) {
			tpCgcontractmt.setcState("3");
		}
		if("1".equals(tmtt.getcSw29()) ||"3".equals(tmtt.getcSw29()) || "5".equals(tmtt.getcSw29())) {
			tpCgcontractmt.setcPayway(tmtt.getcPayway());
			tpCgcontractmt.setcDelivdate(tmtt.getcSw22());
		}
		int rowm = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
		if(rowm > 0) {
			return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
		}
		
		
		
		
		
		List<TpCgcontractstt> Acontractstlistt = new ArrayList<TpCgcontractstt>();//添加的物资
		List<TpCgcontractst> Acontractstlist = new ArrayList<TpCgcontractst>();//修改的物资
		BigDecimal num;//物资数量
		BigDecimal renum;//剩余到货数量
		
		List<TpCgcontractstt> tsttlist = tpCgcontractsttMapper.selectByCountSt(tmtt.getcConnum());
		
		TpCgcontractst tractst = new TpCgcontractst();
		tractst.setcConnum(tpCgcontractmt.getcConnum());
		tractst.setcMtid(tpCgcontractmt.getcId());
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectBycMtidConnum(tractst);
		boolean isok;
		String unit;
		for (TpCgcontractstt tstt : tsttlist) {
			isok = true;//用来区分协议中需要添加的到正式合同的物资
			if(tstt.getcGoodsnum() == null) {
				tstt.setcGoodsnum("0");
			}
			num = new BigDecimal(tstt.getcGoodsnum());
			for (TpCgcontractst tst : tstlist) {
				//根据和同行号  确定数据
				if(tstt.getcConline().equals(tst.getcConline()) && num.compareTo(BigDecimal.ZERO) > 0) {
					isok = !isok; //当正式合同物资 和 协议物资的合同行号一样时  isok = false;
					
					//如果协议里的物资数量为0时， 把正式合同物资添加到 删除集合中
//					if(new BigDecimal(tstt.getcGoodsnum()).compareTo(BigDecimal.ZERO) == 0) {
//						Dcontractstlist.add(tst);
//						break;
//					}
					if(tstt.getcUnitspec() != null) {
						unit = tstt.getcUnitspec();
					}else{
						unit = tstt.getcUnit();
					}
//					num = new BigDecimal(tstt.getcGoodsnum());
					renum = num.subtract(new BigDecimal(tst.getcGroudtotalnum()));
					if(renum.compareTo(BigDecimal.ZERO) == 0) {
						tst.setcState("1");
					}else {
						tst.setcState("3");
					}			
					//吨 和 立方米 保留4为小数  其他单位保留3位
					if("吨".equals(unit) || "立方米".equals(unit)) {
						tst.setcGoodsnum(ri.formatToFour(num));//物资数量
						tst.setcResiduenum(ri.formatToFour(renum));//剩余数量
					}else {
						tst.setcGoodsnum(ri.formatForTwo(num));
						tst.setcResiduenum(ri.formatForTwo(renum));
					}
					
					//物资名称
					if(tstt.getcGoodsname() != null) {
						tst.setcGoodsname(tstt.getcGoodsname());
					}else {
						tst.setcGoodsname("");
					}
					//报关单位
					if(tstt.getcUnitspec() != null) {
						tst.setcUnit(tstt.getcUnitspec());
					}else {
						tst.setcUnit("");
					}
					//单位
					if(tstt.getcUnit() != null) {
						tst.setcUnitspec(tstt.getcUnit());
					}else {
						tst.setcUnitspec("");
					}
					//报关规格型号
					if(tstt.getcSpec() != null) {
						tst.setcSpec(tstt.getcSpec());
					}else {
						tst.setcSpec("");
					}			
					//规格型号
					if(tstt.getcCuspec() != null) {
						tst.setcCuspec(tstt.getcCuspec());
					}else {
						tst.setcCuspec("");
					}		
					//报关规格箱号
					if(tstt.getcSw08() != null) {
						tst.setcSw08(tstt.getcSw08());
					}else {
						tst.setcSw08("");
					}
					tst.setcChaconnum(tmtt.getcConnum());
					Acontractstlist.add(tst);
					break;				
					
				}else if(tstt.getcConline().equals(tst.getcConline()) && num.compareTo(BigDecimal.ZERO) == 0) {
					isok = !isok;
					break;
				}
			}
			if(isok && num.compareTo(BigDecimal.ZERO) > 0) {
				String unit1 = tstt.getcUnit();
				tstt.setcMtid(tpCgcontractmt.getcId());
				tstt.setcChaconnum(tstt.getcConnum());
				tstt.setcConnum(tpCgcontractmt.getcConnum());
				if(tstt.getcUnitspec() != null) {
					tstt.setcUnit(tstt.getcUnitspec());
				}	
				tstt.setcUnitspec(unit1);
				tstt.setcGroudtotalnum("0");
				tstt.setcResiduenum(tstt.getcGoodsnum());
				Acontractstlistt.add(tstt);
			}
			if(tstt.getcQid() == null) {
				TpCgorderst tpCgorderst = new TpCgorderst();
				if(tstt.getcSw02().indexOf("/") != -1) {
					String[] cs02 =  tstt.getcSw02().split("/");
					for (String string : cs02) {
						tpCgorderst.setcId(string);
						tpCgorderst.setcState("1");
						tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
					}
				}else {
					tpCgorderst.setcId(tstt.getcSw02());
					tpCgorderst.setcState("1");
					tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				}
				
			}
			if(num.compareTo(BigDecimal.ZERO) == 0 && tstt.getcSw02() != null) {
				TpCgorderst cgorderst;
				if(tstt.getcSw02().indexOf("/") != -1) {
					String[] cs02 =  tstt.getcSw02().split("/");
					cgorderst = tpCgorderstMapper.selectByPrimaryKey(cs02[0]);
					if("1".equals(cgorderst.getcState()) || "6".equals(cgorderst.getcState())) {
						if(tpCgcontractmt.getcConnum().equals(cgorderst.getcSw10()) || cgorderst.getcSw10() == null) {
							for (String string : cs02) {								
								int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
								if(row0 > 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
								}
							}
						}
					}
					
				}else {
					cgorderst = tpCgorderstMapper.selectByPrimaryKey(tstt.getcSw02());
					if("1".equals(cgorderst.getcState()) || "6".equals(cgorderst.getcState())) {
						if(tpCgcontractmt.getcConnum().equals(cgorderst.getcSw10()) || cgorderst.getcSw10() == null) {
							int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tstt.getcSw02());
							if(row0 > 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
							}
						}
					}					
				}
			}
		}
		//修改信息卡状态、修改退单状态
		tmtt.setcStatexxk("xxk06");
		tmtt.setcBackstate("td001");
		tmtt.setcModifier(user.getUserName());
		tmtt.setcModifytime(new Date());
		int rows = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
		}
		if(Acontractstlistt.size() > 0) {
			int rowa = tpCgcontractstMapper.M1S12ACG_MNHT_M1S1(Acontractstlistt);
			if(rowa > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
			}
		}
		if(Acontractstlist.size() > 0) {
			int rowu = tpCgcontractstMapper.insertSelect(Acontractstlist);
			if(rowu > 0){
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
			}
		}
		for (TpCgcontractst tst : tstlist) {
			int rowd = tpCgcontractstMapper.deleteUPDATEbiangeng(tst.getcId());
			if(rowd > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
			}
		}
	
		
		
		
		return builder.msg("更新成功！！！").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> CXBGXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同失败！！！").errcode(Errcode.FailParameterError).build();
		}
		List<TpCgcontractstt> tstt =tpCgcontractsttMapper.selectByColine(tmtt.getcConnum());
		TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByBgcId(tmtt.getcId());
		if(tpCgcontractmtt != null) {
			return builder.msg("撤销失败，已有新的变更协议！！！").errcode(Errcode.FailParameterError).build();
		}
		System.out.println(tstt.size());
		if(tstt.size() > 0) {
			for (TpCgcontractstt tpCgcontractstt : tstt) {
				if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
					if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
						String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
						for (String string : cs02) {
							int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
							if(row0 == 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
							}
						}
					}else {
						int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgcontractstt.getcSw02());
						if(row0 == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
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
		List<TpCgcontractstt> tst = tpCgcontractsttMapper.selectFakedeath(tmtt.getcConnum());
		if(tst.size()>0) {
			for (TpCgcontractstt tpCgcontractstt : tst) {
				int row1 = tpCgcontractsttMapper.deleteByPrimaryKey(tpCgcontractstt.getcId());
				if(row1 == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
		}
		//撤回变更合同主表信息，
		int row2 = tpCgcontractmttMapper.deleteByPrimaryKey(tmtt.getcId());
		if(row2 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
		}
		//删除信息卡信息 
		List<TbDocumeform> form = tbDocumeformMapper.seletByeCconnum(tmtt.getcConnum());
		if(form.size() > 0) {
			List<TbDocumeformson> formson = tbDocumeformsonMapper.M1S21Q4(form.get(0));
			if(formson.size() > 0) {
				int rows = tbDocumeformsonMapper.M1S21D(formson);
				if(rows > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
			int rown = tbDocumeformMapper.deleteByPrimaryKey(form.get(0).getcId());
			if(rown > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		return builder.msg("撤销成功").errcode(Errcode.Success).build();	
	}

	@Override
	public ResponseObject<EmptyTag, TpCgcontractmtt> M1S11Q(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		String cId;
		if(tmtt.getcConline() == null) {
			cId = tmtt.getcId();
		}else {
			cId = tmtt.getcConline();
		}
		TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectAgreement(cId);
		return builder.data(tpCgcontractmtt).msg("查询成功").errcode(Errcode.Success).build();	
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> CXBGGX(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractmt> tmtlist = requestObject.getStList();
		String chaconnumstate = "";
		if(tmtlist.get(0).getcSw31() != null) {
			chaconnumstate = tmtlist.get(0).getcSw31();//变更协议状态
		}
		System.out.println(chaconnumstate + "aaaaaaaaaaafssgdfd");
		if(!"1".equals(tmtlist.get(0).getcSw28())) {
			return builder.msg("没有变更协议！！").errcode(Errcode.FailParameterError).build();
		}
		String chaconnum  = tmtlist.get(0).getcChaconnum();
		List<TpCgcontractmtt> contractmtt = tpCgcontractmttMapper.selectByConnum(chaconnum);
		TpCgcontractmtt tmtt = null;
		List<TpCgcontractst> tstlist;
		List<TpCgcontractstt> tsttlist2 = null;
		BigDecimal money;//已付金额
		BigDecimal sw02;//未付金额
		
		
		List<TpCgcontractstt> tsttlist = tpCgcontractsttMapper.selectByColine(chaconnum); //变更协议的物资
		List<TpCgcontractstt> tsttnum = new ArrayList<TpCgcontractstt>();//存放请购数量为0的物资
		
		//找出物资数量为0的物资  把请购单物资状态  改回 1（已生成正式合同） 并添加合同号   其他的改为6（转拟合同）
		for (TpCgcontractstt tpCgcontractstt : tsttlist) {
			TpCgorderst tpCgorderst = new TpCgorderst();
			if(new BigDecimal(tpCgcontractstt.getcGoodsnum()).compareTo(BigDecimal.ZERO) == 0 && tpCgcontractstt.getcSw02() != null) {
				tsttnum.add(tpCgcontractstt);	
			}else 
				if(tpCgcontractstt.getcQid() == null){
				if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
					String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
					for (String string : cs02) {
						tpCgorderst.setcId(string);
						tpCgorderst.setcState("6"); 
						tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
					}
				}else {
					tpCgorderst.setcId(tpCgcontractstt.getcSw02());
					tpCgorderst.setcState("6"); 
					tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				}
				
			}
		}
				
		
		if(chaconnum.indexOf("变更协议1") != -1) {
			tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tmtlist.get(0).getcId());
			tmtlist.get(0).setcSw28("0");
			tmtlist.get(0).setcChaconnum("");
			tmtlist.get(0).setcSw31("");
			money = new BigDecimal(tmtt.getcConmoney());
			sw02 = money.subtract(new BigDecimal(tmtlist.get(0).getcSw01()));
			tmtlist.get(0).setcCludecom(tmtt.getcCludecom());
			tmtlist.get(0).setcSupplier(tmtt.getcSupplier());
			if(!"1".equals(tmtlist.get(0).getcSw29())) {
				tmtlist.get(0).setcConmoney(ri.formatForTwo(money));
				tmtlist.get(0).setcSw02(ri.formatForTwo(sw02));
			}		
			tmtlist.get(0).setcSw09(ri.formatForTwo(money));			
			if("1".equals(tmtlist.get(0).getcCheckway())) {
				tmtlist.get(0).setcCheckway("2");
			}
			if("1".equals(tmtlist.get(0).getcTransway())) {
				tmtlist.get(0).setcTransway("2");
			}
			if("1".equals(tmtlist.get(0).getcSignstep())) {
				tmtlist.get(0).setcSignstep("2");
			}
			if("1".equals(tmtlist.get(0).getcState())) {
				tmtlist.get(0).setcState("3");
			}
			if("1".equals(chaconnumstate) || "3".equals(chaconnumstate) || "5".equals(chaconnumstate)	) {
				System.out.println(contractmtt.get(0).getcSw23() + "gfdhgffdgsfafdafg");
				System.out.println(contractmtt.get(0).getcSw24() + "bbbbbbbbbbbbbbbbb");
				tmtlist.get(0).setcPayway(contractmtt.get(0).getcSw23());
				tmtlist.get(0).setcDelivdate(contractmtt.get(0).getcSw24());
			}
			tstlist = tpCgcontractstMapper.selectByChaconnum(null);
			if(tsttnum.size() > 0) {
				tsttlist2 = tpCgcontractsttMapper.selectByColine(tmtt.getcConnum());
			}
		}else {
			int a = 0;
			chaconnum = chaconnum.substring(0,(chaconnum.length()-1)) + (Integer.parseInt(chaconnum.substring(chaconnum.length() - 1)) - 1);
			List<TpCgcontractmtt> tmttlist = tpCgcontractmttMapper.selectByConnum(chaconnum);
			//如果此变更协议作废 就 找上一个变更协议 找到没作废的为止
			while ("xxk09".equals(tmttlist.get(0).getcStatexxk())) {
				
				if(tmttlist.get(0).getcConnum().indexOf("变更协议1") != -1) {
					//如果为变更协议1  a赋值为1
					a = 1;
					break;
				}
				//回去上一个变更协议
				chaconnum = chaconnum.substring(0,(chaconnum.length()-1)) + (Integer.parseInt(chaconnum.substring(chaconnum.length() - 1)) - 1);
				tmttlist = tpCgcontractmttMapper.selectByConnum(chaconnum);
			}
			
			if(a == 1) {
				tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tmtlist.get(0).getcId());
				tmtlist.get(0).setcSw28("0");
				tmtlist.get(0).setcChaconnum("");
				tmtlist.get(0).setcSw31(""); 
				money = new BigDecimal(tmtt.getcConmoney());
				sw02 = money.subtract(new BigDecimal(tmtlist.get(0).getcSw01()));
				tmtlist.get(0).setcCludecom(tmtt.getcCludecom());
				tmtlist.get(0).setcSupplier(tmtt.getcSupplier());
				
				if(!"1".equals(tmtlist.get(0).getcSw29())) {
					tmtlist.get(0).setcConmoney(ri.formatForTwo(money));
					tmtlist.get(0).setcSw02(ri.formatForTwo(sw02));
				}
				tmtlist.get(0).setcSw09(ri.formatForTwo(money));
				
				if("1".equals(tmtlist.get(0).getcCheckway())) {
					tmtlist.get(0).setcCheckway("2");
				}
				if("1".equals(tmtlist.get(0).getcTransway())) {
					tmtlist.get(0).setcTransway("2");
				}
				if("1".equals(tmtlist.get(0).getcSignstep())) {
					tmtlist.get(0).setcSignstep("2");
				}
				if("1".equals(tmtlist.get(0).getcState())) {
					tmtlist.get(0).setcState("3");
				}
				if("1".equals(chaconnumstate) || "3".equals(chaconnumstate) || "5".equals(chaconnumstate)	) {
					tmtlist.get(0).setcPayway(contractmtt.get(0).getcSw23());
					tmtlist.get(0).setcDelivdate(contractmtt.get(0).getcSw24());
				}
				tstlist = tpCgcontractstMapper.selectByChaconnum(null);
				
				if(tsttnum.size() > 0) {
					tsttlist2 = tpCgcontractsttMapper.selectByColine(tmtt.getcConnum());
				}
			}else {
				if(tmttlist.size() > 0) {
					tmtt = tmttlist.get(0);
					tmtlist.get(0).setcChaconnum(tmtt.getcConnum());
					money = new BigDecimal(tmtt.getcConmoney());
					sw02 = money.subtract(new BigDecimal(tmtlist.get(0).getcSw01()));
					tmtlist.get(0).setcCludecom(tmtt.getcCludecom());
					tmtlist.get(0).setcSupplier(tmtt.getcSupplier());
					tmtlist.get(0).setcSw31(tmttlist.get(0).getcSw29()); 
					if(!"1".equals(tmtlist.get(0).getcSw29())) {
						tmtlist.get(0).setcConmoney(ri.formatForTwo(money));
						tmtlist.get(0).setcSw02(ri.formatForTwo(sw02));
					}
					tmtlist.get(0).setcSw09(ri.formatForTwo(money));
					
					if("1".equals(tmtlist.get(0).getcCheckway())) {
						tmtlist.get(0).setcCheckway("2");
					}
					if("1".equals(tmtlist.get(0).getcTransway())) {
						tmtlist.get(0).setcTransway("2");
					}
					if("1".equals(tmtlist.get(0).getcSignstep())) {
						tmtlist.get(0).setcSignstep("2");
					}
					if("1".equals(tmtlist.get(0).getcState())) {
						tmtlist.get(0).setcState("3");
					}
					if("1".equals(chaconnumstate) || "3".equals(chaconnumstate) || "5".equals(chaconnumstate)	) {
						tmtlist.get(0).setcPayway(contractmtt.get(0).getcSw23());
						tmtlist.get(0).setcDelivdate(contractmtt.get(0).getcSw24());
					}
				}
				tstlist = tpCgcontractstMapper.selectByChaconnum(chaconnum);
				if(tsttnum.size() > 0) {
					tsttlist2 = tpCgcontractsttMapper.selectByColine(chaconnum);
				}
				
			}
			
			
		}
	
		TpCgcontractst tractst = new TpCgcontractst();
		tractst.setcConnum(tmtlist.get(0).getcConnum());
		tractst.setcMtid(tmtlist.get(0).getcId());
		List<TpCgcontractst> contractst = tpCgcontractstMapper.selectBycMtidConnum(tractst);
		BigDecimal num;//物资数量
		BigDecimal renum;//剩余到货数量
		String unit;
		for (TpCgcontractst cgcontractst : tstlist) {
			for (TpCgcontractst ractst : contractst) {
				if(cgcontractst.getcConline().equals(ractst.getcConline())) {
					if(cgcontractst.getcUnit() != null) {
						unit = cgcontractst.getcUnit();
					}else{
						unit = cgcontractst.getcUnitspec();
					}
					num = new BigDecimal(cgcontractst.getcGoodsnum());
					renum = num.subtract(new BigDecimal(ractst.getcGroudtotalnum()));
					//吨 和 立方米 保留4为小数  其他单位保留3位
					if("吨".equals(unit) || "立方米".equals(unit)) {
						cgcontractst.setcGoodsnum(ri.formatToFour(num));//物资数量
						cgcontractst.setcResiduenum(ri.formatToFour(renum));//剩余数量
					}else {
						cgcontractst.setcGoodsnum(ri.formatForTwo(num));
						cgcontractst.setcResiduenum(ri.formatForTwo(renum));
					}
				}
			}
		}
		
		
		if(tsttnum.size() > 0) {	
			for (TpCgcontractstt tpCgcontractstt : tsttnum) {
				for (TpCgcontractstt tstt : tsttlist2) {
					if(tpCgcontractstt.getcConline().equals(tstt.getcConline()) && new BigDecimal(tstt.getcGoodsnum()).compareTo(BigDecimal.ZERO) != 0) {
						TpCgorderst tpCgorderst = new TpCgorderst();
						if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
							String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
							for (String string : cs02) {
								tpCgorderst.setcId(string);
								tpCgorderst.setcState("1"); 
								tpCgorderst.setcSw10(tmtlist.get(0).getcConnum());
								tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
							}
						}else {
							tpCgorderst.setcId(tpCgcontractstt.getcSw02());
							tpCgorderst.setcState("1"); 
							tpCgorderst.setcSw10(tmtlist.get(0).getcConnum());
							tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
						}
					}
				}
			}
		}
		
		
		
		contractmtt.get(0).setcStatexxk("xxk07");
		int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(contractmtt.get(0));
		if(rowtmtt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销变更协议失败").errcode(Errcode.FailParameterError).build();
		}
		int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmtlist.get(0));
		if(rowtmt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销变更协议失败").errcode(Errcode.FailParameterError).build();	
		}
		int row = tpCgcontractstMapper.S1S21DH(tstlist);
		if(row > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销变更协议失败").errcode(Errcode.FailParameterError).build();	
		}
		for (TpCgcontractst ractst : contractst) {
			int rwod = tpCgcontractstMapper.deleteByPrimaryKey(ractst.getcId());
			if(rwod > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销变更协议失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		for (TpCgcontractst cgcontractst : tstlist) {
			int rwou = tpCgcontractstMapper.updatebybiangeng(cgcontractst.getcId());
			if(rwou > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销变更协议失败").errcode(Errcode.FailParameterError).build();	
			}
		}
		return builder.msg("撤销变更协议成功").errcode(Errcode.Success).build();	
	}

	
	
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> AJSXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		String cId = ri.getRandomId();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		TpSettlement tpSettlement = requestObject.getTpSettlement();
		List<TpSettlement> settlement = requestObject.getSettlement();
		
		//判断是不是已有此协议
		List<TpCgcontractmtt> ractmtt = tpCgcontractmttMapper.selectByConnum(settlement.get(0).getcConnum().trim());
		if(ractmtt.size() > 0) {
			return builder.msg("请在已有的变更合同上做变更").errcode(Errcode.FailShowWarningMsg).build();
		}
		
		
		tmtt.setcQconnum(tmtt.getcConnum());//保留上一个合同的合同号
		tmtt.setcQid(tmtt.getcId());	//保留上一个合同的主键
		if(tmtt.getcConline() == null) {
			tmtt.setcConline(tmtt.getcId());//保留发生结算协议前合同的主键
		}
		tmtt.setcConnum(settlement.get(0).getcConnum());//新的合同号
		if(tpSettlement.getcSettlemoney() == null) {
			return builder.msg("结算金额不可为空！").errcode(Errcode.FailParameterError).build();	
		}
		tmtt.setcConmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())));
		tmtt.setcCludetime(settlement.get(0).getcCludetime());
		tmtt.setcId(cId);
		tmtt.setcStatexxk("001");
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy年MM月dd日");
		String clause1 = "  供、需双方于" 
				+ formatter.format(tpSettlement.getcCludetime()) //签订时间
				+ "签订" 
				+ tpSettlement.getcSw02() //合同名称
				+ "的购销合同，合同号为" 
				+ tpSettlement.getcConnum() //合同号
				+ "，合同签订金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcConmoney())) //合同金额
				+ "元，合同到货金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcGoodsmoney()))//到货金额
				+ "元，" 
				+ tpSettlement.getcCause() //原因
				+ "。经双方友好协商决定，达成以下协议:";
		String clause2 = "  1、供方自愿赔偿RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcPcmoney())) //赔偿金额
				+ "元" 
				+ tpSettlement.getcSw05() //赔偿条件
				+ "，在合同" 
				+ tpSettlement.getcKccause()//扣款条件
		 		+ "一次性扣除，合同结算金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())) //结算金额
				+ "元。";
		tpSettlement.setcSw11(clause1);
		tpSettlement.setcSw12(clause2);
		if(tpSettlement.getcSw13() == null || tpSettlement.getcSw13() == "") {
			tpSettlement.setcSw13(null);
		}
		
		tpSettlement.setcSw01("  2、"+tpSettlement.getcSw01());
		if("".equals(tpSettlement.getcSw06())|| tpSettlement.getcSw06() == null) {
			tpSettlement.setcSw06(null);
		}else {
			tpSettlement.setcSw06("  3、"+tpSettlement.getcSw06());
		}
		tpSettlement.setcId(cId);
		tpSettlement.setcCludecom(settlement.get(0).getcCludecom());
		tpSettlement.setcSupplier(settlement.get(0).getcSupplier());
		tpSettlement.setcCludetime(settlement.get(0).getcCludetime());
		tpSettlement.setcConnum(settlement.get(0).getcConnum());
		tpSettlement.setcState(settlement.get(0).getcState());
		tpSettlement.setcConmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcConmoney())));
		tpSettlement.setcGoodsmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcGoodsmoney())));
		tpSettlement.setcPcmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcPcmoney())));
		tpSettlement.setcSettlemoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())));
		
		int row = tpCgcontractmttMapper.insertSelective(tmtt);
		if(row > 0) {
			return builder.msg("新增失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rows = tpSettlementMapper.insertSelective(tpSettlement);
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("新增失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("新增成功！").errcode(Errcode.Success).build();	
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> UJSXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		TpSettlement tpSettlement = requestObject.getTpSettlement();
		List<TpSettlement> settlement = requestObject.getSettlement();
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同无法修改！").errcode(Errcode.FailParameterError).build();	
		}
		if(tpSettlement.getcSettlemoney() == null) {
			return builder.msg("结算金额不可为空！").errcode(Errcode.FailParameterError).build();	
		}
		tmtt.setcConmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())));
		tmtt.setcCludetime(settlement.get(0).getcCludetime());
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy年MM月dd日");
		String clause1 = "  供、需双方于" 
				+ formatter.format(tpSettlement.getcCludetime()) //签订时间
				+ "签订" 
				+ tpSettlement.getcSw02() //合同名称
				+ "的购销合同，合同号为" 
				+ tpSettlement.getcConnum() //合同号
				+ "，合同签订金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcConmoney())) //合同金额
				+ "元，合同到货金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcGoodsmoney()))//到货金额
				+ "元，" 
				+ tpSettlement.getcCause() //原因
				+ "。经双方友好协商决定，达成以下协议:";
		String clause2 = "  1、供方自愿赔偿RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcPcmoney())) //赔偿金额
				+ "元" 
				+ tpSettlement.getcSw05() //赔偿条件
				+ "，在合同" 
				+ tpSettlement.getcKccause()//扣款条件
		 		+ "一次性扣除，合同结算金额为RMB" 
				+ ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())) //结算金额
				+ "元。";
		if(tpSettlement.getcSw01().indexOf("2、")== -1) {//不包含
			tpSettlement.setcSw01("  2、"+tpSettlement.getcSw01());
		}
		
		if("".equals(tpSettlement.getcSw06())|| tpSettlement.getcSw06() == null) {
			tpSettlement.setcSw06(null);
		}else if(tpSettlement.getcSw06().indexOf("3、")==-1){//不包含
			tpSettlement.setcSw06("  3、"+tpSettlement.getcSw06());
		}
		tpSettlement.setcId(tmtt.getcId());
		tpSettlement.setcSw11(clause1);
		tpSettlement.setcSw12(clause2);
		tpSettlement.setcCludecom(settlement.get(0).getcCludecom());//需方
		tpSettlement.setcSupplier(settlement.get(0).getcSupplier());//供方
		tpSettlement.setcCludetime(settlement.get(0).getcCludetime());//签订时间
		tpSettlement.setcConnum(settlement.get(0).getcConnum());//合同号
		tpSettlement.setcState(settlement.get(0).getcState());//是否  有结算金额
		if("1".equals(tpSettlement.getcState()) && tpSettlement.getcSw03() != null) {
			tpSettlement.setcSw03(ri.formatForTwo(new BigDecimal(tpSettlement.getcSw03())));//变更后金额
		}
		
		tpSettlement.setcConmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcConmoney())));//合同金额
		tpSettlement.setcGoodsmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcGoodsmoney())));//到货金额
		tpSettlement.setcPcmoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcPcmoney())));//赔偿金额
		tpSettlement.setcSettlemoney(ri.formatForTwo(new BigDecimal(tpSettlement.getcSettlemoney())));//结算金额
		
		int row = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(row > 0) {
			return builder.msg("修改失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rows = tpSettlementMapper.updateByPrimaryKeySelective(tpSettlement);
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("修改失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("修改成功！").errcode(Errcode.Success).build();	
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> CXJSXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同无法修改！").errcode(Errcode.FailParameterError).build();	
		}
		TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByBgcId(tmtt.getcId());
		if(tpCgcontractmtt != null) {
			return builder.msg("撤销失败，已有新的结算协议！！！").errcode(Errcode.FailParameterError).build();
		}
		
		int row = tpCgcontractmttMapper.deleteByPrimaryKey(tmtt.getcId());
		if(row > 0) {
			return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rows = tpSettlementMapper.deleteByPrimaryKey(tmtt.getcId());
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("撤销成功！").errcode(Errcode.Success).build();	
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> JSGXHT(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		RandomId ri = new RandomId();
		BigDecimal money;//已付金额
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同！！！").errcode(Errcode.FailParameterError).build();
		}
		TpCgcontractmt tpCgcontractmt = tpCgcontractmtMapper.selectByPrimaryKey(tmtt.getcConline());
		if(tpCgcontractmt == null) {
			return builder.msg("更新失败！！！").errcode(Errcode.FailParameterError).build();
		}
		if(tpCgcontractmt.getcSw01() == null) {
			tpCgcontractmt.setcSw01("0.00");
		}
		money = new BigDecimal(tpCgcontractmt.getcSw01());
		if(money.compareTo(new BigDecimal(tmtt.getcConmoney())) > 0) {
			return builder.msg("已付金额大于结算金额，更新失败！！").errcode(Errcode.FailParameterError).build();	
		}
		tpCgcontractmt.setcConmoney(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney())));
		tpCgcontractmt.setcSw29("1");//new BigDecimal(tmtt.getcConmoney())   //
		tpCgcontractmt.setcSw02(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney()).subtract(new BigDecimal(tpCgcontractmt.getcSw01()))));
		tpCgcontractmt.setcSeconnum(tmtt.getcConnum());
		if("1".equals(tpCgcontractmt.getcSignstep())) {
			tpCgcontractmt.setcSignstep("2");
		}
		if("1".equals(tpCgcontractmt.getcState())) {
			tpCgcontractmt.setcState("3");
		}
		tmtt.setcStatexxk("xxk06");
		tmtt.setcModifier(user.getUserName());
		tmtt.setcModifytime(new Date());
		int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(rowtmtt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("更新失败").errcode(Errcode.FailParameterError).build();
		}
		int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
		if(rowtmt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("更新失败").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("更新成功！").errcode(Errcode.Success).build();	
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> CXJSGX(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractmt> tmtlist = requestObject.getStList();
		
		if(!"1".equals(tmtlist.get(0).getcSw29())) {
			return builder.msg("没有结算协议！！").errcode(Errcode.FailParameterError).build();
		}
		String seconnum  = tmtlist.get(0).getcSeconnum();
		List<TpCgcontractmtt> contractmtt = tpCgcontractmttMapper.selectByConnum(seconnum);
		TpCgcontractmtt tmtt;
		
		if(seconnum.indexOf("结算协议1") != -1) {
			tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tmtlist.get(0).getcId());
			tmtlist.get(0).setcSw29("0");
			tmtlist.get(0).setcSeconnum("");
			tmtlist.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(tmtlist.get(0).getcSw09())));	
			tmtlist.get(0).setcSw02(ri.formatForTwo(new BigDecimal(tmtlist.get(0).getcSw09()).subtract(new BigDecimal(tmtlist.get(0).getcSw01()))));
			if("1".equals(tmtlist.get(0).getcSignstep())) {
				tmtlist.get(0).setcSignstep("2");
			}
			if("1".equals(tmtlist.get(0).getcState())) {
				tmtlist.get(0).setcState("3");
			}
		}else {
			int a = 0;
			seconnum = seconnum.substring(0,(seconnum.length()-1)) + (Integer.parseInt(seconnum.substring(seconnum.length() - 1)) - 1);
			List<TpCgcontractmtt> tmttlist = tpCgcontractmttMapper.selectByConnum(seconnum);
			while ("xxk09".equals(tmttlist.get(0).getcStatexxk())) {
				if(tmttlist.get(0).getcConnum().indexOf("结算协议1") != -1) {
					a = 1;
					break;
				}
				seconnum = seconnum.substring(0,(seconnum.length()-1)) + (Integer.parseInt(seconnum.substring(seconnum.length() - 1)) - 1);
				tmttlist = tpCgcontractmttMapper.selectByConnum(seconnum);
			}
			if(a == 1) {
				tmtlist.get(0).setcSw29("0");
				tmtlist.get(0).setcSeconnum("");
				tmtlist.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(tmtlist.get(0).getcSw09())));	
				tmtlist.get(0).setcSw02(ri.formatForTwo(new BigDecimal(tmtlist.get(0).getcSw09()).subtract(new BigDecimal(tmtlist.get(0).getcSw01()))));
				if("1".equals(tmtlist.get(0).getcSignstep())) {
					tmtlist.get(0).setcSignstep("2");
				}
				if("1".equals(tmtlist.get(0).getcState())) {
					tmtlist.get(0).setcState("3");
				}
			}else {
				if(tmttlist.size() > 0) {
					tmtt = tmttlist.get(0);
					tmtlist.get(0).setcSeconnum(tmtt.getcConnum());
					tmtlist.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney())));
					tmtlist.get(0).setcSw02(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney()).subtract(new BigDecimal(tmtlist.get(0).getcSw01()))));
					if("1".equals(tmtlist.get(0).getcSignstep())) {
						tmtlist.get(0).setcSignstep("2");
					}
					if("1".equals(tmtlist.get(0).getcState())) {
						tmtlist.get(0).setcState("3");
					}
				}
			}
			
		}
		contractmtt.get(0).setcStatexxk("xxk07");
		int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(contractmtt.get(0));
		if(rowtmtt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤回结算协议失败").errcode(Errcode.FailParameterError).build();
		}
		int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmtlist.get(0));
		if(rowtmt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤回结算协议失败").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("撤回成功！").errcode(Errcode.Success).build();	
	}

	@Override
	public ResponseObject<EmptyTag, TpSettlement> S1S11Q(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();		
		TpSettlement tpSettlement = tpSettlementMapper.selectByPrimaryKey(tmtt.getcId());
		return builder.data(tpSettlement).msg("查询成功").errcode(Errcode.Success).build();	
	}


	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> AZFXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		String cId = ri.getRandomId();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		TpCancelment tpCancelment = requestObject.getTpCancelment();
		List<TpCancelment> cancelment = requestObject.getCancelment();
		
		if(tmtt.getcConline() != null) {
			TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByBgcId(tmtt.getcId());
			if(tmtt.getcConnum().indexOf("变更协议") != -1) {				
				if(tpCgcontractmtt != null && tpCgcontractmtt.getcConnum().indexOf("变更协议") != -1) {
					return builder.msg("已有新协议无法作废此协议！！！").errcode(Errcode.FailParameterError).build();
				}
			}
			if(tmtt.getcConnum().indexOf("结算协议") != -1) {
				if(tpCgcontractmtt != null && tpCgcontractmtt.getcConnum().indexOf("结算协议") != -1) {
					return builder.msg("已有新协议无法作废此协议！！！").errcode(Errcode.FailParameterError).build();
				}
			}
			
		}
		
		//判断是不是已有此协议
		List<TpCgcontractmtt> ractmtt = tpCgcontractmttMapper.selectByConnum(cancelment.get(0).getcConnum().trim());
		if(ractmtt.size() > 0) {
			return builder.msg("此协议已存在").errcode(Errcode.FailShowWarningMsg).build();
		}
		
		
		
		tmtt.setcQconnum(tmtt.getcConnum());//保留上一个合同的合同号
		tmtt.setcQid(tmtt.getcId());	//保留上一个合同的主键
		if(tmtt.getcConline() == null) {
			tmtt.setcConline(tmtt.getcId());//保留发生结算协议前合同的主键
		}
		tmtt.setcConnum(cancelment.get(0).getcConnum());//新的合同号	
		tmtt.setcCludetime(cancelment.get(0).getcCludetime());
		tmtt.setcId(cId);
		tmtt.setcStatexxk("001");
		
		cancelment.get(0).setcId(cId);
		cancelment.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(tpCancelment.getcConmoney())));
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy年MM月dd日");
		String clause = "  经双方友好协商，一致同意取消" 
						+ formatter.format(tpCancelment.getcCludetime())
						+ "签订合同编号为" 
						+ tpCancelment.getcConnum()
						+ "，合同签订金额为RMB"
						+ ri.formatForTwo(new BigDecimal(tpCancelment.getcConmoney()))
						+ "元，原合同中约定的双方的权利与义务在本协议生效后全部失效。";
		
		cancelment.get(0).setcSw11(clause);
		
		
		int row = tpCgcontractmttMapper.insertSelective(tmtt);
		if(row > 0) {
			return builder.msg("新增失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rowm = tpCancelmentMapper.insertSelective(cancelment.get(0));
		if(rowm > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("新增失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("新增成功！").errcode(Errcode.Success).build();	
	}


	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> UZFXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		TpCancelment tpCancelment = requestObject.getTpCancelment();
		List<TpCancelment> cancelment = requestObject.getCancelment();
		
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同无法修改！").errcode(Errcode.FailParameterError).build();	
		}
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy年MM月dd日");
		String clause = "  经双方友好协商，一致同意取消" 
						+ formatter.format(tpCancelment.getcCludetime())
						+ "签订合同编号为" 
						+ tpCancelment.getcConnum()
						+ "，合同签订金额为RMB"
						+ ri.formatForTwo(new BigDecimal(tpCancelment.getcConmoney()))
						+ "元，原合同中约定的双方的权利与义务在本协议生效后全部失效。";
		
		cancelment.get(0).setcId(tmtt.getcId()); 
		cancelment.get(0).setcSw11(clause);
		tmtt.setcCludetime(cancelment.get(0).getcCludetime());
		
		cancelment.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(tpCancelment.getcConmoney())));
		int row = tpCgcontractmttMapper.updateByPrimaryKeySelective(tmtt);
		if(row > 0) {
			return builder.msg("修改失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rowm = tpCancelmentMapper.updateByPrimaryKeySelective(cancelment.get(0));
		if(rowm > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("修改失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("修改成功！").errcode(Errcode.Success).build();
	}


	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> CXZFXY(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();
		if("xxk06".equals(tmtt.getcStatexxk())) {
			return builder.msg("已更新正式合同无法修改！").errcode(Errcode.FailParameterError).build();	
		}
		
		int row = tpCgcontractmttMapper.deleteByPrimaryKey(tmtt.getcId());
		if(row > 0) {
			return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
		}
		int rows = tpCancelmentMapper.deleteByPrimaryKey(tmtt.getcId());
		if(rows > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
		}
		return builder.msg("撤销成功！").errcode(Errcode.Success).build();	
	}


	@Override
	public ResponseObject<EmptyTag, EmptyData> ZFGXHT(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tpCgcontractmtt = requestObject.getTmtt();
		//要作废的协议或合同
		TpCgcontractmtt contractmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractmtt.getcQid());
		//协议对象
		TpCancelment tpCancelment = tpCancelmentMapper.selectByPrimaryKey(tpCgcontractmtt.getcId());
		RandomId ri = new RandomId();	
		if("xxk06".equals(tpCgcontractmtt.getcStatexxk())) {
			return builder.msg("已生效！！！").errcode(Errcode.FailParameterError).build();
		}
		if(tpCgcontractmtt.getcConline() == null) {
			return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
		}
		TpCgcontractmt tpCgcontractmt = tpCgcontractmtMapper.selectByPrimaryKey(tpCgcontractmtt.getcConline());
		
		//更新作废状态为 已更新正式合同
		tpCgcontractmtt.setcStatexxk("xxk06");
		int rowmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(tpCgcontractmtt);
		if(rowmtt > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
		}
		//作废变更协议
		if(tpCgcontractmtt.getcConnum().indexOf("变更协议") != -1) {
			
			if(!"1".equals(tpCgcontractmt.getcSw28())) {
				return builder.msg("没有变更协议！！").errcode(Errcode.FailParameterError).build();
			}
			String chaconnum  = tpCgcontractmt.getcChaconnum();//本次作废变更协议合同号
			TpCgcontractmtt tmtt = null; //存放本次作废变更协议上次变更协议的合同号（本次作废的 变更协议3  就存放变更协议2的拟合同）
			List<TpCgcontractst> tstlist; //存放本次变更前合同的物资
			BigDecimal money;//已付金额
			BigDecimal sw02;//未付金额
			
			//判断变更合同号 是否为 变更协议1  
			//为 变更协议1 正式合同撤回到没有变更的拟合同
			//不为 变更协议1  正式合同撤回到上次变更的合同
			if(chaconnum.indexOf("变更协议1") != -1) {
				tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractmt.getcId());
				tpCgcontractmt.setcSw28("0");
				tpCgcontractmt.setcChaconnum("");
				tpCgcontractmt.setcSw31(""); 
				money = new BigDecimal(tmtt.getcConmoney());
				sw02 = money.subtract(new BigDecimal(tpCgcontractmt.getcSw01()));
				tpCgcontractmt.setcCludecom(tmtt.getcCludecom());
				tpCgcontractmt.setcSupplier(tmtt.getcSupplier());
				tpCgcontractmt.setcSw09(ri.formatForTwo(money));
				if(!"1".equals(tpCgcontractmt.getcSw29())) {
					tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
					tpCgcontractmt.setcSw02(ri.formatForTwo(sw02));
				}
				
				
				if("1".equals(tpCgcontractmt.getcCheckway())) {
					tpCgcontractmt.setcCheckway("2");
				}
				if("1".equals(tpCgcontractmt.getcTransway())) {
					tpCgcontractmt.setcTransway("2");
				}
				if("1".equals(tpCgcontractmt.getcSignstep())) {
					tpCgcontractmt.setcSignstep("2");
				}
				if("1".equals(tpCgcontractmt.getcState())) {
					tpCgcontractmt.setcState("3");
				}
				if("1".equals(contractmtt.getcSw29()) || "3".equals(contractmtt.getcSw29()) || "5".equals(contractmtt.getcSw29())) {
					tpCgcontractmt.setcPayway(contractmtt.getcSw23());
					tpCgcontractmt.setcDelivdate(contractmtt.getcSw24());					
				}
				tstlist = tpCgcontractstMapper.selectByChaconnum(null);
			}else {
				int a = 0;
				chaconnum = chaconnum.substring(0,(chaconnum.length()-1)) + (Integer.parseInt(chaconnum.substring(chaconnum.length() - 1)) - 1);
				List<TpCgcontractmtt> tmttlist = tpCgcontractmttMapper.selectByConnum(chaconnum);
//				if("xxk09".equals(tmttlist.get(0).getcStatexxk())) {
//					chaconnum = chaconnum.substring(0,(chaconnum.length()-1)) + (Integer.parseInt(chaconnum.substring(chaconnum.length() - 1)) - 1);
//					tmttlist = tpCgcontractmttMapper.selectByConnum(chaconnum);
//				}
				//判断上次的变更协议是否作废
				while ("xxk09".equals(tmttlist.get(0).getcStatexxk())) {
					
					//判断是否为变更协议1  是 a=1
					if(tmttlist.get(0).getcConnum().indexOf("变更协议1") != -1) {
						a=1;
						break;
					}
					chaconnum = chaconnum.substring(0,(chaconnum.length()-1)) + (Integer.parseInt(chaconnum.substring(chaconnum.length() - 1)) - 1);
					tmttlist = tpCgcontractmttMapper.selectByConnum(chaconnum);
				}
				if(a == 1) {
					tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractmt.getcId());
					tpCgcontractmt.setcSw28("0");
					tpCgcontractmt.setcChaconnum("");
					tpCgcontractmt.setcSw31("");
					money = new BigDecimal(tmtt.getcConmoney());
					sw02 = money.subtract(new BigDecimal(tpCgcontractmt.getcSw01()));
					tpCgcontractmt.setcCludecom(tmtt.getcCludecom());
					tpCgcontractmt.setcSupplier(tmtt.getcSupplier());
					if(!"1".equals(tpCgcontractmt.getcSw29())) {
						tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
						tpCgcontractmt.setcSw02(ri.formatForTwo(sw02));
					}
					
					tpCgcontractmt.setcSw09(ri.formatForTwo(money));
					
					if("1".equals(tpCgcontractmt.getcCheckway())) {
						tpCgcontractmt.setcCheckway("2");
					}
					if("1".equals(tpCgcontractmt.getcTransway())) {
						tpCgcontractmt.setcTransway("2");
					}
					if("1".equals(tpCgcontractmt.getcSignstep())) {
						tpCgcontractmt.setcSignstep("2");
					}
					if("1".equals(tpCgcontractmt.getcState())) {
						tpCgcontractmt.setcState("3");
					}
					if("1".equals(contractmtt.getcSw29()) || "3".equals(contractmtt.getcSw29()) || "5".equals(contractmtt.getcSw29())) {
						tpCgcontractmt.setcPayway(contractmtt.getcSw23());
						tpCgcontractmt.setcDelivdate(contractmtt.getcSw24());					
					}
					tstlist = tpCgcontractstMapper.selectByChaconnum(null);
				}else {
					if(tmttlist.size() > 0) {
						tmtt = tmttlist.get(0);
						tpCgcontractmt.setcChaconnum(tmtt.getcConnum());
						money = new BigDecimal(tmtt.getcConmoney());
						sw02 = money.subtract(new BigDecimal(tpCgcontractmt.getcSw01()));
						tpCgcontractmt.setcSw31(tmttlist.get(0).getcSw29());
						tpCgcontractmt.setcCludecom(tmtt.getcCludecom());
						tpCgcontractmt.setcSupplier(tmtt.getcSupplier());
						if(!"1".equals(tpCgcontractmt.getcSw29())) {
							tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
							tpCgcontractmt.setcSw02(ri.formatForTwo(sw02));
						}
						tpCgcontractmt.setcSw09(ri.formatForTwo(money));
						
						if("1".equals(tpCgcontractmt.getcCheckway())) {
							tpCgcontractmt.setcCheckway("2");
						}
						if("1".equals(tpCgcontractmt.getcTransway())) {
							tpCgcontractmt.setcTransway("2");
						}
						if("1".equals(tpCgcontractmt.getcSignstep())) {
							tpCgcontractmt.setcSignstep("2");
						}
						if("1".equals(tpCgcontractmt.getcState())) {
							tpCgcontractmt.setcState("3");
						}
						if("1".equals(contractmtt.getcSw29()) || "3".equals(contractmtt.getcSw29()) || "5".equals(contractmtt.getcSw29())) {
							tpCgcontractmt.setcPayway(contractmtt.getcSw23());
							tpCgcontractmt.setcDelivdate(contractmtt.getcSw24());					
						}
					}
					tstlist = tpCgcontractstMapper.selectByChaconnum(chaconnum);
				}
								
			}
		
			TpCgcontractst tractst = new TpCgcontractst();
			tractst.setcConnum(tpCgcontractmt.getcConnum());
			tractst.setcMtid(tpCgcontractmt.getcId()); 
			List<TpCgcontractst> contractst = tpCgcontractstMapper.selectBycMtidConnum(tractst);//查询没作废前的正式合同物资
			
			
			BigDecimal num;//物资数量
			BigDecimal renum;//剩余到货数量
			String unit;
			for (TpCgcontractst cgcontractst : tstlist) {
				for (TpCgcontractst ractst : contractst) {
					if(cgcontractst.getcConline().equals(ractst.getcConline())) {
						if(cgcontractst.getcUnit() != null) {
							unit = cgcontractst.getcUnit();
						}else{
							unit = cgcontractst.getcUnitspec();
						}
						num = new BigDecimal(cgcontractst.getcGoodsnum());
						renum = num.subtract(new BigDecimal(ractst.getcGroudtotalnum()));
						//吨 和 立方米 保留4为小数  其他单位保留3位
						if("吨".equals(unit) || "立方米".equals(unit)) {
							cgcontractst.setcGoodsnum(ri.formatToFour(num));//物资数量
							cgcontractst.setcResiduenum(ri.formatToFour(renum));//剩余数量
						}else {
							cgcontractst.setcGoodsnum(ri.formatForTwo(num));
							cgcontractst.setcResiduenum(ri.formatForTwo(renum));
						}
					}
				}
			}
			//保留物资为1时   变更合同添加的物资  撤回到请购单改为  未转合同状态
			if("1".equals(tpCancelment.getcState())) {
				List<TpCgcontractstt> tstt =tpCgcontractsttMapper.selectByColine(contractmtt.getcConnum());
				System.out.println(tstt.size());
				if(tstt.size() > 0) {
					for (TpCgcontractstt tpCgcontractstt : tstt) {
						if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
							if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
								String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
								for (String string : cs02) {
									int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
									if(row0 == 0) {
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
									}
								}
							}else {
								int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgcontractstt.getcSw02());
								if(row0 == 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
								}
							}
						}
					}		
				}
			}
			//作废拟合同
			contractmtt.setcStatexxk("xxk09");//修改信息卡状态 为作废
			contractmtt.setcState("4");//修改合同状态 为作废
			int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(contractmtt);
			if(rowtmtt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
			}
			
			//作废信息卡
			List<TbDocumeform> form = tbDocumeformMapper.seletByeCconnum(contractmtt.getcConnum());
			if(form.size() > 0) {
				form.get(0).setcCheckstate("xcc005");
				form.get(0).setcMadestate("mk008");				
				int rowform = tbDocumeformMapper.updateBycCnnumSelective(form.get(0));
				if(rowform > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
				}
			}
			
			int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(rowtmt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
			}
			int row = tpCgcontractstMapper.S1S21DH(tstlist);
			if(row > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
			}
			for (TpCgcontractst ractst : contractst) {
				int rwod = tpCgcontractstMapper.deleteByPrimaryKey(ractst.getcId());
				if(rwod > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
				}
			}
			for (TpCgcontractst cgcontractst : tstlist) {
				int rwou = tpCgcontractstMapper.updatebybiangeng(cgcontractst.getcId());
				if(rwou > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
				}
			}
			return builder.msg("生效成功").errcode(Errcode.Success).build();
		}else if(tpCgcontractmtt.getcConnum().indexOf("结算协议") != -1) {
			if(!"1".equals(tpCgcontractmt.getcSw29())) {
				return builder.msg("没有结算协议！！").errcode(Errcode.FailParameterError).build();
			}
			String seconnum  = tpCgcontractmt.getcSeconnum();
			TpCgcontractmtt tmtt;
			
			if(seconnum.indexOf("结算协议1") != -1) {
				tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractmt.getcId());
				tpCgcontractmt.setcSw29("0");
				tpCgcontractmt.setcSeconnum("");
				tpCgcontractmt.setcConmoney(ri.formatForTwo(new BigDecimal(tpCgcontractmt.getcSw09())));	
				tpCgcontractmt.setcSw02(ri.formatForTwo(new BigDecimal(tpCgcontractmt.getcSw09()).subtract(new BigDecimal(tpCgcontractmt.getcSw01()))));
				if("1".equals(tpCgcontractmt.getcSignstep())) {
					tpCgcontractmt.setcSignstep("2");
				}
				if("1".equals(tpCgcontractmt.getcState())) {
					tpCgcontractmt.setcState("3");
				}
			}else {
				seconnum = seconnum.substring(0,(seconnum.length()-1)) + (Integer.parseInt(seconnum.substring(seconnum.length() - 1)) - 1);
				List<TpCgcontractmtt> tmttlist = tpCgcontractmttMapper.selectByConnum(seconnum);
				int a = 0;
				while ("xxk09".equals(tmttlist.get(0).getcStatexxk())) {
					if(tmttlist.get(0).getcConnum().indexOf("结算协议1") != -1) {
						a = 1;
						break;
					}
					seconnum = seconnum.substring(0,(seconnum.length()-1)) + (Integer.parseInt(seconnum.substring(seconnum.length() - 1)) - 1);
					tmttlist = tpCgcontractmttMapper.selectByConnum(seconnum);
				}
				if(a == 1) {
					tpCgcontractmt.setcSw29("0");
					tpCgcontractmt.setcSeconnum("");
					tpCgcontractmt.setcConmoney(ri.formatForTwo(new BigDecimal(tpCgcontractmt.getcSw09())));	
					tpCgcontractmt.setcSw02(ri.formatForTwo(new BigDecimal(tpCgcontractmt.getcSw09()).subtract(new BigDecimal(tpCgcontractmt.getcSw01()))));
					if("1".equals(tpCgcontractmt.getcSignstep())) {
						tpCgcontractmt.setcSignstep("2");
					}
					if("1".equals(tpCgcontractmt.getcState())) {
						tpCgcontractmt.setcState("3");
					}
				}else {
					if(tmttlist.size() > 0) {
						tmtt = tmttlist.get(0);
						tpCgcontractmt.setcSeconnum(tmtt.getcConnum());
						tpCgcontractmt.setcConmoney(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney())));
						tpCgcontractmt.setcSw02(ri.formatForTwo(new BigDecimal(tmtt.getcConmoney()).subtract(new BigDecimal(tpCgcontractmt.getcSw01()))));
						if("1".equals(tpCgcontractmt.getcSignstep())) {
							tpCgcontractmt.setcSignstep("2");
						}
						if("1".equals(tpCgcontractmt.getcState())) {
							tpCgcontractmt.setcState("3");
						}
					}
				}
				
			}
			contractmtt.setcStatexxk("xxk09");
			contractmtt.setcState("4");
			int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(contractmtt);
			if(rowtmtt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
			}
			int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(rowtmt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
			}
			return builder.msg("生效成功").errcode(Errcode.Success).build();
		}else {
			System.out.println("----------------------------------------------------------");
			//作废拟合同
			contractmtt.setcStatexxk("xxk09");//修改信息卡状态 为作废
			contractmtt.setcState("4");//修改合同状态 为作废
			int rowtmtt = tpCgcontractmttMapper.updateByPrimaryKeySelective(contractmtt);
			if(rowtmtt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
			}
			
			//作废信息卡
			List<TbDocumeform> form = tbDocumeformMapper.seletByeCconnum(contractmtt.getcConnum());
			if(form.size() > 0) {
				form.get(0).setcCheckstate("xcc005");
				form.get(0).setcMadestate("mk008");
				int rowform = tbDocumeformMapper.updateBycCnnumSelective(form.get(0));
				if(rowform > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
				}
			}
			
			//判断是否 保留物资  1为保留（物资撤回请购单）  0为不留
			if("1".equals(tpCancelment.getcState())) {
				List<TpCgcontractstt> tstt =tpCgcontractsttMapper.selectByColine(contractmtt.getcConnum());
				System.out.println(tstt.size());
				if(tstt.size() > 0) {
					for (TpCgcontractstt tpCgcontractstt : tstt) {
						if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
							if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
								String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
								for (String string : cs02) {
									int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
									if(row0 == 0) {
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
									}
								}
							}else {
								int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgcontractstt.getcSw02());
								if(row0 == 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
								}
							}
							
						}
					}		
				}
			}	
			if("0".equals(tpCancelment.getcState())) {
				List<TpCgcontractstt> tstt =tpCgcontractsttMapper.selectByColine(contractmtt.getcConnum());
				System.out.println(tstt.size());
				if(tstt.size() > 0) {
					for (TpCgcontractstt tpCgcontractstt : tstt) {
						if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
							if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
								String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
								for (String string : cs02) {
									int row0 = tpCgorderbeforeMapper.update_st_Cstate3(string);
									if(row0 == 0) {
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
									}
								}
							}else {
								int row0 = tpCgorderbeforeMapper.update_st_Cstate3(tpCgcontractstt.getcSw02());
								if(row0 == 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
								}
							}
							
						}
					}		
				}
			}		
			//作废正式合同
			tpCgcontractmt.setcState("4");
			int rowtmt = tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
			if(rowtmt > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
			}
			System.out.println("================================================================");
			//判断有没有变更协议或结算协议  
			//如果有就作废
			if("1".equals(tpCgcontractmt.getcSw28()) || "1".equals(tpCgcontractmt.getcSw29())) {
				
				System.out.println("fdsfdsgfhgfhfghgfdhgfdhfgdhfgdhgfdhdf");
				//查询此合同所有的变更协议或结算协议
				List<TpCgcontractmtt> tmttlist = tpCgcontractmttMapper.selectByOrcId(tpCgcontractmt.getcId());
				for (TpCgcontractmtt contmtt : tmttlist) {
					if("xxk06".equals(contmtt.getcStatexxk()) && contmtt.getcConnum().indexOf("作废协议") == -1) {
						//作废拟合同
						contmtt.setcState("4");
						contmtt.setcStatexxk("xxk09");
						
						int row11 = tpCgcontractmttMapper.updateByPrimaryKeySelective(contmtt);
						if(row11 > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
						}
						
						if(contmtt.getcConnum().indexOf("变更协议") != -1) {
							//作废信息卡
							System.out.println(contmtt.getcConnum() + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
							List<TbDocumeform> form2 = tbDocumeformMapper.seletByeCconnum(contmtt.getcConnum());
							if(form2.size() > 0) {
								form2.get(0).setcCheckstate("xcc005");
								form2.get(0).setcMadestate("mk008");
								int rowform2 = tbDocumeformMapper.updateBycCnnumSelective(form2.get(0));
								if(rowform2 > 0) {
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();
								}
							}						
							//判断是否 保留物资  1为保留（物资撤回请购单）  0为不留
							if("1".equals(tpCancelment.getcState())) {
								List<TpCgcontractstt> tstt2 =tpCgcontractsttMapper.selectByColine(contmtt.getcConnum());
								System.out.println(tstt2.size());
								if(tstt2.size() > 0) {
									for (TpCgcontractstt tpCgcontractstt : tstt2) {
										if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
											if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
												String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
												for (String string : cs02) {
													int row0 = tpCgorderbeforeMapper.update_st_Cstate2(string);
													if(row0 == 0) {
														TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
														return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
													}
												}
											}else {
												int row0 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgcontractstt.getcSw02());
												if(row0 == 0) {
													TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
													return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
												}
											}
										}
									}		
								}
							}
							if("0".equals(tpCancelment.getcState())) {
								List<TpCgcontractstt> tstt2 =tpCgcontractsttMapper.selectByColine(contmtt.getcConnum());
								System.out.println(tstt2.size());
								if(tstt2.size() > 0) {
									for (TpCgcontractstt tpCgcontractstt : tstt2) {
										if(tpCgcontractstt.getcQid() == null && tpCgcontractstt.getcSw02() != null) {
											if(tpCgcontractstt.getcSw02().indexOf("/") != -1) {
												String[] cs02 =  tpCgcontractstt.getcSw02().split("/");
												for (String string : cs02) {
													int row0 = tpCgorderbeforeMapper.update_st_Cstate3(string);
													if(row0 == 0) {
														TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
														return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
													}
												}
											}else {
												int row0 = tpCgorderbeforeMapper.update_st_Cstate3(tpCgcontractstt.getcSw02());
												if(row0 == 0) {
													TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
													return builder.msg("生效失败！！").errcode(Errcode.FailParameterError).build();	
												}
											}
										}
									}		
								}
							}
							
						}	
					}						
				}
			}
			return builder.msg("生效成功").errcode(Errcode.Success).build();
		}	
	}


	@Override
	public ResponseObject<EmptyTag, TpCancelment> S1S12Q(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();		
		TpCancelment tpCancelment = tpCancelmentMapper.selectByPrimaryKey(tmtt.getcId());
		return builder.data(tpCancelment).msg("查询成功").errcode(Errcode.Success).build();	
	}


	@Override
	public ResponseObject<EmptyTag, List<CG_MNHT_S1S2>> S1S21QConnum(User user, AgreementRequest requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractmtt tmtt = requestObject.getTmtt();	
		int num = 0;
		List<CG_MNHT_S1S2> s1s21qcg_MNHT;
		CG_MNHT_M1S1 m1s1 = new CG_MNHT_M1S1();
		TpCgcontractmtt tpCgcontractmtt;
		if(tmtt.getcQid() == null && "xxk09".equals(tmtt.getcStatexxk())) {
			return builder.msg("此合同已作废！！！").errcode(Errcode.FailParameterError).build();	
		}
		while ("xxk09".equals(tmtt.getcStatexxk())) {
			if(tmtt.getcQid() == null && "xxk09".equals(tmtt.getcStatexxk())) {
				return builder.msg("此合同已作废！！！").errcode(Errcode.FailParameterError).build();	
			}
			tmtt = tpCgcontractmttMapper.selectByPrimaryKey(tmtt.getcQid());
		}
		m1s1.setcConnum(tmtt.getcConnum());
		s1s21qcg_MNHT = cgMnhtMapper.S1S21QCG_MNHT(m1s1);
//		if("xxk09".equals(tmtt.getcStatexxk())) {
//			
//			
//			
//		}else {
//			m1s1.setcConnum(tmtt.getcConnum());
//			s1s21qcg_MNHT = cgMnhtMapper.S1S21QCG_MNHT(m1s1);
//			
//		}
		if(s1s21qcg_MNHT.size() > 0) {
			for (CG_MNHT_S1S2 cg_MNHT_S1S2 : s1s21qcg_MNHT) {
				cg_MNHT_S1S2.setNumber(++num);
			}
		}
		return builder.data(s1s21qcg_MNHT).msg("查询成功").errcode(Errcode.Success).build();
	}

	

	
}

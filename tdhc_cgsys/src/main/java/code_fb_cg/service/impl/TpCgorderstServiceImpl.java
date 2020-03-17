package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_Q001_M1S1;
import code_fb.entity.CG_Q001_S1S2;
import code_fb.mapper.CG_Q001_Mapper;
import code_fb.request.CG_Q001_Request_S1S2;
import code_fb_cg.entity.ContractVoBean;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.request.AllotForData;
import code_fb_cg.request.CG_Q001_Request_M1S2;
import code_fb_cg.request.Q001M1s1Qrequest;
import code_fb_cg.request.StRequest;
import code_fb_cg.request.TpCgorderstRequest;
import code_fb_cg.request.YDJ_Req;
import code_fb_cg.service.TpCgorderstService;
import code_fb_customer.CG_Q001_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("tpCgorderstService")
public class TpCgorderstServiceImpl implements TpCgorderstService {
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private CG_Q001_Mapper frcDao;
	@Autowired
	private TpCgorderstMapper orderstMapper;
	@Autowired
	@Qualifier("tpCgauthorityMapper")
	private TpCgauthorityMapper tpCgauthorityMapper;
	
	CG_Q001_Customer cgQ001Customer = new CG_Q001_Customer();

	@SuppressWarnings({ "rawtypes", "unchecked" })
	// 请购单页面多表查询
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgorderst>> selectS1S2(TpCgorderstRequest tpCgorderstRequest,
			String string) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgordermt tpCgordermt = new TpCgordermt();
		tpCgordermt.setcId(tpCgorderstRequest.getCgQ001S1s2().get(0).getcId());
		//请购单号
		tpCgordermt.setcOrdernum(tpCgorderstRequest.getCgQ001S1s2().get(0).getcOrdernum());
		//开始时间
		tpCgordermt.setStartTime(tpCgorderstRequest.getFormData().getStartTime());
		//结束时间
		tpCgordermt.setEndTime(tpCgorderstRequest.getFormData().getEndTime());
		// 查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		// 根据请购单查询物资
		/*String d=(String) requestObject.getData().get(1);
		String d1=(String) requestObject.getData().get(2);
		System.out.println(d);
		System.out.println(d1);
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
		try {
			tpCgordermt.setStartTime(sdf.parse(d));
			tpCgordermt.setEndTime(sdf.parse(d1));
		} catch (ParseException e) {
			e.printStackTrace();
		}*/
		//tpCgordermt.setStartTime(new Date(d1));
		
		List<TpCgorderst> list = tpCgorderstMapper.selectS1s2(tpCgordermt);
		// 通过物资查询合同物资
		List<TpCgorderst> contst = new ArrayList<TpCgorderst>();
		//把拆分出来的数据放到一个新集合里
		for(int i = list.size()-1; i >= 0; i--) {
			if(list.get(i).getcNum() != null) {
				if(list.get(i).getcNum().indexOf(".") != -1) {
					contst.add(list.get(i));
				}			
			}
		}
		//如果已拆分集合里面有数据，就把规格型号一样的放到一起
		if(contst.size()>0) {
			for(TpCgorderst rst : contst) {
				for(int i = 0; i < list.size(); i++) {
					//判断规格型号是否一致
					if(rst.getcSpec() != null && list.get(i).getcSpec() != null) {		
						if(rst.getcSpec().equals(list.get(i).getcSpec()) && rst.getcGoodsname().equals(list.get(i).getcGoodsname()) ) {
							list.remove(list.indexOf(rst));
							list.add(i, rst);
							break;
						}
					}else {
						if(rst.getcGoodsname().equals(list.get(i).getcGoodsname()) ) {
							list.remove(list.indexOf(rst));
							list.add(i, rst);
							break;
						}
					}
				}
			}
		}
		List<TpCgorderst> rstlist = new ArrayList<TpCgorderst>();//收集状态为3 却只转到拟合同
		for (TpCgorderst tpCgorderst : list) {
			if("1".equals(tpCgorderst.getcState()) || "3".equals(tpCgorderst.getcState())) {
				List<TpCgcontractst> tpconst = tpCgcontractstMapper.selectBySw02(tpCgorderst.getcId());	
			
				if(tpconst.size() == 0) {
					rstlist.add(tpCgorderst);
				}
				if (tpconst.size() > 1) {
					List<TpCgcontractst> tpconst2 = tpCgcontractstMapper.selectBySw02_For4(tpCgorderst.getcId());
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconst2.size() != 0) {
						TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst2.get(0).getcMtid());
						if (tpconmt != null && "".equals(tpCgorderst.getcState())) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmt.getcGettime());// 最后到货时间
							qmq.setcSw12(tpconmt.getcSw10());// 提前或者延迟天数
						}
					}
					// 请购单数据
					if (tpCgorderst != null) {
						qmq.setcState(tpCgorderst.getcState());// 采购状态
						qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
						qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
						qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
						qmq.setcNum(tpCgorderst.getcNum());// 请购数量
						qmq.setcUnit(tpCgorderst.getcUnit());// 单位
						qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
						qmq.setcManor(tpCgorderst.getcManor());// 采购员
						qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
						qmq.setcRemark(tpCgorderst.getcRemark());// 备注
						qmq.setcId(tpCgorderst.getcId());// 物资单号
						qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
						qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
						qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
						qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
						if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
							qmq.setcConnum(tpCgorderst.getcSw10());
						}
						qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
						
					}
					// 合同物资数据
					if (tpconst2.size() != 0) {
						qmq.setXJgoodsname("该请购单物资被拆分成了" + tpconst.size() + "条物资进行报关");// 警告信息
//						 qmq.setXJgoodsname(tpconst2.get(0).getcSw08());//报关名称
//						 qmq.setXJspec(tpconst2.get(0).getcSpec());//规格
//						 qmq.setXJnum(tpconst2.get(0).getcGoodsnum());//数量
//						 qmq.setXjunit(tpconst2.get(0).getcUnit());//单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconst2.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
				if (tpconst.size() == 1) {
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconst != null) {
						TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
						if (tpconmt != null) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmt.getcGettime());// 最后到货时间
							qmq.setcSw12(tpconmt.getcSw10());// 提前或者延迟天数
						}
					}
					// 请购单数据
					if (tpCgorderst != null) {
						qmq.setcState(tpCgorderst.getcState());// 采购状态
						qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
						qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
						qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
						qmq.setcNum(tpCgorderst.getcNum());// 请购数量
						qmq.setcUnit(tpCgorderst.getcUnit());// 单位
						qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
						qmq.setcManor(tpCgorderst.getcManor());// 采购员
						qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
						qmq.setcRemark(tpCgorderst.getcRemark());// 备注
						qmq.setcId(tpCgorderst.getcId());// 物资单号
						qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
						qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
						qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
						qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
						if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
							qmq.setcConnum(tpCgorderst.getcSw10());
						}
						qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
					}
					// 合同物资数据
					if (tpconst.size() != 0) {
						qmq.setXJgoodsname(tpconst.get(0).getcSw08());// 报关名称
						qmq.setXJspec(tpconst.get(0).getcSpec());// 规格
						qmq.setXJnum(tpconst.get(0).getcGoodsnum());// 数量
						qmq.setXjunit(tpconst.get(0).getcUnit());// 单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconst.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
			}else
			if("6".equals(tpCgorderst.getcState())) {

				List<TpCgcontractstt> tpconstt = tpCgcontractsttMapper.selectBySw02(tpCgorderst.getcId());
				if (tpconstt.size() > 1) {
					List<TpCgcontractstt> tpconstt2 = tpCgcontractsttMapper.selectBySw02_For4(tpCgorderst.getcId());
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconstt2.size() != 0) {
						TpCgcontractmtt tpconmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpconstt2.get(0).getcMtid());
						if (tpconmtt != null && "".equals(tpCgorderst.getcState())) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmtt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmtt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmtt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmtt.getcGettime());// 最后到货时间
						}
					}
					// 请购单数据
					if (tpCgorderst != null) {
						qmq.setcState(tpCgorderst.getcState());// 采购状态
						qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
						qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
						qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
						qmq.setcNum(tpCgorderst.getcNum());// 请购数量
						qmq.setcUnit(tpCgorderst.getcUnit());// 单位
						qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
						qmq.setcManor(tpCgorderst.getcManor());// 采购员
						qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
						qmq.setcRemark(tpCgorderst.getcRemark());// 备注
						qmq.setcId(tpCgorderst.getcId());// 物资单号
						qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
						qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
						qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
						qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
						if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
							qmq.setcConnum(tpCgorderst.getcSw10());
						}
						qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
						
					}
					// 合同物资数据
					if (tpconstt2.size() != 0) {
						qmq.setXJgoodsname("该请购单物资被拆分成了" + tpconstt.size() + "条物资进行报关");// 警告信息
//						 qmq.setXJgoodsname(tpconst2.get(0).getcSw08());//报关名称
//						 qmq.setXJspec(tpconst2.get(0).getcSpec());//规格
//						 qmq.setXJnum(tpconst2.get(0).getcGoodsnum());//数量
//						 qmq.setXjunit(tpconst2.get(0).getcUnit());//单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconstt2.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
				if (tpconstt.size() == 1) {
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconstt != null) {
						TpCgcontractmtt tpconmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpconstt.get(0).getcMtid());
						if (tpconmtt != null) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmtt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmtt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmtt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmtt.getcGettime());// 最后到货时间
						}
					}
					// 请购单数据
					if (tpCgorderst != null) {
						qmq.setcState(tpCgorderst.getcState());// 采购状态
						qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
						qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
						qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
						qmq.setcNum(tpCgorderst.getcNum());// 请购数量
						qmq.setcUnit(tpCgorderst.getcUnit());// 单位
						qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
						qmq.setcManor(tpCgorderst.getcManor());// 采购员
						qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
						qmq.setcRemark(tpCgorderst.getcRemark());// 备注
						qmq.setcId(tpCgorderst.getcId());// 物资单号
						qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
						qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
						qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
						qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
						if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
							qmq.setcConnum(tpCgorderst.getcSw10());
						}
						qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
					}
					// 合同物资数据
					if (tpconstt.size() != 0) {
						qmq.setXJgoodsname(tpconstt.get(0).getcSw08());// 报关名称
						qmq.setXJspec(tpconstt.get(0).getcSpec());// 规格
						qmq.setXJnum(tpconstt.get(0).getcGoodsnum());// 数量
						qmq.setXjunit(tpconstt.get(0).getcUnitspec());// 单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconstt.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
				if (tpconstt.size() == 0) {
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					// 请购单数据
					if (tpCgorderst != null) {
						qmq.setcState(tpCgorderst.getcState());// 采购状态
						qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
						qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
						qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
						qmq.setcNum(tpCgorderst.getcNum());// 请购数量
						qmq.setcUnit(tpCgorderst.getcUnit());// 单位
						qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
						qmq.setcManor(tpCgorderst.getcManor());// 采购员
						qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
						qmq.setcRemark(tpCgorderst.getcRemark());// 备注
						qmq.setcId(tpCgorderst.getcId());// 物资单号
						qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
						qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
						qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
						qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
						if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
							qmq.setcConnum(tpCgorderst.getcSw10());
						}
						qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
					}
					request.add(qmq);
				}
			}else {
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				// 请购单数据
				if (tpCgorderst != null) {
					qmq.setcState(tpCgorderst.getcState());// 采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
					qmq.setcNum(tpCgorderst.getcNum());// 请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());// 单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());// 采购员
					qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());// 备注
					qmq.setcId(tpCgorderst.getcId());// 物资单号
					qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
					qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
					qmq.setcSw14(tpCgorderst.getcSw14());//请购项目
					if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
						qmq.setcConnum(tpCgorderst.getcSw10());
					}
					qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
				}
				request.add(qmq);
			}			
		}
		if(rstlist.size() > 0) {
			for (TpCgorderst derst : rstlist) {
				List<TpCgcontractstt> tpconstt = tpCgcontractsttMapper.selectBySw02(derst.getcId());
				if (tpconstt.size() > 1) {
					List<TpCgcontractstt> tpconstt2 = tpCgcontractsttMapper.selectBySw02_For4(derst.getcId());
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconstt2.size() != 0) {
						TpCgcontractmtt tpconmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpconstt2.get(0).getcMtid());
						if (tpconmtt != null && "".equals(derst.getcState())) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmtt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmtt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmtt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmtt.getcGettime());// 最后到货时间
						}
					}
					// 请购单数据
					if (derst != null) {
						qmq.setcState(derst.getcState());// 采购状态
						qmq.setcMustneed(derst.getcMustneed());// 采购类型
						qmq.setcGoodsname(derst.getcGoodsname());// 物资名称
						qmq.setcSpec(derst.getcSpec());// 规格型号
						qmq.setcNum(derst.getcNum());// 请购数量
						qmq.setcUnit(derst.getcUnit());// 单位
						qmq.setcArrtime(derst.getcArrtime());// 要求到货时间
						qmq.setcManor(derst.getcManor());// 采购员
						qmq.setcPhone(derst.getcPhone());// 联系方式
						qmq.setcRemark(derst.getcRemark());// 备注
						qmq.setcId(derst.getcId());// 物资单号
						qmq.setcTypename(derst.getcTypename());// 特批类型
						qmq.setcSw08(derst.getcSw08());// 类别明细
						qmq.setcSw09(derst.getcSw09());// 建设生产
						qmq.setcSw14(derst.getcSw14());//请购项目
						if(derst.getcSw10() != null && derst.getcSw10() != "") {
							qmq.setcConnum(derst.getcSw10());
						}
						qmq.setqXcause(derst.getcSw12());//取消原因
						
					}
					// 合同物资数据
					if (tpconstt2.size() != 0) {
						qmq.setXJgoodsname("该请购单物资被拆分成了" + tpconstt.size() + "条物资进行报关");// 警告信息
//						 qmq.setXJgoodsname(tpconst2.get(0).getcSw08());//报关名称
//						 qmq.setXJspec(tpconst2.get(0).getcSpec());//规格
//						 qmq.setXJnum(tpconst2.get(0).getcGoodsnum());//数量
//						 qmq.setXjunit(tpconst2.get(0).getcUnit());//单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconstt2.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
				if (tpconstt.size() == 1) {
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					if (tpconstt != null) {
						TpCgcontractmtt tpconmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpconstt.get(0).getcMtid());
						if (tpconmtt != null) {
//							qmq.setcSw10(tpconmt.getcSw10());// 采购员
							qmq.setcSupplier(tpconmtt.getcSupplier());// 供应商
							qmq.setcCludetime(tpconmtt.getcCludetime());// 签订时间
							qmq.setcDr(tpconmtt.getcDr());// 预计到货时间
							qmq.setcGettime(tpconmtt.getcGettime());// 最后到货时间
						}
					}
					// 请购单数据
					if (derst != null) {
						qmq.setcState(derst.getcState());// 采购状态
						qmq.setcMustneed(derst.getcMustneed());// 采购类型
						qmq.setcGoodsname(derst.getcGoodsname());// 物资名称
						qmq.setcSpec(derst.getcSpec());// 规格型号
						qmq.setcNum(derst.getcNum());// 请购数量
						qmq.setcUnit(derst.getcUnit());// 单位
						qmq.setcArrtime(derst.getcArrtime());// 要求到货时间
						qmq.setcManor(derst.getcManor());// 采购员
						qmq.setcPhone(derst.getcPhone());// 联系方式
						qmq.setcRemark(derst.getcRemark());// 备注
						qmq.setcId(derst.getcId());// 物资单号
						qmq.setcTypename(derst.getcTypename());// 特批类型
						qmq.setcSw08(derst.getcSw08());// 类别明细
						qmq.setcSw09(derst.getcSw09());// 建设生产
						qmq.setcSw14(derst.getcSw14());//请购项目
						if(derst.getcSw10() != null && derst.getcSw10() != "") {
							qmq.setcConnum(derst.getcSw10());
						}
						qmq.setqXcause(derst.getcSw12());//取消原因
					}
					// 合同物资数据
					if (tpconstt.size() != 0) {
						qmq.setXJgoodsname(tpconstt.get(0).getcSw08());// 报关名称
						qmq.setXJspec(tpconstt.get(0).getcSpec());// 规格
						qmq.setXJnum(tpconstt.get(0).getcGoodsnum());// 数量
						qmq.setXjunit(tpconstt.get(0).getcUnitspec());// 单位
						if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
							qmq.setcConnum(tpconstt.get(0).getcConnum());//合同号
						}
					}
					request.add(qmq);
				}
				
				if (tpconstt.size() == 0) {
					Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
					// 请购单数据
					if (derst != null) {
						qmq.setcState(derst.getcState());// 采购状态
						qmq.setcMustneed(derst.getcMustneed());// 采购类型
						qmq.setcGoodsname(derst.getcGoodsname());// 物资名称
						qmq.setcSpec(derst.getcSpec());// 规格型号
						qmq.setcNum(derst.getcNum());// 请购数量
						qmq.setcUnit(derst.getcUnit());// 单位
						qmq.setcArrtime(derst.getcArrtime());// 要求到货时间
						qmq.setcManor(derst.getcManor());// 采购员
						qmq.setcPhone(derst.getcPhone());// 联系方式
						qmq.setcRemark(derst.getcRemark());// 备注
						qmq.setcId(derst.getcId());// 物资单号
						qmq.setcTypename(derst.getcTypename());// 特批类型
						qmq.setcSw08(derst.getcSw08());// 类别明细
						qmq.setcSw09(derst.getcSw09());// 建设生产
						qmq.setcSw14(derst.getcSw14());//请购项目
						if(derst.getcSw10() != null && derst.getcSw10() != "") {
							qmq.setcConnum(derst.getcSw10());
						}
						qmq.setqXcause(derst.getcSw12());//取消原因
					}
					request.add(qmq);
				}
			}
		}
		// 再查询合同信息
		if (request.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		for (Q001M1s1Qrequest tpCgorderst : request) {
			if("2".equals(tpCgorderst.getcState())) {
				tpCgorderst.setcConnum("");
			}
		}
		return builder.data(request).errcode(Errcode.FailParameterError).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgorderst>> selectForOrderSt(
			RequestObject<EmptyTag, StRequest> requestObject) {
		// TODO 查询物资信息
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderst> st = tpCgorderstMapper.selectForOrderSt(requestObject.getData());
		if (st == null) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(st).errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgorderst>> selectOrderStForAllot(
			RequestObject<EmptyTag, AllotForData> requestObject) {
		// TODO 分配前的条件查询
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderst> list = tpCgorderstMapper.selectOrderStForAllot(requestObject.getData());
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();

	}

	public ResponseObject<EmptyTag, List<TpCgordermt>> before_serDel(User user,RequestObject<EmptyTag, YDJ_Req> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgauthority tpCgauthority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		List<TpCgorderst> list = new ArrayList<TpCgorderst>();
		if(tpCgauthority == null) {
			list = tpCgorderstMapper.before_serDel(requestObject.getData().getTpCgorderst().get(0));
		}else {
			requestObject.getData().getTpCgorderst().get(0).setcManor(tpCgauthority.getcSubitemid());
			list = tpCgorderstMapper.before_serDel(requestObject.getData().getTpCgorderst().get(0));
		}
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询成功,无数据！").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}
	
	@Override
	public ResponseObject<EmptyTag, List<TpCgordermt>> before_serDel2(User user,
			RequestObject<EmptyTag, YDJ_Req> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderst> list = new ArrayList<TpCgorderst>();
		list = tpCgorderstMapper.before_serDel(requestObject.getData().getTpCgorderst().get(0));
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询成功,无数据！").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}


	public ResponseObject<EmptyTag, List<TpCgorderst>> selectGOODSNAMEQ() {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderst> list = tpCgorderstMapper.selectGOODSNAMEQ();
		if (list.size() == 0) {
			return builder.data(null).errcode(Errcode.FailParameterError).build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21UCF(RequestObject<EmptyTag, StRequest> requestObject) {
		// TODO 拆分功能
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		//获取主键，单位，数量
		TpCgorderst stList = tpCgorderstMapper.selectByPrimaryKey(requestObject.getData().getStList().get(0).getcId());
		String unit = requestObject.getData().getCfList().get(0).getcUnit();
		String num1 = stList.getcNum();// 原来的数量
		if(num1 == null) {
			return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
		}
//		System.out.println("num1原来的数量:::"+num1);
		String num2 = requestObject.getData().getCfList().get(0).getcNum();// 需要拆分出的数量
//		System.out.println("需要查询分的数据量::"+ num2);
		String num3 = ri.formatForTwo(new BigDecimal(num1).subtract(new BigDecimal(num2)));// 原来数量拆分后剩余的数量 保留两位
//		System.out.println("num3的值两位小数::"+num3);
		String num4 = ri.formatToFour(new BigDecimal(num1).subtract(new BigDecimal(num2)));// 原来数量拆分后剩余的数量 保留四位小数
//		System.out.println("num4的值四位小数::"+num4);
		//对单位不是吨的数据进行数量拆分
		if (!unit.equals("吨") || !unit.equals("立方米")) {
			// 将原来的数据进行修改，修改数量为num3
			List<TpCgorderst> newst = new ArrayList<TpCgorderst>();
			
			stList.setcNum(ri.formatForTwo(new BigDecimal(num2)));
//			System.out.println();
			newst.add(stList);
			int row1 = tpCgorderstMapper.addExcelst(newst);
			if (row1 == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
			}
			stList.setcNum(num3);
			int row0 = tpCgorderstMapper.updateByPrimaryKeySelective(stList);
			if (row0 == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
			}
			return builder.errcode(Errcode.Success).msg("拆分成功").build();
		} else {
		//对单位是吨的数据进行拆分
			// 将原来的数据进行修改，修改数量为num4
			List<TpCgorderst> newst = new ArrayList<TpCgorderst>();
			stList.setcNum(ri.formatToFour(new BigDecimal(num2)));
//			System.out.println("吨位单位拆分出来的数量：："+stList.getcNum());
//			stList.setcId(null);
			newst.add(stList);
			int row1 = tpCgorderstMapper.addExcelst(newst);
			if (row1 == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
			}
			stList.setcNum(num4);
//			System.out.println("吨位单位拆分后剩余的量:::"+stList.getcNum());
			int row0 = tpCgorderstMapper.updateByPrimaryKeySelective(stList);
			
//			System.out.println("返回值" +row0);
			if (row0 == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("拆分失败").build();
			}
			return builder.errcode(Errcode.Success).msg("拆分成功").build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21Ubuy(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		//查询拟合同信息中是否有对应的信息
		for (CG_Q001_S1S2 cg_Q001_S1S2 : cgQ001S1s2) {
			List<TpCgcontractstt> selectCgcontract = tpCgcontractsttMapper.selectCgcontract(cg_Q001_S1S2.getcSw04());
			if(selectCgcontract.size()>0) {
				return builder.errcode(Errcode.FailParameterError).msg("请通知对应的采购员撤回拟合同！！！！").session(session).build();
			}
		}
		for (CG_Q001_S1S2 S1S2 : cgQ001S1s2) {
			if("0".equals(S1S2.getcState())) {
				//将采购状态修改为已取消
				S1S2.setcState("2");
			}		
		}
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21U_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21UCG_Q001_S1S2(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
/*		String cremark = "";
		for(TpCgorderst s1s2 : list) {
			s1s2.setcState("2");
			cremark = s1s2.getcRemark();
			if("".equals(cremark) || cremark == null) {
				s1s2.setcRemark("(取消购买)");
			}else {
				if(cremark.lastIndexOf("(") != -1) {	
					cremark = cremark.substring(0, cremark.lastIndexOf("("));	
				}
				s1s2.setcRemark(cremark+"(取消购买)");	
			}
		}
		int row0 = 0;
		row0 = tpCgorderstMapper.S1S21Ubuy(list);
		if (row0 == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("取消购买失败").build();
		}
		return builder.errcode(Errcode.Success).msg("取消购买成功").build();*/
	}

	//撤销取消采购
	public ResponseObject<EmptyTag, EmptyData> S1S21Uagainbuy(
			CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		for (CG_Q001_S1S2 S1S2 : cgQ001S1s2) {
			if("2".equals(S1S2.getcState())) {
				//将采购状态修改为未采购
				S1S2.setcState("0");
				S1S2.setcSw12("");
			}			
		}
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21U_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21S_Q001_QX(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
		
		/*
		List<TpCgorderst> list = requestObject.getData().getCgQ001S1s2();
		String cremark = "";
		for(TpCgorderst s1s2 : list) {
			s1s2.setcState("0");
			cremark = s1s2.getcRemark();
			if(cremark.lastIndexOf("(") == 0) {
				s1s2.setcRemark("");
			}else if(cremark.lastIndexOf("(") > 0) {
				cremark = cremark.substring(0, cremark.lastIndexOf("("));
				s1s2.setcRemark(cremark);
			}
		}
		int row0 = 0;
		row0 = tpCgorderstMapper.S1S21Ubuy(list);
		if (row0 == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("取消购买失败").build();
		}
		return builder.errcode(Errcode.Success).msg("取消购买成功").build();*/
	}
	/**
	 * 物资查询
	 */
	public ResponseObject<EmptyTag, List<TpCgorderst>> M2S11Q(CG_Q001_Request_M1S2 cg_Q001_Request_M1S2, String session) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		// 查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
	
		List<TpCgorderst> list = tpCgorderstMapper.M2S11Q(cg_Q001_Request_M1S2.getCgQ001M1s1().get(0), cg_Q001_Request_M1S2.getTpCgorderst());
		
		for (TpCgorderst tpCgorderst : list) {
			List<TpCgcontractst> tpconst = tpCgcontractstMapper.selectBySw02(tpCgorderst.getcId());
			if (tpconst.size() > 1) {
				List<TpCgcontractst> tpconst2 = tpCgcontractstMapper.selectBySw02_For4(tpCgorderst.getcId());
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				if (tpconst2.size() != 0) {
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst2.get(0).getcMtid());
					if (tpconmt != null) {
//						qmq.setcSw10(tpconmt.getcSw10());// 采购员
						qmq.setcSupplier(tpconmt.getcSupplier());// 供应商
						qmq.setcCludetime(tpconmt.getcCludetime());// 签订时间
						qmq.setcDr(tpconmt.getcDr());// 预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());// 最后到货时间
						qmq.setcSw12(tpconmt.getcSw10());// 提前或者延迟天数
					}
				}
				// 请购单数据
				if (tpCgorderst != null) {
					qmq.setcState(tpCgorderst.getcState());// 采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
					qmq.setcNum(tpCgorderst.getcNum());// 请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());// 单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());// 采购员
					qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());// 备注
					qmq.setcId(tpCgorderst.getcId());// 物资单号
					qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
					qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
					if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
						qmq.setcConnum(tpCgorderst.getcSw10());
					}
					qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
				}
				// 合同物资数据
				if (tpconst2.size() != 0) {
					qmq.setXJgoodsname("该请购单物资被拆分成了" + tpconst.size() + "条物资进行报关");// 警告信息
					// qmq.setXJgoodsname(tpconst2.get(0).getcSw08());//报关名称
					// qmq.setXJspec(tpconst2.get(0).getcSpec());//规格
					// qmq.setXJnum(tpconst2.get(0).getcGoodsnum());//数量
					// qmq.setXjunit(tpconst2.get(0).getcUnit());//单位
					// qmq.setcConnum(tpconst2.get(0).getcConnum());//合同号
					if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
						qmq.setcConnum(tpconst2.get(0).getcConnum());//合同号
					}
				}
				request.add(qmq);
			}
			if (tpconst.size() == 1) {
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				if (tpconst != null) {
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
					if (tpconmt != null) {
//						qmq.setcSw10(tpconmt.getcSw10());// 采购员
						qmq.setcSupplier(tpconmt.getcSupplier());// 供应商
						qmq.setcCludetime(tpconmt.getcCludetime());// 签订时间
						qmq.setcDr(tpconmt.getcDr());// 预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());// 最后到货时间
						qmq.setcSw12(tpconmt.getcSw10());// 提前或者延迟天数
					}
				}
				// 请购单数据
				if (tpCgorderst != null) {
					qmq.setcState(tpCgorderst.getcState());// 采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
					qmq.setcNum(tpCgorderst.getcNum());// 请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());// 单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());// 采购员
					qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());// 备注
					qmq.setcId(tpCgorderst.getcId());// 物资单号
					qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
					qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
					if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
						qmq.setcConnum(tpCgorderst.getcSw10());
					}
					qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
				}
				// 合同物资数据
				if (tpconst.size() != 0) {
					qmq.setXJgoodsname(tpconst.get(0).getcSw08());// 报关名称
					qmq.setXJspec(tpconst.get(0).getcSpec());// 规格
					qmq.setXJnum(tpconst.get(0).getcGoodsnum());// 数量
					qmq.setXjunit(tpconst.get(0).getcUnit());// 单位
					qmq.setcConnum(tpconst.get(0).getcConnum());// 合同号
					if(qmq.getcConnum() == null || "".equals(qmq.getcConnum())) {
						qmq.setcConnum(tpconst.get(0).getcConnum());//合同号
					}
				}
				request.add(qmq);
			}
			if (tpconst.size() == 0) {
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				/*
				 * if(tpconst!=null) { TpCgcontractmt tpconmt =
				 * tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
				 * if(tpconmt!=null) { qmq.setcSw10(tpconmt.getcSw10());//采购员
				 * qmq.setcSupplier(tpconmt.getcSupplier());//供应商
				 * qmq.setcCludetime(tpconmt.getcCludetime());//签订时间
				 * qmq.setcDr(tpconmt.getcDr());//预计到货时间
				 * qmq.setcGettime(tpconmt.getcGettime());//最后到货时间
				 * qmq.setcSw12(tpconmt.getcSw10());//提前或者延迟天数 } }
				 */
				// 请购单数据
				if (tpCgorderst != null) {
					qmq.setcState(tpCgorderst.getcState());// 采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());// 采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());// 物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());// 规格型号
					qmq.setcNum(tpCgorderst.getcNum());// 请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());// 单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());// 要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());// 采购员
					qmq.setcPhone(tpCgorderst.getcPhone());// 联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());// 备注
					qmq.setcId(tpCgorderst.getcId());// 物资单号
					qmq.setcTypename(tpCgorderst.getcTypename());// 特批类型
					qmq.setcSw08(tpCgorderst.getcSw08());// 类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());// 建设生产
					if(tpCgorderst.getcSw10() != null && tpCgorderst.getcSw10() != "") {
						qmq.setcConnum(tpCgorderst.getcSw10());
					}
					qmq.setqXcause(tpCgorderst.getcSw12());//取消原因
				}
				// 合同物资数据
				/*
				 * if(tpconst.size()!=0) { qmq.setXJgoodsname(tpconst.get(0).getcSw08());//报关名称
				 * qmq.setXJspec(tpconst.get(0).getcSpec());//规格
				 * qmq.setXJnum(tpconst.get(0).getcGoodsnum());//数量
				 * qmq.setXjunit(tpconst.get(0).getcUnit());//单位
				 * qmq.setcConnum(tpconst.get(0).getcConnum());//合同号 }
				 */
				request.add(qmq);
			}
		}
		// 再查询合同信息
		if (request.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(request).errcode(Errcode.FailParameterError).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21XZ(User user,RequestObject<EmptyTag, YDJ_Req> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();		
		List<ContractVoBean> contra = requestObject.getData().getContractVoBean();
		TpCgorderst tpCgorderst = new TpCgorderst();
		int row = 0;
		if(user.getUserName() == null) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败,请重新添加").build();
		}
		String username = user.getUserName();
		for (ContractVoBean contractVoBean : contra) {
			tpCgorderst.setcId(contractVoBean.getcId());
			tpCgorderst.setcState("4");
			tpCgorderst.setcSw11(username);
			row = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
			if(row == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21CH(User user,RequestObject<EmptyTag, YDJ_Req> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();		
		List<ContractVoBean> contra = requestObject.getData().getContractVoBean();
		TpCgorderst tpCgorderst = new TpCgorderst();
		int row = 0;
		for (ContractVoBean contractVoBean : contra) {
			tpCgorderst.setcId(contractVoBean.getcId());
			tpCgorderst.setcState("0");
			tpCgorderst.setcSw11("");
			row = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
			if(row == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("撤回失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("撤回成功").build();
	}

	public ResponseObject<EmptyTag, List<TpCgorderst>> M2S11QDZ(User user) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderst> list = tpCgorderstMapper.M2S11QDZ(user.getUserName());
		for (TpCgorderst tpCgorderst : list) {
			tpCgorderst.setcCustoms(tpCgorderst.getcGoodsname());
			tpCgorderst.setcCuspec(tpCgorderst.getcSpec());
			tpCgorderst.setcUnitspec(tpCgorderst.getcUnit());
		}
		
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询成功,无数据！").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}

	
}

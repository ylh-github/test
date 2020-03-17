package code_fb_cg.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.OutExcel;
import code_fb_cg.entity.QrequestEntity;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgordermt2;
import code_fb_cg.entity.TpCgordermt3;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.request.CG_EXCEL_Request;
import code_fb_cg.request.ExcelImp;
import code_fb_cg.request.ItemRequestObject;
import code_fb_cg.request.MtRequest;
import code_fb_cg.request.OrderMtListRequest;
import code_fb_cg.request.OrderMtrequest;
import code_fb_cg.request.Q001M1s1Qrequest;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.request.TpCgordermtM1S13_Request;
import code_fb_cg.response.CG_EXCEL_Response;
import code_fb_cg.response.OutExcelResponse;
import code_fb_cg.service.TpCgordermtService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

/**
 * 
 * @author lhb
 * @时间：2018年8月16日上午11:29:08
 */
@Service("tpCgordermtService")
public class TpCgordermtServiceImpl implements TpCgordermtService {

	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;

	public static List<TpCgordermt> removeDuplicate(List<TpCgordermt> list) {
		for (int i = 0; i < list.size() - 1; i++) {
			for (int j = list.size() - 1; j > i; j--) {
				if (list.get(j).equals(list.get(i))) {
					list.remove(j);
				}
			}
		}
		return list;
	}
	//正常导入
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt(RequestObject<EmptyTag, ExcelImp> requestObject) {
//		Long  d1 = System.currentTimeMillis();
//		System.out.println("开始时间："+d1);
		// ------------------------------------------------------------------------------------
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		DateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		Date date = null;
		List<TpCgordermt> mt = new ArrayList<TpCgordermt>();// 请购单
		List<TpCgorderst> st = new ArrayList<TpCgorderst>();// 物资表
		// TpCgordermt tpmt = new TpCgordermt();//请购单
		for (CG_EXCEL_Request cg : requestObject.getData().getExcel()) {
			String str = null;
			str = cg.getcTimeapply();
			try {
				date = format.parse(str);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			Calendar c = Calendar.getInstance();
			c.setTime(date);
			TpCgordermt tpcgmt = new TpCgordermt();// 请购单
			TpCgorderst tpcgst = new TpCgorderst();// 物资表
			tpcgmt.setcTimeapply(cg.getcTimeapply().replace("/", "-").replaceAll(" ", ""));// 请购日期
			tpcgmt.setcOrdernum(cg.getcOrdernum().replace(" ", "").replaceAll(" ", "").toUpperCase());// 请购单号
			tpcgmt.setcComname(get_data_value(cg.getcComname(), "公司名称").replaceAll(" ", ""));// 请购项目
			tpcgmt.setcDeptapply(get_data_value(cg.getcDeptapply(), "部门名称").replaceAll(" ", ""));// 请购部门
			tpcgmt.setcManapply(cg.getcManapply().replaceAll(" ", ""));// 请购人
			// tpcgmt.setcSw03(cg.getcSw03());//申请人联系方式
			// tpcgmt.setcId(id);
			tpcgmt.setcMittype("0");
			tpcgmt.setcState("0");
			tpcgmt.setcCreater(cg.getcCreater().replaceAll(" ", ""));// 请购单创建人
			tpcgmt.setcCreatetime(cg.getcCreatetime());// 请购单创建时间
			mt.add(tpcgmt);
			tpcgst.setcNo(cg.getcNo().replace(" ", "").replaceAll(" ", ""));// 存档号
			tpcgst.setcGoodsname(cg.getcGoodsname().replaceAll(" ", ""));// 货物名称
			tpcgst.setcSpec(cg.getcSpec().replaceAll(" ", ""));// 规格型号
			tpcgst.setcUnit(cg.getcUnit().replaceAll(" ", ""));// 单位
			tpcgst.setcNum(cg.getcNum().replace(" ", "").replaceAll(" ", ""));// 请购数量
			if (cg.getcMustneed() == null) {
				tpcgst.setcMustneed(null);// 采购类型
			}
			if (cg.getcMustneed() != null) {
				tpcgst.setcMustneed(get_data_value(cg.getcMustneed(), "急需状态"));// 采购类型
				if (cg.getcMustneed().equals("A类")) {
					c.add(Calendar.DATE, 15);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
				if (cg.getcMustneed().equals("B类")) {
					c.add(Calendar.DATE, 30);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
				if (cg.getcMustneed().equals("C类")) {
					c.add(Calendar.DATE, 60);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
				if (cg.getcMustneed().equals("A")) {
					c.add(Calendar.DATE, 15);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
				if (cg.getcMustneed().equals("B")) {
					c.add(Calendar.DATE, 30);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
				if (cg.getcMustneed().equals("C")) {
					c.add(Calendar.DATE, 60);
					Date d = c.getTime();
					tpcgst.setcOrdealline(d);
				}
			}
			tpcgst.setcArrtime(cg.getcArrtime().replaceAll(" ", ""));// 要求到货时间
			tpcgst.setcCreater(cg.getcCreater());// 物资创建人
			tpcgst.setcCreatetime(cg.getcCreatetime());// 物资创建时间
			// tpcgst.setcMtid(id);
			tpcgst.setcState("0");
			tpcgst.setcSw01("0");
			tpcgst.setcSw02(cg.getcSw02().replaceAll(" ", ""));// 用途说明
			tpcgst.setcSw03(cg.getcTimeapply().replace("/", "-"));// 请购日期
			tpcgst.setcSw04(cg.getcOrdernum().replace(" ", "").replaceAll(" ", ""));// 请购单号
			tpcgst.setcSw05(get_data_value(cg.getcComname(), "公司名称").replaceAll(" ", ""));// 请购项目
			tpcgst.setcSw06(get_data_value(cg.getcDeptapply(), "部门名称").replaceAll(" ", ""));// 请购部门
			tpcgst.setcSw07(cg.getcManapply().replaceAll(" ", ""));// 请购人
			tpcgst.setcAllotstate("0");
			st.add(tpcgst);
		}
		//批量添加请购单主表
		List<TpCgordermt> newlist = new ArrayList<TpCgordermt>();
		List<TpCgordermt> newlist2 = new ArrayList<TpCgordermt>();
		Iterator iter = mt.iterator();
		while (iter.hasNext()) {
			Object object = iter.next();
			TpCgordermt man = (TpCgordermt) object;
			if (!newlist.contains(man)) {
				newlist.add(man);
			}
		}
		for (TpCgordermt tpCgordermt : newlist) {
			RandomId ri = new RandomId();
			String id = ri.getRandomId();
			tpCgordermt.setcId(id);
			newlist2.add(tpCgordermt);
		}
		
		int rowmt = tpCgordermtMapper.addExcelmt(newlist2);
		if (rowmt == 0) {
			return builder.data(rowmt).errcode(Errcode.FailParameterError).msg("导入失败").build();
		}
		//批量添加物资表
		List<TpCgorderst> newst = new ArrayList<TpCgorderst>();
		for (int i = 0; i < newlist.size(); i++) {
			String num = newlist.get(i).getcOrdernum();
			String Mid = newlist.get(i).getcId();
			for (TpCgorderst s : st) {
				if (num.equals(s.getcSw04())) {
					s.setcMtid(Mid);
					newst.add(s);
				}
			}
		}
		int rowst = tpCgorderstMapper.addExcelst(newst);
		if (rowst == 0) {
			return builder.data(rowst).errcode(Errcode.FailParameterError).msg("导入失败").build();
		}
		// ------------------------------------------------------------------------------------
//		Long  d2 = System.currentTimeMillis();
//		float excTime=(float)(d2-d1);
//		System.out.println("结束时间："+d2);
//		System.out.println("总用时："+excTime+"毫秒");
		return builder.errcode(Errcode.Success).msg("导入成功").build();
	}
	
	
	
	
	
	
	//分配过的导入
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt2(RequestObject<EmptyTag, ExcelImp> requestObject) {
		Long  d1 = System.currentTimeMillis();
		// ------------------------------------------------------------------------------------
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		DateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		Date date = null;
		List<TpCgordermt> mt;
		mt = new ArrayList<TpCgordermt>();// 请购单
		List<TpCgorderst> st;
		st = new ArrayList<TpCgorderst>();// 物资表
		//批量添加请购单主表
		List<TpCgordermt> newlist;
		newlist = new ArrayList<TpCgordermt>();
		List<TpCgordermt> newlist2;
		newlist2 = new ArrayList<TpCgordermt>();
		//批量添加物资表
		List<TpCgorderst> newst;
		newst = new ArrayList<TpCgorderst>();
		//条件查询结果
		List<TpCgordermt> selectBycOrdernum = new ArrayList<TpCgordermt>() ;
		List<TpCgordermt> selectBycOrder = new ArrayList<TpCgordermt>() ;
		TpCgordermt tpcgmt;
		TpCgorderst tpcgst;
		for (CG_EXCEL_Request cg : requestObject.getData().getExcel()) {
			//判断是否是T类物质
			if(cg.getcTypename() != null && cg.getcTypename().equals("T类")) {
				tpcgmt = new TpCgordermt();// 请购单
				tpcgst = new TpCgorderst();// 物资表
				String str = null;
				str = cg.getcTimeapply();
				try {
					date = format.parse(str);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				Calendar c = Calendar.getInstance();
				c.setTime(date);
				//请购单list
				tpcgmt.setcTimeapply(cg.getcTimeapply().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购日期
				tpcgmt.setcOrdernum(cg.getcOrdernum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").toUpperCase());// 请购单号
//				tpcgmt.setcComname(get_data_value(cg.getcComname(), "公司名称"));// 请购项目
				if(cg.getcComname()==null) {
					tpcgmt.setcComname(null);
				}
				if(cg.getcComname()!=null) {
					tpcgmt.setcComname(cg.getcComname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购项目
				}
				if(cg.getcSw01()!=null) {
					tpcgmt.setcSw01(cg.getcSw01().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//所属项目部门
				}
//				tpcgmt.setcDeptapply(get_data_value(cg.getcDeptapply(), "部门名称"));// 请购部门
				if(cg.getcDeptapply()==null) {
					tpcgmt.setcDeptapply(null);// 请购部门
				}
				if(cg.getcDeptapply()!=null) {
					tpcgmt.setcDeptapply(cg.getcDeptapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购部门
				}
				tpcgmt.setcManapply(cg.getcManapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购人
				tpcgmt.setcMittype("1");
				tpcgmt.setcState("0");
				tpcgmt.setcDr("0");
				tpcgmt.setcCreater(cg.getcCreater());// 请购单创建人
				tpcgmt.setcCreatetime(cg.getcCreatetime());// 请购单创建时间
				
				//查询数据库中已有的请购单单号
				selectBycOrder = tpCgordermtMapper.selectBycOrdernum(tpcgmt);
				 if(selectBycOrder.size() >= 1) {
					 if(!selectBycOrdernum.contains(selectBycOrder.get(0))) {
						 selectBycOrdernum.add(selectBycOrder.get(0));				 
					 }
				 }else {
					 mt.add(tpcgmt);
				 }
				
				//物质list
				if(cg.getcNo()==null) {
					tpcgst.setcNo(null);// 存档号
				}
				if(cg.getcNo()!=null) {
					tpcgst.setcNo(cg.getcNo().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 存档号
				}
				if(cg.getcGoodsname()==null) {
					tpcgst.setcGoodsname(null);// 货物名称
				}
				if(cg.getcGoodsname()!=null) {
					tpcgst.setcGoodsname(cg.getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 货物名称
				}
				// 规格型号
				if(cg.getcSpec()==null) {
					tpcgst.setcSpec(null);
				}
				if(cg.getcSpec()!=null) {
					tpcgst.setcSpec(cg.getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				}
				//单位
				if(cg.getcUnit()==null) {
					tpcgst.setcUnit(null);
				}
				if(cg.getcUnit()!=null) {
					tpcgst.setcUnit(cg.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 单位
				}
//				if(cg.getcUnit()==null) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" +(requestObject.getData().getExcel().indexOf(cg)+2) + "-行," + "【单位】不能为空").build();
//				}
//				if(cg.getcUnit()!=null) {
//					String dw = cg.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//					if(thority != null) {
//						tpcgst.setcUnit(dw);// 单位						
//					}else {
//						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" +(requestObject.getData().getExcel().indexOf(cg)+2) + "-行," + "【单位】不正确，请中心确认").build();
//					}
//				}
				if(cg.getcNum()==null) {
					tpcgst.setcNum("");
				}else {
					tpcgst.setcNum(cg.getcNum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购数量
				}
				if (cg.getcMustneed() == null) {
					tpcgst.setcMustneed(null);// 采购类型
				}
				if (cg.getcMustneed() != null) {
					tpcgst.setcMustneed(get_data_value(cg.getcMustneed(), "急需状态").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 采购类型
					if (cg.getcMustneed().equals("A类")) {
						c.add(Calendar.DATE, 15);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("B类")) {
						c.add(Calendar.DATE, 30);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("C类")) {
						c.add(Calendar.DATE, 60);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("A")) {
						c.add(Calendar.DATE, 15);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("B")) {
						c.add(Calendar.DATE, 30);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("C")) {
						c.add(Calendar.DATE, 60);
						Date d = c.getTime();
						tpcgst.setcOrdealline(d);
					}
				}
				if(cg.getcManor()==null) {
					tpcgst.setcSw01("1");//提交状态
					tpcgst.setcAllotstate("1");//分配状态
					tpcgst.setcManor(null);
				}
				if(cg.getcManor()!=null) {
					tpcgst.setcSw01("1");//提交状态
					tpcgst.setcManor(get_data_value(cg.getcManor(),"采购员").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//采购员
//					if(get_data_value_phone(cg.getcManor(),"采购员")==null) {
//						tpcgst.setcPhone(null);//采购员联系方式
//					}
//					if(get_data_value_phone(cg.getcManor(),"采购员")!=null) {
//						tpcgst.setcPhone(get_data_value_phone(cg.getcManor(),"采购员"));//采购员联系方式
//					}
					tpcgst.setcAllotman(get_data_value_allotman(cg.getcManor(),"采购员").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//分配人
					tpcgst.setcAllotstate("1");//分配状态
				}
				if(cg.getcArrtime()==null) {
					tpcgst.setcArrtime(null);
				}
				if(cg.getcArrtime()!=null) {
					tpcgst.setcArrtime(cg.getcArrtime().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 要求到货时间
				}
				tpcgst.setcCreater(cg.getcCreater());// 物资创建人
				tpcgst.setcCreatetime(cg.getcCreatetime());// 物资创建时间
				tpcgst.setcState("0");
				tpcgst.setcDr("0");
				if(cg.getcSw02()==null) {
					tpcgst.setcSw02(null);// 用途说明
				}
				if(cg.getcSw02()!=null) {
					tpcgst.setcSw02(cg.getcSw02().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 用途说明
				}
				tpcgst.setcSw03(cg.getcTimeapply().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购日期
				tpcgst.setcSw04(cg.getcOrdernum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").toUpperCase());// 请购单号
//				tpcgst.setcSw05(get_data_value(cg.getcComname(), "公司名称"));// 请购项目
				if(cg.getcComname()==null) {
					tpcgst.setcSw05(null);// 请购项目
				}
				if(cg.getcComname()!=null) {
					tpcgst.setcSw05(cg.getcComname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购项目
				}
//				tpcgst.setcSw06(get_data_value(cg.getcDeptapply(), "部门名称"));// 请购部门
				if(cg.getcDeptapply()==null) {
					tpcgst.setcSw06(null);// 请购项目
				}
				if(cg.getcDeptapply()!=null) {
					tpcgst.setcSw06(cg.getcDeptapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购部门
				}
				tpcgst.setcSw07(cg.getcManapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购人
				if(cg.getcRemark()==null) {
					tpcgst.setcRemark(null);//备注
				}
				if(cg.getcRemark()!=null) {
					tpcgst.setcRemark(cg.getcRemark().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//备注
				}
				if(cg.getcTypename()==null) {
					tpcgst.setcTypename(null);//特批类型
				}
				if(cg.getcTypename()!=null) {
					tpcgst.setcTypename(cg.getcTypename().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//特批类型
				}
				if(cg.getcSw08()==null) {
					tpcgst.setcSw08(null);//类别明细
				}
				if(cg.getcSw08()!=null) {
					tpcgst.setcSw08(cg.getcSw08());//类别明细
				}
				if(cg.getcSw09()==null) {
					tpcgst.setcSw09(null);//建设、生产
				}
				if(cg.getcSw09()!=null) {
					tpcgst.setcSw09(cg.getcSw09().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//建设/生产
				}
				if(cg.getcSw01()!=null) {
					tpcgst.setcSw14(cg.getcSw01().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//请购项目
				}
				 
				
				//如果是T类  那么多加一个物资到这个请购单中
				/*TpCgorderst orderst = new TpCgorderst();
				orderst.setcNo(tpcgst.getcNo());// 存档号
				orderst.setcGoodsname(tpcgst.getcGoodsname());// 货物名称
				orderst.setcSpec(tpcgst.getcSpec());//规格
				orderst.setcUnit(tpcgst.getcUnit());// 单位
				orderst.setcNum(tpcgst.getcNum());// 请购数量
				orderst.setcMustneed(tpcgst.getcMustneed());// 采购类型
				orderst.setcOrdealline(tpcgst.getcOrdealline());
				orderst.setcSw01(tpcgst.getcSw01());//提交状态
				orderst.setcManor(tpcgst.getcManor());//采购员
//				orderst.setcAllotman(tpcgst.getcManor());//分配人
				orderst.setcAllotstate(tpcgst.getcAllotstate());//分配状态
				orderst.setcArrtime(tpcgst.getcArrtime());// 要求到货时间
				orderst.setcCreater(tpcgst.getcCreater());// 物资创建人
				orderst.setcCreatetime(tpcgst.getcCreatetime());// 物资创建时间
				orderst.setcState("0");
				orderst.setcSw02(tpcgst.getcSw02());// 用途说明
				orderst.setcSw03(tpcgst.getcSw03());// 请购日期
				orderst.setcSw04(tpcgst.getcSw04());// 请购单号
				orderst.setcSw05(tpcgst.getcSw05());// 请购项目
//				orderst.setcSw06(tpcgst.getcSw06);// 请购部门
				orderst.setcSw07(tpcgst.getcSw07());// 请购人
				orderst.setcRemark("取消采购-转T类");//备注
				orderst.setcTypename(null);//特批类型----------要求
				orderst.setcSw08(tpcgst.getcSw08());//类别明细
				orderst.setcSw09(tpcgst.getcSw09());//建设/生产
				st.add(orderst);
*/				st.add(tpcgst);
				
			}else if(cg.getcTypename()==null || cg.getcTypename()!="T类"){
				tpcgmt = new TpCgordermt();// 请购单
				tpcgst = new TpCgorderst();// 物资表
				String str1 = null;
				str1 = cg.getcTimeapply();
				try {
					date = format.parse(str1);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				Calendar c1 = Calendar.getInstance();
				c1.setTime(date);
				//请购单list
				tpcgmt.setcTimeapply(cg.getcTimeapply().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购日期
				tpcgmt.setcOrdernum(cg.getcOrdernum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").toUpperCase());// 请购单号
	//			tpcgmt.setcComname(get_data_value(cg.getcComname(), "公司名称"));// 请购项目
				if(cg.getcComname()==null) {
					tpcgmt.setcComname(null);
				}
				if(cg.getcComname()!=null) {
					tpcgmt.setcComname(cg.getcComname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购项目
				}
				if(cg.getcSw01()!=null) {
					tpcgmt.setcSw01(cg.getcSw01().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//所属项目部门
				}
	//			tpcgmt.setcDeptapply(get_data_value(cg.getcDeptapply(), "部门名称"));// 请购部门
				if(cg.getcDeptapply()==null) {
					tpcgmt.setcDeptapply(null);// 请购部门
				}
				if(cg.getcDeptapply()!=null) {
					tpcgmt.setcDeptapply(cg.getcDeptapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购部门
				}
				tpcgmt.setcManapply(cg.getcManapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购人
				tpcgmt.setcMittype("1");
				tpcgmt.setcState("0");
				tpcgmt.setcDr("0");
				tpcgmt.setcCreater(cg.getcCreater());// 请购单创建人
				tpcgmt.setcCreatetime(cg.getcCreatetime());// 请购单创建时间
				//查询数据库中已有的请购单单号
				selectBycOrder = tpCgordermtMapper.selectBycOrdernum(tpcgmt);
				 if(selectBycOrder.size() >= 1) {
					 if(!selectBycOrdernum.contains(selectBycOrder.get(0))) {
						 selectBycOrdernum.add(selectBycOrder.get(0));				 
					 }
					 
				 }else {
					 mt.add(tpcgmt);
				 }
				//物资list
				if(cg.getcNo()==null) {
					tpcgst.setcNo(null);// 存档号
				}
				if(cg.getcNo()!=null) {
					tpcgst.setcNo(cg.getcNo().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 存档号
				}
				if(cg.getcGoodsname()==null) {
					tpcgst.setcGoodsname(null);// 货物名称
				}
				if(cg.getcGoodsname()!=null) {
					tpcgst.setcGoodsname(cg.getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 货物名称
				}
				// 规格型号
				if(cg.getcSpec()==null) {
					tpcgst.setcSpec(null);
				}
				if(cg.getcSpec()!=null) {
					tpcgst.setcSpec(cg.getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				}
				//单位
				if(cg.getcUnit()==null) {
					tpcgst.setcUnit(null);
				}
				if(cg.getcUnit()!=null) {
					tpcgst.setcUnit(cg.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 单位
				}
//				if(cg.getcUnit()==null) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" +(requestObject.getData().getExcel().indexOf(cg)+2) + "-行," + "【单位】不能为空").build();
//				}
//				if(cg.getcUnit()!=null) {
//					String dw = cg.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//					if(thority != null) {
//						tpcgst.setcUnit(dw);// 单位						
//					}else {
//						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" +(requestObject.getData().getExcel().indexOf(cg)+2) + "-行," + "【单位】不正确，请中心确认").build();
//					}
//				}
				if(cg.getcNum()==null) {
					tpcgst.setcNum("");
				}else {
					tpcgst.setcNum(cg.getcNum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购数量
				}
				if (cg.getcMustneed() == null) {
					tpcgst.setcMustneed(null);// 采购类型
				}
				if (cg.getcMustneed() != null) {
					tpcgst.setcMustneed(get_data_value(cg.getcMustneed(), "急需状态").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 采购类型
					if (cg.getcMustneed().equals("A类")) {
						c1.add(Calendar.DATE, 15);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("B类")) {
						c1.add(Calendar.DATE, 30);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("C类")) {
						c1.add(Calendar.DATE, 60);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("A")) {
						c1.add(Calendar.DATE, 15);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("B")) {
						c1.add(Calendar.DATE, 30);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
					if (cg.getcMustneed().equals("C")) {
						c1.add(Calendar.DATE, 60);
						Date d = c1.getTime();
						tpcgst.setcOrdealline(d);
					}
				}
				if(cg.getcManor()==null) {
					tpcgst.setcSw01("1");//提交状态
					tpcgst.setcAllotstate("1");//分配状态
					tpcgst.setcManor(null);
				}
				if(cg.getcManor()!=null) {
					tpcgst.setcSw01("1");//提交状态
					tpcgst.setcManor(get_data_value(cg.getcManor(),"采购员").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//采购员
	//				if(get_data_value_phone(cg.getcManor(),"采购员")==null) {
	//					tpcgst.setcPhone(null);//采购员联系方式
	//				}
	//				if(get_data_value_phone(cg.getcManor(),"采购员")!=null) {
	//					tpcgst.setcPhone(get_data_value_phone(cg.getcManor(),"采购员"));//采购员联系方式
	//				}
					tpcgst.setcAllotman(get_data_value_allotman(cg.getcManor(),"采购员").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//分配人
					tpcgst.setcAllotstate("1");//分配状态
				}
				if(cg.getcArrtime()==null) {
					tpcgst.setcArrtime(null);
				}
				if(cg.getcArrtime()!=null) {
					tpcgst.setcArrtime(cg.getcArrtime().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 要求到货时间
				}
				tpcgst.setcCreater(cg.getcCreater());// 物资创建人
				tpcgst.setcCreatetime(cg.getcCreatetime());// 物资创建时间
				tpcgst.setcState("0");
				tpcgst.setcDr("0");
				if(cg.getcSw02()==null) {
					tpcgst.setcSw02(null);// 用途说明
				}
				if(cg.getcSw02()!=null) {
					tpcgst.setcSw02(cg.getcSw02().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 用途说明
				}
				tpcgst.setcSw03(cg.getcTimeapply().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购日期
				tpcgst.setcSw04(cg.getcOrdernum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").toUpperCase());// 请购单号
	//			tpcgst.setcSw05(get_data_value(cg.getcComname(), "公司名称"));// 请购项目
				if(cg.getcComname()==null) {
					tpcgst.setcSw05(null);// 请购项目
				}
				if(cg.getcComname()!=null) {
					tpcgst.setcSw05(cg.getcComname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购项目
				}
	//			tpcgst.setcSw06(get_data_value(cg.getcDeptapply(), "部门名称"));// 请购部门
				if(cg.getcDeptapply()==null) {
					tpcgst.setcSw06(null);// 请购项目
				}
				if(cg.getcDeptapply()!=null) {
					tpcgst.setcSw06(cg.getcDeptapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购部门
				}
				tpcgst.setcSw07(cg.getcManapply().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 请购人
				if(cg.getcRemark()==null) {
					tpcgst.setcRemark(null);//备注
				}
				if(cg.getcRemark()!=null) {
					tpcgst.setcRemark(cg.getcRemark().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//备注
				}
				if(cg.getcTypename()==null) {
					tpcgst.setcTypename(null);//特批类型
				}
				if(cg.getcTypename()!=null) {
					tpcgst.setcTypename(cg.getcTypename().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//特批类型
				}
				if(cg.getcSw08()==null) {
					tpcgst.setcSw08(null);//类别明细
				}
				if(cg.getcSw08()!=null) {
					tpcgst.setcSw08(cg.getcSw08().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//建设、生产
				}
				if(cg.getcSw09()==null) {
					tpcgst.setcSw09(null);//建设、生产
				}
				if(cg.getcSw09()!=null) {
					tpcgst.setcSw09(cg.getcSw09().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//建设/生产
				}
				if(cg.getcSw01()!=null) {
					tpcgst.setcSw14(cg.getcSw01().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//请购项目
				}
				st.add(tpcgst);
				}
			}
	
			//-------------------------------------------------------------------------------------
	//		int rowmt = tpCgordermtMapper.addExcelmt(newlist2);
	//		if (rowmt == 0) {
	//			return builder.data(rowmt).errcode(Errcode.FailParameterError).msg("导入失败").build();
	//		}
			
			//物资物质获取请购单的主键,判断请购单号是否存在
				
				//请购单 newList
				Iterator iter = mt.iterator();
				while (iter.hasNext()) {
					Object object = iter.next();
					TpCgordermt man = (TpCgordermt) object;
					if (!newlist.contains(man)) {
						newlist.add(man);
					}
				}
				for (TpCgordermt tpCgordermt : newlist) {
					RandomId ri = new RandomId();
					String id = ri.getRandomId();
//					请购单主键
					tpCgordermt.setcId(id);
					newlist2.add(tpCgordermt);
				}
				//----------------------------请购单添加---------------------------------------------------------
				if (null != newlist2 && newlist2.size() > 0) {
				    int pointsDataLimit = 100;//限制条数,【修改这里】
				    Integer size = newlist2.size();
				    if (pointsDataLimit < size) {//判断是否有必要分批
				        int part = size / pointsDataLimit;//分批数
				        System.out.println("共有 ： " + size + "条，！" + " 分为 ：" + part + "批");
				        for (int i = 0; i < part; i++) {
				        	List<TpCgordermt> listPage = newlist2.subList(0, pointsDataLimit);
				        	int rowmt = tpCgordermtMapper.addExcelmt(listPage);
				    		if (rowmt == 0) {
				    			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				    			return builder.data(rowmt).errcode(Errcode.FailParameterError).msg("导入失败").build();
				    		}
				            System.out.println("第" + (i + 1) + "次,执行处理:" + listPage);
				            newlist2.subList(0, pointsDataLimit).clear();
				        }
				        if (!newlist2.isEmpty()) {
				            System.out.println("最后一批数据,执行处理:" + newlist2);//表示最后剩下的数据
				            int rowmt = tpCgordermtMapper.addExcelmt(newlist2);
				            if (rowmt == 0) {
				            	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				    			return builder.data(rowmt).errcode(Errcode.FailParameterError).msg("导入失败").build();
				    		}
				        }
				    } else {
				        System.out.println("不需要分批,执行处理:" + newlist2);
				        int rowmt = tpCgordermtMapper.addExcelmt(newlist2);
				        if (rowmt == 0) {
				        	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			    			return builder.data(rowmt).errcode(Errcode.FailParameterError).msg("导入失败").build();
			    		}
				    }
				} else {
				    System.out.println("没有数据!!!");
				}
				//请购物质获得请购单主键
				for (int i = 0; i < newlist.size(); i++) {
					String num = newlist.get(i).getcOrdernum();//请购单号
					String Mid = newlist.get(i).getcId();//请购单主键
					for (TpCgorderst s : st) {
						if (num.equals(s.getcSw04())) {
							s.setcMtid(Mid);
							newst.add(s);
						}
					}
				}
				//有请购单的情况下
				List<TpCgordermt> selectcOrdernum  = new ArrayList<TpCgordermt>();
				Iterator iter2 = selectBycOrdernum.iterator();
				while (iter2.hasNext()) {
					Object object = iter2.next();
					TpCgordermt men = (TpCgordermt) object;
					if (!selectcOrdernum.contains(men)) {
						selectcOrdernum.add(men);
					}
				}
				for (int i = 0; i <= selectcOrdernum.size()-1; i++) {
					String num = selectcOrdernum.get(i).getcOrdernum();//请购单号
					String Mid = selectcOrdernum.get(i).getcId();//请购单主键
					
					for (TpCgorderst s : st) {
						if (num.equals(s.getcSw04())) {
							s.setcMtid(Mid);
							newst.add(s);
						}
					}
				}
				if(selectcOrdernum.size() > 0 ) {
					tpCgordermtMapper.updateBycOrdernum(selectcOrdernum);
					
				}
				
			//---------------------------------物资添加----------------------------------------------------
			if (null != newst && newst.size() > 0) {
			    int pointsDataLimit = 100;//限制条数,【修改这里】
			    Integer size = newst.size();
			    if (pointsDataLimit < size) {//判断是否有必要分批
			        int part = size / pointsDataLimit;//分批数
			        System.out.println("共有 ： " + size + "条，！" + " 分为 ：" + part + "批");
			        for (int i = 0; i < part; i++) {
			        	List<TpCgorderst> listPage = newst.subList(0, pointsDataLimit);
			        	int rowst = tpCgorderstMapper.addExcelst(listPage);
			    		if (rowst == 0) {
			    			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			    			return builder.data(rowst).errcode(Errcode.FailParameterError).msg("导入失败").build();
			    		}
			            System.out.println("第" + (i + 1) + "次,执行处理:" + listPage);
			            newst.subList(0, pointsDataLimit).clear();
			        }
			        if (!newst.isEmpty()) {
			            System.out.println("最后一批数据,执行处理:" + newst);//表示最后剩下的数据
			            int rowst = tpCgorderstMapper.addExcelst(newst);
			            if (rowst == 0) {
			            	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			    			return builder.data(rowst).errcode(Errcode.FailParameterError).msg("导入失败").build();
			    		}
			        }
			    } else {
			        System.out.println("不需要分批,执行处理:" + newst);
			        int rowst = tpCgorderstMapper.addExcelst(newst);
			        if (rowst == 0) {
			        	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
		    			return builder.data(rowst).errcode(Errcode.FailParameterError).msg("导入失败").build();
		    		}
			    }
			} else {
			    System.out.println("没有数据!!!");
			}
			
			//-------------------------------------------------------------------------------------
	//		int rowst = tpCgorderstMapper.addExcelst(newst);
	//		if (rowst == 0) {
	//			return builder.data(rowst).errcode(Errcode.FailParameterError).msg("导入失败").build();
	//		}
			// ------------------------------------------------------------------------------------
			System.out.println("开始时间："+d1);
			Long  d2 = System.currentTimeMillis();
			float excTime=(float)(d2-d1);
			int i = (int)(excTime);
			System.out.println("结束时间："+d2);
			System.out.println("总用时："+i+"毫秒");
			return builder.data(i).errcode(Errcode.Success).msg("导入成功").build();
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateshenhe(RequestObject<EmptyTag, OrderMtListRequest> requestObject) {
		// TODO 审核
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgorderst orst = new TpCgorderst();
		TpCgordermt mt = requestObject.getData().getTpCgordermt();
		int row2 = 0;
		int row = 0;
		int row1 = 0;
		for (TpCgordermt tpmt : requestObject.getData().getCgQ001M1s13()) {
			if (tpmt.getcAudittype() == null) {
				tpmt.setcAudittype(null);
			}

			if (mt.getcAudittype().equals("2")) {
				tpmt.setcAudittime(new Date());
				tpmt.setcAuditman(tpmt.getcAuditman());
			}
			if (mt.getcAudittype().equals("3")) {// 未通过
				tpmt.setcMittype("0");
				tpmt.setcState("0");
				tpmt.setcAudittype("0");
				tpmt.setcId(tpmt.getcId());
			}
		}
		if (mt.getcAudittype().equals("2")) {
			row = tpCgordermtMapper.updateForshenhe(requestObject.getData().getCgQ001M1s13(),
					requestObject.getData().getTpCgordermt());
			if (row == 0) {
				builder.errcode(Errcode.FailParameterError).msg("审核失败").build();
			}
		}

		if (mt.getcAudittype().equals("3")) {// 未通过
			row1 = tpCgordermtMapper.updateForshenhe_not(requestObject.getData().getCgQ001M1s13(),
					requestObject.getData().getTpCgordermt());
			if (row1 == 0) {
				builder.errcode(Errcode.FailParameterError).msg("审核失败").build();
			}

			for (TpCgordermt tpmt : requestObject.getData().getCgQ001M1s13()) {
				orst.setcMtid(tpmt.getcId());
				List<TpCgorderst> st = tpCgorderstMapper.selectS1S2(tpmt);
				for (TpCgorderst tpCgorderst : st) {
					tpCgorderst.setcSw01("0");
					tpCgorderst.setcAllotstate("0");
					tpCgorderst.setcManor("");
					tpCgorderst.setcPhone("");
					tpCgorderst.setcState("0");
					tpCgorderst.setcPlanor("0");
					tpCgorderst.setcId(tpCgorderst.getcId());
					row2 = tpCgorderstMapper.updateByPrimaryKey(tpCgorderst);
					if (row2 == 0) {
						builder.errcode(Errcode.FailParameterError).msg("审核失败").build();
					}
				}

			}
			if (row1 == 0) {
				builder.errcode(Errcode.FailParameterError).msg("审核失败").build();
			}
			// 将子表有关信息全部修改为未提交
		}
		return builder.errcode(Errcode.Success).msg("审核成功").build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectForOrdermt(
			RequestObject<EmptyTag, MtRequest> requestObject) {
		// TODO
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgordermt> mt = tpCgordermtMapper.selectForOrdermt(requestObject.getData());
		if (mt == null) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(mt).errcode(Errcode.Success).build();
	}

	private String get_data_value(String csubitemdes, String citemdes) {
		List<TpCgordermt> mt = tpCgordermtMapper.get_data_value(csubitemdes, citemdes);
		if (mt.size() > 0) {
			return mt.get(0).getcComname();
		}
		return "Err";
	}
//	private String get_data_value_phone(String csubitemdes, String citemdes) {
//		List<TpCgordermt> mt = tpCgordermtMapper.get_data_value_phone(csubitemdes, citemdes);
//		if (mt.size() > 0) {
//			return mt.get(0).getcComname();
//		}
//		return "Err";
//	}
	private String get_data_value_allotman(String csubitemdes, String citemdes) {
		List<TpCgordermt> mt = tpCgordermtMapper.get_data_value_allotman(csubitemdes, citemdes);
		if (mt.size() > 0) {
			return mt.get(0).getcComname();
		}
		return "Err";
	}

	public String[][] outExcelmt(OutExcel requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		
		//查询出需要的数据
		List<OutExcelResponse> selectS1S2 = new ArrayList<OutExcelResponse>();
		for (TpCgcontractst element : requestObject.getTpCgcontractst()) {
			OutExcelResponse s1s2 = tpCgordermtMapper.selectS1S2(element.getcId());
			selectS1S2.add(s1s2);
		}
//		//获取文件名称
//		OutExcelFile outFile = new OutExcelFile();
//		for (OutExcelFile outExcelResponse : requestObject.getData().getOutExcelFile()) {
//			outFile.setFileName(outExcelResponse.getFileName());
//		}
//		String sheetName = outFile.getFileName();
//		String titleName = outFile.getFileName();
//		String fileName = outFile.getFileName();
//		
		//物资导出功能
		String[] columnName = { "存档号", "请购日期", "请购单号", "物资名称", "规格型号", "单位", "请购数量", "请购人", "用途说明", "请购部门", "需求时间", "类别明细","采购部门","采购员",
				"合同签订公司","供应商","合同号","预计到货时间"};
//		int columnNumber = columnName.length;
//		int[] columnWidth = new int[columnName.length];
//		for (int i = 0; i < columnName.length; i++) {
//			columnWidth[i] = 20;
//		}
		//赋值给dataList
//		String[][] dataList = new String[selectS1S2.size()][columnName.length];
//		for (int i = 0; i < selectS1S2.size(); i++) {
//			OutExcelResponse out = selectS1S2.get(i);		
//				dataList[i][0] = getValueChange(out.getcComname(),"公司名称"); //公司名称
//				dataList[i][1] = out.getcOrdernum(); //单据编号
//				dataList[i][2] = getValueChange(out.getcDeptapply(),"部门名称"); //申请部门
//				dataList[i][3] = out.getcManapply(); //申请人
//				dataList[i][4] = out.getcTimetake(); //收单日期
//				dataList[i][5] = out.getcGoodsname();//物资名称 
//				dataList[i][6] = getValueChange(out.getcTypename(),"物资类型"); //物资类型
//				dataList[i][7] = getValueChange(out.getcMustneed(),"急需状态"); //是否急需
//				dataList[i][8] = out.getcSpec();//规格型号 
//				dataList[i][9] = out.getcUnit(); //单位
//				dataList[i][10] = out.getcNum(); //申报量
//				dataList[i][11] = out.getcArrtime();//要求到货时间 
//				dataList[i][12] = getValueChange(out.getcState(),"采购状态"); //采购状态
//				dataList[i][13] = out.getcSw02(); //用途说明
//				dataList[i][14] = out.getcSw03(); //申请人联系方式 
//				dataList[i][15] = out.getcOrdealline();//采购期限
//				dataList[i][16] = getValueChange(out.getcDeptor(),"采购部门"); //采购部门
//				dataList[i][17] = getValueChange(out.getcManor(),"采购员"); //采购员
//				dataList[i][18] = out.getcPhone(); //采购员联系方式
//				dataList[i][19] = out.getcAllotman();//分配人 
//				dataList[i][20] = getValueChange(out.getcPlanor(),"采购进度"); //采购进度
//				dataList[i][21] = out.getcPlantime(); //采购进度时间
//			
//		}
		
//		OutExcelUtil outUtil = new OutExcelUtil();
//		boolean exportNoResponse = outUtil.ExportNoResponse(sheetName, titleName, fileName, columnNumber, columnWidth, columnName, dataList);
//		boolean exportWithResponse;
//		try {
//			outUtil.ExportWithResponse(sheetName, titleName, fileName, columnNumber, columnWidth, columnName, dataList, response);
//			if(exportWithResponse == true) {
//				return builder.errcode(Errcode.Success).msg("导出" + fileName + "成功！").build();
//			}else {
//				return builder.errcode(Errcode.FailParameterError).msg("导出" + fileName + "失败！！").build();
//			}
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		//return dataList;	
		return null;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, List<OutExcelResponse>> outExcelmtInfo(RequestObject<EmptyTag, OutExcel> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//查询出需要的数据
		List<OutExcelResponse> selectS1S2 = new ArrayList<OutExcelResponse>();
		int s = requestObject.getData().getTpCgcontractst().size();
		List<TpCgcontractst> list = requestObject.getData().getTpCgcontractst();
		for (int i = 0; i < s; i++) {
			//请购单主表
			TpCgordermt ormt = tpCgordermtMapper.selectByPrimaryKey(list.get(i).getcOrid());
			//请购单物资表
			TpCgorderst orst = tpCgorderstMapper.selectByPrimaryKey(list.get(i).getcSw02());
			//合同主表
			TpCgcontractmt contmt = tpCgcontractmtMapper.selectByPrimaryKey(list.get(i).getcMtid());
			//合同物资表
			TpCgcontractst contst = tpCgcontractstMapper.selectByPrimaryKey(list.get(i).getcId());
			OutExcelResponse outExcelResponse  = new OutExcelResponse();
			outExcelResponse.setcNo(orst.getcNo());//存档号
			outExcelResponse.setcTimeapply(ormt.getcTimeapply());//请购日期
			outExcelResponse.setcOrdernum(ormt.getcOrdernum());//请购单号
			outExcelResponse.setcGoodsname(orst.getcGoodsname());//物资名称
			outExcelResponse.setcSpec(orst.getcSpec());//规格型号
			outExcelResponse.setcUnit(orst.getcUnit());//单位
			outExcelResponse.setcNum(orst.getcNum());//请购数量
			outExcelResponse.setcManapply(ormt.getcManapply());//请购人
			outExcelResponse.setcSw02(orst.getcSw02());//用途说明
			outExcelResponse.setcDeptapply(ormt.getcDeptapply());//请购部门
			outExcelResponse.setcArrtime(orst.getcArrtime());//需求时间
			outExcelResponse.setcTypename(null);
			outExcelResponse.setcDeptor(orst.getcDeptor());//采购部门
			outExcelResponse.setcManor(orst.getcManor());//采购员
			outExcelResponse.setcCludecom(contmt.getcCludecom());//合同签订公司
			outExcelResponse.setcSupplier(contmt.getcSupplier());//供应商
			outExcelResponse.setcConnum(contst.getcConnum());//合同号
			outExcelResponse.setcDr(contmt.getcDr());//预计到货时间
			selectS1S2.add(outExcelResponse);
		}
		return builder.errcode(Errcode.Success).data(selectS1S2).build();
	}
	
	//请购单导出
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Transactional
	public ResponseObject<EmptyTag, List<OutExcelResponse>> OUTorder(
			RequestObject<EmptyTag, OrderMtrequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<OutExcelResponse> selectS1S2 = new ArrayList<OutExcelResponse>();//为前端传值准备的实例化集合
		for (TpCgordermt iterable_element : requestObject.getData().getList()) {
			//请购单数据
			TpCgordermt ormt = tpCgordermtMapper.selectByPrimaryKey(iterable_element.getcId());
			//根据请购单 查询物资信息
			List<TpCgorderst> stList = tpCgorderstMapper.selectS1S2(ormt);
			//根据物资信息查询合同子表数据
			for (TpCgorderst orst : stList) {
				//根据物资查询合同物资信息 
				List<TpCgcontractst> contst = tpCgcontractstMapper.selectBySw02(orst.getcId());
				if(contst==null) {
					OutExcelResponse outExcelResponse0  = new OutExcelResponse();
					outExcelResponse0.setcNo(orst.getcNo());//存档号
					outExcelResponse0.setcTimeapply(ormt.getcTimeapply());//请购日期
					outExcelResponse0.setcOrdernum(ormt.getcOrdernum());//请购单号
					outExcelResponse0.setcGoodsname(orst.getcGoodsname());//物资名称
					outExcelResponse0.setcSpec(orst.getcSpec());//规格型号
					outExcelResponse0.setcUnit(orst.getcUnit());//单位
					outExcelResponse0.setcNum(orst.getcNum());//请购数量
					outExcelResponse0.setcManapply(ormt.getcManapply());//请购人
					outExcelResponse0.setcSw02(orst.getcSw02());//用途说明
					outExcelResponse0.setcDeptapply(ormt.getcDeptapply());//请购部门
					outExcelResponse0.setcArrtime(orst.getcArrtime());//需求时间
					outExcelResponse0.setcTypename(null);
					outExcelResponse0.setcDeptor(orst.getcDeptor());//采购部门
					outExcelResponse0.setcManor(orst.getcManor());//采购员
					outExcelResponse0.setcCludecom(null);//合同签订公司
					outExcelResponse0.setcSupplier(null);//供应商
					outExcelResponse0.setcConnum(null);//合同号
					outExcelResponse0.setcDr(null);//预计到货时间
					outExcelResponse0.setcSw08(null);//报关名称
					outExcelResponse0.setbSpec(null);//报关规格
					outExcelResponse0.setbNum(null);//报关数量
					outExcelResponse0.setbUnit(null);//报关单位
					outExcelResponse0.setcCludetime(null);//签订时间
					outExcelResponse0.setcGettime(null);//最后到货时间
					outExcelResponse0.setcSw12(null);//提前或者延迟天数
					selectS1S2.add(outExcelResponse0);
				}else {
					//根据合同子表中主表主键查询合同信息
					TpCgcontractmt contmt = tpCgcontractmtMapper.selectByPrimaryKey(contst.get(0).getcMtid());
					OutExcelResponse outExcelResponse  = new OutExcelResponse();
					outExcelResponse.setcNo(orst.getcNo());//存档号
					outExcelResponse.setcTimeapply(ormt.getcTimeapply());//请购日期
					outExcelResponse.setcOrdernum(ormt.getcOrdernum());//请购单号
					outExcelResponse.setcGoodsname(orst.getcGoodsname());//物资名称
					outExcelResponse.setcSpec(orst.getcSpec());//规格型号
					outExcelResponse.setcUnit(orst.getcUnit());//单位
					outExcelResponse.setcNum(orst.getcNum());//请购数量
					outExcelResponse.setcManapply(ormt.getcManapply());//请购人
					outExcelResponse.setcSw02(orst.getcSw02());//用途说明
					outExcelResponse.setcDeptapply(ormt.getcDeptapply());//请购部门
					outExcelResponse.setcArrtime(orst.getcArrtime());//需求时间
					outExcelResponse.setcTypename(orst.getcTypename());//特批类型
					outExcelResponse.setcDeptor(orst.getcDeptor());//采购部门
					outExcelResponse.setcManor(orst.getcManor());//采购员
					outExcelResponse.setcCludecom(contmt.getcCludecom());//合同签订公司
					outExcelResponse.setcSupplier(contmt.getcSupplier());//供应商
					outExcelResponse.setcConnum(contst.get(0).getcConnum());//合同号
					outExcelResponse.setcSw08(contst.get(0).getcSw08());//报关名称
					outExcelResponse.setbSpec(contst.get(0).getcSpec());//报关规格
					outExcelResponse.setbNum(contst.get(0).getcGoodsnum());//报关数量
					outExcelResponse.setbUnit(contst.get(0).getcUnit());//报关单位
					outExcelResponse.setcCludetime(contmt.getcCludetime());//签订时间
					outExcelResponse.setcGettime(contmt.getcGettime());//最后到货时间
					outExcelResponse.setcSw12(contmt.getcSw12());//提前或者延迟天数
					outExcelResponse.setcDr(contmt.getcDr());//预计到货时间
					selectS1S2.add(outExcelResponse);
				}
			}
		}
		return builder.errcode(Errcode.Success).data(selectS1S2).build();
	}
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectORDERNUM() {
		// TODO 现有请购单号
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgordermt> tpCgordermt = tpCgordermtMapper.selectORDERNUM();
		if(tpCgordermt==null) {
			return builder.data(null).errcode(Errcode.Success).build();
		}
		return builder.data(tpCgordermt).errcode(Errcode.Success).build();
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_2(
			RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject) {
		// TODO 采购员页面查看的功能
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgordermt> list = requestObject.getData().getCgQ001M1s13();
		List<TpCgordermt> mtList = tpCgordermtMapper.selectQ001_2(list.get(0));
		if(mtList.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
		}
		return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_4(
			RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject) {
		// TODO 采购助理查询页面
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//根据采购助理名称查询--现有三个采购助理（王达超有两个、陈志强有一个）
		String name = requestObject.getData().getCgQ001M1s13().get(0).getcManor();//采购助理的名字
		Date startTime = requestObject.getData().getCgQ001M1s13().get(0).getStartTime();
		Date endTime = requestObject.getData().getCgQ001M1s13().get(0).getEndTime();
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
			List<TpCgordermt> mtList = tpCgordermtMapper.selectCGZL(ss,startTime,endTime);
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
			List<TpCgordermt> mtList = tpCgordermtMapper.selectCGZL(ss,startTime,endTime);
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
			List<TpCgordermt> mtList = tpCgordermtMapper.selectCGZL(ss,startTime,endTime);
			if(mtList.size()==0) {
				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
			}
			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
		}
		return null;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_5(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
//		String[] cmanor = requestObject.getData().getCgQ001M1s13().get(0).getcManor();
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		//根据请购单查询物资
		TpCgordermt2 tpcgordermt = requestObject.getData().getCgQ001M1s13().get(0); 	
		List<TpCgorderst> list = new ArrayList<TpCgorderst>();
//		if("SYR".equals(cmanor)) {
//			list = tpCgorderstMapper.selectS1S2(tpcgordermt);
//		}else {
		list = tpCgorderstMapper.selectS1S32(tpcgordermt);
//		}
		//通过物资查询合同物资 
//		List<TpCgcontractst> contst = new ArrayList<TpCgcontractst>();
//		List<TpCgorderst> contst = new ArrayList<TpCgorderst>();
		//把拆分出来的数据放到一个新集合里
//		for(int i = list.size()-1; i >= 0; i--) {
//			if(list.get(i).getcNum().indexOf(".") != -1) {
//				contst.add(list.get(i));
//			}	
//		}
		//如果已拆分集合里面有数据，就把规格型号一样的放到一起
//		if(contst.size()>0) {
//			for(TpCgorderst rst : contst) {
//				for(int i = 0; i < list.size(); i++) {
//					//判断规格型号是否一致
//					if(rst.getcSpec() == null || rst.getcSpec() == "") {
//						if(rst.getcGoodsname().equals(list.get(i).getcGoodsname()) ) {
//							list.remove(list.indexOf(rst));
//							list.add(i, rst);
//							break;
//						}
//					}else {
//						if(rst.getcSpec().equals(list.get(i).getcSpec()) && rst.getcGoodsname().equals(list.get(i).getcGoodsname()) ) {
//							list.remove(list.indexOf(rst));
//							list.add(i, rst);
//							break;
//						}
//					}
//				}
//			}
//		}
		for (TpCgorderst tpCgorderst : list) {
			List<TpCgcontractst> tpconst = tpCgcontractstMapper.selectBySw02(tpCgorderst.getcId());
			if(tpconst.size()>1) {
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				List<TpCgcontractst> tpconst2 = tpCgcontractstMapper.selectBySw02_For4(tpCgorderst.getcId());
				if(tpconst2.size()!=0) {
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst2.get(0).getcMtid());
					if(tpconmt!=null) {
						qmq.setcSw10(tpconmt.getcSw10());//采购员
						qmq.setcSupplier(tpconmt.getcSupplier());//供应商
						qmq.setcCludetime(tpconmt.getcCludetime());//签订时间
						qmq.setcDr(tpconmt.getcDr());//预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());//最后到货时间
						qmq.setcSw12(tpconmt.getcSw12());//提前或者延迟天数
					}
				}
				//请购单数据
				if(tpCgorderst!=null) {
					qmq.setcState(tpCgorderst.getcState());//采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());//采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());//物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());//规格型号
					qmq.setcNum(tpCgorderst.getcNum());//请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());//单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());//要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());//采购员
					qmq.setcPhone(tpCgorderst.getcPhone());//联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());//备注
					qmq.setcId(tpCgorderst.getcId());//物资单号
					qmq.setcOrid(tpCgorderst.getcSw04());//请购单号
					qmq.setcTypename(tpCgorderst.getcTypename());//特批类型
					qmq.setcSw03(tpCgorderst.getcSw03());//请购日期
					qmq.setcSw02(tpCgorderst.getcSw02());//用途说明
					qmq.setcSw05(tpCgorderst.getcSw05());//请购项目
					qmq.setcCreatetime(tpCgorderst.getcCreatetime());//创建时间
					qmq.setcSw08(tpCgorderst.getcSw08());//类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());//建设生产
					qmq.setcManapply(tpCgorderst.getcManapply());//请购人
					qmq.setcSw06(tpCgorderst.getcSw06());//请购部门
				}
				//合同物资数据
				if(tpconst2.size()!=0) {
					qmq.setXJgoodsname("该请购单物资被拆分成了"+tpconst.size()+"条物资进行报关");//警告信息
//					qmq.setXJgoodsname(tpconst2.get(0).getcSw08());//报关名称
//					qmq.setXJspec(tpconst2.get(0).getcSpec());//规格
//					qmq.setXJnum(tpconst2.get(0).getcGoodsnum());//数量
//					qmq.setXjunit(tpconst2.get(0).getcUnit());//单位
//					qmq.setcConnum(tpconst2.get(0).getcConnum());//合同号
				}
				request.add(qmq);
			}
			if(tpconst.size()==1){
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				if(tpconst!=null) {
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
					if(tpconmt!=null) {
						qmq.setcSw10(tpconmt.getcSw10());//采购员
						qmq.setcSupplier(tpconmt.getcSupplier());//供应商
						qmq.setcCludetime(tpconmt.getcCludetime());//签订时间
						qmq.setcDr(tpconmt.getcDr());//预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());//最后到货时间
						qmq.setcSw12(tpconmt.getcSw12());//提前或者延迟天数
					}
				}
				//请购单数据
				if(tpCgorderst!=null) {
					qmq.setcState(tpCgorderst.getcState());//采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());//采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());//物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());//规格型号
					qmq.setcNum(tpCgorderst.getcNum());//请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());//单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());//要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());//采购员
					qmq.setcPhone(tpCgorderst.getcPhone());//联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());//备注
					qmq.setcId(tpCgorderst.getcId());//物资单号
					qmq.setcOrid(tpCgorderst.getcSw04());//请购单号
					qmq.setcTypename(tpCgorderst.getcTypename());//特批类型
					qmq.setcSw03(tpCgorderst.getcSw03());//请购日期
					qmq.setcSw02(tpCgorderst.getcSw02());//用途说明
					qmq.setcSw05(tpCgorderst.getcSw05());//请购项目
					qmq.setcCreatetime(tpCgorderst.getcCreatetime());//创建时间
					qmq.setcSw08(tpCgorderst.getcSw08());//类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());//建设生产
					qmq.setcManapply(tpCgorderst.getcManapply());//请购人
					qmq.setcSw06(tpCgorderst.getcSw06());//请购部门
				}
				//合同物资数据
				if(tpconst!=null) {
					qmq.setXJgoodsname(tpconst.get(0).getcSw08());//报关名称
					qmq.setXJspec(tpconst.get(0).getcSpec());//规格
					qmq.setXJnum(tpconst.get(0).getcGoodsnum());//数量
					qmq.setXjunit(tpconst.get(0).getcUnit());//单位
					qmq.setcConnum(tpconst.get(0).getcConnum());//合同号
				}
				request.add(qmq);
			}
			if(tpconst.size()==0){
				Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
				/*if(tpconst!=null) {
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
					if(tpconmt!=null) {
						qmq.setcSw10(tpconmt.getcSw10());//采购员
						qmq.setcSupplier(tpconmt.getcSupplier());//供应商
						qmq.setcCludetime(tpconmt.getcCludetime());//签订时间
						qmq.setcDr(tpconmt.getcDr());//预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());//最后到货时间
						qmq.setcSw12(tpconmt.getcSw10());//提前或者延迟天数
					}
				}*/
				//请购单数据
				if(tpCgorderst!=null) {
					qmq.setcState(tpCgorderst.getcState());//采购状态
					qmq.setcMustneed(tpCgorderst.getcMustneed());//采购类型
					qmq.setcGoodsname(tpCgorderst.getcGoodsname());//物资名称
					qmq.setcSpec(tpCgorderst.getcSpec());//规格型号
					qmq.setcNum(tpCgorderst.getcNum());//请购数量
					qmq.setcUnit(tpCgorderst.getcUnit());//单位
					qmq.setcArrtime(tpCgorderst.getcArrtime());//要求到货时间
					qmq.setcManor(tpCgorderst.getcManor());//采购员
					qmq.setcPhone(tpCgorderst.getcPhone());//联系方式
					qmq.setcRemark(tpCgorderst.getcRemark());//备注
					qmq.setcId(tpCgorderst.getcId());//物资单号
					qmq.setcOrid(tpCgorderst.getcSw04());//请购单号
					qmq.setcTypename(tpCgorderst.getcTypename());//特批类型
					qmq.setcSw03(tpCgorderst.getcSw03());//请购日期
					qmq.setcSw02(tpCgorderst.getcSw02());//用途说明
					qmq.setcSw05(tpCgorderst.getcSw05());//请购项目
					qmq.setcCreatetime(tpCgorderst.getcCreatetime());//创建时间
					qmq.setcSw08(tpCgorderst.getcSw08());//类别明细
					qmq.setcSw09(tpCgorderst.getcSw09());//建设生产
					qmq.setcManapply(tpCgorderst.getcManapply());//请购人
					qmq.setcSw06(tpCgorderst.getcSw06());//请购部门
				}
				//合同物资数据
				/*if(tpconst.size()!=0) {
					qmq.setXJgoodsname(tpconst.get(0).getcSw08());//报关名称
					qmq.setXJspec(tpconst.get(0).getcSpec());//规格
					qmq.setXJnum(tpconst.get(0).getcGoodsnum());//数量
					qmq.setXjunit(tpconst.get(0).getcUnit());//单位
					qmq.setcConnum(tpconst.get(0).getcConnum());//合同号
				}*/
				request.add(qmq);
			}
		}
		//再查询合同信息
		if(request.size()==0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}	
		
		return builder.data(request).errcode(Errcode.Success).build();
		// TODO 主任查询功能
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		String name = requestObject.getData().getCgQ001M1s13().get(0).getcManor();//主任的名字
//		Date startTime = requestObject.getData().getCgQ001M1s13().get(0).getStartTime();
//		Date endTime = requestObject.getData().getCgQ001M1s13().get(0).getEndTime();
//		if(name==null) {
//			return builder.errcode(Errcode.FailParameterError).msg("请选择采购员进行查询").build();
//		}
//		TpCgauthority auth = tpCgauthorityMapper.selectZHUREN(name);
//		List<TpCgauthority> list = tpCgauthorityMapper.selectZRXIASHU(auth.getcSubitemdes());
//		if(list.size()!=0) {
//			String s = "'";
//			for (TpCgauthority tpCgauthority : list) {
//				s += tpCgauthority.getcSubitemid() + "','";
//			}
//			String ss = s.substring(0, s.length()-2);
//			List<TpCgordermt> mtList = tpCgordermtMapper.selectCGZL(ss,startTime,endTime);
//			if(mtList.size()==0) {
//				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
//			}
//			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
//		}else {
//			List<TpCgordermt> mtList = tpCgordermtMapper.selectCGZL("'"+auth.getcSubitemid()+"'",startTime,endTime);
//			if(mtList.size()==0) {
//				return builder.errcode(Errcode.SuccessShowInfoMsg).msg("查询成功：无数据！").build();
//			}
//			return builder.data(mtList).errcode(Errcode.Success).msg("查询成功").build();
//		}
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_6(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
//		String[] cmanor = requestObject.getData().getCgQ001M1s13().get(0).getcManor();
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		//根据请购单查询物资
		TpCgordermt2 tpcgordermt = requestObject.getData().getCgQ001M1s13().get(0); 	
		List<TpCgorderst> list = new ArrayList<TpCgorderst>();
		list = tpCgorderstMapper.selectS1S33(tpcgordermt);
		//通过物资查询合同物资 
		for (TpCgorderst tpCgorderst : list) {
			
			Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
			//请购单数据
			if(tpCgorderst!=null) {
				qmq.setcState(tpCgorderst.getcState());//采购状态
				qmq.setcMustneed(tpCgorderst.getcMustneed());//采购类型
				qmq.setcGoodsname(tpCgorderst.getcGoodsname());//物资名称
				qmq.setcSpec(tpCgorderst.getcSpec());//规格型号
				qmq.setcNum(tpCgorderst.getcNum());//请购数量
				qmq.setcUnit(tpCgorderst.getcUnit());//单位
				qmq.setcArrtime(tpCgorderst.getcArrtime());//要求到货时间
				qmq.setcManor(tpCgorderst.getcManor());//采购员
				qmq.setcPhone(tpCgorderst.getcPhone());//联系方式
				qmq.setcRemark(tpCgorderst.getcRemark());//备注
				qmq.setcId(tpCgorderst.getcId());//物资单号
				qmq.setcOrid(tpCgorderst.getcSw04());//请购单号
				qmq.setcTypename(tpCgorderst.getcTypename());//特批类型
				qmq.setcSw03(tpCgorderst.getcSw03());//请购日期
				qmq.setcSw02(tpCgorderst.getcSw02());//用途说明
				qmq.setcSw05(tpCgorderst.getcSw05());//请购项目
				qmq.setcCreatetime(tpCgorderst.getcCreatetime());//创建时间
				qmq.setcSw08(tpCgorderst.getcSw08());//类别明细
				qmq.setcSw09(tpCgorderst.getcSw09());//建设生产
				qmq.setcManapply(tpCgorderst.getcManapply());//请购人
				qmq.setcSw06(tpCgorderst.getcSw06());//请购部门
			}
			//物资单号查询合同物资信息
			List<TpCgcontractst> tpconst = tpCgcontractstMapper.selectBySw02(tpCgorderst.getcId());		
			if(tpconst.size()==1){	
				//合同物资数据
				if(tpconst!=null) {
					qmq.setXJgoodsname(tpconst.get(0).getcSw08());//报关名称
					qmq.setXJspec(tpconst.get(0).getcSpec());//规格
					qmq.setXJnum(tpconst.get(0).getcGoodsnum());//数量
					qmq.setXjunit(tpconst.get(0).getcUnit());//单位
					qmq.setcConnum(tpconst.get(0).getcConnum());//合同号
					TpCgcontractmt tpconmt = tpCgcontractmtMapper.selectByPrimaryKey(tpconst.get(0).getcMtid());
					if(tpconmt!=null) {
						qmq.setcSw10(tpconmt.getcSw10());//采购员
						qmq.setcSupplier(tpconmt.getcSupplier());//供应商
						qmq.setcCludetime(tpconmt.getcCludetime());//签订时间
						qmq.setcDr(tpconmt.getcDr());//预计到货时间
						qmq.setcGettime(tpconmt.getcGettime());//最后到货时间
						qmq.setcSw12(tpconmt.getcSw12());//提前或者延迟天数
					}
				}
			}
			request.add(qmq);
			
		}
		//再查询合同信息
		if(request.size()==0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}	
		
		return builder.data(request).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_7(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		//根据请购单查询物资
		TpCgordermt3 tpcgordermt = requestObject.getData().getCgQ001M1s14().get(0);
		Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
		System.out.println(tpcgordermt.getSpec());
		 List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_7(tpcgordermt);
		if(selectQ001_7.size()< 0) {
			return builder.msg("无相关数据！！").errcode(Errcode.FailParameterError).build();
		}
		for (Q001M1s1Qrequest q001m1s1Qrequest : selectQ001_7) {
			//判断已转合同的物资，并没有对应的合同号（合同中有合并现象）
			if("1".equals(q001m1s1Qrequest.getcState()) && q001m1s1Qrequest.getcConnum() == null) {
				QrequestEntity selectQrequest = tpCgcontractstMapper.selectQrequest(q001m1s1Qrequest);
				if(selectQrequest!= null) {
				q001m1s1Qrequest.setXJgoodsname(selectQrequest.getcSw08()==null?"":selectQrequest.getcSw08());
				q001m1s1Qrequest.setXJspec(selectQrequest.getcSpec()==null?"":selectQrequest.getcSpec());
				q001m1s1Qrequest.setXJnum(selectQrequest.getcGoodsnum()==null?"":selectQrequest.getcGoodsnum());
				q001m1s1Qrequest.setXjunit(selectQrequest.getcUnit()==null?"":selectQrequest.getcUnit());
				q001m1s1Qrequest.setcConnum(selectQrequest.getcConnum()==null?"":selectQrequest.getcConnum());
				q001m1s1Qrequest.setcSw10(selectQrequest.getcSw10()==null?"":selectQrequest.getcSw10());
				q001m1s1Qrequest.setcSupplier(selectQrequest.getcSupplier()==null?"":selectQrequest.getcSupplier());
				q001m1s1Qrequest.setcCludetime(selectQrequest.getcCludetime());
				q001m1s1Qrequest.setcDr(selectQrequest.getcDr());
				q001m1s1Qrequest.setcSw12(selectQrequest.getcSw12()==null?"":selectQrequest.getcSw12());
				q001m1s1Qrequest.setcGroudtotalnum(selectQrequest.getcGroudtotalnum()==null?"":selectQrequest.getcGroudtotalnum());
				q001m1s1Qrequest.setcCknum(selectQrequest.getcCknum()==null?"":selectQrequest.getcCknum());
				q001m1s1Qrequest.setcShipno(selectQrequest.getcShipno()==null?"":selectQrequest.getcShipno());
				}
			}
		}
		return builder.data(selectQ001_7).errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_8(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//查询时增加显示了（报关名称、规格、数量、单位、合同号、采购员、供应商、签订时间、预计到货时间、实际到货时间、提前或延迟）
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		//根据请购单查询物资
		TpCgordermt2 tpcgordermt = requestObject.getData().getCgQ001M1s13().get(0);
		Q001M1s1Qrequest qmq = new Q001M1s1Qrequest();
		System.out.println(tpcgordermt.getSpec());
		 List<Q001M1s1Qrequest> selectQ001_8 = tpCgorderstMapper.selectQ001_8(tpcgordermt);
		if(selectQ001_8.size()< 0) {
			return builder.msg("无相关数据！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(selectQ001_8).errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_71(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String year = requestObject.getData().getMtRequest().getYear();
		String month = requestObject.getData().getMtRequest().getMonth();		
		String cManor = requestObject.getData().getMtRequest().getcManor();
		String parame = requestObject.getData().getMtRequest().getParame();
		System.out.println(year);
		System.out.println(month);
		System.out.println(cManor);
		System.out.println(parame);
		String startmonth;
		String endmonth;
		Date startTime;
		Date endTime;
		MtRequest eqwe = new MtRequest();
		//判断月份是否未空  
		if(month != null && month != "") {
			if(month.indexOf("-") != -1) {
				startmonth = month.substring(0,month.indexOf("-"));
				endmonth = month.substring(month.indexOf("-")+1);
				startTime = BIGString.getFirstDayOfMonth(Integer.parseInt(year),Integer.parseInt(startmonth));
				endTime = BIGString.getLastDayOfMonth(Integer.parseInt(year),Integer.parseInt(endmonth));
			}else {
				startTime = BIGString.getFirstDayOfMonth(Integer.parseInt(year),Integer.parseInt(month));
				endTime = BIGString.getLastDayOfMonth(Integer.parseInt(year),Integer.parseInt(month));
			}
			
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//			String lastDayOfMonth = sdf.format(date);
//			System.out.println(lastDayOfMonth);
			//根据不同的字段查询不同的数据
			if("本周采购".equals(parame)) {
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				eqwe.setcManor(cManor);//采购员
				String[] cState = {"0","1","2","3","4","5"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}else 
			if("本月采购".equals(parame)) {
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				eqwe.setcManor(cManor);//采购员
				String[] cState = {"0","1","2","3","4","5","6"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}else {
				if("大K".equals(parame)) {
					String[] notPurParame = {"印尼大K项目部"};
					eqwe.setNotPurParame(notPurParame);//请购单分类
				}
				if("小K".equals(parame)) {
					String[] notPurParame = {"印尼小K项目部","小K岛项目部"};
					eqwe.setNotPurParame(notPurParame);//请购单分类
				}
				if("印度".equals(parame)) {
					String[] notPurParame = {"印度项目部"};
					eqwe.setNotPurParame(notPurParame);//请购单分类
				}
				if("国内".equals(parame)) {
					String[] notPurParame = {"印尼大K项目部","印度项目部","印尼小K项目部","小K岛项目部"};
					eqwe.setNotPurParame(notPurParame);//请购单分类
				}
				if("总数".equals(parame)) {
					eqwe.setNotPurParame(null);//请购单分类
				}			
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				eqwe.setcManor(cManor);//采购员
				String[] cState = {"0","4","6"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
//				eqwe.setParame("未采购");				
//				eqwe.setStartTime(startTime);
//				eqwe.setEndTime(endTime);
//				eqwe.setcManor(cManor);
//				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
//				System.out.println(eqwe.getNotPurParame());
//				System.out.println(eqwe.getStartTime());				
//				System.out.println(eqwe.getEndTime());
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//				String lastDayOfMonth = sdf.format(eqwe.getStartTime());
//				System.out.println(lastDayOfMonth + "fdgfdf");
//				String lastDayOfMonth2 = sdf.format(eqwe.getEndTime());
//				System.out.println(lastDayOfMonth2 + "sdasdsa");
//				System.out.println(eqwe.getcManor());
//				System.out.println(selectQ001_7.size());
			}
		}else {
			if("本周采购".equals(parame)) {
				startTime = BIGString.getFirstDayOfMonth(Integer.parseInt(year),1);
				endTime = BIGString.getLastDayOfMonth(Integer.parseInt(year),12);
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				eqwe.setcManor(cManor);
				String[] cState = {"0","1","2","3","4","5"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}
			if("总未采购项".equals(parame)) {
				startTime = BIGString.getFirstDayOfMonth(Integer.parseInt(year),1);
				endTime = BIGString.getLastDayOfMonth(Integer.parseInt(year),12);
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				eqwe.setcManor(cManor);//采购员
				String[] cState = {"0","4","6"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}
			if("本月增加项".equals(parame)) {
				eqwe.setcManor(cManor);
				Calendar cal = Calendar.getInstance();  
		        startTime = BIGString.getFirstDayOfMonth(cal.get(Calendar.YEAR),(cal.get(Calendar.MONTH) + 1));
				endTime = BIGString.getLastDayOfMonth(cal.get(Calendar.YEAR),(cal.get(Calendar.MONTH) + 1));
				eqwe.setStartTime(startTime);//开始时间
				eqwe.setEndTime(endTime);//结束时间
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}
			if("本周增加项".equals(parame)) {
				eqwe.setParame("本周增加项");
				eqwe.setcManor(cManor);
				String[] cState = {"0","1","3","4","6"};
				eqwe.setcState(cState);//请购单物资状态
				List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_71(eqwe);
				System.out.println(selectQ001_7.size() + "aaaaaaaaaaaaaaaaaaaaaaaaaaa");
				return builder.data(selectQ001_7).errcode(Errcode.Success).build();
			}
		}
		
		return builder.msg("无相关数据！！").errcode(Errcode.FailParameterError).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectJutXM(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		ItemRequestObject itemRequestObject = requestObject.getData().getItemRequestObject();
		System.out.println("获取的项目::"+itemRequestObject.getcDataField());
			//总请购项，已请购项，为请购项，采购总金额
			if("zQgoux".equals(itemRequestObject.getcDataField())) {
				String[] cState = {"0","1","3","4","6"};
				itemRequestObject.setcState(cState);
			}else if("yCgoux".equals(itemRequestObject.getcDataField())) {
				String[]  cState = {"1","3"};
				itemRequestObject.setcState(cState);
			}else if("wCgoux".equals(itemRequestObject.getcDataField())){
				String[]  cState = {"0","4","6"};
				itemRequestObject.setcState(cState);
			}
			List<Q001M1s1Qrequest>  selectJutXM = tpCgorderstMapper.selectJutXM(itemRequestObject);
		return builder.data(selectJutXM).errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_9(User user, RequestObject<EmptyTag, EmptyData> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgauthority selectDanWei = tpCgauthorityMapper.selectDanWei(user.getUserName(), "CGY");
		if(selectDanWei == null) {
			return builder.data(selectDanWei).errcode(Errcode.Success).msg("无采购员！！！").build();
		}
		List<Q001M1s1Qrequest> selectQ001_9 = tpCgorderstMapper.selectQ001_9(selectDanWei.getcSubitemid());
		return builder.data(selectQ001_9).errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_10(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<Q001M1s1Qrequest> request = new ArrayList<Q001M1s1Qrequest>();
		//根据请购单查询物资
		TpCgordermt3 tpcgordermt = requestObject.getData().getCgQ001M1s14().get(0);
		
		TpCgauthority selectDanWei = tpCgauthorityMapper.selectDanWei(tpcgordermt.getName(), "CGY");
		tpcgordermt.setName(selectDanWei.getcSubitemid());
		 List<Q001M1s1Qrequest> selectQ001_7 = tpCgorderstMapper.selectQ001_10(tpcgordermt);
		if(selectQ001_7.size()< 0) {
			return builder.msg("无相关数据！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(selectQ001_7).errcode(Errcode.Success).build();
	}
	
	
}

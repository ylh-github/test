
 package code_fb.service.impl;
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
import code_fb.entity.CG_XXLY_M1S1;
import code_fb.mapper.CG_MNHT_Mapper;
import code_fb.mapper.CG_XXLY_Mapper;
import code_fb.request.CG_XXLY_Request_M1S1;
import code_fb.response.CG_XXLY_Response_M1S1;
import code_fb.service.CG_XXLY_Service;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.mapper.TbDocumeformMapper;
import code_fb_cg.mapper.TbDocumeformsonMapper;
import code_fb_cg.request.Xxk_Cont_Request;
import code_fb_cg.util.XxkUtil;
import code_fb_customer.CG_XXLY_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("cgXxlyService")
 public class CG_XXLY_ServiceImpl implements CG_XXLY_Service
 {
 	@Autowired
 	@Qualifier("cgXxlyMapper")
 	public CG_XXLY_Mapper frcDao;
   @Autowired
   public  CG_XXLY_Customer cgXxlyCustomer;
   @Autowired
   private TbDocumeformsonMapper tbDocumeformsonMapper;
   @Autowired
   private TbDocumeformMapper tbDocumeformMapper;
   @Autowired
   private CG_MNHT_Mapper cgMnhtMapper;
 public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S11Q(CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
 	if(cgXxlyRequestM1s1.getTbDocumeform().get(0).getcCheckstate() == null || cgXxlyRequestM1s1.getTbDocumeform().get(0).getcCheckstate() == "") {
 		
 		List<TbDocumeform> tbDocumeform = tbDocumeformMapper.selectcSw11(cgXxlyRequestM1s1.getTbDocumeform().get(0),
 				cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime());
 		if(tbDocumeform.size() == 0) {
 			tbDocumeform = tbDocumeformMapper.M1S11QCG_XXLY_M1S11(cgXxlyRequestM1s1.getTbDocumeform().get(0),
 	 		 		cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime());
 		}
 		data.setTbDocumeform(tbDocumeform);
 	}else {
 		List<TbDocumeform> tbDocumeform = tbDocumeformMapper.selectm1s1(cgXxlyRequestM1s1.getTbDocumeform().get(0),
 				cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime());
 		if(tbDocumeform.size() == 0) {
 			tbDocumeform = tbDocumeformMapper.M1S11QCG_XXLY_M1S1(cgXxlyRequestM1s1.getTbDocumeform().get(0),
 	 		 		cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime());
 		}	 
 		data.setTbDocumeform(tbDocumeform);
 	}
 	
 	
 
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 
 public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S15Q(CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session) {
	 String msg="查询成功";
	 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
	 	CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
	 data.setTbDocumeform(tbDocumeformMapper.M1S11QCG_XXLY_M1S15Q(cgXxlyRequestM1s1.getTbDocumeform().get(0),
			 cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime()));
	 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 
 
 
 
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,CG_XXLY_Request_M1S1 cgXxlyRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_XXLY_M1S1>cgXxlyM1s1 = cgXxlyRequestM1s1.getCgXxlyM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgXxlyCustomer.check_M1S11A_CG_XXLY_M1S1(cgXxlyRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11ACG_XXLY_M1S1(cgXxlyM1s1);
 	if(row0 < 0){
 msg = msg+"CG_XXLY_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,CG_XXLY_Request_M1S1 cgXxlyRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CG_XXLY_M1S1>cgXxlyM1s1 = cgXxlyRequestM1s1.getCgXxlyM1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgXxlyCustomer.check_M1S11U_CG_XXLY_M1S1(cgXxlyRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UCG_XXLY_M1S1(cgXxlyM1s1);
 	if(row0 < 0) {
 msg = msg+"CG_XXLY_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,CG_XXLY_Request_M1S1 cgXxlyRequestM1s1 ,String session){
	 String msg="删除成功"; 
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_XXLY_M1S1>cgXxlyM1s1 = new  ArrayList<>();
 CG_XXLY_M1S1 cg_XXLY_M1S1 = new CG_XXLY_M1S1();
 cg_XXLY_M1S1.setcConnumTbDocumeform(cgXxlyRequestM1s1.getTbDocumeform().get(0).getcConnum());
 cg_XXLY_M1S1.setcIdTbDocumeform(cgXxlyRequestM1s1.getTbDocumeform().get(0).getcId());
 cgXxlyM1s1.add(cg_XXLY_M1S1);
 System.out.println("cId:"+cgXxlyM1s1.get(0).getcIdTbDocumeform()+";cConnum++++"+cgXxlyM1s1.get(0).getcConnumTbDocumeform());
   String ss_ret0 = "";
 	ss_ret0 =  cgXxlyCustomer.check_M1S11D_CG_XXLY_M1S1(cgXxlyRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}
 	row0= frcDao.M1S11DCG_XXLY_M1S1(cgXxlyM1s1);
 	int deleteInfo = tbDocumeformsonMapper.deleteInfo(cgXxlyM1s1);
 	if(row0 < 0 && deleteInfo <0) {

 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 }
@Transactional
public ResponseObject<EmptyTag, EmptyData> M1S21A(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	XxkUtil xxkUtil = new XxkUtil();
	try {
		//根据外贸合同号和内贸合同进行查询是否存在，存在直接更新，不存在添加
		List<CG_XXLY_M1S1> m1s11qcg_XXLY_M1S1 = frcDao.M1S11QCG_XXLY_M1S21(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1());
		if(!m1s11qcg_XXLY_M1S1.isEmpty()) {
			//逻辑删除以前的数据
//			int m1s11ducg_XXLY_M1S1 = frcDao.M1S11DUCG_XXLY_M1S1(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1());
////			System.out.println("删除返回值："+m1s11ducg_XXLY_M1S1);
//			int deleteUpdate = tbDocumeformsonMapper.deleteUpdate(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1());
//			System.out.println("删除返回值"+deleteUpdate);
			return builder.msg("该合同已存在信息卡信息，若重新制作，请删除已存在的信息！！！").errcode(Errcode.FailParameterError).session(session).build();	
		}
		List<CG_MNHT_M1S1> searchInfoBycConnum = cgMnhtMapper.searchInfoBycConnum(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConnumTbDocumeform());
		//1.先添加到信息卡主表中
		CG_XXLY_M1S1 addcgXxlyM1s1 = xxkUtil.addCgXxlyM1s1(user, cg_XXLY_Request_M1S1,searchInfoBycConnum.get(0));
		List<CG_XXLY_M1S1> cgXxlyM1s1 = new ArrayList<CG_XXLY_M1S1>();
		cgXxlyM1s1.add(addcgXxlyM1s1);
		int mrow = frcDao.M1S11ACG_XXLY_M1S1(cgXxlyM1s1);
		if(mrow >0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("信息卡添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		//2.添加到信息卡子表中
		List<TbDocumeformson> addTbDocumeformson = xxkUtil.addTbDocumeformson(user, cg_XXLY_Request_M1S1, addcgXxlyM1s1);
		int insertSelective = tbDocumeformsonMapper.insertSelective(addTbDocumeformson);
		if(insertSelective > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("信息卡添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		//3.修改拟合同中制作人完成状态
		List<CG_MNHT_M1S1> cgMnhtM1s1 = new  ArrayList<CG_MNHT_M1S1>();
		CG_MNHT_M1S1 cgMNHTM1S1 = new CG_MNHT_M1S1();
		//内贸合同号
		cgMNHTM1S1.setcConnum(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConnumTbDocumeform());
		//制作人完成状态---部分完成
		cgMNHTM1S1.setcMadestate("mk004");
		cgMnhtM1s1.add(cgMNHTM1S1);
		int rown = cgMnhtMapper.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
		if(rown > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("信息卡添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		return builder.msg("信息卡添加成功！！！").errcode(Errcode.Success).session(session).build();
		
	} catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException("添加失败！！！");
	}
	
}

public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21Q(Xxk_Cont_Request xxk_Cont_Request, String session) {
	 String msg="查询成功";
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
	List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q(xxk_Cont_Request.getTpCgcontractmt(), xxk_Cont_Request.getTpCgTime(), xxk_Cont_Request.getTpCgcontractmt());
	System.out.println("返回的值：："+m1s21q.size());
	data.setTbDocumeformson(m1s21q);
		if(m1s21q.size() ==  0) {
			return builder.data(data).msg("无信息卡信息请添加！！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
	return builder.data(data).errcode(Errcode.Success).session(session).build();
}


public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21QS(Xxk_Cont_Request xxk_Cont_Request, String session) {
	 String msg="查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
		List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21QS(xxk_Cont_Request.getCg_MNHT_M1S1());
		System.out.println("返回的值：："+m1s21q.size());
		if(m1s21q.size()>0) {
			data.setTbDocumeformson(m1s21q);
			return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
		}
		return builder.data(data).msg("无信息卡信息请添加！！！！").errcode(Errcode.FailParameterError).session(session).build();
}

public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21Q4(Xxk_Cont_Request xxk_Cont_Request, String session) {
	 String msg="查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
		System.out.println("合同号：：：：："+xxk_Cont_Request.getTbDocumeform().getcConnum());
		List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q4(xxk_Cont_Request.getTbDocumeform());
		TpCgcontractmt tpCgcontractmt = new TpCgcontractmt();
		System.out.println("合同号：：：：："+xxk_Cont_Request.getcConnum());
		tpCgcontractmt.setcConnum(xxk_Cont_Request.getcConnum());
//		List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q4(tpCgcontractmt, xxk_Cont_Request.getTpCgTime(), xxk_Cont_Request.getCgMnhtM1s1().get(0));
		
		System.out.println("返回的值：："+m1s21q.size());
		if(m1s21q.size()>0) {
			data.setTbDocumeformson(m1s21q);
			return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
		}
		return builder.data(data).msg("无相关数据！！！！").errcode(Errcode.FailParameterError).session(session).build();
}
public ResponseObject<EmptyTag, EmptyData> M1S11Submit(User user, CG_XXLY_Request_M1S1 xxk_Cont_Request, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	
	List<CG_MNHT_M1S1> info = cgMnhtMapper.getInfoBycConnum(xxk_Cont_Request.getCgMnhtM1s1().get(0).getcConnum());
	if(info.size()==1) {
		return builder.msg("信息卡完成状态和采购HS审核状态同处于驳回状态，请联系对应采购员进行变更提交！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	List<CG_MNHT_M1S1> m1s32qcg_MNHT_M1S1 = cgMnhtMapper.M1S32QCG_MNHT_M1S1(xxk_Cont_Request.getCgMnhtM1s1().get(0));
	 
	//1.更新拟合同的制作人完成状态
	TbDocumeform tbDocumeform = new TbDocumeform();
	for (CG_MNHT_M1S1 element : m1s32qcg_MNHT_M1S1) {
		element.setcMadestate("mk002");//制作人完成状态--未审核
//		element.setcModifier(user.getUserName());
//		element.setcModifytime(new Date());
		
	} 
	int m1s11ucg_MNHT_M1S1 = cgMnhtMapper.M1S11UCG_MNHT_M1S2(m1s32qcg_MNHT_M1S1);
	System.out.println("修改返回值：："+m1s11ucg_MNHT_M1S1);
	if(m1s11ucg_MNHT_M1S1>0) {
		return builder.msg("信息卡信息提交失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	Date date = new Date();
	//2.更新信息卡的审核状态
	tbDocumeform.setcConnum(xxk_Cont_Request.getCgMnhtM1s1().get(0).getcConnum());//合同号
	tbDocumeform.setcCheckstate("xcc001");//审核状态--未审核
	tbDocumeform.setcMadestate("mk002");
	tbDocumeform.setcSw11(date);
	tbDocumeform.setcModifier(user.getUserName());
	tbDocumeform.setcModifytime(date);
//	tbDocumeform.setcSw01("");
//	tbDocumeform.setcSw02("");
	int updateBycCnnumSelective = tbDocumeformMapper.updateBycCnnum(tbDocumeform);
	System.out.println("单条修改返回值：："+updateBycCnnumSelective);
	if(updateBycCnnumSelective >0 ) {
		return builder.msg("信息卡信息提交失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	return builder.msg("信息卡信息提交成功！！！！").errcode(Errcode.Success).session(session).build();
}
public ResponseObject<EmptyTag, EmptyData> M1S21U(User user, CG_XXLY_Request_M1S1 xxk_Cont_Request, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	XxkUtil xxkUtil = new XxkUtil();
	//修改信息卡主表
	TbDocumeform updateXxk = xxkUtil.updateXxk(user,xxk_Cont_Request.getTbDocumeformson());
	int updateBycCnnumSelective = tbDocumeformMapper.updateBycCnnumSelective(updateXxk);
	System.out.println("单条修改：："+updateBycCnnumSelective);
	if(updateBycCnnumSelective>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	//修改信息卡子表
	int rown = tbDocumeformsonMapper.updateByPrimaryKeySelective2(xxk_Cont_Request.getTbDocumeformson());
	if(rown>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	 return builder.msg("信息卡信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
}
public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> getInfo(User user, Xxk_Cont_Request Xxk_Cont_Request, String session) {
	 String msg="查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
		System.out.println("合同号：：："+Xxk_Cont_Request.getCg_MNHT_M1S1().getcConnum());
		List<TbDocumeformson> info = tbDocumeformsonMapper.getInfo(Xxk_Cont_Request.getCg_MNHT_M1S1());
		if(info.size()>0) {
			data.setTbDocumeformson(info);
			return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
		}
		return builder.data(data).msg("无信息卡信息请添加！！！！").errcode(Errcode.FailParameterError).session(session).build();
}
@SuppressWarnings({ "rawtypes", "unchecked" })
public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21UXXK(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1,
		String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	//信息卡主表
	TbDocumeform tbDocumeformData = cg_XXLY_Request_M1S1.getTbDocumeformData();
	TbDocumeform form = cg_XXLY_Request_M1S1.getTbDocumeform().get(0);
	List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(form.getcConnum());
//	if(seletByeCconnum.isEmpty()) {
//		return builder.msg("该合同没有信息卡！！！！").errcode(Errcode.FailParameterError).session(session).build();
//	}
	if(form.getcTimestamp() != null) {
		if(form.getcTimestamp().getTime() != seletByeCconnum.get(0).getcTimestamp().getTime()) {
			return builder.msg("信息卡已变更,请刷新信息卡！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
	}
	tbDocumeformData.setcModifier(user.getUserName()); 
	tbDocumeformData.setcModifytime(new Date());
	tbDocumeformData.setcId(seletByeCconnum.get(0).getcId());
	tbDocumeformData.setcDataedp(tbDocumeformData.getcDataedp());
	System.out.println("获取的ID：：：："+tbDocumeformData.getcId());
	//信息卡子表
	List<TbDocumeformson> tbDocumeformson = cg_XXLY_Request_M1S1.getTbDocumeformson();
	for (TbDocumeformson tbDocume : tbDocumeformson) {
		tbDocume.setcModifier(user.getUserName());
		tbDocume.setcModifytime(new Date());
		tbDocume.setcDataedp(tbDocumeformData.getcDataedp());
		tbDocume.setcConnum(tbDocumeformData.getcConnum());
		tbDocume.setcOutconnum(tbDocumeformData.getcOutconnum());
		tbDocume.setcFatherid(tbDocumeformData.getcId());
//		if(tbDocume.getcIndimport() == null) {
//			tbDocume.setcIndimport("");
//		}else if(!tbDocume.getcIndimport().equals("无")){
//			tbDocume.setcRepname(tbDocume.getcName()+"(替代税号)");
//		}
	}
	//主表修改
	int updateBycCnnumSelective = tbDocumeformMapper.updateByID(tbDocumeformData);
	if(updateBycCnnumSelective>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	//修改信息卡子表
	int rown = tbDocumeformsonMapper.updateByPrimaryKeySelective2(tbDocumeformson);
	if(rown>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	 return builder.msg("信息卡信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
}

@Override
public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21UXXKZ(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1,
		String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	//信息卡主表
	TbDocumeform tbDocumeformData = cg_XXLY_Request_M1S1.getTbDocumeformData();
	List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cg_XXLY_Request_M1S1.getTbDocumeformson().get(0).getcConnum());
	tbDocumeformData.setcModifier(user.getUserName()); 
	tbDocumeformData.setcModifytime(new Date());
	tbDocumeformData.setcId(seletByeCconnum.get(0).getcId());
	System.out.println("获取的ID：：：："+tbDocumeformData.getcId());
	//信息卡子表
	List<TbDocumeformson> tbDocumeformson = cg_XXLY_Request_M1S1.getTbDocumeformson();
	for (TbDocumeformson tbDocume : tbDocumeformson) {
		tbDocume.setcModifier(user.getUserName());
		tbDocume.setcModifytime(new Date());
		tbDocume.setcDataedp(user.getUserName());
		tbDocume.setcConnum(tbDocumeformData.getcConnum());
		tbDocume.setcOutconnum(tbDocumeformData.getcOutconnum());
		tbDocume.setcFatherid(tbDocumeformData.getcId());
	}
	//主表修改
	int updateBycCnnumSelective = tbDocumeformMapper.updateByID(tbDocumeformData);
	if(updateBycCnnumSelective>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	//修改信息卡子表
	int rown = tbDocumeformsonMapper.updateByPrimaryKeySelective2(tbDocumeformson);
	if(rown>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	 return builder.msg("信息卡信息修改成功！！！！").errcode(Errcode.Success).session(session).build();

}
public ResponseObject<EmptyTag, EmptyData> M1S11UP(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	List<CG_MNHT_M1S1> searchInfoBycConnum = cgMnhtMapper.searchInfoBycConnum(cg_XXLY_Request_M1S1.getTbDocumeform().get(0).getcConnum());
	if(searchInfoBycConnum.size()==0) {
		return builder.msg("该合同已撤销，请联系相关信息卡人员删除信息卡信息！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	if("xxk06".equals(searchInfoBycConnum.get(0).getcStatexxk())) {
		return builder.msg("该合同已经生成正式合同，不能撤回信息卡，请联系对应的采购员！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	String getcSw01;
	String getcSw02;
	//查询判断撤回原因和撤回原因是否存在
	List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(cg_XXLY_Request_M1S1.getTbDocumeform().get(0).getcConnum());
	if(null == tbDocumeform.get(0).getcSw01()) {
		getcSw01="";
	}else {
		getcSw01 = tbDocumeform.get(0).getcSw01();
	}
	if(null == tbDocumeform.get(0).getcSw02()) {
		getcSw02="";
	}else {
		getcSw02 =tbDocumeform.get(0).getcSw02();
	}
	List<CG_MNHT_M1S1> listCG = new ArrayList<CG_MNHT_M1S1>();
	for (TbDocumeform element : cg_XXLY_Request_M1S1.getTbDocumeform()) {
		//部分完成
		element.setcMadestate("mk004");
		element.setcModifier(user.getUserName());
		element.setcModifytime(new Date());
		//信息卡审核状态
		element.setcCheckstate("xcc004");
		//撤回人
		element.setcSw02(user.getUserName()+";"+getcSw02);
		//撤回回原因
		if(element.getcSw01() == null) {
			element.setcSw01("");
		}
		//撤回时间
		element.setcChtime(new Date());
		SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日  HH:mm");
		  String  DenyTime=dateformat.format(new Date());
		element.setcSw01("时间:"+DenyTime+user.getUserName()+":"+element.getcRecause()+";"+getcSw01);


	}
	CG_MNHT_M1S1 cg_MNHT_M1S1 = new CG_MNHT_M1S1();
	cg_MNHT_M1S1.setcConnum(cg_XXLY_Request_M1S1.getTbDocumeform().get(0).getcConnum());
	//部分完成
	cg_MNHT_M1S1.setcMadestate("mk004");
	//未审核
	cg_MNHT_M1S1.setcStatexxk("xxk02");
	listCG.add(cg_MNHT_M1S1);
	int rown = tbDocumeformMapper.updateByPrimaryKeySelective(cg_XXLY_Request_M1S1.getTbDocumeform().get(0));
	if(rown>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	int rown2 = cgMnhtMapper.M1S11UCG_MNHT_M1S2(listCG);
	if(rown2>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	 return builder.msg("信息卡信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
}

public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S22A(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	for (TbDocumeformson element : cg_XXLY_Request_M1S1.getTbDocumeformson()) {
		element.setcFatherid(cg_XXLY_Request_M1S1.getTbDocumeformData().getcId());//主键
		element.setcConnum(cg_XXLY_Request_M1S1.getTbDocumeformData().getcConnum());//内贸合同
		element.setcOutconnum(cg_XXLY_Request_M1S1.getTbDocumeformData().getcOutconnum());//外贸合同
		element.setcCreater(user.getUserName());//创建时间
		element.setcCreatetime(new Date());//创建人
	}
	int rown = tbDocumeformsonMapper.insertSelective(cg_XXLY_Request_M1S1.getTbDocumeformson());
	if(rown>0) {
		TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
		return builder.msg("信息卡信息添加失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	return builder.msg("信息卡信息添加成功！！！！").errcode(Errcode.Success).session(session).build();
}

public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S16Q(CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session) {
	String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
 data.setTbDocumeform(tbDocumeformMapper.M1S11QCG_XXLY_M1S16Q(cgXxlyRequestM1s1.getTbDocumeform().get(0),
		 cgXxlyRequestM1s1.getStartTime(), cgXxlyRequestM1s1.getEndTime()));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
}

@Override
public ResponseObject<EmptyTag, EmptyData> M1S21D(User user, CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session) {
	 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	 List<TbDocumeformson> tbDocumeformson = cgXxlyRequestM1s1.getTbDocumeformson();
	 	int deleteInfo = tbDocumeformsonMapper.M1S21D(tbDocumeformson);
	 	if(deleteInfo >0) {
	 		return builder.errcode(Errcode.FailParameterError).msg("删除失败！！！").session(session).build();
	 	}
		return builder.errcode(Errcode.Success).msg("删除成功，请修改合同金额！！！").session(session).build(); 

//	 	}else{
//	 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
//	 	}
//	 }
//	 	else
//	 {
//	 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
//	 }
//	 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
//	 }
}

@Override
@Transactional
public ResponseObject<EmptyTag, EmptyData> M1S21HB(User user, CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	RandomId ri = new RandomId();
	List<TbDocumeformson> tbDocumeformson = cgXxlyRequestM1s1.getTbDocumeformson();
	List<TbDocumeformson> tcumeformson = new ArrayList<TbDocumeformson>();
	TbDocumeformson cumeformson = tbDocumeformson.get(0);
	String staname = tbDocumeformson.get(0).getcGoodsname();//获取品名
	String stunit = null;
	if(tbDocumeformson.get(0).getcUnit() != null) {
		stunit = tbDocumeformson.get(0).getcUnit();//成交单位
	}
	String sttaxnumber = null;
	if(tbDocumeformson.get(0).getcHscode() != null) {
		sttaxnumber = tbDocumeformson.get(0).getcHscode();//税号
	}
	BigDecimal sum = new BigDecimal(0);//数量
	BigDecimal sumprice = new BigDecimal(0);//总价
	String spec = "";//规格型号
	String sw01 = "";//合同物资主键
	for (TbDocumeformson documeformson : tbDocumeformson) {
		if(!documeformson.getcGoodsname().equals(staname)) {
			return builder.errcode(Errcode.FailParameterError).msg("品名不一致！！！").session(session).build();
		}
		if(stunit == null || !documeformson.getcUnit().equals(stunit)) {
			return builder.errcode(Errcode.FailParameterError).msg("成交单位不一致！！！").session(session).build();
		}
		/*if(sttaxnumber == null || !documeformson.getcHscode().equals(sttaxnumber)) {
			return builder.errcode(Errcode.FailParameterError).msg("HS编码不一致！！！").session(session).build();
		}*/
		if(documeformson.getcNum() != null) {
			sum = sum.add(new BigDecimal(documeformson.getcNum()));
		}
		if(documeformson.getcSw04() != null) {
			sumprice = sumprice.add(new BigDecimal(documeformson.getcSw04()));
		}
		if(documeformson.getcSpec() != null) {
			spec += documeformson.getcSpec() + ";";
		}
		if(documeformson.getcSw01() != null) {
			sw01 += documeformson.getcSw01() + ",";
		}
		
	}
	if(spec.length() > 0) {
		cumeformson.setcSpec(spec.substring(0, spec.length() - 1));
	}
	if(sw01.length() > 0) {
		cumeformson.setcSw01(sw01.substring(0, sw01.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
	}
	if("吨".equals(cumeformson.getcUnit()) || "立方米".equals(cumeformson.getcUnit()) || "米".equals(cumeformson.getcUnit())) {
		cumeformson.setcNum(ri.formatToFour(sum));
	}else {
		cumeformson.setcNum(ri.formatForTwo(sum));
	}
	
	cumeformson.setcSw04(ri.formatForTwo(sumprice));
	cumeformson.setcSw05("02");
	tcumeformson.add(cumeformson);
	int insertSelective = tbDocumeformsonMapper.insertSelective(tcumeformson);
	if(insertSelective > 0) {
		TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
		return builder.msg("信息卡合并失败！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	for (TbDocumeformson documeformson : tbDocumeformson) {
		int rwo = tbDocumeformsonMapper.updateDelete(documeformson);
		if(rwo > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("信息卡合并失败！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
	}
	return builder.errcode(Errcode.Success).msg("合并成功").session(session).build(); 
}

@Override
public ResponseObject<EmptyTag, EmptyData> M1S21CX(User user, CG_XXLY_Request_M1S1 cgXxlyRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	List<TbDocumeformson> tbDocumeformson = cgXxlyRequestM1s1.getTbDocumeformson();
	for (TbDocumeformson documeformson : tbDocumeformson) {
		String csw01 = documeformson.getcSw01();
		if(csw01.indexOf(",") != -1) {
			int rwo = tbDocumeformsonMapper.updateDelete(documeformson);
			if(rwo > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("信息卡撤销合并失败！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			String[] sw01 = csw01.split(",");
			for (String str : sw01) {
				int rwou = tbDocumeformsonMapper.updateBycId(str);
				if(rwou > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("信息卡撤销合并失败！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
			}
		}
	}
	return builder.errcode(Errcode.Success).msg("撤销成功").session(session).build(); 
}

@Override
public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> searchBjInfo(EmptyData emptyData, String session) {
	String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_XXLY_Response_M1S1 data = new CG_XXLY_Response_M1S1();
 data.setTbDocumeform(tbDocumeformMapper.searchBjInfo());
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
}

@Override
public ResponseObject<EmptyTag, EmptyData> deleteBj(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	//信息卡主表
	List<TbDocumeform> tbDocumeformData = cg_XXLY_Request_M1S1.getTbDocumeform();
	for (TbDocumeform tbDocumeform : tbDocumeformData) {
		tbDocumeform.setcModifier(user.getUserName()); 
		tbDocumeform.setcModifytime(new Date());
		tbDocumeform.setcSw10("");
	}
	//主表修改
	int updateBycCnnumSelective = tbDocumeformMapper.deleteBj(tbDocumeformData);
	if(updateBycCnnumSelective>0) {
		return builder.msg("信息卡信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	 return builder.msg("信息卡信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
}






 }

 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_ZXQD_M1S1;
import code_fb.mapper.CG_ZXQD_Mapper;
import code_fb.request.CG_ZXQD_Request_M1S1;
import code_fb.response.CG_ZXQD_Response_M1S1;
import code_fb.service.CG_ZXQD_Service;
import code_fb_customer.CG_ZXQD_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("cgZxqdService")
 public class CG_ZXQD_ServiceImpl implements CG_ZXQD_Service
 {
 	@Autowired
 	@Qualifier("cgZxqdMapper")
 	public CG_ZXQD_Mapper frcDao;
   @Autowired
   public  CG_ZXQD_Customer cgZxqdCustomer;
 public ResponseObject<EmptyTag, CG_ZXQD_Response_M1S1> M1S11Q(CG_ZXQD_Request_M1S1 cgZxqdRequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_ZXQD_Response_M1S1 data = new CG_ZXQD_Response_M1S1();
 data.setCgZxqdM1s1(frcDao.M1S11QCG_ZXQD_M1S1(cgZxqdRequestM1s1.getCgZxqdM1s1().get(0) ));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,CG_ZXQD_Request_M1S1 cgZxqdRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_ZXQD_M1S1>cgZxqdM1s1 = cgZxqdRequestM1s1.getCgZxqdM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgZxqdCustomer.check_M1S11A_CG_ZXQD_M1S1(cgZxqdRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11ACG_ZXQD_M1S1(cgZxqdM1s1);
 	if(row0 < 0){
 msg = msg+"CG_ZXQD_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,CG_ZXQD_Request_M1S1 cgZxqdRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CG_ZXQD_M1S1>cgZxqdM1s1 = cgZxqdRequestM1s1.getCgZxqdM1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgZxqdCustomer.check_M1S11U_CG_ZXQD_M1S1(cgZxqdRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UCG_ZXQD_M1S1(cgZxqdM1s1);
 	if(row0 < 0) {
 msg = msg+"CG_ZXQD_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,CG_ZXQD_Request_M1S1 cgZxqdRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_ZXQD_M1S1>cgZxqdM1s1 = cgZxqdRequestM1s1.getCgZxqdM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgZxqdCustomer.check_M1S11D_CG_ZXQD_M1S1(cgZxqdRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11DCG_ZXQD_M1S1(cgZxqdM1s1);
 	if(row0 < 0) {
 msg = msg+"CG_ZXQD_M1S1删除成功" ;

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
 }
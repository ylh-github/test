
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.GY_LOGIN_M1S1;
import code_fb.mapper.GY_LOGIN_Mapper;
import code_fb.request.GY_LOGIN_Request_M1S1;
import code_fb.response.GY_LOGIN_Response_M1S1;
import code_fb.service.GY_LOGIN_Service;
import code_fb_customer.GY_LOGIN_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("gyLoginService")
 public class GY_LOGIN_ServiceImpl implements GY_LOGIN_Service
 {
 	@Autowired
 	@Qualifier("gyLoginMapper")
 	public GY_LOGIN_Mapper frcDao;
   @Autowired
   public  GY_LOGIN_Customer gyLoginCustomer;
 public ResponseObject<EmptyTag, GY_LOGIN_Response_M1S1> M1S11Q(GY_LOGIN_Request_M1S1 gyLoginRequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	GY_LOGIN_Response_M1S1 data = new GY_LOGIN_Response_M1S1();
 data.setGyLoginM1s1(frcDao.M1S11QGY_LOGIN_M1S1(gyLoginRequestM1s1.getGyLoginM1s1().get(0) ,gyLoginRequestM1s1.getStartTime(),gyLoginRequestM1s1.getEndTime()));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,GY_LOGIN_Request_M1S1 gyLoginRequestM1s1 ,String session){
	 String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GY_LOGIN_M1S1>gyLoginM1s1 = gyLoginRequestM1s1.getGyLoginM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gyLoginCustomer.check_M1S11A_GY_LOGIN_M1S1(gyLoginRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11AGY_LOGIN_M1S1(gyLoginM1s1);
 	if(row0 < 0){
 msg = msg+"GY_LOGIN_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,GY_LOGIN_Request_M1S1 gyLoginRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<GY_LOGIN_M1S1>gyLoginM1s1 = gyLoginRequestM1s1.getGyLoginM1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  gyLoginCustomer.check_M1S11U_GY_LOGIN_M1S1(gyLoginRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UGY_LOGIN_M1S1(gyLoginM1s1);
 	if(row0 < 0) {
 msg = msg+"GY_LOGIN_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,GY_LOGIN_Request_M1S1 gyLoginRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GY_LOGIN_M1S1>gyLoginM1s1 = gyLoginRequestM1s1.getGyLoginM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gyLoginCustomer.check_M1S11D_GY_LOGIN_M1S1(gyLoginRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11DGY_LOGIN_M1S1(gyLoginM1s1);
 	if(row0 < 0) {
 msg = msg+"GY_LOGIN_M1S1删除成功" ;

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
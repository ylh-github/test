
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.GY_WZ_M1S1;
import code_fb.mapper.GY_WZ_Mapper;
import code_fb.request.GY_WZ_Request_M1S1;
import code_fb.response.GY_WZ_Response_M1S1;
import code_fb.service.GY_WZ_Service;
import code_fb_customer.GY_WZ_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("gyWzService")
 public class GY_WZ_ServiceImpl implements GY_WZ_Service
 {
 	@Autowired
 	@Qualifier("gyWzMapper")
 	public GY_WZ_Mapper frcDao;
   @Autowired
   public  GY_WZ_Customer gyWzCustomer;
 public ResponseObject<EmptyTag, GY_WZ_Response_M1S1> M1S11Q(GY_WZ_Request_M1S1 gyWzRequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	GY_WZ_Response_M1S1 data = new GY_WZ_Response_M1S1();
 data.setGyWzM1s1(frcDao.M1S11QGY_WZ_M1S1(gyWzRequestM1s1.getGyWzM1s1().get(0) ,gyWzRequestM1s1.getStartTime(),gyWzRequestM1s1.getEndTime()));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,GY_WZ_Request_M1S1 gyWzRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GY_WZ_M1S1>gyWzM1s1 = gyWzRequestM1s1.getGyWzM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gyWzCustomer.check_M1S11A_GY_WZ_M1S1(gyWzRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11AGY_WZ_M1S1(gyWzM1s1);
 	if(row0 < 0){
 msg = msg+"GY_WZ_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,GY_WZ_Request_M1S1 gyWzRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<GY_WZ_M1S1>gyWzM1s1 = gyWzRequestM1s1.getGyWzM1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  gyWzCustomer.check_M1S11U_GY_WZ_M1S1(gyWzRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UGY_WZ_M1S1(gyWzM1s1);
 	if(row0 < 0) {
 msg = msg+"GY_WZ_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,GY_WZ_Request_M1S1 gyWzRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GY_WZ_M1S1>gyWzM1s1 = gyWzRequestM1s1.getGyWzM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gyWzCustomer.check_M1S11D_GY_WZ_M1S1(gyWzRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11DGY_WZ_M1S1(gyWzM1s1);
 	if(row0 < 0) {
 msg = msg+"GY_WZ_M1S1删除成功" ;

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
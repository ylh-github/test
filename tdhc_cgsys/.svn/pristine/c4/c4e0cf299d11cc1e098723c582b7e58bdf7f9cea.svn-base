
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.GYS_01_M1S1;
import code_fb.mapper.GYS_01_Mapper;
import code_fb.request.GYS_01_Request_M1S1;
import code_fb.response.GYS_01_Response_M1S1;
import code_fb.service.GYS_01_Service;
import code_fb_customer.GYS_01_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("gys01Service")
 public class GYS_01_ServiceImpl implements GYS_01_Service
 {
 	@Autowired
 	@Qualifier("gys01Mapper")
 	public GYS_01_Mapper frcDao;
   @Autowired
   public  GYS_01_Customer gys01Customer;
 public ResponseObject<EmptyTag, GYS_01_Response_M1S1> M1S11Q(GYS_01_Request_M1S1 gys01RequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	GYS_01_Response_M1S1 data = new GYS_01_Response_M1S1();
 data.setGys01M1s1(frcDao.M1S11QGYS_01_M1S1(gys01RequestM1s1.getGys01M1s1().get(0) ));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,GYS_01_Request_M1S1 gys01RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GYS_01_M1S1>gys01M1s1 = gys01RequestM1s1.getGys01M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gys01Customer.check_M1S11A_GYS_01_M1S1(gys01RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11AGYS_01_M1S1(gys01M1s1);
 	if(row0 < 0){
 msg = msg+"GYS_01_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,GYS_01_Request_M1S1 gys01RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<GYS_01_M1S1>gys01M1s1 = gys01RequestM1s1.getGys01M1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  gys01Customer.check_M1S11U_GYS_01_M1S1(gys01RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UGYS_01_M1S1(gys01M1s1);
 	if(row0 < 0) {
 msg = msg+"GYS_01_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,GYS_01_Request_M1S1 gys01RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<GYS_01_M1S1>gys01M1s1 = gys01RequestM1s1.getGys01M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  gys01Customer.check_M1S11D_GYS_01_M1S1(gys01RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11DGYS_01_M1S1(gys01M1s1);
 	if(row0 < 0) {
 msg = msg+"GYS_01_M1S1删除成功" ;

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
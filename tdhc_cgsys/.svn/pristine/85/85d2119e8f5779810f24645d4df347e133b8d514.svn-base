
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CGC_11_M1S1;
import code_fb.entity.CGC_11_M2S2;
import code_fb.entity.CGC_11_M3S3;
import code_fb.mapper.CGC_11_Mapper;
import code_fb.request.CGC_11_Request_M1S1;
import code_fb.request.CGC_11_Request_M2S2;
import code_fb.request.CGC_11_Request_M3S3;
import code_fb.response.CGC_11_Response_M1S1;
import code_fb.response.CGC_11_Response_M2S2;
import code_fb.response.CGC_11_Response_M3S3;
import code_fb.service.CGC_11_Service;
import code_fb_customer.CGC_11_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User; 
 @Service("cgc11Service")
 public class CGC_11_ServiceImpl implements CGC_11_Service
 {
 	@Autowired
 	@Qualifier("cgc11Mapper")
 	public CGC_11_Mapper frcDao;
   @Autowired
   public  CGC_11_Customer cgc11Customer;
 public ResponseObject<EmptyTag, CGC_11_Response_M1S1> M1S11Q(CGC_11_Request_M1S1 cgc11RequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CGC_11_Response_M1S1 data = new CGC_11_Response_M1S1();
 data.setCgc11M1s1(frcDao.M1S11QCGC_11_M1S1(cgc11RequestM1s1.getCgc11M1s1().get(0) ));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,CGC_11_Request_M1S1 cgc11RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M1S1>cgc11M1s1 = cgc11RequestM1s1.getCgc11M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M1S11A_CGC_11_M1S1(cgc11RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}

 	row0= frcDao.M1S11ACGC_11_M1S1(cgc11M1s1);
 	if(row0 < 0){
 msg = msg+"CGC_11_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,CGC_11_Request_M1S1 cgc11RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CGC_11_M1S1>cgc11M1s1 = cgc11RequestM1s1.getCgc11M1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M1S11U_CGC_11_M1S1(cgc11RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11UCGC_11_M1S1(cgc11M1s1);
 	if(row0 < 0) {
 msg = msg+"CGC_11_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,CGC_11_Request_M1S1 cgc11RequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M1S1>cgc11M1s1 = cgc11RequestM1s1.getCgc11M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M1S11D_CGC_11_M1S1(cgc11RequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M1S11DCGC_11_M1S1(cgc11M1s1);
 	if(row0 < 0) {
 msg = msg+"CGC_11_M1S1删除成功" ;

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
 public ResponseObject<EmptyTag, CGC_11_Response_M2S2> M2S21Q(CGC_11_Request_M2S2 cgc11RequestM2s2, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CGC_11_Response_M2S2 data = new CGC_11_Response_M2S2();
 data.setCgc11M2s2(frcDao.M2S21QCGC_11_M2S2(cgc11RequestM2s2.getCgc11M2s2().get(0) ));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M2S21A(User user,CGC_11_Request_M2S2 cgc11RequestM2s2 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M2S2>cgc11M2s2 = cgc11RequestM2s2.getCgc11M2s2();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M2S21A_CGC_11_M2S2(cgc11RequestM2s2);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}
	 List<CGC_11_M2S2> m2s21qcgc_11_M2S2 = frcDao.M2S21Q2CGC_11_M2S2(cgc11M2s2.get(0));
	 if(m2s21qcgc_11_M2S2.size()>0) {
		 return builder.errcode(Errcode.FailParameterError).msg("该大条款编码已存在！！").session(session).build();
	 }
 	row0= frcDao.M2S21ACGC_11_M2S2(cgc11M2s2);
 	if(row0 < 0){
 		msg = msg+"CGC_11_M2S2保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M2S21U(User user,CGC_11_Request_M2S2 cgc11RequestM2s2 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CGC_11_M2S2>cgc11M2s2 = cgc11RequestM2s2.getCgc11M2s2();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M2S21U_CGC_11_M2S2(cgc11RequestM2s2);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M2S21UCGC_11_M2S2(cgc11M2s2);
 	if(row0 < 0) {
 msg = msg+"CGC_11_M2S2修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M2S21D(User user,CGC_11_Request_M2S2 cgc11RequestM2s2 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M2S2>cgc11M2s2 = cgc11RequestM2s2.getCgc11M2s2();
 List<CGC_11_M1S1> cgc11m1s1 = cgc11RequestM2s2.getCgc11M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M2S21D_CGC_11_M2S2(cgc11RequestM2s2);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M2S21DCGC_11_M2S2(cgc11M2s2, cgc11m1s1.get(0));
 	if(row0 < 0) {
 msg = msg+"CGC_11_M2S2删除成功" ;

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
 public ResponseObject<EmptyTag, CGC_11_Response_M3S3> M3S31Q(CGC_11_Request_M3S3 cgc11RequestM3s3, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CGC_11_Response_M3S3 data = new CGC_11_Response_M3S3();
 data.setCgc11M3s3(frcDao.M3S31QCGC_11_M3S3(cgc11RequestM3s3.getCgc11M3s3().get(0) ));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M3S31A(User user,CGC_11_Request_M3S3 cgc11RequestM3s3 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M3S3>cgc11M3s3 = cgc11RequestM3s3.getCgc11M3s3();
 List<CGC_11_M2S2> cgc11m2s2 = cgc11RequestM3s3.getCgc11M2s2();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M3S31A_CGC_11_M3S3(cgc11RequestM3s3);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}
 List<CGC_11_M3S3> m3s3 = frcDao.M3S31Q3CGC_11_M3S3(cgc11M3s3.get(0), cgc11m2s2.get(0));
 System.out.println("开始验证！！！"+m3s3.size());
 if(m3s3.size()>0) {
	 return builder.errcode(Errcode.FailParameterError).msg("条款编码已存在，请重新添加！！").session(session).build();
 }
 	row0= frcDao.M3S31ACGC_11_M3S3(cgc11M3s3);
 	if(row0 < 0){
 msg = msg+"CGC_11_M3S3保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M3S31U(User user,CGC_11_Request_M3S3 cgc11RequestM3s3 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CGC_11_M3S3>cgc11M3s3 = cgc11RequestM3s3.getCgc11M3s3();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M3S31U_CGC_11_M3S3(cgc11RequestM3s3);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M3S31UCGC_11_M3S3(cgc11M3s3);
 	if(row0 < 0) {
 msg = msg+"CGC_11_M3S3修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M3S31D(User user,CGC_11_Request_M3S3 cgc11RequestM3s3 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CGC_11_M3S3>cgc11M3s3 = cgc11RequestM3s3.getCgc11M3s3();
   String ss_ret0 = "";
 	ss_ret0 =  cgc11Customer.check_M3S31D_CGC_11_M3S3(cgc11RequestM3s3);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	row0= frcDao.M3S31DCGC_11_M3S3(cgc11M3s3);
 	if(row0 < 0) {
 msg = msg+"CGC_11_M3S3删除成功" ;

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
public ResponseObject<EmptyTag, CGC_11_Response_M2S2> S1S21Q(CGC_11_Request_M1S1 cgc11RequestM1s1, String session) {
	 String msg="查询成功";
	 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
	 	 
		 CGC_11_Response_M2S2 data = new CGC_11_Response_M2S2();
		 data.setCgc11M2s2(frcDao.S1S21QCGC_11_M1S1(cgc11RequestM1s1.getCgc11M1s1().get(0)));
	 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	
}
public ResponseObject<EmptyTag, CGC_11_Response_M3S3> S2S31Q(CGC_11_Request_M2S2 cgc11RequestM2s2, String session) {
	String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CGC_11_Response_M3S3 data = new CGC_11_Response_M3S3();
 data.setCgc11M3s3(frcDao.S2S31QCGC_11_M3S3(cgc11RequestM2s2.getCgc11M2s2().get(0)));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
}
public ResponseObject<EmptyTag, CGC_11_Response_M1S1> selectContType(EmptyData emptyData, String session) {
	String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CGC_11_Response_M1S1 data = new CGC_11_Response_M1S1();
 data.setCgc11M1s1(frcDao.selectContType());
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
}

 }
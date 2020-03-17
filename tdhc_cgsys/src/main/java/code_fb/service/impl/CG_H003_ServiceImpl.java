
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_H003_S2S3 ;
import code_fb.mapper.CG_H003_Mapper;
import code_fb.request.CG_H003_Request_M1S1 ;
import code_fb.request.CG_H003_Request_S1S2 ;
import code_fb.request.CG_H003_Request_S2S3 ;
import code_fb.response.CG_H003_Response_M1S1 ;
import code_fb.response.CG_H003_Response_S1S2 ;
import code_fb.response.CG_H003_Response_S2S3 ;
import code_fb.service.CG_H003_Service;
import code_fb_customer.CG_H003_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgH003Service")
 public class CG_H003_ServiceImpl implements CG_H003_Service
 {
 	@Autowired
 	@Qualifier("cgH003Mapper")
 	private CG_H003_Mapper frcDao;
 	CG_H003_Customer cgH003Customer= new CG_H003_Customer();
 public ResponseObject<EmptyTag, CG_H003_Response_M1S1> M1S11Q(CG_H003_Request_M1S1 cgH003RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H003_Response_M1S1 data = new CG_H003_Response_M1S1();
 data.setCgH003M1s1(frcDao.M1S11QCG_H003_M1S1(cgH003RequestM1s1.getCgH003M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, CG_H003_Response_S1S2> S1S21Q(CG_H003_Request_S1S2 cgH003RequestS1s2, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H003_Response_S1S2 data = new CG_H003_Response_S1S2();
 data.setCgH003S1s2(frcDao.S1S21QCG_H003_S1S2(cgH003RequestS1s2.getCgH003S1s2().get(0)));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, CG_H003_Response_S2S3> S2S31Q(CG_H003_Request_S2S3 cgH003RequestS2s3, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H003_Response_S2S3 data = new CG_H003_Response_S2S3();
 data.setCgH003S2s3(frcDao.S2S31QCG_H003_S2S3(cgH003RequestS2s3.getCgH003S2s3().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 @SuppressWarnings({ "rawtypes", "unchecked" })
public ResponseObject<EmptyTag, EmptyData> S2S31A(CG_H003_Request_S2S3 cgH003RequestS2s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H003_S2S3>cgH003S2s3 = cgH003RequestS2s3.getCgH003S2s3();
   String ss_ret0 = "";
 	ss_ret0 =  cgH003Customer.check_S2S31A_CG_H003_S2S3(cgH003S2s3);
// if ("success".equals(ss_ret0))
 if ("success".equals(cgH003Customer.check_S2S31A_CG_H003_S2S3(cgH003S2s3)))
 {
 	row0= frcDao.S2S31ACG_H003_S2S3(cgH003S2s3);
 	if(row0 < 0){
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S2S31U(CG_H003_Request_S2S3 cgH003RequestS2s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CG_H003_S2S3>cgH003S2s3 = cgH003RequestS2s3.getCgH003S2s3();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgH003Customer.check_S2S31U_CG_H003_S2S3(cgH003S2s3);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.S2S31UCG_H003_S2S3(cgH003S2s3);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S2S31D(CG_H003_Request_S2S3 cgH003RequestS2s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H003_S2S3>cgH003S2s3 = cgH003RequestS2s3.getCgH003S2s3();
   String ss_ret0 = "";
 	ss_ret0 =  cgH003Customer.check_S2S31D_CG_H003_S2S3(cgH003S2s3);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.S2S31DCG_H003_S2S3(cgH003S2s3);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 }
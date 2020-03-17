
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_Q004_M1S1 ;
import code_fb.entity.CG_Q004_M2S2 ;
import code_fb.mapper.CG_Q004_Mapper;
import code_fb.request.CG_Q004_Request_M1S1 ;
import code_fb.request.CG_Q004_Request_M2S2 ;
import code_fb.request.CG_Q004_Request_S2S3 ;
import code_fb.response.CG_Q004_Response_M1S1 ;
import code_fb.response.CG_Q004_Response_M2S2 ;
import code_fb.response.CG_Q004_Response_S2S3 ;
import code_fb.service.CG_Q004_Service;
import code_fb_customer.CG_Q004_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgQ004Service")
 public class CG_Q004_ServiceImpl implements CG_Q004_Service
 {
 	@Autowired
 	@Qualifier("cgQ004Mapper")
 	private CG_Q004_Mapper frcDao;
 	CG_Q004_Customer cgQ004Customer= new CG_Q004_Customer();
 public ResponseObject<EmptyTag, CG_Q004_Response_M1S1> M1S11Q(CG_Q004_Request_M1S1 cgQ004RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_Q004_Response_M1S1 data = new CG_Q004_Response_M1S1();
 data.setCgQ004M1s1(frcDao.M1S11QCG_Q004_M1S1(cgQ004RequestM1s1.getCgQ004M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_Q004_Request_M1S1 cgQ004RequestM1s1 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_Q004_M1S1>cgQ004M1s1 = cgQ004RequestM1s1.getCgQ004M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M1S11A_CG_Q004_M1S1(cgQ004M1s1);
 if ("success".equals(ss_ret0))
 if ("success".equals(cgQ004Customer.check_M1S11A_CG_Q004_M1S1(cgQ004M1s1)))
 {
 	row0= frcDao.M1S11ACG_Q004_M1S1(cgQ004M1s1);
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
 public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_Q004_Request_M1S1 cgQ004RequestM1s1 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CG_Q004_M1S1>cgQ004M1s1 = cgQ004RequestM1s1.getCgQ004M1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M1S11U_CG_Q004_M1S1(cgQ004M1s1);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.M1S11UCG_Q004_M1S1(cgQ004M1s1);
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
 public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_Q004_Request_M1S1 cgQ004RequestM1s1 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_Q004_M1S1>cgQ004M1s1 = cgQ004RequestM1s1.getCgQ004M1s1();
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M1S11D_CG_Q004_M1S1(cgQ004M1s1);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.M1S11DCG_Q004_M1S1(cgQ004M1s1);
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
 public ResponseObject<EmptyTag, CG_Q004_Response_M2S2> M2S21Q(CG_Q004_Request_M2S2 cgQ004RequestM2s2, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_Q004_Response_M2S2 data = new CG_Q004_Response_M2S2();
 data.setCgQ004M2s2(frcDao.M2S21QCG_Q004_M2S2(cgQ004RequestM2s2.getCgQ004M2s2().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M2S21A(CG_Q004_Request_M2S2 cgQ004RequestM2s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_Q004_M2S2>cgQ004M2s2 = cgQ004RequestM2s2.getCgQ004M2s2();
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M2S21A_CG_Q004_M2S2(cgQ004M2s2);
 if ("success".equals(ss_ret0))
 if ("success".equals(cgQ004Customer.check_M2S21A_CG_Q004_M2S2(cgQ004M2s2)))
 {
 	row0= frcDao.M2S21ACG_Q004_M2S2(cgQ004M2s2);
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
 public ResponseObject<EmptyTag, EmptyData> M2S21U(CG_Q004_Request_M2S2 cgQ004RequestM2s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CG_Q004_M2S2>cgQ004M2s2 = cgQ004RequestM2s2.getCgQ004M2s2();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M2S21U_CG_Q004_M2S2(cgQ004M2s2);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.M2S21UCG_Q004_M2S2(cgQ004M2s2);
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
 public ResponseObject<EmptyTag, EmptyData> M2S21D(CG_Q004_Request_M2S2 cgQ004RequestM2s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_Q004_M2S2>cgQ004M2s2 = cgQ004RequestM2s2.getCgQ004M2s2();
   String ss_ret0 = "";
 	ss_ret0 =  cgQ004Customer.check_M2S21D_CG_Q004_M2S2(cgQ004M2s2);
 if ("success".equals(ss_ret0))
 {
 	row0= frcDao.M2S21DCG_Q004_M2S2(cgQ004M2s2);
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
 public ResponseObject<EmptyTag, CG_Q004_Response_S2S3> S2S31Q(CG_Q004_Request_S2S3 cgQ004RequestS2s3, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_Q004_Response_S2S3 data = new CG_Q004_Response_S2S3();
 data.setCgQ004S2s3(frcDao.S2S31QCG_Q004_S2S3(cgQ004RequestS2s3.getCgQ004S2s3().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
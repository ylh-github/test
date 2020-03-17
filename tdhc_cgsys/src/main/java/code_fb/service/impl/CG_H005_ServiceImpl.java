
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_H005_S1S2 ;
import code_fb.entity.CG_H005_S1S3 ;
import code_fb.entity.CG_H005_S3S4 ;
import code_fb.mapper.CG_H005_Mapper;
import code_fb.request.CG_H005_Request_M1S1 ;
import code_fb.request.CG_H005_Request_S1S2 ;
import code_fb.request.CG_H005_Request_S1S3 ;
import code_fb.request.CG_H005_Request_S3S4 ;
import code_fb.response.CG_H005_Response_M1S1 ;
import code_fb.response.CG_H005_Response_S1S2 ;
import code_fb.response.CG_H005_Response_S1S3 ;
import code_fb.response.CG_H005_Response_S3S4 ;
import code_fb.service.CG_H005_Service;
import code_fb_customer.CG_H005_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgH005Service")
 public class CG_H005_ServiceImpl implements CG_H005_Service
 {
 	@Autowired
 	@Qualifier("cgH005Mapper")
 	private CG_H005_Mapper frcDao;
 	CG_H005_Customer cgH005Customer= new CG_H005_Customer();
 public ResponseObject<EmptyTag, CG_H005_Response_M1S1> M1S11Q(CG_H005_Request_M1S1 cgH005RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H005_Response_M1S1 data = new CG_H005_Response_M1S1();
 data.setCgH005M1s1(frcDao.M1S11QCG_H005_M1S1(cgH005RequestM1s1.getCgH005M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, CG_H005_Response_S1S2> S1S21Q(CG_H005_Request_S1S2 cgH005RequestS1s2, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H005_Response_S1S2 data = new CG_H005_Response_S1S2();
 data.setCgH005S1s2(frcDao.S1S21QCG_H005_S1S2(cgH005RequestS1s2.getCgH005S1s2().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> S1S21A(CG_H005_Request_S1S2 cgH005RequestS1s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S2>cgH005S1s2 = cgH005RequestS1s2.getCgH005S1s2();
 if ("success".equals(cgH005Customer.check_S1S21A()))
 {
 	row0= frcDao.S1S21ACG_H005_S1S2(cgH005S1s2);
 	if(row0 < 0){
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S21A()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S1S21U(CG_H005_Request_S1S2 cgH005RequestS1s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S2>cgH005S1s2 = cgH005RequestS1s2.getCgH005S1s2();
 if ("success".equals(cgH005Customer.check_S1S21U()))
 {
 	row0= frcDao.S1S21UCG_H005_S1S2(cgH005S1s2);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S21U()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S1S21D(CG_H005_Request_S1S2 cgH005RequestS1s2 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S2>cgH005S1s2 = cgH005RequestS1s2.getCgH005S1s2();
 if ("success".equals(cgH005Customer.check_S1S21D()))
 {
 	row0= frcDao.S1S21DCG_H005_S1S2(cgH005S1s2);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S21D()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, CG_H005_Response_S1S3> S1S31Q(CG_H005_Request_S1S3 cgH005RequestS1s3, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H005_Response_S1S3 data = new CG_H005_Response_S1S3();
 data.setCgH005S1s3(frcDao.S1S31QCG_H005_S1S3(cgH005RequestS1s3.getCgH005S1s3().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> S1S31A(CG_H005_Request_S1S3 cgH005RequestS1s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S3>cgH005S1s3 = cgH005RequestS1s3.getCgH005S1s3();
 if ("success".equals(cgH005Customer.check_S1S31A()))
 {
 	row0= frcDao.S1S31ACG_H005_S1S3(cgH005S1s3);
 	if(row0 < 0){
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S31A()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S1S31U(CG_H005_Request_S1S3 cgH005RequestS1s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S3>cgH005S1s3 = cgH005RequestS1s3.getCgH005S1s3();
 if ("success".equals(cgH005Customer.check_S1S31U()))
 {
 	row0= frcDao.S1S31UCG_H005_S1S3(cgH005S1s3);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S31U()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S1S31D(CG_H005_Request_S1S3 cgH005RequestS1s3 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S1S3>cgH005S1s3 = cgH005RequestS1s3.getCgH005S1s3();
 if ("success".equals(cgH005Customer.check_S1S31D()))
 {
 	row0= frcDao.S1S31DCG_H005_S1S3(cgH005S1s3);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S1S31D()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, CG_H005_Response_S3S4> S3S41Q(CG_H005_Request_S3S4 cgH005RequestS3s4, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_H005_Response_S3S4 data = new CG_H005_Response_S3S4();
 data.setCgH005S3s4(frcDao.S3S41QCG_H005_S3S4(cgH005RequestS3s4.getCgH005S3s4().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> S3S41A(CG_H005_Request_S3S4 cgH005RequestS3s4 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S3S4>cgH005S3s4 = cgH005RequestS3s4.getCgH005S3s4();
 if ("success".equals(cgH005Customer.check_S3S41A()))
 {
 	row0= frcDao.S3S41ACG_H005_S3S4(cgH005S3s4);
 	if(row0 < 0){
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S3S41A()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S3S41U(CG_H005_Request_S3S4 cgH005RequestS3s4 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S3S4>cgH005S3s4 = cgH005RequestS3s4.getCgH005S3s4();
 if ("success".equals(cgH005Customer.check_S3S41U()))
 {
 	row0= frcDao.S3S41UCG_H005_S3S4(cgH005S3s4);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S3S41U()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 public ResponseObject<EmptyTag, EmptyData> S3S41D(CG_H005_Request_S3S4 cgH005RequestS3s4 ,String session){
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CG_H005_S3S4>cgH005S3s4 = cgH005RequestS3s4.getCgH005S3s4();
 if ("success".equals(cgH005Customer.check_S3S41D()))
 {
 	row0= frcDao.S3S41DCG_H005_S3S4(cgH005S3s4);
 	if(row0 < 0) {
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(cgH005Customer.check_S3S41D()).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).session(session).build(); 
 }
 }
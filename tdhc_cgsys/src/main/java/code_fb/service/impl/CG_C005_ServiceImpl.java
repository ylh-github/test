
 package code_fb.service.impl;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_C005_Mapper;
import code_fb.request.CG_C005_Request_M1S1 ;
import code_fb.response.CG_C005_Response_M1S1 ;
import code_fb.service.CG_C005_Service;
import code_fb_customer.CG_C005_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgC005Service")
 public class CG_C005_ServiceImpl implements CG_C005_Service
 {
 	@Autowired
 	@Qualifier("cgC005Mapper")
 	private CG_C005_Mapper frcDao;
 	CG_C005_Customer cgC005Customer= new CG_C005_Customer();
 public ResponseObject<EmptyTag, CG_C005_Response_M1S1> M1S11Q(CG_C005_Request_M1S1 cgC005RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C005_Response_M1S1 data = new CG_C005_Response_M1S1();
 	cgC005RequestM1s1.getCgC005M1s1().get(0).setcCreater(cgC005RequestM1s1.getCgC005M1s1().get(0).getcCreater());
 data.setCgC005M1s1(frcDao.M1S11QCG_C005_M1S1(cgC005RequestM1s1.getCgC005M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
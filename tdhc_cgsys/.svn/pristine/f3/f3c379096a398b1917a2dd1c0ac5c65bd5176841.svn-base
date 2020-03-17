
 package code_fb.service.impl;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_C006_Mapper;
import code_fb.request.CG_C006_Request_M1S1 ;
import code_fb.response.CG_C006_Response_M1S1 ;
import code_fb.service.CG_C006_Service;
import code_fb_customer.CG_C006_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgC006Service")
 public class CG_C006_ServiceImpl implements CG_C006_Service
 {
 	@Autowired
 	@Qualifier("cgC006Mapper")
 	private CG_C006_Mapper frcDao;
 	CG_C006_Customer cgC006Customer= new CG_C006_Customer();
 public ResponseObject<EmptyTag, CG_C006_Response_M1S1> M1S11Q(CG_C006_Request_M1S1 cgC006RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C006_Response_M1S1 data = new CG_C006_Response_M1S1();
 	cgC006RequestM1s1.getCgC006M1s1().get(0).setcCreater(cgC006RequestM1s1.getCgC006M1s1().get(0).getcCreater());
 data.setCgC006M1s1(frcDao.M1S11QCG_C006_M1S1(cgC006RequestM1s1.getCgC006M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
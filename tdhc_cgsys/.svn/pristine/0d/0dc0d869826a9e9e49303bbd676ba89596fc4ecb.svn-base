
 package code_fb.service.impl;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_C001_Mapper;
import code_fb.request.CG_C001_Request_M1S1 ;
import code_fb.response.CG_C001_Response_M1S1 ;
import code_fb.service.CG_C001_Service;
import code_fb_customer.CG_C001_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgC001Service")
 public class CG_C001_ServiceImpl implements CG_C001_Service
 {
 	@Autowired
 	@Qualifier("cgC001Mapper")
 	private CG_C001_Mapper frcDao;
 	
 	CG_C001_Customer cgC001Customer= new CG_C001_Customer();
 @SuppressWarnings({ "rawtypes", "unchecked" })
public ResponseObject<EmptyTag, CG_C001_Response_M1S1> M1S11Q(CG_C001_Request_M1S1 cgC001RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C001_Response_M1S1 data = new CG_C001_Response_M1S1();
 	cgC001RequestM1s1.getCgC001M1s1().get(0).setcCreater(cgC001RequestM1s1.getCgC001M1s1().get(0).getcCreater());
 	data.setCgC001M1s1(frcDao.M1S11QCG_C001_M1S1(cgC001RequestM1s1.getCgC001M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
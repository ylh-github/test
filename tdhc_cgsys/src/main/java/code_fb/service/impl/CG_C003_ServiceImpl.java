
 package code_fb.service.impl;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_C003_Mapper;
import code_fb.request.CG_C003_Request_M1S1 ;
import code_fb.request.CG_C003_Request_S1S2 ;
import code_fb.response.CG_C003_Response_M1S1 ;
import code_fb.response.CG_C003_Response_S1S2 ;
import code_fb.service.CG_C003_Service;
import code_fb_customer.CG_C003_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgC003Service")
 public class CG_C003_ServiceImpl implements CG_C003_Service
 {
 	@Autowired
 	@Qualifier("cgC003Mapper")
 	private CG_C003_Mapper frcDao;
 	CG_C003_Customer cgC003Customer= new CG_C003_Customer();
 public ResponseObject<EmptyTag, CG_C003_Response_M1S1> M1S11Q(CG_C003_Request_M1S1 cgC003RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C003_Response_M1S1 data = new CG_C003_Response_M1S1();
 	cgC003RequestM1s1.getCgC003M1s1().get(0).setcCreater(cgC003RequestM1s1.getCgC003M1s1().get(0).getcCreater());
 data.setCgC003M1s1(frcDao.M1S11QCG_C003_M1S1(cgC003RequestM1s1.getCgC003M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, CG_C003_Response_S1S2> S1S21Q(CG_C003_Request_S1S2 cgC003RequestS1s2, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C003_Response_S1S2 data = new CG_C003_Response_S1S2();
 data.setCgC003S1s2(frcDao.S1S21QCG_C003_S1S2(cgC003RequestS1s2.getCgC003S1s2().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
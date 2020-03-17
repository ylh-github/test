
 package code_fb.service.impl;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_C004_Mapper;
import code_fb.request.CG_C004_Request_M1S1 ;
import code_fb.response.CG_C004_Response_M1S1 ;
import code_fb.service.CG_C004_Service;
import code_fb_customer.CG_C004_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder; 
 @Service("cgC004Service")
 public class CG_C004_ServiceImpl implements CG_C004_Service
 {
 	@Autowired
 	@Qualifier("cgC004Mapper")
 	private CG_C004_Mapper frcDao;
 	CG_C004_Customer cgC004Customer= new CG_C004_Customer();
 public ResponseObject<EmptyTag, CG_C004_Response_M1S1> M1S11Q(CG_C004_Request_M1S1 cgC004RequestM1s1, String session){
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CG_C004_Response_M1S1 data = new CG_C004_Response_M1S1();
 	cgC004RequestM1s1.getCgC004M1s1().get(0).setcCreater(cgC004RequestM1s1.getCgC004M1s1().get(0).getcCreater());
 data.setCgC004M1s1(frcDao.M1S11QCG_C004_M1S1(cgC004RequestM1s1.getCgC004M1s1().get(0) ));
 return builder.data(data).errcode(Errcode.Success).session(session).build();
 }
 }
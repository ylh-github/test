
 package code_fb.service;
 import code_fb.request.CG_C001_Request_M1S1 ;
import code_fb.response.CG_C001_Response_M1S1 ;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_C001_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_C001_Response_M1S1> M1S11Q(CG_C001_Request_M1S1 cgC001RequestM1s1,String session);
 }
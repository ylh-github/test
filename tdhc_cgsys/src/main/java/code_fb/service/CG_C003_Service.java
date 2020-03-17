
 package code_fb.service;
 import code_fb.request.CG_C003_Request_M1S1 ;
import code_fb.request.CG_C003_Request_S1S2 ;
import code_fb.response.CG_C003_Response_M1S1 ;
import code_fb.response.CG_C003_Response_S1S2 ;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_C003_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_C003_Response_M1S1> M1S11Q(CG_C003_Request_M1S1 cgC003RequestM1s1,String session);
 /**
 		 * 动态查询S1S21查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_C003_Response_S1S2> S1S21Q(CG_C003_Request_S1S2 cgC003RequestS1s2,String session);
 }
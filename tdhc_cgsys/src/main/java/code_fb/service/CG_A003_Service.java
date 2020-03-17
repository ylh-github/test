
 package code_fb.service;
 import code_fb.request.CG_A003_Request_C001 ;
import code_fb.request.CG_A003_Request_C002 ;
import code_fb.request.CG_A003_Request_C003 ;
import code_fb.request.CG_A003_Request_M1S1 ;
import code_fb.response.CG_A003_Response_C001 ;
import code_fb.response.CG_A003_Response_C002 ;
import code_fb.response.CG_A003_Response_C003 ;
import code_fb.response.CG_A003_Response_M1S1 ;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_A003_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A003_Response_C001> C0011Q(CG_A003_Request_C001 cgA003RequestC001,String session);
 /**
 		 * 动态查询C0021查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A003_Response_C002> C0021Q(CG_A003_Request_C002 cgA003RequestC002,String session);
 /**
 		 * 动态查询C0031查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A003_Response_C003> C0031Q(CG_A003_Request_C003 cgA003RequestC003,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A003_Response_M1S1> M1S11Q(CG_A003_Request_M1S1 cgA003RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A003_Request_M1S1 cgA003RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A003_Request_M1S1 cgA003RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A003_Request_M1S1 cgA003RequestM1s1,String session);
 }
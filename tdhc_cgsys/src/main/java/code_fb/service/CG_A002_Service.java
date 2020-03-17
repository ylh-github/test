
 package code_fb.service;
 import code_fb.request.CG_A002_Request_C001 ;
import code_fb.request.CG_A002_Request_M1S1 ;
import code_fb.response.CG_A002_Response_C001 ;
import code_fb.response.CG_A002_Response_M1S1 ;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_A002_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A002_Response_C001> C0011Q(CG_A002_Request_C001 cgA002RequestC001,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_A002_Response_M1S1> M1S11Q(CG_A002_Request_M1S1 cgA002RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A002_Request_M1S1 cgA002RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A002_Request_M1S1 cgA002RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A002_Request_M1S1 cgA002RequestM1s1,String session);
 }
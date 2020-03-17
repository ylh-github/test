
 package code_fb.service;
 import code_fb.request.CG_Q004_Request_M1S1 ;
import code_fb.request.CG_Q004_Request_M2S2 ;
import code_fb.request.CG_Q004_Request_S2S3 ;
import code_fb.response.CG_Q004_Response_M1S1 ;
import code_fb.response.CG_Q004_Response_M2S2 ;
import code_fb.response.CG_Q004_Response_S2S3 ;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_Q004_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q004_Response_M1S1> M1S11Q(CG_Q004_Request_M1S1 cgQ004RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(CG_Q004_Request_M1S1 cgQ004RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(CG_Q004_Request_M1S1 cgQ004RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(CG_Q004_Request_M1S1 cgQ004RequestM1s1,String session);
 /**
 		 * 动态查询M2S21查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q004_Response_M2S2> M2S21Q(CG_Q004_Request_M2S2 cgQ004RequestM2s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M2S21A(CG_Q004_Request_M2S2 cgQ004RequestM2s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M2S21U(CG_Q004_Request_M2S2 cgQ004RequestM2s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M2S21D(CG_Q004_Request_M2S2 cgQ004RequestM2s2,String session);
 /**
 		 * 动态查询S2S31查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q004_Response_S2S3> S2S31Q(CG_Q004_Request_S2S3 cgQ004RequestS2s3,String session);
 }
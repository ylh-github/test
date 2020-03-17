
 package code_fb.service;
 import code_fb.request.CG_H002_Request_C001 ;
import code_fb.request.CG_H002_Request_M1S1 ;
import code_fb.request.CG_H002_Request_S1S2 ;
import code_fb.request.CG_H002_Request_S2S3 ;
import code_fb.response.CG_H002_Response_C001 ;
import code_fb.response.CG_H002_Response_M1S1 ;
import code_fb.response.CG_H002_Response_S1S2 ;
import code_fb.response.CG_H002_Response_S2S3 ;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_H002_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H002_Response_C001> C0011Q(CG_H002_Request_C001 cgH002RequestC001,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H002_Response_M1S1> M1S11Q(CG_H002_Request_M1S1 cgH002RequestM1s1,String session);
 /**
 		 * 动态查询S1S21查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H002_Response_S1S2> S1S21Q(CG_H002_Request_S1S2 cgH002RequestS1s2,String session);
 /**
 		 * 动态查询S2S31查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H002_Response_S2S3> S2S31Q(CG_H002_Request_S2S3 cgH002RequestS2s3,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
// ResponseObject<EmptyTag, EmptyData> S2S31A(CG_H002_Request_S2S3 cgH002RequestS2s3,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S2S31U(CG_H002_Request_S2S3 cgH002RequestS2s3,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S2S31D(CG_H002_Request_S2S3 cgH002RequestS2s3,String session);
 }
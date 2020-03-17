
 package code_fb.service;
 import code_fb.request.CG_H004_Request_C001 ;
import code_fb.request.CG_H004_Request_M1S1 ;
import code_fb.request.CG_H004_Request_S2S3 ;
import code_fb.response.CG_H004_Response_C001 ;
import code_fb.response.CG_H004_Response_M1S1 ;
import code_fb.response.CG_H004_Response_S2S3 ;
import code_fb.response.TpCgreBookResponse;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_H004_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H004_Response_C001> C0011Q(CG_H004_Request_C001 cgH004RequestC001,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H004_Response_M1S1> M1S11Q(CG_H004_Request_M1S1 cgH004RequestM1s1,String session);
 /**
 		 * 动态查询S2S31查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_H004_Response_S2S3> S2S31Q(CG_H004_Request_S2S3 cgH004RequestS2s3,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S2S31A(TpCgreBookResponse tpCgreBookResponse,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S2S31U(TpCgreBookResponse tpCgreBookResponse,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S2S31D(TpCgreBookResponse tpCgreBookResponse,String session);
 }
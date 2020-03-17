
 package code_fb.service;
 import code_fb.request.GYS_DJB_Request_M1S1;
import code_fb.response.GYS_DJB_Response_M1S1;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User; 
 public interface GYS_DJB_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, GYS_DJB_Response_M1S1> M1S11Q(GYS_DJB_Request_M1S1 gysDjbRequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(User user,GYS_DJB_Request_M1S1 gysDjbRequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(User user,GYS_DJB_Request_M1S1 gysDjbRequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(User user,GYS_DJB_Request_M1S1 gysDjbRequestM1s1,String session);
 }
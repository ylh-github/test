
 package code_fb.service;
 import code_fb.request.CG_H001_Request_M1S1;
import code_fb.request.DZ_08_Request_add;
import code_fb.request.FH_01_Request_M1S1;
import code_fb.request.FH_01_Request_M1S1add;
import code_fb.request.FH_01_Request_M2S2;
import code_fb.response.FH_01_Response_M1S1;
import code_fb.response.FH_01_Response_M2S2;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User; 
 public interface FH_01_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S11Q(FH_01_Request_M1S1 fh01RequestM1s1,String session);
 /**
  * 导入
  * @param requestObject
  * @return
  */
 /**
	 * 动态查询M2S2查询
	 *
	 * 
	 * */
ResponseObject<EmptyTag, EmptyData> M1S11D(User user,FH_01_Request_M1S1 fh01RequestM1s1,String session);
ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S12MSG(RequestObject<EmptyTag, FH_01_Request_M1S1add> requestObject);
ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S1(FH_01_Request_M1S1 fh01RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag,  FH_01_Response_M1S1> M1S12MSG2(User user,FH_01_Request_M1S1 fh01RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 
 
 /**
 		 * 动态查询M2S21查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, FH_01_Response_M2S2> M2S21Q(FH_01_Request_M2S2 fh01RequestM2s2,String session);
 }
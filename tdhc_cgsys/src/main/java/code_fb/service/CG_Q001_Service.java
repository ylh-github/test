
 package code_fb.service;
 import code_fb.request.CG_Q001_Request_C001 ;
import code_fb.request.CG_Q001_Request_C002 ;
import code_fb.request.CG_Q001_Request_C003 ;
import code_fb.request.CG_Q001_Request_C004 ;
import code_fb.request.CG_Q001_Request_C005 ;
import code_fb.request.CG_Q001_Request_C006 ;
import code_fb.request.CG_Q001_Request_C007 ;
import code_fb.request.CG_Q001_Request_C008 ;
import code_fb.request.CG_Q001_Request_C009 ;
import code_fb.request.CG_Q001_Request_C00A ;
import code_fb.request.CG_Q001_Request_C00B ;
import code_fb.request.CG_Q001_Request_M1S1 ;
import code_fb.request.CG_Q001_Request_S1S2 ;
import code_fb.response.CG_Q001_Response_C001 ;
import code_fb.response.CG_Q001_Response_C002 ;
import code_fb.response.CG_Q001_Response_C003 ;
import code_fb.response.CG_Q001_Response_C004 ;
import code_fb.response.CG_Q001_Response_C005 ;
import code_fb.response.CG_Q001_Response_C006 ;
import code_fb.response.CG_Q001_Response_C007 ;
import code_fb.response.CG_Q001_Response_C008 ;
import code_fb.response.CG_Q001_Response_C009 ;
import code_fb.response.CG_Q001_Response_C00A ;
import code_fb.response.CG_Q001_Response_C00B ;
import code_fb.response.CG_Q001_Response_M1S1 ;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_Q001_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C001> C0011Q(CG_Q001_Request_C001 cgQ001RequestC001,String session);
 /**
 		 * 动态查询C0021查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C002> C0021Q(CG_Q001_Request_C002 cgQ001RequestC002,String session);
 /**
 		 * 动态查询C0031查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C003> C0031Q(CG_Q001_Request_C003 cgQ001RequestC003,String session);
 /**
 		 * 动态查询C0041查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C004> C0041Q(CG_Q001_Request_C004 cgQ001RequestC004,String session);
 /**
 		 * 动态查询C0051查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C005> C0051Q(CG_Q001_Request_C005 cgQ001RequestC005,String session);
 /**
 		 * 动态查询C0061查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C006> C0061Q(CG_Q001_Request_C006 cgQ001RequestC006,String session);
 /**
 		 * 动态查询C0071查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C007> C0071Q(CG_Q001_Request_C007 cgQ001RequestC007,String session);
 /**
 		 * 动态查询C0081查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C008> C0081Q(CG_Q001_Request_C008 cgQ001RequestC008,String session);
 /**
 		 * 动态查询C0091查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C009> C0091Q(CG_Q001_Request_C009 cgQ001RequestC009,String session);
 /**
 		 * 动态查询C00A1查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C00A> C00A1Q(CG_Q001_Request_C00A cgQ001RequestC00a,String session);
 /**
 		 * 动态查询C00B1查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_C00B> C00B1Q(CG_Q001_Request_C00B cgQ001RequestC00b,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q001_Response_M1S1> M1S11Q(CG_Q001_Request_M1S1 cgQ001RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(CG_Q001_Request_M1S1 cgQ001RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(CG_Q001_Request_M1S1 cgQ001RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(CG_Q001_Request_M1S1 cgQ001RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *	提交
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S13MSG(CG_Q001_Request_M1S1 cgQ001RequestM1s1,String session);
 /**
 		 * 动态查询S1S21查询
 		 *
 		 * 
 		 * */
// ResponseObject<EmptyTag, CG_Q001_Response_S1S2> S1S21Q(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21A(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21U(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21D(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 ResponseObject<EmptyTag, EmptyData> S1S21S(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 ResponseObject<EmptyTag, EmptyData> S1S21CS(CG_Q001_Request_S1S2 cgQ001RequestS1s2,String session);
 //取消提交
 ResponseObject<EmptyTag, EmptyData> M1S13MSG2(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session);
 /**
  * 转为T类
  * @param cgQ001RequestS1s2
  * @param session
  * @return
  */
 ResponseObject<EmptyTag, EmptyData> S1S21UpT(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session);
 /**
  * 撤销转T类
  * @param cgQ001RequestS1s2
  * @param session
  * @return
  */
ResponseObject<EmptyTag, EmptyData> S1S21DCXT(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session);
/**
 * S1S21UCGY修改按钮
 * @param cgQ001RequestS1s2
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> S1S21UCGY(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session);
/**
 * 催货
 * @param cgQ001RequestS1s2
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> GYBCH(CG_Q001_Request_M1S1 cgQ001RequestS1s2, String session);

ResponseObject<EmptyTag, EmptyData> CXCH(CG_Q001_Request_M1S1 cgQ001RequestS1s2, String session);
 }
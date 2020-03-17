
 package code_fb.service;
 import java.util.List;

import code_fb.request.CG_Q002_Request_C001 ;
import code_fb.request.CG_Q002_Request_C002 ;
import code_fb.request.CG_Q002_Request_C003;
import code_fb.request.CG_Q002_Request_M1S1 ;
import code_fb.request.CG_Q002_Request_S1S2 ;
import code_fb.response.CG_Q002_Response_C001 ;
import code_fb.response.CG_Q002_Response_C002 ;
import code_fb.response.CG_Q002_Response_C003;
import code_fb.response.CG_Q002_Response_M1S1 ;
import code_fb_cg.entity.TpCgorderst;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject; 
 public interface CG_Q002_Service {
 /**
 		 * 动态查询C0011查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q002_Response_C001> C0011Q(CG_Q002_Request_C001 cgQ002RequestC001,String session);
 /**
 		 * 动态查询C0021查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q002_Response_C002> C0021Q(CG_Q002_Request_C002 cgQ002RequestC002,String session);
 /**
  * 动态查询C0031查询
  *
  * 
  * */
 ResponseObject<EmptyTag, CG_Q002_Response_C003> C0031Q(CG_Q002_Request_C003 cgQ002RequestC003,String session);
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_Q002_Response_M1S1> M1S11Q(CG_Q002_Request_M1S1 cgQ002RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S12U(CG_Q002_Request_M1S1 cgQ002RequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21U(CG_Q002_Request_S1S2 cgQ002RequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S22U(CG_Q002_Request_S1S2 cgQ002RequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S23MSG(CG_Q002_Request_S1S2 cgQ002RequestS1s2,String session);
 //S1S22MSGCG_Q002_S1S2 撤销分配
 ResponseObject<EmptyTag, EmptyData> S1S22MSGCG_Q002_S1S2(List<TpCgorderst> orstList,String session);

 }
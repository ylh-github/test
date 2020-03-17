
 package code_fb.service;
 import code_fb.request.CG_MNHT_Request_M1S1 ;
import code_fb.request.CG_MNHT_Request_S1S2 ;
import code_fb.response.CG_MNHT_Response_M1S1 ;
import code_fb.response.CG_MNHT_Response_S1S2 ;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.Xxk_Cont_Request;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User; 
 public interface CG_MNHT_Service {
 /**
 		 * 动态查询M1S11查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11A(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session) throws Exception;
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11U(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session) throws Exception;
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> M1S11D(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session);
 /**
 		 * 动态查询S1S21查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21Q(CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,String session);
//联查
 ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QConnum(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21A(User user,CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21U(User user,CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,String session);
 /**
 		 * 动态查询M2S2查询
 		 *
 		 * 
 		 * */
 ResponseObject<EmptyTag, EmptyData> S1S21D(User user,CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,String session);

 /**
  * 信息卡页面根据合同号查询物资
  * @param requestObject
  * @return
  */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> M1S1S12(RequestObject<EmptyTag, Xxk_Cont_Request> requestObject);

 /**
  * 撤销物资
  *
  * 
  * */
 ResponseObject<EmptyTag, EmptyData> S1S21CX(User user,CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,String session);
 /**
  * 提交功能
  * @param user
  * @param data
  * @param session
  * @return
  */
ResponseObject<EmptyTag, EmptyData> M1S11U2(User user, CG_MNHT_Request_M1S1 data, String session);
/**
 * 审核结果反馈查询
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S31Q(EmptyData data, String session);
/**
 * 反馈结果联动查询拟合同物资
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S3S32QConnum(CG_MNHT_Request_M1S1 data, String session);
/**
 * 反馈结果联动查询拟合同信息
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> S3S32Q(CG_MNHT_Request_M1S1 data, String session);

ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q2(CG_MNHT_Request_M1S1 data, String session);
/**
 * 退单
 * @param user
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> M1S21U(User user, CG_MNHT_Request_M1S1 data, String session) throws Exception;
/**
 * 拟合同页面刷新
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S312Q(EmptyData data, String session);
/**
 * 拟合同模板修改
 * @param user
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> updateContract(User user, TP_SimContract data, String session) throws Exception;
/**
 * 信息卡国内审核通过
 * @param user
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> M1S11U_XXK(User user, CG_MNHT_Request_M1S1 data, String session);

/**
 * 信息卡印尼审核通过
 * @param user
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, EmptyData> M1S11U_XXK2(User user, CG_MNHT_Request_M1S1 data, String session);
/**
 * M1S11查询按钮 信息卡查询
 * @param user 
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q3(User user, CG_MNHT_Request_M1S1 data, String session);
ResponseObject<EmptyTag, EmptyData> M1S11U3(User user, CG_MNHT_Request_M1S1 data, String session);
/**
 * 条款查询
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QCause(CG_MNHT_Request_M1S1 data, String session);
/**
 * 拟合同详情页面查询签订公司的信息
 * @param user
 * @param requestObject
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> getTbContractCom(User user, TP_SimContract data, String session);
/**
 * 查询结算协议
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QSettlement(CG_MNHT_Request_M1S1 data, String session);
/**
 * 拟合同合同变更协议
 * @param user
 * @param data
 * @param session
 * @return
 */
ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> alterContract(User user, TP_SimContract data, String session);

 }
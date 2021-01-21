package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.request.OrderBeforeRequest;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.TpCgorderbeforeCondition;
import code_fb_cg.request.YDJ_Req;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpCgorderbeforeService {

	/**
	 * 条件查询
	 * 
	 * @return
	 */
	ResponseObject<EmptyTag, List<TpCgorderbefore>>  getByCondition(TpCgorderbeforeCondition condition,String session);
	/**
	 * 
	 * 保存
	 * 
	 * @param tpCgorderbefore
	 * @param user
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> save(YDJ_Req ydj_req,String session);
	
	/**
	 * 转合同
	 * 
	 * @param data
	 * @param user
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> saveContract(YDJ_Req ydj_req, String session);
	//追加预登记
	ResponseObject<EmptyTag, EmptyData> saveAdd(OrderBeforeRequest orderBeforeRequest, String session);
	//删除预登记
	ResponseObject<EmptyTag, EmptyData> saveDel(OrderBeforeRequest orderBeforeRequest, String session);
	/**
	 * 特殊转合同
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> tSaveContract(YDJ_Req data, String session);
	/**
	 * 转模拟合同
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> saveContractt(YDJ_Req data, String session);
	/**
	 * 模拟合同---物资合并版
	 * @param user
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> saveContract(User user, TP_SimContract data, String session) throws Exception;
	/**
	 * 模拟合同----合同物资不合并版
	 * @param user
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> simContract(User user, TP_SimContract data, String session) throws Exception;
	/**
	 * 模拟特殊转合同
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> tSaveContractt(YDJ_Req data, String session);
	/**
	 * 合同条款可修改的模拟合同
	 * @param user
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> updateContract(User user, TP_SimContract data, String session) throws Exception;
	/**
	 * 动态条款拟合同修改
	 * @param user
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> updateContractU(User user, TP_SimContract data, String session)throws Exception;
	/**
	 * 根据合同号，合同类型查询数据
	 * @param user
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, List<TbCgcontract>> getTbContractInfo(User user, TP_SimContract data, String session);
	ResponseObject<EmptyTag, List<TbCgcontract>> getCompInfo(User user, TP_SimContract data, String session);
	ResponseObject<EmptyTag, List<TbCgcontract>> getSupplierInfo(User user, TP_SimContract data, String session);
	/**
	 * 结算协议
	 * @param user
	 * @param tpSettlement
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> addJSXY(User user, TpSettlement tpSettlement, String session);
	/**
	 * 修改结算协议
	 * @param user
	 * @param data
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> updateJSXY(User user, TpSettlement data, String session) throws Exception;
	
}
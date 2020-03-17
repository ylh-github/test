package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.OutExcel;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.request.ExcelImp;
import code_fb_cg.request.MtRequest;
import code_fb_cg.request.OrderMtListRequest;
import code_fb_cg.request.OrderMtrequest;
import code_fb_cg.request.Q001M1s1Qrequest;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.request.TpCgordermtM1S13_Request;
import code_fb_cg.response.CG_EXCEL_Response;
import code_fb_cg.response.OutExcelResponse;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
/**
 * 
 * @author lhb
 * @时间：2018年8月16日上午11:30:15
 */
public interface TpCgordermtService {
	
	ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt(RequestObject<EmptyTag, ExcelImp> requestObject);
	ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt2(RequestObject<EmptyTag, ExcelImp> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateshenhe(RequestObject<EmptyTag, OrderMtListRequest> requestObject);
	ResponseObject<EmptyTag, List<TpCgordermt>> selectForOrdermt(RequestObject<EmptyTag, MtRequest> requestObject);
	String[][]outExcelmt(OutExcel requestObject);
	ResponseObject<EmptyTag, List<OutExcelResponse>>  outExcelmtInfo(RequestObject<EmptyTag, OutExcel> requestObject);
	//导出请购单的查询
	ResponseObject<EmptyTag, List<OutExcelResponse>> OUTorder(RequestObject<EmptyTag, OrderMtrequest> requestObject);
	ResponseObject<EmptyTag, List<TpCgordermt>> selectORDERNUM();
	//采购员查询页面
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_2(RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject);
	//采购助理查询页面
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_4(RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject);
	//主任查询
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_5(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	//经理查询
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_6(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	/**
	 * 新修改查询
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_7(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_71(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_8(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	//统计
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_9(User user, RequestObject<EmptyTag, EmptyData> requestObject);
	
	ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_10(RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
	ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectJutXM(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);
}

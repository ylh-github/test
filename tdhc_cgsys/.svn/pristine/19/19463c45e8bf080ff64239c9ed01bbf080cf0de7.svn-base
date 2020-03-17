package code_fb_cg.service;

import code_fb_cg.entity.StatisticalReport;
import code_fb_cg.request.ReportDataRequest;
import code_fb_cg.response.HomePageResponse;
import code_fb_cg.response.HompageRequest;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

/**
 * 首页service
 * @author lhb
 * @时间：2019年3月5日下午3:44:58
 */
public  interface HomePageService {
	/**
	 * 无条件查询合同总数
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> selecttpCgordermtSum(RequestObject<EmptyTag, EmptyData> requestObject);
	/**
	 * 无条件统计合同数量
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> selectContmtSum(RequestObject<EmptyTag, EmptyData> requestObject);
	/**
	 * 根据条件统计合同总量
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> selectContmtNum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件统计已完成的合同
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> completedContSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件统计已到货的合同
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> arrGoodsSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件统计已付清的合同
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> payContSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件统计已开票的情况
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> kaipContSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件查询延迟/提前的合同量
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> deplayContSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据各种条件进行查询统计
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> countContSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件按进行请购单物资总数查询
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> tpCgorderstSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条件查询请购单物资总数
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> selecttpCgorderstSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	/**
	 * 根据条查询全年请购单物资总数
	 * @param requestObject
	 * @return
	 */
	ResponseObject<EmptyTag, HomePageResponse> yeartpCgorderstSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//每个项目对应的数量
	ResponseObject<EmptyTag, HomePageResponse> itemNameSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//采购员分组对应数量
	ResponseObject<EmptyTag, HomePageResponse> seacherManorQGXSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//请购总项查询
	ResponseObject<EmptyTag, HomePageResponse> seacherSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//项目合同项查询
	ResponseObject<EmptyTag, HomePageResponse> itemNameHTSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//合同项采购员统计
	ResponseObject<EmptyTag, HomePageResponse> searchHTManorSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//合同总项统计
	ResponseObject<EmptyTag, HomePageResponse> searchHTSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//签订公司统计
	ResponseObject<EmptyTag, HomePageResponse> searchXFSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	//出船统计
	ResponseObject<EmptyTag, HomePageResponse> searchCCSum(RequestObject<EmptyTag, HompageRequest> requestObject);
	
	//报表数据
	ResponseObject<EmptyTag, StatisticalReport> reportform(RequestObject<EmptyTag, ReportDataRequest> requestObject);
}

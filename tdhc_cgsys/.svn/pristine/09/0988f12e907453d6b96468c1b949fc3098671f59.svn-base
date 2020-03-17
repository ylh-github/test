package code_fb_cg.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.request.TpCgauthorityM1S12_Request;
import code_fb_cg.request.TpCgauthorityS1S22_Request;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

/**
 * 
 * @author lhb
 * @时间：2018年8月19日下午6:46:47
 */
public interface TpCgauthorityService {
	//M1S1启用
	ResponseObject<EmptyTag, EmptyData> M1S12U(RequestObject<EmptyTag, TpCgauthorityM1S12_Request> requestObject);
	//M1S1禁用
	ResponseObject<EmptyTag, EmptyData> M1S13U(RequestObject<EmptyTag, TpCgauthorityM1S12_Request> requestObject);
	//S1S2启用
	ResponseObject<EmptyTag, EmptyData> S1S22U(RequestObject<EmptyTag, TpCgauthorityS1S22_Request> requestObject);
	//S1S2禁用
	ResponseObject<EmptyTag, EmptyData> S1S23U(RequestObject<EmptyTag, TpCgauthorityS1S22_Request> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> selectH001FKFS(RequestObject<EmptyTag, TpCgauthority> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> selectH001WCZT(RequestObject<EmptyTag, TpCgauthority> requestObject);
	
	//----------------
	
	ResponseObject<EmptyTag,List<TpCgauthority>> getDictionaryInfoWithItemNos(RequestObject<EmptyTag, TpCgauthority> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos1(RequestObject<EmptyTag, TpCgauthority> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos2(RequestObject<EmptyTag, TpCgauthority> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos3(RequestObject<EmptyTag, TpCgauthority> requestObject);
	ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos4(RequestObject<EmptyTag, TpCgauthority> requestObject);
}

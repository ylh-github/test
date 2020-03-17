package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.request.ReveiceBookList;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

public interface TpCgreceivebookService {

	ResponseObject<EmptyTag, EmptyData> insertFinashi(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	ResponseObject<EmptyTag, List<TpCgreceivebook>> selectByNum(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	ResponseObject<EmptyTag, List<TpCgreceivebook>> derivedData(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	//合同维护页面到货详情修改功能
	ResponseObject<EmptyTag, EmptyData> S1S51U(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	ResponseObject<EmptyTag, EmptyData> S1S51DHSJ(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	ResponseObject<EmptyTag, EmptyData> S1S51CK(RequestObject<EmptyTag, ReveiceBookList> requestObject);
	//到货详情页面 判断物资是否到齐
	int updapetmtCheckway(String connum,TpCgcontractmt tpCgcontractmtmt);
}

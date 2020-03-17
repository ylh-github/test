package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgmoneybook;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.MoneyBook;
import code_fb_cg.request.MoneyRequestDel;
import code_fb_cg.request.RbookList;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

public interface TpCgmoneybookService {

	ResponseObject<EmptyTag, List<TpCgmoneybook>> selectForMoneyBook(RequestObject<EmptyTag, List<TpCgcontractmt>> requestObject);
	ResponseObject<EmptyTag, EmptyData> insertMoneyBook(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, EmptyData> delectById(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateByPrimaryKey(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateMoneyFinashi(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//合同管理付款添加
	ResponseObject<EmptyTag, EmptyData> ADDfukuan(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateFUKUAN(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, EmptyData> deleteFUKUAN(RequestObject<EmptyTag, MoneyBook> requestObject);
	ResponseObject<EmptyTag, List<TpCgmoneybook>> derivedFUKUAN(RequestObject<EmptyTag, MoneyBook> requestObject);
}

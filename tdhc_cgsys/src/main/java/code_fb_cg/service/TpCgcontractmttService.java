package code_fb_cg.service;

import java.util.List;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.ContractmtList;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.YJshipnum;
import code_fb_cg.request.ZJHTrequest;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpCgcontractmttService {
	//追加合同
	ResponseObject<EmptyTag, EmptyData> ZJHT(RequestObject<EmptyTag, ZJHTrequest> requestObject);
	//还原合同物资
	ResponseObject<EmptyTag, EmptyData> SCHTWZ(RequestObject<EmptyTag, ZJHTrequest> requestObject);
	//撤销合同
	ResponseObject<EmptyTag, EmptyData> M1S11CX(RequestObject<EmptyTag, ContractmtList2> requestObject);

	//合并/拆分导入
	ResponseObject<EmptyTag, EmptyData> ExcelConSt(RequestObject<EmptyTag, ExcelCONST> requestObject) throws Exception;
	//报关导入
	ResponseObject<EmptyTag, EmptyData> Excelimpoet(User user,RequestObject<EmptyTag, ExcelCONST> requestObject);
	//撤销合同/拆分
	ResponseObject<EmptyTag, EmptyData> M1S11CXDR(RequestObject<EmptyTag, ExcelCONST> requestObject);
	//已处理
	ResponseObject<EmptyTag, EmptyData> M1S11CL(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//合并
	ResponseObject<EmptyTag, EmptyData> S1S21HB(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//拆分
	ResponseObject<EmptyTag, EmptyData> S1S21CF(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//撤回信息卡
	ResponseObject<EmptyTag, EmptyData> M1S11RECALL(User user, RequestObject<EmptyTag, ContractmtList2> requestObject);
	//统计信息卡时间
	ResponseObject<EmptyTag, List<CG_MNHT_M1S1>> tJXxkSJ(RequestObject<EmptyTag, ContractmtList2> requestObject);
}

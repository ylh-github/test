package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpConrevocare;
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

public interface TpCgcontractmtService {
	ResponseObject<EmptyTag, List<TpCgcontractmt>> selectByConnum(RequestObject<EmptyTag, TpCgcontractmt> requestObject);
	ResponseObject<EmptyTag, List<TpCgcontractmt>> updateContractZF(RequestObject<EmptyTag, ContractmtList> requestObject);
	ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTST(RequestObject<EmptyTag, ConMtAndSt> requestObject);
	//一键到货
	ResponseObject<EmptyTag, EmptyData> YJdaohuo(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//一键出船
	ResponseObject<EmptyTag, EmptyData> YJshipnum(RequestObject<EmptyTag, YJshipnum> requestObject);
	//一键发票
	ResponseObject<EmptyTag, EmptyData> YJfapiao(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//一键付清
	ResponseObject<EmptyTag, EmptyData> YJfuqing(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//检验是否出船
	ResponseObject<EmptyTag, EmptyData> JYSFCC(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//追加合同
	ResponseObject<EmptyTag, EmptyData> ZJHT(RequestObject<EmptyTag, ZJHTrequest> requestObject);
	//还原合同物资
	ResponseObject<EmptyTag, EmptyData> SCHTWZ(RequestObject<EmptyTag, ZJHTrequest> requestObject);
	//导出合同查询
	ResponseObject<EmptyTag, List<TpCgcontractmt>> OUTconmt(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//合同号查询
	ResponseObject<EmptyTag, List<TpCgcontractmt>> selectNUM();
	ResponseObject<EmptyTag, List<TpCgcontractmt>> selectSUPPLIER();
	//合同取消采购
	ResponseObject<EmptyTag, EmptyData> M1S11QX(RequestObject<EmptyTag, ExcelCONST> requestObject);
	//采购助理查询功能
	ResponseObject<EmptyTag, EmptyData> Q001_4(RequestObject<EmptyTag, ExcelCONST> requestObject);
	//主任查询功能
	ResponseObject<EmptyTag, EmptyData> Q001_5(RequestObject<EmptyTag, ExcelCONST> requestObject);
	ResponseObject<EmptyTag, EmptyData> Q001_6(RequestObject<EmptyTag, ExcelCONST> requestObject);
	//合同导入
	ResponseObject<EmptyTag, List<TpCgcontractst>> ExcelConSt(RequestObject<EmptyTag, ExcelCONST> requestObject);
	//模拟合同查询
	ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTSTT(User user,RequestObject<EmptyTag, ConMtAndSt> requestObject);
	//合同分类
	ResponseObject<EmptyTag, EmptyData> M1S11FL(User user,RequestObject<EmptyTag, ContractmtList2> requestObject);
	//合同错误
	ResponseObject<EmptyTag, EmptyData> M1S11BS(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//提前/延期
	ResponseObject<EmptyTag, EmptyData> M1S11TY(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//查询没有预计到货时间的合同
	ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S11WD(RequestObject<EmptyTag, TpCgcontractmt> requestObject);
	//撤销会拟合同
	ResponseObject<EmptyTag, EmptyData> M1S11CX(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//合同标记处理
	ResponseObject<EmptyTag, EmptyData> M1S11HTCL(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//验收单
	ResponseObject<EmptyTag, EmptyData> M1S11TYSD(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//质保金
	ResponseObject<EmptyTag, EmptyData> M1S11TZBJ(RequestObject<EmptyTag, ContractmtList2> requestObject);
	//申请撤销
	ResponseObject<EmptyTag, EmptyData> AppRevocation(User user,RequestObject<EmptyTag, ExcelCONST> requestObject);
	//修改状态
	ResponseObject<EmptyTag, EmptyData> updateRevo1(User user,RequestObject<EmptyTag, ExcelCONST> requestObject);
	//修改状态
	ResponseObject<EmptyTag, EmptyData> updateRevo2(User user,RequestObject<EmptyTag, ExcelCONST> requestObject);
	//统计个数
	ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocare(User user,RequestObject<EmptyTag, ExcelCONST> requestObject);
	ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocareNum(User user,
			RequestObject<EmptyTag, ExcelCONST> requestObject);
}

package code_fb_cg.service;

import java.util.List;

import code_fb.entity.CG_MNHT_S1S2;
import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb.response.CG_MNHT_Response_M1S1;
import code_fb_cg.entity.TpCancelment;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.request.AgreementRequest;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface AgreementService {
	//原合同查询
	ResponseObject<EmptyTag, TpCgcontractmtt> M1S11Q(User user, AgreementRequest requestObject);
	
	
	ResponseObject<EmptyTag, List<CG_MNHT_S1S2>> S1S21QConnum(User user, AgreementRequest requestObject);
	
	
	
	ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> MNHTQ(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,String session);
	
	//新增变更协议
	ResponseObject<EmptyTag, EmptyData> ABGXY(User user, AgreementRequest requestObject);
	//修改变更协议
	ResponseObject<EmptyTag, EmptyData> UBGXY(User user, AgreementRequest requestObject); 
	//提交信息卡
	ResponseObject<EmptyTag, EmptyData> TJXXK(User user, AgreementRequest requestObject); 
	//变更信息卡
	ResponseObject<EmptyTag, EmptyData> BGXXK(User user, AgreementRequest requestObject); 
	//更新正式合同
	ResponseObject<EmptyTag, EmptyData> GXHT(User user, AgreementRequest requestObject); 
	//撤销变更协议
	ResponseObject<EmptyTag, EmptyData> CXBGXY(User user, AgreementRequest requestObject);  
	//正式合同撤销变更
	ResponseObject<EmptyTag, EmptyData> CXBGGX(User user, AgreementRequest requestObject); 
	
	
	//查询结算协议
	ResponseObject<EmptyTag, TpSettlement> S1S11Q(User user, AgreementRequest requestObject);
	//新增结算协议
	ResponseObject<EmptyTag, EmptyData> AJSXY(User user, AgreementRequest requestObject);
	//修改结算协议
	ResponseObject<EmptyTag, EmptyData> UJSXY(User user, AgreementRequest requestObject);
	//撤销变更协议
	ResponseObject<EmptyTag, EmptyData> CXJSXY(User user, AgreementRequest requestObject); 
	//更新正式合同
	ResponseObject<EmptyTag, EmptyData> JSGXHT(User user, AgreementRequest requestObject); 
	//正式合同撤销结算
	ResponseObject<EmptyTag, EmptyData> CXJSGX(User user, AgreementRequest requestObject);
	
	
	//查询作废协议
	ResponseObject<EmptyTag, TpCancelment> S1S12Q(User user, AgreementRequest requestObject);
	//新增结算协议
	ResponseObject<EmptyTag, EmptyData> AZFXY(User user, AgreementRequest requestObject);
	//修改结算协议
	ResponseObject<EmptyTag, EmptyData> UZFXY(User user, AgreementRequest requestObject);
	//撤销变更协议
	ResponseObject<EmptyTag, EmptyData> CXZFXY(User user, AgreementRequest requestObject); 
	//更新正式合同
	ResponseObject<EmptyTag, EmptyData> ZFGXHT(User user, AgreementRequest requestObject); 
}

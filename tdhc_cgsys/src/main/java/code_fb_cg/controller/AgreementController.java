package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CG_MNHT_S1S2;
import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb.response.CG_MNHT_Response_M1S1;
import code_fb_cg.entity.TpCancelment;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.request.AgreementRequest;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.ContractmtList;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ZJHTrequest;
import code_fb_cg.service.AgreementService;
import code_fb_cg.service.TpCgcontractmtService;
import code_fb_cg.service.TpCgcontractmttService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("AGREE")
public class AgreementController {
	@Autowired
	private AgreementService agreementService;

//	// 新增变更合同
//	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
//	@ResponseBody 
//	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S11Q(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
//		return agreementService.M1S11Q(user,requestObject.getData(),requestObject.getSession()); 
//	} 
	// 新增变更合同
	@RequestMapping(value = "/S1S21QConnum", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, List<CG_MNHT_S1S2>> S1S21QConnum(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.S1S21QConnum(user, requestObject.getData());
	}
	// 新增变更合同
	@RequestMapping(value = "/MNHTQ", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> MNHTQ(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject) {
		return agreementService.MNHTQ(user, requestObject.getData(),requestObject.getSession());
	}
	// 新增变更合同
	@RequestMapping(value = "/ABGXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> ABGXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.ABGXY(user, requestObject.getData());
	}
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, TpCgcontractmtt> M1S11Q(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.M1S11Q(user, requestObject.getData());
	}
	/**
	 * 修改变更协议
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/UBGXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> UBGXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.UBGXY(user, requestObject.getData());
	}
	/**
	 * 提交信息卡
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/TJXXK", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> TJXXK(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.TJXXK(user, requestObject.getData());
	}
	/**
	 * 变更信息卡
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/BGXXK", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> BGXXK(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.BGXXK(user, requestObject.getData());
	}
	/**
	 * 更新正式合同
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/GXHT", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> GXHT(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.GXHT(user, requestObject.getData());
	}
	/**
	 * 撤销变更协议
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/CXBGXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> CXBGXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.CXBGXY(user, requestObject.getData());
	}
	/**
	 * 撤销回你合同变更协议
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/CXBGGX", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> CXBGGX(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.CXBGGX(user, requestObject.getData());
	}
	
	
	// 新增结算合同
	@RequestMapping(value = "/AJSXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> AJSXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.AJSXY(user, requestObject.getData());
	}
	// 修改结算合同
	@RequestMapping(value = "/UJSXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> UJSXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.UJSXY(user, requestObject.getData());
	}
	// 撤销结算合同
	@RequestMapping(value = "/CXJSXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> CXJSXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.CXJSXY(user, requestObject.getData());
	}
	//更新到正式合同给
	@RequestMapping(value = "/JSGXHT", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> JSGXHT(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.JSGXHT(user, requestObject.getData());
	}
	//撤回到结算协议
	@RequestMapping(value = "/CXJSGX", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> CXJSGX(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.CXJSGX(user, requestObject.getData());
	}
	@RequestMapping(value = "/S1S11Q", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, TpSettlement> S1S11Q(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.S1S11Q(user, requestObject.getData());
	}
	
	// 新增作废合同
	@RequestMapping(value = "/AZFXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> AZFXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.AZFXY(user, requestObject.getData());
	}
	// 修改作废合同
	@RequestMapping(value = "/UZFXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> UZFXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.UZFXY(user, requestObject.getData());
	}
	// 撤销作废合同
	@RequestMapping(value = "/CXZFXY", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> CXZFXY(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.CXZFXY(user, requestObject.getData());
	}
	// 更新正式合同
	@RequestMapping(value = "/ZFGXHT", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> ZFGXHT(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.ZFGXHT(user, requestObject.getData());
	}
	
	@RequestMapping(value = "/S1S12Q", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, TpCancelment> S1S12Q(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, AgreementRequest> requestObject) {
		return agreementService.S1S12Q(user, requestObject.getData());
	}
}

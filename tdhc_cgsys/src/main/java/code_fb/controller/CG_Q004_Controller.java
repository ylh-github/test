
package code_fb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CG_Q004_M1S1;
import code_fb.entity.CG_Q004_M2S2;
import code_fb.request.CG_Q004_Request_M1S1;
import code_fb.request.CG_Q004_Request_M2S2;
import code_fb.request.CG_Q004_Request_S2S3;
import code_fb.response.CG_Q004_Response_M1S1;
import code_fb.response.CG_Q004_Response_M2S2;
import code_fb.response.CG_Q004_Response_S2S3;
import code_fb.service.CG_Q004_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("CG_Q004")
public class CG_Q004_Controller {
	@Autowired
	private CG_Q004_Service cgQ004Service;

	/**
	 * M1S11查询按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_Q004_Response_M1S1> M1S11Q(
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M1S1> requestObject) {
		return cgQ004Service.M1S11Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11增加按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11A", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M1S1> requestObject) {

		requestObject.getData().getCgQ004M1s1().get(0).setcCreater(user.getUserName());

		requestObject.getData().getCgQ004M1s1().get(0).setcCreatetime(user.getWorkContext().getFinancialTime());
		return cgQ004Service.M1S11A(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11修改按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11U", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M1S1> requestObject) {
		for (CG_Q004_M1S1 ele : requestObject.getData().getCgQ004M1s1()) {
			ele.setcModifier(user.getUserName());
			ele.setcModifytime(user.getWorkContext().getFinancialTime());
		}
		return cgQ004Service.M1S11U(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11删除按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11D", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M1S1> requestObject) {
		for (CG_Q004_M1S1 iterable_element : requestObject.getData().getCgQ004M1s1()) {
			iterable_element.setcModifier(user.getUserName());
			iterable_element.setcModifytime(user.getWorkContext().getFinancialTime());
		}
		return cgQ004Service.M1S11D(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M2S21查询按钮
	 * 
	 */
	@RequestMapping(value = "/M2S21Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_Q004_Response_M2S2> M2S21Q(
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M2S2> requestObject) {
		return cgQ004Service.M2S21Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M2S21增加按钮
	 * 
	 */
	@RequestMapping(value = "/M2S21A", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M2S21A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M2S2> requestObject) {
		for (CG_Q004_M2S2 iterable_element : requestObject.getData().getCgQ004M2s2()) {
			iterable_element.setcCreater(user.getUserName());
			iterable_element.setcCreatetime(user.getWorkContext().getFinancialTime());
		}
		return cgQ004Service.M2S21A(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M2S21修改按钮
	 * 
	 */
	@RequestMapping(value = "/M2S21U", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M2S21U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M2S2> requestObject) {
		for (CG_Q004_M2S2 iterable_element : requestObject.getData().getCgQ004M2s2()) {
			iterable_element.setcModifier(user.getUserName());
			
			iterable_element.setcModifytime(user.getWorkContext().getFinancialTime());
		}
		return cgQ004Service.M2S21U(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M2S21删除按钮
	 * 
	 */
	@RequestMapping(value = "/M2S21D", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M2S21D(
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_M2S2> requestObject) {
		return cgQ004Service.M2S21D(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S2S31查询按钮
	 * 
	 */
	@RequestMapping(value = "/S2S31Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_Q004_Response_S2S3> S2S31Q(
			@RequestBody RequestObject<EmptyTag, CG_Q004_Request_S2S3> requestObject) {
		return cgQ004Service.S2S31Q(requestObject.getData(), requestObject.getSession());
	}
}
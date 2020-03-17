
package code_fb.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CG_H005_S1S3;
import code_fb.entity.CG_H005_S3S4;
import code_fb.request.CG_H005_Request_M1S1;
import code_fb.request.CG_H005_Request_S1S2;
import code_fb.request.CG_H005_Request_S1S3;
import code_fb.request.CG_H005_Request_S3S4;
import code_fb.response.CG_H005_Response_M1S1;
import code_fb.response.CG_H005_Response_S1S2;
import code_fb.response.CG_H005_Response_S1S3;
import code_fb.response.CG_H005_Response_S3S4;
import code_fb.service.CG_H005_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("CG_H005")
public class CG_H005_Controller {
	@Autowired
	private CG_H005_Service cgH005Service;

	/**
	 * M1S11查询按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_H005_Response_M1S1> M1S11Q(
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_M1S1> requestObject) {
		return cgH005Service.M1S11Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S21查询按钮
	 * 
	 */
	@RequestMapping(value = "/S1S21Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_H005_Response_S1S2> S1S21Q(
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S2> requestObject) {
		return cgH005Service.S1S21Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S21增加按钮
	 * 
	 */
	@RequestMapping(value = "/S1S21A", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S21A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S2> requestObject) {

		requestObject.getData().getCgH005S1s2().get(0).setcCreater(user.getUserName());

		requestObject.getData().getCgH005S1s2().get(0).setcCreatetime(user.getWorkContext().getFinancialTime());

		return cgH005Service.S1S21A(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S21修改按钮
	 * 
	 */
	@RequestMapping(value = "/S1S21U", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S21U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S2> requestObject) {

		requestObject.getData().getCgH005S1s2().get(0).setcModifier(user.getUserName());

		requestObject.getData().getCgH005S1s2().get(0).setcModifytime(user.getWorkContext().getFinancialTime());

		return cgH005Service.S1S21U(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S21删除按钮
	 * 
	 */
	@RequestMapping(value = "/S1S21D", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S21D(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S2> requestObject) {

		return cgH005Service.S1S21D(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S31查询按钮
	 * 
	 */
	@RequestMapping(value = "/S1S31Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_H005_Response_S1S3> S1S31Q(
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S3> requestObject) {
		return cgH005Service.S1S31Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S31增加按钮
	 * 
	 */
	@RequestMapping(value = "/S1S31A", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S31A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S3> requestObject) {
		for (CG_H005_S1S3 s1s3 : requestObject.getData().getCgH005S1s3()) {
			s1s3.setcCreater(user.getUserName());
			s1s3.setcCreatedate(new Date());
		}
		return cgH005Service.S1S31A(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S31修改按钮
	 * 
	 */
	@RequestMapping(value = "/S1S31U", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S31U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S3> requestObject) {
		for (CG_H005_S1S3 s1s3 : requestObject.getData().getCgH005S1s3()) {
			s1s3.setcModifier(user.getUserName());
			s1s3.setcModifydate(new Date());
		}
		return cgH005Service.S1S31U(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S1S31删除按钮
	 * 
	 */
	@RequestMapping(value = "/S1S31D", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S31D(
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S1S3> requestObject) {
		return cgH005Service.S1S31D(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S3S41查询按钮
	 * 
	 */
	@RequestMapping(value = "/S3S41Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_H005_Response_S3S4> S3S41Q(
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S3S4> requestObject) {
		return cgH005Service.S3S41Q(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S3S41增加按钮
	 * 
	 */
	@RequestMapping(value = "/S3S41A", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S3S41A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S3S4> requestObject) {
		for (CG_H005_S3S4 s3s4 : requestObject.getData().getCgH005S3s4()) {
			s3s4.setcCreater(user.getUserName());
			s3s4.setcCreatetime(new Date());
		}
		return cgH005Service.S3S41A(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S3S41修改按钮
	 * 
	 */
	@RequestMapping(value = "/S3S41U", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S3S41U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S3S4> requestObject) {
		for (CG_H005_S3S4 s3s4 : requestObject.getData().getCgH005S3s4()) {
			s3s4.setcModifier(user.getUserName());
			s3s4.setcModifytime(new Date());
		}
		return cgH005Service.S3S41U(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * S3S41删除按钮
	 * 
	 */
	@RequestMapping(value = "/S3S41D", method = RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S3S41D(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_H005_Request_S3S4> requestObject) {
		return cgH005Service.S3S41D(requestObject.getData(), requestObject.getSession());
	}
}
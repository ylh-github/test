
package cn.tdhc.TB_ATTR_GROUP.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.tdhc.TB_ATTR_GROUP.request.IWIP_AGROUP_Request_M1S1;
import cn.tdhc.TB_ATTR_GROUP.response.IWIP_AGROUP_Response_M1S1;
import cn.tdhc.TB_ATTR_GROUP.service.IWIP_AGROUP_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;

@Controller
@RequestMapping("IWIP_AGROUP")
public class IWIP_AGROUP_Controller {

	@Autowired
	public IWIP_AGROUP_Service iwipAgroupService;

	/**
	 * M1S11查询按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> M1S11Q(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.M1S11Q(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 主属性查询
	 */
	@RequestMapping(value = "/mainAttributes", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> mainAndViceAttr(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.mainAndViceAttr(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 属性值查询
	 */
	@RequestMapping(value = "/viceAttrCheck", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> viceAttrCheck(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.viceAttrCheck(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * 属性查询
	 */
	@RequestMapping(value = "/selectAgroupOne", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupOne(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.selectAgroupOne(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * 属性值查询
	 */
	@RequestMapping(value = "/selectAgroupTwo", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupTwo(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.selectAgroupTwo(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 联动查询
	 */
	@RequestMapping(value = "/selectAgroupMsg", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsg(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.selectAgroupMsg(requestObject.getData(), requestObject.getSession());
	}
	/**
	 * 联动查询
	 */
	@RequestMapping(value = "/selectAgroupMsgValue", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsgValue(
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.selectAgroupMsgValue(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11增加按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11A", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.M1S11A(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * 属性的保存按钮和修改
	 * 
	 */
	@RequestMapping(value = "/insertAndUpDate", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupMsg(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.insertAndUpDateAgroupMsg(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * 属性值的保存按钮和修改
	 * 
	 */
	@RequestMapping(value = "/changeValue", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupValue(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.insertAndUpDateAgroupValue(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11修改按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11U", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.M1S11U(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11删除按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11D", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.M1S11D(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示
	 * 
	 */
	@RequestMapping(value = "/getCountDelFlag", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountDelFlag(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.getCountDelFlag(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * <!-- 查询sql -->
	 */
	@RequestMapping(value = "/getCountCmatCode", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountCmatCode(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.getCountCmatCode(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * <!-- 查询sql -->
	 */
	@RequestMapping(value = "/getCountUpdateCmatCode", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountUpdateCmatCode(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.getCountUpdateCmatCode(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * <!-- 查询sql -->
	 */
	@RequestMapping(value = "/CA001", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> CA001(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_AGROUP_Request_M1S1> requestObject) {
		return iwipAgroupService.CA001(user, requestObject.getData(), requestObject.getSession());
	}
}
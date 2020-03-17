
package cn.tdhc.TB_MATTER_GROUP.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.tdhc.TB_MATTER_GROUP.request.IWIP_MGROUP_Request_M1S1;
import cn.tdhc.TB_MATTER_GROUP.response.IWIP_MGROUP_Response_M1S1;
import cn.tdhc.TB_MATTER_GROUP.service.IWIP_MGROUP_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;

@Controller
@RequestMapping("IWIP_MGROUP")
public class IWIP_MGROUP_Controller {
	
	@Autowired
	public IWIP_MGROUP_Service iwipMgroupService;

	/**
	 * M1S11查询按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> M1S11Q(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S11Q(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 添加物资状态的查询
	 * 
	 */
	@RequestMapping(value = "/addMaterial", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> addMaterial(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.addMaterial(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 大类查询
	 */
	@RequestMapping(value = "/selectMsgOne", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgOne(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.selectMsgOne(requestObject.getData(), requestObject.getSession());
	}
	/**
	 * 中类查询
	 */
	@RequestMapping(value = "/selectMsgTwo", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgTwo(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.selectMsgTwo(requestObject.getData(), requestObject.getSession());
	}
	/**
	 * 小类查询
	 */
	@RequestMapping(value = "/selectMsgThree", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgThree(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.selectMsgThree(requestObject.getData(), requestObject.getSession());
	}
	/**
	 * 物料名称类查询
	 */
	@RequestMapping(value = "/selectMsgFour", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgFour(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.selectMsgFour(requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 联动查询
	 */
	@RequestMapping(value = "/selectLinkage", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectLinkage(
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.selectLinkage(requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11增加按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11A", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S11A(user, requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 添加物料编码信息
	 */
	@RequestMapping(value = "/insertBigMsg", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> insertBigMsg(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.insertTbAttrGroupBigMsg(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11修改按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11U", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S11U(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S11删除按钮
	 * 
	 */
	@RequestMapping(value = "/M1S11D", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S11D(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S12修改按钮
	 * 
	 */
	@RequestMapping(value = "/M1S12MSG", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S12MSG(user, requestObject.getData(), requestObject.getSession());
	}

	/**
	 * M1S13修改按钮
	 * 
	 */
	@RequestMapping(value = "/M1S13MSG", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.M1S13MSG(user, requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示
	 * 
	 */
	@RequestMapping(value = "/getCountDelFlag", method = RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> getCountDelFlag(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.getCountDelFlag(user, requestObject.getData(), requestObject.getSession());
	}
	
	/**
	 * 添加物料编码返回空数据
	 */
	@RequestMapping(value = "/addMgroupMsg", method = RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> addMgroupMsg(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, IWIP_MGROUP_Request_M1S1> requestObject) {
		return iwipMgroupService.addMgroupMsg(user, requestObject.getData(), requestObject.getSession());
	}
	
	
}
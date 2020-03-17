
package code_fb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_C001_Request_M1S1;
import code_fb.response.CG_C001_Response_M1S1;
import code_fb.service.CG_C001_Service;
import code_fb_cg.entity.TpCguser;
import code_fb_cg.mapper.TpCguserMapper;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("CG_C001")
public class CG_C001_Controller {
	@Autowired
	private CG_C001_Service cgC001Service;
	@Autowired
	private TpCguserMapper tpCguserMapper;

	/**
	 * M1S11查询按钮
	 * 
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequireUser
	@RequestMapping(value = "/M1S11Q", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, CG_C001_Response_M1S1> M1S11Q(@RequestParamUser User user,
			@RequestBody RequestObject<EmptyTag, CG_C001_Request_M1S1> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCguser u = new TpCguser();
		u.setcLoginname(user.getUserName());// 获取该用户的所有信息
		TpCguser us = tpCguserMapper.selectLoginName(u);
		if (!us.getcDutyname().equals("采购员") && !us.getcDutyname().equals("采购主管")
				&& !us.getcDutyname().equals("管理员")) {
			return builder.errcode(Errcode.FailParameterError).msg("没有权限操作！").build();
		}
		requestObject.getData().getCgC001M1s1().get(0).setcCreater(user.getUserName());
		return cgC001Service.M1S11Q(requestObject.getData(), requestObject.getSession());
	}
}
package code_fb_cg.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TbSuppmateral;
import code_fb_cg.request.CG_GY001_Request;
import code_fb_cg.response.CG_GY001_Response;
import code_fb_cg.service.CG_GY001_Service;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
/**
 * 供应商发货单备份
 * @author lhb
 * @时间：2019年3月23日下午4:09:06
 */
@Controller
@RequestMapping(value="GY001")
public class CG_GY001_Controller {
	
	
	@Autowired
	private CG_GY001_Service cg_GY001_Service;
	
	/**
	 * 根据条件查询信息
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/selectByCondition",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TbSuppmateral>> selectByCondition(@RequestBody RequestObject<EmptyTag, CG_GY001_Request> requestObject){ 
		return cg_GY001_Service.selectByCondition(requestObject);
	} 
	/**
	 * 联动
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S1S12", method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, CG_GY001_Response> M1S1S12(@RequestBody RequestObject<EmptyTag, CG_GY001_Request> requestObject){ 
		return cg_GY001_Service.M1S1S12(requestObject);
	} 
	
}

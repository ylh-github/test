
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_C003_Request_M1S1 ;
import code_fb.request.CG_C003_Request_S1S2 ;
import code_fb.response.CG_C003_Response_M1S1 ;
import code_fb.response.CG_C003_Response_S1S2 ;
import code_fb.service.CG_C003_Service;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_C003")
 public class CG_C003_Controller {
 @Autowired
 private CG_C003_Service cgC003Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_C003_Response_M1S1>M1S11Q(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CG_C003_Request_M1S1> requestObject){ 
		requestObject.getData().getCgC003M1s1().get(0).setcCreater(user.getUserName());
		return cgC003Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S1S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_C003_Response_S1S2>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_C003_Request_S1S2> requestObject){ 
		return cgC003Service.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 }
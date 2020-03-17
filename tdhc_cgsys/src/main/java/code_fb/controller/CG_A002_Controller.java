
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_A002_Request_C001 ;
import code_fb.request.CG_A002_Request_M1S1 ;
import code_fb.response.CG_A002_Response_C001 ;
import code_fb.response.CG_A002_Response_M1S1 ;
import code_fb.service.CG_A002_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_A002")
 public class CG_A002_Controller {
 @Autowired  
 private CG_A002_Service cgA002Service;
 /** 
	 * C0011查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0011Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_A002_Response_C001>C0011Q(@RequestBody RequestObject<EmptyTag, CG_A002_Request_C001> requestObject){ 
		return cgA002Service.C0011Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_A002_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_A002_Request_M1S1> requestObject){ 
		return cgA002Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A002_Request_M1S1> requestObject){
		requestObject.getData().getCgA002M1s1().get(0).setcCreater(user.getUserName());
	return cgA002Service.M1S11A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A002_Request_M1S1> requestObject){
		requestObject.getData().getCgA002M1s1().get(0).setcModifier(user.getUserName());
	return cgA002Service.M1S11U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A002_Request_M1S1> requestObject){
	return cgA002Service.M1S11D(requestObject.getData(),requestObject.getSession());
	}
 }
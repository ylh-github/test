
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.GYS_01_Request_M1S1;
import code_fb.response.GYS_01_Response_M1S1;
import code_fb.service.GYS_01_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser; 
 /**
  * 供应商发货单
 * @author lhb
 * @时间：2019年3月12日下午4:01:36
 */
@Controller
 @RequestMapping("GYS_01")
 public class GYS_01_Controller {
 @Autowired  
 public GYS_01_Service gys01Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, GYS_01_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, GYS_01_Request_M1S1> requestObject){ 
		return gys01Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GYS_01_Request_M1S1> requestObject){
	return gys01Service.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GYS_01_Request_M1S1> requestObject){
	return gys01Service.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GYS_01_Request_M1S1> requestObject){
	return gys01Service.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
 }
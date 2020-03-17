
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.FH_02_Request_M1S1;
import code_fb.response.FH_02_Response_M1S1;
import code_fb.service.FH_02_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser; 
 @Controller
 @RequestMapping("FH_02")
 public class FH_02_Controller {
 @Autowired  
 public FH_02_Service fh02Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, FH_02_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, FH_02_Request_M1S1> requestObject){ 
		return fh02Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S12修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S12MSG",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,FH_02_Request_M1S1> requestObject){
		requestObject.getData().getFh02M1s1().get(0).setcModifierTpFhinvoice(user.getUserName());

		requestObject.getData().getFh02M1s1().get(0).setcModifytimeTpFhinvoice(user.getWorkContext().getFinancialTime());
	return fh02Service.M1S12MSG(user,requestObject.getData(),requestObject.getSession());
	
	
	
	}
 /** 
	 * M1S13修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S13MSG",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,FH_02_Request_M1S1> requestObject){
		requestObject.getData().getFh02M1s1().get(0).setcModifierTpFhinvoice(user.getUserName());

		requestObject.getData().getFh02M1s1().get(0).setcModifytimeTpFhinvoice(user.getWorkContext().getFinancialTime());
	return fh02Service.M1S13MSG(user,requestObject.getData(),requestObject.getSession());
	}
 }
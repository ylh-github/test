
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_H003_Request_M1S1 ;
import code_fb.request.CG_H003_Request_S1S2 ;
import code_fb.request.CG_H003_Request_S2S3 ;
import code_fb.response.CG_H003_Response_M1S1 ;
import code_fb.response.CG_H003_Response_S1S2 ;
import code_fb.response.CG_H003_Response_S2S3 ;
import code_fb.service.CG_H003_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_H003")
 public class CG_H003_Controller {
 @Autowired  
 private CG_H003_Service cgH003Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H003_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_H003_Request_M1S1> requestObject){ 
		return cgH003Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S1S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H003_Response_S1S2>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_H003_Request_S1S2> requestObject){ 
		return cgH003Service.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S2S31查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S2S31Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H003_Response_S2S3>S2S31Q(@RequestBody RequestObject<EmptyTag, CG_H003_Request_S2S3> requestObject){ 
		return cgH003Service.S2S31Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S2S31增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/S2S31A",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S2S31A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H003_Request_S2S3> requestObject){
	
		requestObject.getData().getCgH003S2s3().get(0).setcCreater(user.getUserName());
		
		
		requestObject.getData().getCgH003S2s3().get(0).setcCreatetime(user.getWorkContext().getFinancialTime());
		return cgH003Service.S2S31A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S2S31修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/S2S31U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S2S31U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H003_Request_S2S3> requestObject){
	
		requestObject.getData().getCgH003S2s3().get(0).setcModifier(user.getUserName());
		
		
		requestObject.getData().getCgH003S2s3().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgH003Service.S2S31U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S2S31删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/S2S31D",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S2S31D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H003_Request_S2S3> requestObject){
	
		return cgH003Service.S2S31D(requestObject.getData(),requestObject.getSession());
	}
 }
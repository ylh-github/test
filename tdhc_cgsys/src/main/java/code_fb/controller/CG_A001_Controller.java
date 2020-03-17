
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_A001_Request_C001 ;
import code_fb.request.CG_A001_Request_M1S1 ;
import code_fb.request.CG_A001_Request_S1S2 ;
import code_fb.response.CG_A001_Response_C001 ;
import code_fb.response.CG_A001_Response_M1S1 ;
import code_fb.response.CG_A001_Response_S1S2 ;
import code_fb.service.CG_A001_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_A001")
 public class CG_A001_Controller {
 @Autowired  
 private CG_A001_Service cgA001Service;
 /** 
	 * C0011查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0011Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_A001_Response_C001>C0011Q(@RequestBody RequestObject<EmptyTag, CG_A001_Request_C001> requestObject){ 
		return cgA001Service.C0011Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_A001_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_A001_Request_M1S1> requestObject){ 
		return cgA001Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_M1S1> requestObject){
		requestObject.getData().getCgA001M1s1().get(0).setcCreater(user.getUserName());
	return cgA001Service.M1S11A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_M1S1> requestObject){
		requestObject.getData().getCgA001M1s1().get(0).setcModifier(user.getUserName());
	return cgA001Service.M1S11U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_M1S1> requestObject){
	return cgA001Service.M1S11D(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S12修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/M1S12MSG",method=RequestMethod.POST) 
//	@ResponseBody 
//	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(@RequestBody RequestObject<EmptyTag,CG_A001_Request_M1S1> requestObject){
//	return cgA001Service.M1S12MSG(requestObject.getData(),requestObject.getSession());
////	}
 /** 
	 * M1S13修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/M1S13MSG",method=RequestMethod.POST) 
//	@ResponseBody 
//	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(@RequestBody RequestObject<EmptyTag,CG_A001_Request_M1S1> requestObject){
//	return cgA001Service.M1S13MSG(requestObject.getData(),requestObject.getSession());
//	}
 /** 
	 * S1S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_A001_Response_S1S2>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_A001_Request_S1S2> requestObject){ 
		return cgA001Service.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S1S21增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_S1S2> requestObject){
		requestObject.getData().getCgA001S1s2().get(0).setcCreater(user.getUserName());
	return cgA001Service.S1S21A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_S1S2> requestObject){
		requestObject.getData().getCgA001S1s2().get(0).setcModifier(user.getUserName());
	return cgA001Service.S1S21U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_A001_Request_S1S2> requestObject){
	return cgA001Service.S1S21D(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S22修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/S1S22MSG",method=RequestMethod.POST) 
//	@ResponseBody 
//	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(@RequestBody RequestObject<EmptyTag,CG_A001_Request_S1S2> requestObject){
//	return cgA001Service.S1S22MSG(requestObject.getData(),requestObject.getSession());
//	}
 /** 
	 * S1S23修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/S1S23MSG",method=RequestMethod.POST) 
//	@ResponseBody 
//	public ResponseObject<EmptyTag, EmptyData> S1S23MSG(@RequestBody RequestObject<EmptyTag,CG_A001_Request_S1S2> requestObject){
//	return cgA001Service.S1S23MSG(requestObject.getData(),requestObject.getSession());
//	}
 }

 package code_fb.controller; 
 import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_CK_Request_M1S1;
import code_fb.response.CG_CK_Response_M1S1;
import code_fb.service.CG_CK_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser; 
 @Controller
 @RequestMapping("CG_CK")
 /**
  * 出库
  * @author lhb
  * @时间：2019年3月28日下午2:07:48
  */
 public class CG_CK_Controller {
 @Autowired  
 public CG_CK_Service cgCkService;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_CK_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_CK_Request_M1S1> requestObject){ 
		return cgCkService.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
		requestObject.getData().getCgCkM1s1().get(0).setcCreater(user.getUserName());
		requestObject.getData().getCgCkM1s1().get(0).setcCreatetime(new Date());	
		return cgCkService.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
		requestObject.getData().getCgCkM1s1().get(0).setcModifier(user.getUserName());
		requestObject.getData().getCgCkM1s1().get(0).setcModifytime(new Date());
	return cgCkService.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
	return cgCkService.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
	/** 
	 * 出库
	 *  
	 * */ 
	@RequestMapping(value="/S1S61DCC",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S61DCC(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
		return cgCkService.S1S61DCC(user,requestObject.getData(),requestObject.getSession());
	}
	/** 
	 * 框架号
	 *  
	 * */ 
	@RequestMapping(value="/S1S61GKH",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S61GKH(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
		return cgCkService.S1S61GKH(user,requestObject.getData(),requestObject.getSession());
	}
	@RequestMapping(value="/derivedData",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_CK_Response_M1S1> derivedData(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_CK_Request_M1S1> requestObject){
		return cgCkService.derivedData(user,requestObject.getData(),requestObject.getSession());
	}
 }
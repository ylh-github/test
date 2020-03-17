
 package code_fb.controller; 
 import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_Q002_Request_C001 ;
import code_fb.request.CG_Q002_Request_C002 ;
import code_fb.request.CG_Q002_Request_C003;
import code_fb.request.CG_Q002_Request_M1S1 ;
import code_fb.request.CG_Q002_Request_S1S2 ;
import code_fb.response.CG_Q002_Response_C001 ;
import code_fb.response.CG_Q002_Response_C002 ;
import code_fb.response.CG_Q002_Response_C003;
import code_fb.response.CG_Q002_Response_M1S1 ;
import code_fb.service.CG_Q002_Service;
import code_fb_cg.entity.TpCgorderst;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_Q002")
 public class CG_Q002_Controller {
 @Autowired  
 private CG_Q002_Service cgQ002Service;
 /** 
	 * C0011查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0011Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q002_Response_C001>C0011Q(@RequestBody RequestObject<EmptyTag, CG_Q002_Request_C001> requestObject){ 
		
		return cgQ002Service.C0011Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0021查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0021Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q002_Response_C002>C0021Q(@RequestBody RequestObject<EmptyTag, CG_Q002_Request_C002> requestObject){ 
		return cgQ002Service.C0021Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * C0031查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0031Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q002_Response_C003>C0031Q(@RequestBody RequestObject<EmptyTag, CG_Q002_Request_C003> requestObject){ 
		return cgQ002Service.C0031Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q002_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_Q002_Request_M1S1> requestObject){ 
		return cgQ002Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S12修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/M1S12U",method=RequestMethod.POST) 
//	@ResponseBody 
//	public ResponseObject<EmptyTag, EmptyData> M1S12U(@RequestBody RequestObject<EmptyTag,CG_Q002_Request_M1S1> requestObject){
//	return cgQ002Service.M1S12U(requestObject.getData(),requestObject.getSession());
//	}
 /** 
	 * S1S21修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q002_Request_S1S2> requestObject){
	
		
		requestObject.getData().getCgQ002S1s2().get(0).setcModifier(user.getUserName());

		requestObject.getData().getCgQ002S1s2().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgQ002Service.S1S21U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S22修改按钮
	 *  
	 * */ 
//	@RequestMapping(value="/S1S22U",method=RequestMethod.POST) 
//	@ResponseBody 
//	@RequireUser
//	public ResponseObject<EmptyTag, EmptyData> S1S22U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q002_Request_S1S2> requestObject){
//	
//		requestObject.getData().getCgQ002S1s2().get(0).setcModifier(user.getUserName());
//
//		requestObject.getData().getCgQ002S1s2().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
//		return cgQ002Service.S1S22U(requestObject.getData(),requestObject.getSession());
//	}
	//分配
	@RequestMapping(value="/S1S22U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S22U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q002_Request_S1S2> requestObject){
	
		requestObject.getData().getForMdate().setcAllotman(user.getUserName());
		requestObject.getData().getForMdate().setcAllottime(new Date());
		return cgQ002Service.S1S22U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S23修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S23MSG",method=RequestMethod.POST) 
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S23MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q002_Request_S1S2> requestObject){
	
		return cgQ002Service.S1S23MSG(requestObject.getData(),requestObject.getSession());
	}
	// 撤销分配
	@RequestMapping(value="/S1S22MSG",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser 
	public ResponseObject<EmptyTag, EmptyData> S1S22MSGCG_Q002_S1S2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,List<TpCgorderst>> requestObject){
		
		requestObject.getData().get(0).setcModifier(user.getUserName());

		requestObject.getData().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgQ002Service.S1S22MSGCG_Q002_S1S2(requestObject.getData(), requestObject.getSession());
	}
 }
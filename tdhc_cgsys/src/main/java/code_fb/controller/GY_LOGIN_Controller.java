
 package code_fb.controller; 
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

//import cn.tdhc.dao.TbCreatFormMapper;
//import cn.tdhc.entity.TbCreatForm;
import code_fb.request.GY_LOGIN_Request_M1S1;
import code_fb.response.GY_LOGIN_Response_M1S1;
import code_fb.service.GY_LOGIN_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser; 
 @Controller
 @RequestMapping("GY_LOGIN")
 public class GY_LOGIN_Controller {
 @Autowired  
 public GY_LOGIN_Service gyLoginService;
/*
@Autowired
 private TbCreatFormMapper tbCreatFormMapper;*/
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, GY_LOGIN_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, GY_LOGIN_Request_M1S1> requestObject){ 


		return gyLoginService.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GY_LOGIN_Request_M1S1> requestObject){
//	{List<TbCreatForm> tbCreatForm = tbCreatFormMapper.selectMsg("MES","GY_LOGIN","M1S1"); 



	return gyLoginService.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GY_LOGIN_Request_M1S1> requestObject){

	return gyLoginService.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,GY_LOGIN_Request_M1S1> requestObject){

	return gyLoginService.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
 }

 package code_fb.controller; 
 import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.FH_01_M1S1;
import code_fb.entity.FH_excel;
import code_fb.request.CG_H001_Request_M1S1;
import code_fb.request.FH_01_Request_M1S1;
import code_fb.request.FH_01_Request_M1S1add;
import code_fb.request.FH_01_Request_M2S2;
import code_fb.response.FH_01_Response_M1S1;
import code_fb.response.FH_01_Response_M2S2;
import code_fb.service.FH_01_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("FH_01")
 public class FH_01_Controller {
 @Autowired  
 public FH_01_Service fh01Service;
 /** 
	 * M1S11��ѯ��ť
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, FH_01_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, FH_01_Request_M1S1> requestObject){ 
		return fh01Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * ����
	 *  
	 * */ 
	@RequestMapping(value="/M1S12MSG",method=RequestMethod.POST) 
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S12MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, FH_01_Request_M1S1add> requestObject){
	
		for(FH_excel m1s1 :  requestObject.getData().getExcel()) {
			m1s1.setcCreater(user.getUserName());
			m1s1.setcCreatetime(new Date());
		}
		return fh01Service.M1S12MSG(requestObject);
		
	}
	/** 
	 * M1S11ɾ����ť
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,FH_01_Request_M1S1> requestObject){
	return fh01Service.M1S11D(user,requestObject.getData(),requestObject.getSession());
		
	
	}
 /** 
	 * M1S13�޸İ�ť
	 *  
	 * */ 
	@RequestMapping(value="/M1S12MSG2",method=RequestMethod.POST) 
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S12MSG2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,FH_01_Request_M1S1> requestObject){
		requestObject.getData().getFh01M1s1().get(0).setcModifierTpFhinvoice(user.getUserName());
		requestObject.getData().getFh01M1s1().get(0).setcModifytimeTpFhinvoice(user.getWorkContext().getFinancialTime());
	
	
	return fh01Service.M1S12MSG2(user,requestObject.getData(), requestObject.getSession());
	}
 
 /** 
	 * M2S21��ѯ��ť
	 *  
	 * */ 
	@RequestMapping(value="/M2S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, FH_01_Response_M2S2>M2S21Q(@RequestBody RequestObject<EmptyTag, FH_01_Request_M2S2> requestObject){ 
		return fh01Service.M2S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
	@RequestMapping(value="/M1S1",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S1(@RequestBody RequestObject<EmptyTag, FH_01_Request_M1S1> requestObject){ 
		return fh01Service.M1S1(requestObject.getData(),requestObject.getSession()); 
	} 

 }
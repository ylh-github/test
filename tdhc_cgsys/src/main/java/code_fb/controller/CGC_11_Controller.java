
 package code_fb.controller; 
 import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CGC_11_Request_M1S1;
import code_fb.request.CGC_11_Request_M2S2;
import code_fb.request.CGC_11_Request_M3S3;
import code_fb.response.CGC_11_Response_M1S1;
import code_fb.response.CGC_11_Response_M2S2;
import code_fb.response.CGC_11_Response_M3S3;
import code_fb.service.CGC_11_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 /**合同模板维护
 * @author lhb
 * @时间：2019年3月23日上午10:46:39
 */
@Controller
 @RequestMapping("CGC_11")
 public class CGC_11_Controller {
 @Autowired  
 public CGC_11_Service cgc11Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CGC_11_Request_M1S1> requestObject){ 
		
		System.out.println(requestObject.getData().getCgc11M1s1().get(0).getcItemdesTbCgclausedata()+
				"....."+requestObject.getData().getCgc11M1s1().get(0).getcItemidTbCgclausedata());
		return cgc11Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	}
	/**
	 * 合同类型的查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/selectContType",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M1S1> selectContType (@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return cgc11Service.selectContType(requestObject.getData(),requestObject.getSession()); 
	}
	
	/**
	 * S1S21Q联动
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M2S2>S1S21(@RequestBody RequestObject<EmptyTag, CGC_11_Request_M1S1> requestObject){ 
		System.out.println(requestObject.getData().getCgc11M1s1().get(0).getcItemdesTbCgclausedata()+
				"....."+requestObject.getData().getCgc11M1s1().get(0).getcItemidTbCgclausedata());
		return cgc11Service.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M1S1> requestObject){
		requestObject.getData().getCgc11M1s1().get(0).setcCreaterTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M1s1().get(0).setcCreatetimeTbCgclausedata(new Date());
		return cgc11Service.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M1S1> requestObject){
		requestObject.getData().getCgc11M1s1().get(0).setcModifierTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M1s1().get(0).setcModifydateTbCgclausedata(new Date());
		return cgc11Service.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M1S1> requestObject){
		return cgc11Service.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M2S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M2S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M2S2>M2S21Q(@RequestBody RequestObject<EmptyTag, CGC_11_Request_M2S2> requestObject){ 
		return cgc11Service.M2S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M2S21增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M2S21A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M2S21A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M2S2> requestObject){
		requestObject.getData().getCgc11M2s2().get(0).setcCreaterTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M2s2().get(0).setcCreatetimeTbCgclausedata(new Date());
		return cgc11Service.M2S21A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M2S21修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M2S21U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M2S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M2S2> requestObject){
		requestObject.getData().getCgc11M2s2().get(0).setcModifierTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M2s2().get(0).setcModifydateTbCgclausedata(new Date());
		return cgc11Service.M2S21U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M2S21删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M2S21D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M2S21D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M2S2> requestObject){
		return cgc11Service.M2S21D(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M3S31查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M3S31Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M3S3>M3S31Q(@RequestBody RequestObject<EmptyTag, CGC_11_Request_M3S3> requestObject){ 
		
		return cgc11Service.M3S31Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * S2S31Q
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S2S31Q",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CGC_11_Response_M3S3>S2S31Q(@RequestBody RequestObject<EmptyTag, CGC_11_Request_M2S2> requestObject){ 
		
		return cgc11Service.S2S31Q(requestObject.getData(),requestObject.getSession()); 
	} 
	
 /** 
	 * M3S31增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M3S31A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M3S31A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M3S3> requestObject){
		requestObject.getData().getCgc11M3s3().get(0).setcCreaterTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M3s3().get(0).setcCreatetimeTbCgclausedata(new Date());
		return cgc11Service.M3S31A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M3S31修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M3S31U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M3S31U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M3S3> requestObject){
		requestObject.getData().getCgc11M3s3().get(0).setcModifierTbCgclausedata(user.getUserName());
		requestObject.getData().getCgc11M3s3().get(0).setcModifydateTbCgclausedata(new Date());
		return cgc11Service.M3S31U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M3S31删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M3S31D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M3S31D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CGC_11_Request_M3S3> requestObject){
		return cgc11Service.M3S31D(user,requestObject.getData(),requestObject.getSession());
	}
 }
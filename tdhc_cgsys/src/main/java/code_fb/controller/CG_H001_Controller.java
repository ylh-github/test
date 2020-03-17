
 package code_fb.controller; 
 import java.text.ParseException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CG_H001_S1S2 ;
import code_fb.request.CG_H001_Request;
import code_fb.request.CG_H001_Request_C001 ;
import code_fb.request.CG_H001_Request_C002 ;
import code_fb.request.CG_H001_Request_C003 ;
import code_fb.request.CG_H001_Request_C004 ;
import code_fb.request.CG_H001_Request_C005 ;
import code_fb.request.CG_H001_Request_M1S1 ;
import code_fb.request.CG_H001_Request_S1S2 ;
import code_fb.response.CG_H001_Response_C001 ;
import code_fb.response.CG_H001_Response_C002 ;
import code_fb.response.CG_H001_Response_C003 ;
import code_fb.response.CG_H001_Response_C004 ;
import code_fb.response.CG_H001_Response_C005 ;
import code_fb.response.CG_H001_Response_M1S1 ;
import code_fb.response.CG_H001_Response_S1S2 ;
import code_fb.service.CG_H001_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_H001")
 public class CG_H001_Controller {
 @Autowired  
 private CG_H001_Service cgH001Service;
 /** 
	 * C0011查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0011Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_C001>C0011Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_C001> requestObject){ 
		return cgH001Service.C0011Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0021查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0021Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_C002>C0021Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_C002> requestObject){ 
		return cgH001Service.C0021Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0031查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0031Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_C003>C0031Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_C003> requestObject){ 
		
		return cgH001Service.C0031Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0041查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0041Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_C004>C0041Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_C004> requestObject){ 
		return cgH001Service.C0041Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0051查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0051Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_C005>C0051Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_C005> requestObject){ 
		return cgH001Service.C0051Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
//		String[] abc = requestObject.getData().getH002request().get(0).getcSw10();
//		for(String a :abc) {
//			System.out.println(a);
//		}
		return cgH001Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
	
	//跳转查询
	@RequestMapping(value="/selectHtInfo",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>selectHtInfo(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
//		String[] abc = requestObject.getData().getH002request().get(0).getcSw10();
//		for(String a :abc) {
//			System.out.println(a);
//		}
		System.out.println("前后台交互");
		return cgH001Service.selectHtInfo(requestObject.getData(),requestObject.getSession()); 
	} 
	
	/**
	 * M1S11查询按钮--有用户限制
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S12Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S12Q(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
		return cgH001Service.M1S12Q(user,requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * 查询按钮
	 * 查询发票总金额 > 合同金额 的合同 
	 * */ 
	@RequestMapping(value="/M1S11Q1",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S11Q1(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
		return cgH001Service.M1S11Q1(requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * 查询按钮
	 * 可以通过请购单号查询
	 * */ 
	@RequestMapping(value="/M1S11Q11",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S11Q11(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
		return cgH001Service.M1S11Q11(requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * 查询按钮
	 * 可以通过请购单号查询
	 * */ 
	@RequestMapping(value="/M1S11Q111",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S11Q111(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
		return cgH001Service.M1S11Q111(requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * 查询按钮
	 * 查询标记的合同
	 * */ 
	@RequestMapping(value="/M1S11QBJ",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_M1S1>M1S11QBJ(@RequestBody RequestObject<EmptyTag, CG_H001_Request> requestObject){ 
		return cgH001Service.M1S11QBJ(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_M1S1> requestObject){
	
		requestObject.getData().getCgH001M1s1().get(0).setcCreater(user.getUserName());
		
		
		requestObject.getData().getCgH001M1s1().get(0).setcCreatetime(user.getWorkContext().getFinancialTime());
		
		return cgH001Service.M1S11A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 * @throws ParseException 
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_M1S1> requestObject) throws ParseException{
	
		requestObject.getData().getCgH001M1s1().get(0).setcModifier(user.getUserName());
		
		
		requestObject.getData().getCgH001M1s1().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		
		return cgH001Service.M1S11U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */
	@RequireUser
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_M1S1> requestObject){
	
		requestObject.getData().getCgH001M1s1().get(0).setcModifier(user.getUserName());
		
		
		requestObject.getData().getCgH001M1s1().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		
		return cgH001Service.M1S11D(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_H001_Response_S1S2>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_H001_Request_S1S2> requestObject){ 
//		for (CG_H001_S1S2 s1s2 : requestObject.getData().getCgH001S1s2()) {
//			s1s2.setcMtid(requestObject.getData().getCgH001S1s2().get(0).getcId());
//		}
		return cgH001Service.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S1S21增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_S1S2> requestObject){
		
		requestObject.getData().getCgH001S1s2().get(0).setcCreater(user.getUserName());
		
		
		requestObject.getData().getCgH001S1s2().get(0).setcCreatetime(new Date());
		
		return cgH001Service.S1S21A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_S1S2> requestObject){
		for(CG_H001_S1S2 s1s2 : requestObject.getData().getCgH001S1s2()) {
			s1s2.setcModifier(user.getUserName());
			s1s2.setcModifytime(new Date());
		}
		return cgH001Service.S1S21U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21删除按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S21D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_S1S2> requestObject){
	
		
	requestObject.getData().getCgH001S1s2().get(0).setcModifier(user.getUserName());
		
		
		requestObject.getData().getCgH001S1s2().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgH001Service.S1S21D(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S22修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/S1S22MSG",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_H001_Request_S1S2> requestObject){
		requestObject.getData().getCgH001S1s2().get(0).setcModifier(user.getUserName());
		requestObject.getData().getCgH001S1s2().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgH001Service.S1S22MSG(requestObject.getData(),requestObject.getSession());
	}
 }
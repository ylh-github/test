
 package code_fb.controller; 
 import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_Q003_Request_C001 ;
import code_fb.request.CG_Q003_Request_C002 ;
import code_fb.request.CG_Q003_Request_C003 ;
import code_fb.request.CG_Q003_Request_C004 ;
import code_fb.request.CG_Q003_Request_C005 ;
import code_fb.request.CG_Q003_Request_C006 ;
import code_fb.request.CG_Q003_Request_C007 ;
import code_fb.request.CG_Q003_Request_C008 ;
import code_fb.request.CG_Q003_Request_C009 ;
import code_fb.request.CG_Q003_Request_M1S1 ;
import code_fb.request.CG_Q003_Request_S1S2 ;
import code_fb.response.CG_Q003_Response_C001 ;
import code_fb.response.CG_Q003_Response_C002 ;
import code_fb.response.CG_Q003_Response_C003 ;
import code_fb.response.CG_Q003_Response_C004 ;
import code_fb.response.CG_Q003_Response_C005 ;
import code_fb.response.CG_Q003_Response_C006 ;
import code_fb.response.CG_Q003_Response_C007 ;
import code_fb.response.CG_Q003_Response_C008 ;
import code_fb.response.CG_Q003_Response_C009 ;
import code_fb.response.CG_Q003_Response_M1S1 ;
import code_fb.response.CG_Q003_Response_S1S2;
import code_fb.service.CG_Q003_Service;
import code_fb_cg.entity.TpCgorderst;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CG_Q003")
 public class CG_Q003_Controller {
 @Autowired  
 private CG_Q003_Service cgQ003Service;
 
 /** 
	 * 获得用户
	 *  
	 * */ 
	@RequestMapping(value="/gerUser",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, User> C0011Q(@RequestParamUser User user){ 
		return cgQ003Service.get_user(user); 
	}  
 
 /** 
	 * C0011查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0011Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C001>C0011Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C001> requestObject){ 
		return cgQ003Service.C0011Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0021查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0021Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C002>C0021Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C002> requestObject){ 
		return cgQ003Service.C0021Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0031查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0031Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C003>C0031Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C003> requestObject){ 
		return cgQ003Service.C0031Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0041查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0041Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C004>C0041Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C004> requestObject){ 
		return cgQ003Service.C0041Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0051查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0051Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C005>C0051Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C005> requestObject){ 
		return cgQ003Service.C0051Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0061查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0061Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C006>C0061Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C006> requestObject){ 
		return cgQ003Service.C0061Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0071查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0071Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C007>C0071Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C007> requestObject){ 
		return cgQ003Service.C0071Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0081查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0081Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C008>C0081Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C008> requestObject){ 
		return cgQ003Service.C0081Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * C0091查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/C0091Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_C009>C0091Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_C009> requestObject){ 
		return cgQ003Service.C0091Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_M1S1> requestObject){ 
		return cgQ003Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
	
	@RequestMapping(value="/M1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_Q003_Response_S1S2>M1S21Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_M1S1> requestObject){ 
		return cgQ003Service.M1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q003_Request_M1S1> requestObject){
	
		requestObject.getData().getCgQ003M1s1().get(0).setcCreater(user.getUserName());

		requestObject.getData().getCgQ003M1s1().get(0).setcCreatetime(user.getWorkContext().getFinancialTime());
		return cgQ003Service.M1S11A(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q003_Request_M1S1> requestObject){
	
		requestObject.getData().getCgQ003M1s1().get(0).setcModifier(user.getUserName());

		requestObject.getData().getCgQ003M1s1().get(0).setcModifytime(user.getWorkContext().getFinancialTime());
		return cgQ003Service.M1S11U(requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestBody RequestObject<EmptyTag,CG_Q003_Request_M1S1> requestObject){
		return cgQ003Service.M1S11D(requestObject.getData(),requestObject.getSession());
	}
	
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, List<TpCgorderst>>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_Q003_Request_M1S1> requestObject){ 
		return cgQ003Service.S1S21Q(requestObject); 
	} 
	/** 
	 * S1S22修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S22MSG",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q003_Request_S1S2> requestObject){
	
		for ( int i = 0 ; i <requestObject.getData().getCgQ003S1s2().size();i ++ )
		{
			requestObject.getData().getCgQ003S1s2().get(i).setcModifier(user.getUserName());
	
			requestObject.getData().getCgQ003S1s2().get(i).setcModifytime(new Date());
		}
		return cgQ003Service.S1S22MSG(requestObject.getData(),requestObject.getSession());
	}
	@RequestMapping(value="/S1S22MSG_QXCG",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S22MSG_QXCG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q003_Request_S1S2> requestObject){
		
		for ( int i = 0 ; i <requestObject.getData().getCgQ003S1s2().size();i ++ )
		{
			requestObject.getData().getCgQ003S1s2().get(i).setcModifier(user.getUserName());
			
			requestObject.getData().getCgQ003S1s2().get(i).setcModifytime(new Date());
		}
		return cgQ003Service.S1S22MSG_QXCG(requestObject.getData(),requestObject.getSession());
	}
	
	/** 
	 * S1S23修改按钮 
	 *  
	 * */ 
	@RequestMapping(value="/S1S23U",method=RequestMethod.POST) 
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> S1S23U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_Q003_Request_S1S2> requestObject){
	
		requestObject.getData().getCgQ003S1s2().get(0).setcAllotman(user.getUserName());

		requestObject.getData().getCgQ003S1s2().get(0).setcAllottime(new Date());
		return cgQ003Service.S1S23U(requestObject.getData(),requestObject.getSession());
	}
 }
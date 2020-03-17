
 package code_fb.controller; 
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_XXLY_Request_M1S1;
import code_fb.response.CG_XXLY_Response_M1S1;
import code_fb.service.CG_XXLY_Service;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.request.Xxk_Cont_Request;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 /**信息卡信息
 * @author lhb
 * @时间：2019年3月30日上午9:24:31
 */
@Controller
 @RequestMapping("CG_XXLY")
 public class CG_XXLY_Controller {
 @Autowired  
 public CG_XXLY_Service cgXxlyService;
 /** 
	 * M1S11查询按钮-国内审核查询
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_XXLY_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, CG_XXLY_Request_M1S1> requestObject){ 
		return cgXxlyService.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 印尼审核查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S15Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_XXLY_Response_M1S1>M1S15Q(@RequestBody RequestObject<EmptyTag, CG_XXLY_Request_M1S1> requestObject){ 
		return cgXxlyService.M1S15Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 维护页面查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S16Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_XXLY_Response_M1S1>M1S16Q(@RequestBody RequestObject<EmptyTag, CG_XXLY_Request_M1S1> requestObject){ 
		return cgXxlyService.M1S16Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 *维护页面查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/searchBjInfo",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_XXLY_Response_M1S1>searchBjInfo(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return cgXxlyService.searchBjInfo(requestObject.getData(),requestObject.getSession()); 
	} 
	
	
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 信息卡提交审核
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11Submit",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11Submit(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S11Submit(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 信息卡维护页面标记处理
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/deleteBj",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> deleteBj(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.deleteBj(user,requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * M1S21D删除按钮
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S21D(user,requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 信息卡添加
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21A",method=RequestMethod.POST)
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		try {
			return cgXxlyService.M1S21A(user,requestObject.getData(),requestObject.getSession());
		} catch (Exception e) {
			System.out.println("出现的异常::"+buidler.msg(e.getMessage().toString()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
			return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
		}
	}
	/**
	 * 合同联动信息卡
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21Q",method=RequestMethod.POST)
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21Q(@RequestBody RequestObject<EmptyTag,Xxk_Cont_Request> requestObject){
	
		return cgXxlyService.M1S21Q(requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 表2查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21QS",method=RequestMethod.POST)
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21QS(@RequestBody RequestObject<EmptyTag,Xxk_Cont_Request> requestObject){
	
		return cgXxlyService.M1S21QS(requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 审核页面的联动查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21Q4",method=RequestMethod.POST)
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21Q4(@RequestBody RequestObject<EmptyTag,Xxk_Cont_Request> requestObject){
	
		return cgXxlyService.M1S21Q4(requestObject.getData(),requestObject.getSession());
	}
	/**
	 * M1S21U修改按钮
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S21U(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 根据合内贸合同号查询信息卡物资
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getInfo",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> getInfo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,Xxk_Cont_Request> requestObject){
	return cgXxlyService.getInfo(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 维护页面修改信息卡
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21UXXK",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21UXXK(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S21UXXK(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 生成信息卡页面修改
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/M1S21UXXKZ")
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S21UXXKZ(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S21UXXKZ(user,requestObject.getData(),requestObject.getSession());
	}
	
	
	/**
	 * M1S22A 添加信息卡物资
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S22A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, CG_XXLY_Response_M1S1> M1S22A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S22A(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 信息卡信息卡撤回
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11UP",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11UP(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S11UP(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 物资合并
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21HB",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21HB(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
	return cgXxlyService.M1S21HB(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 撤销合并
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21CX",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21CX(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_XXLY_Request_M1S1> requestObject){
		return cgXxlyService.M1S21CX(user,requestObject.getData(),requestObject.getSession());
	}
	
	
 }
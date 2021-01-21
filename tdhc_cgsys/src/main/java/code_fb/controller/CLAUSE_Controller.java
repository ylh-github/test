
 package code_fb.controller; 
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CLAUSE_M1S1;
import code_fb.request.CLAUSE_Request_M1S1;
import code_fb.response.CLAUSE_Response_M1S1;
import code_fb.service.CLAUSE_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("CLAUSE")
 public class CLAUSE_Controller {
 @Autowired  
 public CLAUSE_Service clauseService;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CLAUSE_Response_M1S1>M1S11Q(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CLAUSE_Request_M1S1> requestObject){ 
		return clauseService.M1S11Q(user,requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 条件查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11Q3",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CLAUSE_Response_M1S1>M1S11Q3(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CLAUSE_Request_M1S1> requestObject){ 
		return clauseService.M1S11Q3(user,requestObject.getData(),requestObject.getSession()); 
	} 
	
	/**
	 * selectContType查询合同条款
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectContType",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CLAUSE_Response_M1S1>selectContType(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CLAUSE_Request_M1S1> requestObject){ 
		return clauseService.selectContType(user,requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 下拉框查询，加用户
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getContTypeInfo",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CLAUSE_Response_M1S1>getContTypeInfo(@RequestParamUser User user , @RequestBody RequestObject<EmptyTag, CLAUSE_Request_M1S1> requestObject){ 
		return clauseService.getContTypeInfo(user, requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CLAUSE_Request_M1S1> requestObject){
		for (CLAUSE_M1S1 element : requestObject.getData().getClauseM1s1()) {
			element.setcCreaterTpCgclausedata(user.getUserName());
			element.setcCreatetimeTpCgclausedata(new Date());
		}
		return clauseService.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CLAUSE_Request_M1S1> requestObject){
		for (CLAUSE_M1S1 element : requestObject.getData().getClauseM1s1()) {
			element.setcModifierTpCgclausedata(user.getUserName());
			element.setcModifydateTpCgclausedata(new Date());
		}
		return clauseService.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 修改添加
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11UA",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11UA(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CLAUSE_Request_M1S1> requestObject){
		for (CLAUSE_M1S1 element : requestObject.getData().getClauseM1s1()) {
			element.setcCreaterTpCgclausedata(user.getUserName());
			element.setcCreatetimeTpCgclausedata(new Date());
		}
		return clauseService.M1S11UA(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CLAUSE_Request_M1S1> requestObject){
	return clauseService.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 条款修改
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11U3",method=RequestMethod.POST)
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U3(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CLAUSE_Request_M1S1> requestObject){
		for (CLAUSE_M1S1 element : requestObject.getData().getClauseM1s1()) {
			element.setcCreaterTpCgclausedata(user.getUserName());
			element.setcCreatetimeTpCgclausedata(new Date());
		}
		return clauseService.M1S11U3(user,requestObject.getData(),requestObject.getSession());
	}
 }
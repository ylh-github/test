
 package code_fb.controller; 
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.CG_MNHT_Request_M1S1 ;
import code_fb.request.CG_MNHT_Request_S1S2 ;
import code_fb.response.CG_MNHT_Response_M1S1 ;
import code_fb.response.CG_MNHT_Response_S1S2 ;
import code_fb.service.CG_MNHT_Service;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.request.TP_SimContract;
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
/**
 * 模拟合同
 * @author lhb
 * @时间：2019年4月1日下午1:58:59
 */
 @Controller
 @RequestMapping("CG_MNHT")
 public class CG_MNHT_Controller {
 @Autowired  
 public CG_MNHT_Service cgMnhtService;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S11Q(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.M1S11Q(user,requestObject.getData(),requestObject.getSession()); 
	} 
	
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q2",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S11Q2(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.M1S11Q2(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * M1S11查询按钮 信息卡查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11Q3",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S11Q3(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.M1S11Q3(user, requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * S3S32查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S3S32Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>S3S32Q(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.S3S32Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 信息卡隔段时间自动刷新
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S31Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S31Q(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return cgMnhtService.M1S31Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 拟合同隔段时间自动刷新
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S312Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_M1S1>M1S312Q(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return cgMnhtService.M1S312Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
	ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
	try {
		return cgMnhtService.M1S11A(user,requestObject.getData(),requestObject.getSession());
	} catch (Exception e) {
		System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
		return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
	}
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		try {
			return cgMnhtService.M1S11U(user,requestObject.getData(),requestObject.getSession());
		} catch (Exception e) {
			System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
			return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
		}
	}
	
	/**
	 * 退单
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21U",method=RequestMethod.POST) 
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		try {
		return cgMnhtService.M1S21U(user,requestObject.getData(),requestObject.getSession());
	} catch (Exception e) {
		System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
		return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
	}
	}
/**
 * M1S11U2提交信息卡
 * @param user
 * @param requestObject
 * @return
 */
	@RequestMapping(value="/M1S11U2",method=RequestMethod.POST) 
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
		
		return cgMnhtService.M1S11U2(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * 变更提交
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11U3")
	@RequireUser
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U3(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
		
		return cgMnhtService.M1S11U3(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
	return cgMnhtService.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
	
	/** 
	 * S1S21联查查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21QConnum",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2>S1S21QConnum(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.S1S21QConnum(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * S1S21QCause 条款查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21QCause",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2>S1S21QCause(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.S1S21QCause(requestObject.getData(),requestObject.getSession()); 
	} 
	
	/** 
	 * S3S11联查查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S3S32QConnum",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2>S3S32QConnum(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.S3S32QConnum(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * S1S21QSettlement 查询结算协议
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21QSettlement",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2>S1S21QSettlement(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject){ 
		return cgMnhtService.S1S21QSettlement(requestObject.getData(),requestObject.getSession()); 
	} 
	
 /** 
	 * S1S21查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2>S1S21Q(@RequestBody RequestObject<EmptyTag, CG_MNHT_Request_S1S2> requestObject){ 
		return cgMnhtService.S1S21Q(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * S1S21增加按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_S1S2> requestObject){
	return cgMnhtService.S1S21A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_S1S2> requestObject){
	return cgMnhtService.S1S21U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * S1S21删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/S1S21D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_S1S2> requestObject){
	return cgMnhtService.S1S21D(user,requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 信息卡页面根据合同号查询物资
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S1S12",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> M1S1S12(@RequestBody RequestObject<EmptyTag, Xxk_Cont_Request> requestObject){ 
		return cgMnhtService.M1S1S12(requestObject);
	} 
	
	/** 
	 * S1S21撤销物资
	 *  
	 * */ 
	@RequestMapping(value="/S1S21CX",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> S1S21CX(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_S1S2> requestObject){
		return cgMnhtService.S1S21CX(user,requestObject.getData(),requestObject.getSession());
	}
	/**
	 * M1S11U_XXK审核通过
	 * @param user
	 * @param requestObject
	 * @return
	 */
		@RequestMapping(value="/M1S11U_XXK",method=RequestMethod.POST) 
		@RequireUser
		@ResponseBody 
		public ResponseObject<EmptyTag, EmptyData> M1S11U_XXK(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
/*			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : requestObject.getData().getCgMnhtM1s1()) {
			cg_MNHT_M1S1.setcStatexxk("xxk03");
		}
*/			return cgMnhtService.M1S11U_XXK(user,requestObject.getData(),requestObject.getSession());
		}
		
		/**
		 * M1S11U_XXK2 审核通过
		 * @param user
		 * @param requestObject
		 * @return
		 */
		@RequestMapping(value="/M1S11U_XXK2",method=RequestMethod.POST) 
		@RequireUser
		@ResponseBody 
		public ResponseObject<EmptyTag, EmptyData> M1S11U_XXK2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,CG_MNHT_Request_M1S1> requestObject){
/*			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : requestObject.getData().getCgMnhtM1s1()) {
			cg_MNHT_M1S1.setcStatexxk("xxk03");
		}
*/			return cgMnhtService.M1S11U_XXK2(user,requestObject.getData(),requestObject.getSession());
		}
		
		
		
		
		/**
		 * 拟合同模板修改
		 * @param user
		 * @param requestObject
		 * @return
		 */
		@RequestMapping(value = "/updateContract",method=RequestMethod.POST)
		@ResponseBody 
		public ResponseObject<EmptyTag, EmptyData> updateContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,TP_SimContract> requestObject){
			ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
			try {
//				return tpCgorderbeforeService.saveContract(user, requestObject.getData(), requestObject.getSession());//模拟合同合同物资合并版
				return cgMnhtService.updateContract(user, requestObject.getData(), requestObject.getSession());
			} catch (Exception e) {
				System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
				return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
			}
		}
		/**
		 * 拟合同详情页面查询签订公司的信息
		 * @param user
		 * @param requestObject
		 * @return
		 */
		@RequestMapping(value="/getTbContractCom",method=RequestMethod.POST)
		@ResponseBody 
		public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> getTbContractCom(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,TP_SimContract> requestObject){
			ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
				return cgMnhtService.getTbContractCom(user, requestObject.getData(), requestObject.getSession());
		}
		/**
		 * 拟合同合同变更协议
		 * @param user
		 * @param requestObject
		 * @return
		 */
		@RequestMapping(value="/alterContract",method=RequestMethod.POST)
		@ResponseBody 
		public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> alterContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,TP_SimContract> requestObject){
			ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
				return cgMnhtService.alterContract(user, requestObject.getData(), requestObject.getSession());
		}
		
		
	
 }
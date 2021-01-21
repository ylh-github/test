package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.page.ControllerPage;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ZJHTrequest;
import code_fb_cg.service.TpCgcontractmttService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
@Controller
@RequestMapping("CG_CONMTT")
public class TpCgcontractmttController {
	@Autowired
	private TpCgcontractmttService tpCgcontractmttService;
	
	//追加合同
	@RequestMapping(value="/ZJHT",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> ZJHT(@RequestBody RequestObject<EmptyTag, ZJHTrequest> requestObject){ 
		return tpCgcontractmttService.ZJHT(requestObject);
	} 
	//撤销合同
	@RequestMapping(value="/SCHTWZ",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> SCHTWZ(@RequestBody RequestObject<EmptyTag, ZJHTrequest> requestObject){ 
		return tpCgcontractmttService.SCHTWZ(requestObject);
	} 
	//撤销合同
	@RequestMapping(value="/M1S11CX",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11CX(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmttService.M1S11CX(requestObject);
	} 
	//撤回信息卡
	@RequestMapping(value="/M1S11RECALL",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11RECALL(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmttService.M1S11RECALL(user,requestObject);
	} 
	//已处理
	@RequestMapping(value="/M1S11CL",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11CL(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmttService.M1S11CL(requestObject);
	} 
	//合并/拆分导入
	@RequestMapping(value="/ExcelConSt", method=RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> ExcelConSt(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject)
			throws Exception{
	for (TpCgcontractstt iterable_element : requestObject.getData().getTsttlist()){
	      iterable_element.setcCreater(user.getUserName());
	      iterable_element.setcCreatetime(new Date());
	   }
	    return tpCgcontractmttService.ExcelConSt(requestObject);
	}
	@RequestMapping(value="/M1S11CXDR", method=RequestMethod.POST)
	@ResponseBody
	@RequireUser
	public ResponseObject<EmptyTag, EmptyData> M1S11CXDR(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject)
	{
	   return tpCgcontractmttService.M1S11CXDR(requestObject);
	}
	//合并
		@RequestMapping(value="/S1S21HB",method=RequestMethod.POST)
		@ResponseBody 
		@RequireUser
		public  ResponseObject<EmptyTag, EmptyData> S1S21HB(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
			requestObject.getData().getContractstt().setcCreater(user.getUserName());
			requestObject.getData().getContractstt().setcCreatetime(new Date());
			return tpCgcontractmttService.S1S21HB(requestObject);
		} 
		//拆分
		@RequestMapping(value="/S1S21CF",method=RequestMethod.POST)
		@ResponseBody 
		@RequireUser
		public  ResponseObject<EmptyTag, EmptyData> S1S21CF(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
			requestObject.getData().getContractstt().setcModifier(user.getUserName());
			requestObject.getData().getContractstt().setcModifytime(new Date());
			return tpCgcontractmttService.S1S21CF(requestObject);
		} 
		//报关导入
		@RequestMapping(value="/Excelimpoet", method=RequestMethod.POST)
		@ResponseBody
		@RequireUser
		public ResponseObject<EmptyTag, EmptyData> Excelimpoet(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){
		for (TpCgcontractstt iterable_element : requestObject.getData().getTsttlist()){
		      iterable_element.setcCreater(user.getUserName());
		      iterable_element.setcCreatetime(new Date());
		   }
		    return tpCgcontractmttService.Excelimpoet(user,requestObject);
		}
		//信息卡审核时间统计
		@RequestMapping(value="/tJXxkSJ",method=RequestMethod.POST)
		@ResponseBody
		@ControllerPage
		public ResponseObject<EmptyTag,List<CG_MNHT_M1S1>> tJXxkSJ(@RequestBody RequestObject<EmptyTag,ContractmtList2> requestObject){
			return tpCgcontractmttService.tJXxkSJ(requestObject);
		}
}
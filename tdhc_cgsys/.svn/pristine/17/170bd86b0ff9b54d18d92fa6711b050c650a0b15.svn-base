package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgmoneyinvbook;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.InvBookList;
import code_fb_cg.request.RbookList;
import code_fb_cg.service.TpCgmoneyinvbookService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
@Controller
@RequestMapping("moneyinvbook")
public class TpCgmoneyinvbookController {

	@Autowired
	private TpCgmoneyinvbookService tpCgmoneyinvbookService;
	//合同管理发票添加
	@RequestMapping(value="/ADDfapiao",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> ADDfapiao(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, RbookList> requestObject){ 		
		requestObject.getData().getList().get(0).setcCreater(user.getUserName());
		requestObject.getData().getList().get(0).setcCreatetime(new Date());
		return tpCgmoneyinvbookService.ADDfapiao(requestObject);
	} 
	//合同管理发票查询
	@RequestMapping(value="/selectConmtid",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectConmtid(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgmoneyinvbookService.selectConmtid(requestObject);
	} 
	//查询遗漏发票
	@RequestMapping(value="/selectNullValue",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectNullValue(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgmoneyinvbookService.selectNullValue();
	} 
	//查询税率为13%的发票
	@RequestMapping(value="/selectTarate",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgmoneyinvbook>> selectTarate(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgmoneyinvbookService.selectTarate();
	} 
	//合同管理发票修改
	@RequestMapping(value="/uodateFAPIAO",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> uodateFAPIAO(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, InvBookList> requestObject){ 
		for(TpCgmoneyinvbook list : requestObject.getData().getList()) {
			list.setcModifier(user.getUserName());
			list.setcModifytime(new Date());
		}
		return tpCgmoneyinvbookService.uodateFAPIAO(requestObject);
	} 
	//退票
	@RequestMapping(value="/refundFAPIAO",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> refundFAPIAO(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, InvBookList> requestObject){ 
		for(TpCgmoneyinvbook list : requestObject.getData().getList()) {
			list.setcModifier(user.getUserName());
			list.setcModifytime(new Date());
		}
		return tpCgmoneyinvbookService.refundFAPIAO(requestObject);
	} 
	@RequestMapping(value="/deleteFAPIAO",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> deleteFAPIAO(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, InvBookList> requestObject){ 
		return tpCgmoneyinvbookService.deleteFAPIAO(requestObject);
	} 
	@RequestMapping(value="/S1S31fapiao",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S31fapiao(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, InvBookList> requestObject){ 
		for (TpCgmoneyinvbook iterable_element : requestObject.getData().getList()) {
			iterable_element.setcCreater(user.getUserName());
			iterable_element.setcCreatetime(new Date());
		}
		return tpCgmoneyinvbookService.S1S31fapiao(requestObject);
	} 
}

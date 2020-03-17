package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.request.ReveiceBookList;
import code_fb_cg.service.TpCgreceivebookService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("receivebook")
public class TpCgreceivebookController {

	@Autowired
	private TpCgreceivebookService tpCgreceivebookService;
	
	@RequestMapping(value="/insertFinashi",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> insertFinashi(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){ 
		requestObject.getData().getBookList().get(0).setcCreater(user.getUserName());
		requestObject.getData().getBookList().get(0).setcCreatetime(new Date());
		return tpCgreceivebookService.insertFinashi(requestObject);
	} 
	@RequestMapping(value="/selectList",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgreceivebook>> selectList(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){ 
		
		return tpCgreceivebookService.selectByNum(requestObject);
	} 
	@RequestMapping(value="/S1S51U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S51U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){ 
		for(TpCgreceivebook book : requestObject.getData().getBookList()) {
			book.setcModifier(user.getUserName());
			book.setcModifytime(new Date());
		}
		return tpCgreceivebookService.S1S51U(requestObject);
	} 
	@RequestMapping(value="/deleteByPrimaryKey",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){
		return tpCgreceivebookService.deleteByPrimaryKey(requestObject);
	}
	
	@RequestMapping(value="/S1S51CK",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S51CK(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){ 
		for(TpCgreceivebook book :requestObject.getData().getBookList()) {
			book.setcModifier(user.getUserName());
			book.setcModifytime(new Date());
		}
		return tpCgreceivebookService.S1S51CK(requestObject);
	}
	@RequestMapping(value="/derivedData",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgreceivebook>> derivedData(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ReveiceBookList> requestObject){ 
		return tpCgreceivebookService.derivedData(requestObject);
	}
}

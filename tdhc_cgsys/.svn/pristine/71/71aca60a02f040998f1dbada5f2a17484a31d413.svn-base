package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpContractlist;
import code_fb_cg.request.TbContractlistRequest;
import code_fb_cg.service.TpContractlistService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("/TbContract")
public class TpContractlistController {
	@Autowired
	private TpContractlistService tpContractlistService;
	
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpContractlist>> M1S11Q(@RequestBody RequestObject<EmptyTag, TbContractlistRequest> requestObject){ 	
		return tpContractlistService.M1S11Q(requestObject);
	} 
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TbContractlistRequest> requestObject){
		requestObject.getData().getContractlist().get(0).setcCreater(user.getUserName());
		requestObject.getData().getContractlist().get(0).setcCreatetime(new Date());		
		return tpContractlistService.M1S11A(requestObject);
	} 
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TbContractlistRequest> requestObject){
		requestObject.getData().getContractlist().get(0).setcModifier(user.getUserName());
		requestObject.getData().getContractlist().get(0).setcModifietime(new Date());		
		return tpContractlistService.M1S11U(requestObject);
	} 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TbContractlistRequest> requestObject){
		return tpContractlistService.M1S11D(requestObject);
	} 
	@RequestMapping(value="/ExcelConSt",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> ExcelConSt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TbContractlistRequest> requestObject){	
		return tpContractlistService.ExcelConSt(user,requestObject);
	} 
}

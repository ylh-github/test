package code_fb_cg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import code_fb_cg.entity.TpChorderst;
import code_fb_cg.page.ControllerPage;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.service.TpChorderstService;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
/**
 * 催货详情
 * @author lhb
 * @时间：2020年1月10日下午3:13:37
 */
@RequestMapping("/ch")
@RestController
public class TpChorderstController {
	@Autowired
	private TpChorderstService  tpChorderstService;
	
	
	@RequestMapping(value="/searchTpChorderst",method=RequestMethod.POST)
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpChorderst>> selConnum(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		
		return tpChorderstService.searchTpChorderst(user,requestObject);
	} 
	
	@RequestMapping(value="/searchTpChorderst2",method=RequestMethod.POST)
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpChorderst>> searchTpChorderst2(@RequestParamUser User user, @RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		return tpChorderstService.searchTpChorderst2(requestObject);
	} 

}

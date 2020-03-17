package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgship;
import code_fb_cg.request.ShipM2s2A;
import code_fb_cg.request.ShipM2s2Q;
import code_fb_cg.request.ShipM2s2U;
import code_fb_cg.service.TpCgshipService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("ship")
public class TpCgshipController {

	@Autowired
	private TpCgshipService tpCgshipService;
	
	@RequestMapping(value="/selectBycondition",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgship>> selectBycondition(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ShipM2s2Q> requestObject){ 
		return tpCgshipService.selectBycondition(requestObject);
	} 
	@RequestMapping(value="/insertShip",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> insertShip(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ShipM2s2A> requestObject){ 
		for (TpCgship iterable_element : requestObject.getData().getList()) {
			iterable_element.setcCreater(user.getUserName());
			iterable_element.setcCreatetime(new Date());
		}
		return tpCgshipService.insertShip(requestObject);
	} 
	@RequestMapping(value="/updateForShip",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> updateForShip(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ShipM2s2U> requestObject){ 
		for (TpCgship iterable_element : requestObject.getData().getList()) {
			iterable_element.setcModifier(user.getUserName());
			iterable_element.setcModifytime(new Date());
		}
		return tpCgshipService.updateForShip(requestObject);
	} 
	@RequestMapping(value="/delect",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> updateByCDR(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ShipM2s2U> requestObject){ 
		return tpCgshipService.updateByCDR(requestObject);
	} 
}

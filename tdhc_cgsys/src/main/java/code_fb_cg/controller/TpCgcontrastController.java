package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontrast;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ReveiceBookList;
import code_fb_cg.request.TpCgcontrastrequest;
import code_fb_cg.service.TpCgcontrastService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("CG_CONTRAST")
public class TpCgcontrastController {

	@Autowired
	private TpCgcontrastService tpCgcontrastService;
	
	@RequestMapping(value="/Dbdaoru",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> Dbdaoru(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){
		return tpCgcontrastService.Dbdaoru(user, requestObject);
	}
	@RequestMapping(value="/M1S1Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontrast>> M1S1Q(@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){
		return tpCgcontrastService.M1S1Q(requestObject);
	}
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21Q(@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){
		return tpCgcontrastService.S1S21Q(requestObject);
	}
	@RequestMapping(value="/selectList",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgreceivebook>> selectList(@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){
		return tpCgcontrastService.selectList(requestObject);
	}
	//一键到货
	@RequestMapping(value="/YJdaohuo",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> YJdaohuo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){ 
		return tpCgcontrastService.YJdaohuo(user,requestObject);
	} 
	//到货
	@RequestMapping(value="/S1S21DH",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21DH(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){ 
		for(TpCgcontractst tst :requestObject.getData().getExcel()) {
			tst.setcModifier(user.getUserName());
			tst.setcModifytime(new Date());
		}
		return tpCgcontrastService.S1S21DH(requestObject);
	}
	/**
	 * 
	 * 物资到货锁定
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21SD",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21SD(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){ 
		return tpCgcontrastService.S1S21SD(requestObject);
	} 
	/**
	 * 取消物资到货锁定
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21QXSD",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21QXSD(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){ 
		return tpCgcontrastService.S1S21QXSD(requestObject);
	} 
	@RequestMapping(value="/S1S51U",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S51U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){ 
		for(TpCgreceivebook book : requestObject.getData().getBookList()) {
			book.setcModifier(user.getUserName());
			book.setcModifytime(new Date());
		}
		return tpCgcontrastService.S1S51U(requestObject);
	} 
	@RequestMapping(value="/deleteByPrimaryKey",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgcontrastrequest> requestObject){
		return tpCgcontrastService.deleteByPrimaryKey(requestObject);
	}
}

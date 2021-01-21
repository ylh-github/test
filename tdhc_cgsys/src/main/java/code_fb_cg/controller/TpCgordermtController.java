package code_fb_cg.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgordermt2;
import code_fb_cg.page.ControllerPage;
import code_fb_cg.request.MtRequest;
import code_fb_cg.request.OrderMtListRequest;
import code_fb_cg.request.OrderMtrequest;
import code_fb_cg.request.Q001M1s1Qrequest;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.request.TpCgordermtM1S13_Request;
import code_fb_cg.response.OutExcelResponse;
import code_fb_cg.service.TpCgordermtService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
@Controller
@RequestMapping("CG_q002mt")
public class TpCgordermtController {
	@Autowired
	private TpCgordermtService ormtService;
	
	@RequestMapping(value="/shenhe",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> selectS1S2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, OrderMtListRequest> requestObject){ 
		for (TpCgordermt mt : requestObject.getData().getCgQ001M1s13()) {
			mt.setcAuditman(user.getUserName());
			mt.setcAudittime(new Date());
		}
		return ormtService.updateshenhe(requestObject);
	} 
	
	//预登记查询MT
	@RequestMapping(value="/SelectMt12",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> SelectMt(@RequestBody RequestObject<EmptyTag, MtRequest> requestObject){ 
		return ormtService.selectForOrdermt(requestObject);
	} 
	//导出请购单的查询
	@RequestMapping(value="/OUTorder",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<OutExcelResponse>> OUTorder(@RequestBody RequestObject<EmptyTag, OrderMtrequest> requestObject){ 
		return ormtService.OUTorder(requestObject);
	} 

	@RequestMapping(value="/ORDERNUM",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> ORDERNUM(){ 
		return ormtService.selectORDERNUM();
	} 
	//采购员页面查询功能
	@RequestMapping(value="/selectQ001_2",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_2(@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject){ 
		return ormtService.selectQ001_2(requestObject);
	} 
	//采购助理页面查询功能
	@RequestMapping(value="/selectQ001_4",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_4(@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13_Request> requestObject){ 
		return ormtService.selectQ001_4(requestObject);
	} 
	//请购单详情倒序排列
	@RequestMapping(value="/selectQ001_5",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_5(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		requestObject.getData().getCgQ001M1s13().get(0).setName(user.getUserName());
		return ormtService.selectQ001_5(requestObject);
	} 
	//请购单详情正序排列
	@RequestMapping(value="/selectQ001_6",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_6(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		requestObject.getData().getCgQ001M1s13().get(0).setName(user.getUserName());
		return ormtService.selectQ001_6(requestObject);
	} 
	/**
	 * 新修改查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_7",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_7(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		System.err.println(user.getUserName());
		requestObject.getData().getCgQ001M1s14().get(0).setName(user.getUserName());
		return ormtService.selectQ001_7(requestObject);
	}
	/**
	 * 
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_72",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_72(@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		return ormtService.selectQ001_7(requestObject);
	}
	/**
	 * 信息卡人员使用
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_8",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_8(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		requestObject.getData().getCgQ001M1s13().get(0).setName(user.getUserName());
		System.out.println(user.getUserName());
		return ormtService.selectQ001_8(requestObject);
	}
	
	
	/**
	 * 新修改查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_I",method=RequestMethod.GET) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_I(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		RequestObject<EmptyTag, TpCgordermtM1S13> r = new RequestObject<EmptyTag, TpCgordermtM1S13>();
		TpCgordermtM1S13 t = new TpCgordermtM1S13();
		t.setCgQ001M1s13(new ArrayList<TpCgordermt2>());
		r.setData(t);
		return ormtService.selectQ001_7(r);
	}
	
	/**
	 * 新修改查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_71",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectQ001_71(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
	
		return ormtService.selectQ001_71(requestObject);
	}
	
	/**
	 * 具体项目跳转查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectJutXM",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<Q001M1s1Qrequest>> selectJutXM(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
	
		return ormtService.selectJutXM(requestObject);
	}
	/**
	 * 统计催货数量
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_9",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,List<TpCgordermt>> selectQ001_9(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,EmptyData> requestObject){
		
		return ormtService.selectQ001_9(user,requestObject);
	}
	
	/**
	 * 催货查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selectQ001_10",method=RequestMethod.POST) 
	@ResponseBody 
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpCgordermt>> selectQ001_10(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		requestObject.getData().getCgQ001M1s14().get(0).setName(user.getUserName());
		return ormtService.selectQ001_10(requestObject);
	}
}
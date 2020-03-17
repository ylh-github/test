
 package code_fb.controller; 
 import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb.request.DZ_08_Request_M1S1;
import code_fb.request.DZ_08_Request_add;
import code_fb.response.DZ_08_Response_M1S1;
import code_fb.service.DZ_08_Service;
import code_fb_cg.entity.TbSupplier;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser; 
 @Controller
 @RequestMapping("DZ_08")
 public class DZ_08_Controller {
 @Autowired  
 public DZ_08_Service dz08Service;
 /** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, DZ_08_Response_M1S1>M1S11Q(@RequestBody RequestObject<EmptyTag, DZ_08_Request_M1S1> requestObject){ 
		return dz08Service.M1S11Q(requestObject.getData(),requestObject.getSession()); 
	} 
	/** 
	 * M1S11查询按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11QSupplier",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, DZ_08_Response_M1S1>M1S11QSupplier(@RequestBody RequestObject<EmptyTag, DZ_08_Request_M1S1> requestObject){ 
		return dz08Service.M1S11QSupplier(requestObject.getData(),requestObject.getSession()); 
	} 
 /** 
	 * M1S11增加按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11A",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11A(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,DZ_08_Request_M1S1> requestObject){
	return dz08Service.M1S11A(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11修改按钮
	 *  
	 * */ 
	@RequireUser
	@RequestMapping(value="/M1S11U",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11U(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,DZ_08_Request_M1S1> requestObject){
	return dz08Service.M1S11U(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S11删除按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,DZ_08_Request_M1S1> requestObject){
	return dz08Service.M1S11D(user,requestObject.getData(),requestObject.getSession());
	}
 /** 
	 * M1S12修改按钮
	 *  
	 * */ 
	@RequestMapping(value="/M1S12MSG",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,DZ_08_Request_M1S1> requestObject){
	return dz08Service.M1S12MSG(user,requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 导入按钮
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequireUser
	@RequestMapping(value="/Import_SuppExcel",method=RequestMethod.POST) 
	@ResponseBody 
	public ResponseObject<EmptyTag, EmptyData> Import_SuppExcel(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag,DZ_08_Request_add> requestObject){
		
		for (TbSupplier element : requestObject.getData().getTbSupplier()) {
			element.setcCreater(user.getUserName());
			element.setcCreatetime(new Date());
		}
		return dz08Service.Import_SuppExcel(requestObject);
	
	}
	/**
	 * 查询供应商名
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/findSupplierName", method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, List<TbSupplier>> findSupplierInfo(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return dz08Service.findSupplierInfo(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 供应商信息的填充
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getSupplierInfo", method = RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, List<TbSupplier>> getSupplierInfo(@RequestBody RequestObject<EmptyTag, TbSupplier> requestObject){
		System.out.println("==========::"+requestObject.getData().getcSupplier());
		return dz08Service.getSupplierInfo(requestObject.getData(),requestObject.getSession()); 
	} 
	/**
	 * 电汇承兑
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/obtainSupplierInfo", method = RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, List<TbSupplier>> obtainSupplierInfo(@RequestBody RequestObject<EmptyTag, TbSupplier> requestObject){
		System.out.println("==========::"+requestObject.getData().getcSupplier());
		return dz08Service.obtainSupplierInfo(requestObject.getData(),requestObject.getSession()); 
	} 
 }
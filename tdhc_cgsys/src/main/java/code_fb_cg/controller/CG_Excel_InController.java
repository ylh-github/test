package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.OutExcel;
import code_fb_cg.request.CG_EXCEL_Request;
import code_fb_cg.request.ExcelImp;
import code_fb_cg.response.CG_EXCEL_Response;
import code_fb_cg.response.OutExcelResponse;
import code_fb_cg.service.TpCgordermtService;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
/**
 * @author lhb
 * @时间：2018年8月16日上午11:28:58
 */
@Controller
@RequestMapping("CG_Q001")
public class CG_Excel_InController {
	

	@Autowired
	private TpCgordermtService ordermtService;
	@RequireUser
	@RequestMapping(value="/addExcel",method=RequestMethod.POST) 
	@ResponseBody
	public  ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelImp> requestObject){ 
		for (CG_EXCEL_Request mt : requestObject.getData().getExcel()) {
			mt.setcCreater(user.getUserName());
			mt.setcCreatetime(new Date());
		}
		return ordermtService.addExcelmt(requestObject);
	} 
	@RequireUser
	@RequestMapping(value="/addExcel2",method=RequestMethod.POST) 
	@ResponseBody
	public  ResponseObject<EmptyTag, CG_EXCEL_Response> addExcelmt2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelImp> requestObject){ 
		for (CG_EXCEL_Request mt : requestObject.getData().getExcel()) {
			mt.setcCreater(user.getUserName());
			mt.setcCreatetime(new Date());
		}
		return ordermtService.addExcelmt2(requestObject);
	} 
	
	/**
	 * 导出物资数据的查询
	 * @param lhb
	 * @param requestObject
	 * @return
	 */
	@RequireUser
	@RequestMapping(value="/out",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, List<OutExcelResponse>>  outExcelmtInfo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, OutExcel> requestObject){ 
		return ordermtService.outExcelmtInfo(requestObject);
	}
}
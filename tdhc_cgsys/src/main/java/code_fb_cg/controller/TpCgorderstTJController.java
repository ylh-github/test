package code_fb_cg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.page.ControllerPage;
import code_fb_cg.request.ReportDataRequest;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.service.TpCgorderstTJService;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
@RequestMapping("/tj")
@RestController
public class TpCgorderstTJController {
	@Autowired
	private TpCgorderstTJService tpCgorderstTJService;
	
	@RequestMapping(value="/searchTpCgorderstTJ",method=RequestMethod.POST)
	@ControllerPage
	public  ResponseObject<EmptyTag, List<TpCgorderst>>  searchTpCgorderstTJ(@RequestBody RequestObject<EmptyTag, TpCgordermtM1S13> requestObject){ 
		return tpCgorderstTJService.searchTpCgorderstTJ(requestObject);
	}
	@RequestMapping(value="/searchItemTj")
	public  ResponseObject<EmptyTag, List<TpCgorderst>>  searchItemTj(@RequestBody RequestObject<EmptyTag, ReportDataRequest> requestObject){ 
		return tpCgorderstTJService.searchItemTj(requestObject);
	}
}

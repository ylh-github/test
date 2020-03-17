package code_fb_cg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.StatisticalReport;
import code_fb_cg.request.ReportDataRequest;
import code_fb_cg.response.HomePageResponse;
import code_fb_cg.response.HompageRequest;
import code_fb_cg.service.HomePageService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

/**
 * 首页报表controller
 * @author lhb
 * @时间：2019年3月5日下午3:41:22
 */
@RequestMapping("homepage")
@Controller
public class HomePageController {

	@Autowired
	private HomePageService homePageService;

	
	/**
	 * 1.统计请购单数
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/selecttpCgordermtSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> selecttpCgordermtSum(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return homePageService.selecttpCgordermtSum(requestObject);
	} 
	
	/**
	 * 2.统计合同数
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/selectContmtSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> selectContmtSum(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return homePageService.selectContmtSum(requestObject);
	} 
	
	/**
	 * 9.根据时间查询某段时间内的合同数量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/selectContmtNum", method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> selectContmtNum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		
		System.out.println(requestObject.getData().getStartTime() + "==========" + requestObject.getData().getEndTime());
		return homePageService.selectContmtNum(requestObject);
	} 
	//3.已完成的合同数
	/**
	 * 已完成的合同
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/completedContSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> completedContSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.completedContSum(requestObject);
	}
	//4.未完成的合同数
	//5.已到货合同
	/**
	 * 统计已到货的合同量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/arrGoodsSum", method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> arrGoodsSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.arrGoodsSum(requestObject);
	}
	/**
	 * 6.已付款、
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/payContSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> payContSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.payContSum(requestObject);
	}
	/**
	 * 7.已开票
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/kaipContSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> kaipContSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.kaipContSum(requestObject);
	}
	/**
	 * 8.延迟的合同
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/deplayContSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> deplayContSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.deplayContSum(requestObject);
	}
	//10.根据到货情况，付款情况，开票情况，时间，采购员等条件进行统计
	@RequestMapping(value="/countContSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> countContSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.countContSum(requestObject);
	}
	/**
	 * 根据条件统计请购单数量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/tpCgorderstSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> tpCgorderstSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.tpCgorderstSum(requestObject);
	}
	/**
	 * 根据条件统计请购单数量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/selecttpCgorderstSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> selecttpCgorderstSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.selecttpCgorderstSum(requestObject);
	}
	/**
	 * 根据条件统计全年请购单数量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/yeartpCgorderstSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> yeartpCgorderstSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.yeartpCgorderstSum(requestObject);
	}
	//============================新版统计===============================================
	/**
	 * 每个项目对应的数量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/itemNameSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> itemNameSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.itemNameSum(requestObject);
	}
	/**
	 * 采购员分组
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/seacherManorQGXSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> seacherManorQGXSum(@RequestBody RequestObject<EmptyTag,HompageRequest> requestObject){ 
		return homePageService.seacherManorQGXSum(requestObject);
	}
	/**
	 * 请购总项查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/seacherSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> seacherSum(@RequestBody RequestObject<EmptyTag,HompageRequest> requestObject){ 
		return homePageService.seacherSum(requestObject);
	}
	
	/**
	 * 项目合同项查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/itemNameHTSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> itemNameHTSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.itemNameHTSum(requestObject);
	}
	/**
	 * 合同项采购员统计
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/searchHTManorSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> searchHTManorSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.searchHTManorSum(requestObject);
	}
	/**
	 * 合同总项统计
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/searchHTSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> searchHTSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.searchHTSum(requestObject);
	}
	/**
	 * 签订公司统计
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/searchXFSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> searchXFSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.searchXFSum(requestObject);
	}
	/**
	 * 根据时间进行出船统计
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/searchCCSum",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, HomePageResponse> searchCCSum(@RequestBody RequestObject<EmptyTag, HompageRequest> requestObject){ 
		return homePageService.searchCCSum(requestObject);
	}
	
	/**
	 * 报表数据
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/reportform",method=RequestMethod.POST)
	@ResponseBody
	public  ResponseObject<EmptyTag, StatisticalReport> reportform(@RequestBody RequestObject<EmptyTag, ReportDataRequest> requestObject){ 
		return homePageService.reportform(requestObject);
	}
}

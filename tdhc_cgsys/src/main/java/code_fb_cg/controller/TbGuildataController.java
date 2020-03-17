package code_fb_cg.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TbGuildataRequest;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.service.TbGuildataService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("/TbGuildata")
public class TbGuildataController {

	@Autowired
	private TbGuildataService tbGuildataService;
	
	@RequestMapping(value="/getInfo",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TbGuildata>> getInfo(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return tbGuildataService.getInfo(requestObject);
	} 
	
	/**
	 * 类别查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11Q",method=RequestMethod.POST) 
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TbGuildata>> M1S11Q(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S11Q(requestObject);
	} 
	/**
	 * 合同信息查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S21Q",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S21Q(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S21Q(requestObject);
	} 
	/**
	 * 物资信息查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S22Q",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> M1S22Q(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S22Q(requestObject);
	} 
	/**
	 * 合同联动物资
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S23",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S23(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.S1S23(requestObject);
	} 
	/**
	 * 类别联动合同
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> S1S21(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.S1S21(requestObject);
	} 
	/**
	 * 类别联动合同物资
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S31",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S31(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.S1S31(requestObject);
	} 
	/**
	 * 合同类别清除
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/M1S21D",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, EmptyData> M1S21D(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S21D(requestObject);
	} 
	/**
	 * 合同物资清除批量
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S31D",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, EmptyData> M1S31D(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S31D(requestObject);
	} 
	/**
	 * 删除类别
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S11D",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, EmptyData> M1S11D(@RequestBody RequestObject<EmptyTag, TbGuildataRequest> requestObject){ 
		return tbGuildataService.M1S11D(requestObject);
	} 
	/**
	 * 验收单/质保金查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/M1S22S",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag,  List<TpCgcontractmt>> M1S22S(@RequestBody RequestObject<EmptyTag, EmptyData> requestObject){ 
		return tbGuildataService.M1S22S(requestObject);
	} 
	
}

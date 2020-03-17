package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ShipM1s1Q;
import code_fb_cg.request.Xxk_Cont_Request;
import code_fb_cg.service.TpCgcontractstService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("CG_CONST")
public class TpCgcontractstController {

	@Autowired
	private TpCgcontractstService tpCgcontractstService;
	
	@RequestMapping(value="/condition",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> selConnum(@RequestBody RequestObject<EmptyTag, List<TpCgcontractmt>> requestObject){ 
		return tpCgcontractstService.selectByConST(requestObject);
	} 
	@RequestMapping(value="/selectForShip",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> selectForShip(@RequestBody RequestObject<EmptyTag, ShipM1s1Q> requestObject){ 
		return tpCgcontractstService.selectForShip(requestObject);
	} 
	
	@RequestMapping(value="/ExcelConSt",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> ExcelConSt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject) throws Exception{ 
		for (TpCgcontractst iterable_element : requestObject.getData().getExcel()) {
			iterable_element.setcCreater(user.getUserName());
			iterable_element.setcCreatetime(new Date());
		}
		return tpCgcontractstService.ExcelConSt(requestObject);
	} 
	@RequestMapping(value="/GOODSNAME",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> selectGOODSNAME(){ 
		return tpCgcontractstService.selectGOODSNAME();
	} 
	@RequestMapping(value="/QXCAIGOU",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> QXCAIGOU(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.QXCAIGOU(requestObject);
	} 
	@RequestMapping(value="/S1S21DH",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21DH(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		for(TpCgcontractst tst :requestObject.getData().getExcel()) {
			tst.setcModifier(user.getUserName());
			tst.setcModifytime(new Date());
		}
		return tpCgcontractstService.S1S21DH(requestObject);
	} 
	@RequestMapping(value="/S1S21CK",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21CK(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		for(TpCgcontractst tst :requestObject.getData().getExcel()) {
			tst.setcModifier(user.getUserName());
			tst.setcModifytime(new Date());
		}
		return tpCgcontractstService.S1S21CK(requestObject);
	} 
	@RequestMapping(value="/S1S21BF",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21BF(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21BF(requestObject);
	} 
	/**
	 * 丁12-25要求添加 出船快捷功能
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21DCC",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21DCC(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21DCC(requestObject);
	} 
	@RequestMapping(value="/S1S21GKH",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21GKH(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21GKH(requestObject);
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
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21SD(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21SD(requestObject);
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
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21QXSD(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21QXSD(requestObject);
	} 
	/**
	 * 撤销报关导入的物资
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21CXDR",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21CXDR(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21CXDR(requestObject);
	} 
	/**
	 * 采购员批注
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21PZ",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21PZ(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21PZ(requestObject);
	} 
	/**
	 * 领导批注
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21PZ2",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21PZ2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21PZ2(requestObject);
	} 
	/**
	 * 国外批注
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21PZ3",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21PZ3(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21PZ3(requestObject);
	} 
	/**
	 * 厂家信息
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21CJXX",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21CJXX(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21CJXX(requestObject);
	} 
	/**
	 * 修改厂家信息
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21CJXXXG",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21CJXXXG(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21CJXXXG(requestObject);
	} 
	/**
	 * 物资分类
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21FL",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21FL(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21FL(user,requestObject);
	} 
	/**
	 * 提前/延期
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21TY",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21TY(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21TY(requestObject);
	} 
	/**
	 * 国外查询
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21Q",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21Q(@RequestBody RequestObject<EmptyTag, ShipM1s1Q> requestObject){ 
		return tpCgcontractstService.S1S21Q(requestObject);
	} 
	@RequestMapping(value="/S1S21select",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21select(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21select(requestObject);
	} 
	/**
	 * 物资导出查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21DC",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21DC(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21DC(requestObject);
	}
	/**
	 * 对比物资导出查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21DBDC",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21DBDC(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21DBDC(requestObject);
	}
	/**
	 * 合并
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21HB",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21HB(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21HB(user,requestObject);
	}
	/**
	 * 拆分
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21CF",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21CF(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21CF(user,requestObject);
	}
	/**
	 * 撤销合并/拆分
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/S1S21CXHB",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> S1S21CXHB(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractstService.S1S21CXHB(user,requestObject);
	}
}

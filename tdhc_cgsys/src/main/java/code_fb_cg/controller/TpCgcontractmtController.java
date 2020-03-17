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
import code_fb_cg.entity.TpConrevocare;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.ContractmtList;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ZJHTrequest;
import code_fb_cg.service.TpCgcontractmtService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;
@Controller
@RequestMapping("CG_CONMT")
public class TpCgcontractmtController {

	
	@Autowired
	private TpCgcontractmtService tpCgcontractmtService;
	
	@RequestMapping(value="/selConnum",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> selConnum(@RequestBody RequestObject<EmptyTag, TpCgcontractmt> requestObject){ 
		return tpCgcontractmtService.selectByConnum(requestObject);
	} 
	@RequestMapping(value="/updateZF",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> updateZF(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList> requestObject){ 
		for (TpCgcontractmt iterable_element : requestObject.getData().getList()) {
			iterable_element.setcSw06(user.getUserName());
			iterable_element.setcSw07(new Date());
		}
		return tpCgcontractmtService.updateContractZF(requestObject);
	} 
	@RequestMapping(value="/selectByMTST",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTST(@RequestBody RequestObject<EmptyTag, ConMtAndSt> requestObject){ 
		return tpCgcontractmtService.selectByMTST(requestObject);
	} 
	
	@RequestMapping(value="/selectByMTSTT",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<ConMtAndSt>> selectByMTSTT(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ConMtAndSt> requestObject){ 
		return tpCgcontractmtService.selectByMTSTT(user,requestObject);
	} 
	//一键到货
	@RequestMapping(value="/YJdaohuo",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> YJdaohuo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		requestObject.getData().getList().get(0).setcCreater(user.getUserName());
		requestObject.getData().getList().get(0).setcCreatetime(new Date());
		return tpCgcontractmtService.YJdaohuo(requestObject);
	} 
	//一键出船
	@RequestMapping(value="/YJshipnum",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> YJshipnum(@RequestBody RequestObject<EmptyTag, code_fb_cg.request.YJshipnum> requestObject){ 
		return tpCgcontractmtService.YJshipnum(requestObject);
	} 
	//一键发票
	@RequestMapping(value="/YJfapiao",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> YJfapiao(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.YJfapiao(requestObject);
	} 
	//一键付清
	@RequestMapping(value="/YJfuqing",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> YJfuqing(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		for(TpCgcontractmt mt: requestObject.getData().getList()) {
			mt.setcCreater(user.getUserName());
			mt.setcCreatetime(new Date());
		}
		return tpCgcontractmtService.YJfuqing(requestObject);
	} 
	//验证是否出船
	@RequestMapping(value="/JYSFCC",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> JYSFCC(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.JYSFCC(requestObject);
	} 
	//追加合同
	@RequestMapping(value="/ZJHT",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> ZJHT(@RequestBody RequestObject<EmptyTag, ZJHTrequest> requestObject){ 
		return tpCgcontractmtService.ZJHT(requestObject);
	} 
	//撤销合同
	@RequestMapping(value="/SCHTWZ",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> SCHTWZ(@RequestBody RequestObject<EmptyTag, ZJHTrequest> requestObject){ 
		return tpCgcontractmtService.SCHTWZ(requestObject);
	} 
	//导出合同的查询
	@RequestMapping(value="/OUTconmt",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> OUTconmt(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.OUTconmt(requestObject);
	} 
	@RequestMapping(value="/NUM",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> NUM(){ 
		return tpCgcontractmtService.selectNUM();
	} 
	@RequestMapping(value="/SUPPLIER",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> SUPPLIER(){ 
		return tpCgcontractmtService.selectSUPPLIER();
	} 
	//合同取消采购
	@RequestMapping(value="/M1S11QX",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11QX(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.M1S11QX(requestObject);
	} 
	//采购助理查询
	@RequestMapping(value="/Q001_4",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> Q001_4(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.Q001_4(requestObject);
	} 
	//主任查询
	@RequestMapping(value="/Q001_5",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> Q001_5(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.Q001_5(requestObject);
	} 
	@RequestMapping(value="/Q001_6",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> Q001_6(@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.Q001_6(requestObject);
	} 
	//合同物资导入
	@RequestMapping(value="/ExcelConSt",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractst>> ExcelConSt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		for (TpCgcontractst iterable_element : requestObject.getData().getExcel()) {
			iterable_element.setcCreater(user.getUserName());
			iterable_element.setcCreatetime(new Date());
		}
		return tpCgcontractmtService.ExcelConSt(requestObject);
	}
	//合同分类
	@RequestMapping(value="/M1S11FL",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11FL(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11FL(user,requestObject);
	} 
	//合同错误
	@RequestMapping(value="/M1S11BS",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11BS(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11BS(requestObject);
	} 
	//提前/延期
	@RequestMapping(value="/M1S11TY",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11TY(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11TY(requestObject);
	} 
	//查询没有预计到货时间的合同
	@RequestMapping(value="/M1S11WD",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S11WD(@RequestBody RequestObject<EmptyTag, TpCgcontractmt> requestObject){ 
		return tpCgcontractmtService.M1S11WD(requestObject);
	} 
	//撤销会模拟合同
	@RequestMapping(value="/M1S11CX",method=RequestMethod.POST) 
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11CX(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11CX(requestObject);
	} 
	//合同标记处理
	@RequestMapping(value="/M1S11HTCL",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11HTCL(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11HTCL(requestObject);
	} 
	//验收单
	@RequestMapping(value="/M1S11TYSD",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11TYSD(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11TYSD(requestObject);
	} 
	//质保金
	@RequestMapping(value="/M1S11TZBJ",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> M1S11TZBJ(@RequestBody RequestObject<EmptyTag, ContractmtList2> requestObject){ 
		return tpCgcontractmtService.M1S11TZBJ(requestObject);
	} 
	//申请撤销
	@RequestMapping(value="/AppRevocation",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> AppRevocation(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.AppRevocation(user,requestObject);
	} 
	//处理撤销合同
	@RequestMapping(value="/updateRevo1",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> updateRevo1(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.updateRevo1(user,requestObject);
	} 
	//完成撤销合同
	@RequestMapping(value="/updateRevo2",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, EmptyData> updateRevo2(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.updateRevo2(user,requestObject);
	} 
	@RequestMapping(value="/selectRevocare",method=RequestMethod.POST)
	@ResponseBody 
	@RequireUser
	public  ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocare(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.selectRevocare(user,requestObject);
	} 
	//统计待处理的个数
	@RequestMapping(value="/selectRevocareNum",method=RequestMethod.POST)
	@ResponseBody 
	public  ResponseObject<EmptyTag, List<TpConrevocare>> selectRevocareNum(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ExcelCONST> requestObject){ 
		return tpCgcontractmtService.selectRevocareNum(user,requestObject);
	} 
}

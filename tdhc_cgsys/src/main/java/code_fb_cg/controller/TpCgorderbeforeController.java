package code_fb_cg.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.request.OrderBeforeRequest;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.TpCgorderbeforeCondition;
import code_fb_cg.request.YDJ_Req;
import code_fb_cg.service.TpCgorderbeforeService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
import vip.toda.piper.auth.web.client.annotation.RequireUser;

@Controller
@RequestMapping("/tab")
public class TpCgorderbeforeController {

	
	@Autowired
	private TpCgorderbeforeService   tpCgorderbeforeService;
	
	/**
	 * 条件查询
	 * 
	 */
	@RequestMapping(value= "/condition",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, List<TpCgorderbefore>> condition
	(@RequestBody RequestObject<EmptyTag, TpCgorderbeforeCondition> requestObject){
		
		
		return tpCgorderbeforeService.getByCondition(requestObject.getData(),requestObject.getSession());
	}
	
	/**
	 * 添加   预登记
	 * 
	 */
//	@RequestMapping(value="/save",method=RequestMethod.POST)
//	@ResponseBody
//	public ResponseObject<EmptyTag,EmptyData> save(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, YDJ_Req> requestObject){
//		
//		requestObject.getData().getTpCgorderbefore().setcCreater(user.getUserName());
//		requestObject.getData().getTpCgorderbefore().setcCreatetime(new Date());
//		return tpCgorderbeforeService.save(requestObject.getData()
//				,requestObject.getSession());
//	} 
	/**
	 * 添加   追加预登记
	 * 
	 */
	@RequestMapping(value="/saveAdd",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> saveAdd(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, OrderBeforeRequest> requestObject){
		return tpCgorderbeforeService.saveAdd(requestObject.getData()
				,requestObject.getSession());
	} 
	/**
	 * 删除预登记
	 * 
	 */
	@RequestMapping(value="/saveDel",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> saveDel(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, OrderBeforeRequest> requestObject){
		return tpCgorderbeforeService.saveDel(requestObject.getData(),requestObject.getSession());
	} 
	
	/**
	 * 转合同
	 * 
	 */
	@RequestMapping(value="/saveContract",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> saveContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, YDJ_Req> requestObject){
		for( int i = 0 ; i<requestObject.getData().getContractVoBean().size();i++ ){
			requestObject.getData().getContractVoBean().get(i).setcCreater(user.getUserName());
			requestObject.getData().getContractVoBean().get(i).setcCreatetime(new Date());
		}
		return tpCgorderbeforeService.saveContract(requestObject.getData(), requestObject.getSession());
	} 
	/**
	 * 转模拟合同
	 * 
	 */
	@RequestMapping(value="/saveContractt",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> saveContractt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, YDJ_Req> requestObject){
		for( int i = 0 ; i<requestObject.getData().getContractVoBean().size();i++ ){
			requestObject.getData().getContractVoBean().get(i).setcCreater(user.getUserName());
			requestObject.getData().getContractVoBean().get(i).setcCreatetime(new Date());
		}
		return tpCgorderbeforeService.saveContractt(requestObject.getData(), requestObject.getSession());
	} 
	//特殊合同
	@RequestMapping(value="/tSaveContract", method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> tsaveContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, YDJ_Req> requestObject){
		String cConnum = "TS-"+System.currentTimeMillis();
		String cConnum2 = requestObject.getData().getContractID().getcConnum();
		if(cConnum2 != null) {
			if(!"".equals(cConnum2)) {	
				cConnum2=cConnum2.replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
			}
		}
		for( int i = 0 ; i<requestObject.getData().getContractVoBean().size();i++ ){
			requestObject.getData().getContractVoBean().get(i).setcCreater(user.getUserName());
			requestObject.getData().getContractVoBean().get(i).setcCreatetime(new Date());
			if("".equals(cConnum2) || " ".equals(cConnum2) || cConnum2 == null) {
				requestObject.getData().getContractVoBean().get(i).setcConnum(cConnum);
			}else {
				requestObject.getData().getContractVoBean().get(i).setcConnum(cConnum2);
			}
			
		}
		return tpCgorderbeforeService.tSaveContract(requestObject.getData(), requestObject.getSession());
	} 
	//模拟特殊合同
	@RequestMapping(value="/tSaveContractt", method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> tsaveContractt(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, YDJ_Req> requestObject){
		String cConnum = "TS-"+System.currentTimeMillis();
		String cConnum2 = requestObject.getData().getContractID().getcConnum();
		if(cConnum2 != null) {
			if(!"".equals(cConnum2)) {	
				cConnum2=cConnum2.replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
			}
		}
		for( int i = 0 ; i<requestObject.getData().getContractVoBean().size();i++ ){
			requestObject.getData().getContractVoBean().get(i).setcCreater(user.getUserName());
			requestObject.getData().getContractVoBean().get(i).setcCreatetime(new Date());
			if("".equals(cConnum2) || " ".equals(cConnum2) || cConnum2 == null) {
				requestObject.getData().getContractVoBean().get(i).setcConnum(cConnum);
			}else {
				requestObject.getData().getContractVoBean().get(i).setcConnum(cConnum2);
			}
			
		}
		return tpCgorderbeforeService.tSaveContractt(requestObject.getData(), requestObject.getSession());
	} 
	/**
	 * 模拟合同----固定板
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/simContract", method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> simContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		try {
//			return tpCgorderbeforeService.saveContract(user, requestObject.getData(), requestObject.getSession());//模拟合同合同物资合并版
			return tpCgorderbeforeService.simContract(user, requestObject.getData(), requestObject.getSession());
		} catch (Exception e) {
			System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
			return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
		}
	} 
	
	/**
	 * 合同条款添加的模拟合同
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value = "/addContract", method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> updateContract(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		System.out.println(requestObject.getData().getcSw10());
		try {
			return tpCgorderbeforeService.updateContract(user, requestObject.getData(), requestObject.getSession());
		} catch (Exception e) {
			System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
			return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
		}
	}
	/**
	 * 动态条款拟合同修改
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/updateContractU",method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> updateContractU(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		try {
			return tpCgorderbeforeService.updateContractU(user, requestObject.getData(), requestObject.getSession());
		} catch (Exception e) {
			System.out.println("出现的异常::"+buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build());
			return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
		}
	} 
	/**
	 * 根据合同类型，合同号查询
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getTbContractInfo",method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,List<TbCgcontract> > getTbContractInfo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
			return tpCgorderbeforeService.getTbContractInfo(user, requestObject.getData(), requestObject.getSession());
	} 
	
	/**
	 * getCompInfo
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getCompInfo",method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,List<TbCgcontract> > getCompInfo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
			return tpCgorderbeforeService.getCompInfo(user, requestObject.getData(), requestObject.getSession());
	}
	/**
	 * getSupplierInfo
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/getSupplierInfo",method=RequestMethod.POST)
	@RequireUser
	@ResponseBody
	public ResponseObject<EmptyTag,List<TbCgcontract> > getSupplierInfo(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TP_SimContract> requestObject){
			return tpCgorderbeforeService.getSupplierInfo(user, requestObject.getData(), requestObject.getSession());
	} 
	
	/**
	 * 结算协议添加
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/addJSXY",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> addJSXY(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpSettlement> requestObject){
			return tpCgorderbeforeService.addJSXY(user, requestObject.getData(), requestObject.getSession());
	} 
	/**
	 * 修改结算协议
	 * @param user
	 * @param requestObject
	 * @return
	 */
	@RequestMapping(value="/updateJSXY",method=RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag,EmptyData> updateJSXY(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, TpSettlement> requestObject){
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();	
		try {
				return tpCgorderbeforeService.updateJSXY(user, requestObject.getData(), requestObject.getSession());
			} catch (Exception e) {
				return buidler.msg(e.getMessage()).errcode(Errcode.FailParameterError).session(requestObject.getSession()).build();
			}
	} 
	
	
}

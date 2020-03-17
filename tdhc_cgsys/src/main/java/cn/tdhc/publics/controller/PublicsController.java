package cn.tdhc.publics.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cn.tdhc.publics.entity.PublicsBase;
import cn.tdhc.publics.mapper.Publics;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;

@RequestMapping("/publics")
@RestController
public class PublicsController {

//	@Autowired
//	private TaskService taskservice;
	
//	@Autowired
//	private IWIP_PROJECT_Mapper iwipProjectMapper;
	
	@Autowired
	private Publics publics;
	
//	@Autowired
//	private IWIP_HMAS_Mapper iwipHmasMapper;
	
//	@RequestMapping(value = "/publicsComplete", method = RequestMethod.POST)
//	@ResponseBody
//	public ResponseObject<EmptyTag, EmptyData> publicsComplete(@RequestParamUser User user,
//			@RequestBody RequestObject<EmptyTag, PublicsBase> requestObject) {
//		
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		
//		String userid = user.getUserName();
//		
//		PublicsBase publicsBase = requestObject.getData();
//		//申购单 ,采购单区别   true 申购单,false 采购单
//		String flag = publicsBase.getFlag();
//		
//		String utoken = publicsBase.getUtoken();
//		
//		String businesskey = publicsBase.getBusinesskey();
//		
//		String reject =  publicsBase.getReject();
//		
//		String processInstanceId = publicsBase.getProcessInstanceId();
//		
//		Map<String, Object> variables = new HashMap<String, Object>();
//
//		String approve = publicsBase.getVariables();
//		
//		String flowName = publicsBase.getFlowName();
//
//		variables.put(flowName, approve);
//		
//		if(processInstanceId != null && !"".equals(processInstanceId)) {
//			
//			List<Task> list = taskservice.createTaskQuery().processInstanceId(processInstanceId).list();
//			
//			for(Task task : list) {
//				
//				taskservice.claim(task.getId(), userid);
//				taskservice.complete(task.getId(), variables);
//			}
//			 
//			String cNurl = publics.getUserCodeWithAtoken(utoken);
//			
//			List<IWIP_PROJECT_M1S1> iwipProjectUpasList = new ArrayList<IWIP_PROJECT_M1S1>();
//			
//			IWIP_PROJECT_M1S1 iwipProjectUpas = new IWIP_PROJECT_M1S1();
//			
//			iwipProjectUpas.setIwipPjdIwipSdrmt(cNurl);
//			
//			iwipProjectUpas.setIwipIdIwipSdrmt(businesskey);
//			
//			iwipProjectUpas.setReserve2IwipSdrmt(reject);
//			
//			if("false".equals(approve)) {
//				
//				iwipProjectUpas.setAudZtIwipSdrmt("4");
//			}
//			
//			iwipProjectUpasList.add(iwipProjectUpas);
//			
//			int rows = iwipProjectMapper.M1S12MSGIWIP_PROJECT_M1S1(iwipProjectUpasList);
//			
//		}else {
//			
//			if(businesskey.contains("-FD")) {
//				businesskey = businesskey.split("-")[0];
//			}
//			
//			List<IWIP_PROJECT_M1S1> iwipProjectM = iwipProjectMapper.M1S11QIWIP_PROJECT_M1S1(businesskey, new ArrayList<String>(), new IWIP_PROJECT_M1S1(), null, null);
//			
//			for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//				
//				List<Task> list = taskservice.createTaskQuery().processInstanceId(iwipProject.getReserve1IwipSdrmt()).list();
//			
//				for(Task task : list) {
//					
//					taskservice.claim(task.getId(), userid);
//					taskservice.complete(task.getId(), variables);
//				}
//			}
//			String cNurl = publics.getUserCodeWithAtoken(utoken);
//			
//			List<IWIP_HMAS_M1S1> iwipHmasList = new ArrayList<IWIP_HMAS_M1S1>();
//			
//			IWIP_HMAS_M1S1 iwipHmas = new IWIP_HMAS_M1S1();
//			
//			//采购签字
//			if("countryAllot".equals(flowName)) {
//				
//				iwipHmas.setHtCnameIwipHtrmt(cNurl);
//				
//				iwipHmas.setTemtIdIwipHtrmt(businesskey);
//				
//				iwipHmas.setReserve2IwipHtrmt(reject);
//				
//				for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//					
//					iwipProject.setIwipDpIwipSdrmt(cNurl);
//					
//					if("false".equals(approve)) {
//						
//						iwipProject.setAudZtIwipSdrmt("4");
//					}
//					
//					iwipProject.setReserve2IwipSdrmt(reject);
//				}
//			}
//			//项目负责人签字
//			if("projectflag".equals(flowName)) {
//				
//				iwipHmas.setHtZnameIwipHtrmt(cNurl);
//				iwipHmas.setTemtIdIwipHtrmt(businesskey);
//				iwipHmas.setReserve2IwipHtrmt(reject);
//				
//				for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//					
//					iwipProject.setIwipPjpIwipSdrmt(cNurl);
//					
//
//					if("false".equals(approve)) {
//						
//						iwipProject.setAudZtIwipSdrmt("4");
//					}
//					
//					iwipProject.setReserve2IwipSdrmt(reject);
//				}
//			}
//			//分管负责人
//			if("wareFlag".equals(flowName)) {
//				iwipHmas.setHtFnameIwipHtrmt(cNurl);
//				iwipHmas.setTemtIdIwipHtrmt(businesskey);
//				iwipHmas.setReserve2IwipHtrmt(reject);
//				
//				for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//					
//					iwipProject.setIwipPjIwipSdrmt(cNurl);
//					
//
//					if("false".equals(approve)) {
//						
//						iwipProject.setAudZtIwipSdrmt("4");
//					}
//					
//					iwipProject.setReserve2IwipSdrmt(reject);
//				}
//			}
//			
//			iwipHmasList.add(iwipHmas);
//			
//			if(iwipHmasList.size() != 0) {
//				
//				int rows = iwipHmasMapper.M1S11UIWIP_HMAS_M1S1(iwipHmasList);
//				
//				int row = iwipProjectMapper.M1S12MSGIWIP_PROJECT_M1S1(iwipProjectM);
//				
//				if(rows < 0 && row < 0) {
//					
//					return builder.data(null).msg("审批成功").errcode(Errcode.Success).session("").build();
//				
//				}else {
//					
//					return builder.data(null).msg("审批失败").errcode(Errcode.FailParameterError).session("").build();
//				}
//			}
//		}
//		return builder.data(null).msg("审批成功").errcode(Errcode.Success).session("").build();
//	}
	
	
//	@RequestMapping(value = "/publicsEnd", method = RequestMethod.POST)
//	@ResponseBody
//	public ResponseObject<EmptyTag, EmptyData> publicsEnd(@RequestParamUser User user,
//			@RequestBody RequestObject<EmptyTag, PublicsBase> requestObject) {
//			
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		
//		PublicsBase publicsBase = requestObject.getData();
//		
//		String processInstanceId = publicsBase.getBusinesskey();
//		
//		List<IWIP_PROJECT_M1S1> iwipProjectM = iwipProjectMapper.M1S11QIWIP_PROJECT_M1S1(processInstanceId, new ArrayList<String>(), new IWIP_PROJECT_M1S1(), null, null);
//		
//		for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//			
//			List<Task> list = taskservice.createTaskQuery().processInstanceId(iwipProject.getReserve1IwipSdrmt()).list();
//			
//			for(Task task : list) {
//				
//				taskservice.complete(task.getId());
//			}
//		}
//		for(IWIP_PROJECT_M1S1 iwipProject : iwipProjectM) {
//			
//			iwipProject.setAudZtIwipSdrmt("2");
//			
//			iwipProject.setAudTimeIwipSdrmt(new Date());
//			
//			iwipProject.setAudUserIwipSdrmt(user.getUserName());
//		}
//		
//		int row = iwipProjectMapper.M1S12MSGIWIP_PROJECT_M1S1(iwipProjectM);
//		
//		if(row < 0) {
//			return builder.data(null).msg("success").errcode(Errcode.Success).session("").build();
//		}else {
//			return builder.data(null).msg("error").errcode(Errcode.FailParameterError).session("").build();
//		}
//	}
}

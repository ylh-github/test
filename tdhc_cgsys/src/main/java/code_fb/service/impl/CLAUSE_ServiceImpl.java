
 package code_fb.service.impl;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CLAUSE_M1S1;
import code_fb.mapper.CLAUSE_Mapper;
import code_fb.request.CLAUSE_Request_M1S1;
import code_fb.response.CLAUSE_Response_M1S1;
import code_fb.service.CLAUSE_Service;
import code_fb_cg.util.ClauseUtil;
import code_fb_customer.CLAUSE_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

 @Service("clauseService")
 public class CLAUSE_ServiceImpl implements CLAUSE_Service
 {
 	@Autowired
 	@Qualifier("clauseMapper")
 	public CLAUSE_Mapper frcDao;
   @Autowired
   public  CLAUSE_Customer clauseCustomer;
 public ResponseObject<EmptyTag, CLAUSE_Response_M1S1> M1S11Q(User user,CLAUSE_Request_M1S1 clauseRequestM1s1, String session){
 String msg="查询成功";
 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CLAUSE_Response_M1S1 data = new CLAUSE_Response_M1S1();
 	clauseRequestM1s1.getClauseM1s1().get(0).setcCreaterTpCgclausedata(user.getUserName());
// 	System.out.println("条款查询内容:::"+clauseRequestM1s1.getClauseM1s1().get(0).getcClause());
 data.setClauseM1s1(frcDao.M1S11QCLAUSE_M1S1(clauseRequestM1s1.getClauseM1s1().get(0)));
 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 
 @Override
 public ResponseObject<EmptyTag, CLAUSE_Response_M1S1> M1S11Q3(User user, CLAUSE_Request_M1S1 clauseRequestM1s1, String session) {
	 String msg="查询成功";
	 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
	 	CLAUSE_Response_M1S1 data = new CLAUSE_Response_M1S1();
	 	clauseRequestM1s1.getClauseM1s1().get(0).setcCreaterTpCgclausedata(user.getUserName());
	 	System.out.println("条款查询内容:::"+clauseRequestM1s1.getClauseM1s1().get(0).getcClause());
	 data.setClauseM1s1(frcDao.M1S11QCLAUSE_M1S3(clauseRequestM1s1.getClauseM1s1().get(0)));
	 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11A(User user,CLAUSE_Request_M1S1 clauseRequestM1s1 ,String session){
String msg=""; 
 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CLAUSE_M1S1>clauseM1s1 = clauseRequestM1s1.getClauseM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  clauseCustomer.check_M1S11A_CLAUSE_M1S1(clauseRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 { 
 if(ss_ret0.length() > 10){ 
}
//工具类 去空格
 ClauseUtil clauseUtil = new ClauseUtil();
 List<CLAUSE_M1S1> addClause = clauseUtil.addClause(user,clauseM1s1);
 List<CLAUSE_M1S1> m1s11qclause_M1S11 = frcDao.M1S11QCLAUSE_M1S11(addClause.get(0));
 if(m1s11qclause_M1S11.size() >0) {
	 return builder.errcode(Errcode.FailParameterError).msg("条款已存在，请修改合同名称").session(session).build();	
 }
 	row0= frcDao.M1S11ACLAUSE_M1S1(addClause);
 	if(row0 < 0){
 msg = msg+"CLAUSE_M1S1保存成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11U(User user,CLAUSE_Request_M1S1 clauseRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CLAUSE_M1S1>clauseM1s1 = clauseRequestM1s1.getClauseM1s1();
 	int row0 = 0;
   String ss_ret0 = "";
 	ss_ret0 =  clauseCustomer.check_M1S11U_CLAUSE_M1S1(clauseRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}
 	if("admin".equals(clauseM1s1.get(0).getcCreaterTpCgclausedata())&& "admin".equals(clauseM1s1.get(0).getcModifierTpCgclausedata())) {
		return builder.errcode(Errcode.FailParameterError).msg("属于母版信息，您无权修改！！！").session(session).build();
	}
 	row0= frcDao.M1S11UCLAUSE_M1S1(clauseM1s1);
 	if(row0 < 0) {
 msg = msg+"CLAUSE_M1S1修改成功" ;

 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else {
 		return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();	
 }
 }
 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,CLAUSE_Request_M1S1 clauseRequestM1s1 ,String session){String msg=""; 

 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 	int row0 = 0;
 List<CLAUSE_M1S1>clauseM1s1 = clauseRequestM1s1.getClauseM1s1();
   String ss_ret0 = "";
 	ss_ret0 =  clauseCustomer.check_M1S11D_CLAUSE_M1S1(clauseRequestM1s1);
 if (ss_ret0.indexOf("success") != -1)
 {
 if(ss_ret0.length() > 10){ 
  msg = ss_ret0; 
}

 	if("admin".equals(clauseM1s1.get(0).getcCreaterTpCgclausedata())&& "admin".equals(clauseM1s1.get(0).getcModifierTpCgclausedata())) {
 		return builder.errcode(Errcode.FailParameterError).msg("属于母版信息，您无权删除").session(session).build();
 	}
 	row0= frcDao.M1S11DCLAUSE_M1S1(clauseM1s1);
 	if(row0 < 0) {
 msg = msg+"CLAUSE_M1S1删除成功" ;

 	}else{
 	return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 	}
 }
 	else
 {
 		return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();	
 }
 	return builder.errcode(Errcode.Success).msg(msg).session(session).build(); 
 }
 
public ResponseObject<EmptyTag, CLAUSE_Response_M1S1> selectContType(User user,CLAUSE_Request_M1S1 clauseRequestM1s1, String session) {
	 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
	 	CLAUSE_Response_M1S1 data = new CLAUSE_Response_M1S1();
	 	//clauseRequestM1s1.getClauseM1s1().get(0) 
	 	System.out.println("用户：："+user.getUserName());
	 data.setClauseM1s1(frcDao.selectContType(user.getUserName()));
	 return builder.data(data).msg("查询成功！！！").errcode(Errcode.Success).session(session).build();
}
public ResponseObject<EmptyTag, CLAUSE_Response_M1S1> getContTypeInfo(User user, CLAUSE_Request_M1S1 clauseRequestM1s1, String session) {
	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
 	CLAUSE_Response_M1S1 data = new CLAUSE_Response_M1S1();
 	clauseRequestM1s1.getClause_M1S1().setcCreaterTpCgclausedata(user.getUserName());
 data.setClauseM1s1(frcDao.getContTypeInfo(clauseRequestM1s1.getClause_M1S1()));
 return builder.data(data).msg("查询成功！！！").errcode(Errcode.Success).session(session).build();
}


public ResponseObject<EmptyTag, EmptyData> M1S11UA(User user, CLAUSE_Request_M1S1 clauseRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
 List<CLAUSE_M1S1>clauseM1s1 = clauseRequestM1s1.getClauseM1s1();
	//工具类 去空格
	 ClauseUtil clauseUtil = new ClauseUtil();
	 List<CLAUSE_M1S1> addClause = clauseUtil.addClause(user,clauseM1s1);
	 List<CLAUSE_M1S1> check = frcDao.M1S11QCLAUSE_CHECK(addClause.get(0));
	 if(check.size()>0) {
		 return builder.msg("该合同模板类型已存在，请修改合同类型！！！").errcode(Errcode.FailParameterError).session(session).build();
	 }
	 int M1S1 = frcDao.M1S11ACLAUSE_M1S1(addClause);
	 if(M1S1>0) {
		 return builder.errcode(Errcode.FailParameterError).msg("修改添加失败！！！").session(session).build();	
	 }
	 
	return builder.msg("修改添加成功！！！").errcode(Errcode.Success).session(session).build();
}

@Override
@Transactional
public ResponseObject<EmptyTag, EmptyData> M1S11U3(User user, CLAUSE_Request_M1S1 clauseRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	try {
		 List<CLAUSE_M1S1> clauseM1s1 = clauseRequestM1s1.getClauseM1s1();
		 if("".equals(clauseRequestM1s1.getcClause()) || clauseRequestM1s1.getcClause() == null) {
			 return builder.errcode(Errcode.FailParameterError).msg("条款修改失败，请录入查询条件中条款内容！！！").session(session).build();
		 }
		 if("".equals(clauseRequestM1s1.getcNewclause()) || clauseRequestM1s1.getcNewclause() == null) {
			 return builder.errcode(Errcode.FailParameterError).msg("条款修改失败，请录入新条款内容！！！！").session(session).build();
		 }
		 String cClause = clauseRequestM1s1.getcClause().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		 String cNewclause = clauseRequestM1s1.getcNewclause().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		 for (CLAUSE_M1S1 clause_M1S1 : clauseM1s1) {
			 ClauseUtil clauseUtil = new ClauseUtil();
			 clauseUtil.containsReplace(clause_M1S1,cClause,cNewclause);
		}
		 int m1s11uclause_M1S1 = frcDao.M1S11UCLAUSE_M1S1(clauseM1s1);
		 if(m1s11uclause_M1S1>0) {
			 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			 return builder.msg("条款修改失败！！").errcode(Errcode.FailParameterError).build();
		 }

		
	} catch (Exception e) {
		e.printStackTrace();
		// TODO: handle exception
		return builder.msg("出现异常！！！！").errcode(Errcode.FailParameterError).build();
	}
	
	return builder.msg("条款修改失败！！").errcode(Errcode.Success).build();
}

 }
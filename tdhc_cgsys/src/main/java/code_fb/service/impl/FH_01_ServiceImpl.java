
package code_fb.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.FH_01_M1S1;
import code_fb.entity.FH_01_M1S11;
import code_fb.entity.FH_01_M1S12;
import code_fb.entity.FH_01_M2S2;
import code_fb.entity.FH_excel;
import code_fb.mapper.FH_01_Mapper;
import code_fb.request.FH_01_Request_M1S1;
import code_fb.request.FH_01_Request_M1S1add;
import code_fb.request.FH_01_Request_M2S2;
import code_fb.response.FH_01_Response_M1S1;
import code_fb.response.FH_01_Response_M2S2;
import code_fb.service.FH_01_Service;
import code_fb_customer.FH_01_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("fh01Service")
public class FH_01_ServiceImpl implements FH_01_Service {
	@Autowired
	@Qualifier("fh01Mapper")
	public FH_01_Mapper frcDao;
	@Autowired
	public FH_01_Customer fh01Customer;

	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S11Q(FH_01_Request_M1S1 fh01RequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		FH_01_Response_M1S1 data = new FH_01_Response_M1S1();
		data.setFh01M1s1(frcDao.M1S11QFH_01_M1S1(fh01RequestM1s1.getFh01M1s1().get(0)));
		System.out.println();
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S1(
			FH_01_Request_M1S1 fh01RequestM1s1, String session) {
		String msg ="";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		FH_01_Request_M1S1 data = new FH_01_Request_M1S1();
		FH_01_Request_M2S2 fm2  = new FH_01_Request_M2S2();
		List<FH_01_M1S1> fh01M1s1 = fh01RequestM1s1.getFh01M1s1();
		FH_01_M2S2 fh01 = new FH_01_M2S2();
		for(FH_01_M1S1 fh_01_M1S1 :  fh01M1s1) {
			fh01.setcConnumTpCgcontractmt(fh_01_M1S1.getcConnumTpFhinvoice());
		}
		fm2.setFh01M2s2(frcDao.getHTH(fh01));
		return builder.data(fm2).msg(msg).errcode(Errcode.Success).session(session).build();
	}



	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S12MSG2(User user, FH_01_Request_M1S1 fh01RequestM1s1, String session) {
		String msg = "";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//1.页面上查询对应的发货单数据------fh01RequestM1s1
		FH_01_Request_M1S1 data = new FH_01_Request_M1S1();
		List<FH_01_M1S1> fh01M1s1 = fh01RequestM1s1.getFh01M1s1();
		//2.根据发货单查询合同对应的数据 ------List<合同实体类>
		FH_01_Request_M2S2 fm2  = new FH_01_Request_M2S2();
		for (FH_01_M1S1 fh_01_M1S1 : fh01M1s1) {//前台传过来的值
			FH_01_M2S2 fh01 = new FH_01_M2S2();
			fh01.setcConnumTpCgcontractmt(fh_01_M1S1.getcConnumTpFhinvoice());
			fh01.setcGoodsnameTpCgcontractst(fh_01_M1S1.getcGoodsnameTpFhmateials());
			fh01.setcSpecTpCgcontractst(fh_01_M1S1.getcSpecTpFhmateials());
			fh01.setcUnitTpCgcontractst(fh_01_M1S1.getcUnitTpFhmateials());
			fh01.setcGoodsnumTpCgcontractst(fh_01_M1S1.getcNumTpFhmateials());
			fh01.setcID(fh_01_M1S1.getcIdTpFhmateials());
			fh01.setcSupplierTpCgcontractmt(fh_01_M1S1.getcFhdwnameTpFhinvoice());
			System.out.println("数据："+fh01.getcConnumTpCgcontractmt());
			System.out.println("数据："+fh01.getcGoodsnameTpCgcontractst());
			System.out.println("数据："+fh01.getcGoodsnumTpCgcontractst());
			System.out.println("数据："+fh01.getcSpecTpCgcontractst());
			System.out.println("数据："+fh01.getcID());
			List<FH_01_M2S2> a =  frcDao.M1S12Q(fh01);
			if(	a.size() == 0){
				frcDao.getHTInfo(fh01.getcID());
			}else {
				frcDao.M1S13MSGFH_01_M1S1(fh01.getcID());
			}
			System.err.println("---------------------------------");
		}
		return builder.errcode(Errcode.Success).session(session).build();
		}

	 public ResponseObject<EmptyTag, FH_01_Response_M2S2> M2S21Q(FH_01_Request_M2S2 fh01RequestM2s2, String session){
		 String msg="查询成功";
		 	ResponseObjectBuilder builder  = ResponseObjectBuilder.create();
		 	FH_01_Response_M2S2 data = new FH_01_Response_M2S2();
		 	
		 data.setFh01M2s2(frcDao.M2S21QFH_01_M2S2(fh01RequestM2s2.getFh01M2s2().get(0) ,fh01RequestM2s2.getStartTime(),fh01RequestM2s2.getEndTime()));
		 
		 return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
		 
		 
		 }
	
	public ResponseObject<EmptyTag, FH_01_Response_M1S1> M1S12MSG(
			RequestObject<EmptyTag, FH_01_Request_M1S1add> requestObject) {
		// TODO Auto-generated method stub
		@SuppressWarnings("rawtypes")
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		Date data =null;
		List<FH_01_M1S11> fh01M1s11 = new ArrayList<FH_01_M1S11>();
		List<FH_01_M1S12> fh01m1s12 =new ArrayList<FH_01_M1S12>();
		
		for(FH_excel m1s11 :  requestObject.getData().getExcel()) {
			FH_01_M1S11 m1 = new FH_01_M1S11();
			FH_01_M1S12 m2 = new FH_01_M1S12();
			m1.setcShname(m1s11.getcShname());
			m1.setcShaddress(m1s11.getcShaddress());
			m1.setcFhdwname(m1s11.getcFhdwname());
			m1.setcRemark(m1s11.getcRemark());
			if(m1s11.getcConnum() == null || "".equals(m1s11.getcConnum())) {
				m1.setcConnum(null);
			}else {
				m1.setcConnum(m1s11.getcConnum());
			}
			m2.setcGoodsname(m1s11.getcGoodsname());
			
			if(m1s11.getcSpec() == null || "".equals(m1s11.getcSpec())) {
				m2.setcSpec(null);
			}else {
				m2.setcSpec(m1s11.getcSpec());
			}
			if(m1s11.getcUnit() == null || "".equals(m1s11.getcUnit())) {
				m2.setcUnit(null);
			}else {
				m2.setcUnit(m1s11.getcUnit());
			}
			if(m1s11.getcNum() == null || "".equals(m1s11.getcNum())) {
				m2.setcNum(null);
			}else {
				m2.setcNum(m1s11.getcNum());
			}
			if(m1s11.getcConnum() == null || "".equals(m1s11.getcConnum())) {
				m2.setcConnum(null);
			}else {
				m2.setcConnum(m1s11.getcConnum());
			}
			RandomId ri = new RandomId();
			String id = ri.getRandomId();
				m1.setcFhinvoiceid(id);
				m2.setcFhinvoiceid(id);
				
			
			fh01M1s11.add(m1);
			fh01m1s12.add(m2);	
		
		}
	
		
		
		int rows = frcDao.M1S12MSG(fh01M1s11);
		int rows1 = frcDao.M1S12MSG2(fh01m1s12);
		
		if (rows == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
		}else {
		return builder.errcode((String) Errcode.Success).msg("导入成功").build();
	}



	
	}
	 public ResponseObject<EmptyTag, EmptyData> M1S11D(User user,FH_01_Request_M1S1 fh01RequestM1s1 ,String session){String msg=""; 

	 ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	 	int row0 = 0;
	 List<FH_01_M1S1>fh01M1s1 = fh01RequestM1s1.getFh01M1s1();
	   String ss_ret0 = "";
	 	ss_ret0 =  fh01Customer.check_M1S11D_FH_01_M1S1(fh01RequestM1s1);
	 if (ss_ret0.indexOf("success") != -1)
	 {
	 if(ss_ret0.length() > 10){ 
	  msg = ss_ret0; 
	}

	 	row0= frcDao.M1S11DFH_01_M1S1(fh01M1s1);
	 	if(row0 < 0) {
	 msg = msg+"FH_01_M1S1删除成功" ;

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



	

	





}

package code_fb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_Q002_S1S2;
import code_fb.mapper.CG_Q002_Mapper;
import code_fb.request.CG_Q002_Request_C001;
import code_fb.request.CG_Q002_Request_C002;
import code_fb.request.CG_Q002_Request_C003;
import code_fb.request.CG_Q002_Request_M1S1;
import code_fb.request.CG_Q002_Request_S1S2;
import code_fb.response.CG_Q002_Response_C001;
import code_fb.response.CG_Q002_Response_C002;
import code_fb.response.CG_Q002_Response_C003;
import code_fb.response.CG_Q002_Response_M1S1;
import code_fb.service.CG_Q002_Service;
import code_fb_cg.entity.TpCgorderst;
import code_fb_customer.CG_Q002_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgQ002Service")
public class CG_Q002_ServiceImpl implements CG_Q002_Service {
	@Autowired
	@Qualifier("cgQ002Mapper")
	private CG_Q002_Mapper frcDao;
	CG_Q002_Customer cgQ002Customer = new CG_Q002_Customer();

	public ResponseObject<EmptyTag, CG_Q002_Response_C001> C0011Q(CG_Q002_Request_C001 cgQ002RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q002_Response_C001 data = new CG_Q002_Response_C001();
		data.setCgQ002C001(frcDao.C0011QCG_Q002_C001("采购部门", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q002_Response_C002> C0021Q(CG_Q002_Request_C002 cgQ002RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q002_Response_C002 data = new CG_Q002_Response_C002();
		data.setCgQ002C002(frcDao.C0021QCG_Q002_C002("采购员", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}
	

	public ResponseObject<EmptyTag, CG_Q002_Response_C003> C0031Q(CG_Q002_Request_C003 cgQ002RequestC003, 
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q002_Response_C003 data = new CG_Q002_Response_C003();
		data.setCgQ002C003(frcDao.C0021QCG_Q002_C003("审核状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q002_Response_M1S1> M1S11Q(CG_Q002_Request_M1S1 cgQ002RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q002_Response_M1S1 data = new CG_Q002_Response_M1S1();
		data.setCgQ002M1s1(frcDao.M1S11QCG_Q002_M1S1(cgQ002RequestM1s1.getCgQ002M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S12U(CG_Q002_Request_M1S1 cgQ002RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21U(CG_Q002_Request_S1S2 cgQ002RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S22U(CG_Q002_Request_S1S2 cgQ002RequestS1s2, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		
		List<CG_Q002_S1S2> cgQ002S1s2 = cgQ002RequestS1s2.getCgQ002S1s2();
		CG_Q002_S1S2 forMdate = cgQ002RequestS1s2.getForMdate();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ002Customer.check_S1S22U_CG_Q002_S1S2(cgQ002S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S22UCG_Q002_S1S2(cgQ002S1s2,forMdate);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}


	public ResponseObject<EmptyTag, EmptyData> S1S23MSG(CG_Q002_Request_S1S2 cgQ002RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		return builder.errcode(Errcode.Success).session(session).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> S1S22MSGCG_Q002_S1S2(List<TpCgorderst> orstList, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row = frcDao.S1S22MSGCG_Q002_S1S2(orstList);
		if(row == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
		}
		return builder.errcode(Errcode.Success).msg("撤销成功").build();
	}
}
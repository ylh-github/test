
package code_fb.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_A003_M1S1;
import code_fb.mapper.CG_A003_Mapper;
import code_fb.request.CG_A003_Request_C001;
import code_fb.request.CG_A003_Request_C002;
import code_fb.request.CG_A003_Request_C003;
import code_fb.request.CG_A003_Request_M1S1;
import code_fb.response.CG_A003_Response_C001;
import code_fb.response.CG_A003_Response_C002;
import code_fb.response.CG_A003_Response_C003;
import code_fb.response.CG_A003_Response_M1S1;
import code_fb.service.CG_A003_Service;
import code_fb_customer.CG_A003_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgA003Service")
public class CG_A003_ServiceImpl implements CG_A003_Service {
	@Autowired
	@Qualifier("cgA003Mapper")
	private CG_A003_Mapper frcDao;
	CG_A003_Customer cgA003Customer = new CG_A003_Customer();

	public ResponseObject<EmptyTag, CG_A003_Response_C001> C0011Q(CG_A003_Request_C001 cgA003RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A003_Response_C001 data = new CG_A003_Response_C001();
		data.setCgA003C001(frcDao.C0011QCG_A003_C001("公司名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A003_Response_C002> C0021Q(CG_A003_Request_C002 cgA003RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A003_Response_C002 data = new CG_A003_Response_C002();
		data.setCgA003C002(frcDao.C0021QCG_A003_C002("启用状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A003_Response_C003> C0031Q(CG_A003_Request_C003 cgA003RequestC003,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A003_Response_C003 data = new CG_A003_Response_C003();
		data.setCgA003C003(frcDao.C0031QCG_A003_C003("物资类型", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A003_Response_M1S1> M1S11Q(CG_A003_Request_M1S1 cgA003RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A003_Response_M1S1 data = new CG_A003_Response_M1S1();
		data.setCgA003M1s1(frcDao.M1S11QCG_A003_M1S1(cgA003RequestM1s1.getCgA003M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A003_Request_M1S1 cgA003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A003_M1S1> cgA003M1s1 = cgA003RequestM1s1.getCgA003M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA003Customer.check_M1S11A_CG_A003_M1S1(cgA003M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgA003Customer.check_M1S11A_CG_A003_M1S1(cgA003M1s1))) {
				cgA003M1s1.get(0).setcCreatetime(new Date());
				row0 = frcDao.M1S11ACG_A003_M1S1(cgA003M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A003_Request_M1S1 cgA003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_A003_M1S1> cgA003M1s1 = cgA003RequestM1s1.getCgA003M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgA003Customer.check_M1S11U_CG_A003_M1S1(cgA003M1s1);
		if ("success".equals(ss_ret0)) {
			cgA003M1s1.get(0).setcModifytime(new Date());
			row0 = frcDao.M1S11UCG_A003_M1S1(cgA003M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A003_Request_M1S1 cgA003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A003_M1S1> cgA003M1s1 = cgA003RequestM1s1.getCgA003M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA003Customer.check_M1S11D_CG_A003_M1S1(cgA003M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DCG_A003_M1S1(cgA003M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
}
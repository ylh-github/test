
package code_fb.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_A004_M1S1;
import code_fb.mapper.CG_A004_Mapper;
import code_fb.request.CG_A004_Request_C001;
import code_fb.request.CG_A004_Request_C002;
import code_fb.request.CG_A004_Request_C003;
import code_fb.request.CG_A004_Request_C004;
import code_fb.request.CG_A004_Request_C005;
import code_fb.request.CG_A004_Request_C006;
import code_fb.request.CG_A004_Request_M1S1;
import code_fb.response.CG_A004_Response_C001;
import code_fb.response.CG_A004_Response_C002;
import code_fb.response.CG_A004_Response_C003;
import code_fb.response.CG_A004_Response_C004;
import code_fb.response.CG_A004_Response_C005;
import code_fb.response.CG_A004_Response_C006;
import code_fb.response.CG_A004_Response_M1S1;
import code_fb.service.CG_A004_Service;
import code_fb_customer.CG_A004_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgA004Service")
public class CG_A004_ServiceImpl implements CG_A004_Service {
	@Autowired
	@Qualifier("cgA004Mapper")
	private CG_A004_Mapper frcDao;
	CG_A004_Customer cgA004Customer = new CG_A004_Customer();

	public ResponseObject<EmptyTag, CG_A004_Response_C001> C0011Q(CG_A004_Request_C001 cgA004RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C001 data = new CG_A004_Response_C001();
		data.setCgA004C001(frcDao.C0011QCG_A004_C001("启用状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_C002> C0021Q(CG_A004_Request_C002 cgA004RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C002 data = new CG_A004_Response_C002();
		data.setCgA004C002(frcDao.C0021QCG_A004_C002("性别", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_C003> C0031Q(CG_A004_Request_C003 cgA004RequestC003,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C003 data = new CG_A004_Response_C003();
		data.setCgA004C003(frcDao.C0031QCG_A004_C003("教育程度", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_C004> C0041Q(CG_A004_Request_C004 cgA004RequestC004,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C004 data = new CG_A004_Response_C004();
		data.setCgA004C004(frcDao.C0041QCG_A004_C004("部门名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_C005> C0051Q(CG_A004_Request_C005 cgA004RequestC005,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C005 data = new CG_A004_Response_C005();
		data.setCgA004C005(frcDao.C0051QCG_A004_C005("政治面貌", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_C006> C0061Q(CG_A004_Request_C006 cgA004RequestC006,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_C006 data = new CG_A004_Response_C006();
		data.setCgA004C006(frcDao.C0061QCG_A004_C006("公司名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A004_Response_M1S1> M1S11Q(CG_A004_Request_M1S1 cgA004RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A004_Response_M1S1 data = new CG_A004_Response_M1S1();
		data.setCgA004M1s1(frcDao.M1S11QCG_A004_M1S1(cgA004RequestM1s1.getCgA004M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A004_Request_M1S1 cgA004RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A004_M1S1> cgA004M1s1 = cgA004RequestM1s1.getCgA004M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA004Customer.check_M1S11A_CG_A004_M1S1(cgA004M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgA004Customer.check_M1S11A_CG_A004_M1S1(cgA004M1s1))) {
				cgA004M1s1.get(0).setcCreatetime(new Date());
				row0 = frcDao.M1S11ACG_A004_M1S1(cgA004M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A004_Request_M1S1 cgA004RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_A004_M1S1> cgA004M1s1 = cgA004RequestM1s1.getCgA004M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgA004Customer.check_M1S11U_CG_A004_M1S1(cgA004M1s1);
		if ("success".equals(ss_ret0)) {
			cgA004M1s1.get(0).setcModifytime(new Date());
			row0 = frcDao.M1S11UCG_A004_M1S1(cgA004M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A004_Request_M1S1 cgA004RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A004_M1S1> cgA004M1s1 = cgA004RequestM1s1.getCgA004M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA004Customer.check_M1S11D_CG_A004_M1S1(cgA004M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DCG_A004_M1S1(cgA004M1s1);
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
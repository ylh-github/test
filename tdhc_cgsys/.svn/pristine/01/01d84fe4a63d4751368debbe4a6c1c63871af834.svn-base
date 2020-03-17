
package code_fb.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_A002_M1S1;
import code_fb.mapper.CG_A002_Mapper;
import code_fb.request.CG_A002_Request_C001;
import code_fb.request.CG_A002_Request_M1S1;
import code_fb.response.CG_A002_Response_C001;
import code_fb.response.CG_A002_Response_M1S1;
import code_fb.service.CG_A002_Service;
import code_fb_customer.CG_A002_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgA002Service")
public class CG_A002_ServiceImpl implements CG_A002_Service {
	@Autowired
	@Qualifier("cgA002Mapper")
	private CG_A002_Mapper frcDao;
	CG_A002_Customer cgA002Customer = new CG_A002_Customer();

	public ResponseObject<EmptyTag, CG_A002_Response_C001> C0011Q(CG_A002_Request_C001 cgA002RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A002_Response_C001 data = new CG_A002_Response_C001();
		data.setCgA002C001(frcDao.C0011QCG_A002_C001("启用状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, CG_A002_Response_M1S1> M1S11Q(CG_A002_Request_M1S1 cgA002RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A002_Response_M1S1 data = new CG_A002_Response_M1S1();
		data.setCgA002M1s1(frcDao.M1S11QCG_A002_M1S1(cgA002RequestM1s1.getCgA002M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A002_Request_M1S1 cgA002RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A002_M1S1> cgA002M1s1 = cgA002RequestM1s1.getCgA002M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA002Customer.check_M1S11A_CG_A002_M1S1(cgA002M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgA002Customer.check_M1S11A_CG_A002_M1S1(cgA002M1s1))) {
				cgA002M1s1.get(0).setcCreatetime(new Date());
				row0 = frcDao.M1S11ACG_A002_M1S1(cgA002M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A002_Request_M1S1 cgA002RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_A002_M1S1> cgA002M1s1 = cgA002RequestM1s1.getCgA002M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgA002Customer.check_M1S11U_CG_A002_M1S1(cgA002M1s1);
		if ("success".equals(ss_ret0)) {
			cgA002M1s1.get(0).setcModifiytime(new Date());
			row0 = frcDao.M1S11UCG_A002_M1S1(cgA002M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A002_Request_M1S1 cgA002RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A002_M1S1> cgA002M1s1 = cgA002RequestM1s1.getCgA002M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA002Customer.check_M1S11D_CG_A002_M1S1(cgA002M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DCG_A002_M1S1(cgA002M1s1);
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
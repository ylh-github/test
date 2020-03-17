
package code_fb.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_H004_Mapper;
import code_fb.request.CG_H004_Request_C001;
import code_fb.request.CG_H004_Request_M1S1;
import code_fb.request.CG_H004_Request_S2S3;
import code_fb.response.CG_H004_Response_C001;
import code_fb.response.CG_H004_Response_M1S1;
import code_fb.response.CG_H004_Response_S2S3;
import code_fb.response.TpCgreBookResponse;
import code_fb.service.CG_H004_Service;
import code_fb_customer.CG_H004_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgH004Service")
public class CG_H004_ServiceImpl implements CG_H004_Service {
	@Autowired
	@Qualifier("cgH004Mapper")
	private CG_H004_Mapper frcDao;
	
	@Autowired
	private CG_H004_Customer cgH004Customer;

	public ResponseObject<EmptyTag, CG_H004_Response_C001> C0011Q(CG_H004_Request_C001 cgH004RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H004_Response_C001 data = new CG_H004_Response_C001();
		data.setCgH004C001(frcDao.C0011QCG_H004_C001("预计到货说明", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H004_Response_M1S1> M1S11Q(CG_H004_Request_M1S1 cgH004RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H004_Response_M1S1 data = new CG_H004_Response_M1S1();
		data.setCgH004M1s1(frcDao.M1S11QCG_H004_M1S1(cgH004RequestM1s1.getCgH004M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H004_Response_S2S3> S2S31Q(CG_H004_Request_S2S3 cgH004RequestS2s3,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H004_Response_S2S3 data = new CG_H004_Response_S2S3();
		data.setCgH004S2s3(frcDao.S2S31QCG_H004_S2S3(cgH004RequestS2s3.getCgH004S2s3().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S2S31A(TpCgreBookResponse tpCgreBookResponse, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH004Customer.check_S2S31A_CG_H004_S2S3(tpCgreBookResponse);
		
		String[] results = ss_ret0.split("-");
		
		ss_ret0 = results[0];
		
		if ("success".equals(ss_ret0))
			if ("success".equals(ss_ret0)) {
//				row0 = frcDao.S2S31ACG_H004_S2S3(cgH004S2s3);
				if ("0".equals(results[1])) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S2S31U(TpCgreBookResponse tpCgreBookResponse, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH004Customer.check_S2S31U_CG_H004_S2S3(tpCgreBookResponse);
		
		String[] results = ss_ret0.split("-");
		
		ss_ret0 = results[0];
		
		if ("success".equals(ss_ret0)) {
			//row0 = frcDao.S2S31UCG_H004_S2S3(cgH004S2s3);
			if ("0".equals(results[1])) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S2S31D(TpCgreBookResponse tpCgreBookResponse, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH004Customer.check_S2S31D_CG_H004_S2S3(tpCgreBookResponse);
		
		String[] results = ss_ret0.split("-");
		
		ss_ret0 = results[0];
		
		if ("success".equals(ss_ret0)) {
			if ("0".equals(results[1])) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
}
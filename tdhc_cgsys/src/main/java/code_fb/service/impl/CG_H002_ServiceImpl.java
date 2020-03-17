
package code_fb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_H002_S2S3;
import code_fb.mapper.CG_H002_Mapper;
import code_fb.request.CG_H002_Request_C001;
import code_fb.request.CG_H002_Request_M1S1;
import code_fb.request.CG_H002_Request_S1S2;
import code_fb.request.CG_H002_Request_S2S3;
import code_fb.response.CG_H002_Response_C001;
import code_fb.response.CG_H002_Response_M1S1;
import code_fb.response.CG_H002_Response_S1S2;
import code_fb.response.CG_H002_Response_S2S3;
import code_fb.service.CG_H002_Service;
import code_fb_customer.CG_H002_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgH002Service")
public class CG_H002_ServiceImpl implements CG_H002_Service {
	@Autowired
	@Qualifier("cgH002Mapper")
	private CG_H002_Mapper frcDao;
	
	@Autowired
	private CG_H002_Customer cG_H002_Customer;
	
	CG_H002_Customer cgH002Customer = new CG_H002_Customer();

	public ResponseObject<EmptyTag, CG_H002_Response_C001> C0011Q(CG_H002_Request_C001 cgH002RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H002_Response_C001 data = new CG_H002_Response_C001();
		data.setCgH002C001(frcDao.C0011QCG_H002_C001("预计到货说明", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H002_Response_M1S1> M1S11Q(CG_H002_Request_M1S1 cgH002RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H002_Response_M1S1 data = new CG_H002_Response_M1S1();
		data.setCgH002M1s1(frcDao.M1S11QCG_H002_M1S1(cgH002RequestM1s1.getCgH002M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H002_Response_S1S2> S1S21Q(CG_H002_Request_S1S2 cgH002RequestS1s2,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H002_Response_S1S2 data = new CG_H002_Response_S1S2();
		data.setCgH002S1s2(frcDao.S1S21QCG_H002_S1S2(cgH002RequestS1s2.getCgH002S1s2().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H002_Response_S2S3> S2S31Q(CG_H002_Request_S2S3 cgH002RequestS2s3,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H002_Response_S2S3 data = new CG_H002_Response_S2S3();
		data.setCgH002S2s3(frcDao.S2S31QCG_H002_S2S3(cgH002RequestS2s3.getCgH002S2s3().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

//	public ResponseObject<EmptyTag, EmptyData> S2S31A(CG_H002_Request_S2S3 cgH002RequestS2s3, String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		int row0 = 0;
//		List<CG_H002_S2S3> cgH002S2s3 = cgH002RequestS2s3.getCgH002S2s3();
//		String ss_ret0 = "";
//		ss_ret0 = cG_H002_Customer.check_S2S31A_CG_H002_S2S3(cgH002S2s3);
//		String[] results = ss_ret0.split("-");
//		ss_ret0 = results[0];
//		if ("success".equals(ss_ret0))
//			if ("success".equals(ss_ret0)) {
//				//row0 = frcDao.S2S31ACG_H002_S2S3(cgH002S2s3);
//				if ("0".equals(results[1])) {
//				} else {
//					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//				}
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//			}
//		return builder.errcode(Errcode.Success).session(session).build();
//	}

	public ResponseObject<EmptyTag, EmptyData> S2S31U(CG_H002_Request_S2S3 cgH002RequestS2s3, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_H002_S2S3> cgH002S2s3 = cgH002RequestS2s3.getCgH002S2s3();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cG_H002_Customer.check_S2S31U_CG_H002_S2S3(cgH002S2s3);
		
		String[] results = ss_ret0.split("-");
		
		ss_ret0 = results[0];
		
		
		if ("success".equals(ss_ret0)) {
			//row0 = frcDao.S2S31UCG_H002_S2S3(cgH002S2s3);
			if ("0".equals(results[1])) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S2S31D(CG_H002_Request_S2S3 cgH002RequestS2s3, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_H002_S2S3> cgH002S2s3 = cgH002RequestS2s3.getCgH002S2s3();
		String ss_ret0 = "";
		ss_ret0 = cG_H002_Customer.check_S2S31D_CG_H002_S2S3(cgH002S2s3);
		
		String[] results = ss_ret0.split("-");
		
		ss_ret0 = results[0];
		
		if ("success".equals(ss_ret0)) {
			//row0 = frcDao.S2S31DCG_H002_S2S3(cgH002S2s3);
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
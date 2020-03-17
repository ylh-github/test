
package code_fb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.FH_01_M1S1;
import code_fb.entity.FH_02_M1S1;
import code_fb.mapper.FH_02_Mapper;
import code_fb.request.FH_02_Request_M1S1;
import code_fb.response.FH_02_Response_M1S1;
import code_fb.service.FH_02_Service;
import code_fb_customer.FH_02_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("fh02Service")
public class FH_02_ServiceImpl implements FH_02_Service {
	@Autowired
	@Qualifier("fh02Mapper")
	public FH_02_Mapper frcDao;
	@Autowired
	public FH_02_Customer fh02Customer;

	public ResponseObject<EmptyTag, FH_02_Response_M1S1> M1S11Q(FH_02_Request_M1S1 fh02RequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		FH_02_Response_M1S1 data = new FH_02_Response_M1S1();
		data.setFh02M1s1(frcDao.M1S11QFH_02_M1S1(fh02RequestM1s1.getFh02M1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(User user, FH_02_Request_M1S1 fh02RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<FH_02_M1S1> fh02M1s1 = fh02RequestM1s1.getFh02M1s1();
		int row0 = 0;
		for(FH_02_M1S1 m1s1: fh02M1s1) {
			m1s1.setcStateTpFhmateials("2");	
			}
		String ss_ret0 = "";
		ss_ret0 = fh02Customer.check_M1S12MSG_FH_02_M1S1(fh02M1s1);
		if (ss_ret0.indexOf("success") != -1) {
			row0 = frcDao.M1S12MSGFH_02_M1S1(fh02M1s1);
			if (row0 < 0) {
			

				return builder.errcode(Errcode.Success).msg("批准").session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(User user, FH_02_Request_M1S1 fh02RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<FH_02_M1S1> fh02M1s1 = fh02RequestM1s1.getFh02M1s1();
		int row0 = 0;
		for(FH_02_M1S1 m1s1: fh02M1s1) {
			m1s1.setcStateTpFhmateials("3");	
			}
		String ss_ret0 = "";
		ss_ret0 = fh02Customer.check_M1S13MSG_FH_02_M1S1(fh02M1s1);
		if (ss_ret0.indexOf("success") != -1) {
			

			row0 = frcDao.M1S13MSGFH_02_M1S1(fh02M1s1);
			if (row0 < 0) {
				msg = msg + "驳回";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}
}
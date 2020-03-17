
package code_fb.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.GYS_DJB_M1S1;
import code_fb.mapper.GYS_DJB_Mapper;
import code_fb.request.GYS_DJB_Request_M1S1;
import code_fb.response.GYS_DJB_Response_M1S1;
import code_fb.service.GYS_DJB_Service;
import code_fb_customer.GYS_DJB_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("gysDjbService")
public class GYS_DJB_ServiceImpl implements GYS_DJB_Service {
	@Autowired
	@Qualifier("gysDjbMapper")
	public GYS_DJB_Mapper frcDao;
	@Autowired
	public GYS_DJB_Customer gysDjbCustomer;

	public ResponseObject<EmptyTag, GYS_DJB_Response_M1S1> M1S11Q(GYS_DJB_Request_M1S1 gysDjbRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		GYS_DJB_Response_M1S1 data = new GYS_DJB_Response_M1S1();
		data.setGysDjbM1s1(frcDao.M1S11QGYS_DJB_M1S1(gysDjbRequestM1s1.getGysDjbM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, GYS_DJB_Request_M1S1 gysDjbRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<GYS_DJB_M1S1> gysDjb = new ArrayList<GYS_DJB_M1S1>();
		GYS_DJB_M1S1 m1s1 = gysDjbRequestM1s1.getGysDjbM1s11();	
//		m1s1.setcState("0");
		gysDjb.add(m1s1);
		System.out.println(gysDjb.size());
		for (GYS_DJB_M1S1 gys_DJB_M1S1 : gysDjb) {
			gys_DJB_M1S1.setcState("0");
		}
		row0 = frcDao.M1S11AGYS_DJB_M1S1(gysDjb);
			
		
		 return builder.errcode(Errcode.FailParameterError).msg("添加成功").session(session).build();
		
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, GYS_DJB_Request_M1S1 gysDjbRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<GYS_DJB_M1S1> gysDjbM1s1 = gysDjbRequestM1s1.getGysDjbM1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = gysDjbCustomer.check_M1S11U_GYS_DJB_M1S1(gysDjbRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11UGYS_DJB_M1S1(gysDjbM1s1);
			if (row0 < 0) {
				msg = msg + "GYS_DJB_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, GYS_DJB_Request_M1S1 gysDjbRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<GYS_DJB_M1S1> gysDjbM1s1 = gysDjbRequestM1s1.getGysDjbM1s1();
		String ss_ret0 = "";
		ss_ret0 = gysDjbCustomer.check_M1S11D_GYS_DJB_M1S1(gysDjbRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11DGYS_DJB_M1S1(gysDjbM1s1);
			if (row0 < 0) {
				msg = msg + "GYS_DJB_M1S1删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}
}
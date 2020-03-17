
package code_fb.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_A001_M1S1;
import code_fb.entity.CG_A001_S1S2;
import code_fb.mapper.CG_A001_Mapper;
import code_fb.request.CG_A001_Request_C001;
import code_fb.request.CG_A001_Request_M1S1;
import code_fb.request.CG_A001_Request_S1S2;
import code_fb.response.CG_A001_Response_C001;
import code_fb.response.CG_A001_Response_M1S1;
import code_fb.response.CG_A001_Response_S1S2;
import code_fb.service.CG_A001_Service;
import code_fb_customer.CG_A001_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgA001Service")
public class CG_A001_ServiceImpl implements CG_A001_Service {
	@Autowired
	@Qualifier("cgA001Mapper")
	private CG_A001_Mapper frcDao;
	CG_A001_Customer cgA001Customer = new CG_A001_Customer();

	public ResponseObject<EmptyTag, CG_A001_Response_C001> C0011Q(CG_A001_Request_C001 cgA001RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A001_Response_C001 data = new CG_A001_Response_C001();
		data.setCgA001C001(frcDao.C0011QCG_A001_C001("启用状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_A001_Response_M1S1> M1S11Q(CG_A001_Request_M1S1 cgA001RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A001_Response_M1S1 data = new CG_A001_Response_M1S1();
		data.setCgA001M1s1(frcDao.M1S11QCG_A001_M1S1(cgA001RequestM1s1.getCgA001M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_A001_Request_M1S1 cgA001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A001_M1S1> cgA001M1s1 = cgA001RequestM1s1.getCgA001M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_M1S11A_CG_A001_M1S1(cgA001M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgA001Customer.check_M1S11A_CG_A001_M1S1(cgA001M1s1))) {
				cgA001M1s1.get(0).setcCreatetime(new Date());
				cgA001M1s1.get(0).setcItemid(cgA001M1s1.get(0).getcItemid().trim());
				row0 = frcDao.M1S11ACG_A001_M1S1(cgA001M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_A001_Request_M1S1 cgA001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_A001_M1S1> cgA001M1s1 = cgA001RequestM1s1.getCgA001M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_M1S11U_CG_A001_M1S1(cgA001M1s1);
		if ("success".equals(ss_ret0)) {
			cgA001M1s1.get(0).setcModifydate(new Date());
			row0 = frcDao.M1S11UCG_A001_M1S1(cgA001M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_A001_Request_M1S1 cgA001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A001_M1S1> cgA001M1s1 = cgA001RequestM1s1.getCgA001M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_M1S11D_CG_A001_M1S1(cgA001M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DCG_A001_M1S1(cgA001M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	
//	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(CG_A001_Request_M1S1 cgA001RequestM1s1, String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		List<CG_A001_M1S1> cgA001M1s1 = cgA001RequestM1s1.getCgA001M1s1();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgA001Customer.check_M1S12MSG_CG_A001_M1S1(cgA001M1s1);
//		if ("success".equals(ss_ret0)) {
//			row0 = frcDao.M1S12MSGCG_A001_M1S1(cgA001M1s1);
//			if (row0 < 0) {
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
//		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestM1s1.getCgA001S1s2();
//		if(cgA001S1s2 !=null || cgA001S1s2.size() !=0) {
//			int row1 = 0;
//			String ss_ret1 = "";
//			ss_ret1 = cgA001Customer.check_M1S12MSG_CG_A001_S1S2(cgA001S1s2);
//			if ("success".equals(ss_ret1)) {
//				row1 = frcDao.M1S12MSGCG_A001_S1S2(cgA001S1s2);
//				if (row1 < 0) {
//				} else {
//					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//				}
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg(ss_ret1).session(session).build();
//			}
//		}
//		
//		return builder.errcode(Errcode.Success).session(session).build();
//	}
//
//	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(CG_A001_Request_M1S1 cgA001RequestM1s1, String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		List<CG_A001_M1S1> cgA001M1s1 = cgA001RequestM1s1.getCgA001M1s1();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgA001Customer.check_M1S13MSG_CG_A001_M1S1(cgA001M1s1);
//		if ("success".equals(ss_ret0)) {
//			row0 = frcDao.M1S13MSGCG_A001_M1S1(cgA001M1s1);
//			if (row0 < 0) {
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
//		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestM1s1.getCgA001S1s2();
//		int row1 = 0;
//		String ss_ret1 = "";
//		ss_ret1 = cgA001Customer.check_M1S13MSG_CG_A001_S1S2(cgA001S1s2);
//		if ("success".equals(ss_ret1)) {
//			row1 = frcDao.M1S13MSGCG_A001_S1S2(cgA001S1s2);
//			if (row1 < 0) {
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret1).session(session).build();
//		}
//		return builder.errcode(Errcode.Success).session(session).build();
//	}

	public ResponseObject<EmptyTag, CG_A001_Response_S1S2> S1S21Q(CG_A001_Request_S1S2 cgA001RequestS1s2,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_A001_Response_S1S2 data = new CG_A001_Response_S1S2();
		data.setCgA001S1s2(frcDao.S1S21QCG_A001_S1S2(cgA001RequestS1s2.getCgA001S1s2().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21A(CG_A001_Request_S1S2 cgA001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestS1s2.getCgA001S1s2();
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_S1S21A_CG_A001_S1S2(cgA001S1s2);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgA001Customer.check_S1S21A_CG_A001_S1S2(cgA001S1s2))) {
				cgA001S1s2.get(0).setcCreatetime(new Date());
				cgA001S1s2.get(0).setcSubitemid(cgA001S1s2.get(0).getcSubitemid().trim());
				cgA001S1s2.get(0).setcSubitemdes(cgA001S1s2.get(0).getcSubitemdes().trim());
				if(cgA001S1s2.get(0).getcSw01() != null && cgA001S1s2.get(0).getcSw01() != "") {
					cgA001S1s2.get(0).setcSw01(cgA001S1s2.get(0).getcSw01().trim());
				}
				if(cgA001S1s2.get(0).getcSw02() != null && cgA001S1s2.get(0).getcSw02() != "") {
					cgA001S1s2.get(0).setcSw02(cgA001S1s2.get(0).getcSw02().trim());
				}
				if(cgA001S1s2.get(0).getcSw03() != null && cgA001S1s2.get(0).getcSw03() != "") {
					cgA001S1s2.get(0).setcSw03(cgA001S1s2.get(0).getcSw03().trim());
				}
				if(cgA001S1s2.get(0).getcSw04() != null && cgA001S1s2.get(0).getcSw04() != "") {
					cgA001S1s2.get(0).setcSw04(cgA001S1s2.get(0).getcSw04().trim());
				}
				row0 = frcDao.S1S21ACG_A001_S1S2(cgA001S1s2);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21U(CG_A001_Request_S1S2 cgA001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestS1s2.getCgA001S1s2();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_S1S21U_CG_A001_S1S2(cgA001S1s2);
		if ("success".equals(ss_ret0)) {
			cgA001S1s2.get(0).setcModifydate(new Date());
			cgA001S1s2.get(0).setcSubitemid(cgA001S1s2.get(0).getcSubitemid().trim());
			cgA001S1s2.get(0).setcSubitemdes(cgA001S1s2.get(0).getcSubitemdes().trim());
			if(cgA001S1s2.get(0).getcSw01() != null && cgA001S1s2.get(0).getcSw01() != "") {
				cgA001S1s2.get(0).setcSw01(cgA001S1s2.get(0).getcSw01().trim());
			}
			if(cgA001S1s2.get(0).getcSw02() != null && cgA001S1s2.get(0).getcSw02() != "") {
				cgA001S1s2.get(0).setcSw02(cgA001S1s2.get(0).getcSw02().trim());
			}
			if(cgA001S1s2.get(0).getcSw03() != null && cgA001S1s2.get(0).getcSw03() != "") {
				cgA001S1s2.get(0).setcSw03(cgA001S1s2.get(0).getcSw03().trim());
			}
			if(cgA001S1s2.get(0).getcSw04() != null && cgA001S1s2.get(0).getcSw04() != "") {
				cgA001S1s2.get(0).setcSw04(cgA001S1s2.get(0).getcSw04().trim());
			}
			row0 = frcDao.S1S21UCG_A001_S1S2(cgA001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21D(CG_A001_Request_S1S2 cgA001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestS1s2.getCgA001S1s2();
		String ss_ret0 = "";
		ss_ret0 = cgA001Customer.check_S1S21D_CG_A001_S1S2(cgA001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21DCG_A001_S1S2(cgA001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

//	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(CG_A001_Request_S1S2 cgA001RequestS1s2, String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestS1s2.getCgA001S1s2();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgA001Customer.check_S1S22MSG_CG_A001_S1S2(cgA001S1s2);
//		if ("success".equals(ss_ret0)) {
//			row0 = frcDao.S1S22MSGCG_A001_S1S2(cgA001S1s2);
//			if (row0 < 0) {
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
//		return builder.errcode(Errcode.Success).session(session).build();
//	}
//
//	public ResponseObject<EmptyTag, EmptyData> S1S23MSG(CG_A001_Request_S1S2 cgA001RequestS1s2, String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		List<CG_A001_S1S2> cgA001S1s2 = cgA001RequestS1s2.getCgA001S1s2();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgA001Customer.check_S1S23MSG_CG_A001_S1S2(cgA001S1s2);
//		if ("success".equals(ss_ret0)) {
//			row0 = frcDao.S1S23MSGCG_A001_S1S2(cgA001S1s2);
//			if (row0 < 0) {
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
//		return builder.errcode(Errcode.Success).session(session).build();
//	}
}
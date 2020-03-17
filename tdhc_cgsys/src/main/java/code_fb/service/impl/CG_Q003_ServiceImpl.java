
package code_fb.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_Q003_M1S1;
import code_fb.entity.CG_Q003_S1S2;
import code_fb.mapper.CG_Q003_Mapper;
import code_fb.request.CG_Q003_Request_C001;
import code_fb.request.CG_Q003_Request_C002;
import code_fb.request.CG_Q003_Request_C003;
import code_fb.request.CG_Q003_Request_C004;
import code_fb.request.CG_Q003_Request_C005;
import code_fb.request.CG_Q003_Request_C006;
import code_fb.request.CG_Q003_Request_C007;
import code_fb.request.CG_Q003_Request_C008;
import code_fb.request.CG_Q003_Request_C009;
import code_fb.request.CG_Q003_Request_M1S1;
import code_fb.request.CG_Q003_Request_S1S2;
import code_fb.response.CG_Q003_Response_C001;
import code_fb.response.CG_Q003_Response_C002;
import code_fb.response.CG_Q003_Response_C003;
import code_fb.response.CG_Q003_Response_C004;
import code_fb.response.CG_Q003_Response_C005;
import code_fb.response.CG_Q003_Response_C006;
import code_fb.response.CG_Q003_Response_C007;
import code_fb.response.CG_Q003_Response_C008;
import code_fb.response.CG_Q003_Response_C009;
import code_fb.response.CG_Q003_Response_M1S1;
import code_fb.response.CG_Q003_Response_S1S2;
import code_fb.service.CG_Q003_Service;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpCgordertrace;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgordertraceMapper;
import code_fb_customer.CG_Q003_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("cgQ003Service")
public class CG_Q003_ServiceImpl implements CG_Q003_Service {
	@Autowired
	@Qualifier("cgQ003Mapper")
	private CG_Q003_Mapper frcDao;
	
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	
	@Autowired
	private TpCgordertraceMapper tpCgordertraceMapper;
	
	CG_Q003_Customer cgQ003Customer = new CG_Q003_Customer();

	public ResponseObject<EmptyTag, CG_Q003_Response_C001> C0011Q(CG_Q003_Request_C001 cgQ003RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C001 data = new CG_Q003_Response_C001();
		data.setCgQ003C001(frcDao.C0011QCG_Q003_C001("0", "提交状态"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C002> C0021Q(CG_Q003_Request_C002 cgQ003RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C002 data = new CG_Q003_Response_C002();
		data.setCgQ003C002(frcDao.C0021QCG_Q003_C002("完成状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C003> C0031Q(CG_Q003_Request_C003 cgQ003RequestC003,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C003 data = new CG_Q003_Response_C003();
		data.setCgQ003C003(frcDao.C0031QCG_Q003_C003("0", "审核状态"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C004> C0041Q(CG_Q003_Request_C004 cgQ003RequestC004,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C004 data = new CG_Q003_Response_C004();
		data.setCgQ003C004(frcDao.C0041QCG_Q003_C004("公司名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C005> C0051Q(CG_Q003_Request_C005 cgQ003RequestC005,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C005 data = new CG_Q003_Response_C005();
		data.setCgQ003C005(frcDao.C0051QCG_Q003_C005("部门名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C006> C0061Q(CG_Q003_Request_C006 cgQ003RequestC006,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C006 data = new CG_Q003_Response_C006();
		data.setCgQ003C006(frcDao.C0061QCG_Q003_C006("分配状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C007> C0071Q(CG_Q003_Request_C007 cgQ003RequestC007,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C007 data = new CG_Q003_Response_C007();
		data.setCgQ003C007(frcDao.C0071QCG_Q003_C007("采购部门", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C008> C0081Q(CG_Q003_Request_C008 cgQ003RequestC008,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C008 data = new CG_Q003_Response_C008();
		data.setCgQ003C008(frcDao.C0081QCG_Q003_C008("急需状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_C009> C0091Q(CG_Q003_Request_C009 cgQ003RequestC009,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_C009 data = new CG_Q003_Response_C009();
		data.setCgQ003C009(frcDao.C0091QCG_Q003_C009("采购进度", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_M1S1> M1S11Q(CG_Q003_Request_M1S1 cgQ003RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_M1S1 data = new CG_Q003_Response_M1S1();
		data.setCgQ003M1s1(frcDao.M1S11QCG_Q003_M1S1(cgQ003RequestM1s1.getCgQ003M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_Q003_Request_M1S1 cgQ003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q003_M1S1> cgQ003M1s1 = cgQ003RequestM1s1.getCgQ003M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_M1S11A_CG_Q003_M1S1(cgQ003M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgQ003Customer.check_M1S11A_CG_Q003_M1S1(cgQ003M1s1))) {
				row0 = frcDao.M1S11ACG_Q003_M1S1(cgQ003M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_Q003_Request_M1S1 cgQ003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q003_M1S1> cgQ003M1s1 = cgQ003RequestM1s1.getCgQ003M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_M1S11U_CG_Q003_M1S1(cgQ003M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11UCG_Q003_M1S1(cgQ003M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_Q003_Request_M1S1 cgQ003RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q003_M1S1> cgQ003M1s1 = cgQ003RequestM1s1.getCgQ003M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_M1S11D_CG_Q003_M1S1(cgQ003M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DCG_Q003_M1S1(cgQ003M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(CG_Q003_Request_S1S2 cgQ003RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q003_S1S2> cgQ003S1s2 = cgQ003RequestS1s2.getCgQ003S1s2();
		String ss = cgQ003RequestS1s2.getC_state();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_S1S22MSG_CG_Q003_S1S2(cgQ003S1s2);
		if ("success".equals(ss_ret0)) {
			for (int i =0 ; i< cgQ003S1s2.size(); i++)
			{
				cgQ003S1s2.get(i).setcPlantime(new Date());
			}
			row0 = frcDao.S1S22MSGCG_Q003_S1S2(cgQ003S1s2,ss);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	public ResponseObject<EmptyTag, EmptyData> S1S22MSG_QXCG(CG_Q003_Request_S1S2 cgQ003RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q003_S1S2> cgQ003S1s2 = cgQ003RequestS1s2.getCgQ003S1s2();
		String ss = cgQ003RequestS1s2.getC_state();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_S1S22MSG_CG_Q003_S1S2(cgQ003S1s2);
		if ("success".equals(ss_ret0)) {
			for (int i =0 ; i< cgQ003S1s2.size(); i++)
			{
				cgQ003S1s2.get(i).setcPlantime(new Date());
			}
			row0 = frcDao.S1S22MSG_QXCG(cgQ003S1s2,ss);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	@SuppressWarnings("unchecked")
	public ResponseObject<EmptyTag, EmptyData> S1S23U(CG_Q003_Request_S1S2 cgQ003RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q003_S1S2> cgQ003S1s2 = cgQ003RequestS1s2.getCgQ003S1s2();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ003Customer.check_S1S23U_CG_Q003_S1S2(cgQ003S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S23UCG_Q003_S1S2(cgQ003S1s2);
			if (row0 < 0) {
				CG_Q003_S1S2 tc = cgQ003S1s2.get(0);
				TpCgordertrace tpc = new TpCgordertrace();
				tpc.setcOrstid(tc.getcId());
				tpc.setcGoodsname(tc.getcGoodsname());
				tpc.setcGoodstype(tc.getcTypename());
				tpc.setcSpec(tc.getcSpec());
				tpc.setcPlanor(tc.getcPlanor());
				tpc.setcOrmtid(tc.getcMtid());
				tpc.setcRemark(tc.getcRemark());
				tpc.setcState(tc.getcState());
				//tpc.setcPlanortime(new Date());
				//tpc.setcCreatetime(new Date());
				tpCgordertraceMapper.insertTpCgordertraceMapper(tpc);
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, List<TpCgorderst>> S1S21Q(
			RequestObject<EmptyTag, CG_Q003_Request_M1S1> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q003_M1S1> list = requestObject.getData().getCgQ003M1s1();
		if(list != null) {
			String cId = list.get(0).getcId();
			List<TpCgorderst> tpCgorderst = tpCgorderstMapper.S1S21Q(list.get(0));
			return builder.data(tpCgorderst).errcode(Errcode.Success).build();
		}else {
			return builder.msg("查询失败").errcode(Errcode.FailParameterError).build();
		}
		
	}
	public ResponseObject<EmptyTag, User> get_user(User user) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;		
		return builder.data(user).errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, CG_Q003_Response_S1S2> M1S21Q(CG_Q003_Request_M1S1 cgQ003RequestM1s1,
			String session) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q003_Response_S1S2 data = new CG_Q003_Response_S1S2();
		data.setTpCgorderst(frcDao.M1S21QCG_Q003_M1S1(cgQ003RequestM1s1.getCgQ003M1s1().get(0)));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}
}
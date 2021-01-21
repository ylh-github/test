
package code_fb.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_Q001_M1S1;
import code_fb.entity.CG_Q001_S1S2;
import code_fb.mapper.CG_Q001_Mapper;
import code_fb.request.CG_Q001_Request_C001;
import code_fb.request.CG_Q001_Request_C002;
import code_fb.request.CG_Q001_Request_C003;
import code_fb.request.CG_Q001_Request_C004;
import code_fb.request.CG_Q001_Request_C005;
import code_fb.request.CG_Q001_Request_C006;
import code_fb.request.CG_Q001_Request_C007;
import code_fb.request.CG_Q001_Request_C008;
import code_fb.request.CG_Q001_Request_C009;
import code_fb.request.CG_Q001_Request_C00A;
import code_fb.request.CG_Q001_Request_C00B;
import code_fb.request.CG_Q001_Request_M1S1;
import code_fb.request.CG_Q001_Request_S1S2;
import code_fb.response.CG_Q001_Response_C001;
import code_fb.response.CG_Q001_Response_C002;
import code_fb.response.CG_Q001_Response_C003;
import code_fb.response.CG_Q001_Response_C004;
import code_fb.response.CG_Q001_Response_C005;
import code_fb.response.CG_Q001_Response_C006;
import code_fb.response.CG_Q001_Response_C007;
import code_fb.response.CG_Q001_Response_C008;
import code_fb.response.CG_Q001_Response_C009;
import code_fb.response.CG_Q001_Response_C00A;
import code_fb.response.CG_Q001_Response_C00B;
import code_fb.response.CG_Q001_Response_M1S1;
import code_fb.service.CG_Q001_Service;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpChorderstMapper;
import code_fb_cg.request.Q001M1s1Qrequest;
import code_fb_customer.CG_Q001_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgQ001Service")
public class CG_Q001_ServiceImpl implements CG_Q001_Service {
	@Autowired
	@Qualifier("cgQ001Mapper")
	private CG_Q001_Mapper frcDao;
	@Autowired
	private TpCgorderstMapper orderstMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TpChorderstMapper  tpChorderstMapper;
	CG_Q001_Customer cgQ001Customer = new CG_Q001_Customer();

	public ResponseObject<EmptyTag, CG_Q001_Response_C001> C0011Q(CG_Q001_Request_C001 cgQ001RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C001 data = new CG_Q001_Response_C001();
		data.setCgQ001C001(frcDao.C0011QCG_Q001_C001("公司名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C002> C0021Q(CG_Q001_Request_C002 cgQ001RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C002 data = new CG_Q001_Response_C002();
		data.setCgQ001C002(frcDao.C0021QCG_Q001_C002("审核状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C003> C0031Q(CG_Q001_Request_C003 cgQ001RequestC003,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C003 data = new CG_Q001_Response_C003();
		data.setCgQ001C003(frcDao.C0031QCG_Q001_C003("提交状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C004> C0041Q(CG_Q001_Request_C004 cgQ001RequestC004,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C004 data = new CG_Q001_Response_C004();
		data.setCgQ001C004(frcDao.C0041QCG_Q001_C004("急需状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C005> C0051Q(CG_Q001_Request_C005 cgQ001RequestC005,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C005 data = new CG_Q001_Response_C005();
		data.setCgQ001C005(frcDao.C0051QCG_Q001_C005("采购进度", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C006> C0061Q(CG_Q001_Request_C006 cgQ001RequestC006,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C006 data = new CG_Q001_Response_C006();
		data.setCgQ001C006(frcDao.C0061QCG_Q001_C006("物资类型", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C007> C0071Q(CG_Q001_Request_C007 cgQ001RequestC007,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C007 data = new CG_Q001_Response_C007();
		data.setCgQ001C007(frcDao.C0071QCG_Q001_C007("分配状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C008> C0081Q(CG_Q001_Request_C008 cgQ001RequestC008,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C008 data = new CG_Q001_Response_C008();
		data.setCgQ001C008(frcDao.C0081QCG_Q001_C008("完成状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C009> C0091Q(CG_Q001_Request_C009 cgQ001RequestC009,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C009 data = new CG_Q001_Response_C009();
		data.setCgQ001C009(frcDao.C0091QCG_Q001_C009("部门名称", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C00A> C00A1Q(CG_Q001_Request_C00A cgQ001RequestC00a,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C00A data = new CG_Q001_Response_C00A();
		data.setCgQ001C00a(frcDao.C00A1QCG_Q001_C00A("采购状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_C00B> C00B1Q(CG_Q001_Request_C00B cgQ001RequestC00b,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_C00B data = new CG_Q001_Response_C00B();
		data.setCgQ001C00b(frcDao.C00B1QCG_Q001_C00B("采购部门", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_Q001_Response_M1S1> M1S11Q(CG_Q001_Request_M1S1 cgQ001RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_Q001_Response_M1S1 data = new CG_Q001_Response_M1S1();
		data.setCgQ001M1s1(frcDao.M1S11QCG_Q001_M1S1(cgQ001RequestM1s1.getCgQ001M1s1().get(0)));	
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_M1S1> cgQ001M1s1 = cgQ001RequestM1s1.getCgQ001M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_M1S11A_CG_Q001_M1S1(cgQ001M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgQ001Customer.check_M1S11A_CG_Q001_M1S1(cgQ001M1s1))) {
				RandomId ri = new RandomId();
				cgQ001M1s1.get(0).setcId(ri.getRandomId());
				cgQ001M1s1.get(0).setcCreater(cgQ001M1s1.get(0).getcCreater());
				cgQ001M1s1.get(0).setcCreatetime(cgQ001M1s1.get(0).getcCreatetime());
				row0 = frcDao.M1S11ACG_Q001_M1S1(cgQ001M1s1);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q001_M1S1> cgQ001M1s1 = cgQ001RequestM1s1.getCgQ001M1s1();
		CG_Q001_M1S1 m1s1 = cgQ001RequestM1s1.getM1s1();
		if(!m1s1.getcOrdernum().trim().equals(cgQ001M1s1.get(0).getcOrdernum().trim())) {
			CG_Q001_S1S2 s1s2 = new CG_Q001_S1S2();
			s1s2.setcId(m1s1.getcId());
			List<CG_Q001_S1S2> cgQ001s1s1 = frcDao.S1S21QCG_Q001_S1S2(s1s2);
			if(cgQ001s1s1.size() > 0) {
				for (CG_Q001_S1S2 cg_Q001_S1S2 : cgQ001s1s1) {
					if("1".equals(cg_Q001_S1S2.getcState())) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("已转合同无法修改").session(session).build();
					}
					cg_Q001_S1S2.setcSw04(cgQ001M1s1.get(0).getcOrdernum());
				}
				int rows = frcDao.S1S21UCG_Q001_S1S2(cgQ001s1s1);
				if (rows >= 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
				} 
			}
		}
		int row0 = 0;		
		cgQ001M1s1.get(0).setcId(m1s1.getcId());
		row0 = frcDao.M1S11UCG_Q001_M1S1(cgQ001M1s1);
		if (row0 >= 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
		} 
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_M1S1> cgQ001M1s1 = cgQ001RequestM1s1.getCgQ001M1s1();
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_M1S11D_CG_Q001_M1S1(cgQ001M1s1);

		row0 = frcDao.M1S11DCG_Q001_S1S2(cgQ001M1s1);

		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DUPDATE(cgQ001M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	//提交
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q001_M1S1> cgQ001M1s1 = cgQ001RequestM1s1.getCgQ001M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_M1S13MSG_CG_Q001_M1S1(cgQ001M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S13MSGCG_Q001_M1S1(cgQ001M1s1);
			for (CG_Q001_M1S1 cg_Q001_M1S1 : cgQ001M1s1) {
				TpCgordermt mt = new TpCgordermt();
				mt.setcId(cg_Q001_M1S1.getcId());
				List<TpCgorderst> st = orderstMapper.selectS1S2(mt);
				if(st.size()==0) {
					return builder.errcode(Errcode.FailParameterError).msg("提交失败").session(session).build();
				}
				int row1 = orderstMapper.updateS1S2(st);
				if (row0 < 0 || row1 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("提交失败").session(session).build();
				}
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S13MSG2(CG_Q001_Request_M1S1 cgQ001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q001_M1S1> cgQ001M1s1 = cgQ001RequestM1s1.getCgQ001M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_M1S13MSG_CG_Q001_M1S1(cgQ001M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S13MSGCG_Q001_M1S12(cgQ001M1s1);
			TpCgordermt mt = new TpCgordermt();
			mt.setcId(cgQ001M1s1.get(0).getcId());
			List<TpCgorderst> st = orderstMapper.selectS1S2(mt);
			for (TpCgorderst tpCgorderst : st) {
				if(tpCgorderst.getcManor()!=null) {
					return builder.msg("已分配，采购员为： "+tpCgorderst.getcManor()).errcode(Errcode.FailParameterError).msg("取消提交失败").session(session).build();
				}
			}
			if(st.size()==0) {
				return builder.errcode(Errcode.FailParameterError).msg("取消提交失败").session(session).build();
			}
			int row1 = orderstMapper.updateS1S22(st);
			if (row0 == 0 || row1 == 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("取消提交失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}


//	public ResponseObject<EmptyTag, CG_Q001_Response_S1S2> S1S21Q(CG_Q001_Request_S1S2 cgQ001RequestS1s2,
//			String session) {
//		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		CG_Q001_Response_S1S2 data = new CG_Q001_Response_S1S2();
//		data.getCgQ001S1s2().get(0).setcMtid(cgQ001RequestS1s2.getCgQ001S1s2().get(0).getcId());
//		data.setCgQ001S1s2(frcDao.S1S21QCG_Q001_S1S2(data.getCgQ001S1s2().get(0)));
//		return builder.data(data).errcode(Errcode.Success).session(session).build();
//	}

	public ResponseObject<EmptyTag, EmptyData> S1S21A(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		List<TpCgordermt> rmtlist = cgQ001RequestS1s2.getTpCgordermt();
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21A_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgQ001Customer.check_S1S21A_CG_Q001_S1S2(cgQ001S1s2))) {
				cgQ001S1s2.get(0).setcMtid(rmtlist.get(0).getcId());
				cgQ001S1s2.get(0).setcSw04(rmtlist.get(0).getcOrdernum());
				cgQ001S1s2.get(0).setcState("0");
				cgQ001S1s2.get(0).setcSw01("1");
				cgQ001S1s2.get(0).setcAllotstate("1");
				row0 = frcDao.S1S21ACG_Q001_S1S2(cgQ001S1s2);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21U(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21U_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
//			String dw = cgQ001S1s2.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//			TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//			if(thority != null) {
//				cgQ001S1s2.get(0).setcUnit(dw);// 单位						
//			}else {
//				return builder.errcode(Errcode.FailParameterError).msg("单位错误，请重新确认单位").build();
//			}
			row0 = frcDao.S1S21UCG_Q001_S1S2(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21D(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21D_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21DUpdate(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21S(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		String cremark = "";
		for(CG_Q001_S1S2 s1s2 : cgQ001S1s2) {
			s1s2.setcState("2");
//			cremark = s1s2.getcRemark();
//			if("".equals(cremark) || cremark == null) {
//				s1s2.setcRemark("(监管转印尼采购)");
//			}else {
//				if(cremark.lastIndexOf("(") != -1) {	
//					cremark = cremark.substring(0, cremark.lastIndexOf("("));	
//				}
//				s1s2.setcRemark(cremark+"(监管转印尼采购)");	
//			}
			s1s2.setcSw12("(监管转印尼采购)");
			
		}
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21S_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21UCG_Q001_S1S2(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("监管修改失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21CS(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		String cremark = "";
		for(CG_Q001_S1S2 s1s2 : cgQ001S1s2) {
			s1s2.setcState("0");
			s1s2.setcSw12("");
			/*cremark = s1s2.getcRemark();
			if(cremark.lastIndexOf("(") == 0) {
				s1s2.setcRemark("");
			}else if(cremark.lastIndexOf("(") > 0) {
				cremark = cremark.substring(0, cremark.lastIndexOf("("));
				s1s2.setcRemark(cremark);
			}*/
			
		}
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21CS_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21S_Q001_QX(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("取消监管修改失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	//转T类
	public ResponseObject<EmptyTag, EmptyData> S1S21UpT(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		//查询拟合同信息中是否有对应的信息
		for (CG_Q001_S1S2 cg_Q001_S1S2 : cgQ001S1s2) {
			List<TpCgcontractstt> selectCgcontract = tpCgcontractsttMapper.selectCgcontract(cg_Q001_S1S2.getcSw04());
			if(selectCgcontract.size()>0) {
				return builder.errcode(Errcode.FailParameterError).msg("请通知对应的采购员撤回拟合同信息！！！！").session(session).build();
			}
		}
		String cremark = "";
		for(CG_Q001_S1S2 s1s2 : cgQ001S1s2) {
			s1s2.setcState("2");
//			cremark = s1s2.getcRemark();
//			if("".equals(cremark) || cremark == null) {
//				s1s2.setcRemark("(取消采购 ,转T类型)");
//			}else {
//				if(cremark.lastIndexOf("(") != -1) {	
//					cremark = cremark.substring(0, cremark.lastIndexOf("("));	
//				}
//				s1s2.setcRemark(cremark+"(取消采购,转T类型)");	
//			}
			s1s2.setcSw12("(取消采购 ,转T类型)");
			
			
		}
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21S_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21UCG_Q001_S1S2(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("转T类型修改失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	//撤销转T类型
	public ResponseObject<EmptyTag, EmptyData> S1S21DCXT(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_Q001_S1S2> cgQ001S1s2 = cgQ001RequestS1s2.getCgQ001S1s2();
		String cremark = "";
		for(CG_Q001_S1S2 s1s2 : cgQ001S1s2) {
			s1s2.setcState("0");
//			cremark = s1s2.getcRemark();
//			if(cremark.lastIndexOf("(") == 0) {
//				s1s2.setcRemark("");
//			}else if(cremark.lastIndexOf("(") > 0) {
//				cremark = cremark.substring(0, cremark.lastIndexOf("("));
//				s1s2.setcRemark(cremark);
//			}
			
			s1s2.setcSw12("");
		}
		String ss_ret0 = "";
		ss_ret0 = cgQ001Customer.check_S1S21CS_CG_Q001_S1S2(cgQ001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S21S_Q001_QX(cgQ001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("撤销转T类型修改失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21UCGY(CG_Q001_Request_S1S2 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//3.整合批量修改
		for (CG_Q001_S1S2 element : cgQ001RequestS1s2.getCgQ001S1s2()) {
			if(cgQ001RequestS1s2.getTpCgorderst().getcManor() == null) {
				element.setcManor("");
			}else {
				element.setcManor(cgQ001RequestS1s2.getTpCgorderst().getcManor());
			}
		}
		int s1s21ucgy = tpCgorderstMapper.S1S21UCGY(cgQ001RequestS1s2.getCgQ001S1s2());
		System.out.println("采购员修改返回值：："+s1s21ucgy);
		if(s1s21ucgy > 0 ) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败！！").session(session).build();
		}
		return builder.errcode(Errcode.Success).msg("修改成功！！！").session(session).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> GYBCH(CG_Q001_Request_M1S1 cgQ001RequestS1s2, String session) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			//修改状态
			List<Q001M1s1Qrequest> cgQ001M1s1 = cgQ001RequestS1s2.getQ001M1s1Qrequest();
			List<Q001M1s1Qrequest> list = new ArrayList<>();
			if(cgQ001M1s1.isEmpty()) {
				return builder.errcode(Errcode.FailParameterError).msg("空值！！！").session(session).build();
			}
			for (Q001M1s1Qrequest cg_Q001_M1S1 : cgQ001M1s1) {
				if(cg_Q001_M1S1.getcState().equals("0")|| cg_Q001_M1S1.getcState().equals("4")) {
					cg_Q001_M1S1.setcSw13("1");
					list.add(cg_Q001_M1S1);
				}
			}
			System.out.println("催货物资详情的长度::"+list.size());
			int gybch = tpCgorderstMapper.GYBCH(cgQ001M1s1);
			if(gybch>0) {
				return builder.errcode(Errcode.FailParameterError).msg("催货失败！！！").session(session).build();
			}
			if(!list.isEmpty()) {
				int insertList = tpChorderstMapper.insertList(list);
				if(insertList>0) {
					return builder.errcode(Errcode.FailParameterError).msg("催货添加失败！！！").session(session).build();
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return builder.errcode(Errcode.FailParameterError).msg("异常！！！").session(session).build();
		}
		
		return builder.errcode(Errcode.Success).msg("催货成功！！！").session(session).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> CXCH(CG_Q001_Request_M1S1 cgQ001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			//修改状态
			List<Q001M1s1Qrequest> cgQ001M1s1 = cgQ001RequestS1s2.getQ001M1s1Qrequest();
			if(cgQ001M1s1.isEmpty()) {
				return builder.errcode(Errcode.FailParameterError).msg("空值！！！").session(session).build();
			}
			for (Q001M1s1Qrequest cg_Q001_M1S1 : cgQ001M1s1) {
					cg_Q001_M1S1.setcSw13("");
			}
			int gybch = tpCgorderstMapper.GYBCH(cgQ001M1s1);
			if(gybch>0) {
				return builder.errcode(Errcode.FailParameterError).msg("撤销催货失败！！！").session(session).build();
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return builder.errcode(Errcode.FailParameterError).msg("异常！！！").session(session).build();
		}
		return builder.errcode(Errcode.Success).msg("撤销催货成功！！！").session(session).build();
	}

	}
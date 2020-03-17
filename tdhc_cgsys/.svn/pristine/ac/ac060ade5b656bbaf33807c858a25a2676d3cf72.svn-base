
package code_fb.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.DZ_08_M1S1;
import code_fb.mapper.DZ_08_Mapper;
import code_fb.request.DZ_08_Request_M1S1;
import code_fb.request.DZ_08_Request_add;
import code_fb.response.DZ_08_Response_M1S1;
import code_fb.service.DZ_08_Service;
import code_fb_cg.entity.TbSupplier;
import code_fb_customer.DZ_08_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("dz08Service")
public class DZ_08_ServiceImpl implements DZ_08_Service {
	@Autowired
	@Qualifier("dz08Mapper")
	public DZ_08_Mapper frcDao;
	@Autowired
	public DZ_08_Customer dz08Customer;

	public ResponseObject<EmptyTag, DZ_08_Response_M1S1> M1S11Q(DZ_08_Request_M1S1 dz08RequestM1s1, String session) {
		String msg = "查询成功";
		int num = 0;
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		DZ_08_Response_M1S1 data = new DZ_08_Response_M1S1();
		List<DZ_08_M1S1> m1s11qdz_08_M1S1 = frcDao.M1S11QDZ_08_M1S1(dz08RequestM1s1.getDz08M1s1().get(0));
		for (DZ_08_M1S1 dz_08_M1S1 : m1s11qdz_08_M1S1) {
			dz_08_M1S1.setNumber(++num);
		}
		data.setDz08M1s1(m1s11qdz_08_M1S1);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, DZ_08_Request_M1S1 dz08RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		for (DZ_08_M1S1 element : dz08RequestM1s1.getDz08M1s1()) {
			element.setcCreaterTbSupplier(user.getUserName());
			element.setcCreatetimeTbSupplier(new Date());
			element.setcSupplierTbSupplier(respUtil(element.getcSupplierTbSupplier()));
			element.setcSupaddressTbSupplier(respUtil(element.getcSupaddressTbSupplier()));
			element.setcBanknameTbSupplier(respUtil(element.getcBanknameTbSupplier()));
			element.setcAccountnoTbSupplier(respUtil(element.getcAccountnoTbSupplier()));
			element.setcTaxnumberTbSupplier(respUtil(element.getcTaxnumberTbSupplier()));
			element.setcSupphoneTbSupplier(respUtil(element.getcSupphoneTbSupplier()));
			element.setcFaxnoTbSupplier(respUtil(element.getcFaxnoTbSupplier()));
			element.setcRemarkTbSupplier(respUtil(element.getcRemarkTbSupplier()));
			element.setcSw05TbSupplier(respUtil(element.getcSw05TbSupplier()));
			element.setcSw06TbSupplier(respUtil(element.getcSw06TbSupplier()));
			element.setcSw01TbSupplier(respUtil(element.getcSw01TbSupplier()));
			element.setcSw02TbSupplier(respUtil(element.getcSw02TbSupplier()));

		}
		List<DZ_08_M1S1> dz08M1s1 = dz08RequestM1s1.getDz08M1s1();

		String ss_ret0 = "";
		ss_ret0 = dz08Customer.check_M1S11A_DZ_08_M1S1(dz08RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
			}
			System.out.println("创建时间:" + dz08M1s1.get(0).getcCreatetimeTbSupplier());
			List<DZ_08_M1S1> m1s11qdz_08_CHECKM1S1 = frcDao.M1S11QDZ_08_CHECKM1S1(dz08M1s1.get(0));
			if (m1s11qdz_08_CHECKM1S1.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("该供应商已存在，重复添加").session(session).build();
			}
			row0 = frcDao.M1S11ADZ_08_M1S1(dz08M1s1);
			if (row0 < 0) {
				msg = msg + "DZ_08_M1S1保存成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, DZ_08_Request_M1S1 dz08RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<DZ_08_M1S1> dz08M1s1 = dz08RequestM1s1.getDz08M1s1();
		for (DZ_08_M1S1 dz_08_M1S1 : dz08M1s1) {
			dz_08_M1S1.setcModifierTbSupplier(user.getUserName());
			dz_08_M1S1.setcModifytimeTbSupplier(new Date());
		}
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = dz08Customer.check_M1S11U_DZ_08_M1S1(dz08RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11UDZ_08_M1S1(dz08M1s1);
			if (row0 < 0) {
				msg = msg + "DZ_08_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, DZ_08_Request_M1S1 dz08RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<DZ_08_M1S1> dz08M1s1 = dz08RequestM1s1.getDz08M1s1();
		String ss_ret0 = "";
		ss_ret0 = dz08Customer.check_M1S11D_DZ_08_M1S1(dz08RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11DDZ_08_M1S1(dz08M1s1);
			if (row0 < 0) {
				msg = msg + "DZ_08_M1S1删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(User user, DZ_08_Request_M1S1 dz08RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<DZ_08_M1S1> dz08M1s1 = dz08RequestM1s1.getDz08M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = dz08Customer.check_M1S12MSG_DZ_08_M1S1(dz08RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S12MSGDZ_08_M1S1(dz08M1s1);
			if (row0 < 0) {
				msg = msg + "DZ_08_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	// 导入
	public ResponseObject<EmptyTag, EmptyData> Import_SuppExcel(
			RequestObject<EmptyTag, DZ_08_Request_add> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		List<TbSupplier> list1 = new ArrayList<TbSupplier>();
		List<TbSupplier> list2 = new ArrayList<TbSupplier>();
		for (TbSupplier iterable : requestObject.getData().getTbSupplier()) {
			TbSupplier tbSupplier = new TbSupplier();
			tbSupplier.setcSupplier(iterable.getcSupplier().replace("/", "-").replaceAll(" ", "")
					.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			tbSupplier.setcSupaddress(iterable.getcSupaddress().replace("/", "-").replaceAll(" ", "")
					.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			tbSupplier.setcBankname(iterable.getcBankname().replace("/", "-").replaceAll(" ", "")
					.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));

			if (iterable.getcAccountno() == null || "".equals(iterable.getcAccountno())) {
				tbSupplier.setcAccountno(null);
			} else {
				tbSupplier.setcAccountno(iterable.getcAccountno().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (iterable.getcTaxnumber() == null || "".equals(iterable.getcTaxnumber())) {
				tbSupplier.setcTaxnumber(null);
			} else {
				tbSupplier.setcTaxnumber(iterable.getcTaxnumber().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (iterable.getcSupphone() == null || "".equals(iterable.getcSupphone())) {
				tbSupplier.setcSupphone(null);
			} else {
				tbSupplier.setcSupphone(iterable.getcSupphone().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (iterable.getcFaxno() == null || "".equals(iterable.getcFaxno())) {
				tbSupplier.setcFaxno(null);
			} else {
				tbSupplier.setcFaxno(iterable.getcFaxno().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", ""));
			}

			List<DZ_08_M1S1> m1s11qSupplier = frcDao.M1S11QSupplier(tbSupplier.getcSupplier());
			if (m1s11qSupplier.size() > 0) {
				list2.add(tbSupplier);
			} else {
				list1.add(tbSupplier);
			}
		}
		int rows = frcDao.Import_SuppExcel(list1);

		if (rows > 0) {
			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
		}
		return builder.errcode(Errcode.Success).msg("导入成功").build();
	}

	public ResponseObject<EmptyTag, List<TbSupplier>> findSupplierInfo(EmptyData emptyData, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbSupplier> findSupplierInfo = frcDao.findSupplierInfo();
		return builder.data(findSupplierInfo).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, List<TbSupplier>> getSupplierInfo(TbSupplier tbSupplier, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbSupplier> findSupplierInfo = frcDao.getSupplierInfo(tbSupplier);
		return builder.data(findSupplierInfo).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, DZ_08_Response_M1S1> M1S11QSupplier(DZ_08_Request_M1S1 dz08RequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		DZ_08_Response_M1S1 data = new DZ_08_Response_M1S1();
		data.setDz08M1s1(frcDao.M1S11QSupplier(dz08RequestM1s1.getList().get(0).getcSupplier()));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	private static String respUtil(String str) {
		if (str == null) {
			str = "";
		} else {
			str = str.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		return str;
	}

	@Override
	public ResponseObject<EmptyTag, List<TbSupplier>> obtainSupplierInfo(TbSupplier tbSupplier, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbSupplier> findSupplierInfo = frcDao.getSupplierInfo(tbSupplier);
		if ("dh".equals(tbSupplier.getcDhcd().trim())) {
			for (TbSupplier tbSupplier2 : findSupplierInfo) {
				tbSupplier2.setcBankname(tbSupplier.getcSw01());
				tbSupplier2.setcAccountno(tbSupplier2.getcSw02());
			}
		}
		return builder.data(findSupplierInfo).msg(msg).errcode(Errcode.Success).session(session).build();
	}
}

package code_fb.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.ZZ_01_M1S1;
import code_fb.mapper.ZZ_01_Mapper;
import code_fb.request.ZZ_01_Request_M1S1;
import code_fb.request.ZZ_01_Request_add;
import code_fb.response.ZZ_01_Response_M1S1;
import code_fb.service.ZZ_01_Service;
import code_fb_cg.entity.TbCludecompany;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_customer.ZZ_01_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("zz01Service")
public class ZZ_01_ServiceImpl implements ZZ_01_Service {
	@Autowired
	@Qualifier("zz01Mapper")
	public ZZ_01_Mapper frcDao;
	@Autowired
	public ZZ_01_Customer zz01Customer;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;

	public ResponseObject<EmptyTag, ZZ_01_Response_M1S1> M1S11Q(ZZ_01_Request_M1S1 zz01RequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		ZZ_01_Response_M1S1 data = new ZZ_01_Response_M1S1();
		data.setZz01M1s1(frcDao.M1S11QZZ_01_M1S1(zz01RequestM1s1.getZz01M1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, ZZ_01_Request_M1S1 zz01RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<ZZ_01_M1S1> zz01M1s1 = zz01RequestM1s1.getZz01M1s1();
		String ss_ret0 = "";
		ss_ret0 = zz01Customer.check_M1S11A_ZZ_01_M1S1(zz01RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
			}
			ZZ_01_M1S1 m1s1 = new ZZ_01_M1S1();
			m1s1.setcCludecomTbCludecompany(zz01M1s1.get(0).getcCludecomTbCludecompany());
			List<ZZ_01_M1S1> m1s1list = frcDao.M1S11QZZ_01_M1S1(m1s1);
			if(m1s1list.size() > 0) {
				return builder.errcode(Errcode.FailParameterError).msg("签订公司已存在").session(session).build();
			}
			Date date = new Date();
			zz01M1s1.get(0).setcCreaterTbCludecompany(user.getUserName());
			zz01M1s1.get(0).setcCreatetimeTbCludecompany(date);
			row0 = frcDao.M1S11AZZ_01_M1S1(zz01M1s1);
			if (row0 < 0) {
				msg = msg + "ZZ_01_M1S1保存成功";
				List<TpCgauthority> authority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("QDGS", null);
				if(authority.size() > 0) {
					boolean isOk = true;
					for (TpCgauthority tpCgauthority : authority) {
						if(tpCgauthority.getcSubitemdes().trim().equals(zz01M1s1.get(0).getcCludecomTbCludecompany().trim())) {
							isOk = !isOk;
						}
					}
					if(isOk) {
						int num = authority.size();					
						TpCgauthority tpCgauthority = new TpCgauthority();
						tpCgauthority.setcCreater(user.getUserName());
						tpCgauthority.setcCreatetime(date);
						tpCgauthority.setcItemid(authority.get(0).getcItemid());
						tpCgauthority.setcItemdes(authority.get(0).getcItemdes());
						tpCgauthority.setcSubitemid("" + ++num);
						tpCgauthority.setcSubitemdes(zz01M1s1.get(0).getcCludecomTbCludecompany().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						tpCgauthority.setcEnabled("0");
						int rowi = tpCgauthorityMapper.insertSelective(tpCgauthority);
						if(rowi >= 0) {
							return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
						}
					}
					
				}
				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, ZZ_01_Request_M1S1 zz01RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<ZZ_01_M1S1> zz01M1s1 = zz01RequestM1s1.getZz01M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = zz01Customer.check_M1S11U_ZZ_01_M1S1(zz01RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}
			ZZ_01_M1S1 zz01list = frcDao.selectBycId(zz01M1s1.get(0).getcIdTbCludecompany());
			if(zz01list != null&& !zz01list.getcCludecomTbCludecompany().trim().equals(zz01M1s1.get(0).getcCludecomTbCludecompany().trim())) {
				System.out.println(zz01list.getcCludecomTbCludecompany().trim().equals(zz01M1s1.get(0).getcCludecomTbCludecompany().trim()));
				TpCgauthority tpCgauthority = tpCgauthorityMapper.selectDanWei(zz01list.getcCludecomTbCludecompany().trim(), "QDGS");
				if(tpCgauthority != null && "0".equals(tpCgauthority.getcEnabled().trim())) {
					System.out.println("bbbbbbbbbbbbbbbbbbbbb");
					tpCgauthority.setcSubitemdes(zz01M1s1.get(0).getcCludecomTbCludecompany().trim());
					int rwou = tpCgauthorityMapper.updateByPrimaryKeySelective(tpCgauthority);
					if(rwou >= 0) {
						return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
					}
				}
			}
			row0 = frcDao.M1S11UZZ_01_M1S1(zz01M1s1);
			if (row0 < 0) {
				msg = msg + "ZZ_01_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, ZZ_01_Request_M1S1 zz01RequestM1s1, String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<ZZ_01_M1S1> zz01M1s1 = zz01RequestM1s1.getZz01M1s1();
		String ss_ret0 = "";
		ss_ret0 = zz01Customer.check_M1S11D_ZZ_01_M1S1(zz01RequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11DZZ_01_M1S1(zz01M1s1);
//			List<TpCgauthority> authority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("QDGS", null);
//			for (TpCgauthority tpCgauthority : authority) {
//				if(tpCgauthority.getcSubitemdes().trim().equals(zz01M1s1.get(0).getcCludecomTbCludecompany().trim())) {
//					int rowd = tpCgauthorityMapper.deleteByPrimaryKey(tpCgauthority.getcId());
//					if(rowd >= 0) {
//						return builder.errcode(Errcode.FailParameterError).msg("删除失败").session(session).build();
//					}
//					break;
//				}
//			}
			if (row0 < 0) {
				msg = msg + "ZZ_01_M1S1删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> Import_CompExcel(
			RequestObject<EmptyTag, ZZ_01_Request_add> requestObject, User user) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbCludecompany> list = new ArrayList<TbCludecompany>();
		Date date = new Date();
		List<TpCgauthority> authority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("QDGS", null);
		int num = 0;
		if(authority.size() > 0) {
			num = authority.size();
		}
		for (TbCludecompany tbCludecompany : requestObject.getData().getTbCludecompany()) {
			TbCludecompany tb = new TbCludecompany();
			if (tbCludecompany.getcCludecom() == null || "".equals(tbCludecompany.getcCludecom())) {
				return builder.errcode(Errcode.FailParameterError).msg("公司名称不能为空").build();
//				tbCludecompany.setcCludecom(null);
			} else {
				tb.setcCludecom(tbCludecompany.getcCludecom().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				ZZ_01_M1S1 m1s1 = new ZZ_01_M1S1();
				m1s1.setcCludecomTbCludecompany(tbCludecompany.getcCludecom().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				List<ZZ_01_M1S1> m1s1list = frcDao.M1S11QZZ_01_M1S1(m1s1);
				if(m1s1list.size() > 0) {
					continue;
				}
			}
			if (tbCludecompany.getcComaccountno() == null || "".equals(tbCludecompany.getcComaccountno())) {
				tbCludecompany.setcComaccountno(null);
			} else {
				tb.setcComaccountno(tbCludecompany.getcComaccountno().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (tbCludecompany.getcComaddress() == null || "".equals(tbCludecompany.getcComaddress())) {
				tbCludecompany.setcComaddress(null);
			} else {
				tb.setcComaddress(tbCludecompany.getcComaddress().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (tbCludecompany.getcCombankname() == null || "".equals(tbCludecompany.getcCombankname())) {
				tbCludecompany.setcCombankname(null);
			} else {
				tb.setcComfaxno(tbCludecompany.getcCombankname().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			if (tbCludecompany.getcComfaxno() == null || "".equals(tbCludecompany.getcComfaxno())) {
				tbCludecompany.setcComfaxno(null);
			} else {
				tb.setcComfaxno(tbCludecompany.getcComfaxno().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}

			if (tbCludecompany.getcComphone() == null || "".equals(tbCludecompany.getcComphone())) {
				tbCludecompany.setcComphone(null);
			} else {
				tb.setcComphone(tbCludecompany.getcComphone().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}

			if (tbCludecompany.getcComtaxnumber() == null || "".equals(tbCludecompany.getcComtaxnumber())) {
				tbCludecompany.setcComtaxnumber(null);
			} else {
				tb.setcComtaxnumber(tbCludecompany.getcComtaxnumber().replace("/", "-").replaceAll(" ", "")
						.replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}

			if (tbCludecompany.getcSw01() == null || "".equals(tbCludecompany.getcSw01())) {
				tbCludecompany.setcSw01(null);
			} else {
				tb.setcSw01(tbCludecompany.getcSw01().replace("/", "-").replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", ""));
			}
			tb.setcCreater(user.getUserName());
			tb.setcCreatetime(date);
			list.add(tbCludecompany);
			boolean isOk = true;			
			if(num > 0) {
				for (TpCgauthority tpCgauthority : authority) {
					if(tpCgauthority.getcSubitemdes().trim().equals(tbCludecompany.getcCludecom().trim())) {
						isOk = !isOk;
					}
				}
				if(isOk) {
					TpCgauthority tpCgauthority = new TpCgauthority();
					tpCgauthority.setcCreater(user.getUserName());
					tpCgauthority.setcCreatetime(date);
					tpCgauthority.setcItemid(authority.get(0).getcItemid());
					tpCgauthority.setcItemdes(authority.get(0).getcItemdes());
					tpCgauthority.setcSubitemid("" + ++num);
					tpCgauthority.setcSubitemdes(tbCludecompany.getcCludecom());
					tpCgauthority.setcEnabled("0");
					int rowi = tpCgauthorityMapper.insertSelective(tpCgauthority);
					if(rowi >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
					}
				}
				
			}
		}
		int excel = frcDao.Import_CompExcel(list);
		if (excel == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg("导入失败").build();
		}
		return builder.errcode(Errcode.Success).msg("导入成功").build();
	}

	public ResponseObject<EmptyTag, List<TbCludecompany>> findCompInfo(EmptyData data, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbCludecompany> findCompInfo = frcDao.findCompInfo();
		return builder.data(findCompInfo).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, List<TbCludecompany>> getCompInfo(User user,TbCludecompany tbCludecompany, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgauthority thority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		List<TbCludecompany> compInfo = frcDao.getCompInfo(tbCludecompany);
		for (TbCludecompany company : compInfo) {
			if(thority.getcValue() == null) {
				company.setcComphone("");
			}else {
				company.setcComphone(thority.getcValue());
			}			
		}
		return builder.data(compInfo).msg(msg).errcode(Errcode.Success).session(session).build();
	}

}
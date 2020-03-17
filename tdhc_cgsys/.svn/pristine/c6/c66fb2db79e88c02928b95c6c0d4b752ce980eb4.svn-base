
package cn.tdhc.TB_MATTER_GROUP.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_ATTR_GROUP.mapper.IWIP_AGROUP_Mapper;
import cn.tdhc.TB_MATTER_GROUP.customer.IWIP_MGROUP_Customer;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.mapper.IWIP_MGROUP_Mapper;
import cn.tdhc.TB_MATTER_GROUP.request.IWIP_MGROUP_Request_M1S1;
import cn.tdhc.TB_MATTER_GROUP.response.IWIP_MGROUP_Response_M1S1;
import cn.tdhc.TB_MATTER_GROUP.service.IWIP_MGROUP_Service;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("iwipMgroupService")
public class IWIP_MGROUP_ServiceImpl implements IWIP_MGROUP_Service {
	@Autowired
	@Qualifier("iwipMgroupMapper")
	public IWIP_MGROUP_Mapper frcDao;
	@Autowired
	public IWIP_MGROUP_Customer iwipMgroupCustomer;
	@Autowired
	public IWIP_AGROUP_Mapper iwipAgroupMapper;

	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> M1S11Q(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.M1S11QIWIP_MGROUP_M1S1(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	//添加物资时的查询
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> addMaterial(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		//为查询出来的物资添加主属性
		List<IWIP_MGROUP_M1S1> m1s11qiwip_MGROUP_M1S1 = frcDao.M1S11QIWIP_MGROUP_M1S1(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0));
		//分装所有属性
		List<IWIP_AGROUP_M1S1> mainIwipAgroupM1s1 = new ArrayList<IWIP_AGROUP_M1S1>();
		//分装所有属性值
		List<IWIP_AGROUP_M1S1> viceIwipAgroupM1s1 = new ArrayList<IWIP_AGROUP_M1S1>();
		//判断是否有物资
		if(m1s11qiwip_MGROUP_M1S1.size() > 0) {
			for (int i = 0; i < m1s11qiwip_MGROUP_M1S1.size(); i++) {
				IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = m1s11qiwip_MGROUP_M1S1.get(i);
				if(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup().length() == 8) {
					List<IWIP_AGROUP_M1S1> selectAttributes = iwipAgroupMapper.selectAttributes(iwip_MGROUP_M1S1);
					if(selectAttributes.size() > 0) {
						for (int j = 0; j < selectAttributes.size(); j++) {
							IWIP_AGROUP_M1S1 iwip_AGROUP_M1S1 = selectAttributes.get(j);
							mainIwipAgroupM1s1.add(iwip_AGROUP_M1S1);
							List<IWIP_AGROUP_M1S1> selectViceAttributes = iwipAgroupMapper.selectViceAttributes(iwip_AGROUP_M1S1);
							if(selectViceAttributes.size() > 0) {
								for (int k = 0; k < selectViceAttributes.size(); k++) {
									IWIP_AGROUP_M1S1 iwip_AGROUP_M1S12 = selectViceAttributes.get(k);
									viceIwipAgroupM1s1.add(iwip_AGROUP_M1S12);
								}
							}
						}
					}
				}
			}
		}
		data.setIwipMgroupM1s1(m1s11qiwip_MGROUP_M1S1);
		data.setMainIwipAgroupM1s1(mainIwipAgroupM1s1);
		data.setViceIwipAgroupM1s1(viceIwipAgroupM1s1);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.check_M1S11A_IWIP_MGROUP_M1S1(user, iwipMgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.check_M1S11U_IWIP_MGROUP_M1S1(user, iwipMgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.check_M1S11D_IWIP_MGROUP_M1S1(iwipMgroupRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11DIWIP_MGROUP_M1S1(iwipMgroupM1s1);
			if (row0 < 0) {
				msg = msg + "IWIP_MGROUP_M1S1删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S12MSG(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.check_M1S12MSG_IWIP_MGROUP_M1S1(iwipMgroupRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S12MSGIWIP_MGROUP_M1S1(iwipMgroupM1s1);
			if (row0 < 0) {
				msg = msg + "IWIP_MGROUP_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S13MSG(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.check_M1S13MSG_IWIP_MGROUP_M1S1(user, iwipMgroupRequestM1s1);
		if (ss_ret0.contains("success")) {
			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> getCountDelFlag(User user,
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = frcDao
				.getCountDelFlag(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0));

		if (iwipMgroupM1s1 != null) {
			return builder.errcode(Errcode.Success).data(iwipMgroupM1s1).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).data(null).session(session).build();
		}
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> addMgroupMsg(User user,
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		List<IWIP_MGROUP_M1S1> dataList = new ArrayList<IWIP_MGROUP_M1S1>();
		IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = new IWIP_MGROUP_M1S1();
		iwip_MGROUP_M1S1.setcIdTbMatterGroup("");
		iwip_MGROUP_M1S1.setcCnameTbMatterGroup("");
		iwip_MGROUP_M1S1.setcEnaemTbMatterGroup("");
		dataList.add(iwip_MGROUP_M1S1);
		data.setIwipMgroupM1s1(dataList);
		return builder.data(data).msg("").errcode(Errcode.Success).session(session).build();
		
		/*String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.addMgroupMsg(iwipMgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}*/
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgOne(
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.selectMsgOne(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgTwo(
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.selectMsgTwo(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgThree(
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.selectMsgThree(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgFour(
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.selectMsgFour(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	
	public ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectLinkage(
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_MGROUP_Response_M1S1 data = new IWIP_MGROUP_Response_M1S1();
		data.setIwipMgroupM1s1(frcDao.selectLinkage(iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
	public ResponseObject<EmptyTag, EmptyData> insertTbAttrGroupBigMsg(User user,
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipMgroupCustomer.checkTbAttrGroupBigMsg(user,iwipMgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	
}
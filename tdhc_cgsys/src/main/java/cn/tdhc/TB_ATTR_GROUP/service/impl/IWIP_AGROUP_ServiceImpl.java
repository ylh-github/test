
package cn.tdhc.TB_ATTR_GROUP.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import cn.tdhc.TB_ATTR_GROUP.customer.IWIP_AGROUP_Customer;
import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_ATTR_GROUP.mapper.IWIP_AGROUP_Mapper;
import cn.tdhc.TB_ATTR_GROUP.request.IWIP_AGROUP_Request_M1S1;
import cn.tdhc.TB_ATTR_GROUP.response.IWIP_AGROUP_Response_M1S1;
import cn.tdhc.TB_ATTR_GROUP.service.IWIP_AGROUP_Service;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.mapper.IWIP_MGROUP_Mapper;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("iwipAgroupService")
public class IWIP_AGROUP_ServiceImpl implements IWIP_AGROUP_Service {
	@Autowired
	@Qualifier("iwipAgroupMapper")
	public IWIP_AGROUP_Mapper frcDao;
	@Autowired
	public IWIP_AGROUP_Customer iwipAgroupCustomer;

	@Autowired
	private IWIP_MGROUP_Mapper iwipMgroupMapper;

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> M1S11Q(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		data.setIwipAgroupM1s1(frcDao.M1S11QIWIP_AGROUP_M1S1(iwipAgroupRequestM1s1.getIwipAgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> mainAndViceAttr(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		data.setIwipAgroupM1s1(frcDao.selectAttributes(iwipAgroupRequestM1s1.getIwipMgroupM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> viceAttrCheck(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		data.setIwipAgroupM1s1(frcDao.selectViceAttrCheck(iwipAgroupRequestM1s1.getViceMatCode()));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipAgroupCustomer.check_M1S11A_IWIP_AGROUP_M1S1(user, iwipAgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = iwipAgroupCustomer.check_M1S11U_IWIP_AGROUP_M1S1(user, iwipAgroupRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11UIWIP_AGROUP_M1S1(iwipAgroupM1s1);
			if (row0 < 0) {
				msg = msg + "IWIP_AGROUP_M1S1修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipAgroupCustomer.check_M1S11D_IWIP_AGROUP_M1S1(user, iwipAgroupRequestM1s1);
		if (ss_ret0.contains("success")) {
			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountDelFlag(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		List<IWIP_AGROUP_M1S1> iwipMgroupM1s1 = frcDao
				.getCountDelFlag(iwipMgroupRequestM1s1.getIwipAgroupM1s1().get(0));

		if (iwipMgroupM1s1 != null) {
			return builder.errcode(Errcode.Success).data(iwipMgroupM1s1).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).data(null).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountCmatCode(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		IWIP_AGROUP_Response_M1S1 iwipAgroupResponse = new IWIP_AGROUP_Response_M1S1();

		List<IWIP_MGROUP_M1S1> iwipAgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();

		if (iwipAgroupM1s1 == null) {

			iwipAgroupResponse.setFlag("false");

			iwipAgroupResponse.setIwipAgroupM1s1(null);

			return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
		} else {

			String cMatCode = iwipAgroupM1s1.get(0).getcMatCodeTbMatterGroup();

			Integer rowCount = frcDao.getCountCmatCode(cMatCode);

			if (rowCount == 1) {

				iwipAgroupResponse.setFlag("false");

				iwipAgroupResponse.setIwipAgroupM1s1(null);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}
			if (rowCount == 2) {

				iwipAgroupResponse.setFlag("false");

				iwipAgroupResponse.setIwipAgroupM1s1(null);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}

			if (rowCount == 3) {

				IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0);

				IWIP_AGROUP_M1S1 iwipAgroup = new IWIP_AGROUP_M1S1();

				iwipAgroup.setcParentIdTbAttrGroup("10");

				iwipAgroup.setcMatCodeTbAttrGroup(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup());

				// 区别其他的方式传递
				// iwipAgroup.setReserve9TbAttrGroup(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup());

				List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

				iwipAgroupResponse.setFlag("true");

				iwipAgroupResponse.setSur("3");

				iwipAgroupResponse.setIwipAgroupM1s1(iwipAgroupList);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}

			if (rowCount == 4) {

				IWIP_AGROUP_M1S1 iwipAgroup = new IWIP_AGROUP_M1S1();

				boolean flag = false;

				Map<String, List<IWIP_AGROUP_M1S1>> map = new HashMap<String, List<IWIP_AGROUP_M1S1>>();

				if (iwipAgroupM1s1.get(0).getReserve1TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve1TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve1TbMatterGroup", newIwipAgroupLists);

					map.put("reserve1", newIwipAgroupListq);

					flag = true;
				} else {
					map.put("reserve1TbMatterGroup", null);

					map.put("reserve1", null);
				}
				if (iwipAgroupM1s1.get(0).getReserve2TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve2TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve2TbMatterGroup", newIwipAgroupLists);

					map.put("reserve2", newIwipAgroupListq);

					flag = true;
				} else {
					map.put("reserve2TbMatterGroup", null);

					map.put("reserve2", null);
				}
				if (iwipAgroupM1s1.get(0).getReserve3TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve3TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve3TbMatterGroup", newIwipAgroupLists);

					map.put("reserve3", newIwipAgroupListq);

					flag = true;
				} else {
					map.put("reserve3TbMatterGroup", null);

					map.put("reserve3", null);
				}
				if (iwipAgroupM1s1.get(0).getReserve4TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve4TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve4TbMatterGroup", newIwipAgroupLists);

					map.put("reserve4", newIwipAgroupListq);

					flag = true;
				} else {
					map.put("reserve4TbMatterGroup", null);

					map.put("reserve4", null);
				}
				if (iwipAgroupM1s1.get(0).getReserve5TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve5TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve5TbMatterGroup", newIwipAgroupLists);

					map.put("reserve5", newIwipAgroupListq);
					flag = true;

				} else {
					map.put("reserve5TbMatterGroup", null);

					map.put("reserve5", null);
				}
				if (iwipAgroupM1s1.get(0).getReserve6TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupM1s1.get(0).getReserve6TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

					List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

					for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

						if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

							if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

								newIwipAgroupListq.add(iwipAgroups);

							} else {
								newIwipAgroupLists.add(iwipAgroups);
							}
						}
					}

					map.put("reserve6TbMatterGroup", newIwipAgroupLists);

					map.put("reserve6", newIwipAgroupListq);

					flag = true;

				} else {
					map.put("reserve6TbMatterGroup", null);

					map.put("reserve6", null);
				}
				if (flag) {

					iwipAgroupResponse.setFlag("true");

					iwipAgroupResponse.setSur("4");

					iwipAgroupResponse.setMapList(map);

					return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session)
							.build();
				} else {
					iwipAgroupResponse.setFlag("false");

					return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session)
							.build();
				}

			}

		}
		return null;
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountUpdateCmatCode(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		IWIP_AGROUP_Response_M1S1 iwipAgroupResponse = new IWIP_AGROUP_Response_M1S1();

		List<IWIP_MGROUP_M1S1> iwipAgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();

		IWIP_MGROUP_M1S1 iwipMgroupM1S1 = new IWIP_MGROUP_M1S1();

		iwipMgroupM1S1.setcMatCodeTbMatterGroup(iwipAgroupM1s1.get(0).getcParentIdTbMatterGroup());

		List<IWIP_MGROUP_M1S1> iwipMgroupList = iwipMgroupMapper.getMatCodeInfo(iwipMgroupM1S1);

		if (iwipMgroupList == null) {

			iwipAgroupResponse.setFlag("false");

			iwipAgroupResponse.setIwipAgroupM1s1(null);

			return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
		} else {

			String cMatCode = iwipAgroupM1s1.get(0).getcMatCodeTbMatterGroup();

			Integer rowCount = frcDao.getCountCmatCode(cMatCode);

			if (rowCount == 1) {

				iwipAgroupResponse.setFlag("false");

				iwipAgroupResponse.setIwipAgroupM1s1(null);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}
			if (rowCount == 2) {

				iwipAgroupResponse.setFlag("false");

				iwipAgroupResponse.setIwipAgroupM1s1(null);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}
			if (rowCount == 3) {

				iwipAgroupResponse.setFlag("false");

				iwipAgroupResponse.setIwipAgroupM1s1(null);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}

			if (rowCount == 4) {

				IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1().get(0);

				IWIP_AGROUP_M1S1 iwipAgroup = new IWIP_AGROUP_M1S1();

				iwipAgroup.setcParentIdTbAttrGroup("10");

				iwipAgroup.setcMatCodeTbAttrGroup(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup().substring(0, 6));

				List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

				iwipAgroupResponse.setFlag("true");

				iwipAgroupResponse.setSur("4");

				iwipAgroupResponse.setIwipAgroupM1s1(iwipAgroupList);

				return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session).build();
			}

			if (rowCount == 5) {

				IWIP_AGROUP_M1S1 iwipAgroup = new IWIP_AGROUP_M1S1();

				boolean flag = false;

				Map<String, List<IWIP_AGROUP_M1S1>> map = new HashMap<String, List<IWIP_AGROUP_M1S1>>();

				if (iwipMgroupList.get(0).getReserve1TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve1TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * 
							 * newIwipAgroupListq.add(iwipAgroups);
							 * 
							 * } else { newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve1TbMatterGroup", newIwipAgroupLists);
						map.put("reserve1", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve1TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */ } else {
					map.put("reserve1TbMatterGroup", null);
				}
				if (iwipMgroupList.get(0).getReserve2TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve2TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * newIwipAgroupListq.add(iwipAgroups); } else {
							 * newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve2TbMatterGroup", newIwipAgroupLists);
						map.put("reserve2", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve2TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */
				} else {
					map.put("reserve2TbMatterGroup", null);
				}
				if (iwipMgroupList.get(0).getReserve3TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve3TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * newIwipAgroupListq.add(iwipAgroups); } else {
							 * 
							 * newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve3TbMatterGroup", newIwipAgroupLists);
						map.put("reserve3", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve3TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */
				} else {
					map.put("reserve3TbMatterGroup", null);
				}
				if (iwipMgroupList.get(0).getReserve4TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve4TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * newIwipAgroupListq.add(iwipAgroups); } else {
							 * 
							 * newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve4TbMatterGroup", newIwipAgroupLists);
						map.put("reserve4", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve4TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */
				} else {
					map.put("reserve4TbMatterGroup", null);
				}
				if (iwipMgroupList.get(0).getReserve5TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve5TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * 
							 * newIwipAgroupListq.add(iwipAgroups); } else {
							 * 
							 * newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve5TbMatterGroup", newIwipAgroupLists);
						map.put("reserve5", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve5TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */

				} else {
					map.put("reserve5TbMatterGroup", null);
				}
				if (iwipMgroupList.get(0).getReserve6TbMatterGroup() != null) {

					iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupList.get(0).getReserve6TbMatterGroup());

					List<IWIP_AGROUP_M1S1> iwipAgroupList = frcDao.getDataParentId(iwipAgroup);

					if (iwipAgroupList != null) {

						iwipAgroup.setcMatCodeTbAttrGroup(iwipAgroupList.get(0).getcParentIdTbAttrGroup());

						List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(iwipAgroup);

						List<IWIP_AGROUP_M1S1> newIwipAgroupLists = new ArrayList<IWIP_AGROUP_M1S1>();

						List<IWIP_AGROUP_M1S1> newIwipAgroupListq = new ArrayList<IWIP_AGROUP_M1S1>();

						for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

							/*
							 * if (iwipAgroups.getcParentIdTbAttrGroup() == null) {
							 * 
							 * newIwipAgroupListq.add(iwipAgroups); } else {
							 * newIwipAgroupLists.add(iwipAgroups); }
							 */
							if (iwipAgroups.getcParentIdTbAttrGroup() != null) {

								if (iwipAgroups.getcParentIdTbAttrGroup().length() == 6) {

									newIwipAgroupListq.add(iwipAgroups);

								} else {
									newIwipAgroupLists.add(iwipAgroups);
								}
							}
						}

						map.put("reserve6TbMatterGroup", newIwipAgroupLists);
						map.put("reserve6", newIwipAgroupListq);

						flag = true;
					}
					/*
					 * map.put("reserve6TbMatterGroup", iwipAgroupList);
					 * 
					 * flag = true;
					 */

				} else {
					map.put("reserve6TbMatterGroup", null);
				}
				if (flag) {

					iwipAgroupResponse.setFlag("true");

					iwipAgroupResponse.setSur("5");

					iwipAgroupResponse.setMapList(map);

					return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session)
							.build();
				} else {
					iwipAgroupResponse.setFlag("false");

					return builder.errcode(Errcode.FailParameterError).data(iwipAgroupResponse).session(session)
							.build();
				}

			}

		}
		return null;
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> CA001(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session) {

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		IWIP_AGROUP_Response_M1S1 iwipAgroupResponse = new IWIP_AGROUP_Response_M1S1();

		List<IWIP_AGROUP_M1S1> newIwipAgroupList = frcDao.getDataParentId(new IWIP_AGROUP_M1S1());

		iwipAgroupResponse.setIwipAgroupM1s1(newIwipAgroupList);

		return builder.errcode(Errcode.Success).data(iwipAgroupResponse).session(session).build();
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupOne(
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		List<IWIP_AGROUP_M1S1> selectAgroupOne = frcDao
				.selectAgroupOne(iwipAgroupRequestM1s1.getIwipMgroupM1s1().get(0));
		data.setIwipAgroupM1s1(selectAgroupOne);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupTwo(
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		List<IWIP_AGROUP_M1S1> selectAgroupTwo = frcDao
				.selectAgroupTwo(iwipAgroupRequestM1s1.getIwipAgroupM1s1().get(0));
		data.setIwipAgroupM1s1(selectAgroupTwo);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsg(
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		List<IWIP_AGROUP_M1S1> selectAgroupMsg = frcDao
				.selectAgroupMsg(iwipAgroupRequestM1s1.getIwipAgroupM1s1().get(0));
		data.setIwipAgroupM1s1(selectAgroupMsg);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	
	public ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsgValue(
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		IWIP_AGROUP_Response_M1S1 data = new IWIP_AGROUP_Response_M1S1();
		List<IWIP_AGROUP_M1S1> selectAgroupMsg = frcDao
				.selectAgroupMsgValue(iwipAgroupRequestM1s1.getIwipAgroupM1s1().get(0));
		data.setIwipAgroupM1s1(selectAgroupMsg);
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupMsg(User user,
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipAgroupCustomer.insertAndUpDateAgroupMsg(user, iwipAgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupValue(User user,
			IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1, String session) {
		String msg = "";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		String ss_ret0 = "";
		ss_ret0 = iwipAgroupCustomer.insertAndUpDateAgroupValue(user, iwipAgroupRequestM1s1);
		if (ss_ret0.contains("success")) {

			return builder.errcode(Errcode.Success).msg(ss_ret0).session(session).build();
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	
}
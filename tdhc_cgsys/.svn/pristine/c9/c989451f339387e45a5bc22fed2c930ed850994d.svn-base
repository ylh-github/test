
package cn.tdhc.TB_MATTER_GROUP.customer;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.github.pagehelper.util.StringUtil;
//import com.tdhc.purchase.main.publics.mapper.Publics;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_ATTR_GROUP.mapper.IWIP_AGROUP_Mapper;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.mapper.IWIP_MGROUP_Mapper;
import cn.tdhc.TB_MATTER_GROUP.request.IWIP_MGROUP_Request_M1S1;
import cn.tdhc.publics.mapper.Publics;
import cn.tdhc.quality.util1.CIDUtils;
import cn.tdhc.quality.util1.HexBinDecOctUtil;
import cn.tdhc.quality.util1.IfIncludeStrUtils;
import vip.toda.piper.auth.web.client.User;

@Repository
public class IWIP_MGROUP_Customer {

	@Autowired
	private Publics publics;

	@Autowired
	public IWIP_MGROUP_Mapper iwipMgroupMapper;

	@Autowired
	private IWIP_AGROUP_Mapper iwipAgroupMapper;

	public String check_M1S11A_IWIP_MGROUP_M1S1(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {

		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();

		List<String> parameter = new ArrayList<String>();

		String cParentIdTbMatterGroup = iwipMgroupM1s1.get(0).getcParentIdTbMatterGroup();

		if (StringUtil.isEmpty(cParentIdTbMatterGroup)) {
			cParentIdTbMatterGroup = "";
		}

		Integer rowCount = iwipAgroupMapper.getCountCmatCode(cParentIdTbMatterGroup);
		if (rowCount != 4) {
			for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

				String uuid = CIDUtils.getCID("TB");

				iwipMgroup.setcIdTbMatterGroup(uuid);

				iwipMgroup.setcDrTbMatterGroup("0");

				iwipMgroup.setcTimestampTbMatterGroup(new Date());

				iwipMgroup.setcCreateUserTbMatterGroup(user.getUserName());

				iwipMgroup.setcCtimeTbMatterGroup(new Date());

				// 自动添加 cMatCodeTbMatterGroup 然后进行查询。
				if (StringUtils.isNotBlank(iwipMgroup.getcParentIdTbMatterGroup())) {
					// 获取前端的物料组编码
					String cParentIdTbAttrGroup = iwipMgroup.getcParentIdTbMatterGroup();
					// 添加Mapper方法
					String maxCmatCod = iwipMgroupMapper.getMaxCmatCod(cParentIdTbAttrGroup);
					if (maxCmatCod != null) {
						String subStr = maxCmatCod.substring(maxCmatCod.length() - 2, maxCmatCod.length());
						// 判断 subStr 中是否有字母，如果有则转换后再加 1, 没有直接加 1
						if (IfIncludeStrUtils.getStr(subStr)) {
							long strNum = HexBinDecOctUtil.getStrNum(subStr);
							long cMatCode = strNum + 1;
							String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
							// 新物料组编码
							String newcMatCodeStr = cParentIdTbAttrGroup + cMatCodeStr;
							iwipMgroup.setcMatCodeTbMatterGroup(newcMatCodeStr);
						} else {
							int parseInt = Integer.parseInt(subStr);
							int cMatCode = parseInt + 1;
							String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
							// 新物料组编码
							String newcMatCodeStr = cParentIdTbAttrGroup + cMatCodeStr;
							iwipMgroup.setcMatCodeTbMatterGroup(newcMatCodeStr);
						}
					} else {
						// 在该级别下没有子级，直接添加 01 即可
						String newcMatCodeStr = cParentIdTbAttrGroup + "01";
						iwipMgroup.setcMatCodeTbMatterGroup(newcMatCodeStr);
					}

				}

				parameter.add("'" + iwipMgroup.getcMatCodeTbMatterGroup() + "'");
			}
			Integer count = publics.getCountTableNumList("TB_MATTER_GROUP", "C_MAT_CODE", parameter);

			if (count > 0) {

				return "编码已重复,请重新输入";

			}
			int rows = iwipMgroupMapper.M1S11AIWIP_MGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "添加成功-success";
			} else {
				return "添加失败-success";
			}
		} else {
			for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

				String uuid = CIDUtils.getCID("TB");

				iwipMgroup.setcIdTbMatterGroup(uuid);

				iwipMgroup.setcDrTbMatterGroup("0");

				iwipMgroup.setcTimestampTbMatterGroup(new Date());

				iwipMgroup.setcCreateUserTbMatterGroup(user.getUserName());

				iwipMgroup.setcCtimeTbMatterGroup(new Date());

				// 自动添加第五级物料组编码
				String finallyCmatCode = null;
				if (StringUtils.isNotBlank(iwipMgroup.getcParentIdTbMatterGroup())) {
					// 获取前端的物料组编码的上级ID
					String cParentIdTbAttrGroup = iwipMgroup.getcParentIdTbMatterGroup();
					// 将父节点编码截取6位作为查询(爷爷辈)
					String sixParentId = cParentIdTbAttrGroup.substring(0, 6);
					// 添加Mapper方法
					String maxCmatCodNum = iwipMgroupMapper.getMaxCmatCodSixNum(sixParentId);
					if (maxCmatCodNum != null) {
						String subStrOld = maxCmatCodNum.substring(0, 8);
						String subStr = subStrOld.substring(subStrOld.length() - 2, subStrOld.length());
						// 判断 subStr 中是否有字母，如果有则转换后再加 1, 没有直接加 1,作为添加的新物料组编码
						if (IfIncludeStrUtils.getStr(subStr)) {
							long strNum = HexBinDecOctUtil.getStrNum(subStr);
							long cMatCode = strNum + 1;
							String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
							// 新物料组编码
							finallyCmatCode = cParentIdTbAttrGroup.substring(0, 6) + cMatCodeStr;
						} else {
							int parseInt = Integer.parseInt(subStr);
							int cMatCode = parseInt + 1;
							String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
							// 新物料组编码
							finallyCmatCode = cParentIdTbAttrGroup.substring(0, 6) + cMatCodeStr;
						}
					} else {
						// 在该级别下没有子级，直接添加 01 即可
						finallyCmatCode = cParentIdTbAttrGroup.substring(0, 6) + "01";
					}

				}

				// 准备好8位的物料组编码与属性编码合并

				if (iwipMgroup.getReserve1TbMatterGroup() != null) {

					String reserve1 = iwipMgroup.getReserve1TbMatterGroup();

					finallyCmatCode += reserve1.substring(reserve1.length() - 2, reserve1.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}
				if (iwipMgroup.getReserve2TbMatterGroup() != null) {

					String reserve2 = iwipMgroup.getReserve2TbMatterGroup();

					finallyCmatCode += reserve2.substring(reserve2.length() - 2, reserve2.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}
				if (iwipMgroup.getReserve3TbMatterGroup() != null) {

					String reserve3 = iwipMgroup.getReserve3TbMatterGroup();

					finallyCmatCode += reserve3.substring(reserve3.length() - 2, reserve3.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}
				if (iwipMgroup.getReserve4TbMatterGroup() != null) {

					String reserve4 = iwipMgroup.getReserve4TbMatterGroup();

					finallyCmatCode += reserve4.substring(reserve4.length() - 2, reserve4.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}
				if (iwipMgroup.getReserve5TbMatterGroup() != null) {

					String reserve5 = iwipMgroup.getReserve5TbMatterGroup();

					finallyCmatCode += reserve5.substring(reserve5.length() - 2, reserve5.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}
				if (iwipMgroup.getReserve6TbMatterGroup() != null) {

					String reserve6 = iwipMgroup.getReserve6TbMatterGroup();

					finallyCmatCode += reserve6.substring(reserve6.length() - 2, reserve6.length());
				} else {
					finallyCmatCode = finallyCmatCode + "00";
				}

				iwipMgroup.setcMatCodeTbMatterGroup(finallyCmatCode);

				parameter.add("'" + iwipMgroup.getcMatCodeTbMatterGroup() + "'");
			}
			Integer count = publics.getCountTableNumList("TB_MATTER_GROUP", "C_MAT_CODE", parameter);

			if (count > 0) {

				return "编码已重复,请重新输入";

			}
			int rows = iwipMgroupMapper.M1S11AIWIP_MGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "添加成功-success";
			} else {
				return "添加失败-success";
			}

		}
	}

	public String check_M1S11U_IWIP_MGROUP_M1S1(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {

		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();

		Integer rowCount = iwipAgroupMapper.getCountCmatCode(iwipMgroupM1s1.get(0).getcMatCodeTbMatterGroup());

		if (rowCount == 5 || rowCount == 4) {

			for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

				String cMatCode = iwipMgroup.getcMatCodeTbMatterGroup();

				iwipMgroup.setcUpUserTbMatterGroup(user.getUserName());

				iwipMgroup.setcUptimeTbMatterGroup(new Date());

				if (rowCount == 5) {

					cMatCode = cMatCode.substring(0, cMatCode.length() - 12);

					if (iwipMgroup.getReserve1TbMatterGroup() != null) {

						String reserve1 = iwipMgroup.getReserve1TbMatterGroup();

						cMatCode = cMatCode + reserve1.substring(reserve1.length() - 2, reserve1.length());
					} else {
						iwipMgroup.setReserve1TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					if (iwipMgroup.getReserve2TbMatterGroup() != null) {

						String reserve2 = iwipMgroup.getReserve2TbMatterGroup();

						cMatCode = cMatCode + reserve2.substring(reserve2.length() - 2, reserve2.length());
					} else {
						iwipMgroup.setReserve2TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					if (iwipMgroup.getReserve3TbMatterGroup() != null) {

						String reserve3 = iwipMgroup.getReserve3TbMatterGroup();

						cMatCode = cMatCode + reserve3.substring(reserve3.length() - 2, reserve3.length());
					} else {
						iwipMgroup.setReserve3TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					if (iwipMgroup.getReserve4TbMatterGroup() != null) {

						String reserve4 = iwipMgroup.getReserve4TbMatterGroup();

						cMatCode = cMatCode + reserve4.substring(reserve4.length() - 2, reserve4.length());
					} else {
						iwipMgroup.setReserve4TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					if (iwipMgroup.getReserve5TbMatterGroup() != null) {

						String reserve5 = iwipMgroup.getReserve5TbMatterGroup();

						cMatCode = cMatCode + reserve5.substring(reserve5.length() - 2, reserve5.length());
					} else {
						iwipMgroup.setReserve5TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					if (iwipMgroup.getReserve6TbMatterGroup() != null) {

						String reserve6 = iwipMgroup.getReserve6TbMatterGroup();

						cMatCode = cMatCode + reserve6.substring(reserve6.length() - 2, reserve6.length());
					} else {
						iwipMgroup.setReserve6TbMatterGroup("");
						cMatCode = cMatCode + "00";
					}
					iwipMgroup.setcMatCodeTbMatterGroup(cMatCode);
				}
				if (iwipMgroup.getReserve1TbMatterGroup() == null) {

					iwipMgroup.setReserve1TbMatterGroup("");
				}
				if (iwipMgroup.getReserve2TbMatterGroup() == null) {

					iwipMgroup.setReserve2TbMatterGroup("");
				}
				if (iwipMgroup.getReserve3TbMatterGroup() == null) {

					iwipMgroup.setReserve3TbMatterGroup("");
				}
				if (iwipMgroup.getReserve4TbMatterGroup() == null) {

					iwipMgroup.setReserve4TbMatterGroup("");
				}
				if (iwipMgroup.getReserve5TbMatterGroup() == null) {

					iwipMgroup.setReserve5TbMatterGroup("");
				}
				if (iwipMgroup.getReserve6TbMatterGroup() == null) {

					iwipMgroup.setReserve6TbMatterGroup("");
				}
			}
			int rows = iwipMgroupMapper.M1S11UIWIP_MGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "修改成功-success";
			} else {
				return "修改失败-success";
			}
		} else {
			for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

				iwipMgroup.setcUpUserTbMatterGroup(user.getUserName());

				iwipMgroup.setcUptimeTbMatterGroup(new Date());
			}

			int rows = iwipMgroupMapper.M1S11UIWIP_MGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "修改成功-success";
			} else {
				return "修改失败-success";
			}
		}
	}

	public String check_M1S11D_IWIP_MGROUP_M1S1(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {
		return "success";
	}

	public String check_M1S12MSG_IWIP_MGROUP_M1S1(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {
		return "success";
	}

	// 物料编码删除
	public String check_M1S13MSG_IWIP_MGROUP_M1S1(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {

		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		
		List<IWIP_MGROUP_M1S1> deleteMattList = new ArrayList<IWIP_MGROUP_M1S1>(); 
		
		List<IWIP_AGROUP_M1S1> deleteMattListAgroup = new ArrayList<IWIP_AGROUP_M1S1>(); 

		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1List = new ArrayList<IWIP_MGROUP_M1S1>();
		
		for (int i = 0; i < iwipMgroupM1s1.size(); i++) {
			List<IWIP_MGROUP_M1S1> iwipMgroupM1s1s = iwipMgroupMapper.getCountDelFlag(iwipMgroupM1s1.get(i));

			for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1s) {

				iwipMgroup.setcDelteUserTbMatterGroup(user.getUserName());

				iwipMgroup.setcDeluserTbMatterGroup(new Date());

				iwipMgroup.setcDrTbMatterGroup("1");

				iwipMgroupM1s1List.add(iwipMgroup);
			}
		}
		for (IWIP_MGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

			iwipMgroup.setcDelteUserTbMatterGroup(user.getUserName());

			iwipMgroup.setcDeluserTbMatterGroup(new Date());

			iwipMgroup.setcDrTbMatterGroup("1");

			iwipMgroupM1s1List.add(iwipMgroup);
		}
		
		for (int i = 0; i < iwipMgroupM1s1List.size(); i++) {
			String cMatCodeTbMatterGroup = iwipMgroupM1s1List.get(i).getcMatCodeTbMatterGroup();
			if(cMatCodeTbMatterGroup.length() == 8) {
				deleteMattList.add(iwipMgroupM1s1List.get(i));
			}
		}
		
		for (int i = 0; i < deleteMattList.size(); i++) {
			List<IWIP_AGROUP_M1S1> iwipMgroupM1s1s = iwipAgroupMapper.deleteAllAutt(deleteMattList.get(i));

			for (IWIP_AGROUP_M1S1 iwipMgroup : iwipMgroupM1s1s) {

				iwipMgroup.setcDelteUserTbAttrGroup(user.getUserName());

				iwipMgroup.setcDeluserTbAttrGroup(new Date());

				iwipMgroup.setcDrTbAttrGroup("1");

				deleteMattListAgroup.add(iwipMgroup);
			}
		}
		if(deleteMattListAgroup.size() > 0) {
			iwipAgroupMapper.M1S11DIWIP_AGROUP_M1S1(deleteMattListAgroup);
		}

		int rows = iwipMgroupMapper.M1S11DIWIP_MGROUP_M1S1(iwipMgroupM1s1List);

		if (rows < 0) {

			return "删除成功-success";
		} else {

			return "删除失败-error";
		}
	}

	/**
	 * 
	 * @param 用于给前端返回空数据
	 * @return
	 */
	public String addMgroupMsg(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {
		/*List<IWIP_MGROUP_M1S1> listDate = new ArrayList<IWIP_MGROUP_M1S1>();
		IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = new IWIP_MGROUP_M1S1();
		iwip_MGROUP_M1S1.setcIdTbMatterGroup(CIDUtils.getCID("TB"));
		listDate.add(iwip_MGROUP_M1S1);
		int rows = iwipMgroupMapper.M1S11AIWIP_MGROUP_M1S1(listDate);
		if (rows < 0) {

			return "success";
		} else {

			return "error";
		}*/
		return "success";
	}

	/**
	 * 添加物料编码信息
	 * 
	 * @param iwipMgroupRequestM1s1
	 * @return
	 */
	public String checkTbAttrGroupBigMsg(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1) {
		// 要添加的数据(儿子级别)
		List<IWIP_MGROUP_M1S1> iwipMgroupM1s1 = iwipMgroupRequestM1s1.getIwipMgroupM1s1();
		// 要添加数据的父亲(父亲级，当最高级时，该集合为空)
		List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg = iwipMgroupRequestM1s1.getIwipMgroupParentMsg();
		/*
		 * 首先判断 iwipMgroupParentMsg 是否为空 添加时，通过前端传值，判断该数据主键长度，如主键长度小于20，则表示添加新数据
		 * 如果主键等于20，这表示修改。通过主键对该信息进行修改
		 */
		// 添加新编码集合使用
		List<IWIP_MGROUP_M1S1> addNewMgroupList = new ArrayList<IWIP_MGROUP_M1S1>();
		// 修改新编码集合使用
		List<IWIP_MGROUP_M1S1> updateMgroupList = new ArrayList<IWIP_MGROUP_M1S1>();
		// 用户添加重复的编码数据
		List<IWIP_MGROUP_M1S1> isBlackCMatterCode = null;
		for (int i = 0; i < iwipMgroupM1s1.size(); i++) {
			// 判断主键长度
			String cIdTbMatterGroup = iwipMgroupM1s1.get(i).getcIdTbMatterGroup();
			if (cIdTbMatterGroup.length() != 20) {
				// 直接添加数据
				if (iwipMgroupParentMsg == null) {
					/*
					 * 添加大类编码信息 添加新数据,且判端物料断码是否重复
					 */
					IWIP_MGROUP_M1S1 iwipMgroupM1s1Data = iwipMgroupM1s1.get(i);
					String cMatCodeTbMatterGroup = iwipMgroupM1s1Data.getcMatCodeTbMatterGroup();// 物料组编码
					// 此集合为重复编码集合
					isBlackCMatterCode = iwipMgroupMapper.getIsBlackCMatterCode(cMatCodeTbMatterGroup);
					if (isBlackCMatterCode.size() == 0) {
						// 当 isBlackCMatterCode 为空时，则进行新数据的添加
						iwipMgroupM1s1Data.setcIdTbMatterGroup(CIDUtils.getCID("TB"));// 主键
						iwipMgroupM1s1Data.setcCreateUserTbMatterGroup(user.getUserName());// 创建人
						iwipMgroupM1s1Data.setcCtimeTbMatterGroup(new Date());// 创建时间
						iwipMgroupM1s1Data.setcDrTbMatterGroup("0");
						addNewMgroupList.add(iwipMgroupM1s1Data);
					} else {
						// 当 isBlackCMatterCode 不为空时，编码重复,将不重复的进行添加
						for (int j = 0; j < isBlackCMatterCode.size(); j++) {
							IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = isBlackCMatterCode.get(j);
							if (!iwipMgroupM1s1Data.getcMatCodeTbMatterGroup()
									.equals(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup())) {
								iwipMgroupM1s1Data.setcIdTbMatterGroup(CIDUtils.getCID("TB"));// 主键
								iwipMgroupM1s1Data.setcCreateUserTbMatterGroup(user.getUserName());// 创建人
								iwipMgroupM1s1Data.setcCtimeTbMatterGroup(new Date());// 创建时间
								iwipMgroupM1s1Data.setcDrTbMatterGroup("0");
								addNewMgroupList.add(iwipMgroupM1s1Data);
							}
						}
					}
				} else {
					// 添加子级信息
					/*
					 * 添加子级编码信息 添加新数据,且判端物料断码是否重复
					 */
					IWIP_MGROUP_M1S1 iwipMgroupM1s1Data = iwipMgroupM1s1.get(i);
					IWIP_MGROUP_M1S1 iwipParentId = iwipMgroupParentMsg.get(0);// 获取父节点
					String cMatCodeTbMatterGroup = iwipMgroupM1s1Data.getcMatCodeTbMatterGroup();// 物料组编码
					String newMatCode = iwipParentId.getcMatCodeTbMatterGroup() + cMatCodeTbMatterGroup;// 新子级编码
					// 此集合为重复编码集合
					isBlackCMatterCode = iwipMgroupMapper.getIsBlackCMatterCode(newMatCode);
					if (isBlackCMatterCode.size() == 0) {
						// 当 isBlackCMatterCode 为空时，则进行新数据的添加
						iwipMgroupM1s1Data.setcIdTbMatterGroup(CIDUtils.getCID("TB"));// 主键
						iwipMgroupM1s1Data.setcMatCodeTbMatterGroup(newMatCode);//设置物料编码
						iwipMgroupM1s1Data.setcParentIdTbMatterGroup(iwipParentId.getcMatCodeTbMatterGroup());// 上级编码
						iwipMgroupM1s1Data.setcCreateUserTbMatterGroup(user.getUserName());// 创建人
						iwipMgroupM1s1Data.setcCtimeTbMatterGroup(new Date());// 创建时间
						iwipMgroupM1s1Data.setcDrTbMatterGroup("0");
						addNewMgroupList.add(iwipMgroupM1s1Data);
					} else {
						// 当 isBlackCMatterCode 不为空时，编码重复,将不重复的进行添加
						for (int j = 0; j < isBlackCMatterCode.size(); j++) {
							IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = isBlackCMatterCode.get(j);
							if (!newMatCode.equals(iwip_MGROUP_M1S1.getcMatCodeTbMatterGroup())) {
								iwipMgroupM1s1Data.setcIdTbMatterGroup(CIDUtils.getCID("TB"));// 主键
								iwipMgroupM1s1Data.setcMatCodeTbMatterGroup(newMatCode);//设置物料编码
								iwipMgroupM1s1Data.setcParentIdTbMatterGroup(iwipParentId.getcMatCodeTbMatterGroup());// 上级编码
								iwipMgroupM1s1Data.setcCreateUserTbMatterGroup(user.getUserName());// 创建人
								iwipMgroupM1s1Data.setcCtimeTbMatterGroup(new Date());// 创建时间
								iwipMgroupM1s1Data.setcDrTbMatterGroup("0");
								addNewMgroupList.add(iwipMgroupM1s1Data);
							}
						}
					}
				}
			} else {
				// 修改数据
				for (int a = 0; a < iwipMgroupM1s1.size(); a++) {
					IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = iwipMgroupM1s1.get(a);
					iwip_MGROUP_M1S1.setcUpUserTbMatterGroup(user.getUserName());// 修改人
					iwip_MGROUP_M1S1.setcUptimeTbMatterGroup(new Date());// 修改时间
					updateMgroupList.add(iwip_MGROUP_M1S1);
				}
			}

		}
		if (updateMgroupList.size() > 0) {
			iwipMgroupMapper.M1S11UIWIP_MGROUP_M1S1(updateMgroupList);
		}
		if (addNewMgroupList.size() > 0) {
			iwipMgroupMapper.M1S11AIWIP_MGROUP_M1S1(addNewMgroupList);
		}
		return "success";
	}
}
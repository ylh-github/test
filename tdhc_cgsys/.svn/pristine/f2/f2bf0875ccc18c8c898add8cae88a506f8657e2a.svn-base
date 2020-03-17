
package cn.tdhc.TB_ATTR_GROUP.customer;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

//import com.tdhc.purchase.main.publics.mapper.Publics;
//import com.tdhc.purchase.util.AgroupIdValueUtil;
//import com.tdhc.purchase.util.HexBinDecOctUtil;
//import com.tdhc.purchase.util.IfIncludeStrUtils;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_ATTR_GROUP.mapper.IWIP_AGROUP_Mapper;
import cn.tdhc.TB_ATTR_GROUP.request.IWIP_AGROUP_Request_M1S1;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.publics.mapper.Publics;
import cn.tdhc.quality.util1.AgroupIdValueUtil;
import cn.tdhc.quality.util1.CIDUtils;
import cn.tdhc.quality.util1.HexBinDecOctUtil;
import cn.tdhc.quality.util1.IfIncludeStrUtils;
import vip.toda.piper.auth.web.client.User;

@Repository
public class IWIP_AGROUP_Customer {

	@Autowired
	private Publics publics;

	@Autowired
	private IWIP_AGROUP_Mapper iwipAgroupMapper;

	public String check_M1S11A_IWIP_AGROUP_M1S1(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1) {

		List<IWIP_AGROUP_M1S1> iwipMgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();

		List<String> parameter = new ArrayList<String>();

		for (IWIP_AGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

			String uuid = CIDUtils.getCID("TB");

			iwipMgroup.setcIdTbAttrGroup(uuid);

			iwipMgroup.setcDrTbAttrGroup("0");

			iwipMgroup.setcTimestampTbAttrGroup(new Date());

			iwipMgroup.setcCreateUserTbAttrGroup(user.getUserName());

			iwipMgroup.setcCtimeTbAttrGroup(new Date());

			// 自动添加物料组编码
			IWIP_AGROUP_M1S1 iwip_AGROUP_M1S1 = iwipMgroupM1s1.get(0);
			if (StringUtils.isNotBlank(iwip_AGROUP_M1S1.getcParentIdTbAttrGroup())) {
				// 获取前端的物料组编码
				String cParentIdTbAttrGroup = iwip_AGROUP_M1S1.getcParentIdTbAttrGroup();
				String maxCmatCod = iwipAgroupMapper.getMaxCmatCod(cParentIdTbAttrGroup);
				if (maxCmatCod != null) {
					String subStr = maxCmatCod.substring(maxCmatCod.length() - 2, maxCmatCod.length());
					// 判断 subStr 中是否有字母，如果有则转换后再加 1, 没有直接加 1
					if (IfIncludeStrUtils.getStr(subStr)) {
						long strNum = HexBinDecOctUtil.getStrNum(subStr);
						long cMatCode = strNum + 1;
						String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
						// 新物料组编码
						String newcMatCodeStr = cParentIdTbAttrGroup + cMatCodeStr;
						iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(newcMatCodeStr);
					} else {
						int parseInt = Integer.parseInt(subStr);
						int cMatCode = parseInt + 1;
						String cMatCodeStr = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
						// 新物料组编码
						String newcMatCodeStr = cParentIdTbAttrGroup + cMatCodeStr;
						iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(newcMatCodeStr);
					}
				} else {
					// 在该级别下没有子级，直接添加 01 即可
					String newcMatCodeStr = cParentIdTbAttrGroup + "01";
					iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(newcMatCodeStr);
				}

			}

			parameter.add("'" + iwipMgroup.getcMatCodeTbAttrGroup() + "'");
		}
		if (StringUtils.isBlank(iwipMgroupM1s1.get(0).getcParentIdTbAttrGroup())) {

			Integer count = publics.getCountTableNumList("TB_ATTR_GROUP", "C_MAT_CODE", parameter);

			if (count > 0) {

				return "编码已重复,请重新输入";

			}
			int rows = iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "添加成功-success";
			} else {
				return "添加失败-success";
			}
		} else {
			IWIP_AGROUP_M1S1 iwipAgroup = new IWIP_AGROUP_M1S1();

			iwipAgroup.setcMatCodeTbAttrGroup(iwipMgroupM1s1.get(0).getcParentIdTbAttrGroup());

			List<IWIP_AGROUP_M1S1> iwipAgroupList = iwipAgroupMapper.getDataParentId(iwipAgroup);

			for (IWIP_AGROUP_M1S1 iwipAgroups : iwipAgroupList) {

				if (iwipAgroups.getcMatCodeTbAttrGroup().equals(iwipMgroupM1s1.get(0).getcMatCodeTbAttrGroup())) {
					return "编码已重复,请重新输入";
				}
			}

			int rows = iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(iwipMgroupM1s1);

			if (rows < 0) {
				return "添加成功-success";
			} else {
				return "添加失败-success";
			}
		}
	}

	public String check_M1S11U_IWIP_AGROUP_M1S1(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1) {

		List<IWIP_AGROUP_M1S1> iwipMgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();

		for (IWIP_AGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

			iwipMgroup.setcUpUserTbAttrGroup(user.getUserName());

			iwipMgroup.setcUptimeTbAttrGroup(new Date());

		}

		return "success";
	}

	public String check_M1S11D_IWIP_AGROUP_M1S1(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1) {

		List<IWIP_AGROUP_M1S1> iwipMgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();

		List<IWIP_AGROUP_M1S1> iwipMgroupM1s1List = new ArrayList<IWIP_AGROUP_M1S1>();
		
		for (int i = 0; i < iwipMgroupM1s1.size(); i++) {
			List<IWIP_AGROUP_M1S1> iwipMgroupM1s1s = iwipAgroupMapper.getCountDelFlag(iwipMgroupM1s1.get(i));

			for (IWIP_AGROUP_M1S1 iwipMgroup : iwipMgroupM1s1s) {

				iwipMgroup.setcDelteUserTbAttrGroup(user.getUserName());

				iwipMgroup.setcDeluserTbAttrGroup(new Date());

				iwipMgroup.setcDrTbAttrGroup("1");

				iwipMgroupM1s1List.add(iwipMgroup);
			}
		}

		for (IWIP_AGROUP_M1S1 iwipMgroup : iwipMgroupM1s1) {

			iwipMgroup.setcDelteUserTbAttrGroup(user.getUserName());

			iwipMgroup.setcDeluserTbAttrGroup(new Date());

			iwipMgroup.setcDrTbAttrGroup("1");

			iwipMgroupM1s1List.add(iwipMgroup);
		}

		int rows = iwipAgroupMapper.M1S11DIWIP_AGROUP_M1S1(iwipMgroupM1s1List);

		if (rows < 0) {

			return "删除成功-success";
		} else {

			return "删除失败-error";
		}
	}

	/**
	 * 添加、修改属性
	 * 
	 * @param user
	 * @param iwipAgroupRequestM1s1
	 * @return
	 */
	public String insertAndUpDateAgroupMsg(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1) {
		// 要修改或增加的数据（子级）
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		// 根据这里的数据进行添加（父级）
		List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg = iwipAgroupRequestM1s1.getIwipMgroupParentMsg();
		// 用于添加数据的集合
		List<IWIP_AGROUP_M1S1> newDateAgroupMsg = new ArrayList<IWIP_AGROUP_M1S1>();
		// 用于保存重复数据的集合
		List<IWIP_AGROUP_M1S1> repreatDateAgroupMsg = null;
		//用于修改数据的集合
		List<IWIP_AGROUP_M1S1> updateDateAgroupMsg = new ArrayList<IWIP_AGROUP_M1S1>();
		/*
		 * 通过 iwipAgroupM1s1 获取数据主键，主键为空时，添加新数据 主键不为空时，则为修改数据
		 */
		for (int i = 0; i < iwipAgroupM1s1.size(); i++) {
			IWIP_AGROUP_M1S1 iwip_AGROUP_M1S1 = iwipAgroupM1s1.get(i);
			// 添加数据
			String cIdTbAttrGroup = iwipAgroupM1s1.get(i).getcIdTbAttrGroup();
			if (cIdTbAttrGroup.length() != 20) {
				// 进行重复数据的查询
				String newMatCode = "";
				String cMatCodeTbAttrGroup = iwip_AGROUP_M1S1.getcMatCodeTbAttrGroup();
				String cMatCodeTbMatterGroup = iwipMgroupParentMsg.get(0).getcMatCodeTbMatterGroup();
				String maxCmatCod = iwipAgroupMapper.getMaxCmatCod(cMatCodeTbMatterGroup);
				if(StringUtils.isBlank(maxCmatCod)) {
					newMatCode = cMatCodeTbMatterGroup + "01";
				}else {
					String subStr = maxCmatCod.substring(maxCmatCod.length() - 2, maxCmatCod.length());
					// 判断 subStr 中是否有字母，如果有则转换后再加 1, 没有直接加 1
					if (IfIncludeStrUtils.getStr(subStr)) {
						long strNum = HexBinDecOctUtil.getStrNum(subStr);
						long cMatCode = strNum + 1;
						newMatCode  = HexBinDecOctUtil.getConversionNum(cMatCode, 2);
					} else {
						int parseInt = Integer.parseInt(subStr);
						int cMatCode = parseInt + 1;
						newMatCode = cMatCodeTbMatterGroup + HexBinDecOctUtil.getConversionNum(cMatCode, 2);
					}
				}
				repreatDateAgroupMsg = iwipAgroupMapper.selectRepeatDate(newMatCode);
				if (repreatDateAgroupMsg.size() == 0) {
					// 直接添加数据
					iwip_AGROUP_M1S1.setcIdTbAttrGroup(CIDUtils.getCID("TB"));// 主键
					iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(newMatCode);// 物料编码
					iwip_AGROUP_M1S1.setcParentIdTbAttrGroup(cMatCodeTbMatterGroup);//上级编码
					iwip_AGROUP_M1S1.setcCreateUserTbAttrGroup(user.getUserName());// 创建人
					iwip_AGROUP_M1S1.setcCtimeTbAttrGroup(new Date());// 创建时间
					iwip_AGROUP_M1S1.setcDrTbAttrGroup("0");// 删除标识
					newDateAgroupMsg.add(iwip_AGROUP_M1S1);
					if (newDateAgroupMsg.size() > 0) {
						iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(newDateAgroupMsg);
						newDateAgroupMsg.remove(0);
					}
				} else {
					// 将不重复的数据进行添加
					for (int j = 0; j < repreatDateAgroupMsg.size(); j++) {
						String repeatMatCodeTbAttrGroup = repreatDateAgroupMsg.get(i).getcMatCodeTbAttrGroup();
						if (!cMatCodeTbMatterGroup.equals(repeatMatCodeTbAttrGroup)) {
							iwip_AGROUP_M1S1.setcIdTbAttrGroup(CIDUtils.getCID("TB"));// 主键
							iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(newMatCode);// 物料编码
							iwip_AGROUP_M1S1.setcParentIdTbAttrGroup(cMatCodeTbMatterGroup);//上级编码
							iwip_AGROUP_M1S1.setcCreateUserTbAttrGroup(user.getUserName());// 创建人
							iwip_AGROUP_M1S1.setcCtimeTbAttrGroup(new Date());// 创建时间
							iwip_AGROUP_M1S1.setcDrTbAttrGroup("0");// 删除标识
							newDateAgroupMsg.add(iwip_AGROUP_M1S1);
							if (newDateAgroupMsg.size() > 0) {
								iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(newDateAgroupMsg);
								newDateAgroupMsg.remove(0);
							}
						}
					}
				}

			} else {
				// 修改数据
				iwip_AGROUP_M1S1.setcUpUserTbAttrGroup(user.getUserName());
				iwip_AGROUP_M1S1.setcUptimeTbAttrGroup(new Date());
				updateDateAgroupMsg.add(iwip_AGROUP_M1S1);
			}

		}
		if (updateDateAgroupMsg.size() > 0) {
			iwipAgroupMapper.M1S11UIWIP_AGROUP_M1S1(updateDateAgroupMsg);
		}
		return "success";
	}
	
	/**
	 * 添加、修改属性值
	 * 
	 * @param user
	 * @param iwipAgroupRequestM1s1
	 * @return
	 */
	public String insertAndUpDateAgroupValue(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1) {
		// 要修改或增加的数据（子级）
		List<IWIP_AGROUP_M1S1> iwipAgroupM1s1 = iwipAgroupRequestM1s1.getIwipAgroupM1s1();
		// 根据这里的数据进行添加（父级）
		List<IWIP_AGROUP_M1S1> iwipAgroupParentMsg = iwipAgroupRequestM1s1.getIwipAgroupParentMsg();
		// 用于添加数据的集合
		List<IWIP_AGROUP_M1S1> newDateAgroupMsg = new ArrayList<IWIP_AGROUP_M1S1>();
		// 用于保存重复数据的集合
		List<IWIP_AGROUP_M1S1> repreatDateAgroupMsg = null;
		//用于修改数据的集合
		List<IWIP_AGROUP_M1S1> updateDateAgroupMsg = new ArrayList<IWIP_AGROUP_M1S1>();
		/*
		 * 通过 iwipAgroupM1s1 获取数据主键，主键为空时，添加新数据 主键不为空时，则为修改数据
		 */
		for (int i = 0; i < iwipAgroupM1s1.size(); i++) {
			IWIP_AGROUP_M1S1 iwip_AGROUP_M1S1 = iwipAgroupM1s1.get(i);
			// 添加数据
			if (StringUtils.isBlank(iwipAgroupM1s1.get(i).getcIdTbAttrGroup())) {
				// 进行重复数据的查询
				String newMatCodedate = "";
				String cMatCodeTbAttrGroup = iwipAgroupParentMsg.get(0).getcMatCodeTbAttrGroup();
				String maxCmatCod = iwipAgroupMapper.getMaxCmatCod(cMatCodeTbAttrGroup);
				if(StringUtils.isBlank(maxCmatCod)) {
					newMatCodedate = "1";
				}else {
					String subStr = maxCmatCod.substring(maxCmatCod.length() - 1, maxCmatCod.length());
					// 判断 subStr 中是否有字母，如果有则转换后再加 1, 没有直接加 1
					if (IfIncludeStrUtils.getStr(subStr)) {
						long strNum = AgroupIdValueUtil.getStrNum(subStr);
						long cMatCode = strNum + 1;
						newMatCodedate  = AgroupIdValueUtil.getConversionNum(cMatCode, 1);
					} else {
						int parseInt = Integer.parseInt(subStr);
						int cMatCode = parseInt + 1;
						newMatCodedate = AgroupIdValueUtil.getConversionNum(cMatCode, 1);
					}
				}
				String selectMatCode = cMatCodeTbAttrGroup + newMatCodedate;
				repreatDateAgroupMsg = iwipAgroupMapper.selectRepeatDate(selectMatCode);
				if (repreatDateAgroupMsg.size() == 0) {
					// 直接添加数据
					iwip_AGROUP_M1S1.setcIdTbAttrGroup(CIDUtils.getCID("TB"));// 主键
					iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(selectMatCode);// 物料编码
					iwip_AGROUP_M1S1.setcParentIdTbAttrGroup(cMatCodeTbAttrGroup);//上级物料编码
					iwip_AGROUP_M1S1.setcCreateUserTbAttrGroup(user.getUserName());// 创建人
					iwip_AGROUP_M1S1.setcCtimeTbAttrGroup(new Date());// 创建时间
					iwip_AGROUP_M1S1.setcDrTbAttrGroup("0");// 删除标识
					newDateAgroupMsg.add(iwip_AGROUP_M1S1);
					if (newDateAgroupMsg.size() > 0) {
						iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(newDateAgroupMsg);
						newDateAgroupMsg.remove(0);
					}
				} else {
					// 将不重复的数据进行添加
					for (int j = 0; j < repreatDateAgroupMsg.size(); j++) {
						String repeatMatCodeTbAttrGroup = repreatDateAgroupMsg.get(i).getcMatCodeTbAttrGroup();
						if (!selectMatCode.equals(repeatMatCodeTbAttrGroup)) {
							iwip_AGROUP_M1S1.setcIdTbAttrGroup(CIDUtils.getCID("TB"));// 主键
							iwip_AGROUP_M1S1.setcMatCodeTbAttrGroup(selectMatCode);// 物料编码
							iwip_AGROUP_M1S1.setcParentIdTbAttrGroup(cMatCodeTbAttrGroup);//上级物料编码
							iwip_AGROUP_M1S1.setcCreateUserTbAttrGroup(user.getUserName());// 创建人
							iwip_AGROUP_M1S1.setcCtimeTbAttrGroup(new Date());// 创建时间
							iwip_AGROUP_M1S1.setcDrTbAttrGroup("0");// 删除标识
							newDateAgroupMsg.add(iwip_AGROUP_M1S1);
							if (newDateAgroupMsg.size() > 0) {
								iwipAgroupMapper.M1S11AIWIP_AGROUP_M1S1(newDateAgroupMsg);
								newDateAgroupMsg.remove(0);
							}
						}
					}
				}

			} else {
				// 修改数据
				iwip_AGROUP_M1S1.setcUpUserTbAttrGroup(user.getUserName());
				iwip_AGROUP_M1S1.setcUptimeTbAttrGroup(new Date());
				updateDateAgroupMsg.add(iwip_AGROUP_M1S1);
			}

		}
		if (updateDateAgroupMsg.size() > 0) {
			iwipAgroupMapper.M1S11UIWIP_AGROUP_M1S1(updateDateAgroupMsg);
		}
		return "success";
	}
}
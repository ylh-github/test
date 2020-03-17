
package cn.tdhc.TB_ATTR_GROUP.service;

import cn.tdhc.TB_ATTR_GROUP.request.IWIP_AGROUP_Request_M1S1;
import cn.tdhc.TB_ATTR_GROUP.response.IWIP_AGROUP_Response_M1S1;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface IWIP_AGROUP_Service {
	/**
	 * 动态查询M1S11查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> M1S11Q(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 属性值的查询
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> mainAndViceAttr(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 属性值的查询
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> viceAttrCheck(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 属性查询
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupOne(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 联动查询
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsg(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	/**
	 * 联动查询值
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupMsgValue(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 属性值查询
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> selectAgroupTwo(IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11A(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	/**
	 * 
	 *属性的修改和增加
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupMsg(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 属性值的修改和增加
	 * @param user
	 * @param iwipAgroupRequestM1s1
	 * @param session
	 * @return
	 */
	ResponseObject<EmptyTag, EmptyData> insertAndUpDateAgroupValue(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);
	
	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11U(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);

	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11D(User user, IWIP_AGROUP_Request_M1S1 iwipAgroupRequestM1s1,
			String session);

	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示
	 * 
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountDelFlag(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session);

	/**
	 * <!-- 查询sql -->
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountCmatCode(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session);

	/**
	 * <!-- 查询sql -->
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> getCountUpdateCmatCode(User user,
			IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session);

	/**
	 * <!-- 查询sql -->
	 */
	ResponseObject<EmptyTag, IWIP_AGROUP_Response_M1S1> CA001(User user, IWIP_AGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
}
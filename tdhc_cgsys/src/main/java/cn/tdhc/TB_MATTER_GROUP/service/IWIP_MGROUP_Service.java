
package cn.tdhc.TB_MATTER_GROUP.service;

import cn.tdhc.TB_MATTER_GROUP.request.IWIP_MGROUP_Request_M1S1;
import cn.tdhc.TB_MATTER_GROUP.response.IWIP_MGROUP_Response_M1S1;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface IWIP_MGROUP_Service {
	/**
	 * 动态查询M1S11查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> M1S11Q(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
	
	/**
	 * 动态查询物资
	 *
	 * 
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> addMaterial(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
	
	/**
	 * 大类查询
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgOne(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
	/**
	 * 中类查询
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgTwo(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
	/**
	 * 小类查询
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgThree(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
	/**
	 * 物料名称查询
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectMsgFour(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 联动查询
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> selectLinkage(IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	
	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11A(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11U(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S11D(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S12MSG(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 动态查询M2S2查询
	 *
	 * 
	 */
	ResponseObject<EmptyTag, EmptyData> M1S13MSG(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);

	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示
	 * 
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1> getCountDelFlag(User user,
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session);
	
	/**
	 *添加物料编码返回空数据
	 */
	ResponseObject<EmptyTag, IWIP_MGROUP_Response_M1S1>  addMgroupMsg(User user,
			IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1, String session);
	
	/**
	 * 添加物料编码信息
	 */
	ResponseObject<EmptyTag, EmptyData> insertTbAttrGroupBigMsg(User user, IWIP_MGROUP_Request_M1S1 iwipMgroupRequestM1s1,
			String session);
}
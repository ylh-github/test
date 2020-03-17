
package cn.tdhc.TB_MATTER_GROUP.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_PA0Q;

@Repository("iwipMgroupMapper")
public interface IWIP_MGROUP_Mapper {
	
	List<IWIP_MGROUP_PA0Q> PA0Q1QIWIP_MGROUP_PA0Q(@Param("iwipMgroupPa0q") IWIP_MGROUP_PA0Q iwipMgroupPa0q);

	List<IWIP_MGROUP_M1S1> M1S11QIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);

	int M1S11AIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);

	int M1S11UIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);

	int M1S11DIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);

	int M1S12MSGIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);

	int M1S13MSGIWIP_MGROUP_M1S1(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);

	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示   递归
	 * 
	 * cParentId : 父节点
	 */
	List<IWIP_MGROUP_M1S1> getCountDelFlag(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	/**
	 * 物料编码查询父节点,提取中文名称   递归
	 */
	List<IWIP_MGROUP_M1S1> getParentName(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	/**
	 * 
	 * 查询物料编码      不是递归
	 * */
	List<IWIP_MGROUP_M1S1> getMatCodeInfo(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
//	int M1S11Update(@Param("iwipMgroupM1s1") List<TestExcelEntity> iwipMgroupM1s1);
	
	/**
	 * 查询当前数据最大的物料组编码
	 */
	String getMaxCmatCod(@Param("cMatCode") String cMatCode);
	
	/**
	 * 查询当前数据第五级最大的物料组编码
	 */
	String getMaxCmatCodSixNum(@Param("cMatCode") String cMatCode);
	
	/**
	 * 大类查询
	 */
	List<IWIP_MGROUP_M1S1> selectMsgOne(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	/**
	 * 中类查询
	 */
	List<IWIP_MGROUP_M1S1> selectMsgTwo(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	/**
	 * 小类查询
	 */
	List<IWIP_MGROUP_M1S1> selectMsgThree(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	/**
	 * 物料名称类查询
	 */
	List<IWIP_MGROUP_M1S1> selectMsgFour(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	/**
	 * 联动查询
	 */
	List<IWIP_MGROUP_M1S1> selectLinkage(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	/**
	 * 联动查询
	 */
	List<IWIP_MGROUP_M1S1> deleteSelectMsg(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	/**
	 * 查询大类物料编码是否存在
	 */
	List<IWIP_MGROUP_M1S1> getIsBlackCMatterCode(@Param("cMatCode") String cMatCode);
	
}
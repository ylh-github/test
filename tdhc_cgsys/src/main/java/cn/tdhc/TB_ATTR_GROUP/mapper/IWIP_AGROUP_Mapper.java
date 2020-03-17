
package cn.tdhc.TB_ATTR_GROUP.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;

@Repository("iwipAgroupMapper")
public interface IWIP_AGROUP_Mapper {
	List<IWIP_AGROUP_M1S1> M1S11QIWIP_AGROUP_M1S1(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);

	List<IWIP_AGROUP_M1S1> selectAttributes(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);
	
	List<IWIP_AGROUP_M1S1> selectViceAttributes(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);
	
	List<IWIP_AGROUP_M1S1> selectViceAttrCheck(@Param("viceAttrCheck") String viceAttrCheck);

	int M1S11AIWIP_AGROUP_M1S1(@Param("iwipAgroupM1s1") List<IWIP_AGROUP_M1S1> iwipAgroupM1s1);

	int M1S11UIWIP_AGROUP_M1S1(@Param("iwipAgroupM1s1") List<IWIP_AGROUP_M1S1> iwipAgroupM1s1);

	int M1S11DIWIP_AGROUP_M1S1(@Param("iwipAgroupM1s1") List<IWIP_AGROUP_M1S1> iwipAgroupM1s1);

	/**
	 * 物料编码删除查询判断是否有父节点,用于删除提示
	 * 
	 * cParentId : 父节点
	 */
	List<IWIP_AGROUP_M1S1> getCountDelFlag(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipMgroupM1s1);
	
	List<IWIP_AGROUP_M1S1> deleteAllAutt(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);

	/**
	 * 用于查询重复数据
	 * 
	 * @param cMatCode
	 * @return
	 */
	List<IWIP_AGROUP_M1S1> selectRepeatDate(@Param("cMatCode") String cMatCode);

	/**
	 * <!-- 查询sql -->
	 */
	Integer getCountCmatCode(@Param("cMatCode") String cMatCode);

	/**
	 * 查询物料属性的父节点
	 */
	List<IWIP_AGROUP_M1S1> getDataParentId(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);

	/**
	 * 正常的查询没有递归,查询属性
	 */
	String getAgroupName(@Param("cMatCode") String cMatCode);

	/**
	 * 查询当前数据最大的物料组编码
	 */
	String getMaxCmatCod(@Param("cMatCode") String cMatCode);

	/**
	 * 属性查询
	 */
	List<IWIP_AGROUP_M1S1> selectAgroupOne(@Param("iwipMgroupM1s1") IWIP_MGROUP_M1S1 iwipMgroupM1s1);

	/**
	 * 属性值查询
	 */
	List<IWIP_AGROUP_M1S1> selectAgroupTwo(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);

	/**
	 * 联动值查询
	 */
	List<IWIP_AGROUP_M1S1> selectAgroupMsg(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);

	/**
	 * 联动值查询
	 */
	List<IWIP_AGROUP_M1S1> selectAgroupMsgValue(@Param("iwipAgroupM1s1") IWIP_AGROUP_M1S1 iwipAgroupM1s1);
}
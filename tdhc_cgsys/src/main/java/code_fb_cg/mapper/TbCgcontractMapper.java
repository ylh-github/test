package code_fb_cg.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TbCgcontractExample;
import code_fb_cg.entity.TpCgcontractmtt;
@Repository("tbCgcontractMapper")
public interface TbCgcontractMapper {
    int countByExample(TbCgcontractExample example);

    int deleteByExample(TbCgcontractExample example);

    int insert(TbCgcontract record);

    int insertSelective(TbCgcontract record);

    List<TbCgcontract> selectByExample(TbCgcontractExample example);

    int updateByExampleSelective(@Param("record") TbCgcontract record, @Param("example") TbCgcontractExample example);

    int updateByExample(@Param("record") TbCgcontract record, @Param("example") TbCgcontractExample example);

    /**
     * 批量添加
     * @param addTbCgcontract
     * @return
     */
	int insertTbCgcontract(@Param("addTbCgcontract") List<TbCgcontract> addTbCgcontract);
	/**
	 * 查询
	 * @param tpCgcontractmtt
	 * @return
	 */

	List<TbCgcontract> selectBycConnum(@Param("tpCgcontractmtt")TpCgcontractmtt tpCgcontractmtt);

	int  deleteBycConnum(@Param("cConnum") String cConnum);
	/**
	 * 批量修改
	 * @param addTbCgcontract
	 * @return
	 */
	int updatebCgcontract(@Param("addTbCgcontract")List<TbCgcontract> addTbCgcontract);
/**
 * 根据合同号查询数据
 * @param getcConnum
 * @return
 */
	List<TbCgcontract> selectcConnum(@Param("cConnum")String cConnum);

	List<TbCgcontract> selectTbCgcontract(TbCgcontract tpCgcontract);
/**
 * 根据合同类型和合同号查询信息
 * @param cg_MNHT_M1S1
 * @return
 */
	List<TbCgcontract> S1S21QCG_MNHT_Cause(@Param("cg_MNHT_M1S1") CG_MNHT_M1S1 cg_MNHT_M1S1);

	List<TbCgcontract> selecttbCgcontract(TbCgcontract tbCgcontract);
/**
 * 单条修改
 * @param tbCgcontract
 * @return
 */
	int updatecContype(TbCgcontract tbCgcontract);

	List<TbCgcontract> selectcConsultrmb(@Param("tbCgcontract")TbCgcontract tbCgcontract);
}
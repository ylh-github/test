package code_fb_cg.mapper;


import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.junit.runners.Parameterized.Parameters;

import code_fb_cg.entity.TpCgordermt3;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpChorderst;
import code_fb_cg.entity.TpChorderstExample;
import code_fb_cg.request.Q001M1s1Qrequest;

public interface TpChorderstMapper {
    int countByExample(TpChorderstExample example);

    int deleteByExample(TpChorderstExample example);

    int deleteByPrimaryKey(@Param("updateTpCgorderst") List<TpCgorderst> updateTpCgorderst);

    int insert(TpChorderst record);

    int insertSelective(TpChorderst record);

    List<TpChorderst> selectByExample(TpChorderstExample example);

    TpChorderst selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpChorderst record, @Param("example") TpChorderstExample example);

    int updateByExample(@Param("record") TpChorderst record, @Param("example") TpChorderstExample example);

    int updateByPrimaryKeySelective(TpChorderst record);

    int updateByPrimaryKey(TpChorderst record);

	List<TpChorderst> searchTpChorderst(TpCgordermt3 tpcgordermt);
	/**
	 * 批量添加
	 * @param list
	 * @return
	 */
	int  insertList(@Param("list")List<Q001M1s1Qrequest> list);
	List<TpChorderst> searchTpChorderst2(TpCgordermt3 tpcgordermt);
}
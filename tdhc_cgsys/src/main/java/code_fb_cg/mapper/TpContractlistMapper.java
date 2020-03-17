package code_fb_cg.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpContractlist;
import code_fb_cg.entity.TpContractlistExample;
@Repository("tpContractlistMapper")
public interface TpContractlistMapper {
    int countByExample(TpContractlistExample example);

    int deleteByExample(TpContractlistExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TpContractlist record);

    int insertSelective(TpContractlist record);

    List<TpContractlist> selectByExample(TpContractlistExample example);
    
    List<TpContractlist> selectByConnum(TpContractlist record);

    TpContractlist selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpContractlist record, @Param("example") TpContractlistExample example);

    int updateByExample(@Param("record") TpContractlist record, @Param("example") TpContractlistExample example);

    int updateByPrimaryKeySelective(TpContractlist record);

    int updateByPrimaryKey(TpContractlist record);
    
    int deleteById(@Param("contractlist") List<TpContractlist> contractlist);
}
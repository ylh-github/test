package code_fb_cg.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import code_fb_cg.entity.TpCancelment;
import code_fb_cg.entity.TpCancelmentExample;

public interface TpCancelmentMapper {
    int countByExample(TpCancelmentExample example);

    int deleteByExample(TpCancelmentExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TpCancelment record);

    int insertSelective(TpCancelment record);

    List<TpCancelment> selectByExample(TpCancelmentExample example);

    TpCancelment selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpCancelment record, @Param("example") TpCancelmentExample example);

    int updateByExample(@Param("record") TpCancelment record, @Param("example") TpCancelmentExample example);

    int updateByPrimaryKeySelective(TpCancelment record);

    int updateByPrimaryKey(TpCancelment record);
}
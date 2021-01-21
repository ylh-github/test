package code_fb_cg.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpConrevocare;
import code_fb_cg.entity.TpConrevocareExample;
@Repository("tpConrevocareMapper")
public interface TpConrevocareMapper {
    int countByExample(TpConrevocareExample example);

    int deleteByExample(TpConrevocareExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TpConrevocare record);

    int insertSelective(TpConrevocare record);

    List<TpConrevocare> selectByExample(TpConrevocareExample example);
    List<TpConrevocare> selectByConnum(TpConrevocare record);
    List<TpConrevocare> selectAll();

    TpConrevocare selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpConrevocare record, @Param("example") TpConrevocareExample example);

    int updateByExample(@Param("record") TpConrevocare record, @Param("example") TpConrevocareExample example);

    int updateByPrimaryKeySelective(TpConrevocare record);

    int updateByPrimaryKey(TpConrevocare record);

    List<TpConrevocare> selectRevocareNum();
}
package code_fb_cg.mapper;

import code_fb_cg.entity.TpCgcontrast;
import code_fb_cg.entity.TpCgcontrastExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TpCgcontrastMapper {
    int countByExample(TpCgcontrastExample example);

    int deleteByExample(TpCgcontrastExample example);

    int deleteByPrimaryKey(String cId);
    //清除全部数据
    int deleteAll();

    int insert(TpCgcontrast record);

    int insertSelective(TpCgcontrast record);
    
    //批量导入
    int Batchinsert(@Param("tpCgcontrast")List<TpCgcontrast> tpCgcontrast);

    List<TpCgcontrast> selectByExample(TpCgcontrastExample example);
    
    List<TpCgcontrast> selectByConnum(TpCgcontrast tpCgcontrast);

    TpCgcontrast selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpCgcontrast record, @Param("example") TpCgcontrastExample example);

    int updateByExample(@Param("record") TpCgcontrast record, @Param("example") TpCgcontrastExample example);

    int updateByPrimaryKeySelective(TpCgcontrast record);

    int updateByPrimaryKey(TpCgcontrast record);
}
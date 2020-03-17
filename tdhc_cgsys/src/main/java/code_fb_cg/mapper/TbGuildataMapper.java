package code_fb_cg.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TbGuildataExample;

@Repository("tbGuildataMapper")
public interface TbGuildataMapper {
    int countByExample(TbGuildataExample example);

    int deleteByExample(TbGuildataExample example);
    
    int deleteByPrimaryKey(TbGuildata record);

    int insert(TbGuildata record);

    int insertSelective(TbGuildata record);

    List<TbGuildata> selectByExample(TbGuildataExample example);

    int updateByExampleSelective(@Param("record") TbGuildata record, @Param("example") TbGuildataExample example);

    int updateByExample(@Param("record") TbGuildata record, @Param("example") TbGuildataExample example);
    /**
     * 类别查询
     * @param tbGuildata
     * @return
     */
	List<TbGuildata> selectInfo(@Param("tbGuildata") TbGuildata tbGuildata);

	List<TbGuildata> getInfo();
}
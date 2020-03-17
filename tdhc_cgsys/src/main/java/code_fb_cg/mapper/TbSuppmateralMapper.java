package code_fb_cg.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.SuppViewEntity;
import code_fb_cg.entity.TbSuppmateral;
import code_fb_cg.entity.TbSuppmateralExample;
import code_fb_cg.request.CG_GY001_Request;

@Repository("tbSuppmateralMapper")
public interface TbSuppmateralMapper {
    int countByExample(TbSuppmateralExample example);

    int deleteByExample(TbSuppmateralExample example);

    int insert(TbSuppmateral record);

    int insertSelective(TbSuppmateral record);

    List<TbSuppmateral> selectByExample(TbSuppmateralExample example);

    int updateByExampleSelective(@Param("record") TbSuppmateral record, @Param("example") TbSuppmateralExample example);

    int updateByExample(@Param("record") TbSuppmateral record, @Param("example") TbSuppmateralExample example);
    /**
     * 
     * @param cg_GY001_Request
     * @param tbSuppmateral 
     * @return
     */
	List<TbSuppmateral> selectByCondition(@Param("cg_GY001_Request") CG_GY001_Request cg_GY001_Request, @Param("tbSuppmateral") TbSuppmateral tbSuppmateral);

	/**
	 * 查询视图
	 * @param tbSuppmateral
	 * @return
	 */
	List<SuppViewEntity> selectView(@Param("tbSuppmateral") TbSuppmateral tbSuppmateral);
}
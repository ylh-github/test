package code_fb_cg.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import code_fb_cg.entity.TbItem;
import code_fb_cg.entity.TbItemExample;

public interface TbItemMapper {
    int countByExample(TbItemExample example);

    int deleteByExample(TbItemExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TbItem record);

    int insertSelective(TbItem record);

    List<TbItem> selectByExample(TbItemExample example);

    TbItem selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TbItem record, @Param("example") TbItemExample example);

    int updateByExample(@Param("record") TbItem record, @Param("example") TbItemExample example);

    int updateByPrimaryKeySelective(TbItem record);

    int updateByPrimaryKey(TbItem record);

	List<TbItem> searchItem(TbItem tbItem);

	int  addItem(@Param("listTbItem")List<TbItem> listTbItem);

	int updateItem(@Param("listTbItem")List<TbItem> listTbItem);

	int deleteItem(@Param("listTbItem")List<TbItem> listTbItem);

	int ableItem(@Param("listTbItem")List<TbItem> listTbItem);
	//查询所有
	List<TbItem> selectAll();
	
}
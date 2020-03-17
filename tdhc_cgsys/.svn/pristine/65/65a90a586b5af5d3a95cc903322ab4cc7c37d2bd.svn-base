package code_fb_cg.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpCgmoneyinvbook;
@Repository("tpCgmoneyinvbookMapper")
public interface TpCgmoneyinvbookMapper {
    int deleteByPrimaryKey(String cId);
    int ADDfapiao(@Param("list")List<TpCgmoneyinvbook> list);
    List<TpCgmoneyinvbook> selectConmtid(TpCgmoneyinvbook requestObject);
    List<TpCgmoneyinvbook> selectNullValue();
    int uodateFAPIAO(@Param("list")List<TpCgmoneyinvbook> list);
	int deleteFAPIAO(@Param("list")List<TpCgmoneyinvbook> list);
//	int S1S31fapiao(@Param("list")List<TpCgmoneyinvbook> list);//发票快捷按钮
    int insert(TpCgmoneyinvbook record);
    int insertSelective(TpCgmoneyinvbook record);
    TpCgmoneyinvbook selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(@Param("list")List<TpCgmoneyinvbook> list);
    int updateByPrimaryKey(TpCgmoneyinvbook record);
    //修改合同号
    int uodatecConnum(TpCgmoneyinvbook record);
	
}
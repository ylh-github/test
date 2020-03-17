package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import code_fb_cg.entity.TpCgmoneybook;

public interface TpCgmoneybookMapper {
    int deleteByPrimaryKey(String cId);
    int insert(TpCgmoneybook record);
    int insertSelective(TpCgmoneybook record);
    TpCgmoneybook selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(TpCgmoneybook record);
    int updateByPrimaryKey(TpCgmoneybook record);
    int updateBycConnum(TpCgmoneybook record);
    
    List<TpCgmoneybook> selectForMoneyBook(TpCgmoneybook requestObject);
    List<TpCgmoneybook> selectByCreatetime(@Param("startTime")Date startTime,@Param("endTime")Date endTime);
    List<TpCgmoneybook> selectPaytimeMin(@Param("cConnum")String cConnum);
    int insertMoneyBook(TpCgmoneybook requestObject);
    List<TpCgmoneybook> selectByIdForMt(TpCgmoneybook requestObject);
    int delectById(@Param("cgH002S2s3")List<TpCgmoneybook> book);
    List<TpCgmoneybook> selectForMoneyBookAndRemoney(@Param("cConnum")String cConnum);
    int updateMoneyFinashi(@Param("list")List<TpCgmoneybook> requestObject);
    int ADDfukuan(@Param("list")List<TpCgmoneybook> requestObject);
    int updateFUKUAN(@Param("list")List<TpCgmoneybook> requestObject);
	int deleteFUKUAN(@Param("list")List<TpCgmoneybook> moneybook);
}
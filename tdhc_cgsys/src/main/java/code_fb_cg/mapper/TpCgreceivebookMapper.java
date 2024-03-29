package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_H001_S1S2;
import code_fb_cg.entity.TpCgreceivebook;
@Repository("tpCgreceivebookMapper")
public interface TpCgreceivebookMapper {
    int deleteByPrimaryKey(@Param("list")List<TpCgreceivebook> book);
    int insert(TpCgreceivebook record);
    int insertSelective(TpCgreceivebook record);
    TpCgreceivebook selectByPrimaryKey(String cId);
    TpCgreceivebook selectByCId(String cId);
    int updateByPrimaryKeySelective(TpCgreceivebook record);
    int updateByPrimaryKey(TpCgreceivebook record);
    //修改合同号
    int updateByCconnum(TpCgreceivebook record);
    List<TpCgreceivebook> selectByPrimary(@Param(value = "cConnum")String cConnum,@Param(value = "cConline")String cConline);
    List<TpCgreceivebook> selectByNum(@Param(value = "cConnum")String cConnum);
    List<TpCgreceivebook> selectByCreatetime(@Param("startTime")Date startTime,@Param("endTime")Date endTime);
    int insertFinashi(@Param("list")List<TpCgreceivebook> requestObject);
	int S1S51U(@Param("list")List<TpCgreceivebook> book);
}
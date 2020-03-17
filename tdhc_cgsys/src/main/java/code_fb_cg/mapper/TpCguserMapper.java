package code_fb_cg.mapper;

import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpCguser;
@Repository("tpCguserMapper")
public interface TpCguserMapper {
    int deleteByPrimaryKey(String cId);
    int insert(TpCguser record);
    int insertSelective(TpCguser record);
    TpCguser selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(TpCguser record);
    int updateByPrimaryKey(TpCguser record);
    //根据登录名 获取权限和用户信息
    TpCguser selectLoginName(TpCguser user);
}
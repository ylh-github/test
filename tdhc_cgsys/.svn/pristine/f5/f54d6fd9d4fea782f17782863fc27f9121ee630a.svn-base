package code_fb_cg.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpCgship;
import code_fb_cg.request.ShipM2s2Q;
@Repository("tpCgshipMapper")
public interface TpCgshipMapper {
    int deleteByPrimaryKey(String cId);
    int insert(TpCgship record);
    int insertSelective(TpCgship record);
    TpCgship selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(TpCgship record);
    int updateByPrimaryKey(TpCgship record);
    
    List<TpCgship> selectBycondition(ShipM2s2Q requestObject);
    int insertShip(@Param("list")List<TpCgship> requestObject);
    int updateForShip(@Param("list")List<TpCgship> requestObject);
    int updateByCDR(@Param("list")List<TpCgship> requestObject);
}
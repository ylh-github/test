
 package code_fb.mapper;
 import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_CK_M1S1;
import code_fb_cg.entity.TpCgorderstInfo; 
 @Repository("cgCkMapper")
 public interface CG_CK_Mapper {
 List<CG_CK_M1S1> M1S11QCG_CK_M1S1( @Param("cgCkM1s1")CG_CK_M1S1 cgCkM1s1);
 List<CG_CK_M1S1> selectByCreatetime(@Param("startTime")Date startTime, @Param("endTime")Date endTime);
 List<CG_CK_M1S1> selectByConnumline( @Param("cgCkM1s1")CG_CK_M1S1 cgCkM1s1);
 List<CG_CK_M1S1> selectByCid( @Param("cgCkM1s1")CG_CK_M1S1 cgCkM1s1);
 int M1S11ACG_CK_M1S1(@Param("cgCkM1s1") List<CG_CK_M1S1> cgCkM1s1);
 int insertall(@Param("cgCkM1s1") List<CG_CK_M1S1> cgCkM1s1);
 int M1S11UCG_CK_M1S1(@Param("cgCkM1s1") List<CG_CK_M1S1> cgCkM1s1);
 int updateBycConnum(@Param("cgCkM1s1") CG_CK_M1S1 cgCkM1s1);
 int M1S11DCG_CK_M1S1(@Param("cgCkM1s1") List<CG_CK_M1S1> cgCkM1s1);
 //根据时间统计各船出库量
List<TpCgorderstInfo> searchCCSum(@Param("startTime")Date startTime, @Param("endTime")Date endTime);
 }
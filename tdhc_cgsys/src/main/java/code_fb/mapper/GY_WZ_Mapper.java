
 package code_fb.mapper;
 import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.GY_WZ_M1S1; 
 @Repository("gyWzMapper")
 public interface GY_WZ_Mapper {
 List<GY_WZ_M1S1> M1S11QGY_WZ_M1S1( @Param("gyWzM1s1")GY_WZ_M1S1 gyWzM1s1,@Param("startTime")Date startTime,@Param("endTime")Date endTime);
 int M1S11AGY_WZ_M1S1(@Param("gyWzM1s1") List<GY_WZ_M1S1> gyWzM1s1);
 int M1S11UGY_WZ_M1S1(@Param("gyWzM1s1") List<GY_WZ_M1S1> gyWzM1s1);
 int M1S11DGY_WZ_M1S1(@Param("gyWzM1s1") List<GY_WZ_M1S1> gyWzM1s1);
 }
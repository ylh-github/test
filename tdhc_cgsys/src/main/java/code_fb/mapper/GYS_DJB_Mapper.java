
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.GYS_DJB_M1S1; 
 @Repository("gysDjbMapper")
 public interface GYS_DJB_Mapper {
 List<GYS_DJB_M1S1> M1S11QGYS_DJB_M1S1( @Param("gysDjbM1s1")GYS_DJB_M1S1 gysDjbM1s1);
 int M1S11AGYS_DJB_M1S1(@Param("gysDjbM1s1") List<GYS_DJB_M1S1> gysDjbM1s1);
 int M1S11UGYS_DJB_M1S1(@Param("gysDjbM1s1") List<GYS_DJB_M1S1> gysDjbM1s1);
 int M1S11DGYS_DJB_M1S1(@Param("gysDjbM1s1") List<GYS_DJB_M1S1> gysDjbM1s1);
 }

 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.GYS_01_M1S1; 
 @Repository("gys01Mapper")
 public interface GYS_01_Mapper {
 List<GYS_01_M1S1> M1S11QGYS_01_M1S1( @Param("gys01M1s1")GYS_01_M1S1 gys01M1s1);
 int M1S11AGYS_01_M1S1(@Param("gys01M1s1") List<GYS_01_M1S1> gys01M1s1);
 int M1S11UGYS_01_M1S1(@Param("gys01M1s1") List<GYS_01_M1S1> gys01M1s1);
 int M1S11DGYS_01_M1S1(@Param("gys01M1s1") List<GYS_01_M1S1> gys01M1s1);
 }

 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.FH_01_M1S12; 
 @Repository("fh01Mapper2")
 public interface FH_01_Mapper2 {

 /**
  * 导入
  * @param fh01M2s2
  * @return
  */
 	int M1S12MSG2(@Param("fh01M1s12")List<FH_01_M1S12> fh01m1s12);

 }
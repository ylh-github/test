
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_C005_M1S1 ; 
 @Repository("cgC005Mapper")
 public interface CG_C005_Mapper {
 List<CG_C005_M1S1> M1S11QCG_C005_M1S1( @Param("cgC005M1s1")CG_C005_M1S1 cgC005M1s1);
 }
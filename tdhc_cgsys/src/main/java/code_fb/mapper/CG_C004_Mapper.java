
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_C004_M1S1 ; 
 @Repository("cgC004Mapper")
 public interface CG_C004_Mapper {
 List<CG_C004_M1S1> M1S11QCG_C004_M1S1( @Param("cgC004M1s1")CG_C004_M1S1 cgC004M1s1);
 }
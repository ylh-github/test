
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_C003_M1S1 ;
import code_fb.entity.CG_C003_S1S2 ; 
 @Repository("cgC003Mapper")
 public interface CG_C003_Mapper {
 List<CG_C003_M1S1> M1S11QCG_C003_M1S1( @Param("cgC003M1s1")CG_C003_M1S1 cgC003M1s1);
 List<CG_C003_S1S2> S1S21QCG_C003_S1S2( @Param("cgC003S1s2")CG_C003_S1S2 cgC003S1s2);
 }
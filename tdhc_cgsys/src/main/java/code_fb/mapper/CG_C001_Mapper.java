
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_C001_M1S1 ; 
 @Repository("cgC001Mapper")
 public interface CG_C001_Mapper {
 List<CG_C001_M1S1> M1S11QCG_C001_M1S1( @Param("cgC001M1s1")CG_C001_M1S1 cgC001M1s1);
 }
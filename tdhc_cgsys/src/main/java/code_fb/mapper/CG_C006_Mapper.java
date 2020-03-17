
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_C006_M1S1 ; 
 @Repository("cgC006Mapper")
 public interface CG_C006_Mapper {
 List<CG_C006_M1S1> M1S11QCG_C006_M1S1( @Param("cgC006M1s1")CG_C006_M1S1 cgC006M1s1);
 }
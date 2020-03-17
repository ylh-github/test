
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_A003_C001 ;
import code_fb.entity.CG_A003_C002 ;
import code_fb.entity.CG_A003_C003 ;
import code_fb.entity.CG_A003_M1S1 ; 
 @Repository("cgA003Mapper")
 public interface CG_A003_Mapper {
 List<CG_A003_C001> C0011QCG_A003_C001( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_A003_C002> C0021QCG_A003_C002( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_A003_C003> C0031QCG_A003_C003( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_A003_M1S1> M1S11QCG_A003_M1S1( @Param("cgA003M1s1")CG_A003_M1S1 cgA003M1s1);
 int M1S11ACG_A003_M1S1(@Param("cgA003M1s1") List<CG_A003_M1S1> cgA003M1s1);
 int M1S11UCG_A003_M1S1(@Param("cgA003M1s1") List<CG_A003_M1S1> cgA003M1s1);
 int M1S11DCG_A003_M1S1(@Param("cgA003M1s1") List<CG_A003_M1S1> cgA003M1s1);
 }
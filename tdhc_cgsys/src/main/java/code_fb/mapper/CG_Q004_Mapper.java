
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_Q004_M1S1 ;
import code_fb.entity.CG_Q004_M2S2 ;
import code_fb.entity.CG_Q004_S2S3 ; 
 @Repository("cgQ004Mapper")
 public interface CG_Q004_Mapper {
 List<CG_Q004_M1S1> M1S11QCG_Q004_M1S1( @Param("cgQ004M1s1")CG_Q004_M1S1 cgQ004M1s1);
 int M1S11ACG_Q004_M1S1(@Param("cgQ004M1s1") List<CG_Q004_M1S1> cgQ004M1s1);
 int M1S11UCG_Q004_M1S1(@Param("cgQ004M1s1") List<CG_Q004_M1S1> cgQ004M1s1);
 int M1S11DCG_Q004_M1S1(@Param("cgQ004M1s1") List<CG_Q004_M1S1> cgQ004M1s1);
 List<CG_Q004_M2S2> M2S21QCG_Q004_M2S2( @Param("cgQ004M2s2")CG_Q004_M2S2 cgQ004M2s2);
 int M2S21ACG_Q004_M2S2(@Param("cgQ004M2s2") List<CG_Q004_M2S2> cgQ004M2s2);
 int M2S21UCG_Q004_M2S2(@Param("cgQ004M2s2") List<CG_Q004_M2S2> cgQ004M2s2);
 int M2S21DCG_Q004_M2S2(@Param("cgQ004M2s2") List<CG_Q004_M2S2> cgQ004M2s2);
 List<CG_Q004_S2S3> S2S31QCG_Q004_S2S3( @Param("cgQ004S2s3")CG_Q004_S2S3 cgQ004S2s3);
 }
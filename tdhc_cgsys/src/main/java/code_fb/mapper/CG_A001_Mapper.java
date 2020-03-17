
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_A001_C001 ;
import code_fb.entity.CG_A001_M1S1 ;
import code_fb.entity.CG_A001_S1S2 ; 
 @Repository("cgA001Mapper")
 public interface CG_A001_Mapper {
 List<CG_A001_C001> C0011QCG_A001_C001( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_A001_M1S1> M1S11QCG_A001_M1S1( @Param("cgA001M1s1")CG_A001_M1S1 cgA001M1s1);
 int M1S11ACG_A001_M1S1(@Param("cgA001M1s1") List<CG_A001_M1S1> cgA001M1s1);
 int M1S11UCG_A001_M1S1(@Param("cgA001M1s1") List<CG_A001_M1S1> cgA001M1s1);
 int M1S11DCG_A001_M1S1(@Param("cgA001M1s1") List<CG_A001_M1S1> cgA001M1s1);
 int M1S12MSGCG_A001_M1S1(@Param("cgA001M1s1") List<CG_A001_M1S1> cgA001M1s1);
 int M1S12MSGCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 int M1S13MSGCG_A001_M1S1(@Param("cgA001M1s1") List<CG_A001_M1S1> cgA001M1s1);
 int M1S13MSGCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 List<CG_A001_S1S2> S1S21QCG_A001_S1S2( @Param("cgA001S1s2")CG_A001_S1S2 cgA001S1s2);
 int S1S21ACG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 int S1S21UCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 int S1S21DCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 int S1S22MSGCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 int S1S23MSGCG_A001_S1S2(@Param("cgA001S1s2") List<CG_A001_S1S2> cgA001S1s2);
 }
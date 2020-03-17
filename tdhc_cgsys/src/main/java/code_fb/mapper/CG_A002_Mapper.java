
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_A002_C001 ;
import code_fb.entity.CG_A002_M1S1 ; 
 @Repository("cgA002Mapper")
 public interface CG_A002_Mapper {
 List<CG_A002_C001> C0011QCG_A002_C001( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_A002_M1S1> M1S11QCG_A002_M1S1( @Param("cgA002M1s1")CG_A002_M1S1 cgA002M1s1);
 int M1S11ACG_A002_M1S1(@Param("cgA002M1s1") List<CG_A002_M1S1> cgA002M1s1);
 int M1S11UCG_A002_M1S1(@Param("cgA002M1s1") List<CG_A002_M1S1> cgA002M1s1);
 int M1S11DCG_A002_M1S1(@Param("cgA002M1s1") List<CG_A002_M1S1> cgA002M1s1);
 }
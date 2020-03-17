
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_Q002_C001 ;
import code_fb.entity.CG_Q002_C002 ;
import code_fb.entity.CG_Q002_C003;
import code_fb.entity.CG_Q002_M1S1 ;
import code_fb.entity.CG_Q002_S1S2 ;
import code_fb_cg.entity.TpCgorderst; 
 @Repository("cgQ002Mapper")
 public interface CG_Q002_Mapper {
 List<CG_Q002_C001> C0011QCG_Q002_C001( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q002_C002> C0021QCG_Q002_C002( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q002_C003> C0021QCG_Q002_C003( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q002_M1S1> M1S11QCG_Q002_M1S1( @Param("cgQ002M1s1")CG_Q002_M1S1 cgQ002M1s1);
 int S1S22UCG_Q002_S1S2(@Param("cgQ002S1s2") List<CG_Q002_S1S2> cgQ002S1s2);
 int S1S22UCG_Q002_S1S2(@Param("cgQ002S1s2") List<CG_Q002_S1S2> cgQ002S1s2, @Param("forMdate")CG_Q002_S1S2 forMdate);
 int S1S22MSGCG_Q002_S1S2(@Param("cgQ002S1s2")List<TpCgorderst> cgQ002S1s2);
 }
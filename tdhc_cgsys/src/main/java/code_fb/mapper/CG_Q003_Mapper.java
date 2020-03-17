
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_Q003_C001 ;
import code_fb.entity.CG_Q003_C002 ;
import code_fb.entity.CG_Q003_C003 ;
import code_fb.entity.CG_Q003_C004 ;
import code_fb.entity.CG_Q003_C005 ;
import code_fb.entity.CG_Q003_C006 ;
import code_fb.entity.CG_Q003_C007 ;
import code_fb.entity.CG_Q003_C008 ;
import code_fb.entity.CG_Q003_C009 ;
import code_fb.entity.CG_Q003_M1S1 ;
import code_fb.entity.CG_Q003_S1S2 ;
import code_fb_cg.entity.TpCgorderst; 
 @Repository("cgQ003Mapper")
 public interface CG_Q003_Mapper {
 List<CG_Q003_C001> C0011QCG_Q003_C001( @Param("cEnabled") String cEnabled, @Param("cItemdes") String cItemdes);
 List<CG_Q003_C002> C0021QCG_Q003_C002( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C003> C0031QCG_Q003_C003( @Param("cEnabled") String cEnabled, @Param("cItemdes") String cItemdes);
 List<CG_Q003_C004> C0041QCG_Q003_C004( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C005> C0051QCG_Q003_C005( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C006> C0061QCG_Q003_C006( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C007> C0071QCG_Q003_C007( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C008> C0081QCG_Q003_C008( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_C009> C0091QCG_Q003_C009( @Param("cItemdes") String cItemdes, @Param("cEnabled") String cEnabled);
 List<CG_Q003_M1S1> M1S11QCG_Q003_M1S1( @Param("cgQ003M1s1")CG_Q003_M1S1 cgQ003M1s1);
 int M1S11ACG_Q003_M1S1(@Param("cgQ003M1s1") List<CG_Q003_M1S1> cgQ003M1s1);
 int M1S11UCG_Q003_M1S1(@Param("cgQ003M1s1") List<CG_Q003_M1S1> cgQ003M1s1);
 int M1S11DCG_Q003_M1S1(@Param("cgQ003M1s1") List<CG_Q003_M1S1> cgQ003M1s1);
 int S1S22MSGCG_Q003_S1S2(@Param("cgQ003S1s2") List<CG_Q003_S1S2> cgQ003S1s2 , @Param("ss")String ss);
 int S1S22MSG_QXCG(@Param("cgQ003S1s2") List<CG_Q003_S1S2> cgQ003S1s2 , @Param("ss")String ss);
 int S1S23UCG_Q003_S1S2(@Param("cgQ003S1s2") List<CG_Q003_S1S2> cgQ003S1s2);
List<TpCgorderst> M1S21QCG_Q003_M1S1(@Param("cgQ003M1s1") CG_Q003_M1S1 cg_Q003_M1S1);

 }
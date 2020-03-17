
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_H005_M1S1 ;
import code_fb.entity.CG_H005_S1S2 ;
import code_fb.entity.CG_H005_S1S3 ;
import code_fb.entity.CG_H005_S3S4 ; 
 @Repository("cgH005Mapper")
 public interface CG_H005_Mapper {
 List<CG_H005_M1S1> M1S11QCG_H005_M1S1( @Param("cgH005M1s1")CG_H005_M1S1 cgH005M1s1);
 List<CG_H005_S1S2> S1S21QCG_H005_S1S2( @Param("cgH005S1s2")CG_H005_S1S2 cgH005S1s2);
 int S1S21ACG_H005_S1S2(@Param("cgH005S1s2") List<CG_H005_S1S2> cgH005S1s2);
 int S1S21UCG_H005_S1S2(@Param("cgH005S1s2") List<CG_H005_S1S2> cgH005S1s2);
 int S1S21DCG_H005_S1S2(@Param("cgH005S1s2") List<CG_H005_S1S2> cgH005S1s2);
 List<CG_H005_S1S3> S1S31QCG_H005_S1S3( @Param("cgH005S1s3")CG_H005_S1S3 cgH005S1s3);
 int S1S31ACG_H005_S1S3(@Param("cgH005S1s3") List<CG_H005_S1S3> cgH005S1s3);
 int S1S31UCG_H005_S1S3(@Param("cgH005S1s3") List<CG_H005_S1S3> cgH005S1s3);
 int S1S31DCG_H005_S1S3(@Param("cgH005S1s3") List<CG_H005_S1S3> cgH005S1s3);
 List<CG_H005_S3S4> S3S41QCG_H005_S3S4( @Param("cgH005S3s4")CG_H005_S3S4 cgH005S3s4);
 int S3S41ACG_H005_S3S4(@Param("cgH005S3s4") List<CG_H005_S3S4> cgH005S3s4);
 int S3S41UCG_H005_S3S4(@Param("cgH005S3s4") List<CG_H005_S3S4> cgH005S3s4);
 int S3S41DCG_H005_S3S4(@Param("cgH005S3s4") List<CG_H005_S3S4> cgH005S3s4);
 }

 package code_fb.mapper;
 import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import code_fb.entity.CGC_11_M1S1;
import code_fb.entity.CGC_11_M2S2;
import code_fb.entity.CGC_11_M3S3; 
 @Repository("cgc11Mapper")
 public interface CGC_11_Mapper {
 List<CGC_11_M1S1> M1S11QCGC_11_M1S1( @Param("cgc11M1s1")CGC_11_M1S1 cgc11M1s1);
 int M1S11ACGC_11_M1S1(@Param("cgc11M1s1") List<CGC_11_M1S1> cgc11M1s1);
 int M1S11UCGC_11_M1S1(@Param("cgc11M1s1") List<CGC_11_M1S1> cgc11M1s1);
 int M1S11DCGC_11_M1S1(@Param("cgc11M1s1") List<CGC_11_M1S1> cgc11M1s1);
 List<CGC_11_M2S2> M2S21QCGC_11_M2S2( @Param("cgc11M2s2")CGC_11_M2S2 cgc11M2s2);
 int M2S21ACGC_11_M2S2(@Param("cgc11M2s2") List<CGC_11_M2S2> cgc11M2s2);
 int M2S21UCGC_11_M2S2(@Param("cgc11M2s2") List<CGC_11_M2S2> cgc11M2s2);
 int M2S21DCGC_11_M2S2(@Param("cgc11M2s2") List<CGC_11_M2S2> cgc11M2s2,@Param("cgc11M1s1") CGC_11_M1S1 cgc_11_M1S1);
 List<CGC_11_M3S3> M3S31QCGC_11_M3S3( @Param("cgc11M3s3")CGC_11_M3S3 cgc11M3s3);
 int M3S31ACGC_11_M3S3(@Param("cgc11M3s3") List<CGC_11_M3S3> cgc11M3s3);
 int M3S31UCGC_11_M3S3(@Param("cgc11M3s3") List<CGC_11_M3S3> cgc11M3s3);
 int M3S31DCGC_11_M3S3(@Param("cgc11M3s3") List<CGC_11_M3S3> cgc11M3s3);
List<CGC_11_M2S2> S1S21QCGC_11_M1S1(@Param("cgc11M1s1")CGC_11_M1S1 cgc_11_M1S1);
List<CGC_11_M3S3> S2S31QCGC_11_M3S3(@Param("cgc11M2s2")CGC_11_M2S2 cgc_11_M2S2);
List<CGC_11_M2S2> M2S21Q2CGC_11_M2S2(@Param("cgc11M2s2")CGC_11_M2S2 cgc11M2s2);
List<CGC_11_M3S3> M3S31Q3CGC_11_M3S3(@Param("cgc11M3s3")CGC_11_M3S3 cgc11M3s3, @Param("cgc11M2s2") CGC_11_M2S2 cgc_11_M2S2);
List<CGC_11_M1S1> selectContType();
 }
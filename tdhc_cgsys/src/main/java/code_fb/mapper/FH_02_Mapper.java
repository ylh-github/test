
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.FH_02_M1S1; 
 @Repository("fh02Mapper")
 public interface FH_02_Mapper {
 List<FH_02_M1S1> M1S11QFH_02_M1S1( @Param("fh02M1s1")FH_02_M1S1 fh02M1s1);
 int M1S12MSGFH_02_M1S1(@Param("fh02M1s1") List<FH_02_M1S1> fh02M1s1);
 int M1S13MSGFH_02_M1S1(@Param("fh02M1s1") List<FH_02_M1S1> fh02M1s1);
 }	
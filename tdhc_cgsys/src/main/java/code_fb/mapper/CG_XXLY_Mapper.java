
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_XXLY_M1S1; 
 @Repository("cgXxlyMapper")
 public interface CG_XXLY_Mapper {
 List<CG_XXLY_M1S1> M1S11QCG_XXLY_M1S1( @Param("cgXxlyM1s1")CG_XXLY_M1S1 cgXxlyM1s1);
 int M1S11ACG_XXLY_M1S1(@Param("cgXxlyM1s1") List<CG_XXLY_M1S1> cgXxlyM1s1);
 int M1S11UCG_XXLY_M1S1(@Param("cgXxlyM1s1") List<CG_XXLY_M1S1> cgXxlyM1s1);
 int M1S11DCG_XXLY_M1S1(@Param("cgXxlyM1s1") List<CG_XXLY_M1S1> cgXxlyM1s1);
 /**
  * 逻辑删除信息
  * @param cg_XXLY_M1S1
  * @return
  */
 int M1S11DUCG_XXLY_M1S1(@Param("cgXxlyM1s1") CG_XXLY_M1S1 cg_XXLY_M1S1);
 /**
  * 查询
  * @param cg_XXLY_M1S1
  * @return
  */
 List<CG_XXLY_M1S1> M1S11QCG_XXLY_M1S21(@Param("cgXxlyM1s1")CG_XXLY_M1S1 cg_XXLY_M1S1);
 }
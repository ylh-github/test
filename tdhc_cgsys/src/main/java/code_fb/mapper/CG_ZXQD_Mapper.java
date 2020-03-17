
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import code_fb.entity.CG_ZXQD_M1S1; 
 /**
  * 装箱清单
 * @author lhb
 * @时间：2019年3月28日下午2:17:01
 */
@Repository("cgZxqdMapper")
 public interface CG_ZXQD_Mapper {
 List<CG_ZXQD_M1S1> M1S11QCG_ZXQD_M1S1( @Param("cgZxqdM1s1")CG_ZXQD_M1S1 cgZxqdM1s1);
 int M1S11ACG_ZXQD_M1S1(@Param("cgZxqdM1s1") List<CG_ZXQD_M1S1> cgZxqdM1s1);
 int M1S11UCG_ZXQD_M1S1(@Param("cgZxqdM1s1") List<CG_ZXQD_M1S1> cgZxqdM1s1);
 int M1S11DCG_ZXQD_M1S1(@Param("cgZxqdM1s1") List<CG_ZXQD_M1S1> cgZxqdM1s1);
 }
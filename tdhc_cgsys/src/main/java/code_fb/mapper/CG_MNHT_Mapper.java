
 package code_fb.mapper;
 import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb_cg.entity.CG_XXK_Request;
import code_fb_cg.entity.TpCgcontractmt; 
 @Repository("cgMnhtMapper")
 public interface CG_MNHT_Mapper {
 List<CG_MNHT_M1S1> M1S11QCG_MNHT_M1S1( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1,@Param("startTime")Date startTime,@Param("endTime")Date endTime,@Param("cSw10")String cSw10);
 List<CG_MNHT_M1S1> selectAgreement( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1,@Param("startTime")Date startTime,@Param("endTime")Date endTime,@Param("cSw10")String cSw10);
 List<CG_MNHT_M1S1> M1S11QCG_MNHT_M1S12( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1,@Param("startTime")Date startTime,@Param("endTime")Date endTime,@Param("cSw10")String cSw10);
 int M1S11ACG_MNHT_M1S1(@Param("cgMnhtM1s1") List<CG_MNHT_M1S1> cgMnhtM1s1);
 int M1S11UCG_MNHT_M1S1(@Param("cgMnhtM1s1") List<CG_MNHT_M1S1> cgMnhtM1s1);
 //根据合同号进行修改
 int M1S11UCG_MNHT_M1S2(@Param("cgMnhtM1s1") List<CG_MNHT_M1S1> cgMnhtM1s1);
 int M1S11UCG_MNHT_M1S3( CG_MNHT_M1S1 cgMnhtM1s1);
 int M1S11DCG_MNHT_M1S1(@Param("cgMnhtM1s1") List<CG_MNHT_M1S1> cgMnhtM1s1);
 int M1S11DCG(@Param("cId") String cId);
 List<CG_MNHT_S1S2> S1S21QCG_MNHT_S1S2( @Param("cgMnhtS1s2")CG_MNHT_S1S2 cgMnhtS1s2);
 List<CG_MNHT_S1S2> S1S21QCG_MNHT( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1);
 List<CG_MNHT_S1S2> S1S21QCONNUM( @Param("cgMnhtS1s2")CG_MNHT_S1S2 cgMnhtS1s2);
 int S1S21ACG_MNHT_S1S2(@Param("cgMnhtS1s2") List<CG_MNHT_S1S2> cgMnhtS1s2);
 int S1S21UCG_MNHT_S1S2(@Param("cgMnhtS1s2") List<CG_MNHT_S1S2> cgMnhtS1s2);
 int S1S21DCG_MNHT_S1S2(@Param("cgMnhtS1s2") List<CG_MNHT_S1S2> cgMnhtS1s2);
 int S1S21DCG_MNHT_S1S21(CG_MNHT_S1S2 cgMnhtS1s2);
 List<CG_XXK_Request> M1S1S12(@Param("tpCgcontractmt")CG_MNHT_M1S1 cg_MNHT_M1S1);
 /**
  * 审核
  * @return
  */
 List<CG_MNHT_M1S1> M1S31QCG_MNHT_M1S1();
 List<CG_MNHT_M1S1> M1S312QCG_MNHT_M1S1();
 /**
  * 反馈结果发查询合同信息
  * @param cg_MNHT_M1S1
  * @return
  */
List<CG_MNHT_M1S1> M1S32QCG_MNHT_M1S1(@Param("cg_MNHT_M1S1")CG_MNHT_M1S1 cg_MNHT_M1S1);
/**
 * 信息卡查询
 * @param cg_MNHT_M1S1
 * @param startTime
 * @param endTime
 * @return
 */
List<CG_MNHT_M1S1> M1S11Q2CG_MNHT_M1S1(@Param("cgMnhtM1s1")CG_MNHT_M1S1 cg_MNHT_M1S1, @Param("startTime")Date startTime, @Param("endTime")Date endTime);
/*List<CG_MNHT_M1S1> M1S11Q2CG_MNHT_M1SQ1(CG_MNHT_M1S1 cg_MNHT_M1S1, Date startTime, Date endTime);*/
/**
 * 退单
 * @param cgMnhtM1s1
 * @return
 */
int  M1S21UCG_MNHT_M1S1(@Param("cgMnhtM1s1")List<CG_MNHT_M1S1> cgMnhtM1s1);
/**
 * 信息卡查询
 * @param cgMnhtM1s1
 * @param startTime
 * @param endTime
 * @param cSw10
 * @return
 */
List<CG_MNHT_M1S1> M1S11QCG_MNHT_M1S13( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1,@Param("startTime")Date startTime,@Param("endTime")Date endTime);
List<CG_MNHT_M1S1> M1S11QCG_MNHT_M1S14(@Param("cgMnhtM1s1") CG_MNHT_M1S1 cg_MNHT_M1S1,@Param("startTime") Date startTime, @Param("endTime") Date endTime);
List<CG_MNHT_M1S1> getInfoBycConnum(@Param("cConnum")String getcConnum);
List<CG_MNHT_M1S1> M1S11QCG_MNHT( @Param("cgMnhtM1s1")CG_MNHT_M1S1 cgMnhtM1s1);
List<CG_MNHT_M1S1>  searchInfoBycConnum(@Param("cConnum") String getcConnum);




 }
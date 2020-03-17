
 package code_fb.mapper;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CLAUSE_M1S1;
import vip.toda.piper.auth.web.client.User; 
 @Repository("clauseMapper")
 public interface CLAUSE_Mapper {
 List<CLAUSE_M1S1> M1S11QCLAUSE_M1S1( @Param("clauseM1s1")CLAUSE_M1S1 clauseM1s1);
 List<CLAUSE_M1S1> M1S11QCLAUSE_M1S3( @Param("clauseM1s1")CLAUSE_M1S1 clauseM1s1);
 List<CLAUSE_M1S1> M1S11QCLAUSE_M1S11(@Param("clauseM1s1")CLAUSE_M1S1 clause_M1S1);
 List<CLAUSE_M1S1> M1S11QCLAUSE_M1S2( @Param("clauseM1s1") CLAUSE_M1S1 updateCLAUSE_M1S1);
 int M1S11ACLAUSE_M1S1(@Param("clauseM1s1") List<CLAUSE_M1S1> clauseM1s1);
 int M1S11UCLAUSE_M1S1(@Param("clauseM1s1") List<CLAUSE_M1S1> clauseM1s1);
 int M1S11DCLAUSE_M1S1(@Param("clauseM1s1") List<CLAUSE_M1S1> clauseM1s1);
 
 /**
  * 合同模型
 * @param user 
  * @return
  */
List<CLAUSE_M1S1> selectContType(@Param("user")String user);
/**
 * 下拉框选择
 * @param clause_M1S1
 * @return
 */
List<CLAUSE_M1S1> getContTypeInfo(@Param("clauseM1s1")CLAUSE_M1S1 clause_M1S1);
/**
 * 验证
 * @param clause_M1S1
 * @return
 */
 List<CLAUSE_M1S1> M1S11QCLAUSE_CHECK(@Param("clauseM1s1")CLAUSE_M1S1 clause_M1S1);
 /*
  * 根据模板类型修改
  */
 int  M1S11UCLAUSE_M1S2(CLAUSE_M1S1 clause_M1S1);
 /**
  * 根据模板id
  * @param clause_M1S1
  * @return
  */
 int M1S11UCLAUSE_M1S3(CLAUSE_M1S1 clause_M1S1);
 /**
  * 标准合同类型查询
  * @return
  */
 List<CLAUSE_M1S1> getStandardInfo();

 }
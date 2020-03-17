
 package code_fb.mapper;
 import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.FH_01_M1S1;
import code_fb.entity.FH_01_M1S11;
import code_fb.entity.FH_01_M1S12;
import code_fb.entity.FH_01_M2S2; 
 @Repository("fh01Mapper")
 public interface FH_01_Mapper {
 List<FH_01_M1S1> M1S11QFH_01_M1S1( @Param("fh01M1s1")FH_01_M1S1 fh01M1s1);
 int M1S11Q2( @Param("fh01M1s1")FH_01_M1S1 fh01M1s1);
 List<FH_01_M2S2> M1S12Q(@Param("fh01M2s2") FH_01_M2S2 fh_01_M2S2);
int M1S13MSGFH_01_M1S1(@Param("fh01M1s1") List<FH_01_M1S1> fh01M1s1);
 int M1S14MSGFH_01_M1S1(@Param("fh01M1s1") List<FH_01_M1S1> fh01M1s1);
 int M1S11DFH_01_M1S1(@Param("fh01M1s1") List<FH_01_M1S1> fh01M1s1);
 /**
  * 导入
  * @param fh01M2s2
  * @return
  */
 			int M1S12MSG(@Param("fh01M1s1")List<FH_01_M1S11> fh01m1s11);
 
 			List<FH_01_M2S2> M2S21QFH_01_M2S2( @Param("fh01M2s2")FH_01_M2S2 fh01M2s2,@Param("startTime")Date startTime,@Param("endTime")Date endTime);
 /**
  * 导入
  * @param fh01M2s2
  * @return
  */
 	int M1S12MSG2(@Param("fh01M1s12")List<FH_01_M1S12> fh01m1s12);
List<FH_01_M2S2> M1S12MSG2(FH_01_M2S2 fh_01_M2S2, Date startTime, Date endTime);

//	int  M1S14MSGFH_01_M1S1(String getcID);
	  int getHTInfo(String getcID);
	int  M1S13MSGFH_01_M1S1(String getcID);
	List<FH_01_M2S2> getHTH(@Param("fh01M2s2") FH_01_M2S2 fh01);

 
 }
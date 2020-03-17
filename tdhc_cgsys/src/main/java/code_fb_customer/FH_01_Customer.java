
 package code_fb_customer;
 import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.FH_01_M1S1;
import code_fb.request.FH_01_Request_M1S1; 
@Repository
 public class FH_01_Customer 
 { 
 public String check_M1S13MSG_FH_01_M1S1 (@Param("fh01M1s1")List<FH_01_M1S1> fh01M1s1) 
 { 
 		return "success";  
 } 
 public String check_M1S14MSG_FH_01_M1S1 (@Param("fh01M1s1")List<FH_01_M1S1> fh01M1s1) 
 { 
 		return "success";  
 }
 public String check_M1S11D_FH_01_M1S1 (FH_01_Request_M1S1 fh01RequestM1s1) 
 { 
 		return "success";  
 } 
 }
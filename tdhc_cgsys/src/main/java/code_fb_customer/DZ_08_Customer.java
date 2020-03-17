
 package code_fb_customer;
 import java.sql.Timestamp;
 import java.text.SimpleDateFormat;
 import java.util.ArrayList;
 import java.util.Date;
 import java.util.HashMap;
 import java.util.LinkedList;
 import java.util.List;
 import org.springframework.stereotype.Repository; 
 import org.apache.commons.lang.StringUtils;
 import org.apache.commons.lang.WordUtils;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.beans.factory.annotation.Qualifier;
 import org.springframework.stereotype.Service;
 import org.springframework.transaction.annotation.Transactional;

import code_fb.request.DZ_08_Request_M1S1;
import transfer.EmptyData;
 import transfer.EmptyTag;
 import transfer.Errcode;
 import transfer.ResponseObject;
 import transfer.ResponseObjectBuilder;

@Repository
 public class DZ_08_Customer 
 { 
 public String check_M1S11A_DZ_08_M1S1 (DZ_08_Request_M1S1 dz08RequestM1s1) 
 { 
 		return "success";  
 } 
 public String check_M1S11U_DZ_08_M1S1 (DZ_08_Request_M1S1 dz08RequestM1s1) 
 { 
 		return "success";  
 } 
 public String check_M1S11D_DZ_08_M1S1 (DZ_08_Request_M1S1 dz08RequestM1s1) 
 { 
 		return "success";  
 } 
 public String check_M1S12MSG_DZ_08_M1S1 (DZ_08_Request_M1S1 dz08RequestM1s1) 
 { 
 		return "success";  
 }
 }
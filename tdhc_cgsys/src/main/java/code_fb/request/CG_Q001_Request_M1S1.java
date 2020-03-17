
 
 package code_fb.request;
  import java.util.List;

import code_fb.entity.CG_Q001_M1S1;
import code_fb_cg.request.Q001M1s1Qrequest;
  public class CG_Q001_Request_M1S1 {
	  private CG_Q001_M1S1 m1s1;
  private List<CG_Q001_M1S1> cgQ001M1s1;
  
  private List<Q001M1s1Qrequest> q001M1s1Qrequest;
  
  public List<CG_Q001_M1S1> getCgQ001M1s1() {
  	return cgQ001M1s1;
  	}
  public void setCgQ001M1s1(List<CG_Q001_M1S1>cgQ001M1s1) {
  	this.cgQ001M1s1 = cgQ001M1s1;
  	}
public CG_Q001_M1S1 getM1s1() {
	return m1s1;
}
public void setM1s1(CG_Q001_M1S1 m1s1) {
	this.m1s1 = m1s1;
}
public List<Q001M1s1Qrequest> getQ001M1s1Qrequest() {
	return q001M1s1Qrequest;
}
public void setQ001M1s1Qrequest(List<Q001M1s1Qrequest> q001m1s1Qrequest) {
	q001M1s1Qrequest = q001m1s1Qrequest;
}
  


  }
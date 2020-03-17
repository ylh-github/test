
 
 package code_fb.request;
  import java.util.List;
  import code_fb.entity.CG_Q001_S1S2;
import code_fb_cg.entity.TpCgordermt;
  public class CG_Q001_Request_S1S2 {
  private List<CG_Q001_S1S2> cgQ001S1s2;
  private List<TpCgordermt> tpCgordermt;
  
  private CG_Q001_S1S2 tpCgorderst;
  
  public CG_Q001_S1S2 getTpCgorderst() {
	return tpCgorderst;
}
public void setTpCgorderst(CG_Q001_S1S2 tpCgorderst) {
	this.tpCgorderst = tpCgorderst;
}
public List<TpCgordermt> getTpCgordermt() {
	return tpCgordermt;
}
public void setTpCgordermt(List<TpCgordermt> tpCgordermt) {
	this.tpCgordermt = tpCgordermt;
}
public List<CG_Q001_S1S2> getCgQ001S1s2() {
  	return cgQ001S1s2;
  	}
  public void setCgQ001S1s2(List<CG_Q001_S1S2>cgQ001S1s2) {
  	this.cgQ001S1s2 = cgQ001S1s2;
  	}	
  }
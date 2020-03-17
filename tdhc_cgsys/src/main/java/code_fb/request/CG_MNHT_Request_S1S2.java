
 
 package code_fb.request;
  import java.util.List;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
  public class CG_MNHT_Request_S1S2 {
  public List<CG_MNHT_S1S2> cgMnhtS1s2;
  private CG_MNHT_M1S1 cgMnhtM1s1;
  private String cGoodsname;
  public List<CG_MNHT_S1S2> getCgMnhtS1s2() {
  	return cgMnhtS1s2;
  	}
  public void setCgMnhtS1s2(List<CG_MNHT_S1S2>cgMnhtS1s2) {
  	this.cgMnhtS1s2 = cgMnhtS1s2;
  	}
	public CG_MNHT_M1S1 getCgMnhtM1s1() {
		return cgMnhtM1s1;
	}
	public void setCgMnhtM1s1(CG_MNHT_M1S1 cgMnhtM1s1) {
		this.cgMnhtM1s1 = cgMnhtM1s1;
	}
	public String getcGoodsname() {
		return cGoodsname;
	}
	public void setcGoodsname(String cGoodsname) {
		this.cGoodsname = cGoodsname;
	}	
	
  }
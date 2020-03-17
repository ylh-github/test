
  package code_fb.response;
  import java.util.List;

import code_fb.entity.CG_MNHT_S1S2;
import code_fb_cg.entity.CG_XXK_Request;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TpSettlement;
  public class CG_MNHT_Response_S1S2 {
  public List<CG_MNHT_S1S2> cgMnhtS1s2;
  private List<CG_XXK_Request> cgXXK_Request;
  private List<TpSettlement> tpSettlement;
  public List<CG_MNHT_S1S2> getCgMnhtS1s2() {
  	return cgMnhtS1s2;
  	}
  public void setCgMnhtS1s2(List<CG_MNHT_S1S2> cgMnhtS1s2) {
  	this.cgMnhtS1s2 = cgMnhtS1s2;
  	}
public List<CG_XXK_Request> getCgXXK_Request() {
	return cgXXK_Request;
}
public void setCgXXK_Request(List<CG_XXK_Request> cgXXK_Request) {
	this.cgXXK_Request = cgXXK_Request;
}	
private List<TbCgcontract> tbCgcontract;
public List<TbCgcontract> getTbCgcontract() {
	return tbCgcontract;
}
public void setTbCgcontract(List<TbCgcontract> tbCgcontract) {
	this.tbCgcontract = tbCgcontract;
}
public List<TpSettlement> getTpSettlement() {
	return tpSettlement;
}
public void setTpSettlement(List<TpSettlement> tpSettlement) {
	this.tpSettlement = tpSettlement;
}

  
  }

  package code_fb.response;
  import java.util.List;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.response.TpcgcontractmttResponse;
  public class CG_MNHT_Response_M1S1 {
  public List<CG_MNHT_M1S1> cgMnhtM1s1;
  public List<TpcgcontractmttResponse> listResponse;
  public List<CG_MNHT_M1S1> getCgMnhtM1s1() {
  	return cgMnhtM1s1;
  	}
  public void setCgMnhtM1s1(List<CG_MNHT_M1S1> cgMnhtM1s1) {
  	this.cgMnhtM1s1 = cgMnhtM1s1;
  	}
public List<TpcgcontractmttResponse> getListResponse() {
	return listResponse;
}
public void setListResponse(List<TpcgcontractmttResponse> listResponse) {
	this.listResponse = listResponse;
}	
  
  }
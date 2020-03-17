
 
 package code_fb.request;
 import java.util.List;
import code_fb.entity.DZ_08_M1S1;
import code_fb_cg.entity.TpCgcontractmt;
  public class DZ_08_Request_M1S1 {
  public List<DZ_08_M1S1> dz08M1s1;
  private List<TpCgcontractmt> list;
  
  public List<TpCgcontractmt> getList() {
	return list;
}
public void setList(List<TpCgcontractmt> list) {
	this.list = list;
}
public List<DZ_08_M1S1> getDz08M1s1() {
  	return dz08M1s1;
  	}
  public void setDz08M1s1(List<DZ_08_M1S1>dz08M1s1) {
  	this.dz08M1s1 = dz08M1s1;
  	}	
  }
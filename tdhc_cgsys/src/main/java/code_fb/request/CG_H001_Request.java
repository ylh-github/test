
 
 package code_fb.request;
  import java.util.List;
  import code_fb.entity.CG_H001_M1S1;
import code_fb_cg.entity.TpConrevocare;
import code_fb_cg.request.ItemRequestObject;
  public class CG_H001_Request {
  private List<CG_H001_M1S1> cgH001M1s1;
  private List<H002request> h002request;
  private TpConrevocare conrevocare;
//具体项目报表跳转对接
private ItemRequestObject itemRequestObject;
  public List<CG_H001_M1S1> getCgH001M1s1() {
  	return cgH001M1s1;
  	}
  public void setCgH001M1s1(List<CG_H001_M1S1>cgH001M1s1) {
  	this.cgH001M1s1 = cgH001M1s1;
  	}
public List<H002request> getH002request() {
	return h002request;
}
public void setH002request(List<H002request> h002request) {
	this.h002request = h002request;
}
public TpConrevocare getConrevocare() {
	return conrevocare;
}
public void setConrevocare(TpConrevocare conrevocare) {
	this.conrevocare = conrevocare;
}
public ItemRequestObject getItemRequestObject() {
	return itemRequestObject;
}
public void setItemRequestObject(ItemRequestObject itemRequestObject) {
	this.itemRequestObject = itemRequestObject;
}

  }

 
 package code_fb.request;
  import java.util.Date;
import java.util.List;

import code_fb.entity.CG_MNHT_M1S1;
  public class CG_MNHT_Request_M1S1 {
  public List<CG_MNHT_M1S1> cgMnhtM1s1;
  public List<CG_MNHT_M1S1> getCgMnhtM1s1() {
  	return cgMnhtM1s1;
  	}
  public void setCgMnhtM1s1(List<CG_MNHT_M1S1>cgMnhtM1s1) {
  	this.cgMnhtM1s1 = cgMnhtM1s1;
  	}	
  private Date startTime;
  public Date getStartTime() {
  return startTime;
  }
  public void setStartTime(Date startTime) {
  this.startTime = startTime;
  }
  private Date endTime;
  public Date getEndTime() {
  return endTime;
  }
  public void setEndTime(Date endTime) {
  this.endTime = endTime;
  }
  //变更原因
  private String[] cause;
public String filename;
public String cConnum;
private Date deliverytime;
public String getFilename() {
	return filename;
}
public void setFilename(String filename) {
	this.filename = filename;
}
public String getcConnum() {
	return cConnum;
}
public void setcConnum(String cConnum) {
	this.cConnum = cConnum;
}
public String[] getCause() {
	return cause;
}
public void setCause(String[] cause) {
	this.cause = cause;
}
public Date getDeliverytime() {
	return deliverytime;
}
public void setDeliverytime(Date deliverytime) {
	this.deliverytime = deliverytime;
}

  }
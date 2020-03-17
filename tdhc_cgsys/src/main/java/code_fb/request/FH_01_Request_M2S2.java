
 
 package code_fb.request;
  import java.util.Date;
import java.util.List;

import code_fb.entity.FH_01_M2S2;
  public class FH_01_Request_M2S2 {
  public List<FH_01_M2S2> fh01M2s2;
  public List<FH_01_M2S2> getFh01M2s2() {
  	return fh01M2s2;
  	}
  public void setFh01M2s2(List<FH_01_M2S2>fh01M2s2) {
  	this.fh01M2s2 = fh01M2s2;
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
  }
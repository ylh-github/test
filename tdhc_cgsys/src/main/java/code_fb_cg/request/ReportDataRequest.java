package code_fb_cg.request;

import java.util.Date;

public class ReportDataRequest {

	private String year;
	private String[] cManor;
	
	private String[] cCludecom;
	
	private Date startTime;
	
	private Date endTime;
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String[] getcManor() {
		return cManor;
	}
	public void setcManor(String[] cManor) {
		this.cManor = cManor;
	}
	public String[] getcCludecom() {
		return cCludecom;
	}
	public void setcCludecom(String[] cCludecom) {
		this.cCludecom = cCludecom;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	
	
}

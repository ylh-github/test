package code_fb_cg.request;

import java.util.Date;

public class HompageObject {
	private Date startTime;
	private Date endTime;
	private String[] itemName;
	private String[] cManor;
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
	public String[] getItemName() {
		return itemName;
	}
	public void setItemName(String[] itemName) {
		this.itemName = itemName;
	}
	public String[] getcManor() {
		return cManor;
	}
	public void setcManor(String[] cManor) {
		this.cManor = cManor;
	}
	
}
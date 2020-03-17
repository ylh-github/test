package code_fb_cg.request;

import java.util.Date;

public class ItemRequestObject {

	private Date startTime;
	private Date endTime;
	private String cDataField;
	private String cDepartment;
	private String gsId;
	private String[] cState;
	
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
	public String getcDataField() {
		return cDataField;
	}
	public void setcDataField(String cDataField) {
		this.cDataField = cDataField;
	}
	
	public String getcDepartment() {
		return cDepartment;
	}
	public void setcDepartment(String cDepartment) {
		this.cDepartment = cDepartment;
	}
	public String getGsId() {
		return gsId;
	}
	public void setGsId(String gsId) {
		this.gsId = gsId;
	}
	public String[] getcState() {
		return cState;
	}
	public void setcState(String[] cState) {
		this.cState = cState;
	}
}

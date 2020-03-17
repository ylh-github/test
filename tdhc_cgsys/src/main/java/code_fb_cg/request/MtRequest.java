package code_fb_cg.request;

import java.util.Date;

public class MtRequest {

	private String cOrdernum;
	private String year;
	private String month;
	private String cManor;
	private String parame;
	private String[] notPurParame;
	private Date startTime;
	private Date endTime;
	private String[] cState;
	
	public String getcOrdernum() {
		return cOrdernum;
	}

	public void setcOrdernum(String cOrdernum) {
		this.cOrdernum = cOrdernum;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getcManor() {
		return cManor;
	}

	public void setcManor(String cManor) {
		this.cManor = cManor;
	}

	public String getParame() {
		return parame;
	}

	public void setParame(String parame) {
		this.parame = parame;
	}

	

	public String[] getNotPurParame() {
		return notPurParame;
	}

	public void setNotPurParame(String[] notPurParame) {
		this.notPurParame = notPurParame;
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

	public String[] getcState() {
		return cState;
	}

	public void setcState(String[] cState) {
		this.cState = cState;
	}
	
}

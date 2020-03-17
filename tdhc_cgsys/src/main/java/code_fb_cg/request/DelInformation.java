package code_fb_cg.request;

import java.util.Date;

public class DelInformation {

	private String cDelivdate; //交货期限
	private String cSw100;//天数
	private Date deadlined;//日期
	private String cDelivplace; //交货地点

	public String getcDelivdate() {
		return cDelivdate;
	}

	public void setcDelivdate(String cDelivdate) {
		this.cDelivdate = cDelivdate;
	}

	public String getcDelivplace() {
		return cDelivplace;
	}

	public void setcDelivplace(String cDelivplace) {
		this.cDelivplace = cDelivplace;
	}

	public String getcSw100() {
		return cSw100;
	}

	public void setcSw100(String cSw100) {
		this.cSw100 = cSw100;
	}

	public Date getDeadlined() {
		return deadlined;
	}

	public void setDeadlined(Date deadlined) {
		this.deadlined = deadlined;
	}
	
	
}

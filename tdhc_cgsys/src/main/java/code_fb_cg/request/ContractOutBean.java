package code_fb_cg.request;

import java.util.Date;
import java.util.List;

public class ContractOutBean {
	private Date startTime;
	private Date endTime;
	private String cConnum;
	private String cConnumtime;
	private String cSupplier;
	private String cState;
	private String cSw10;
	private String  cCreater;
	private List<String> cCludecom;//签订公司
	private String cCludecomstr;
	private List<String> cCheckway;//到货情况
	private String cCheckwaystr;
	private List<String> cSignstep;//付款情况
	private String cSignstepstr;
	private List<String> cTransway;//发票情况
	private String cTranswaystr;
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
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	public String getcConnumtime() {
		return cConnumtime;
	}
	public void setcConnumtime(String cConnumtime) {
		this.cConnumtime = cConnumtime;
	}
	public String getcSupplier() {
		return cSupplier;
	}
	public void setcSupplier(String cSupplier) {
		this.cSupplier = cSupplier;
	}
	public String getcState() {
		return cState;
	}
	public void setcState(String cState) {
		this.cState = cState;
	}
	public String getcSw10() {
		return cSw10;
	}
	public void setcSw10(String cSw10) {
		this.cSw10 = cSw10;
	}
	public String getcCreater() {
		return cCreater;
	}
	public void setcCreater(String cCreater) {
		this.cCreater = cCreater;
	}
	public List<String> getcCludecom() {
		return cCludecom;
	}
	public void setcCludecom(List<String> cCludecom) {
		this.cCludecom = cCludecom;
	}
	public String getcCludecomstr() {
		return cCludecomstr;
	}
	public void setcCludecomstr(String cCludecomstr) {
		this.cCludecomstr = cCludecomstr;
	}
	public List<String> getcCheckway() {
		return cCheckway;
	}
	public void setcCheckway(List<String> cCheckway) {
		this.cCheckway = cCheckway;
	}
	public String getcCheckwaystr() {
		return cCheckwaystr;
	}
	public void setcCheckwaystr(String cCheckwaystr) {
		this.cCheckwaystr = cCheckwaystr;
	}
	public List<String> getcSignstep() {
		return cSignstep;
	}
	public void setcSignstep(List<String> cSignstep) {
		this.cSignstep = cSignstep;
	}
	public String getcSignstepstr() {
		return cSignstepstr;
	}
	public void setcSignstepstr(String cSignstepstr) {
		this.cSignstepstr = cSignstepstr;
	}
	public List<String> getcTransway() {
		return cTransway;
	}
	public void setcTransway(List<String> cTransway) {
		this.cTransway = cTransway;
	}
	public String getcTranswaystr() {
		return cTranswaystr;
	}
	public void setcTranswaystr(String cTranswaystr) {
		this.cTranswaystr = cTranswaystr;
	}
	
	
}

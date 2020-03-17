package code_fb_cg.request;

import java.util.List;

public class TbGuildRequest {

	private List<String> cCheckway;//到货情况
	private List<String> cSw20;//合同到货进度
	private List<String> cSw19;//物资到货进度
	private String cConnum;
	public List<String> getcCheckway() {
		return cCheckway;
	}
	public void setcCheckway(List<String> cCheckway) {
		this.cCheckway = cCheckway;
	}
	public List<String> getcSw20() {
		return cSw20;
	}
	public void setcSw20(List<String> cSw20) {
		this.cSw20 = cSw20;
	}
	public List<String> getcSw19() {
		return cSw19;
	}
	public void setcSw19(List<String> cSw19) {
		this.cSw19 = cSw19;
	}
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	
}

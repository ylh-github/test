package code_fb_cg.request;

import java.util.List;

import code_fb.entity.CG_Q001_M1S1;
import code_fb_cg.entity.TpCgorderst;

public class CG_Q001_Request_M1S2 {
	
	private List<CG_Q001_M1S1> cgQ001M1s1;
	
	private TpCgorderst tpCgorderst;

	public List<CG_Q001_M1S1> getCgQ001M1s1() {
		return cgQ001M1s1;
	}

	public void setCgQ001M1s1(List<CG_Q001_M1S1> cgQ001M1s1) {
		this.cgQ001M1s1 = cgQ001M1s1;
	}

	public TpCgorderst getTpCgorderst() {
		return tpCgorderst;
	}

	public void setTpCgorderst(TpCgorderst tpCgorderst) {
		this.tpCgorderst = tpCgorderst;
	}
	
	

}

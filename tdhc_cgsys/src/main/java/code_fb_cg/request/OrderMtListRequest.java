package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgordermt;

public class OrderMtListRequest {

	private List<TpCgordermt> cgQ001M1s13;
	private TpCgordermt tpCgordermt;

	public List<TpCgordermt> getCgQ001M1s13() {
		return cgQ001M1s13;
	}

	public void setCgQ001M1s13(List<TpCgordermt> cgQ001M1s13) {
		this.cgQ001M1s13 = cgQ001M1s13;
	}

	public TpCgordermt getTpCgordermt() {
		return tpCgordermt;
	}

	public void setTpCgordermt(TpCgordermt tpCgordermt) {
		this.tpCgordermt = tpCgordermt;
	}

}

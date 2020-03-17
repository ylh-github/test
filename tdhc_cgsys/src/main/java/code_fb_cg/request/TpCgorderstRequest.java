package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgorderst;

public class TpCgorderstRequest {

	private List<TpCgorderst> cgQ001S1s2;
	
	private FormData formData;
	//method
	
	public List<TpCgorderst> getCgQ001S1s2() {
		return cgQ001S1s2;
	}

	public FormData getFormData() {
		return formData;
	}

	public void setFormData(FormData formData) {
		this.formData = formData;
	}

	public void setCgQ001S1s2(List<TpCgorderst> cgQ001S1s2) {
		this.cgQ001S1s2 = cgQ001S1s2;
	}
	
}

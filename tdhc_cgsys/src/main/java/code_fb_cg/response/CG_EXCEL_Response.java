package code_fb_cg.response;

import java.util.List;

import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
/**
 * 
 * @author lhb
 * @时间：2018年8月16日上午11:30:09
 */
public class CG_EXCEL_Response {

	private List<TpCgordermt> ordermt;
	private List<TpCgorderst> orderst;
	public List<TpCgordermt> getOrdermt() {
		return ordermt;
	}
	public void setOrdermt(List<TpCgordermt> ordermt) {
		this.ordermt = ordermt;
	}
	public List<TpCgorderst> getOrderst() {
		return orderst;
	}
	public void setOrderst(List<TpCgorderst> orderst) {
		this.orderst = orderst;
	}
	
}

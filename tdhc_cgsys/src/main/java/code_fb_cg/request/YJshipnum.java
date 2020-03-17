package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;

public class YJshipnum {

	private List<TpCgcontractmt> mtList;
	private ShipNumber num;
	public List<TpCgcontractmt> getMtList() {
		return mtList;
	}
	public void setMtList(List<TpCgcontractmt> mtList) {
		this.mtList = mtList;
	}
	public ShipNumber getNum() {
		return num;
	}
	public void setNum(ShipNumber num) {
		this.num = num;
	}
}

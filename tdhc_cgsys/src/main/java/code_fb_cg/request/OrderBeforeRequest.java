package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgorderst;

public class OrderBeforeRequest {

	private List<TpCgorderst> list;
	private List<TpCgorderbefore> list2;
	public List<TpCgorderst> getList() {
		return list;
	}
	public void setList(List<TpCgorderst> list) {
		this.list = list;
	}
	public List<TpCgorderbefore> getList2() {
		return list2;
	}
	public void setList2(List<TpCgorderbefore> list2) {
		this.list2 = list2;
	}
}

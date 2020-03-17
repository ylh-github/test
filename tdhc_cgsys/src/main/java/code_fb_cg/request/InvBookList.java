package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgmoneyinvbook;

public class InvBookList {

	private List<TpCgcontractmt> mtList;
	private List<TpCgmoneyinvbook> list;

	public List<TpCgmoneyinvbook> getList() {
		return list;
	}

	public void setList(List<TpCgmoneyinvbook> list) {
		this.list = list;
	}

	public List<TpCgcontractmt> getMtList() {
		return mtList;
	}

	public void setMtList(List<TpCgcontractmt> mtList) {
		this.mtList = mtList;
	}
	
}

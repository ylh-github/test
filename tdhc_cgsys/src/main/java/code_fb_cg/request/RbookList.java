package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgmoneyinvbook;

public class RbookList {

	private List<TpCgcontractmt> conmt;
	private List<TpCgmoneyinvbook> list;

	public List<TpCgmoneyinvbook> getList() {
		return list;
	}

	public void setList(List<TpCgmoneyinvbook> list) {
		this.list = list;
	}

	public List<TpCgcontractmt> getConmt() {
		return conmt;
	}

	public void setConmt(List<TpCgcontractmt> conmt) {
		this.conmt = conmt;
	}
	
}

package code_fb_cg.request;

import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;

public class ContractmtList {

	private String cSw08;//作废原因
	
	public String getcSw08() {
		return cSw08;
	}

	public void setcSw08(String cSw08) {
		this.cSw08 = cSw08;
	}

	private List<TpCgcontractmt> list;

	public List<TpCgcontractmt> getList() {
		return list;
	}

	public void setList(List<TpCgcontractmt> list) {
		this.list = list;
	}
}

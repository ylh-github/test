package code_fb_cg.entity;

import java.util.List;

import code_fb_cg.request.TbGuildRequest;

public class TbGuildataRequest {
	private TbGuildata tbGuildata;
	private List<TbGuildata> listData;
	private  TbGuildRequest  tbGuildRequest;
	private TpCgcontractmt tpCgcontractmt;
	private  List<TpCgcontractst> tpCgcontractst;
	public List<TbGuildata> getListData() {
		return listData;
	}
	public void setListData(List<TbGuildata> listData) {
		this.listData = listData;
	}
	public TbGuildata getTbGuildata() {
		return tbGuildata;
	}
	public void setTbGuildata(TbGuildata tbGuildata) {
		this.tbGuildata = tbGuildata;
	}
	public TbGuildRequest getTbGuildRequest() {
		return tbGuildRequest;
	}
	public void setTbGuildRequest(TbGuildRequest tbGuildRequest) {
		this.tbGuildRequest = tbGuildRequest;
	}
	public TpCgcontractmt getTpCgcontractmt() {
		return tpCgcontractmt;
	}
	public void setTpCgcontractmt(TpCgcontractmt tpCgcontractmt) {
		this.tpCgcontractmt = tpCgcontractmt;
	}
	public List<TpCgcontractst> getTpCgcontractst() {
		return tpCgcontractst;
	}
	public void setTpCgcontractst(List<TpCgcontractst> tpCgcontractst) {
		this.tpCgcontractst = tpCgcontractst;
	}
	
	
}

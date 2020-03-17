package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCancelment;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpSettlement;
/**
 * 合同物资对应请购单物资导入
 * @author lhb
 * @时间：2018年11月29日下午12:21:47
 */
public class AgreementRequest {

	private TpCgcontractmtt tpCgcontractmtt;
	private TpCgcontractmtt contractmtt;
	private TpCgcontractmtt tmtt;
	private List<TpCgcontractmt> stList;//选中的合同物资
	private List<TpCgcontractst> excel;//excel表中数据
	private List<TpCgcontractst> shipnum;
	private TpCgcontractst tpCgcontractst;
	private List<TpCgcontractstt> tsttlist;//excel表中的拟合同信息
	private List<TpCgcontractstt> tpCgcontractstt;//excel表中的拟合同信息
	private List<TpCgorderRequest>  tpCgorderRequest;//合同物资信息
	private TpCgcontractstt contractstt;
	private TpSettlement tpSettlement;
	private List<TpSettlement> settlement;
	private String[] cause;
	private TpCancelment tpCancelment;
	private List<TpCancelment> cancelment;
	

	public List<TpCgorderRequest> getTpCgorderRequest() {
		return tpCgorderRequest;
	}

	public void setTpCgorderRequest(List<TpCgorderRequest> tpCgorderRequest) {
		this.tpCgorderRequest = tpCgorderRequest;
	}

	public String[] getCause() {
		return cause;
	}

	public void setCause(String[] cause) {
		this.cause = cause;
	}

	public List<TpCgcontractst> getExcel() {
		return excel;
	}

	public void setExcel(List<TpCgcontractst> excel) {
		this.excel = excel;
	}

	public List<TpCgcontractmt> getStList() {
		return stList;
	}

	public void setStList(List<TpCgcontractmt> stList) {
		this.stList = stList;
	}

	public List<TpCgcontractst> getShipnum() {
		return shipnum;
	}

	public void setShipnum(List<TpCgcontractst> shipnum) {
		this.shipnum = shipnum;
	}

	public List<TpCgcontractstt> getTsttlist() {
		return tsttlist;
	}

	public void setTsttlist(List<TpCgcontractstt> tsttlist) {
		this.tsttlist = tsttlist;
	}

	public TpCgcontractst getTpCgcontractst() {
		return tpCgcontractst;
	}

	public void setTpCgcontractst(TpCgcontractst tpCgcontractst) {
		this.tpCgcontractst = tpCgcontractst;
	}

	public TpCgcontractmtt getTpCgcontractmtt() {
		return tpCgcontractmtt;
	}

	public void setTpCgcontractmtt(TpCgcontractmtt tpCgcontractmtt) {
		this.tpCgcontractmtt = tpCgcontractmtt;
	}

	public TpCgcontractmtt getContractmtt() {
		return contractmtt;
	}

	public void setContractmtt(TpCgcontractmtt contractmtt) {
		this.contractmtt = contractmtt;
	}

	public List<TpCgcontractstt> getTpCgcontractstt() {
		return tpCgcontractstt;
	}

	public void setTpCgcontractstt(List<TpCgcontractstt> tpCgcontractstt) {
		this.tpCgcontractstt = tpCgcontractstt;
	}

	public TpCgcontractstt getContractstt() {
		return contractstt;
	}

	public void setContractstt(TpCgcontractstt contractstt) {
		this.contractstt = contractstt;
	}

	public TpCgcontractmtt getTmtt() {
		return tmtt;
	}

	public void setTmtt(TpCgcontractmtt tmtt) {
		this.tmtt = tmtt;
	}

	public TpSettlement getTpSettlement() {
		return tpSettlement;
	}

	public void setTpSettlement(TpSettlement tpSettlement) {
		this.tpSettlement = tpSettlement;
	}

	public List<TpSettlement> getSettlement() {
		return settlement;
	}

	public void setSettlement(List<TpSettlement> settlement) {
		this.settlement = settlement;
	}

	public TpCancelment getTpCancelment() {
		return tpCancelment;
	}

	public void setTpCancelment(TpCancelment tpCancelment) {
		this.tpCancelment = tpCancelment;
	}

	public List<TpCancelment> getCancelment() {
		return cancelment;
	}

	public void setCancelment(List<TpCancelment> cancelment) {
		this.cancelment = cancelment;
	}

	
	
}

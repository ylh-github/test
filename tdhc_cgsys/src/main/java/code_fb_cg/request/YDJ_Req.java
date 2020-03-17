package code_fb_cg.request;




import java.util.List;

import code_fb_cg.entity.ContractVoBean;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgorderst;

public class YDJ_Req {
	
	private List<TpCgorderst> tpCgorderst;
	private TpCgorderbefore tpCgorderbefore;
	//选中的物资
	private List<ContractVoBean> contractVoBean;
	//填写的合同值
	private ContractVoBean contractID;

	public TpCgorderbefore getTpCgorderbefore() {
		return tpCgorderbefore;
	}

	public void setTpCgorderbefore(TpCgorderbefore tpCgorderbefore) {
		this.tpCgorderbefore = tpCgorderbefore;
	}

	public List<TpCgorderst> getTpCgorderst() {
		return tpCgorderst;
	}

	public void setTpCgorderst(List<TpCgorderst> tpCgorderst) {
		this.tpCgorderst = tpCgorderst;
	}

	public List<ContractVoBean> getContractVoBean() {
		return contractVoBean;
	}

	public void setContractVoBean(List<ContractVoBean> contractVoBean) {
		this.contractVoBean = contractVoBean;
	}

	public ContractVoBean getContractID() {
		return contractID;
	}

	public void setContractID(ContractVoBean contractID) {
		this.contractID = contractID;
	}



}

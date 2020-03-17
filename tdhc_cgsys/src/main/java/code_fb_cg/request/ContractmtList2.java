package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgordermt2;

public class ContractmtList2 {

	private List<TpCgcontractmt> list;
	private List<TpCgcontractmtt> tpCgcontractmtt;
	private TpCgcontractstt contractstt;
	private List<TpCgcontractstt> tpCgcontractstt;
	private List<TpCgordermt2> cgQ001M1s14;
	private Date gettime;//到货时间/付款时间
	private String cSw06;//到货港口/合同类别/出错原因/提前延期原因/撤销回拟合同原因
	private String parame;//错误标识//提前延期
	private ContractOutBean conBean;
	private Date cSw24;//验收单收到时间
	private Date cSw25;//质保金收到时间
	private Date cSw26;//验收单收到时间
	private Date cSw27;//质保金收到时间
//method
	
	public String getParame() {
		return parame;
	}


	public Date getcSw24() {
		return cSw24;
	}


	public void setcSw24(Date cSw24) {
		this.cSw24 = cSw24;
	}


	public Date getcSw25() {
		return cSw25;
	}


	public void setcSw25(Date cSw25) {
		this.cSw25 = cSw25;
	}


	public Date getcSw26() {
		return cSw26;
	}


	public void setcSw26(Date cSw26) {
		this.cSw26 = cSw26;
	}


	public Date getcSw27() {
		return cSw27;
	}


	public void setcSw27(Date cSw27) {
		this.cSw27 = cSw27;
	}


	public void setParame(String parame) {
		this.parame = parame;
	}

	public List<TpCgcontractmtt> getTpCgcontractmtt() {
		return tpCgcontractmtt;
	}

	public void setTpCgcontractmtt(List<TpCgcontractmtt> tpCgcontractmtt) {
		this.tpCgcontractmtt = tpCgcontractmtt;
	}

	public Date getGettime() {
		return gettime;
	}

	public void setGettime(Date gettime) {
		this.gettime = gettime;
	}

	public ContractOutBean getConBean() {
		return conBean;
	}

	public void setConBean(ContractOutBean conBean) {
		this.conBean = conBean;
	}

	public List<TpCgcontractmt> getList() {
		return list;
	}

	public void setList(List<TpCgcontractmt> list) {
		this.list = list;
	}

	public String getcSw06() {
		return cSw06;
	}

	public void setcSw06(String cSw06) {
		this.cSw06 = cSw06;
	}

	public TpCgcontractstt getContractstt() {
		return contractstt;
	}

	public void setContractstt(TpCgcontractstt contractstt) {
		this.contractstt = contractstt;
	}

	public List<TpCgcontractstt> getTpCgcontractstt() {
		return tpCgcontractstt;
	}

	public void setTpCgcontractstt(List<TpCgcontractstt> tpCgcontractstt) {
		this.tpCgcontractstt = tpCgcontractstt;
	}


	public List<TpCgordermt2> getCgQ001M1s14() {
		return cgQ001M1s14;
	}


	public void setCgQ001M1s14(List<TpCgordermt2> cgQ001M1s14) {
		this.cgQ001M1s14 = cgQ001M1s14;
	}





	
}

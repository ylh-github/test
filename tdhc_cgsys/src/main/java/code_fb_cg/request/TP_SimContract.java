package code_fb_cg.request;

import java.util.List;

import code_fb.entity.CLAUSE_M1S1;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TbCludecompany;
import code_fb_cg.entity.TbSupplier;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpSettlement;

public class TP_SimContract {
	private TpCgcontractmtt tpCgcontractmt;//合同主表信息
	
	private List<TpCgorderRequest>  tpCgorderRequest;//合同物资信息
	
	private TbCgcontract tbCgcontract;//合同详情
	
	private TbSupplier tbSupplier;//供应商
	
	private TbCludecompany tbCludecompany;//签订公司---需方
	
//	private  Technology technology;//技术质量
//	private BaoZInfo  baoZInfo;//包装1
	
//	private  DelInformation delInforma;//交货期限
	private  DelInformation delInformation;//交货地点
	
	private PaywayRequest paywayRequest;//付款方式
	
//	private SignplaceRequest signplaceRequest;//验收地点
	private TpCgcontractmtt tpCgcontractmtt;//拟合同合同主表信息
	private TpCgcontractmtt contractmtt;//交货期限信息
	
	private CLAUSE_M1S1 clause_M1S1;
	//合同类型
	private String cContype;
	//签订公司
	private String cCludecom;
	//合同号
	private String  cConnum;
	private String cSupplier;
	//采购员
	private String cSw10;
	//转签合同号
	private String cZqconnum;
	private TpSettlement tpSettlement;
	private String cExporter;
	//method
	
	public TpCgcontractmtt getTpCgcontractmtt() {
		return tpCgcontractmtt;
	}

	public CLAUSE_M1S1 getClause_M1S1() {
		return clause_M1S1;
	}

	public void setClause_M1S1(CLAUSE_M1S1 clause_M1S1) {
		this.clause_M1S1 = clause_M1S1;
	}

	public void setTpCgcontractmtt(TpCgcontractmtt tpCgcontractmtt) {
		this.tpCgcontractmtt = tpCgcontractmtt;
	}
	public TbCludecompany getTbCludecompany() {
		return tbCludecompany;
	}

	public void setTbCludecompany(TbCludecompany tbCludecompany) {
		this.tbCludecompany = tbCludecompany;
	}

	public PaywayRequest getPaywayRequest() {
		return paywayRequest;
	}

	public void setPaywayRequest(PaywayRequest paywayRequest) {
		this.paywayRequest = paywayRequest;
	}

//	public SignplaceRequest getSignplaceRequest() {
//		return signplaceRequest;
//	}
//
//	public void setSignplaceRequest(SignplaceRequest signplaceRequest) {
//		this.signplaceRequest = signplaceRequest;
//	}

	public DelInformation getDelInformation() {
		return delInformation;
	}

	public void setDelInformation(DelInformation delInformation) {
		this.delInformation = delInformation;
	}

//	public BaoZInfo getBaoZInfo() {
//		return baoZInfo;
//	}
//
//	public void setBaoZInfo(BaoZInfo baoZInfo) {
//		this.baoZInfo = baoZInfo;
//	}

//	public Technology getTechnology() {
//		return technology;
//	}
//
//	public void setTechnology(Technology technology) {
//		this.technology = technology;
//	}

	public void setTbCgcontract(TbCgcontract tbCgcontract) {
		this.tbCgcontract = tbCgcontract;
	}
	public TpCgcontractmtt getTpCgcontractmt() {
		return tpCgcontractmt;
	}

	public void setTpCgcontractmt(TpCgcontractmtt tpCgcontractmt) {
		this.tpCgcontractmt = tpCgcontractmt;
	}

	public List<TpCgorderRequest> getTpCgorderRequest() {
		return tpCgorderRequest;
	}

	public void setTpCgorderRequest(List<TpCgorderRequest> tpCgorderRequest) {
		this.tpCgorderRequest = tpCgorderRequest;
	}

	public TbSupplier getTbSupplier() {
		return tbSupplier;
	}

	public void setTbSupplier(TbSupplier tbSupplier) {
		this.tbSupplier = tbSupplier;
	}

	public String getcContype() {
		return cContype;
	}

	public void setcContype(String cContype) {
		this.cContype = cContype;
	}

	public TbCgcontract getTbCgcontract() {
		return tbCgcontract;
	}

	public TpSettlement getTpSettlement() {
		return tpSettlement;
	}

	public void setTpSettlement(TpSettlement tpSettlement) {
		this.tpSettlement = tpSettlement;
	}
	public String getcCludecom() {
		return cCludecom;
	}
	public void setcCludecom(String cCludecom) {
		this.cCludecom = cCludecom;
	}

	public String getcConnum() {
		return cConnum;
	}

	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}

	public String getcSupplier() {
		return cSupplier;
	}

	public void setcSupplier(String cSupplier) {
		this.cSupplier = cSupplier;
	}

	public String getcSw10() {
		return cSw10;
	}

	public void setcSw10(String cSw10) {
		this.cSw10 = cSw10;
	}

	public TpCgcontractmtt getContractmtt() {
		return contractmtt;
	}

	public void setContractmtt(TpCgcontractmtt contractmtt) {
		this.contractmtt = contractmtt;
	}

	public String getcZqconnum() {
		return cZqconnum;
	}

	public void setcZqconnum(String cZqconnum) {
		this.cZqconnum = cZqconnum;
	}

	public String getcExporter() {
		return cExporter;
	}

	public void setcExporter(String cExporter) {
		this.cExporter = cExporter;
	}
	
}
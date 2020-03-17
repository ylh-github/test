package code_fb_cg.entity;

import java.math.BigDecimal;

public class ItemReport implements java.io.Serializable{

	/**
	 * @author lhb
	 * @date 2020年1月19日下午3:18:02
	 */
	private static final long serialVersionUID = 1L;
	private String cItemdes;//项目所属部
	private String cSubitemid;//所属项目
	private String cDepartment;//项目部门
	private String cCludecom;//签订公司
	private String cConnum;//合同号
	private String cSubitemdes;//公司描述
	private BigDecimal zQgoux;//总请购项
	private BigDecimal yCgoux;//已采购项
	private BigDecimal wCgoux;//未采购项
	private BigDecimal zConmoney;//采购总金额
	private BigDecimal htNum;//签订合同数
	private BigDecimal cGconmoney;//签订金额数
	private BigDecimal yfPay;//已付金额
	private BigDecimal wfPay;//未付金额
	
	public BigDecimal getzQgoux() {
		return zQgoux;
	}
	public void setzQgoux(BigDecimal zQgoux) {
		this.zQgoux = zQgoux;
	}
	public BigDecimal getyCgoux() {
		return yCgoux;
	}
	public void setyCgoux(BigDecimal yCgoux) {
		this.yCgoux = yCgoux;
	}
	public BigDecimal getwCgoux() {
		return wCgoux;
	}
	public void setwCgoux(BigDecimal wCgoux) {
		this.wCgoux = wCgoux;
	}
	public BigDecimal getzConmoney() {
		return zConmoney;
	}
	public void setzConmoney(BigDecimal zConmoney) {
		this.zConmoney = zConmoney;
	}
	public BigDecimal getHtNum() {
		return htNum;
	}
	public void setHtNum(BigDecimal htNum) {
		this.htNum = htNum;
	}
	public BigDecimal getcGconmoney() {
		return cGconmoney;
	}
	public void setcGconmoney(BigDecimal cGconmoney) {
		this.cGconmoney = cGconmoney;
	}
	public BigDecimal getYfPay() {
		return yfPay;
	}
	public void setYfPay(BigDecimal yfPay) {
		this.yfPay = yfPay;
	}
	public BigDecimal getWfPay() {
		return wfPay;
	}
	public void setWfPay(BigDecimal wfPay) {
		this.wfPay = wfPay;
	}
	public String getcItemdes() {
		return cItemdes;
	}
	public void setcItemdes(String cItemdes) {
		this.cItemdes = cItemdes;
	}
	public String getcSubitemid() {
		return cSubitemid;
	}
	public void setcSubitemid(String cSubitemid) {
		this.cSubitemid = cSubitemid;
	}
	public String getcDepartment() {
		return cDepartment;
	}
	public void setcDepartment(String cDepartment) {
		this.cDepartment = cDepartment;
	}
	public String getcCludecom() {
		return cCludecom;
	}
	public void setcCludecom(String cCludecom) {
		this.cCludecom = cCludecom;
	}
	public String getcSubitemdes() {
		return cSubitemdes;
	}
	public void setcSubitemdes(String cSubitemdes) {
		this.cSubitemdes = cSubitemdes;
	}
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	
	
}

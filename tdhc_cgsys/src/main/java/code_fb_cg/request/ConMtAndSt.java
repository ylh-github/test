package code_fb_cg.request;

import java.util.Date;
/**
 * 合同主子表字段
 * @author lhb
 * @时间：2018年11月5日下午7:00:54
 */
public class ConMtAndSt {

	/** 合同主键 **/
	private String cId;
	private String cSw11;//预计到货说明
	private String cSw12;//天数
	private String cSw13;//发货单状态
	
	public String getcSw13() {
		return cSw13;
	}
	public void setcSw13(String cSw13) {
		this.cSw13 = cSw13;
	}
	/** 合同号 **/
	private String cConnum;
	/** 签订公司 **/
	private String cCludecom;
	/** 签订地点 **/
	private String cCludeaddr;
	/** 供应商 **/
	private String cSupplier;
	/** 合同金额 **/
	private String cConmoney;
	/** 付款方式 **/
	private String cPayway;
	/** 验收方式 **/
	private String cCheckway;
	/** 运输方式 **/
	private String cTransway;
	/** 签字步骤 **/
	private String cSignstep;
	/** 传给国外时间 **/
	private Date cForinland;
	/** 国外回传时间 **/
	private Date cForoutland;
	/** 备注 **/
	private String cRemark;
	/** 合同状态 **/
	private String cState;
	/** 删除标识 **/
	private Date cDr;
	/** 时间戳 **/
	private Date cTimestamp;
	/** 创建人 **/
	private String cCreater;
	/** 创建时间 **/
	private Date cCreatetime;
	/** 修改人 **/
	private String cModifier;
	/** 修改时间 **/
	private Date cModifytime;
	/** 实付金额 **/
	private String cSw01;
	/** 未付金额 **/
	private String cSw02;
	/** 扩展字段3 **/
	private String cSw03;
	/** 扩展字段4 **/
	private Date cSw04;
	/** 扩展字段5 **/
	private String cSw05;
	/** 扩展字段6 **/
	private String cSw06;
	/** 扩展字段7 **/
	private Date cSw07;
	/** 扩展字段8 **/
	private String cSw08;
	/** 扩展字段9 **/
	private String cSw09;
	/** 扩展字段10 **/
	private String cSw10;
	/** 合同行号 **/
	private String cConline;
	/** 取号日期 **/
	private Date cGettime;
	/** 签订时间 **/
	private Date cCludetime;
	/** 请购主表主键 **/
	private String cOrmtid;
	/** 请购子表主键 **/
	private String cOrstid;
	/** 合同主表主键 **/
	private String cMtid;
	/** 物资名称 **/
	private String cGoodsname;
	/** 规格型号 **/
	private String cSpec;
	/** 单位 **/
	private String cUnit;
	/** 单价 **/
	private String cPrice;
	/** 订货数量 **/
	private String cGoodsnum;
	/** 订货情况 **/
	private String cGoodscase;
	/** 含税总价:单价*订货数量 **/
	private String cSumprice;
	/** 预计到货时间 **/
	private Date cBeforearrtime;
	/** 预计到货说明 **/
	private String cArrgoodsex;
	/** 到货时间 **/
	private String cArrgoodstime;
	/** 累计到货量 **/
	private String cGroudtotalnum;
	/** 剩余数量:订货数量-到货数量 **/
	private String cResiduenum;
	/** 是/否到齐 **/
	private String cArrallyorn;
	/** 是/否验收 **/
	private String cCheckyorn;
	/** 质保期限 **/
	private String cQuadealline;
	/** 请购单号 **/
	private String cOrid;
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
	}
	public String getcSw11() {
		return cSw11;
	}
	public void setcSw11(String cSw11) {
		this.cSw11 = cSw11;
	}
	public String getcSw12() {
		return cSw12;
	}
	public void setcSw12(String cSw12) {
		this.cSw12 = cSw12;
	}
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	public String getcCludecom() {
		return cCludecom;
	}
	public void setcCludecom(String cCludecom) {
		this.cCludecom = cCludecom;
	}
	public String getcCludeaddr() {
		return cCludeaddr;
	}
	public void setcCludeaddr(String cCludeaddr) {
		this.cCludeaddr = cCludeaddr;
	}
	public String getcSupplier() {
		return cSupplier;
	}
	public void setcSupplier(String cSupplier) {
		this.cSupplier = cSupplier;
	}
	public String getcConmoney() {
		return cConmoney;
	}
	public void setcConmoney(String cConmoney) {
		this.cConmoney = cConmoney;
	}
	public String getcPayway() {
		return cPayway;
	}
	public void setcPayway(String cPayway) {
		this.cPayway = cPayway;
	}
	public String getcCheckway() {
		return cCheckway;
	}
	public void setcCheckway(String cCheckway) {
		this.cCheckway = cCheckway;
	}
	public String getcTransway() {
		return cTransway;
	}
	public void setcTransway(String cTransway) {
		this.cTransway = cTransway;
	}
	public String getcSignstep() {
		return cSignstep;
	}
	public void setcSignstep(String cSignstep) {
		this.cSignstep = cSignstep;
	}
	public Date getcForinland() {
		return cForinland;
	}
	public void setcForinland(Date cForinland) {
		this.cForinland = cForinland;
	}
	public Date getcForoutland() {
		return cForoutland;
	}
	public void setcForoutland(Date cForoutland) {
		this.cForoutland = cForoutland;
	}
	public String getcRemark() {
		return cRemark;
	}
	public void setcRemark(String cRemark) {
		this.cRemark = cRemark;
	}
	public String getcState() {
		return cState;
	}
	public void setcState(String cState) {
		this.cState = cState;
	}
	public Date getcDr() {
		return cDr;
	}
	public void setcDr(Date cDr) {
		this.cDr = cDr;
	}
	public Date getcTimestamp() {
		return cTimestamp;
	}
	public void setcTimestamp(Date cTimestamp) {
		this.cTimestamp = cTimestamp;
	}
	public String getcCreater() {
		return cCreater;
	}
	public void setcCreater(String cCreater) {
		this.cCreater = cCreater;
	}
	public Date getcCreatetime() {
		return cCreatetime;
	}
	public void setcCreatetime(Date cCreatetime) {
		this.cCreatetime = cCreatetime;
	}
	public String getcModifier() {
		return cModifier;
	}
	public void setcModifier(String cModifier) {
		this.cModifier = cModifier;
	}
	public Date getcModifytime() {
		return cModifytime;
	}
	public void setcModifytime(Date cModifytime) {
		this.cModifytime = cModifytime;
	}
	public String getcSw01() {
		return cSw01;
	}
	public void setcSw01(String cSw01) {
		this.cSw01 = cSw01;
	}
	public String getcSw02() {
		return cSw02;
	}
	public void setcSw02(String cSw02) {
		this.cSw02 = cSw02;
	}
	public String getcSw03() {
		return cSw03;
	}
	public void setcSw03(String cSw03) {
		this.cSw03 = cSw03;
	}
	public Date getcSw04() {
		return cSw04;
	}
	public void setcSw04(Date cSw04) {
		this.cSw04 = cSw04;
	}
	public String getcSw05() {
		return cSw05;
	}
	public void setcSw05(String cSw05) {
		this.cSw05 = cSw05;
	}
	public String getcSw06() {
		return cSw06;
	}
	public void setcSw06(String cSw06) {
		this.cSw06 = cSw06;
	}
	public Date getcSw07() {
		return cSw07;
	}
	public void setcSw07(Date cSw07) {
		this.cSw07 = cSw07;
	}
	public String getcSw08() {
		return cSw08;
	}
	public void setcSw08(String cSw08) {
		this.cSw08 = cSw08;
	}
	public String getcSw09() {
		return cSw09;
	}
	public void setcSw09(String cSw09) {
		this.cSw09 = cSw09;
	}
	public String getcSw10() {
		return cSw10;
	}
	public void setcSw10(String cSw10) {
		this.cSw10 = cSw10;
	}
	public String getcConline() {
		return cConline;
	}
	public void setcConline(String cConline) {
		this.cConline = cConline;
	}
	public Date getcGettime() {
		return cGettime;
	}
	public void setcGettime(Date cGettime) {
		this.cGettime = cGettime;
	}
	public Date getcCludetime() {
		return cCludetime;
	}
	public void setcCludetime(Date cCludetime) {
		this.cCludetime = cCludetime;
	}
	public String getcOrmtid() {
		return cOrmtid;
	}
	public void setcOrmtid(String cOrmtid) {
		this.cOrmtid = cOrmtid;
	}
	public String getcOrstid() {
		return cOrstid;
	}
	public void setcOrstid(String cOrstid) {
		this.cOrstid = cOrstid;
	}
	public String getcMtid() {
		return cMtid;
	}
	public void setcMtid(String cMtid) {
		this.cMtid = cMtid;
	}
	public String getcGoodsname() {
		return cGoodsname;
	}
	public void setcGoodsname(String cGoodsname) {
		this.cGoodsname = cGoodsname;
	}
	public String getcSpec() {
		return cSpec;
	}
	public void setcSpec(String cSpec) {
		this.cSpec = cSpec;
	}
	public String getcUnit() {
		return cUnit;
	}
	public void setcUnit(String cUnit) {
		this.cUnit = cUnit;
	}
	public String getcPrice() {
		return cPrice;
	}
	public void setcPrice(String cPrice) {
		this.cPrice = cPrice;
	}
	public String getcGoodsnum() {
		return cGoodsnum;
	}
	public void setcGoodsnum(String cGoodsnum) {
		this.cGoodsnum = cGoodsnum;
	}
	public String getcGoodscase() {
		return cGoodscase;
	}
	public void setcGoodscase(String cGoodscase) {
		this.cGoodscase = cGoodscase;
	}
	public String getcSumprice() {
		return cSumprice;
	}
	public void setcSumprice(String cSumprice) {
		this.cSumprice = cSumprice;
	}
	public Date getcBeforearrtime() {
		return cBeforearrtime;
	}
	public void setcBeforearrtime(Date cBeforearrtime) {
		this.cBeforearrtime = cBeforearrtime;
	}
	public String getcArrgoodsex() {
		return cArrgoodsex;
	}
	public void setcArrgoodsex(String cArrgoodsex) {
		this.cArrgoodsex = cArrgoodsex;
	}
	public String getcArrgoodstime() {
		return cArrgoodstime;
	}
	public void setcArrgoodstime(String cArrgoodstime) {
		this.cArrgoodstime = cArrgoodstime;
	}
	public String getcGroudtotalnum() {
		return cGroudtotalnum;
	}
	public void setcGroudtotalnum(String cGroudtotalnum) {
		this.cGroudtotalnum = cGroudtotalnum;
	}
	public String getcResiduenum() {
		return cResiduenum;
	}
	public void setcResiduenum(String cResiduenum) {
		this.cResiduenum = cResiduenum;
	}
	public String getcArrallyorn() {
		return cArrallyorn;
	}
	public void setcArrallyorn(String cArrallyorn) {
		this.cArrallyorn = cArrallyorn;
	}
	public String getcCheckyorn() {
		return cCheckyorn;
	}
	public void setcCheckyorn(String cCheckyorn) {
		this.cCheckyorn = cCheckyorn;
	}
	public String getcQuadealline() {
		return cQuadealline;
	}
	public void setcQuadealline(String cQuadealline) {
		this.cQuadealline = cQuadealline;
	}
	public String getcOrid() {
		return cOrid;
	}
	public void setcOrid(String cOrid) {
		this.cOrid = cOrid;
	}
	
	private String cSignplace;

	public String getcSignplace() {
		return cSignplace;
	}
	public void setcSignplace(String cSignplace) {
		this.cSignplace = cSignplace;
	}
	private String cCuspec;

	public String getcCuspec() {
		return cCuspec;
	}
	public void setcCuspec(String cCuspec) {
		this.cCuspec = cCuspec;
	}
private String cStatexxk;

public String getcStatexxk() {
	return cStatexxk;
}
public void setcStatexxk(String cStatexxk) {
	this.cStatexxk = cStatexxk;
}
private String cStatexxl;

public String getcStatexxl() {
	return cStatexxl;
}
public void setcStatexxl(String cStatexxl) {
	this.cStatexxl = cStatexxl;
}

}
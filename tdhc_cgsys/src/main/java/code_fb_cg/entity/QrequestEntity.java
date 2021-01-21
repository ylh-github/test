package code_fb_cg.entity;

import java.util.Date;

public class QrequestEntity {
	private String yGoodsname;
	private String ycSpec;
	private String cCuspec;//规格型号
	private String cUnitspec;//报关单位
	private String cCknum;//出库
	private String cShipno;//船号
	private String cSupplier;//供应商
	/** 签订时间 **/
	private Date cCludetime;
	//field
	/** 合同子表主键 **/
	private String cId;
	/** 合同主表主键 **/
	private String cMtid;
	/** 物资名称 **/
	private String cGoodsname;
	/** 报关规格型号 **/
	private String cSpec;
	/** 报关单位 **/
	private String cUnit;
	/** 单价 **/
	private String cPrice;
	/** 合同行号 **/
	private String cConline;
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
	/** 备注 **/
	private String cRemark;
	/** 完成状态 **/
	private String cState;
	/** 是/否验收 **/
	private String cCheckyorn;
	/** 质保期限 **/
	private String cQuadealline;
	/** 请购单号 **/
	private String cOrid;
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
	/** 扩展字段1 **/
	private String cSw01;
	/** 扩展字段2 **/
	private String cSw02;
	/** 扩展字段3 **/
	private String cSw03;
	/** 扩展字段4 **/
	private String cSw04;
	/** 扩展字段5 **/
	private String cSw05;
	/** 扩展字段6 **/
	private String cSw06;
	/** 扩展字段7 **/
	private String cSw07;
	/** 扩展字段8 **/
	private String cSw08;
	/** 扩展字段9 **/
	private String cSw09;
	/** 扩展字段10 **/
	private String cSw10;
	/** 扩展字段11 **/
	private String cSw11;
	/** 扩展字段12 **/
	private String cSw12;
	/** 扩展字段13 **/
	private String cSw13;
	/** 扩展字段14 **/
	private String cSw14;
	/** 扩展字段15 **/
	private String cSw15;
	/** 扩展字段16 **/
	private Date cSw16;
	/** 扩展字段17 **/
	private String cSw17;
	/** 扩展字段18 **/
	private Date cSw18;
	/** 提前/延迟 **/
	private String cSw19;
	/** 提前/延迟原因 **/
	private String cSw20;
	/** 提前/延迟时间 **/
	private Date cSw21;
	/** 采购员批注时间 **/
	private Date cSw22;
	/** 领导批注时间 **/
	private Date cSw23;
	/** 国外批注时间 **/
	private Date cSw24;
	/** 合同号 **/
	private String cConnum;
	public String getyGoodsname() {
		return yGoodsname;
	}
	public void setyGoodsname(String yGoodsname) {
		this.yGoodsname = yGoodsname;
	}
	public String getYcSpec() {
		return ycSpec;
	}
	public void setYcSpec(String ycSpec) {
		this.ycSpec = ycSpec;
	}
	public String getcCuspec() {
		return cCuspec;
	}
	public void setcCuspec(String cCuspec) {
		this.cCuspec = cCuspec;
	}
	public String getcUnitspec() {
		return cUnitspec;
	}
	public void setcUnitspec(String cUnitspec) {
		this.cUnitspec = cUnitspec;
	}
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
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
	public String getcConline() {
		return cConline;
	}
	public void setcConline(String cConline) {
		this.cConline = cConline;
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
	public Date getcTimestamp() {
		return cTimestamp;
	}
	
	public String getcCknum() {
		return cCknum;
	}
	public void setcCknum(String cCknum) {
		this.cCknum = cCknum;
	}
	public String getcShipno() {
		return cShipno;
	}
	public void setcShipno(String cShipno) {
		this.cShipno = cShipno;
	}
	public String getcSupplier() {
		return cSupplier;
	}
	public void setcSupplier(String cSupplier) {
		this.cSupplier = cSupplier;
	}
	public Date getcCludetime() {
		return cCludetime;
	}
	public void setcCludetime(Date cCludetime) {
		this.cCludetime = cCludetime;
	}
	public Date getcDr() {
		return cDr;
	}
	public void setcDr(Date cDr) {
		this.cDr = cDr;
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
	public String getcSw04() {
		return cSw04;
	}
	public void setcSw04(String cSw04) {
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
	public String getcSw07() {
		return cSw07;
	}
	public void setcSw07(String cSw07) {
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
	public String getcSw13() {
		return cSw13;
	}
	public void setcSw13(String cSw13) {
		this.cSw13 = cSw13;
	}
	public String getcSw14() {
		return cSw14;
	}
	public void setcSw14(String cSw14) {
		this.cSw14 = cSw14;
	}
	public String getcSw15() {
		return cSw15;
	}
	public void setcSw15(String cSw15) {
		this.cSw15 = cSw15;
	}
	public Date getcSw16() {
		return cSw16;
	}
	public void setcSw16(Date cSw16) {
		this.cSw16 = cSw16;
	}
	public String getcSw17() {
		return cSw17;
	}
	public void setcSw17(String cSw17) {
		this.cSw17 = cSw17;
	}
	public Date getcSw18() {
		return cSw18;
	}
	public void setcSw18(Date cSw18) {
		this.cSw18 = cSw18;
	}
	public String getcSw19() {
		return cSw19;
	}
	public void setcSw19(String cSw19) {
		this.cSw19 = cSw19;
	}
	public String getcSw20() {
		return cSw20;
	}
	public void setcSw20(String cSw20) {
		this.cSw20 = cSw20;
	}
	public Date getcSw21() {
		return cSw21;
	}
	public void setcSw21(Date cSw21) {
		this.cSw21 = cSw21;
	}
	public Date getcSw22() {
		return cSw22;
	}
	public void setcSw22(Date cSw22) {
		this.cSw22 = cSw22;
	}
	public Date getcSw23() {
		return cSw23;
	}
	public void setcSw23(Date cSw23) {
		this.cSw23 = cSw23;
	}
	public Date getcSw24() {
		return cSw24;
	}
	public void setcSw24(Date cSw24) {
		this.cSw24 = cSw24;
	}
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	
}
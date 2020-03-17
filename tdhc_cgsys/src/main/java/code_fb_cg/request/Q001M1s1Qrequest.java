package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgorderst;

public class Q001M1s1Qrequest {

	private List<TpCgorderst> orderstList;
	
	private String XJgoodsname;
	private String XJspec;
	private String Xjunit;
	private String XJnum;
	/* 请购物资主键 */
	private String cId;
	/* 序号 */
	private String cNo;
	/* 是否急需 */
	private String cMustneed;
	/* 物资类型 */
	private String cTypename;
	/* 物资名称 */
	private String cGoodsname;
	/* 规格型号 */
	private String cSpec;
	/* 单位 */
	private String cUnit;
	/* 申报量 */
	private String cNum;
	/* 要求到货时间 */
	private String cArrtime;
	/* 创建人 */
	private String cCreater;
	/* 创建时间 */
	private Date cCreatetime;
	/* 修改人 */
	private String cModifier;
	/* 修改时间 */
	private Date cModifytime;
	/* 备注 */
	private String cRemark;
	/* 采购状态 */
	private String cState;
	/* 删除标识 */
	private Date cDr;
	/* 时间戳 */
	private Date cTimestamp;
	/* 提交状态 */
	private String cSw01;
	/* 扩展字段2 */
	private String cSw02;
	/* 扩展字段3 */
	private String cSw03;
	/* 扩展字段4 */
	private String cSw04;
	/* 扩展字段5 */
	private String cSw05;
	/* 扩展字段6 */
	private String cSw06;
	/* 扩展字段7 */
	private String cSw07;
	/* 扩展字段8 */
	private String cSw08;
	/* 扩展字段9 */
	private String cSw09;
	/* 扩展字段10 */
	private String cSw10;
	//请购项目
	private String cSw14;
	/* 采购期限:收单日期+采购时间 */
	private Date cOrdealline;
	/* 采购部门 */
	private String cDeptor;
	/* 采购员 */
	private String cManor;
	/* 采购员联系方式 */
	private String cPhone;
	/* 分配状态 */
	private String cAllotstate;
	/* 分配人 */
	private String cAllotman;
	/* 分配时间 */
	private Date cAllottime;
	private String cComname;
	private String cOrdernum;
	/* 采购进度：0、任务已接收1寻找供应商2询价/比价3订货4发货5到货6入库7完成8取消转国内*/
	private String cPlanor;
	/* 报警时间 */
	private Date cPolitime;
	/* 报警时间报警标准时间/天*/
	private String cPolinormtime;
	/* 请购主表id */
	private String cMtid;
	/* 采购进度时间 */
	private Date cPlantime;
	private String cOrman;
	private String cManapply;
	/** 合同子表主键 **/
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
	/** 合同号 **/
	private String cSw11;//预计到货说明
	private String cSw12;//天数
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
	private String qXcause;
	//出库量
	private String  cCknum;
	//船号
	private String cShipno;
	//紧急标记
	private String cSw13;
	//拟合同创建时间
	private Date cCreatetime2;
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
	}
	public String getcNo() {
		return cNo;
	}
	public void setcNo(String cNo) {
		this.cNo = cNo;
	}
	public String getcMustneed() {
		return cMustneed;
	}
	public void setcMustneed(String cMustneed) {
		this.cMustneed = cMustneed;
	}
	public String getcTypename() {
		return cTypename;
	}
	public void setcTypename(String cTypename) {
		this.cTypename = cTypename;
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
	public String getcNum() {
		return cNum;
	}
	public void setcNum(String cNum) {
		this.cNum = cNum;
	}
	public String getcArrtime() {
		return cArrtime;
	}
	public void setcArrtime(String cArrtime) {
		this.cArrtime = cArrtime;
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
	public Date getcOrdealline() {
		return cOrdealline;
	}
	public void setcOrdealline(Date cOrdealline) {
		this.cOrdealline = cOrdealline;
	}
	public String getcDeptor() {
		return cDeptor;
	}
	public void setcDeptor(String cDeptor) {
		this.cDeptor = cDeptor;
	}
	public String getcManor() {
		return cManor;
	}
	public void setcManor(String cManor) {
		this.cManor = cManor;
	}
	public String getcPhone() {
		return cPhone;
	}
	public void setcPhone(String cPhone) {
		this.cPhone = cPhone;
	}
	public String getcAllotstate() {
		return cAllotstate;
	}
	public void setcAllotstate(String cAllotstate) {
		this.cAllotstate = cAllotstate;
	}
	public String getcAllotman() {
		return cAllotman;
	}
	public void setcAllotman(String cAllotman) {
		this.cAllotman = cAllotman;
	}
	public Date getcAllottime() {
		return cAllottime;
	}
	public void setcAllottime(Date cAllottime) {
		this.cAllottime = cAllottime;
	}
	public String getcComname() {
		return cComname;
	}
	public void setcComname(String cComname) {
		this.cComname = cComname;
	}
	public String getcOrdernum() {
		return cOrdernum;
	}
	public void setcOrdernum(String cOrdernum) {
		this.cOrdernum = cOrdernum;
	}
	public String getcPlanor() {
		return cPlanor;
	}
	public void setcPlanor(String cPlanor) {
		this.cPlanor = cPlanor;
	}
	public Date getcPolitime() {
		return cPolitime;
	}
	public void setcPolitime(Date cPolitime) {
		this.cPolitime = cPolitime;
	}
	public String getcPolinormtime() {
		return cPolinormtime;
	}
	public void setcPolinormtime(String cPolinormtime) {
		this.cPolinormtime = cPolinormtime;
	}
	public String getcMtid() {
		return cMtid;
	}
	public void setcMtid(String cMtid) {
		this.cMtid = cMtid;
	}
	public Date getcPlantime() {
		return cPlantime;
	}
	public void setcPlantime(Date cPlantime) {
		this.cPlantime = cPlantime;
	}
	public String getcOrman() {
		return cOrman;
	}
	public void setcOrman(String cOrman) {
		this.cOrman = cOrman;
	}
	public String getcManapply() {
		return cManapply;
	}
	public void setcManapply(String cManapply) {
		this.cManapply = cManapply;
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
	public List<TpCgorderst> getOrderstList() {
		return orderstList;
	}
	public void setOrderstList(List<TpCgorderst> orderstList) {
		this.orderstList = orderstList;
	}
	public String getXJgoodsname() {
		return XJgoodsname;
	}
	public void setXJgoodsname(String xJgoodsname) {
		XJgoodsname = xJgoodsname;
	}
	public String getXJspec() {
		return XJspec;
	}
	public void setXJspec(String xJspec) {
		XJspec = xJspec;
	}
	public String getXjunit() {
		return Xjunit;
	}
	public void setXjunit(String xjunit) {
		Xjunit = xjunit;
	}
	public String getXJnum() {
		return XJnum;
	}
	public void setXJnum(String xJnum) {
		XJnum = xJnum;
	}
	public String getqXcause() {
		return qXcause;
	}
	public void setqXcause(String qXcause) {
		this.qXcause = qXcause;
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
	public String getcSw14() {
		return cSw14;
	}
	public void setcSw14(String cSw14) {
		this.cSw14 = cSw14;
	}
	public String getcSw13() {
		return cSw13;
	}
	public void setcSw13(String cSw13) {
		this.cSw13 = cSw13;
	}
	public Date getcCreatetime2() {
		return cCreatetime2;
	}
	public void setcCreatetime2(Date cCreatetime2) {
		this.cCreatetime2 = cCreatetime2;
	}
	
}

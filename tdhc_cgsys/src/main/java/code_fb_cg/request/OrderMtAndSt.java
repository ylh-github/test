package code_fb_cg.request;

import java.util.Date;
/**
 * 请购单主子表字段
 * @author lhb
 * @时间：2018年11月5日下午7:02:58
 */
public class OrderMtAndSt {

	/** 请购单主表主键 **/
	private String cId;
	/** 公司名称 **/
	private String cComname;
	/** 单据编号 **/
	private String cOrdernum;
	/** 申请部门 **/
	private String cDeptapply;
	/** 申请人 **/
	private String cManapply;
	/** 申请日期 **/
	private String cTimeapply;
	/** 收单日期 **/
	private String cTimetake;
	/** 完成状态 **/
	private String cState;
	/** 删除标识 **/
	private String cDr;
	/** 时间戳 **/
	private Date cTimestamp;
	/** 备注 **/
	private String cRemark;
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
	/** 提交状态 **/
	private String cMittype;
	/** 提交人 **/
	private String cMitman;
	/** 提交时间 **/
	private Date cMittime;
	/** 审核状态 **/
	private String cAudittype;
	/** 审核人 **/
	private String cAuditman;
	/** 审核时间 **/
	private Date cAudittime;
	/** 创建人 **/
	private String cCreater;
	/** 创建时间 **/
	private Date cCreatetime;
	/** 修改人 **/
	private String cModifier;
	/** 修改时间 **/
	private Date cModifytime;
	/** 序号 **/
	private String cNo;
	/** 是否急需 **/
	private String cMustneed;
	/** 物资类型 **/
	private String cTypename;
	/** 物资名称 **/
	private String cGoodsname;
	/** 规格型号 **/
	private String cSpec;
	/** 单位 **/
	private String cUnit;
	/** 申报量 **/
	private String cNum;
	/** 要求到货时间 **/
	private String cArrtime;
	/** 采购期限:收单日期+采购时间 **/
	private Date cOrdealline;
	/** 采购部门 **/
	private String cDeptor;
	/** 采购员 **/
	private String cManor;
	/** 采购员联系方式 **/
	private String cPhone;
	/** 分配状态 **/
	private String cAllotstate;
	/** 分配人 **/
	private String cAllotman;
	/** 分配时间 **/
	private Date cAllottime;
	/** 采购进度：0、任务已接收1寻找供应商2询价/比价3订货4发货5到货6入库7完成8取消转国内**/
	private String cPlanor;
	/** 报警时间 **/
	private Date cPolitime;
	/** 报警时间报警标准时间/天**/
	private String cPolinormtime;
	/** 请购主表id **/
	private String cMtid;
	/** 采购进度时间 **/
	private Date cPlantime;
	private String cOrman;
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
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
	public String getcDeptapply() {
		return cDeptapply;
	}
	public void setcDeptapply(String cDeptapply) {
		this.cDeptapply = cDeptapply;
	}
	public String getcManapply() {
		return cManapply;
	}
	public void setcManapply(String cManapply) {
		this.cManapply = cManapply;
	}
	public String getcTimeapply() {
		return cTimeapply;
	}
	public void setcTimeapply(String cTimeapply) {
		this.cTimeapply = cTimeapply;
	}
	public String getcTimetake() {
		return cTimetake;
	}
	public void setcTimetake(String cTimetake) {
		this.cTimetake = cTimetake;
	}
	public String getcState() {
		return cState;
	}
	public void setcState(String cState) {
		this.cState = cState;
	}
	public String getcDr() {
		return cDr;
	}
	public void setcDr(String cDr) {
		this.cDr = cDr;
	}
	public Date getcTimestamp() {
		return cTimestamp;
	}
	public void setcTimestamp(Date cTimestamp) {
		this.cTimestamp = cTimestamp;
	}
	public String getcRemark() {
		return cRemark;
	}
	public void setcRemark(String cRemark) {
		this.cRemark = cRemark;
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
	public String getcMittype() {
		return cMittype;
	}
	public void setcMittype(String cMittype) {
		this.cMittype = cMittype;
	}
	public String getcMitman() {
		return cMitman;
	}
	public void setcMitman(String cMitman) {
		this.cMitman = cMitman;
	}
	public Date getcMittime() {
		return cMittime;
	}
	public void setcMittime(Date cMittime) {
		this.cMittime = cMittime;
	}
	public String getcAudittype() {
		return cAudittype;
	}
	public void setcAudittype(String cAudittype) {
		this.cAudittype = cAudittype;
	}
	public String getcAuditman() {
		return cAuditman;
	}
	public void setcAuditman(String cAuditman) {
		this.cAuditman = cAuditman;
	}
	public Date getcAudittime() {
		return cAudittime;
	}
	public void setcAudittime(Date cAudittime) {
		this.cAudittime = cAudittime;
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
	
}

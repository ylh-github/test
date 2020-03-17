package code_fb_cg.entity;

import java.io.Serializable;
import java.util.Date;
/**
 * 有多个字符数组
 * @author lhb
 * @时间：2019年12月3日下午2:23:06
 */
public class TpCgordermt3 implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Date startTime;
	private Date endTime;
	private String cManor[];
	private String cGoodsname;
	private String cSpec;//规格型号
	private String spec;//报关规格型号
	private String cMustneed[];//采购类型
	//field
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
	private String cState[];
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
	
	private String name;
	//合同号
	private String cConnum;
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String[] getcManor() {
		return cManor;
	}
	public void setcManor(String[] cManor) {
		this.cManor = cManor;
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
	public String getSpec() {
		return spec;
	}
	public void setSpec(String spec) {
		this.spec = spec;
	}
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getcConnum() {
		return cConnum;
	}
	public void setcConnum(String cConnum) {
		this.cConnum = cConnum;
	}
	public String[] getcMustneed() {
		return cMustneed;
	}
	public void setcMustneed(String[] cMustneed) {
		this.cMustneed = cMustneed;
	}
	public String[] getcState() {
		return cState;
	}
	public void setcState(String[] cState) {
		this.cState = cState;
	}
	
	
}

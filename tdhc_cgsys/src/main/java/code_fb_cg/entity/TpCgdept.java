package code_fb_cg.entity;import java.util.Date;import com.fasterxml.jackson.annotation.JsonFormat;/******************************************************************************* * javaBeans * TP_CGDEPT --> TpCgdept  * <table explanation> * @author 2018-08-24 11:08:23 *  */	public class TpCgdept implements java.io.Serializable {	/**	 * @author lhb	 * @date 2018年8月24日上午11:12:39	 */	private static final long serialVersionUID = 1L;	//field	/** 部门档案号 **/	private String cId;	/** 公司名称 **/	private String cComname;	/** 公司地址 **/	private String cComaddress;	/** 公司编码 **/	private String cComcode;	/** 删除标识 **/	private String cDr;	/** 备注 **/	private String cRemark;		/** 时间戳 **/	private Date cTimestamp;	/** 启用状态 **/	private String cState;	/** 扩展字段1 **/	private String cSw01;	/** 扩展字段2 **/	private String cSw02;	/** 扩展字段3 **/	private String cSw03;	/** 扩展字段4 **/	private String cSw04;	/** 扩展字段5 **/	private String cSw05;	/** 扩展字段6 **/	private String cSw06;	/** 扩展字段7 **/	private String cSw07;	/** 扩展字段8 **/	private String cSw08;	/** 扩展字段9 **/	private String cSw09;	/** 扩展字段10 **/	private String cSw10;	/** 部门名称 **/	private String cDeptname;	/** 部门编码 **/	private String cDeptcode;	/** 创建人 **/	private String cCreater;		/** 创建时间 **/	private Date cCreatetime;	/** 修改人 **/	private String cModifier;		/** 修改时间 **/	private Date cModifiytime;	//method	public String getcId() {		return cId;	}	public void setcId(String cId) {		this.cId = cId;	}	public String getcComname() {		return cComname;	}	public void setcComname(String cComname) {		this.cComname = cComname;	}	public String getcComaddress() {		return cComaddress;	}	public void setcComaddress(String cComaddress) {		this.cComaddress = cComaddress;	}	public String getcComcode() {		return cComcode;	}	public void setcComcode(String cComcode) {		this.cComcode = cComcode;	}	public String getcDr() {		return cDr;	}	public void setcDr(String cDr) {		this.cDr = cDr;	}	public String getcRemark() {		return cRemark;	}	public void setcRemark(String cRemark) {		this.cRemark = cRemark;	}	public Date getcTimestamp() {		return cTimestamp;	}	public void setcTimestamp(Date cTimestamp) {		this.cTimestamp = cTimestamp;	}	public String getcState() {		return cState;	}	public void setcState(String cState) {		this.cState = cState;	}	public String getcSw01() {		return cSw01;	}	public void setcSw01(String cSw01) {		this.cSw01 = cSw01;	}	public String getcSw02() {		return cSw02;	}	public void setcSw02(String cSw02) {		this.cSw02 = cSw02;	}	public String getcSw03() {		return cSw03;	}	public void setcSw03(String cSw03) {		this.cSw03 = cSw03;	}	public String getcSw04() {		return cSw04;	}	public void setcSw04(String cSw04) {		this.cSw04 = cSw04;	}	public String getcSw05() {		return cSw05;	}	public void setcSw05(String cSw05) {		this.cSw05 = cSw05;	}	public String getcSw06() {		return cSw06;	}	public void setcSw06(String cSw06) {		this.cSw06 = cSw06;	}	public String getcSw07() {		return cSw07;	}	public void setcSw07(String cSw07) {		this.cSw07 = cSw07;	}	public String getcSw08() {		return cSw08;	}	public void setcSw08(String cSw08) {		this.cSw08 = cSw08;	}	public String getcSw09() {		return cSw09;	}	public void setcSw09(String cSw09) {		this.cSw09 = cSw09;	}	public String getcSw10() {		return cSw10;	}	public void setcSw10(String cSw10) {		this.cSw10 = cSw10;	}	public String getcDeptname() {		return cDeptname;	}	public void setcDeptname(String cDeptname) {		this.cDeptname = cDeptname;	}	public String getcDeptcode() {		return cDeptcode;	}	public void setcDeptcode(String cDeptcode) {		this.cDeptcode = cDeptcode;	}	public String getcCreater() {		return cCreater;	}	public void setcCreater(String cCreater) {		this.cCreater = cCreater;	}	public Date getcCreatetime() {		return cCreatetime;	}	public void setcCreatetime(Date cCreatetime) {		this.cCreatetime = cCreatetime;	}	public String getcModifier() {		return cModifier;	}	public void setcModifier(String cModifier) {		this.cModifier = cModifier;	}	public Date getcModifiytime() {		return cModifiytime;	}	public void setcModifiytime(Date cModifiytime) {		this.cModifiytime = cModifiytime;	}	}
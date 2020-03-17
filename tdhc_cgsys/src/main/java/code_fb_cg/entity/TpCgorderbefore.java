package code_fb_cg.entity;import java.util.Date;import com.fasterxml.jackson.annotation.JsonFormat;/******************************************************************************* * javaBeans * TP_CGORDERBEFORE --> TpCgorderbefore  * <table explanation> * @author 2018-08-24 11:08:36 *  */	public class TpCgorderbefore implements java.io.Serializable {	/**	 * @author lhb	 * @date 2018年8月24日上午11:16:52	 */	private static final long serialVersionUID = 1L;	//field	/** 预登记明细主键 **/	private String cId;	/** 请购主表主键 **/	private String cOrmtid;	/** 请购子表主键 **/	private String cOrstid;	/** 物资名称 **/	private String cGoodsname;	/** 规格型号 **/	private String cSpec;	/** 单位 **/	private String cUnit;	/** 供应商 **/	private String cSupplier;	/** 签订公司 **/	private String cCludecom;	/** 单价 **/	private String cPirce;	/** 订购数量 **/	private String cSum;	/** 采购人 **/	private String cOrman;	/** 采购部门 **/	private String cOrdept;	/** 采购人联系方式 **/	private String cPhone;	/** 备注 **/	private String cRemark;	/** 状态 **/	private String cState;	/** 删除标识 **/	private String cDr;	/** 时间戳 **/	private Date cTimestamp;	/** 创建人 **/	private String cCreater;		/** 创建时间 **/	private Date cCreatetime;	/** 修改人 **/	private String cModifier;		/** 修改时间 **/	private Date cModifytime;	/** 是否急需 **/	private String cSw01;	/** 扩展字段2 **/	private String cSw02;	/** 扩展字段3 **/	private String cSw03;	/** 扩展字段4 **/	private String cSw04;	/** 扩展字段5 **/	private String cSw05;	/** 扩展字段6 **/	private String cSw06;	/** 扩展字段7 **/	private String cSw07;	/** 扩展字段8 **/	private String cSw08;	/** 扩展字段9 **/	private String cSw09;	/** 扩展字段10 **/	private String cSw10;	//method	public String getcId() {		return cId;	}	public void setcId(String cId) {		this.cId = cId;	}	public String getcOrmtid() {		return cOrmtid;	}	public void setcOrmtid(String cOrmtid) {		this.cOrmtid = cOrmtid;	}	public String getcOrstid() {		return cOrstid;	}	public void setcOrstid(String cOrstid) {		this.cOrstid = cOrstid;	}	public String getcGoodsname() {		return cGoodsname;	}	public void setcGoodsname(String cGoodsname) {		this.cGoodsname = cGoodsname;	}	public String getcSpec() {		return cSpec;	}	public void setcSpec(String cSpec) {		this.cSpec = cSpec;	}	public String getcUnit() {		return cUnit;	}	public void setcUnit(String cUnit) {		this.cUnit = cUnit;	}	public String getcSupplier() {		return cSupplier;	}	public void setcSupplier(String cSupplier) {		this.cSupplier = cSupplier;	}	public String getcCludecom() {		return cCludecom;	}	public void setcCludecom(String cCludecom) {		this.cCludecom = cCludecom;	}	public String getcPirce() {		return cPirce;	}	public void setcPirce(String cPirce) {		this.cPirce = cPirce;	}	public String getcSum() {		return cSum;	}	public void setcSum(String cSum) {		this.cSum = cSum;	}	public String getcOrman() {		return cOrman;	}	public void setcOrman(String cOrman) {		this.cOrman = cOrman;	}	public String getcOrdept() {		return cOrdept;	}	public void setcOrdept(String cOrdept) {		this.cOrdept = cOrdept;	}	public String getcPhone() {		return cPhone;	}	public void setcPhone(String cPhone) {		this.cPhone = cPhone;	}	public String getcRemark() {		return cRemark;	}	public void setcRemark(String cRemark) {		this.cRemark = cRemark;	}	public String getcState() {		return cState;	}	public void setcState(String cState) {		this.cState = cState;	}	public String getcDr() {		return cDr;	}	public void setcDr(String cDr) {		this.cDr = cDr;	}	public Date getcTimestamp() {		return cTimestamp;	}	public void setcTimestamp(Date cTimestamp) {		this.cTimestamp = cTimestamp;	}	public String getcCreater() {		return cCreater;	}	public void setcCreater(String cCreater) {		this.cCreater = cCreater;	}	public Date getcCreatetime() {		return cCreatetime;	}	public void setcCreatetime(Date cCreatetime) {		this.cCreatetime = cCreatetime;	}	public String getcModifier() {		return cModifier;	}	public void setcModifier(String cModifier) {		this.cModifier = cModifier;	}	public Date getcModifytime() {		return cModifytime;	}	public void setcModifytime(Date cModifytime) {		this.cModifytime = cModifytime;	}	public String getcSw01() {		return cSw01;	}	public void setcSw01(String cSw01) {		this.cSw01 = cSw01;	}	public String getcSw02() {		return cSw02;	}	public void setcSw02(String cSw02) {		this.cSw02 = cSw02;	}	public String getcSw03() {		return cSw03;	}	public void setcSw03(String cSw03) {		this.cSw03 = cSw03;	}	public String getcSw04() {		return cSw04;	}	public void setcSw04(String cSw04) {		this.cSw04 = cSw04;	}	public String getcSw05() {		return cSw05;	}	public void setcSw05(String cSw05) {		this.cSw05 = cSw05;	}	public String getcSw06() {		return cSw06;	}	public void setcSw06(String cSw06) {		this.cSw06 = cSw06;	}	public String getcSw07() {		return cSw07;	}	public void setcSw07(String cSw07) {		this.cSw07 = cSw07;	}	public String getcSw08() {		return cSw08;	}	public void setcSw08(String cSw08) {		this.cSw08 = cSw08;	}	public String getcSw09() {		return cSw09;	}	public void setcSw09(String cSw09) {		this.cSw09 = cSw09;	}	public String getcSw10() {		return cSw10;	}	public void setcSw10(String cSw10) {		this.cSw10 = cSw10;	}	}
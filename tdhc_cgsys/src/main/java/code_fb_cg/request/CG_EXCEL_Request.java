package code_fb_cg.request;

import java.util.Date;
/**
 * 
 * @author lhb
 * @时间：2018年8月16日上午11:29:30
 */
public class CG_EXCEL_Request {

	/** 请购单主表主键 **/
	private String cId;
	/** 公司名称 **/
	private String cComname;
	/** 单据编号 **/
	private String cOrdernum;
	/** 申请部门 **/
	private String cDeptapply;
	/** 申请日期 **/
	private String cTimeapply;
	/** 收单日期 **/
	private String cTimetake;
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
	/** 创建人 **/
	private String cCreater;
	
	/** 创建时间 **/
	private Date cCreatetime;
	/** 修改人 **/
	private String cModifier;
	
	/** 修改时间 **/
	private Date cModifytime;
	/** 备注 **/
	private String cRemark;
	/** 采购状态 **/
	private String cState;
	/** 删除标识 **/
	private String cDr;
	/** 时间戳 **/
	private Date cTimestamp;
	/** 提交状态 **/
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
	/** 采购进度：0、任务已接收
1寻找供应商2询价/比价3订货4发货5到货6入库7完成8取消转国内
 **/
	private String cPlanor;
	
	/** 报警时间 **/
	private Date cPolitime;
	/** 报警时间
报警标准时间/天
 **/
	private String cPolinormtime;
	/** 请购主表id **/
	private String cMtid;
	
	/** 采购进度时间 **/
	private Date cPlantime;
	private String cOrman;
	private String cManapply;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cAllotman == null) ? 0 : cAllotman.hashCode());
		result = prime * result + ((cAllotstate == null) ? 0 : cAllotstate.hashCode());
		result = prime * result + ((cAllottime == null) ? 0 : cAllottime.hashCode());
		result = prime * result + ((cArrtime == null) ? 0 : cArrtime.hashCode());
		result = prime * result + ((cAuditman == null) ? 0 : cAuditman.hashCode());
		result = prime * result + ((cAudittime == null) ? 0 : cAudittime.hashCode());
		result = prime * result + ((cAudittype == null) ? 0 : cAudittype.hashCode());
		result = prime * result + ((cComname == null) ? 0 : cComname.hashCode());
		result = prime * result + ((cCreater == null) ? 0 : cCreater.hashCode());
		result = prime * result + ((cCreatetime == null) ? 0 : cCreatetime.hashCode());
		result = prime * result + ((cDeptapply == null) ? 0 : cDeptapply.hashCode());
		result = prime * result + ((cDeptor == null) ? 0 : cDeptor.hashCode());
		result = prime * result + ((cDr == null) ? 0 : cDr.hashCode());
		result = prime * result + ((cGoodsname == null) ? 0 : cGoodsname.hashCode());
		result = prime * result + ((cId == null) ? 0 : cId.hashCode());
		result = prime * result + ((cManapply == null) ? 0 : cManapply.hashCode());
		result = prime * result + ((cManor == null) ? 0 : cManor.hashCode());
		result = prime * result + ((cMitman == null) ? 0 : cMitman.hashCode());
		result = prime * result + ((cMittime == null) ? 0 : cMittime.hashCode());
		result = prime * result + ((cMittype == null) ? 0 : cMittype.hashCode());
		result = prime * result + ((cModifier == null) ? 0 : cModifier.hashCode());
		result = prime * result + ((cModifytime == null) ? 0 : cModifytime.hashCode());
		result = prime * result + ((cMtid == null) ? 0 : cMtid.hashCode());
		result = prime * result + ((cMustneed == null) ? 0 : cMustneed.hashCode());
		result = prime * result + ((cNo == null) ? 0 : cNo.hashCode());
		result = prime * result + ((cNum == null) ? 0 : cNum.hashCode());
		result = prime * result + ((cOrdealline == null) ? 0 : cOrdealline.hashCode());
		result = prime * result + ((cOrdernum == null) ? 0 : cOrdernum.hashCode());
		result = prime * result + ((cOrman == null) ? 0 : cOrman.hashCode());
		result = prime * result + ((cPhone == null) ? 0 : cPhone.hashCode());
		result = prime * result + ((cPlanor == null) ? 0 : cPlanor.hashCode());
		result = prime * result + ((cPlantime == null) ? 0 : cPlantime.hashCode());
		result = prime * result + ((cPolinormtime == null) ? 0 : cPolinormtime.hashCode());
		result = prime * result + ((cPolitime == null) ? 0 : cPolitime.hashCode());
		result = prime * result + ((cRemark == null) ? 0 : cRemark.hashCode());
		result = prime * result + ((cSpec == null) ? 0 : cSpec.hashCode());
		result = prime * result + ((cState == null) ? 0 : cState.hashCode());
		result = prime * result + ((cSw01 == null) ? 0 : cSw01.hashCode());
		result = prime * result + ((cSw02 == null) ? 0 : cSw02.hashCode());
		result = prime * result + ((cSw03 == null) ? 0 : cSw03.hashCode());
		result = prime * result + ((cSw04 == null) ? 0 : cSw04.hashCode());
		result = prime * result + ((cSw05 == null) ? 0 : cSw05.hashCode());
		result = prime * result + ((cSw06 == null) ? 0 : cSw06.hashCode());
		result = prime * result + ((cSw07 == null) ? 0 : cSw07.hashCode());
		result = prime * result + ((cSw08 == null) ? 0 : cSw08.hashCode());
		result = prime * result + ((cSw09 == null) ? 0 : cSw09.hashCode());
		result = prime * result + ((cSw10 == null) ? 0 : cSw10.hashCode());
		result = prime * result + ((cTimeapply == null) ? 0 : cTimeapply.hashCode());
		result = prime * result + ((cTimestamp == null) ? 0 : cTimestamp.hashCode());
		result = prime * result + ((cTimetake == null) ? 0 : cTimetake.hashCode());
		result = prime * result + ((cTypename == null) ? 0 : cTypename.hashCode());
		result = prime * result + ((cUnit == null) ? 0 : cUnit.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CG_EXCEL_Request other = (CG_EXCEL_Request) obj;
		if (cAllotman == null) {
			if (other.cAllotman != null)
				return false;
		} else if (!cAllotman.equals(other.cAllotman))
			return false;
		if (cAllotstate == null) {
			if (other.cAllotstate != null)
				return false;
		} else if (!cAllotstate.equals(other.cAllotstate))
			return false;
		if (cAllottime == null) {
			if (other.cAllottime != null)
				return false;
		} else if (!cAllottime.equals(other.cAllottime))
			return false;
		if (cArrtime == null) {
			if (other.cArrtime != null)
				return false;
		} else if (!cArrtime.equals(other.cArrtime))
			return false;
		if (cAuditman == null) {
			if (other.cAuditman != null)
				return false;
		} else if (!cAuditman.equals(other.cAuditman))
			return false;
		if (cAudittime == null) {
			if (other.cAudittime != null)
				return false;
		} else if (!cAudittime.equals(other.cAudittime))
			return false;
		if (cAudittype == null) {
			if (other.cAudittype != null)
				return false;
		} else if (!cAudittype.equals(other.cAudittype))
			return false;
		if (cComname == null) {
			if (other.cComname != null)
				return false;
		} else if (!cComname.equals(other.cComname))
			return false;
		if (cCreater == null) {
			if (other.cCreater != null)
				return false;
		} else if (!cCreater.equals(other.cCreater))
			return false;
		if (cCreatetime == null) {
			if (other.cCreatetime != null)
				return false;
		} else if (!cCreatetime.equals(other.cCreatetime))
			return false;
		if (cDeptapply == null) {
			if (other.cDeptapply != null)
				return false;
		} else if (!cDeptapply.equals(other.cDeptapply))
			return false;
		if (cDeptor == null) {
			if (other.cDeptor != null)
				return false;
		} else if (!cDeptor.equals(other.cDeptor))
			return false;
		if (cDr == null) {
			if (other.cDr != null)
				return false;
		} else if (!cDr.equals(other.cDr))
			return false;
		if (cGoodsname == null) {
			if (other.cGoodsname != null)
				return false;
		} else if (!cGoodsname.equals(other.cGoodsname))
			return false;
		if (cId == null) {
			if (other.cId != null)
				return false;
		} else if (!cId.equals(other.cId))
			return false;
		if (cManapply == null) {
			if (other.cManapply != null)
				return false;
		} else if (!cManapply.equals(other.cManapply))
			return false;
		if (cManor == null) {
			if (other.cManor != null)
				return false;
		} else if (!cManor.equals(other.cManor))
			return false;
		if (cMitman == null) {
			if (other.cMitman != null)
				return false;
		} else if (!cMitman.equals(other.cMitman))
			return false;
		if (cMittime == null) {
			if (other.cMittime != null)
				return false;
		} else if (!cMittime.equals(other.cMittime))
			return false;
		if (cMittype == null) {
			if (other.cMittype != null)
				return false;
		} else if (!cMittype.equals(other.cMittype))
			return false;
		if (cModifier == null) {
			if (other.cModifier != null)
				return false;
		} else if (!cModifier.equals(other.cModifier))
			return false;
		if (cModifytime == null) {
			if (other.cModifytime != null)
				return false;
		} else if (!cModifytime.equals(other.cModifytime))
			return false;
		if (cMtid == null) {
			if (other.cMtid != null)
				return false;
		} else if (!cMtid.equals(other.cMtid))
			return false;
		if (cMustneed == null) {
			if (other.cMustneed != null)
				return false;
		} else if (!cMustneed.equals(other.cMustneed))
			return false;
		if (cNo == null) {
			if (other.cNo != null)
				return false;
		} else if (!cNo.equals(other.cNo))
			return false;
		if (cNum == null) {
			if (other.cNum != null)
				return false;
		} else if (!cNum.equals(other.cNum))
			return false;
		if (cOrdealline == null) {
			if (other.cOrdealline != null)
				return false;
		} else if (!cOrdealline.equals(other.cOrdealline))
			return false;
		if (cOrdernum == null) {
			if (other.cOrdernum != null)
				return false;
		} else if (!cOrdernum.equals(other.cOrdernum))
			return false;
		if (cOrman == null) {
			if (other.cOrman != null)
				return false;
		} else if (!cOrman.equals(other.cOrman))
			return false;
		if (cPhone == null) {
			if (other.cPhone != null)
				return false;
		} else if (!cPhone.equals(other.cPhone))
			return false;
		if (cPlanor == null) {
			if (other.cPlanor != null)
				return false;
		} else if (!cPlanor.equals(other.cPlanor))
			return false;
		if (cPlantime == null) {
			if (other.cPlantime != null)
				return false;
		} else if (!cPlantime.equals(other.cPlantime))
			return false;
		if (cPolinormtime == null) {
			if (other.cPolinormtime != null)
				return false;
		} else if (!cPolinormtime.equals(other.cPolinormtime))
			return false;
		if (cPolitime == null) {
			if (other.cPolitime != null)
				return false;
		} else if (!cPolitime.equals(other.cPolitime))
			return false;
		if (cRemark == null) {
			if (other.cRemark != null)
				return false;
		} else if (!cRemark.equals(other.cRemark))
			return false;
		if (cSpec == null) {
			if (other.cSpec != null)
				return false;
		} else if (!cSpec.equals(other.cSpec))
			return false;
		if (cState == null) {
			if (other.cState != null)
				return false;
		} else if (!cState.equals(other.cState))
			return false;
		if (cSw01 == null) {
			if (other.cSw01 != null)
				return false;
		} else if (!cSw01.equals(other.cSw01))
			return false;
		if (cSw02 == null) {
			if (other.cSw02 != null)
				return false;
		} else if (!cSw02.equals(other.cSw02))
			return false;
		if (cSw03 == null) {
			if (other.cSw03 != null)
				return false;
		} else if (!cSw03.equals(other.cSw03))
			return false;
		if (cSw04 == null) {
			if (other.cSw04 != null)
				return false;
		} else if (!cSw04.equals(other.cSw04))
			return false;
		if (cSw05 == null) {
			if (other.cSw05 != null)
				return false;
		} else if (!cSw05.equals(other.cSw05))
			return false;
		if (cSw06 == null) {
			if (other.cSw06 != null)
				return false;
		} else if (!cSw06.equals(other.cSw06))
			return false;
		if (cSw07 == null) {
			if (other.cSw07 != null)
				return false;
		} else if (!cSw07.equals(other.cSw07))
			return false;
		if (cSw08 == null) {
			if (other.cSw08 != null)
				return false;
		} else if (!cSw08.equals(other.cSw08))
			return false;
		if (cSw09 == null) {
			if (other.cSw09 != null)
				return false;
		} else if (!cSw09.equals(other.cSw09))
			return false;
		if (cSw10 == null) {
			if (other.cSw10 != null)
				return false;
		} else if (!cSw10.equals(other.cSw10))
			return false;
		if (cTimeapply == null) {
			if (other.cTimeapply != null)
				return false;
		} else if (!cTimeapply.equals(other.cTimeapply))
			return false;
		if (cTimestamp == null) {
			if (other.cTimestamp != null)
				return false;
		} else if (!cTimestamp.equals(other.cTimestamp))
			return false;
		if (cTimetake == null) {
			if (other.cTimetake != null)
				return false;
		} else if (!cTimetake.equals(other.cTimetake))
			return false;
		if (cTypename == null) {
			if (other.cTypename != null)
				return false;
		} else if (!cTypename.equals(other.cTypename))
			return false;
		if (cUnit == null) {
			if (other.cUnit != null)
				return false;
		} else if (!cUnit.equals(other.cUnit))
			return false;
		return true;
	}
	
	
	
}

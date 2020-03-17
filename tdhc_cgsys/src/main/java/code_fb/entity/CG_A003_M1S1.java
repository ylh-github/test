
package code_fb.entity;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 
 * CG_A003 前台代码生成实体
 * 
 * @author Administrator
 *
 */
public class CG_A003_M1S1 implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String cId;

	public String getcId() {
		return cId;
	}

	public void setcId(String cId) {
		this.cId = cId;
	}
	private Date cModifytime;

	public Date getcModifytime() {
		return cModifytime;
	}

	public void setcModifytime(Date cModifytime) {
		this.cModifytime = cModifytime;
	}
	private Date cCreatetime;

	public Date getcCreatetime() {
		return cCreatetime;
	}

	public void setcCreatetime(Date cCreatetime) {
		this.cCreatetime = cCreatetime;
	}

	private String cRemark;

	public String getcRemark() {
		return cRemark;
	}

	public void setcRemark(String cRemark) {
		this.cRemark = cRemark;
	}

	private String cComname;

	public String getcComname() {
		return cComname;
	}

	public void setcComname(String cComname) {
		this.cComname = cComname;
	}
	private Date cTimestamp;

	public Date getcTimestamp() {
		return cTimestamp;
	}

	public void setcTimestamp(Date cTimestamp) {
		this.cTimestamp = cTimestamp;
	}

	private String cTypename;

	public String getcTypename() {
		return cTypename;
	}

	public void setcTypename(String cTypename) {
		this.cTypename = cTypename;
	}

	private String cModifier;

	public String getcModifier() {
		return cModifier;
	}

	public void setcModifier(String cModifier) {
		this.cModifier = cModifier;
	}

	private String cState;

	public String getcState() {
		return cState;
	}

	public void setcState(String cState) {
		this.cState = cState;
	}

	private String cDealline;

	public String getcDealline() {
		return cDealline;
	}

	public void setcDealline(String cDealline) {
		this.cDealline = cDealline;
	}

	private String cCreater;

	public String getcCreater() {
		return cCreater;
	}

	public void setcCreater(String cCreater) {
		this.cCreater = cCreater;
	}

	private Date startTime;

	private Date endTime;

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

}
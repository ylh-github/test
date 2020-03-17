
package code_fb.entity;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 
 * CG_A002 前台代码生成实体
 * 
 * @author Administrator
 *
 */
public class CG_A002_M1S1 implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String cDr;

	public String getcDr() {
		return cDr;
	}

	public void setcDr(String cDr) {
		this.cDr = cDr;
	}

	private String cId;

	public String getcId() {
		return cId;
	}

	public void setcId(String cId) {
		this.cId = cId;
	}

	private String cDeptcode;

	public String getcDeptcode() {
		return cDeptcode;
	}

	public void setcDeptcode(String cDeptcode) {
		this.cDeptcode = cDeptcode;
	}

	private String cComname;

	public String getcComname() {
		return cComname;
	}

	public void setcComname(String cComname) {
		this.cComname = cComname;
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
	private Date cModifiytime;

	public Date getcModifiytime() {
		return cModifiytime;
	}

	public void setcModifiytime(Date cModifiytime) {
		this.cModifiytime = cModifiytime;
	}

	private String cDeptname;

	public String getcDeptname() {
		return cDeptname;
	}

	public void setcDeptname(String cDeptname) {
		this.cDeptname = cDeptname;
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
	private Date cTimestamp;

	public Date getcTimestamp() {
		return cTimestamp;
	}

	public void setcTimestamp(Date cTimestamp) {
		this.cTimestamp = cTimestamp;
	}

	private String cComcode;

	public String getcComcode() {
		return cComcode;
	}

	public void setcComcode(String cComcode) {
		this.cComcode = cComcode;
	}

	private String cComaddress;

	public String getcComaddress() {
		return cComaddress;
	}

	public void setcComaddress(String cComaddress) {
		this.cComaddress = cComaddress;
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
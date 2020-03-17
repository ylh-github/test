
package code_fb.request;

import java.util.Date;
import java.util.List;

import code_fb.entity.CG_CK_M1S1;
import code_fb_cg.entity.TpCgcontractmt;

public class CG_CK_Request_M1S1 {
	public List<CG_CK_M1S1> cgCkM1s1;
	public List<CG_CK_M1S1> shipnum;
	private List<TpCgcontractmt> list;
	private Date startTime;
	private Date endTime;

	public List<TpCgcontractmt> getList() {
		return list;
	}

	public void setList(List<TpCgcontractmt> list) {
		this.list = list;
	}

	public List<CG_CK_M1S1> getCgCkM1s1() {
		return cgCkM1s1;
	}

	public void setCgCkM1s1(List<CG_CK_M1S1> cgCkM1s1) {
		this.cgCkM1s1 = cgCkM1s1;
	}

	public List<CG_CK_M1S1> getShipnum() {
		return shipnum;
	}

	public void setShipnum(List<CG_CK_M1S1> shipnum) {
		this.shipnum = shipnum;
	}

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
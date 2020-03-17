package code_fb_cg.request;

import java.util.Date;

public class ShipM2s2Q {

	private String cShipnum;
	private String cGoodsname;
	private String cFramenum;
	private String cContainer;
	private Date startTime;
	private Date endTime;
	public String getcShipnum() {
		return cShipnum;
	}
	public void setcShipnum(String cShipnum) {
		this.cShipnum = cShipnum;
	}
	public String getcGoodsname() {
		return cGoodsname;
	}
	public void setcGoodsname(String cGoodsname) {
		this.cGoodsname = cGoodsname;
	}
	public String getcFramenum() {
		return cFramenum;
	}
	public void setcFramenum(String cFramenum) {
		this.cFramenum = cFramenum;
	}
	public String getcContainer() {
		return cContainer;
	}
	public void setcContainer(String cContainer) {
		this.cContainer = cContainer;
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

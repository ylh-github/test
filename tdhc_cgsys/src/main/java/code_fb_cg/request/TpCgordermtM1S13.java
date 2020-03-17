package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgordermt2;
import code_fb_cg.entity.TpCgordermt3;

/**
 * 
 * @author lhb
 * @时间：2019年12月3日下午2:21:04
 */
public class TpCgordermtM1S13 {
	//原来的
	private List<TpCgordermt2> cgQ001M1s13;
	//信息
	private List<TpCgordermt3> cgQ001M1s14;
	
	private TpCgordermt3 tpCgordermt3;
	//本周报表跳转对接
	private MtRequest mtRequest;
	//具体项目报表跳转对接
	private ItemRequestObject itemRequestObject;
	private Date startTime;
	private Date endTime;
	public List<TpCgordermt2> getCgQ001M1s13() {
		return cgQ001M1s13;
	}
	public void setCgQ001M1s13(List<TpCgordermt2> cgQ001M1s13) {
		this.cgQ001M1s13 = cgQ001M1s13;
	}

	public List<TpCgordermt3> getCgQ001M1s14() {
		return cgQ001M1s14;
	}

	public void setCgQ001M1s14(List<TpCgordermt3> cgQ001M1s14) {
		this.cgQ001M1s14 = cgQ001M1s14;
	}

	public MtRequest getMtRequest() {
		return mtRequest;
	}

	public void setMtRequest(MtRequest mtRequest) {
		this.mtRequest = mtRequest;
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
	public TpCgordermt3 getTpCgordermt3() {
		return tpCgordermt3;
	}
	public void setTpCgordermt3(TpCgordermt3 tpCgordermt3) {
		this.tpCgordermt3 = tpCgordermt3;
	}
	public ItemRequestObject getItemRequestObject() {
		return itemRequestObject;
	}
	public void setItemRequestObject(ItemRequestObject itemRequestObject) {
		this.itemRequestObject = itemRequestObject;
	}
}

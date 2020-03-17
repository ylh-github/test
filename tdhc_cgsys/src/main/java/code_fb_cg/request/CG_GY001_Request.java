package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.SuppViewEntity;
import code_fb_cg.entity.TbSuppmateral;

public class CG_GY001_Request {

	private List<TbSuppmateral> tbSuppmateral;
	
	private List<SuppViewEntity> suppViewEntity;
	
	private Date startTime;
	
	private Date endTime;
	
	public List<TbSuppmateral> getTbSuppmateral() {
		return tbSuppmateral;
	}

	public void setTbSuppmateral(List<TbSuppmateral> tbSuppmateral) {
		this.tbSuppmateral = tbSuppmateral;
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

	public List<SuppViewEntity> getSuppViewEntity() {
		return suppViewEntity;
	}

	public void setSuppViewEntity(List<SuppViewEntity> suppViewEntity) {
		this.suppViewEntity = suppViewEntity;
	}

	
	
	
}

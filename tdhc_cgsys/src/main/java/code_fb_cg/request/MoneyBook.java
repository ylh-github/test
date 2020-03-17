package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgmoneybook;

public class MoneyBook {

	private List<TpCgmoneybook> moneybook;
	private Date startTime;
	private Date endTime;
	public List<TpCgmoneybook> getMoneybook() {
		return moneybook;
	}

	public void setMoneybook(List<TpCgmoneybook> moneybook) {
		this.moneybook = moneybook;
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

package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgreceivebook;

public class ReveiceBookList {

	private List<TpCgreceivebook> bookList;
	private List<TpCgcontractmt> list;
	private Date deltime;
	private Date startTime;
	private Date endTime;
	private	String shipno;
	
	
	
	public String getShipno() {
		return shipno;
	}

	public void setShipno(String shipno) {
		this.shipno = shipno;
	}

	public Date getDeltime() {
		return deltime;
	}

	public void setDeltime(Date deltime) {
		this.deltime = deltime;
	}

	public List<TpCgcontractmt> getList() {
		return list;
	}

	public void setList(List<TpCgcontractmt> list) {
		this.list = list;
	}

	public List<TpCgreceivebook> getBookList() {
		return bookList;
	}

	public void setBookList(List<TpCgreceivebook> bookList) {
		this.bookList = bookList;
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

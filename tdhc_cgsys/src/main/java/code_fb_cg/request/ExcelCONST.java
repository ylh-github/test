package code_fb_cg.request;

import java.util.Date;
import java.util.List;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpConrevocare;
/**
 * 合同物资对应请购单物资导入
 * @author lhb
 * @时间：2018年11月29日下午12:21:47
 */
public class ExcelCONST {

	private List<TpCgcontractmt> stList;//选中的合同物资
	private TpConrevocare conrevocare;//选中的合同物资
	private Date outdeltime;//到货时间/出库时间
	private List<TpCgcontractst> excel;//excel表中数据
	private List<TpCgcontractst> shipnum;
	private TpCgcontractst tpCgcontractst;
	private List<TpCgcontractstt> tsttlist;//excel表中的拟合同信息
	private String chipnos;//船号/到货地址
	
	

	public String getChipnos() {
		return chipnos;
	}

	public void setChipnos(String chipnos) {
		this.chipnos = chipnos;
	}

	public Date getOutdeltime() {
		return outdeltime;
	}

	public void setOutdeltime(Date outdeltime) {
		this.outdeltime = outdeltime;
	}

	public List<TpCgcontractst> getExcel() {
		return excel;
	}

	public void setExcel(List<TpCgcontractst> excel) {
		this.excel = excel;
	}

	public List<TpCgcontractmt> getStList() {
		return stList;
	}

	public void setStList(List<TpCgcontractmt> stList) {
		this.stList = stList;
	}

	public List<TpCgcontractst> getShipnum() {
		return shipnum;
	}

	public void setShipnum(List<TpCgcontractst> shipnum) {
		this.shipnum = shipnum;
	}

	public List<TpCgcontractstt> getTsttlist() {
		return tsttlist;
	}

	public void setTsttlist(List<TpCgcontractstt> tsttlist) {
		this.tsttlist = tsttlist;
	}

	public TpCgcontractst getTpCgcontractst() {
		return tpCgcontractst;
	}

	public void setTpCgcontractst(TpCgcontractst tpCgcontractst) {
		this.tpCgcontractst = tpCgcontractst;
	}

	public TpConrevocare getConrevocare() {
		return conrevocare;
	}

	public void setConrevocare(TpConrevocare conrevocare) {
		this.conrevocare = conrevocare;
	}

	

	
	
}

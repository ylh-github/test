
package code_fb.entity;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
/**
 * 
 *CG_C001 前台代码生成实体
 * 
 * @author Administrator
 *
 */
public class CG_C001_M1S1 implements Serializable{	
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String cManor;
	public String getcManor() {
		return cManor;
	}
	public void setcManor(String cManor) {
		this.cManor = cManor;
	}
	//开始结束时间
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
	private String cId;
	public  String getcId() {
	return cId;
	}
  public void setcId ( String cId) {
    this.cId = cId ;
	}
	private Date cModifytime;
	public  Date getcModifytime() {
	return cModifytime;
	}
  public void setcModifytime ( Date cModifytime) {
    this.cModifytime = cModifytime ;
	}
	private String cOrmtid;
	public  String getcOrmtid() {
	return cOrmtid;
	}
  public void setcOrmtid ( String cOrmtid) {
    this.cOrmtid = cOrmtid ;
	}
	private String cGoodsname;
	public  String getcGoodsname() {
	return cGoodsname;
	}
  public void setcGoodsname ( String cGoodsname) {
    this.cGoodsname = cGoodsname ;
	}
	private String cRemark;
	public  String getcRemark() {
	return cRemark;
	}
  public void setcRemark ( String cRemark) {
    this.cRemark = cRemark ;
	}
	private String cPlanor;
	public  String getcPlanor() {
	return cPlanor;
	}
  public void setcPlanor ( String cPlanor) {
    this.cPlanor = cPlanor ;
	}
	private String cModifier;
	public  String getcModifier() {
	return cModifier;
	}
  public void setcModifier ( String cModifier) {
    this.cModifier = cModifier ;
	}
	private String cGoodstype;
	public  String getcGoodstype() {
	return cGoodstype;
	}
  public void setcGoodstype ( String cGoodstype) {
    this.cGoodstype = cGoodstype ;
	}
	private String cSpec;
	public  String getcSpec() {
	return cSpec;
	}
  public void setcSpec ( String cSpec) {
    this.cSpec = cSpec ;
	}
	private String cState;
	public  String getcState() {
	return cState;
	}
  public void setcState ( String cState) {
    this.cState = cState ;
	}
	private Date cTimestamp;
	public  Date getcTimestamp() {
	return cTimestamp;
	}
  public void setcTimestamp ( Date cTimestamp) {
    this.cTimestamp = cTimestamp ;
	}
	private String cCreater;
	public  String getcCreater() {
	return cCreater;
	}
  public void setcCreater ( String cCreater) {
    this.cCreater = cCreater ;
	}
	private Date cCreatetime;
	public  Date getcCreatetime() {
	return cCreatetime;
	}
  public void setcCreatetime ( Date cCreatetime) {
    this.cCreatetime = cCreatetime ;
	}
	private String cOrstid;
	public  String getcOrstid() {
	return cOrstid;
	}
  public void setcOrstid ( String cOrstid) {
    this.cOrstid = cOrstid ;
	}
	private Date cPlanortime;
	public  Date getcPlanortime() {
	return cPlanortime;
	}
  public void setcPlanortime ( Date cPlanortime) {
    this.cPlanortime = cPlanortime ;
	}
}
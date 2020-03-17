
package cn.tdhc.TB_ATTR_GROUP.request;

import java.util.List;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;

public class IWIP_AGROUP_Request_M1S1 {
	
	public String viceMatCode;
	
	public List<IWIP_AGROUP_M1S1> iwipAgroupM1s1;

	public List<IWIP_AGROUP_M1S1> iwipAgroupParentMsg;

	public List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg;
	
	public String getViceMatCode() {
		return viceMatCode;
	}

	public void setViceMatCode(String viceMatCode) {
		this.viceMatCode = viceMatCode;
	}
	
	public List<IWIP_MGROUP_M1S1> getIwipMgroupParentMsg() {
		return iwipMgroupParentMsg;
	}

	public void setIwipMgroupParentMsg(List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg) {
		this.iwipMgroupParentMsg = iwipMgroupParentMsg;
	}

	public List<IWIP_AGROUP_M1S1> getIwipAgroupParentMsg() {
		return iwipAgroupParentMsg;
	}

	public void setIwipAgroupParentMsg(List<IWIP_AGROUP_M1S1> iwipAgroupParentMsg) {
		this.iwipAgroupParentMsg = iwipAgroupParentMsg;
	}

	public List<IWIP_AGROUP_M1S1> getIwipAgroupM1s1() {
		return iwipAgroupM1s1;
	}

	public void setIwipAgroupM1s1(List<IWIP_AGROUP_M1S1> iwipAgroupM1s1) {
		this.iwipAgroupM1s1 = iwipAgroupM1s1;
	}

	public String tbAttrGroupCDr;

	public String getTbAttrGroupCDr() {
		return tbAttrGroupCDr;
	}

	public void setTbAttrGroupCDr(String tbAttrGroupCDr) {
		this.tbAttrGroupCDr = tbAttrGroupCDr;
	}
	
	private String flag;

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
	public List<IWIP_MGROUP_M1S1> iwipMgroupM1s1;

	public List<IWIP_MGROUP_M1S1> getIwipMgroupM1s1() {
		return iwipMgroupM1s1;
	}

	public void setIwipMgroupM1s1(List<IWIP_MGROUP_M1S1> iwipMgroupM1s1) {
		this.iwipMgroupM1s1 = iwipMgroupM1s1;
	}
	
}
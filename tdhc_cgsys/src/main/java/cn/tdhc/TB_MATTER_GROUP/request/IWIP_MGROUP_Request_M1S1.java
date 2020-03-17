
package cn.tdhc.TB_MATTER_GROUP.request;

import java.util.List;

import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;

public class IWIP_MGROUP_Request_M1S1 {
	
	public List<IWIP_MGROUP_M1S1> iwipMgroupM1s1;

	public List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg;
	
	public List<IWIP_MGROUP_M1S1> getIwipMgroupParentMsg() {
		return iwipMgroupParentMsg;
	}

	public void setIwipMgroupParentMsg(List<IWIP_MGROUP_M1S1> iwipMgroupParentMsg) {
		this.iwipMgroupParentMsg = iwipMgroupParentMsg;
	}

	public List<IWIP_MGROUP_M1S1> getIwipMgroupM1s1() {
		return iwipMgroupM1s1;
	}

	public void setIwipMgroupM1s1(List<IWIP_MGROUP_M1S1> iwipMgroupM1s1) {
		this.iwipMgroupM1s1 = iwipMgroupM1s1;
	}

	public String tbMatterGroupCDr;

	public String getTbMatterGroupCDr() {
		return tbMatterGroupCDr;
	}

	public void setTbMatterGroupCDr(String tbMatterGroupCDr) {
		this.tbMatterGroupCDr = tbMatterGroupCDr;
	}
}

package cn.tdhc.TB_MATTER_GROUP.response;

import java.util.List;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;
import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;

public class IWIP_MGROUP_Response_M1S1 {
	public List<IWIP_MGROUP_M1S1> iwipMgroupM1s1;
	
	public List<IWIP_AGROUP_M1S1> mainIwipAgroupM1s1;
	
	public List<IWIP_AGROUP_M1S1> viceIwipAgroupM1s1;

	public List<IWIP_AGROUP_M1S1> getMainIwipAgroupM1s1() {
		return mainIwipAgroupM1s1;
	}

	public void setMainIwipAgroupM1s1(List<IWIP_AGROUP_M1S1> mainIwipAgroupM1s1) {
		this.mainIwipAgroupM1s1 = mainIwipAgroupM1s1;
	}
	
	public List<IWIP_AGROUP_M1S1> getViceIwipAgroupM1s1() {
		return viceIwipAgroupM1s1;
	}

	public void setViceIwipAgroupM1s1(List<IWIP_AGROUP_M1S1> viceIwipAgroupM1s1) {
		this.viceIwipAgroupM1s1 = viceIwipAgroupM1s1;
	}

	public List<IWIP_MGROUP_M1S1> getIwipMgroupM1s1() {
		return iwipMgroupM1s1;
	}

	public void setIwipMgroupM1s1(List<IWIP_MGROUP_M1S1> iwipMgroupM1s1) {
		this.iwipMgroupM1s1 = iwipMgroupM1s1;
	}
}
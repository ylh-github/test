
package cn.tdhc.TB_ATTR_GROUP.response;

import java.util.List;
import java.util.Map;

import cn.tdhc.TB_ATTR_GROUP.entity.IWIP_AGROUP_M1S1;

public class IWIP_AGROUP_Response_M1S1 {
	public List<IWIP_AGROUP_M1S1> iwipAgroupM1s1;

	public List<IWIP_AGROUP_M1S1> getIwipAgroupM1s1() {
		return iwipAgroupM1s1;
	}

	public void setIwipAgroupM1s1(List<IWIP_AGROUP_M1S1> iwipAgroupM1s1) {
		this.iwipAgroupM1s1 = iwipAgroupM1s1;
	}
	
	private String flag;

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
	
	public Map<String,List<IWIP_AGROUP_M1S1>> mapList;

	public Map<String, List<IWIP_AGROUP_M1S1>> getMapList() {
		return mapList;
	}

	public void setMapList(Map<String, List<IWIP_AGROUP_M1S1>> mapList) {
		this.mapList = mapList;
	}
	
	public String sur;

	public String getSur() {
		return sur;
	}

	public void setSur(String sur) {
		this.sur = sur;
	}
	
	
	
	
}
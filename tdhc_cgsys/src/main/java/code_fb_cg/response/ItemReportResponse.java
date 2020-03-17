package code_fb_cg.response;

import java.util.ArrayList;
import java.util.List;

import code_fb_cg.entity.ItemReportData;

public class ItemReportResponse {
	List<ItemReportData> listItemReportData ;
	List<ItemReportData> listData;
	public List<ItemReportData> getListItemReportData() {
		return listItemReportData;
	}
	public void setListItemReportData(List<ItemReportData> listItemReportData) {
		this.listItemReportData = listItemReportData;
	}
	public List<ItemReportData> getListData() {
		return listData;
	}
	public void setListData(List<ItemReportData> listData) {
		this.listData = listData;
	}
	
	
}

package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code_fb_cg.entity.ItemReport;
import code_fb_cg.entity.ItemReportData;
import code_fb_cg.entity.StatisticalReport;
import code_fb_cg.entity.TbItem;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TbItemMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.request.ReportDataRequest;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.response.ItemReportResponse;
import code_fb_cg.service.TpCgorderstTJService;
import code_fb_cg.util.XxkUtil;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
@Service
public class TpCgorderstTJServiceImpl implements TpCgorderstTJService{

	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TbItemMapper tbItemMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Override
	public ResponseObject<EmptyTag, List<TpCgorderst>> searchTpCgorderstTJ(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgordermtM1S13 data = requestObject.getData();
		System.out.println("开始时间:::"+data.getStartTime());
		List<TpCgorderst> searchTpCgorderstTJ = tpCgorderstMapper.searchTpCgorderstTJ(data);
		return builder.data(searchTpCgorderstTJ).msg("查询成功").errcode(Errcode.Success).build();
	}


	@Override
	public ResponseObject<EmptyTag, List<TpCgorderst>> searchItemTj(
			RequestObject<EmptyTag, ReportDataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String[] cCludecom = requestObject.getData().getcCludecom();
		if(cCludecom.length == 0) {
			return builder.msg("请选择签订公司").errcode(Errcode.FailParameterError).build();
		}
		System.out.println("开始时间::"+requestObject.getData().getStartTime() + "结束时间::"+requestObject.getData().getEndTime());
//		XxkUtil xxkUtil = new XxkUtil();
//		//返回值
		List<ItemReportData> listItemReportData = new ArrayList<>();
		List<ItemReportData> listData = new ArrayList<>();
		//项目的采购项，采购金额统计
		List<ItemReport>  listItemReport = new ArrayList<>();
//		//获取公司描述 1,2 
		List<TpCgauthority> selectSubitemidAll = tpCgauthorityMapper.selectSubitemidAll2(cCludecom, "QDGS");
		if(selectSubitemidAll.isEmpty()) {
			return builder.msg("无此公司，请维护！！").errcode(Errcode.FailParameterError).build();
		}
		System.out.println("公司长度::"+selectSubitemidAll.size());
////		List<ItemReport> addcSubitemdes = xxkUtil.addcSubitemdes(selectSubitemidAll);
//		//获取具体项目 印尼大K部   SMI SMI-M 
		List<TbItem> selectAll = tbItemMapper.selectAll();
		if(selectAll.isEmpty()) {
			return builder.msg("无具体项目，请维护！！").errcode(Errcode.FailParameterError).build();
		}
		for (TbItem tbItem : selectAll) {
			ItemReport itemReport = new ItemReport();
			itemReport.setcItemdes(tbItem.getcItemdes());//项目所属部
			itemReport.setcSubitemid(tbItem.getcSubitemid());//所属项目
			itemReport.setcDepartment(tbItem.getcDepartment());//项目部门
			//统计具体项目的总请购项，已采购项，未采购项，采购总金额
			ItemReport selectItem = tpCgorderstMapper.selectItem(tbItem.getcDepartment(),requestObject.getData().getStartTime(),
					requestObject.getData().getEndTime());
			itemReport.setzQgoux(selectItem.getzQgoux());//总请购项
			itemReport.setyCgoux(selectItem.getyCgoux());//已采购项
			itemReport.setwCgoux(selectItem.getwCgoux());//未采购项
			itemReport.setzConmoney(selectItem.getzConmoney());//采购总金额
			
			listItemReport.add(itemReport);
//			System.out.println("项目汇总：：："+tbItem.getcSubitemid());
		}
//		System.out.println("项目的请购单统计====="+listItemReport);
		ItemReportData itemData = new ItemReportData();
//		for (ItemReport ItemReport : listItemReport) {
		for (int i = 0; i < listItemReport.size(); i++) {
			if(i > 0 && !listItemReport.get(i-1).getcSubitemid().equals(listItemReport.get(i).getcSubitemid())) {
				itemData.setcSubitemid(listItemReport.get(i-1).getcSubitemid()+"-汇总");
//				itemData.setcItemdes(listItemReport.get(i).getcItemdes());
				listItemReportData.add(itemData);
				itemData = new ItemReportData();
			}
			ItemReportData itemReportData = new ItemReportData();
			String cDepartment = listItemReport.get(i).getcDepartment();
			itemReportData.setzQgoux(listItemReport.get(i).getzQgoux());//总请购项
			itemReportData.setyCgoux(listItemReport.get(i).getyCgoux());//已采购项
			itemReportData.setwCgoux(listItemReport.get(i).getwCgoux());//未采购项
			itemReportData.setzConmoney(listItemReport.get(i).getzConmoney());//采购总金额
			itemReportData.setcItemdes(listItemReport.get(i).getcItemdes());
			itemReportData.setcSubitemid(listItemReport.get(i).getcSubitemid());
			itemReportData.setcDepartment(listItemReport.get(i).getcDepartment());
			itemData.setzQgoux(isNull(itemData.getzQgoux()).add(isNull(itemReportData.getzQgoux())));//累加总请购项
			itemData.setyCgoux(isNull(itemData.getyCgoux()).add(isNull(itemReportData.getyCgoux())));//累加已采购项
			itemData.setwCgoux(isNull(itemData.getwCgoux()).add(isNull(itemReportData.getwCgoux())));//累加未采购项
			itemData.setzConmoney(isNull(itemData.getzConmoney()).add(isNull(itemReportData.getzConmoney())));//累加采购总金额
			for (TpCgauthority tpCgauthority : selectSubitemidAll) {
				String cSubitemid = tpCgauthority.getcSubitemid();
				ItemReport selectAllCount = tpCgcontractmtMapper.selectAllCount(cDepartment,cSubitemid,requestObject.getData().getStartTime(),
						requestObject.getData().getEndTime());
//				 ItemReportData changecSubitemdes = xxkUtil.changecSubitemdes(ItemReport,tpCgauthority);
//				listItemReportData.add(changecSubitemdes);
				if("1".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcSubitemdes1(tpCgauthority.getcSubitemdes());
					itemReportData.setcCludecom1(tpCgauthority.getcSubitemid());
					itemReportData.setHtNum1(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney1(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay1(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay1(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum1(isNull(itemData.getHtNum1()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney1(isNull(itemData.getcGconmoney1()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay1(isNull(itemData.getYfPay1()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay1(isNull(itemData.getWfPay1()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("2".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcSubitemdes2(tpCgauthority.getcSubitemdes());
					itemReportData.setcCludecom2(tpCgauthority.getcSubitemid());
					itemReportData.setHtNum2(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney2(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay2(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay2(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum2(isNull(itemData.getHtNum2()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney2(isNull(itemData.getcGconmoney2()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay2(isNull(itemData.getYfPay2()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay2(isNull(itemData.getWfPay2()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("3".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom3(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes3(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum3(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney3(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay3(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay3(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum3(isNull(itemData.getHtNum3()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney3(isNull(itemData.getcGconmoney3()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay3(isNull(itemData.getYfPay3()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay3(isNull(itemData.getWfPay3()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("4".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom4(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes4(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum4(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney4(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay4(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay4(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum4(isNull(itemData.getHtNum4()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney4(isNull(itemData.getcGconmoney4()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay4(isNull(itemData.getYfPay4()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay4(isNull(itemData.getWfPay4()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("5".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom5(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes5(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum5(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney5(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay5(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay5(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum5(isNull(itemData.getHtNum5()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney5(isNull(itemData.getcGconmoney5()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay5(isNull(itemData.getYfPay5()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay5(isNull(itemData.getWfPay5()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("6".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom6(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes6(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum6(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney6(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay6(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay6(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum6(isNull(itemData.getHtNum6()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney6(isNull(itemData.getcGconmoney6()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay6(isNull(itemData.getYfPay6()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay6(isNull(itemData.getWfPay6()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("7".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom7(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes7(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum7(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney7(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay7(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay7(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum7(isNull(itemData.getHtNum7()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney7(isNull(itemData.getcGconmoney7()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay7(isNull(itemData.getYfPay7()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay7(isNull(itemData.getWfPay7()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("8".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom8(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes8(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum8(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney8(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay8(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay8(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum8(isNull(itemData.getHtNum8()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney8(isNull(itemData.getcGconmoney8()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay8(isNull(itemData.getYfPay8()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay8(isNull(itemData.getWfPay8()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("9".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom9(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes9(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum9(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney9(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay9(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay9(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum9(isNull(itemData.getHtNum9()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney9(isNull(itemData.getcGconmoney9()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay9(isNull(itemData.getYfPay9()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay9(isNull(itemData.getWfPay9()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("10".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom10(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes10(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum10(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney10(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay10(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay10(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum10(isNull(itemData.getHtNum10()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney10(isNull(itemData.getcGconmoney10()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay10(isNull(itemData.getYfPay10()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay10(isNull(itemData.getWfPay10()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("11".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom11(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes11(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum11(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney11(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay11(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay11(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum11(isNull(itemData.getHtNum11()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney11(isNull(itemData.getcGconmoney11()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay11(isNull(itemData.getYfPay11()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay11(isNull(itemData.getWfPay11()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("12".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom12(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes12(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum12(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney12(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay12(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay12(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum12(isNull(itemData.getHtNum12()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney12(isNull(itemData.getcGconmoney12()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay12(isNull(itemData.getYfPay12()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay12(isNull(itemData.getWfPay12()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("13".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom13(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes13(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum13(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney13(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay13(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay13(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum13(isNull(itemData.getHtNum13()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney13(isNull(itemData.getcGconmoney13()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay13(isNull(itemData.getYfPay13()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay13(isNull(itemData.getWfPay13()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("14".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom14(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes14(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum14(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney14(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay14(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay14(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum14(isNull(itemData.getHtNum14()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney14(isNull(itemData.getcGconmoney14()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay14(isNull(itemData.getYfPay14()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay14(isNull(itemData.getWfPay14()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("15".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom15(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes15(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum15(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney15(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay15(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay15(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum15(isNull(itemData.getHtNum15()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney15(isNull(itemData.getcGconmoney15()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay15(isNull(itemData.getYfPay15()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay15(isNull(itemData.getWfPay15()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("16".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom16(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes16(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum16(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney16(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay16(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay16(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum16(isNull(itemData.getHtNum16()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney16(isNull(itemData.getcGconmoney16()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay16(isNull(itemData.getYfPay16()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay16(isNull(itemData.getWfPay16()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("17".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom17(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes17(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum17(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney17(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay17(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay17(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum17(isNull(itemData.getHtNum17()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney17(isNull(itemData.getcGconmoney17()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay17(isNull(itemData.getYfPay17()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay17(isNull(itemData.getWfPay17()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("18".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom18(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes18(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum18(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney18(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay18(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay18(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum18(isNull(itemData.getHtNum18()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney18(isNull(itemData.getcGconmoney18()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay18(isNull(itemData.getYfPay18()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay18(isNull(itemData.getWfPay18()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
				if("19".equals(tpCgauthority.getcSubitemid())) {
					itemReportData.setcCludecom19(tpCgauthority.getcSubitemid());
					itemReportData.setcSubitemdes19(tpCgauthority.getcSubitemdes());
					itemReportData.setHtNum19(selectAllCount.getHtNum());//签订合同数
					itemReportData.setcGconmoney19(selectAllCount.getcGconmoney());//签订金额数
					itemReportData.setYfPay19(selectAllCount.getYfPay());//已付金额
					itemReportData.setWfPay19(selectAllCount.getWfPay());//未付金额
//					itemReportData.setcItemdes(ItemReport.getcItemdes());
//					itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//					itemReportData.setcDepartment(ItemReport.getcDepartment());
					itemData.setHtNum19(isNull(itemData.getHtNum19()).add(isNull(selectAllCount.getHtNum())));//累加签订合同数
					itemData.setcGconmoney19(isNull(itemData.getcGconmoney19()).add(isNull(selectAllCount.getcGconmoney())));//累加签订金额数
					itemData.setYfPay19(isNull(itemData.getYfPay19()).add(isNull(selectAllCount.getYfPay())));//累加已付金额
					itemData.setWfPay19(isNull(itemData.getWfPay19()).add(isNull(selectAllCount.getWfPay())));//累加未付金额
				}
			}
			listItemReportData.add(itemReportData);
			if(i == listItemReport.size()-1) {
				itemData.setcSubitemid(listItemReport.get(i).getcSubitemid()+"-汇总");
//				itemData.setcItemdes(listItemReport.get(i).getcItemdes());
				listItemReportData.add(itemData);
			}
			
		}
		for (TpCgauthority tpCgauthority : selectSubitemidAll) {
			ItemReportData itemReportData = new ItemReportData();
			if("1".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
//				itemReportData.setHtNum1(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney1(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay1(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay1(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("2".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
//				itemReportData.setHtNum2(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney2(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay2(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay2(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("3".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum3(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney3(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay3(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay3(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("4".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum4(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney4(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay4(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay4(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("5".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum5(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney5(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay5(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay5(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("6".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum6(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney6(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay6(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay6(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("7".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum7(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney7(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay7(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay7(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("8".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum8(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney8(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay8(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay8(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("9".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum9(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney9(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay9(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay9(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("10".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum10(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney10(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay10(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay10(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(selectAllCount.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("11".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum11(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney11(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay11(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay11(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("12".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum12(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney12(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay12(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay12(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("13".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum13(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney13(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay13(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay13(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("14".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum14(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney14(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay14(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay14(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("15".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum15(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney15(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay15(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay15(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("16".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum16(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney16(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay16(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay16(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("17".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum17(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney17(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay17(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay17(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("18".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum18(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney18(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay18(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay18(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			if("19".equals(tpCgauthority.getcSubitemid())) {
				itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
				itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
//				itemReportData.setHtNum19(selectAllCount.getHtNum());//签订合同数
//				itemReportData.setcGconmoney19(selectAllCount.getcGconmoney());//签订金额数
//				itemReportData.setYfPay19(selectAllCount.getYfPay());//已付金额
//				itemReportData.setWfPay19(selectAllCount.getWfPay());//未付金额
//				itemReportData.setcItemdes(ItemReport.getcItemdes());
//				itemReportData.setcSubitemid(ItemReport.getcSubitemid());
//				itemReportData.setcDepartment(ItemReport.getcDepartment());
			}
			listData.add(itemReportData);	
		}
		
		System.out.println("最终数据长度===="+listItemReportData.size());
		System.out.println("第二个数据的长度+++++++"+listData.size());
//		List<ItemReportData> itemReportDataList = new ArrayList<>();
//		BigDecimal zqingg = new BigDecimal(0);//总请购项
//		BigDecimal ycgx = new BigDecimal(0);//已采购项
//		BigDecimal wcgx = new BigDecimal(0);//未采购项
//		BigDecimal zcgjine = new BigDecimal(0);//采购总金额
//		for (TbItem tbItem : listTbItem) {
//			for (ItemReportData itemReportData : listItemReportData) {
//				if(tbItem.getcSubitemid().contains(itemReportData.getcSubitemid())) {
//					
//				}
//			}
//		}
		ItemReportResponse itemReportResponse = new ItemReportResponse();
		itemReportResponse.setListData(listData);
		itemReportResponse.setListItemReportData(listItemReportData);
//		List<ItemReportData> itemData = new ArrayList<>();
//		List<ItemReport> itemList = new ArrayList<>();
//		int i = 0;
//		int j = 0;
//		//先具体项目后公司查询对应的值
//		for (TbItem tbItem : selectAll) {
//			i++;
//			//统计具体项目的总请购项，已采购项，未采购项，采购总金额
//			ItemReportData selectItem = tpCgorderstMapper.selectItem(tbItem.getcDepartment());
//			selectItem.setcItemdes(tbItem.getcItemdes());
//			selectItem.setcSubitemid(tbItem.getcSubitemid());
//			selectItem.setcDepartment(tbItem.getcDepartment());
//			for (TpCgauthority tpCgauthority : selectSubitemidAll) {
//				j++;
//				String cDepartment = tbItem.getcDepartment();
//				String cSubitemid = tpCgauthority.getcSubitemid();
//				//具体项目、公司
//				ItemReport selectAllCount = tpCgcontractmtMapper.selectAllCount(cDepartment,cSubitemid);
//				System.out.println("总请购项：：：：："+selectAllCount.getzQgoux());
//				selectAllCount.setcItemdes(tbItem.getcItemdes());//项目所属部门
//				selectAllCount.setcSubitemid(tbItem.getcSubitemid());
//				selectAllCount.setcDepartment(tbItem.getcDepartment());
//				selectAllCount.setcCludecom(tpCgauthority.getcSubitemid());//公司编码
//				selectAllCount.setcSubitemdes(tbItem.getcSubitemdes());//公司名称
//				
//				/*if(selectAllCount !=null) {
//					ItemReportData changecSubitemdes = 
//					System.out.println("总请购项2：："+changecSubitemdes.getzQgoux());
//					listItemReportData.add(changecSubitemdes);
//				}*/
//				itemList.add(selectAllCount);
//				itemData.add(selectItem);
//				
//			}
//		}
//		System.out.println("具体项目循环::"+i);
//		System.out.println("公司循环:::"+j);
//		System.out.println("具体项目公司::::"+itemData.size());
//		System.out.println("具体项目::::"+ itemList.size());
//		return builder.data(listItemReportData).msg("查询成功").errcode(Errcode.Success).build();
		//项目的采购项，采购金额统计
//		List<ItemReport>  listItemReport = new ArrayList<>();
//		//查询具体项目及对应的统计总请购项，已采购项，未采购项，采购总金额
//		List<TbItem> selectAll = tbItemMapper.selectAll();
//		if(selectAll.isEmpty()) {
//			return builder.msg("无具体项目，请维护！！").errcode(Errcode.FailParameterError).build();
//		}
//		for (TbItem tbItem : selectAll) {
//			ItemReport itemReport = new ItemReport();
//			itemReport.setcItemdes(tbItem.getcItemdes());//项目所属部
//			itemReport.setcSubitemid(tbItem.getcSubitemid());//所属项目
//			itemReport.setcDepartment(tbItem.getcDepartment());//项目部门
//			//统计具体项目的总请购项，已采购项，未采购项，采购总金额
//			ItemReport selectItem = tpCgorderstMapper.selectItem(tbItem.getcDepartment());
//			itemReport.setzQgoux(selectItem.getzQgoux());//总请购项
//			itemReport.setyCgoux(selectItem.getyCgoux());//已采购项
//			itemReport.setwCgoux(selectItem.getwCgoux());//未采购项
//			itemReport.setzConmoney(selectItem.getzConmoney());//采购总金额
//			listItemReport.add(itemReport);
//		}
//		//签订公司所签合同情况
//		List<ItemReport> countAllCludecom = tpCgcontractmtMapper.countAllCludecom();
//		//获取签订公司描述
//		List<TpCgauthority> selectSubitemidAll = tpCgauthorityMapper.selectSubitemidAll2(cCludecom, "QDGS");
//		if(selectSubitemidAll.isEmpty()) {
//			return builder.msg("无此公司，请维护！！").errcode(Errcode.FailParameterError).build();
//		}
//		XxkUtil xxkUtil = new XxkUtil();
//		List<ItemReportData> changecSubitemdes = xxkUtil.changecSubitemdes(listItemReport,countAllCludecom,selectSubitemidAll); 
//		return  builder.data(changecSubitemdes).msg("查询成功").errcode(Errcode.Success).build();
		return  builder.data(itemReportResponse).msg("查询成功").errcode(Errcode.Success).build();
	}


	private BigDecimal isNull(BigDecimal bigDecimal) {
		// TODO Auto-generated method stub
		if(bigDecimal == null) {
			bigDecimal = new BigDecimal(0);
		}
		return bigDecimal;
	}


}

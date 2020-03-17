package code_fb_cg.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code_fb.mapper.CG_CK_Mapper;
import code_fb_cg.entity.ReportData;
import code_fb_cg.entity.StatisticalReport;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgorderstInfo;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.request.HompageObject;
import code_fb_cg.request.ReportDataRequest;
import code_fb_cg.response.HomePageResponse;
import code_fb_cg.response.HompageRequest;
import code_fb_cg.service.HomePageService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
/**
 * 首页serviceimpl
 * @author lhb
 * @时间：2019年3月5日下午3:45:27
 */
@Service
public class HomePageServiceImpl implements HomePageService{

	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private CG_CK_Mapper cgCkMapper;
	public ResponseObject<EmptyTag, HomePageResponse> selecttpCgordermtSum(
			RequestObject<EmptyTag, EmptyData> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse selecttpCgordermtSum = tpCgordermtMapper.selecttpCgordermtSum();
		return builder.data(selecttpCgordermtSum).errcode(Errcode.Success).build();
	}
	//无条件统计
	public ResponseObject<EmptyTag, HomePageResponse> selectContmtSum(
			RequestObject<EmptyTag, EmptyData> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse selectContmtSum = tpCgcontractmtMapper.selectContmtSum();
		return builder.data(selectContmtSum).errcode(Errcode.Success).build();
	}
	//有条件统计合同数量
	public ResponseObject<EmptyTag, HomePageResponse> selectContmtNum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse selectContmtNumBy = tpCgcontractmtMapper.selectContmtNumBy(requestObject.getData());
		return builder.data(selectContmtNumBy).errcode(Errcode.Success).build();
	}
	//已完成的合同数量
	public ResponseObject<EmptyTag, HomePageResponse> completedContSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse completedContSum = tpCgcontractmtMapper.completedContSum(requestObject.getData());
		return builder.data(completedContSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> arrGoodsSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse arrGoodsSum = tpCgcontractmtMapper.arrGoodsSum(requestObject.getData());
		return builder.data(arrGoodsSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> payContSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse payContSum = tpCgcontractmtMapper.payContSum(requestObject.getData());
		return builder.data(payContSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> kaipContSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse kaipContSum = tpCgcontractmtMapper.kaipContSum(requestObject.getData());
		return builder.data(kaipContSum).errcode(Errcode.Success).build();
	}
	
	public ResponseObject<EmptyTag, HomePageResponse> deplayContSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse deplayContSum = new HomePageResponse();
		List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.deplayContSum(requestObject.getData());
		int i = 0;
		int j = 0;
		for(TpCgcontractmt tmt : tmtlist) {
			int csw = Integer.parseInt(tmt.getcSw12().substring(0, tmt.getcSw12().lastIndexOf("天")));
			if(csw > 0) {
				i++;
			}
			if(csw < 0) {
				j++;
			}
		}
		deplayContSum.setTpCgcontractmtSum(i);
		deplayContSum.setTpCgcontractNum(j);
		return builder.data(deplayContSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> countContSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		// TODO Auto-generated method stub
		tpCgcontractmtMapper.countContSum(requestObject.getData());
		return null;
	}
	public ResponseObject<EmptyTag, HomePageResponse> tpCgorderstSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse tpCgorderstSum = tpCgorderstMapper.tpCgorderstSum(requestObject.getData());
		return builder.data(tpCgorderstSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> selecttpCgorderstSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HomePageResponse tpCgorderstSum = tpCgorderstMapper.selecttpCgorderstSum(requestObject.getData());
		return builder.data(tpCgorderstSum).errcode(Errcode.Success).build();
	}
	public ResponseObject<EmptyTag, HomePageResponse> yeartpCgorderstSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		List<TpCgorderst> listrst = tpCgorderstMapper.yeartpCgorderstSum(requestObject.getData());
		HomePageResponse yeartpCgorderstSum = new HomePageResponse();
//		int[] monthSum = new int[12];
//		int month = 0;
//		for(TpCgorderst rst : listrst) {
//			Date date = rst.getcCreatetime();
//			Calendar cal = Calendar.getInstance();
//			cal.setTime(date);
//			month = cal.get(Calendar.MONTH);
//			if(month == 0) {
//				monthSum[0]++;
//			}
//			if(month == 1) {
//				monthSum[1]++;
//			}
//			if(month == 2) {
//				monthSum[2]++;
//			}
//			if(month == 3) {
//				monthSum[3]++;
//			}
//			if(month == 4) {
//				monthSum[4]++;
//			}
//			if(month == 5) {
//				monthSum[5]++;
//			}
//			if(month == 6) {
//				monthSum[6]++;
//			}
//			if(month == 7) {
//				monthSum[7]++;
//			}
//			if(month == 8) {
//				monthSum[8]++;
//			}
//			if(month == 9) {
//				monthSum[9]++;
//			}
//			if(month == 10) {
//				monthSum[10]++;
//			}
//			if(month == 11) {
//				monthSum[11]++;
//			}			
//		}
//		System.out.println(monthSum);
		  
		//数据
		int [] monthSum  = new int[] {0,0,0,0,0,0,0,0,0,0,0,0};
//		//categories
//		int[]  monthNum = new int [12];

		List<HomePageResponse> yeartpCgorderstSum2 = tpCgorderstMapper.yeartpCgorderstSum2(requestObject.getData());
		int size = yeartpCgorderstSum2.size();
		System.out.println("长度：："+size);
		for (int j = 0; j < size; j++) {
			int monthNum1 = yeartpCgorderstSum2.get(j).getMonthNum()-1;
			monthSum[monthNum1] = yeartpCgorderstSum2.get(j).geteMonthSum();
//			monthNum[i] = yeartpCgorderstSum2.get(i).getMonthNum();
			System.out.println(monthSum[monthNum1]);
		}
		
		yeartpCgorderstSum.setMonthSum(monthSum);
//		yeartpCgorderstSum.setMonthdes(monthNum);
		return builder.data(yeartpCgorderstSum).errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> itemNameSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//		requestObject.getData().getHompageObject().get(0).getStartTime();
//		requestObject.getData().getHompageObject().get(0).getEndTime();
		List<TpCgorderstInfo> infoList = new ArrayList<>();
		for (String ItemName : requestObject.getData().getHompageObject().get(0).getItemName()) {
//			TpCgorderstInfo tpCgorderstInfo = new TpCgorderstInfo();
			List<TpCgorderstInfo> itemNameSum = tpCgorderstMapper.itemNameSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
					requestObject.getData().getHompageObject().get(0).getEndTime(),
					ItemName);
			itemNameSum.get(0).setItemName(ItemName);
			infoList.add(itemNameSum.get(0));
		}
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : infoList) {
			cNo++;
			tpCgorderstInfo.setcNo(cNo);
		}
		
		return builder.data(infoList).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> seacherManorQGXSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HompageObject hompageObject = requestObject.getData().getHompageObject().get(0);
		List<TpCgorderstInfo> seacherManorQGXSum = tpCgorderstMapper.seacherManorQGXSum(
				hompageObject.getStartTime(),
				hompageObject.getEndTime(), 
				hompageObject.getcManor());
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : seacherManorQGXSum) {
			cNo++;
			tpCgorderstInfo.setcNo(cNo);
			if("".equals(tpCgorderstInfo.getcManor())||tpCgorderstInfo.getcManor() == null) {
				tpCgorderstInfo.setNhtNum(0);
			}else {
				TpCgorderstInfo searchNht = tpCgcontractsttMapper.searchNht(tpCgorderstInfo,requestObject.getData().getHompageObject().get(0).getStartTime(),
						requestObject.getData().getHompageObject().get(0).getEndTime());
				tpCgorderstInfo.setNhtqgxNum(searchNht.getNhtqgxNum());
			}
			
			
		}
		return builder.data(seacherManorQGXSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> seacherSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderstInfo> seacherSum = tpCgorderstMapper.seacherSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
				requestObject.getData().getHompageObject().get(0).getEndTime());
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : seacherSum) {
			cNo++;
			TpCgorderstInfo searchNht = tpCgcontractsttMapper.searchNht(tpCgorderstInfo,requestObject.getData().getHompageObject().get(0).getStartTime(),
					requestObject.getData().getHompageObject().get(0).getEndTime());
			tpCgorderstInfo.setNhtqgxNum(searchNht.getNhtqgxNum());
			tpCgorderstInfo.setcNo(cNo);
		}
		return builder.data(seacherSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	//项目合同项
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> itemNameHTSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderstInfo> htInfo = new ArrayList<>();
		for (String ItemName : requestObject.getData().getHompageObject().get(0).getItemName()) {
			List<TpCgorderstInfo> itemNameHTSum = tpCgcontractmtMapper.itemNameHTSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
					requestObject.getData().getHompageObject().get(0).getEndTime(),
					ItemName);
			itemNameHTSum.get(0).setItemName(ItemName);
			htInfo.add(itemNameHTSum.get(0));
		}
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : htInfo) {
			cNo++;
			tpCgorderstInfo.setcNo(cNo);
		}
		return builder.data(htInfo).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	//合同项采购员
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> searchHTManorSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		HompageObject hompageObject = requestObject.getData().getHompageObject().get(0);
		List<TpCgorderstInfo> searchHTManorSum = tpCgcontractmtMapper.searchHTManorSum(
				hompageObject.getStartTime(),
				hompageObject.getEndTime(),
				hompageObject.getcManor());
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : searchHTManorSum) {
			cNo++;
			tpCgorderstInfo.setcNo(cNo);
		//统计拟合同中的合同数据
			TpCgorderstInfo searchNhtnum = tpCgcontractmttMapper.searchNhtnum(tpCgorderstInfo.getcManor(),requestObject.getData().getHompageObject().get(0).getStartTime(),
					requestObject.getData().getHompageObject().get(0).getEndTime());
			tpCgorderstInfo.setNhtNum(searchNhtnum.getNhtNum());
		}
		return builder.data(searchHTManorSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> searchHTSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgorderstInfo> searchHTSum = tpCgcontractmtMapper.searchHTSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
				requestObject.getData().getHompageObject().get(0).getEndTime());
		int cNo = 0;
		for (TpCgorderstInfo tpCgorderstInfo : searchHTSum) {
			cNo++;
			tpCgorderstInfo.setcNo(cNo);
		}
		return builder.data(searchHTSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> searchXFSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		 List<TpCgorderstInfo> searchXFSum = tpCgcontractmtMapper.searchXFSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
				requestObject.getData().getHompageObject().get(0).getEndTime());
		 int cNo = 0;
			for (TpCgorderstInfo tpCgorderstInfo : searchXFSum) {
				cNo++;
				tpCgorderstInfo.setcNo(cNo);
			}
			return builder.data(searchXFSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, HomePageResponse> searchCCSum(
			RequestObject<EmptyTag, HompageRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		 List<TpCgorderstInfo> searchXFSum = cgCkMapper.searchCCSum(requestObject.getData().getHompageObject().get(0).getStartTime(),
				requestObject.getData().getHompageObject().get(0).getEndTime());
		 int cNo = 0;
			for (TpCgorderstInfo tpCgorderstInfo : searchXFSum) {
				cNo++;
				tpCgorderstInfo.setcNo(cNo);
			}
			return builder.data(searchXFSum).msg("查询成功！！！").errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, StatisticalReport> reportform(
			RequestObject<EmptyTag, ReportDataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String year  = requestObject.getData().getYear();
		String[] cManor = requestObject.getData().getcManor();
		if(cManor.length == 0) {
			return builder.msg("请选择采购员").errcode(Errcode.FailParameterError).build();
		}
		List<TpCgauthority> selectSubitemidAll = tpCgauthorityMapper.selectSubitemidAll(cManor, "CGY");
		System.out.println("汇总结果钱长度:::"+selectSubitemidAll.size());
		List<ReportData> reportlist;
		List<StatisticalReport> statisticalReport = new ArrayList<StatisticalReport>();
		StatisticalReport port = new StatisticalReport();
		for (int i = 0; i < selectSubitemidAll.size(); i++) {
			if(i > 0 && !selectSubitemidAll.get(i-1).getcGroup().equals(selectSubitemidAll.get(i).getcGroup())) {
				port.setcManor("汇总");
				port.setGroup(selectSubitemidAll.get(i-1).getcGroup()+"-汇总");
				statisticalReport.add(port);
				port = new StatisticalReport();
			}
			StatisticalReport report = new StatisticalReport();
			report.setcManor(selectSubitemidAll.get(i).getcSubitemid());
			report.setGroup(selectSubitemidAll.get(i).getcGroup());
			reportlist =tpCgorderstMapper.selectMonthAdd(year, selectSubitemidAll.get(i).getcSubitemid());
			if(reportlist.size() > 0) {
				report.setMonthAdd(reportlist.get(0).getMonthAdd());
				report.setTwAdd(reportlist.get(0).getTwAdd());
				if(reportlist.get(0).getMonthAdd() != null) {
					if(port.getMonthAdd() != null) {
						port.setMonthAdd(Integer.parseInt(port.getMonthAdd()) + Integer.parseInt(reportlist.get(0).getMonthAdd()) + "");
					}else {
						port.setMonthAdd(reportlist.get(0).getMonthAdd());
					}
				}
				if(reportlist.get(0).getTwAdd() != null) {
					if(port.getTwAdd() != null) {
						port.setTwAdd(Integer.parseInt(port.getTwAdd()) + Integer.parseInt(reportlist.get(0).getTwAdd()) + "");
					}else {
						port.setTwAdd(reportlist.get(0).getTwAdd());
					}
				}
			}
			reportlist =tpCgorderstMapper.selectMonthProcure(year, selectSubitemidAll.get(i).getcSubitemid());
			if(reportlist.size() > 0) {
				for (ReportData reportdata : reportlist) {
					if("01".equals(reportdata.getMonth())) {
						report.setMonth1(reportdata.getMonth());
						report.setMonthProcure1(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure1() == null) {
								port.setMonthProcure1(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure1(Integer.parseInt(port.getMonthProcure1()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
						
					}
					if("02".equals(reportdata.getMonth())) {
						report.setMonth2(reportdata.getMonth());
						report.setMonthProcure2(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure2() == null) {
								port.setMonthProcure2(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure2(Integer.parseInt(port.getMonthProcure2()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("03".equals(reportdata.getMonth())) {
						report.setMonth3(reportdata.getMonth());
						report.setMonthProcure3(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure3() == null) {
								port.setMonthProcure3(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure3(Integer.parseInt(port.getMonthProcure3()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("04".equals(reportdata.getMonth())) {
						report.setMonth4(reportdata.getMonth());
						report.setMonthProcure4(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure4() == null) {
								port.setMonthProcure4(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure4(Integer.parseInt(port.getMonthProcure4()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("05".equals(reportdata.getMonth())) {
						report.setMonth5(reportdata.getMonth());
						report.setMonthProcure5(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure5() == null) {
								port.setMonthProcure5(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure5(Integer.parseInt(port.getMonthProcure5()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("06".equals(reportdata.getMonth())) {
						report.setMonth6(reportdata.getMonth());
						report.setMonthProcure6(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure6() == null) {
								port.setMonthProcure6(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure6(Integer.parseInt(port.getMonthProcure6()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("07".equals(reportdata.getMonth())) {
						report.setMonth7(reportdata.getMonth());
						report.setMonthProcure7(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure7() == null) {
								port.setMonthProcure7(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure7(Integer.parseInt(port.getMonthProcure7()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("08".equals(reportdata.getMonth())) {
						report.setMonth8(reportdata.getMonth());
						report.setMonthProcure8(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure8() == null) {
								port.setMonthProcure8(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure8(Integer.parseInt(port.getMonthProcure8()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("09".equals(reportdata.getMonth())) {
						report.setMonth9(reportdata.getMonth());
						report.setMonthProcure9(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure9() == null) {
								port.setMonthProcure9(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure9(Integer.parseInt(port.getMonthProcure9()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("10".equals(reportdata.getMonth())) {
						report.setMonth10(reportdata.getMonth());
						report.setMonthProcure10(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure10() == null) {
								port.setMonthProcure10(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure10(Integer.parseInt(port.getMonthProcure10()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("11".equals(reportdata.getMonth())) {
						report.setMonth11(reportdata.getMonth());
						report.setMonthProcure11(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure11() == null) {
								port.setMonthProcure11(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure11(Integer.parseInt(port.getMonthProcure11()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
					if("12".equals(reportdata.getMonth())) {
						report.setMonth12(reportdata.getMonth());
						report.setMonthProcure12(reportdata.getMonthProcure());
						if(reportdata.getMonthProcure() != null) {
							if(port.getMonthProcure12() == null) {
								port.setMonthProcure12(reportdata.getMonthProcure());
							}else {
								port.setMonthProcure12(Integer.parseInt(port.getMonthProcure12()) + Integer.parseInt(reportdata.getMonthProcure()) + "");
							}
						}
					}
				}
			}
			
			reportlist = tpCgorderstMapper.selectTwProcure(year, selectSubitemidAll.get(i).getcSubitemid());			
			if(reportlist.size() > 0) {
				for (ReportData reportdata : reportlist) {
					if("01".equals(reportdata.getMonth())) {
						report.setMonth1(reportdata.getMonth());
						report.setTwProcure1(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure1() == null) {
								port.setTwProcure1(reportdata.getTwProcure());
							}else {
								port.setTwProcure1(Integer.parseInt(port.getTwProcure1()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {//这是算 总的每周采购
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("02".equals(reportdata.getMonth())) {
						report.setMonth2(reportdata.getMonth());
						report.setTwProcure2(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure2() == null) {
								port.setTwProcure2(reportdata.getTwProcure());
							}else {
								port.setTwProcure2(Integer.parseInt(port.getTwProcure2()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("03".equals(reportdata.getMonth())) {
						report.setMonth3(reportdata.getMonth());
						report.setTwProcure3(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure3() == null) {
								port.setTwProcure3(reportdata.getTwProcure());
							}else {
								port.setTwProcure3(Integer.parseInt(port.getTwProcure3()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("04".equals(reportdata.getMonth())) {
						report.setMonth4(reportdata.getMonth());
						report.setTwProcure4(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure4() == null) {
								port.setTwProcure4(reportdata.getTwProcure());
							}else {
								port.setTwProcure4(Integer.parseInt(port.getTwProcure4()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("05".equals(reportdata.getMonth())) {
						report.setMonth5(reportdata.getMonth());
						report.setTwProcure5(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure5() == null) {
								port.setTwProcure5(reportdata.getTwProcure());
							}else {
								port.setTwProcure5(Integer.parseInt(port.getTwProcure5()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("06".equals(reportdata.getMonth())) {
						report.setMonth6(reportdata.getMonth());
						report.setTwProcure6(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure6() == null) {
								port.setTwProcure6(reportdata.getTwProcure());
							}else {
								port.setTwProcure6(Integer.parseInt(port.getTwProcure6()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("07".equals(reportdata.getMonth())) {
						report.setMonth7(reportdata.getMonth());
						report.setTwProcure7(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure7() == null) {
								port.setTwProcure7(reportdata.getTwProcure());
							}else {
								port.setTwProcure7(Integer.parseInt(port.getTwProcure7()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("08".equals(reportdata.getMonth())) {
						report.setMonth8(reportdata.getMonth());
						report.setTwProcure8(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure8() == null) {
								port.setTwProcure8(reportdata.getTwProcure());
							}else {
								port.setTwProcure8(Integer.parseInt(port.getTwProcure8()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("09".equals(reportdata.getMonth())) {
						report.setMonth9(reportdata.getMonth());
						report.setTwProcure9(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure9() == null) {
								port.setTwProcure9(reportdata.getTwProcure());
							}else {
								port.setTwProcure9(Integer.parseInt(port.getTwProcure9()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("10".equals(reportdata.getMonth())) {
						report.setMonth10(reportdata.getMonth());
						report.setTwProcure10(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure10() == null) {
								port.setTwProcure10(reportdata.getTwProcure());
							}else {
								port.setTwProcure10(Integer.parseInt(port.getTwProcure10()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("11".equals(reportdata.getMonth())) {
						report.setMonth11(reportdata.getMonth());
						report.setTwProcure11(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure11() == null) {
								port.setTwProcure11(reportdata.getTwProcure());
							}else {
								port.setTwProcure11(Integer.parseInt(port.getTwProcure11()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
					if("12".equals(reportdata.getMonth())) {
						report.setMonth12(reportdata.getMonth());
						report.setTwProcure12(reportdata.getTwProcure());
						if(reportdata.getTwProcure() != null) {
							if(port.getTwProcure12() == null) {
								port.setTwProcure12(reportdata.getTwProcure());
							}else {
								port.setTwProcure12(Integer.parseInt(port.getTwProcure12()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}
							if(report.getTotalPurchase() != null) {
								report.setTotalPurchase(Integer.parseInt(report.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								report.setTotalPurchase(reportdata.getTwProcure());
							}
							if(port.getTotalPurchase() != null) {//这是算 汇总的 总的每周采购
								port.setTotalPurchase(Integer.parseInt(port.getTotalPurchase()) + Integer.parseInt(reportdata.getTwProcure()) + "");
							}else {
								port.setTotalPurchase(reportdata.getTwProcure());
							}
						}
					}
				}
			}
			
			reportlist =tpCgorderstMapper.selectNotProcure(year, selectSubitemidAll.get(i).getcSubitemid());
			if(reportlist.size() > 0) {
				for (ReportData reportdata : reportlist) {
					if("01".equals(reportdata.getMonth())) {
						report.setMonth1(reportdata.getMonth());
						report.setBKNotP1(reportdata.getBKNotP());
						report.setSKNotP1(reportdata.getSKNotP());
						report.setIndiaNotP1(reportdata.getIndiaNotP());
						report.setdNotP1(reportdata.getdNotP());
						report.setNotP1(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP1() != null) {
								port.setNotP1(Integer.parseInt(port.getNotP1()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP1(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP1() != null) {
								port.setBKNotP1(Integer.parseInt(port.getBKNotP1()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP1(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP1() != null) {
								port.setSKNotP1(Integer.parseInt(port.getSKNotP1()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP1(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP1() != null) {
								port.setIndiaNotP1(Integer.parseInt(port.getIndiaNotP1()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP1(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP1() != null) {
								port.setdNotP1(Integer.parseInt(port.getdNotP1()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP1(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("02".equals(reportdata.getMonth())) {
						report.setMonth2(reportdata.getMonth());
						report.setBKNotP2(reportdata.getBKNotP());
						report.setSKNotP2(reportdata.getSKNotP());
						report.setIndiaNotP2(reportdata.getIndiaNotP());
						report.setdNotP2(reportdata.getdNotP());
						report.setNotP2(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP2() != null) {
								port.setNotP2(Integer.parseInt(port.getNotP2()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP2(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP2() != null) {
								port.setBKNotP2(Integer.parseInt(port.getBKNotP2()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP2(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP2() != null) {
								port.setSKNotP2(Integer.parseInt(port.getSKNotP2()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP2(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP2() != null) {
								port.setIndiaNotP2(Integer.parseInt(port.getIndiaNotP2()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP2(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP2() != null) {
								port.setdNotP2(Integer.parseInt(port.getdNotP2()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP2(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("03".equals(reportdata.getMonth())) {
						report.setMonth3(reportdata.getMonth());
						report.setBKNotP3(reportdata.getBKNotP());
						report.setSKNotP3(reportdata.getSKNotP());
						report.setIndiaNotP3(reportdata.getIndiaNotP());
						report.setdNotP3(reportdata.getdNotP());
						report.setNotP3(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP3() != null) {
								port.setNotP3(Integer.parseInt(port.getNotP3()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP3(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP3() != null) {
								port.setBKNotP3(Integer.parseInt(port.getBKNotP3()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP3(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP3() != null) {
								port.setSKNotP3(Integer.parseInt(port.getSKNotP3()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP3(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP3() != null) {
								port.setIndiaNotP3(Integer.parseInt(port.getIndiaNotP3()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP3(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP3() != null) {
								port.setdNotP3(Integer.parseInt(port.getdNotP3()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP3(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("04".equals(reportdata.getMonth())) {
						report.setMonth4(reportdata.getMonth());
						report.setBKNotP4(reportdata.getBKNotP());
						report.setSKNotP4(reportdata.getSKNotP());
						report.setIndiaNotP4(reportdata.getIndiaNotP());
						report.setdNotP4(reportdata.getdNotP());
						report.setNotP4(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP4() != null) {
								port.setNotP4(Integer.parseInt(port.getNotP4()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP4(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP4() != null) {
								port.setBKNotP4(Integer.parseInt(port.getBKNotP4()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP4(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP4() != null) {
								port.setSKNotP4(Integer.parseInt(port.getSKNotP4()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP4(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP4() != null) {
								port.setIndiaNotP4(Integer.parseInt(port.getIndiaNotP4()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP4(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP4() != null) {
								port.setdNotP4(Integer.parseInt(port.getdNotP4()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP4(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("05".equals(reportdata.getMonth())) {
						report.setMonth5(reportdata.getMonth());
						report.setBKNotP5(reportdata.getBKNotP());
						report.setSKNotP5(reportdata.getSKNotP());
						report.setIndiaNotP5(reportdata.getIndiaNotP());
						report.setdNotP5(reportdata.getdNotP());
						report.setNotP5(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP5() != null) {
								port.setNotP5(Integer.parseInt(port.getNotP5()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP5(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP5() != null) {
								port.setBKNotP5(Integer.parseInt(port.getBKNotP5()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP5(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP5() != null) {
								port.setSKNotP5(Integer.parseInt(port.getSKNotP5()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP5(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP5() != null) {
								port.setIndiaNotP5(Integer.parseInt(port.getIndiaNotP5()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP5(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP5() != null) {
								port.setdNotP5(Integer.parseInt(port.getdNotP5()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP5(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("06".equals(reportdata.getMonth())) {
						report.setMonth6(reportdata.getMonth());
						report.setBKNotP6(reportdata.getBKNotP());
						report.setSKNotP6(reportdata.getSKNotP());
						report.setIndiaNotP6(reportdata.getIndiaNotP());
						report.setdNotP6(reportdata.getdNotP());
						report.setNotP6(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP6() != null) {
								port.setNotP6(Integer.parseInt(port.getNotP6()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP6(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP6() != null) {
								port.setBKNotP6(Integer.parseInt(port.getBKNotP6()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP6(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP6() != null) {
								port.setSKNotP6(Integer.parseInt(port.getSKNotP6()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP6(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP6() != null) {
								port.setIndiaNotP6(Integer.parseInt(port.getIndiaNotP6()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP6(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP6() != null) {
								port.setdNotP6(Integer.parseInt(port.getdNotP6()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP6(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("07".equals(reportdata.getMonth())) {
						report.setMonth7(reportdata.getMonth());
						report.setBKNotP7(reportdata.getBKNotP());
						report.setSKNotP7(reportdata.getSKNotP());
						report.setIndiaNotP7(reportdata.getIndiaNotP());
						report.setdNotP7(reportdata.getdNotP());
						report.setNotP7(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP7() != null) {
								port.setNotP7(Integer.parseInt(port.getNotP7()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP7(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP7() != null) {
								port.setBKNotP7(Integer.parseInt(port.getBKNotP7()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP7(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP7() != null) {
								port.setSKNotP7(Integer.parseInt(port.getSKNotP7()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP7(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP7() != null) {
								port.setIndiaNotP7(Integer.parseInt(port.getIndiaNotP7()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP7(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP7() != null) {
								port.setdNotP7(Integer.parseInt(port.getdNotP7()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP7(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("08".equals(reportdata.getMonth())) {
						report.setMonth8(reportdata.getMonth());
						report.setBKNotP8(reportdata.getBKNotP());
						report.setSKNotP8(reportdata.getSKNotP());
						report.setIndiaNotP8(reportdata.getIndiaNotP());
						report.setdNotP8(reportdata.getdNotP());
						report.setNotP8(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP8() != null) {
								port.setNotP8(Integer.parseInt(port.getNotP8()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP8(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP8() != null) {
								port.setBKNotP8(Integer.parseInt(port.getBKNotP8()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP8(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP8() != null) {
								port.setSKNotP8(Integer.parseInt(port.getSKNotP8()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP8(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP8() != null) {
								port.setIndiaNotP8(Integer.parseInt(port.getIndiaNotP8()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP8(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP8() != null) {
								port.setdNotP8(Integer.parseInt(port.getdNotP8()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP8(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("09".equals(reportdata.getMonth())) {
						report.setMonth9(reportdata.getMonth());
						report.setBKNotP9(reportdata.getBKNotP());
						report.setSKNotP9(reportdata.getSKNotP());
						report.setIndiaNotP9(reportdata.getIndiaNotP());
						report.setdNotP9(reportdata.getdNotP());
						report.setNotP9(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP9() != null) {
								port.setNotP9(Integer.parseInt(port.getNotP9()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP9(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP9() != null) {
								port.setBKNotP9(Integer.parseInt(port.getBKNotP9()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP9(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP9() != null) {
								port.setSKNotP9(Integer.parseInt(port.getSKNotP9()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP9(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP9() != null) {
								port.setIndiaNotP9(Integer.parseInt(port.getIndiaNotP9()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP9(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP9() != null) {
								port.setdNotP9(Integer.parseInt(port.getdNotP9()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP9(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("10".equals(reportdata.getMonth())) {
						report.setMonth10(reportdata.getMonth());
						report.setBKNotP10(reportdata.getBKNotP());
						report.setSKNotP10(reportdata.getSKNotP());
						report.setIndiaNotP10(reportdata.getIndiaNotP());
						report.setdNotP10(reportdata.getdNotP());
						report.setNotP10(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP10() != null) {
								port.setNotP10(Integer.parseInt(port.getNotP10()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP10(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP10() != null) {
								port.setBKNotP10(Integer.parseInt(port.getBKNotP10()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP10(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP10() != null) {
								port.setSKNotP10(Integer.parseInt(port.getSKNotP10()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP10(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP10() != null) {
								port.setIndiaNotP10(Integer.parseInt(port.getIndiaNotP10()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP10(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP10() != null) {
								port.setdNotP10(Integer.parseInt(port.getdNotP10()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP10(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("11".equals(reportdata.getMonth())) {
						report.setMonth11(reportdata.getMonth());
						report.setBKNotP11(reportdata.getBKNotP());
						report.setSKNotP11(reportdata.getSKNotP());
						report.setIndiaNotP11(reportdata.getIndiaNotP());
						report.setdNotP11(reportdata.getdNotP());
						report.setNotP11(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP11() != null) {
								port.setNotP11(Integer.parseInt(port.getNotP11()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP11(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP11() != null) {
								port.setBKNotP11(Integer.parseInt(port.getBKNotP11()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP11(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP11() != null) {
								port.setSKNotP11(Integer.parseInt(port.getSKNotP11()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP11(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP11() != null) {
								port.setIndiaNotP11(Integer.parseInt(port.getIndiaNotP11()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP11(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP11() != null) {
								port.setdNotP11(Integer.parseInt(port.getdNotP11()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP11(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
					if("12".equals(reportdata.getMonth())) {
						report.setMonth12(reportdata.getMonth());
						report.setBKNotP12(reportdata.getBKNotP());
						report.setSKNotP12(reportdata.getSKNotP());
						report.setIndiaNotP12(reportdata.getIndiaNotP());
						report.setdNotP12(reportdata.getdNotP());
						report.setNotP12(reportdata.getNotP());
						if(reportdata.getNotP() != null) {
							if(port.getNotP12() != null) {
								port.setNotP12(Integer.parseInt(port.getNotP12()) + Integer.parseInt(reportdata.getNotP()) + "");
							}else {
								port.setNotP12(reportdata.getNotP());
							}
						}
						if(reportdata.getBKNotP() != null) {
							if(port.getBKNotP12() != null) {
								port.setBKNotP12(Integer.parseInt(port.getBKNotP12()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setBKNotP12(reportdata.getBKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getBKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getBKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getBKNotP());
							}
						}
						if(reportdata.getSKNotP() != null) {
							if(port.getSKNotP12() != null) {
								port.setSKNotP12(Integer.parseInt(port.getSKNotP12()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setSKNotP12(reportdata.getSKNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getSKNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getSKNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getSKNotP());
							}
						}
						if(reportdata.getIndiaNotP() != null) {
							if(port.getIndiaNotP12() != null) {
								port.setIndiaNotP12(Integer.parseInt(port.getIndiaNotP12()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setIndiaNotP12(reportdata.getIndiaNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getIndiaNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getIndiaNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getIndiaNotP());
							}
						}
						if(reportdata.getdNotP() != null) {
							if(port.getdNotP12() != null) {
								port.setdNotP12(Integer.parseInt(port.getdNotP12()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setdNotP12(reportdata.getdNotP());
							}
							if(report.getTotalUnpu() != null) {
								report.setTotalUnpu(Integer.parseInt(report.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								report.setTotalUnpu(reportdata.getdNotP());
							}
							if(port.getTotalUnpu() != null) {//汇总的 未采购的和
								port.setTotalUnpu(Integer.parseInt(port.getTotalUnpu()) + Integer.parseInt(reportdata.getdNotP()) + "");
							}else {
								port.setTotalUnpu(reportdata.getdNotP());
							}
						}
					}
				}
			}
//			System.out.println("汇总结果：："+port.getGroup());
			statisticalReport.add(report);
			if(i == selectSubitemidAll.size()-1) {
				port.setcManor("汇总");
				port.setGroup(selectSubitemidAll.get(i).getcGroup()+"-汇总");
				statisticalReport.add(port);
			}
			
		}
		System.out.println("汇总结果长度:::"+statisticalReport.size());
		for (StatisticalReport statisticalReport2 : statisticalReport) {
			System.out.println("汇总结果:::"+statisticalReport2.getGroup());
		}
		return builder.data(statisticalReport).msg("查询成功！！！").errcode(Errcode.Success).build();
	}

}

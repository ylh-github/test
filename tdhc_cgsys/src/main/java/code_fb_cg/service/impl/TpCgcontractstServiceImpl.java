package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_CK_M1S1;
import code_fb.mapper.CG_CK_Mapper;
import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.mapper.TbGuildataMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ShipM1s1Q;
import code_fb_cg.request.Xxk_Cont_Request;
import code_fb_cg.response.DeCgMaterials;
import code_fb_cg.service.TpCgcontractmttService;
import code_fb_cg.service.TpCgcontractstService;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("tpCgcontractstService")
public class TpCgcontractstServiceImpl implements TpCgcontractstService {

	@Autowired
	@Qualifier("cgCkMapper")
	public CG_CK_Mapper cgckMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TbGuildataMapper tbGuildataMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgcontractst>> selectByConST(
			RequestObject<EmptyTag, List<TpCgcontractmt>> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractst st = new TpCgcontractst();
		st.setcConnum(requestObject.getData().get(0).getcConnum());
		List<TpCgcontractst> mt = tpCgcontractstMapper.selectByConST(st);
		if (mt.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(mt).errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgcontractst>> selectForShip(
			RequestObject<EmptyTag, ShipM1s1Q> requestObject) {
		// TODO 出船记录中查询合同物资
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> mt = tpCgcontractstMapper.selectForShip(requestObject.getData());
		if (mt.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(mt).errcode(Errcode.Success).msg("查询成功").build();
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractst>> ExcelConSt(RequestObject<EmptyTag, ExcelCONST> requestObject)
			throws Exception {
		// TODO 合同物资对应请购单物资导入
		@SuppressWarnings("rawtypes")
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		BIGString bigs = new BIGString();
		// List<TpCgcontractmt> mtlist = requestObject.getData().getStList();//选中的合同物资
		// 根据合同号查询该合同所有的物资数据
		// List<TpCgcontractst> stlist =
		// tpCgcontractstMapper.selectByCountSt(mtlist.get(0).getcConnum());
		
		List<TpCgcontractst> excel = new ArrayList<TpCgcontractst>();// excel表中有合同行号的数据数据
		List<TpCgcontractst> tstlist = new ArrayList<TpCgcontractst>();// excel表中没有合同行号的数据数据
		for (TpCgcontractst tpCgcontractst : requestObject.getData().getExcel()) {
			if(tpCgcontractst.getcConline() != null) {
				excel.add(tpCgcontractst);
			}else {
				tstlist.add(tpCgcontractst);
			}
		}
		if(tstlist.size() > 0) {
			List<TpCgcontractmt> mtlist = tpCgcontractmtMapper.selectByConnum(tstlist.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
					""));
			if(mtlist.size() == 0) {
				return builder.msg("请输入正确合同号！！！").errcode(Errcode.FailParameterError).build();
			}
			List<TpCgcontractst> tst1  = tpCgcontractstMapper.selectByColine(tstlist.get(0).getcConnum());
			List<TpCgcontractst> tst2  = tpCgcontractstMapper.selectByCountState(tstlist.get(0).getcConnum());		
			int len = 0;
			int len1;
			int len2;
			if(tst2.size() == 0 && tst1.size() > 0){	
				if(tst1.get((tst1.size()-1)).getcConline().length() > 5) {
					len = Integer.parseInt(tst1.get((tst1.size()-1)).getcConline().substring(0, 5));
				}else {
					len = Integer.parseInt(tst1.get((tst1.size()-1)).getcConline());
				}
			}else if(tst2.size() > 0 && tst1.size() == 0){
				if(tst2.get((tst2.size()-1)).getcConline().length() > 5) {
					len2 = Integer.parseInt(tst2.get((tst2.size()-1)).getcConline().substring(0, 5));
				}else {
					len2 = Integer.parseInt(tst2.get((tst2.size()-1)).getcConline());
				}
			}else if(tst2.size() > 0 && tst1.size() > 0){
				if(tst2.get((tst2.size()-1)).getcConline().length() > 5) {
					len2 = Integer.parseInt(tst2.get((tst2.size()-1)).getcConline().substring(0, 5));
				}else {
					len2 = Integer.parseInt(tst2.get((tst2.size()-1)).getcConline());
				}
				if(tst1.get((tst1.size()-1)).getcConline().length() > 5) {
					len1 = Integer.parseInt(tst1.get((tst1.size()-1)).getcConline().substring(0, 5));//已有物资合同行号的数字格式
				}else {
					len1 = Integer.parseInt(tst1.get((tst1.size()-1)).getcConline());//已有物资合同行号的数字格式
				}
				if(len1 > len2) {
					len = len1;
				}else {
					len = len2;
				}
			}
			for (TpCgcontractst tpCgcontractst : tstlist) {
				if (len == 0) {
					tpCgcontractst.setcConline("00001");
				}
				if (len < 10) {
					// 合同行号
					if ((len + 1) == 10) {
						tpCgcontractst.setcConline("000" + String.valueOf(len + 1));
					} else {
						tpCgcontractst.setcConline("0000" + String.valueOf(len + 1));
					}
				}
				if (len > 9 && len < 100) {
					// 合同行号
					if ((len + 1) == 100) {
						tpCgcontractst.setcConline("00" + String.valueOf(len + 1));
					} else {
						tpCgcontractst.setcConline("000" + String.valueOf(len + 1));
					}
				}
				if (len > 99 && len < 1000) {
					// 合同行号
					if ((len + 1) == 1000) {
						tpCgcontractst.setcConline("0" + String.valueOf(len + 1));
					} else {
						tpCgcontractst.setcConline("00" + String.valueOf(len + 1));
					}
				}
				if (len > 999 && len < 10000) {
					// 合同行号
					tpCgcontractst.setcConline("0" + String.valueOf(len + 1));
				}
				tpCgcontractst.setcMtid(mtlist.get(0).getcId());
				tpCgcontractst.setcState("3");
				tpCgcontractst.setcSw08(tpCgcontractst.getcGoodsname());//报关物资名称
				tpCgcontractst.setcCuspec(tpCgcontractst.getcSpec());//规格型号
				tpCgcontractst.setcUnitspec(tpCgcontractst.getcUnit());//单位
				tpCgcontractst.setcResiduenum(tpCgcontractst.getcGoodsnum());//剩余数量
				tpCgcontractst.setcGroudtotalnum("0");
				tpCgcontractst.setcCreatetime(new Date());
				int row = tpCgcontractstMapper.insertSelective(tpCgcontractst);
				if (row == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
				}
				len++;
			}
		}
		if(excel.size() > 0) {
			List<TpCgcontractst> hblist = new ArrayList<TpCgcontractst>();// 用来存放需要合并没有备注的导入信息
			List<TpCgcontractst> remark = new ArrayList<TpCgcontractst>();// 用来存放需要合并有备注的导入信息
			int s = excel.size();
			for (int i = 0; i < s; i++) {
				// 进行三步判断确定下来（合同号、合同行号、原货物名称）不能为空
				// 第一步判断合同号不能为空
				if (excel.get(i).getcConnum() == null) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号】不能为空").errcode(Errcode.FailParameterError)
							.build();
				}
				// 第二步判断合同行号不能为空
				if (excel.get(i).getcConline() == null) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同行号】不能为空").errcode(Errcode.FailParameterError)
							.build();
				}
				// 第三步判断原货物名称不能为空
				if (excel.get(i).getyGoodsname() == null) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【原物资名称】不能为空").errcode(Errcode.FailParameterError)
							.build();
				}
				if(excel.get(i).getcGoodsnum() != null && !BIGString.isNumeric(excel.get(i).getcGoodsnum().trim())) {
					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【购买数量】不是数字").errcode(Errcode.FailParameterError)
							.build();
				}
				if(excel.get(i).getcUnit() != null && BIGString.isNumeric(excel.get(i).getcUnit().trim())) {
					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【单位】不正确").errcode(Errcode.FailParameterError)
							.build();
				}
				//判断单位不能为空以及单位正确
//				if(excel.get(i).getcUnit() == null) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【单位】不能为空").errcode(Errcode.FailParameterError)
//							.build();
//				}else {
//					String dw = excel.get(i).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//					if(thority == null) {
//						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return builder.errcode(Errcode.FailParameterError).msg("导入Excel表中第-" + (i + 2) + "-行," + "【单位】不正确，请重新确认").build();
//					}
//				}
				TpCgcontractst st = new TpCgcontractst();// 实例化对象
				// 根据excel表中的(原名称、原规格、合同号、合同行号)查询合同物资中的请购单物资数据
				String spec = excel.get(i).getYcSpec();
				if (spec != null) {
					// 判断导入Excel中是否存在需要合并数据
					if (!excel.get(i).getYcSpec().equals("合并")) {
						// 将不需要合并的数据进行查询（根据合同号、合同行号、物资名称、规格型号查询该合同物资是否存在）
						TpCgcontractst conList = tpCgcontractstMapper.selForGoodsnameAndSpec(
								excel.get(i).getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""),
								excel.get(i).getYcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""),
								excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""),
								excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										""));
						// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
						if (conList == null) {
							// 如果该物资没有找到 那么进行进一步判断
							// 1.1首先判断合同行号是否正确
							List<TpCgcontractst> CShh = tpCgcontractstMapper.selNAMEASPECANUMALINE(excel.get(i).getcConnum()
									.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null, null, null);
							if (CShh.size() == 0) {
								// 1.1.1根据合同号没查询到物资
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号：错误】")
										.errcode(Errcode.FailParameterError).build();
							} else {
								// 1.1.2根据合同号查询到了物资，则进行进一步判断
								List<TpCgcontractst> CShthAhh = tpCgcontractstMapper.selNAMEASPECANUMALINE(
										excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
												.replaceAll("[\\n]", ""),
										excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
												.replaceAll("[\\n]", ""),
										null, null);
								if (CShthAhh.size() == 0) {
									// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
									TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
									return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同行号：错误】")
											.errcode(Errcode.FailParameterError).build();
								} else {
									// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
									if (CShthAhh.size() == 1) {
										// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
										if (!CShthAhh.get(0).getcGoodsname().equals(excel.get(i).getyGoodsname()
												.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
											TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
											return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【原货物名称：错误】")
													.errcode(Errcode.FailParameterError).build();
										}
										if(CShthAhh.get(0).getcSpec() != null && CShthAhh.get(0).getcSpec() != "") {										
											if (!CShthAhh.get(0).getcSpec().equals(excel.get(i).getYcSpec().replaceAll(" ", "")
													.replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
												TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
												return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【原规格型号：错误】")
														.errcode(Errcode.FailParameterError).build();
											}
										}
									}
								}
							}
						} else {
							st.setcMtid(
									conList.getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							st.setcGoodsname(excel.get(i).getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "") + "<"
									+ excel.get(i).getYcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", "")
									+ ">");// 物资名称
							st.setcSw08(excel.get(i).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));// 报关物资名称
							if (excel.get(i).getcSpec() == null) {
								st.setcSpec(null);
							} else {
								st.setcSpec(excel.get(i).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}
							st.setcUnit(excel.get(i).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							if ((i + 1) < 10) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A000" + (i + 1));
							}
							if (10 <= (i + 1) && (i + 1) < 100) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A00" + (i + 1));
							}
							if (100 <= (i + 1) && (i + 1) < 1000) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A0" + (i + 1));
							}
							if (1000 <= (i + 1) && (i + 1) < 10000) {
								st.setcConline(conList.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-A" + (i + 1));
							}
							st.setcGoodsnum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							st.setcGroudtotalnum("0");
							st.setcResiduenum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							st.setcArrallyorn("0");
							if(excel.get(i).getcRemark()==null) {
								st.setcRemark(null);
							}else {
								if(conList.getcRemark() == null || "null".equals(conList.getcRemark()) || excel.get(i).getcRemark().equals(conList.getcRemark())) {
									st.setcRemark(excel.get(i).getcRemark());
								}else {
									st.setcRemark(excel.get(i).getcRemark() +" "+ conList.getcRemark());
								}
							}
							st.setcState("3");
							st.setcCheckyorn("0");
							st.setcOrid(
									conList.getcOrid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							st.setcDr(conList.getcDr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							st.setcTimestamp(new Date());
							st.setcCreater(excel.get(i).getcCreater());
							st.setcCreatetime(excel.get(i).getcCreatetime());
							st.setcSw02(
									conList.getcSw02().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							st.setcSw03(
									conList.getcSw03().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							st.setcSw04(
									conList.getcSw04().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							if ((i + 1) < 10) {
								st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N000" + (i + 1));
							}
							if (10 <= (i + 1) && (i + 1) < 100) {
								st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N00" + (i + 1));
							}
							if (100 <= (i + 1) && (i + 1) < 1000) {
								st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N0" + (i + 1));
							}
							if (1000 <= (i + 1) && (i + 1) < 10000) {
								st.setcSw05(conList.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N" + (i + 1));
							}
							st.setcConnum(conList.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							int row = tpCgcontractstMapper.insertSelective(st);
							if (row == 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
							}
						}
					} else {
						// 原规格为：合并
						if (excel.get(i).getcRemark() != null) {
							remark.add(excel.get(i));// 将有备注的放进remark的arrayList中
						} else {
							hblist.add(excel.get(i));// 将没有备注的放进hblist的arrayList中
						}
					}
				} else {
					TpCgcontractst conList1 = tpCgcontractstMapper.selForGoodsnameAndSpec(
							excel.get(i).getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""),
							null,
							excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
							excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					// ---------------------------------------------------------------------------------------------------------------
					// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
					if (conList1 == null) {
						// 如果该物资没有找到 那么进行进一步判断
						// 1.1首先判断合同行号是否正确
						List<TpCgcontractst> CShh = tpCgcontractstMapper.selNAMEASPECANUMALINE(excel.get(i).getcConnum()
								.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null, null, null);
						if (CShh.size() == 0) {
							// 1.1.1根据合同号没查询到物资
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同号：错误】")
									.errcode(Errcode.FailParameterError).build();
						} else {
							// 1.1.2根据合同号查询到了物资，则进行进一步判断
							List<TpCgcontractst> CShthAhh = tpCgcontractstMapper.selNAMEASPECANUMALINE(
									excel.get(i).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", ""),
									excel.get(i).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
											.replaceAll("[\\n]", ""),
									null, null);
							if (CShthAhh.size() == 0) {
								// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【合同行号：错误】")
										.errcode(Errcode.FailParameterError).build();
							} else {
								// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
								if (CShthAhh.size() == 1) {
									// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
									if (!CShthAhh.get(0).getcGoodsname().equals(excel.get(i).getyGoodsname()
											.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("导入Excel表中第-" + (i + 2) + "-行," + "【原货物名称：错误】")
												.errcode(Errcode.FailParameterError).build();
									}
								}
							}
						}
					} else {
						// ---------------------------------------------------------------------------------------------------------------
						st.setcMtid(
								conList1.getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						st.setcGoodsname(excel.get(i).getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", "")/* + "<" + excel.get(i).getYcSpec() + ">" */);// 物资名称
						st.setcSw08(excel.get(i).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", ""));// 报关物资名称
						if (excel.get(i).getcSpec() == null) {
							st.setcSpec(null);
						} else {
							st.setcSpec(excel.get(i).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
						}
						st.setcUnit(excel.get(i).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
								""));
						if ((i + 1) < 10) {
							st.setcConline(conList1.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "") + "-A000" + (i + 1));
						}
						if (10 <= (i + 1) && (i + 1) < 100) {
							st.setcConline(conList1.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "") + "-A00" + (i + 1));
						}
						if (100 <= (i + 1) && (i + 1) < 1000) {
							st.setcConline(conList1.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "") + "-A0" + (i + 1));
						}
						if (1000 <= (i + 1) && (i + 1) < 10000) {
							st.setcConline(conList1.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "") + "-A" + (i + 1));
						}
						st.setcGoodsnum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", ""));
						st.setcGroudtotalnum("0");
						st.setcResiduenum(excel.get(i).getcGoodsnum().replaceAll(" ", "").replaceAll("[\\r]", "")
								.replaceAll("[\\n]", ""));
						st.setcArrallyorn("0");
						if(excel.get(i).getcRemark()==null) {
							st.setcRemark(null);
						}else {
							if(conList1.getcRemark() == null || "null".equals(conList1.getcRemark()) || excel.get(i).getcRemark().equals(conList1.getcRemark())) {
								st.setcRemark(excel.get(i).getcRemark());
							}else {
								st.setcRemark(excel.get(i).getcRemark() +" "+ conList1.getcRemark());			
							}
						}
						st.setcState("3");
						st.setcCheckyorn("0");
						st.setcOrid(
								conList1.getcOrid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						if (conList1.getcDr() == null) {
							st.setcDr(null);
						} else {
							st.setcDr(
									conList1.getcDr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						}
						st.setcTimestamp(new Date());
						st.setcCreater(excel.get(i).getcCreater());
						st.setcCreatetime(excel.get(i).getcCreatetime());
						if (conList1.getcSw02() == null) {
							st.setcSw02(null);
						} else {
							st.setcSw02(conList1.getcSw02().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						if (conList1.getcSw03() == null) {
							st.setcSw03(null);
						} else {
							st.setcSw03(conList1.getcSw03().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						if (conList1.getcSw04() == null) {
							st.setcSw04(null);
						} else {
							st.setcSw04(conList1.getcSw04().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
						}
						if ((i + 1) < 10) {
							st.setcSw05(
									conList1.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "")
											+ "-N000" + (i + 1));
						}
						if (10 <= (i + 1) && (i + 1) < 100) {
							st.setcSw05(
									conList1.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "")
											+ "-N00" + (i + 1));
						}
						if (100 <= (i + 1) && (i + 1) < 1000) {
							st.setcSw05(
									conList1.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "")
											+ "-N0" + (i + 1));
						}
						if (1000 <= (i + 1) && (i + 1) < 10000) {
							st.setcSw05(
									conList1.getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "")
											+ "-N" + (i + 1));
						}
						st.setcConnum(
								conList1.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						int row = tpCgcontractstMapper.insertSelective(st);
						if (row == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
						}
					}
				}
			}
			// ------------------------------------将合并的物资进行分组------------------------------------------------
			System.out.println(hblist.size() + "条数据===========物资合并的数量");
			if (hblist.size() != 0) {  //hblist是没有备注的物资 需要合并的list 
				Map<String, List<TpCgcontractst>> map = bigs.groupBillingDataByExcpBatchCode(hblist);
				System.out.println(map);
				// 取出map中的所有元素。
				// 原理，通过keySet方法获取map中所有的键所在的Set集合，在通过Set的迭代器获取到每一个键，
				// 在对每一个键通过map集合的get方法获取其对应的值即可。
				Set<String> keySet = map.keySet();
				Iterator<String> it = keySet.iterator();

				while (it.hasNext()) {
					String key = it.next();
					List<TpCgcontractst> valuee = map.get(key);
					
					Map<String, List<TpCgcontractst>> map2 =bigs.groupBillingDataByExcpBatchCodecSpec(valuee);
					Set<String> keySet2 = map2.keySet();
					Iterator<String> it2 = keySet2.iterator();
					while(it2.hasNext()) {
						String key2 = it2.next();
						List<TpCgcontractst> value = map2.get(key2);
						
						System.out.println(key2 + ":" + value);
						List<TpCgcontractst> newList = new ArrayList<TpCgcontractst>();
						for (int g = 0; g < value.size(); g++) {
							if (value.get(g).getcRemark() != null) {
								// 将备注不为空的Object放入新的list
								remark.add(value.get(g));
							} else {
								TpCgcontractst conList2 = tpCgcontractstMapper.selForGoodsnameAndSpec(value.get(g)
										.getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
										null,
										value.get(g).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
												.replaceAll("[\\n]", ""),
										value.get(g).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
												.replaceAll("[\\n]", ""));
								// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
								if (conList2 == null) {
									// 如果该物资没有找到 那么进行进一步判断
									// 1.1首先判断合同行号是否正确
									List<TpCgcontractst> CShh = tpCgcontractstMapper.selNAMEASPECANUMALINE(value.get(g)
											.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
											null, null, null);
									if (CShh.size() == 0) {
										// 1.1.1根据合同号没查询到物资
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("导入Excel表中需要合并的:" + key + "的第-" + (g + 1) + "-行," + "【合同号：错误】")
												.errcode(Errcode.FailParameterError).build();
									} else {
										// 1.1.2根据合同号查询到了物资，则进行进一步判断
										List<TpCgcontractst> CShthAhh = tpCgcontractstMapper.selNAMEASPECANUMALINE(
												value.get(g).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
														.replaceAll("[\\n]", ""),
												value.get(g).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
														.replaceAll("[\\n]", ""),
												null, null);
										if (CShthAhh.size() == 0) {
											// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
											TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
											return builder.msg("导入Excel表中需要合并的:" + key + "的第-" + (g + 1) + "-行," + "【合同行号：错误】")
													.errcode(Errcode.FailParameterError).build();
										} else {
											// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
											if (CShthAhh.size() == 1) {
												// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
												if (!CShthAhh.get(0).getcGoodsname().equals(value.get(g).getyGoodsname()
														.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
													TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
													return builder.msg(
															"导入Excel表中需要合并的:" + key + "的第-" + (g + 1) + "-行," + "【原货物名称：错误】")
															.errcode(Errcode.FailParameterError).build();
												}
											}
										}
									}
								}
								newList.add(conList2);
							}
						}
						if (!newList.equals(null)) {
							TpCgcontractst tcst = new TpCgcontractst();
							String spec1 = "";// 合并后的规格
							String num = "";// 合并后的数量
							String sw02 = "";// 合并后的物资单号
							String sw03 = "";// 合并后的请购单号
							String line = "";// 合并后的合同行号
							String unit = value.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");// 合并后的单位
							String name = value.get(0).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", "");// 合并后的名称
							if (value.get(0).getcSpec() == null) {
								String gg = null;// excel表格中的规格
								tcst.setcSpec(gg);
							} else {
								String gg = value.get(0).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");// excel表格中的规格
								tcst.setcSpec(gg);
							}
							String yname = "";
							String orid = "";
							int hb = newList.size();
							for (int k = 0; k < value.size(); k++) {
								if (value.get(k).getcGoodsnum() != null) {
									num += value.get(k).getcGoodsnum() + "/";
								}
							}
							for (int j = 0; j < hb; j++) {
								if (newList.get(j).getcSpec() != null) {
									spec1 += newList.get(j).getcSpec() + "/";
								}
								if (newList.get(j).getcSw02() != null) {
									sw02 += newList.get(j).getcSw02() + "/";
								}
								if (newList.get(j).getcSw03() != null) {
									sw03 += newList.get(j).getcSw03() + "/";
								}
								if (newList.get(j).getcConline() != null) {
									line += newList.get(j).getcConline() + "/";
								}
								if (newList.get(j).getcOrid() != null) {
									orid += newList.get(j).getcOrid() + "/";
								}
								if (newList.get(j).getcGoodsname() != null) {
									yname += newList.get(j).getcGoodsname() + "/";
								}
							}
							if (spec1.equals("")) {
								spec1 = null;
							} else {
								spec1 = spec1.substring(0, spec1.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							if (sw02.length() == 0) {
								sw02 = null;
							} else {
								sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							if (sw03.length() == 0) {
								sw03 = null;
							} else {
								sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							if (line.length() == 0) {
								line = null;
							} else {
								line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							if (orid.length() == 0) {
								orid = null;
							} else {
								orid = orid.substring(0, orid.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							if (yname.length() == 0) {
								yname = null;
							} else {
								yname = yname.substring(0, yname.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "等";
							}
							if (num.length() == 0) {
								num = null;
							} else {
								num = num.substring(0, num.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "");
							}
							String sss = bigs.get_Goodsnum(unit, num);// 合并后的数量
							System.out.println(sss);
							if (newList.get(0).getcMtid() == null) {
								tcst.setcMtid(null);
							} else {
								tcst.setcMtid(newList.get(0).getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", ""));
							}
							if (yname.length() == 0) {
								System.out.println(yname);
								tcst.setcGoodsname(null);
							} else {
								tcst.setcGoodsname(yname.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 原多个物资名称
							}
							if (name.length() == 0) {
								System.out.println(name);
								tcst.setcSw08(null);
							} else {
								tcst.setcSw08(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 报关名称
							}
							if (unit.length() == 0) {
								tcst.setcUnit(null);
							} else {
								tcst.setcUnit(unit.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (line.length() == 0) {
								System.out.println(line);
								tcst.setcConline(null);
							} else {
								tcst.setcConline(line.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							tcst.setcGoodsnum(sss);
							tcst.setcGroudtotalnum("0");
							tcst.setcResiduenum(sss);
							
							
							
							if(newList.get(0).getcRemark()==null) {
								tcst.setcRemark(null);
							}else {
								tcst.setcRemark(newList.get(0).getcRemark());
							}
							tcst.setcArrallyorn("0");
							tcst.setcState("3");
							tcst.setcCheckyorn("0");
							if (orid.length() == 0) {
								System.out.println(orid);
								tcst.setcOrid(null);
							} else {
								tcst.setcOrid(orid.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							tcst.setcDr(newList.get(0).getcDr());
							tcst.setcTimestamp(new Date());
							tcst.setcCreater(newList.get(0).getcCreater());
							tcst.setcCreatetime(newList.get(0).getcCreatetime());
							if (sw02.length() == 0) {
								System.out.println(sw02);
								tcst.setcSw02(null);
							} else {
								tcst.setcSw02(sw02.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (sw03.length() == 0) {
								tcst.setcSw03(null);
							} else {
								tcst.setcSw03(sw03.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							tcst.setcSw04("0");
							// -N后面代表有多少个物资合并成
							if (newList.size() < 10) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N000" + (newList.size()));
							}
							if (10 <= (newList.size()) && (newList.size()) < 100) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N00" + (newList.size()));
							}
							if (100 <= (newList.size()) && (newList.size()) < 1000) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N0" + (newList.size()));
							}
							if (1000 <= (newList.size()) && (newList.size()) < 10000) {
								tcst.setcSw05(newList.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "")
										.replaceAll("[\\n]", "") + "-N" + (newList.size()));
							}
							tcst.setcConnum(newList.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
									.replaceAll("[\\n]", ""));
							int row = tpCgcontractstMapper.insertSelective(tcst);
							if (row == 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
							}
						}
					}
				}
			}
			// -----------------------------将备注一样的进行分组--------------------------------------------------------------------
			System.out.println(remark.size() + "条数据===========有备注");
			List<TpCgcontractst> newList21 = new ArrayList<TpCgcontractst>();
			if (remark.size() != 0) {
				Map<String, List<TpCgcontractst>> map1 = bigs.groupBillingDataByExcpBatchCodeForRemark(remark);
				System.out.println(map1);
				//备注1={Object1，obj2，obj3，obj4}
				// 取出map中的所有元素。
				// 原理，通过keySet方法获取map中所有的键所在的Set集合，在通过Set的迭代器获取到每一个键，
				// 在对每一个键通过map集合的get方法获取其对应的值即可。
				Set<String> keySet1 = map1.keySet();
				Iterator<String> it1 = keySet1.iterator();

				while (it1.hasNext()) {
					String key1 = it1.next();
					List<TpCgcontractst> value1 = map1.get(key1);
					
					//将备份一样的 用货物名称进一步分组
					Map<String, List<TpCgcontractst>> map11 = bigs.groupBillingDataByExcpBatchCode(value1);
					System.out.println("map11::"+map11);
					Set<String> keySet11 = map11.keySet();
					Iterator<String> it11 = keySet11.iterator();
					while(it11.hasNext()) {
						String key11 = it11.next();
						List<TpCgcontractst> value11 = map11.get(key11);
						
						//将货物名称一样的 用规格型号进一步分组
						Map<String, List<TpCgcontractst>> map111 = bigs.groupBillingDataByExcpBatchCodecSpec(value11);
						System.out.println("map11::"+map11);
						Set<String> keySet111 = map111.keySet();
						Iterator<String> it111 = keySet111.iterator();
						while(it111.hasNext()) {
							String key111 = it111.next();
							List<TpCgcontractst> value111 = map111.get(key111);
						//A={OBJ1,OBJ3}
						//1，
						//2     1.2
						
							System.out.println(key111 + ":" + value111);
							List<TpCgcontractst> newList2 = new ArrayList<TpCgcontractst>();
							for (int h = 0; h < value111.size(); h++) {
								TpCgcontractst conList2 = tpCgcontractstMapper.selForGoodsnameAndSpec(value111
										.get(h).getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
										null,
										value111.get(h).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
												""),
										value111.get(h).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
												""));
								// 判断改导入的物资根据excel表中的合同号 合同行号 原货物名称 原规格型号 是否能够找到该物资
								if (conList2 == null) {
									// 如果该物资没有找到 那么进行进一步判断
									// 1.1首先判断合同行号是否正确
									List<TpCgcontractst> CShh = tpCgcontractstMapper.selNAMEASPECANUMALINE(value111.get(h)
											.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""), null,
											null, null);
									if (CShh.size() == 0) {
										// 1.1.1根据合同号没查询到物资
										TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
										return builder.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【合同号：错误】")
												.errcode(Errcode.FailParameterError).build();
									} else {
										// 1.1.2根据合同号查询到了物资，则进行进一步判断
										List<TpCgcontractst> CShthAhh = tpCgcontractstMapper.selNAMEASPECANUMALINE(
												value111.get(h).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "")
														.replaceAll("[\\n]", ""),
												value111.get(h).getcConline().replaceAll(" ", "").replaceAll("[\\r]", "")
														.replaceAll("[\\n]", ""),
												null, null);
										if (CShthAhh.size() == 0) {
											TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
											// 1.1.2.1如果合同号查询到了数据，但是合同号和合同行号一起查询则没有数据，说明合同行号错误
											return builder.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【合同行号：错误】")
													.errcode(Errcode.FailParameterError).build();
										} else {
											// 1.1.2.2如果合同号和合同行号正确，并且查询到了数据（因为合同号和合同行号确定了一条合同物资信息）
											if (CShthAhh.size() == 1) {
												// 1.1.2.2.1 判断该合同物资的货物名称和excel表中的原货物名称是否一致
												if (!CShthAhh.get(0).getcGoodsname().equals(value111.get(h).getyGoodsname()
														.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""))) {
													TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
													return builder
															.msg("导入Excel表中需要合并的:" + key1 + "的第-" + (h + 1) + "-行," + "【原货物名称：错误】")
															.errcode(Errcode.FailParameterError).build();
												}
											}
										}
									}
								}
								newList2.add(conList2);
								newList21.add(conList2);
							}
							TpCgcontractst tcst = new TpCgcontractst();
							String spec1 = "";// 合并后的规格
							String num = "";// 合并后的数量
							String sw02 = "";// 合并后的物资单号
							String sw03 = "";// 合并后的请购单号
							String line = "";// 合并后的合同行号
							String unit = value111.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]","");// 合并后的单位
							String name = value111.get(0).getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");// 合并后的名称
							if (value111.get(0).getcSpec() == null) {
								String gg = null;// excel表格中的规格
								tcst.setcSpec(gg);
							} else {
								String gg = value111.get(0).getcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
										"");// excel表格中的规格
								tcst.setcSpec(gg);
							}
							String yname = "";
							String orid = "";
							int hb = value111.size();
							for (int k = 0; k < value111.size(); k++) {
								if (value111.get(k).getcGoodsnum() != null) {
									num += value111.get(k).getcGoodsnum() + "/";
								}
							}
							for (int j = 0; j < hb; j++) {
								if (newList2.get(j).getcSpec() != null) {
									spec1 += newList2.get(j).getcSpec() + "/";
								}
								if (newList2.get(j).getcSw02() != null) {
									sw02 += newList2.get(j).getcSw02() + "/";
								}
								if (newList2.get(j).getcSw03() != null) {
									sw03 += newList2.get(j).getcSw03() + "/";
								}
								if (newList2.get(j).getcConline() != null) {
									line += newList2.get(j).getcConline() + "/";
								}
								if (newList2.get(j).getcOrid() != null) {
									orid += newList2.get(j).getcOrid() + "/";
								}
								if (newList2.get(j).getcGoodsname() != null) {
									yname += newList2.get(j).getcGoodsname() + "/";
								}
							}
							if (spec1.equals("")) {
								spec1 = null;
							} else {
								spec1 = spec1.substring(0, spec1.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							if (sw02.length() == 0) {
								System.out.println(sw02);
							} else {
								sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							if (sw03.length() == 0) {
								System.out.println(sw03);
							} else {
								sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							if (line.length() == 0) {
								System.out.println(line);
							} else {
								line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							if (orid.length() == 0) {
								System.out.println(orid);
							} else {
								orid = orid.substring(0, orid.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							if (yname.length() == 0) {
								System.out.println(yname);
							} else {
								yname = yname.substring(0, yname.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "等";
							}
							if (num.length() == 0) {
								System.out.println(num);
							} else {
								num = num.substring(0, num.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
							}
							String sss = bigs.get_Goodsnum(unit, num);// 合并后的数量
							System.out.println(sss);
							if (newList2.get(0).getcMtid() == null) {
								System.out.println(newList2.get(0).getcMtid());
								tcst.setcMtid(null);
							} else {
								tcst.setcMtid(newList2.get(0).getcMtid().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (yname.length() == 0) {
								System.out.println(yname);
								tcst.setcGoodsname(null);
							} else {
								tcst.setcGoodsname(yname.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 原多个物资名称
							}
							if (name.length() == 0) {
								System.out.println(name);
								tcst.setcSw08(null);
							} else {
								tcst.setcSw08(name.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 报关名称
							}
							if (unit.length() == 0) {
								System.out.println(unit);
								tcst.setcUnit(null);
							} else {
								tcst.setcUnit(unit.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (line.length() == 0) {
								System.out.println(line);
								tcst.setcConline(null);
							} else {
								tcst.setcConline(line.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (sss.length() == 0) {
								System.out.println(sss);
								tcst.setcGoodsnum(null);
							} else {
								tcst.setcGoodsnum(sss);
							}
							tcst.setcGroudtotalnum("0");
							if (sss.length() == 0) {
								System.out.println(sss);
							} else {
								tcst.setcResiduenum(sss);
							}
							tcst.setcArrallyorn("0");
							tcst.setcState("3");
							tcst.setcCheckyorn("0");
							if (orid.length() == 0) {
								System.out.println(orid);
								tcst.setcOrid(null);
							} else {
								tcst.setcOrid(orid.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (newList2.get(0).getcDr().length() == 0) {
								System.out.println(newList2.get(0).getcDr());
								tcst.setcDr(null);
							} else {
								tcst.setcDr(newList2.get(0).getcDr());
							}
							tcst.setcTimestamp(new Date());
							tcst.setcCreater(newList2.get(0).getcCreater());
							tcst.setcCreatetime(newList2.get(0).getcCreatetime());
							if (sw02.length() == 0) {
								System.out.println(sw02);
								tcst.setcSw02(null);
							} else {
								tcst.setcSw02(sw02.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							if (sw03.length() == 0) {
								System.out.println(sw03);
								tcst.setcSw03(null);
							} else {
								tcst.setcSw03(sw03.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							}
							tcst.setcSw04("0");
							// -N后面代表有多少个物资合并成
							if (newList2.size() < 10) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N000" + (remark.size()));
							}
							if (10 <= (newList2.size()) && (newList2.size()) < 100) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N00" + (remark.size()));
							}
							if (100 <= (newList2.size()) && (newList2.size()) < 1000) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N0" + (remark.size()));
							}
							if (1000 <= (newList2.size()) && (newList2.size()) < 10000) {
								tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N" + (remark.size()));
							}
							tcst.setcConnum(newList2.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
							
							System.out.println("备注:::::"+newList2.get(0).getcRemark());
							
							if(newList2.get(0).getcRemark()==null) {
								tcst.setcRemark(value111.get(0).getcRemark());
							}else {
								tcst.setcRemark(newList2.get(0).getcRemark());
							}
							System.out.println("备注:::::"+newList2.get(0).getcRemark());
							int row = tpCgcontractstMapper.insertSelective(tcst);
							if (row == 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
							}
							
						}
					}
					}
					
					
					
			}
			// -------------------------------------------------------------------------------------
			for (TpCgcontractst tpCgcontractst : newList21) {
				TpCgcontractst contractst = tpCgcontractstMapper.selForGoodsnameAndSpec(
						tpCgcontractst.getcGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
						null,
						tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
						tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				if (contractst != null) {
					int row0 = tpCgcontractstMapper.deleteByUpdate(contractst.getcId());
					if (row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
					}
				}
			}
			for (TpCgcontractst tpCgcontractst : excel) {
				if (tpCgcontractst.getYcSpec() != null) {
					TpCgcontractst contractst = tpCgcontractstMapper.selForGoodsnameAndSpec(
							tpCgcontractst.getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""),
							tpCgcontractst.getYcSpec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
							tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
							tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
					if (contractst != null) {
						int row0 = tpCgcontractstMapper.deleteByUpdate(contractst.getcId());
						if (row0 == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
						}
					}
				} else {
					TpCgcontractst contractst = tpCgcontractstMapper.selForGoodsnameAndSpec(
							tpCgcontractst.getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""),
							null,
							tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
							tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",
									""));
					if (contractst != null) {
						int row0 = tpCgcontractstMapper.deleteByUpdate(contractst.getcId());
						if (row0 == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
						}
					}
				}
			}
			for (TpCgcontractst tpCgcontractst : hblist) {
				TpCgcontractst contractst = tpCgcontractstMapper.selForGoodsnameAndSpec(
						tpCgcontractst.getyGoodsname().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
						null,
						tpCgcontractst.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""),
						tpCgcontractst.getcConline().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				if (contractst != null) {
					int row0 = tpCgcontractstMapper.deleteByUpdate(contractst.getcId());
					if (row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("合同物资导入失败").errcode(Errcode.FailParameterError).build();
					}
				}
			}
		}
		return builder.msg("合同物资导入成功").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, List<TpCgcontractst>> selectGOODSNAME() {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> contractst = tpCgcontractstMapper.selectGOODSNAME();
		if (contractst.size() == 0) {
			return builder.data(null).errcode(Errcode.FailParameterError).build();
		}
		return builder.data(contractst).errcode(Errcode.Success).build();
	}

	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractst>> QXCAIGOU(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 取消采购
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<TpCgcontractst> contractst = new ArrayList<TpCgcontractst>();
		for (TpCgcontractst cmas : st) {
			TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByPrimaryKey(cmas.getcMtid());
			if(tpCgcontractmtt != null) {
				TpCgcontractstt tpCgcontractstt = tpCgcontractsttMapper.selectNumber_Line(cmas.getcConnum(), cmas.getcConline());
				if(tpCgcontractstt != null) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailShowWarningMsg).msg("无法取消，请撤回拟合同进行操作").build();
				}
			}
			
			List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(cmas.getcConnum(), cmas.getcConline());
			if(booklist.size() > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailShowWarningMsg).msg("已有到货无法取消").build();
			}
			CG_CK_M1S1 cgck = new CG_CK_M1S1();
			cgck.setcConnum(cmas.getcConnum());
			cgck.setcConline(cmas.getcConline());
			List<CG_CK_M1S1> cgckList = cgckMapper.selectByConnumline(cgck);
			if(cgckList.size() > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailShowWarningMsg).msg("已有出库无法取消").build();
			}
			// 还原物资状态为state = 0
			if(cmas.getcSw02() != null) {
				int row0 = tpCgorderbeforeMapper.update_st_Cstate2(cmas.getcSw02());
				if (row0 > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("取消采购失败").errcode(Errcode.FailParameterError).build();
				}
				contractst.add(cmas);
			}else {
				int rowd = tpCgcontractstMapper.deleteByPrimaryKey(cmas.getcId());
				if(rowd > 0 ) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("取消采购失败").errcode(Errcode.FailParameterError).build();
				}
			}
			
			// 根据合同号和合同行号查询物资信息
		}
		if(contractst.size() > 0) {
			int cons = tpCgcontractstMapper.QXCAIGOU(contractst);
			if (cons == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("取消采购失败").errcode(Errcode.FailParameterError).build();
			}
		}
		
		return builder.msg("取消采购成功").errcode(Errcode.Success).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21DH(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 物资到货快捷按钮
		System.err.println(requestObject.getData().getChipnos() + "aaaaaaaaaaaaaaaaaaaaa");
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
		List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();
		BigDecimal num; //订货数量
		BigDecimal gnum;// 累计到货量
		BigDecimal rnum;// 剩余数量
		BigDecimal cnum;// 累计出库量
		for (TpCgcontractst tpCgcontractst : st) {
			cnum = new BigDecimal(tpCgcontractst.getcSw09());
			if(cnum.compareTo(BigDecimal.ZERO) > 0) {//此判断是在出库完成状态下到货时，出库状态改为出库部分
				tpCgcontractst.setcSw11("2");
			}
			if(tpCgcontractst.getcQuadealline() ==null || tpCgcontractst.getcQuadealline() == "") {
				
				if(!BIGString.isNumeric(tpCgcontractst.getcGoodsnum().trim())) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("订货数量格式不正确！").errcode(Errcode.FailParameterError).build();
				}
				num = new BigDecimal(tpCgcontractst.getcGoodsnum()); //订货数量
				gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum());// 累计到货量
				if (tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米") || tpCgcontractst.getcUnit().equals("米")) {
					tpCgcontractst.setcGoodsnum(ri.formatToFour(num));
					tpCgcontractst.setcGroudtotalnum(ri.formatToFour(num));
					tpCgcontractst.setcResiduenum(ri.formatToFour(new BigDecimal("0")));
				}else {
					tpCgcontractst.setcGoodsnum(ri.formatForTwo(num));
					tpCgcontractst.setcGroudtotalnum(ri.formatForTwo(num));
					tpCgcontractst.setcResiduenum(ri.formatForTwo(new BigDecimal("0")));
				}
				tpCgcontractst.setcState("1");//订购数量 == 累计到货量  状态改为已到齐
				newlist.add(tpCgcontractst);
				rnum = num.subtract(gnum);
				if(rnum.compareTo(new BigDecimal("0")) == 1) {
					TpCgreceivebook book = new TpCgreceivebook();
					book.setcConmtid(tpCgcontractst.getcMtid());//到货记录合同主键
					book.setcConnum(tpCgcontractst.getcConnum());//合同号
					book.setcConline(tpCgcontractst.getcConline());//合同行号
					if (tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米") || tpCgcontractst.getcUnit().equals("米")) {
						book.setcArrivalnum(ri.formatToFour(rnum));//到货量=本次到货量
					}else {
						book.setcArrivalnum(ri.formatForTwo(rnum));//到货量=本次到货量
					}
					book.setcSw03(tpCgcontractst.getcUnit());//单位
					book.setcDeltime(requestObject.getData().getOutdeltime());//到货时间
					book.setcSw02(tpCgcontractst.getcGoodsname());//物资名称
					book.setcSw04(tpCgcontractst.getcSpec());//规格型号
					book.setcGoodscleck(tpCgcontractst.getcSw08());//报关名称
					book.setcCreater(tpCgcontractst.getcModifier());//创建人
					book.setcCreatetime(tpCgcontractst.getcModifytime());//创建时间
					book.setcSw06(requestObject.getData().getChipnos());//到货港口
					booklist.add(book);
				}
			}else {
				TpCgreceivebook book = new TpCgreceivebook();
				book.setcConmtid(tpCgcontractst.getcMtid());//到货记录合同主键
				book.setcConnum(tpCgcontractst.getcConnum());//合同号
				book.setcConline(tpCgcontractst.getcConline());//合同行号
				if(tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米") || tpCgcontractst.getcUnit().equals("米")) {
					book.setcArrivalnum(ri.formatToFour(new BigDecimal(tpCgcontractst.getcQuadealline())));//到货量=本次到货量
				}else {
					book.setcArrivalnum(ri.formatForTwo(new BigDecimal(tpCgcontractst.getcQuadealline())));//到货量=本次到货量
				}
				book.setcSw03(tpCgcontractst.getcUnit());//单位
				book.setcDeltime(requestObject.getData().getOutdeltime());//到货时间
				book.setcSw02(tpCgcontractst.getcGoodsname());//物资名称
				book.setcGoodscleck(tpCgcontractst.getcSw08());//报关名称
				book.setcSw04(tpCgcontractst.getcSpec());//规格型号
				book.setcCreater(tpCgcontractst.getcModifier());//创建人
				book.setcCreatetime(new Date());//创建时间
				book.setcSw06(requestObject.getData().getChipnos());//到货港口
				BigDecimal benci;//本次到货数量
				if(!BIGString.vd(tpCgcontractst.getcGoodsnum()) && !BIGString.vd(tpCgcontractst.getcGroudtotalnum()) ) {
					if(tpCgcontractst.getcGoodsnum().indexOf(" ") != -1) {
						num = new BigDecimal(tpCgcontractst.getcGoodsnum().replaceAll(" ", ""));//合同数量
					}else {
						num = new BigDecimal(tpCgcontractst.getcGoodsnum());//合同数量
					}
					if(tpCgcontractst.getcGroudtotalnum().indexOf(" ") != -1) {
						gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum().replaceAll(" ", ""));//累计到货量
					}else {
						gnum = new BigDecimal(tpCgcontractst.getcGroudtotalnum());//累计到货量
					}
					if(tpCgcontractst.getcQuadealline().indexOf(" ") != -1) {
						benci = new BigDecimal(tpCgcontractst.getcQuadealline().replaceAll(" ", ""));//本次到货数量
					}else {
						benci = new BigDecimal(tpCgcontractst.getcQuadealline());//本次到货数量
					}
					rnum = num.subtract(gnum.add(benci));
					tpCgcontractst.setcQuadealline("");//本次到货量，每次填写后都清空该值
					if(tpCgcontractst.getcUnit().equals("吨") || tpCgcontractst.getcUnit().equals("立方米") || tpCgcontractst.getcUnit().equals("米")) {
						tpCgcontractst.setcGoodsnum(ri.formatToFour(num));//订购数量
						tpCgcontractst.setcGroudtotalnum(ri.formatToFour(gnum.add(benci)));//累计到货量
						if(rnum.compareTo(BigDecimal.ZERO) < 0 && rnum.compareTo(new BigDecimal(-1)) > 0) {
							tpCgcontractst.setcResiduenum(rnum.toString());
						}else {
							tpCgcontractst.setcResiduenum(ri.formatToFour(rnum));
						}
					}else {
						tpCgcontractst.setcGoodsnum(ri.formatForTwo(num));//订购数量
						tpCgcontractst.setcGroudtotalnum(ri.formatForTwo(gnum.add(benci)));//累计到货量
						if(rnum.compareTo(BigDecimal.ZERO) < 0 && rnum.compareTo(new BigDecimal(-1)) > 0) {
							tpCgcontractst.setcResiduenum(rnum.toString());
						}else {
							tpCgcontractst.setcResiduenum(ri.formatForTwo(rnum));
						}
					}
					if(rnum.compareTo(BigDecimal.ZERO) == 0) {
						tpCgcontractst.setcState("1");
					}else if(rnum.compareTo(BigDecimal.ZERO) < 0){
						tpCgcontractst.setcState("5");
					}
				}else {
					tpCgcontractst.setcGoodsnum(tpCgcontractst.getcGoodsnum());
					tpCgcontractst.setcGroudtotalnum(tpCgcontractst.getcGroudtotalnum());
				}
				newlist.add(tpCgcontractst);
				booklist.add(book);
			}
		}
		if(booklist.size()!=0) {
			int row1 = tpCgreceivebookMapper.insertFinashi(booklist);
			if(row1 ==0) {
				return builder.errcode(Errcode.FailParameterError).msg("记录到货信息失败").build();
			}
		}
		int cons = tpCgcontractstMapper.S1S21DH(newlist);
		if (cons == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("到货失败").errcode(Errcode.FailParameterError).build();
		}
		
		TpCgcontractmt tmt = new TpCgcontractmt();

		int row2 = 0;			
		tmt.setcId(st.get(0).getcMtid());	
		tmt.setcCheckway("2");
		row2 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
		if(row2 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("到货失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(cons).msg("到货成功").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21BF(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		// TODO 报关名称快捷按钮 （请购单中物资名称和报关名称一致）
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
		for (TpCgcontractst tpCgcontractst : st) {
			tpCgcontractst.setcSw08(tpCgcontractst.getcGoodsname());// 将报关名称修改成物资名称
			newlist.add(tpCgcontractst);
		}
		int cons = tpCgcontractstMapper.S1S21DH(newlist);
		if (cons == 0) {
			return builder.msg("报关失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(cons).msg("报关成功").errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> S1S21DCC(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> stList = requestObject.getData().getExcel();// 选择的合同物资信息
		String shipnum = requestObject.getData().getShipnum().get(0).getcSw06();// 输入的船号信息
		for (TpCgcontractst tpCgcontractst : stList) {
			if (tpCgcontractst.getcSw06() == null) {
				tpCgcontractst.setcSw06(shipnum);// 如果没有则直接添加上
			} else {
				tpCgcontractst.setcSw06(tpCgcontractst.getcSw06() + "/" + shipnum);// 如果有，加上“，”，加上新添加的船号
			}
			int row0 = tpCgcontractstMapper.S1S21DCC(tpCgcontractst);
			if (row0 == 0) {
				return builder.msg("出船失败").errcode(Errcode.FailParameterError).build();
			}
		}
		return builder.msg("出船成功").errcode(Errcode.Success).build();
	}
	//锁定物资
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21SD(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
		BigDecimal ck;//累计出库量
		BigDecimal sy;//剩余数量
		BigDecimal dh;// 累计到货量
		for(TpCgcontractst tpCgcontractst : st) {
			ck = new BigDecimal(tpCgcontractst.getcSw09());
			sy = new BigDecimal(tpCgcontractst.getcResiduenum());
			dh = new BigDecimal(tpCgcontractst.getcGroudtotalnum());
			TpCgcontractst tst = new TpCgcontractst();
			tst.setcId(tpCgcontractst.getcId());		
			tst.setcState("5");			
			if(sy.compareTo(BigDecimal.ZERO) > 0 && ck.compareTo(dh) == 0) {
				tst.setcSw11("1");
			}
			newlist.add(tst);
		}
		int cons = tpCgcontractstMapper.S1S21DH(newlist);
		if(cons == 0) {
			return builder.msg("锁定失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(cons).msg("锁定成功").errcode(Errcode.Success).build();
	}
	//取消锁定
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21QXSD(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<TpCgcontractst> newlist = new ArrayList<TpCgcontractst>();
		for(TpCgcontractst tpCgcontractst : st) {
			TpCgcontractst tst = new TpCgcontractst();
			tst.setcId(tpCgcontractst.getcId());
			tst.setcState("3");
			newlist.add(tst);
		}
		int cons = tpCgcontractstMapper.S1S21DH(newlist);
		if(cons == 0) {
			return builder.msg("取消锁定失败").errcode(Errcode.FailParameterError).build();
		}
		TpCgcontractmt tmt = tpCgcontractmtMapper.selectByPrimaryKey(requestObject.getData().getStList().get(0).getcId());
//		tmt.setcId(requestObject.getData().getStList().get(0).getcId());
		tmt.setcCheckway("2");
		if(!"4".equals(tmt.getcState())) {
			tmt.setcState("3");
		}	
		int row1 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tmt);
		if(row1 == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("取消锁定失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(cons).msg("取消锁定成功").errcode(Errcode.Success).build();
	}
	//框架号
	
	public ResponseObject<EmptyTag, EmptyData> S1S21GKH(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> stList = requestObject.getData().getExcel();// 选择的合同物资信息
		String shipnum = requestObject.getData().getShipnum().get(0).getcSw07();// 输入的框架号信息
		for (TpCgcontractst tpCgcontractst : stList) {
			if (tpCgcontractst.getcSw07() == null) {
				tpCgcontractst.setcSw07(shipnum);// 如果没有则直接添加上
			} else {
				tpCgcontractst.setcSw07(tpCgcontractst.getcSw07() + "/" + shipnum);// 如果有，加上“，”，加上新添加的船号
			}
			int row0 = tpCgcontractstMapper.S1S21DCC(tpCgcontractst);
			if (row0 == 0) {
				return builder.msg("修改失败").errcode(Errcode.FailParameterError).build();
			}
		}
		return builder.msg("修改成功").errcode(Errcode.Success).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21CK(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		List<CG_CK_M1S1> cklist = new ArrayList<CG_CK_M1S1>();
		BigDecimal goodsnum;//订购数量
		BigDecimal num;//累计出库量
		BigDecimal gnum;// 累计到货量
		BigDecimal csw10;//当前出库量
		for(TpCgcontractst tst : st) {
			if(tst.getcSw09() == null || tst.getcSw09() == "") {
				tst.setcSw09("0");
			}
			gnum = new BigDecimal(tst.getcGroudtotalnum());
			if(tst.getcSw10() == null || tst.getcSw10() == "") {
		
				num = new BigDecimal(tst.getcSw09());
				if(gnum.compareTo(num) > 0) {
					CG_CK_M1S1 ck = new CG_CK_M1S1();
					ck.setcConnum(tst.getcConnum());//合同号
					ck.setcConline(tst.getcConline());//合同行号
					ck.setcMtid(tst.getcMtid());//合同主键
					ck.setcGoodsname(tst.getcGoodsname());//物资名称
					ck.setcSw01(tst.getcSw08());//报关物资名称
					ck.setcSpec(tst.getcSpec());//规格型号
					ck.setcUnit(tst.getcUnit());//单位
					ck.setcShipno(requestObject.getData().getChipnos());//船号
					ck.setcOuttime(requestObject.getData().getOutdeltime());//出库时间
					ck.setcCreater(tst.getcModifier());//创建人
					ck.setcCreatetime(tst.getcModifytime());//创建时间
					if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
						ck.setcOutsum(ri.formatToFour(gnum.subtract(num)));//出库量
					}else {
						ck.setcOutsum(ri.formatForTwo(gnum.subtract(num)));//出库量
					}
					cklist.add(ck);
					
					
					if(requestObject.getData().getChipnos() != null && requestObject.getData().getChipnos() !="") {
						boolean isok;
						String ship = requestObject.getData().getChipnos();
						if(tst.getcSw06() != null && tst.getcSw06() != "") {
							if(tst.getcSw06().indexOf("/") == -1) {
								if(!tst.getcSw06().equals(ship)) {
									tst.setcSw06(tst.getcSw06() + "/" + ship);
								}
							}else {
								String[] shipno = tst.getcSw06().split("/");
								isok = true;
								for(String str : shipno) {
									if(str.equals(ship)) {
										isok = !isok;
										break;
									}
								}
								if(isok) {
									tst.setcSw06(tst.getcSw06() + "/" + ship);
								}
							}
						}else {
							tst.setcSw06(ship);
						}
					}
					
					if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
						tst.setcSw09(ri.formatToFour(gnum));//出库量
					}else {
						tst.setcSw09(ri.formatForTwo(gnum));//出库量
					}
				}
				
			}else {
				num = new BigDecimal(tst.getcSw09());
				csw10 = new BigDecimal(tst.getcSw10());
				if(gnum.compareTo(num.add(csw10)) < 0 ) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("出库失败,出库量不能大于到货量").errcode(Errcode.FailParameterError).build();
				}
				CG_CK_M1S1 ck = new CG_CK_M1S1();
				ck.setcConnum(tst.getcConnum());//合同号
				ck.setcConline(tst.getcConline());//合同行号
				ck.setcMtid(tst.getcMtid());//合同主键
				ck.setcGoodsname(tst.getcGoodsname());//物资名称
				ck.setcSw01(tst.getcSw08());//报关物资名称
				ck.setcSpec(tst.getcSpec());//规格型号
				ck.setcUnit(tst.getcUnit());//单位
				ck.setcShipno(requestObject.getData().getChipnos());//船号
				ck.setcOuttime(requestObject.getData().getOutdeltime());//出库时间
				ck.setcCreater(tst.getcModifier());//创建人
				ck.setcCreatetime(new Date());//创建时间
				if(tst.getcSw09() == null || tst.getcSw09() == "") {
					tst.setcSw09("0");
				}
				if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
					ck.setcOutsum(ri.formatToFour(csw10));//出库量
					tst.setcSw09(ri.formatToFour(num.add(csw10)));
				}else {
					ck.setcOutsum(ri.formatForTwo(csw10));//出库量
					tst.setcSw09(ri.formatForTwo(num.add(csw10)));
				}
				tst.setcSw10("");
				cklist.add(ck);	
				
				
				if(requestObject.getData().getChipnos() != null && requestObject.getData().getChipnos() !="") {
					boolean isok;
					String ship = requestObject.getData().getChipnos();
					if(tst.getcSw06() != null && tst.getcSw06() != "") {
						if(tst.getcSw06().indexOf("/") == -1) {
							if(!tst.getcSw06().equals(ship)) {
								tst.setcSw06(tst.getcSw06() + "/" + ship);
							}
						}else {
							String[] shipno = tst.getcSw06().split("/");
							isok = true;
							for(String str : shipno) {
								if(str.equals(ship)) {
									isok = !isok;
									break;
								}
							}
							if(isok) {
								tst.setcSw06(tst.getcSw06() + "/" + ship);
							}
						}
					}else {
						tst.setcSw06(ship);
					}
				}
				
			}
			
			
			num = new BigDecimal(tst.getcSw09());
			goodsnum = new BigDecimal(tst.getcGoodsnum());
			gnum = new BigDecimal(tst.getcGroudtotalnum());
			if("1".equals(tst.getcState()) || "5".equals(tst.getcState())) {
				if(num.compareTo(gnum) == 0) {
					tst.setcSw11("1");
				}else {
					tst.setcSw11("2");
				}
			}else {
				if(gnum.compareTo(goodsnum) > 0) {
					if(num.compareTo(gnum) == 0) {
						tst.setcSw11("1");
					}else {
						tst.setcSw11("2");
					}
				}
				if(gnum.compareTo(goodsnum) == 0) {
					if(num.compareTo(gnum) == 0) {
						tst.setcSw11("1");
					}else {
						tst.setcSw11("2");
					}
				}
				if(gnum.compareTo(goodsnum) < 0 && num.compareTo(BigDecimal.ZERO) > 0) {
					tst.setcSw11("2");
				}
			}
		}
		if(cklist.size() > 0) {
			int row0 = cgckMapper.M1S11ACG_CK_M1S1(cklist);
			if(row0 == 0) {
				return builder.msg("出库失败").errcode(Errcode.FailParameterError).build();
			}
		}
		int cons = tpCgcontractstMapper.S1S21DH(st);
		if (cons == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("出库失败").errcode(Errcode.FailParameterError).build();
		}
		return builder.data(cons).msg("出库成功").errcode(Errcode.Success).build();
	}
	@Transactional  
	public ResponseObject<EmptyTag, EmptyData> S1S21CXDR(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		TpCgcontractst contractst = new TpCgcontractst();
		int row0;
		int row1;
		List<TpCgcontractmtt> tmtt = tpCgcontractmttMapper.selectByConnum(st.get(0).getcConnum());
		if(tmtt.size() > 0) {
			return builder.msg("无法在正式合同撤销").errcode(Errcode.FailParameterError).build();
		}
		for (TpCgcontractst tpCgcontractst : st) {
			if(tpCgcontractst.getcConline().length() > 5) {				
				if(tpCgcontractst.getcConline().indexOf("-") != -1) {
					contractst.setcConline(tpCgcontractst.getcConline().substring(0, 5));
					contractst.setcConnum(tpCgcontractst.getcConnum());
					row0 = 0;				
					row0 = tpCgcontractstMapper.updateByNumLine(contractst);
					if(row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
					row1 = 0;				
					row1 = tpCgcontractstMapper.updateByDelete(tpCgcontractst);
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
				}
				if(tpCgcontractst.getcConline().indexOf("/") != -1) {
					String[] str = tpCgcontractst.getcConline().split("/");	
					for (String string : str) {
						contractst.setcConnum(tpCgcontractst.getcConnum());
						contractst.setcConline(string);		
						row0 = 0;				
						row0 = tpCgcontractstMapper.updateByNumLine(contractst);
						if(row0 == 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
						}
					}
					row1 = 0;				
					row1 = tpCgcontractstMapper.updateByDelete(tpCgcontractst);
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
				}
				//根据合同号和合同行号查询物资到货详情
				List<TpCgreceivebook> receivebook = tpCgreceivebookMapper.selectByPrimary(tpCgcontractst.getcConnum(), tpCgcontractst.getcConline());
				if(receivebook.size()>0) {
					int row2 = 0;
					row2 = tpCgreceivebookMapper.deleteByPrimaryKey(receivebook);
					if(row2 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
					}
				}

				//根据合同号和合同行号查询物资出库详情
				CG_CK_M1S1 m1s1 = new CG_CK_M1S1();
				m1s1.setcConnum(tpCgcontractst.getcConnum());
				m1s1.setcConline(tpCgcontractst.getcConline());
				List<CG_CK_M1S1> m1List = cgckMapper.selectByConnumline(m1s1);
				if(m1List.size() > 0) {
					int row3 = 0;
					row3 = cgckMapper.M1S11DCG_CK_M1S1(m1List);
					if(row3 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();	
					}
				}
			}
		}
		return builder.msg("撤销成功！").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21PZ(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for (TpCgcontractst tpCgcontractst : st) {
					
			TpCgcontractst tst = tpCgcontractstMapper.selectByPrimaryKey(tpCgcontractst.getcId());
			if(requestObject.getData().getShipnum().get(0).getcSw12() != null) {
				if(requestObject.getData().getShipnum().get(0).getcSw22() != null) {
					String sw22 = sdf.format(requestObject.getData().getShipnum().get(0).getcSw22());
				
					if(tst.getcSw12() != null) {
						tpCgcontractst.setcSw12(tst.getcSw12() + "/" + sw22 + ":" + requestObject.getData().getShipnum().get(0).getcSw12().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw12(sw22 + ":" + requestObject.getData().getShipnum().get(0).getcSw12().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw22(requestObject.getData().getShipnum().get(0).getcSw22());
				}else {
					if(tst.getcSw12() != null) {
						tpCgcontractst.setcSw12(tst.getcSw12() + "/" + requestObject.getData().getShipnum().get(0).getcSw12().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw12(requestObject.getData().getShipnum().get(0).getcSw12().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw22(null);
				}				
			}else {
				tpCgcontractst.setcSw12("");
			}
		}
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21Q(RequestObject<EmptyTag, ShipM1s1Q> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		if(requestObject.getData().getcCheckway()!=null) {
			String cCheckwaystr = "'";
			if(!requestObject.getData().getcCheckway().isEmpty()) {
				for (String str : requestObject.getData().getcCheckway()) {
					cCheckwaystr = cCheckwaystr + str + "','";
				}
				cCheckwaystr = cCheckwaystr.substring(0, cCheckwaystr.length()-3) + "'";
			}
			if(requestObject.getData().getcCheckway().isEmpty()) {
				cCheckwaystr = "";
			}
			requestObject.getData().setcCheckwaystr(cCheckwaystr);//将转换的值赋值给str
		}
		List<TpCgcontractst> mt = tpCgcontractstMapper.S1S21Q(requestObject.getData());
		if (mt.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(mt).errcode(Errcode.Success).msg("查询成功").build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21PZ2(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for (TpCgcontractst tpCgcontractst : st) {
			
			TpCgcontractst tst = tpCgcontractstMapper.selectByPrimaryKey(tpCgcontractst.getcId());
			if(requestObject.getData().getShipnum().get(0).getcSw13() != null) {
				if(requestObject.getData().getShipnum().get(0).getcSw23() != null) {
					String sw23 = sdf.format(requestObject.getData().getShipnum().get(0).getcSw23());
				
					if(tst.getcSw13() != null) {
						tpCgcontractst.setcSw13(tst.getcSw13() + "/" + sw23 + ":" + requestObject.getData().getShipnum().get(0).getcSw13().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw13(sw23 + ":" + requestObject.getData().getShipnum().get(0).getcSw13().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw23(requestObject.getData().getShipnum().get(0).getcSw23());
				}else {
					if(tst.getcSw13() != null) {
						tpCgcontractst.setcSw13(tst.getcSw13() + "/" + requestObject.getData().getShipnum().get(0).getcSw13().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw13(requestObject.getData().getShipnum().get(0).getcSw13().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw23(null);
				}				
			}else {
				tpCgcontractst.setcSw13("");
			}
		}
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21PZ3(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for (TpCgcontractst tpCgcontractst : st) {
			TpCgcontractst tst = tpCgcontractstMapper.selectByPrimaryKey(tpCgcontractst.getcId());
			if(requestObject.getData().getShipnum().get(0).getcSw14() != null) {
				if(requestObject.getData().getShipnum().get(0).getcSw24() != null) {
					String sw24 = sdf.format(requestObject.getData().getShipnum().get(0).getcSw24());
				
					if(tst.getcSw14() != null) {
						tpCgcontractst.setcSw14(tst.getcSw14() + "/" + sw24 + ":" + requestObject.getData().getShipnum().get(0).getcSw14().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw14(sw24 + ":" + requestObject.getData().getShipnum().get(0).getcSw14().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw24(requestObject.getData().getShipnum().get(0).getcSw24());
				}else {
					if(tst.getcSw14() != null) {
						tpCgcontractst.setcSw14(tst.getcSw14() + "/" + requestObject.getData().getShipnum().get(0).getcSw14().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}else {
						tpCgcontractst.setcSw14(requestObject.getData().getShipnum().get(0).getcSw14().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					}
					tpCgcontractst.setcSw24(null);
				}				
			}else {
				tpCgcontractst.setcSw14("");
			}

		}
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21DC(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getShipnum();
		List<DeCgMaterials> ls = new ArrayList<DeCgMaterials>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for (TpCgcontractst tpCgcontractst : st) {
			String deltime = "";
			String pier = "";
			DeCgMaterials als;
			if(tpCgcontractst.getcSw02() != null) {
				//判断是否有多个合同行号
				if(tpCgcontractst.getcSw02().indexOf("/") != -1) {
					String[] iing = tpCgcontractst.getcSw02().split("/");
					als = tpCgcontractstMapper.selectMaterials2(tpCgcontractst.getcId());
					if(als != null) {
						for (String string : iing) {
							TpCgorderst tpCgorderst = tpCgorderstMapper.selectByPrimaryKey(string);
							if(tpCgorderst.getcSw02() != null) {
								als.setcSw02(tpCgorderst.getcSw02());
							}
							if(tpCgorderst.getcSw03() != null) {
								als.setcSw03(tpCgorderst.getcSw03());
							}
							if(tpCgorderst.getcSw04() != null) {
								als.setcSw04(tpCgorderst.getcSw04());
							}
							if(tpCgorderst.getcSw05() != null) {
								als.setcSw05(tpCgorderst.getcSw05());
							}
							if(tpCgorderst.getcSw06() != null) {
								als.setcSw06(tpCgorderst.getcSw06());
							}
							if(tpCgorderst.getcSw07() != null) {
								als.setcSw07(tpCgorderst.getcSw07());
							}
							if(tpCgorderst.getcSw08() != null) {
								als.setcSw08(tpCgorderst.getcSw08());
							}
							if(tpCgorderst.getcSw09() != null) {
								als.setcSw09(tpCgorderst.getcSw09());
							}
							if(tpCgorderst.getcRemark() != null) {
								als.setcRemark(tpCgorderst.getcRemark());
							}
							if(tpCgorderst.getcMustneed() != null) {
								als.setcMustneed(tpCgorderst.getcMustneed());
							}
							if(tpCgorderst.getcGoodsname() != null) {
								als.setGoodsname(tpCgorderst.getcGoodsname());
							}
							if(tpCgorderst.getcSpec() != null) {
								als.setSpec(tpCgorderst.getcSpec());
							}
							List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(tpCgcontractst.getcConnum(), tpCgcontractst.getcConline());
							if(booklist.size() == 1) {
								if(booklist.get(0).getcDeltime() != null) {
									deltime = sdf.format(booklist.get(0).getcDeltime());
									als.setDeltime(deltime);
								}
								if(booklist.get(0).getcSw06() != null) {
									als.setPier(booklist.get(0).getcSw06());
								}
							}else if(booklist.size() > 1) {				
								for (TpCgreceivebook tpCgreceivebook : booklist) {
									if(tpCgreceivebook.getcDeltime() != null) {
										deltime += sdf.format(tpCgreceivebook.getcDeltime()) + "/";
									}		
									if(booklist.get(0).getcSw06() != null) {
										pier += booklist.get(0).getcSw06() + "/";
									}
								}
								if(deltime.length() > 0) {
									als.setDeltime(deltime.substring(0, (deltime.length() - 1)));
									als.setPier(pier);
								}				
							}
							ls.add(als);
						}
					}
					continue;
				}
				als = tpCgcontractstMapper.selectMaterials(tpCgcontractst.getcId());
			}else {
				als = tpCgcontractstMapper.selectMaterials2(tpCgcontractst.getcId());
//				System.out.println(als.getcGoodsname());
//				if(als.getcGoodsname() != null) {
//					als.setGoodsname(als.getcGoodsname());
//				}
//				System.out.println(als.getGoodsname());
			}		
			if(als != null ) {
				List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(tpCgcontractst.getcConnum(), tpCgcontractst.getcConline());
				if(booklist.size() == 1) {
					if(booklist.get(0).getcDeltime() != null) {
						deltime = sdf.format(booklist.get(0).getcDeltime());
						als.setDeltime(deltime);
					}
					if(booklist.get(0).getcSw06() != null) {
						als.setPier(booklist.get(0).getcSw06());
					}
				}else if(booklist.size() > 1) {				
					for (TpCgreceivebook tpCgreceivebook : booklist) {
						if(tpCgreceivebook.getcDeltime() != null) {
							deltime += sdf.format(tpCgreceivebook.getcDeltime()) + "/";
						}		
						if(booklist.get(0).getcSw06() != null) {
							pier += booklist.get(0).getcSw06() + "/";
						}
					}
					if(deltime.length() > 0) {
						als.setDeltime(deltime.substring(0, (deltime.length() - 1)));
						als.setPier(pier);
					}				
				}
				ls.add(als);
			}
			
		}
		if (ls.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(ls).errcode(Errcode.Success).msg("查询成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> S1S21CJXX(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		String cSw15 = requestObject.getData().getShipnum().get(0).getcSw15();
		Date cSw16 = requestObject.getData().getShipnum().get(0).getcSw16();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String sw16 = sdf.format(cSw16);
		for (TpCgcontractst tpCgcontractst : st) {
			TpCgcontractst tst = tpCgcontractstMapper.selectByPrimaryKey(tpCgcontractst.getcId());
			if(cSw15 != null) {
				if(tst.getcSw15() != null) {
					tpCgcontractst.setcSw15(sw16 + ":" + cSw15.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "/" + tst.getcSw15());
				}else {
					tpCgcontractst.setcSw15(sw16 + ":" + cSw15.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				}			
			}else {
				tpCgcontractst.setcSw15("");
			}
			tpCgcontractst.setcSw16(cSw16);
		}
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> S1S21CJXXXG(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		String cSw15 = requestObject.getData().getShipnum().get(0).getcSw15();
		st.get(0).setcSw15(cSw15);
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}
	
	
	@Override
	@Transactional  
	public ResponseObject<EmptyTag, EmptyData> S1S21FL(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		String cSw17 = requestObject.getData().getShipnum().get(0).getcSw17();
		for (TpCgcontractst tpCgcontractst : st) {
			if(cSw17 != null) {
				tpCgcontractst.setcSw17(cSw17.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				tpCgcontractst.setcSw18(new Date());
			}else {
				tpCgcontractst.setcSw17("");
			}
		}
		if(cSw17 != null) {
			TbGuildata data = new TbGuildata();
			data.setName(cSw17.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			List<TbGuildata> selectInfo = tbGuildataMapper.selectInfo(data);
			if(selectInfo.size() == 0) {
				data.setCreator(user.getUserName());
				data.setCreateTime(new Date());
				int grow = 0;
				grow = tbGuildataMapper.insertSelective(data);
				if(grow == 0) {
					return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
				}
			}
		}
		
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}
	@Override
	@Transactional  
	public ResponseObject<EmptyTag, EmptyData> S1S21TY(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> st = requestObject.getData().getExcel();
		for (TpCgcontractst tpCgcontractst : st) {
			if(requestObject.getData().getShipnum().get(0).getcSw19() != null) {
				tpCgcontractst.setcSw19(requestObject.getData().getShipnum().get(0).getcSw19().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				tpCgcontractst.setcSw21(new Date());
			}else {
				tpCgcontractst.setcSw19("");
			}
			if(requestObject.getData().getShipnum().get(0).getcSw20() != null) {
				tpCgcontractst.setcSw20(requestObject.getData().getShipnum().get(0).getcSw20());
			}else {
				tpCgcontractst.setcSw20("");
			}
		}
		int row = 0;
		row = tpCgcontractstMapper.S1S21DH(st);
		if(row == 0) {
			return builder.msg("添加失败！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("添加成功！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> S1S21DBDC(RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> mt = requestObject.getData().getStList();
		String connum = mt.get(0).getcConnum().trim();
		for(int i = 1; i < mt.size();i++) {
			connum = connum + "," + mt.get(i).getcConnum().trim();
		}
//		for (TpCgcontractmt tpCgcontractmt : mt) {
//			connum = connum + "," + tpCgcontractmt.getcConnum().trim();
//		}
		String[] cConnum = connum.split(",");
		List<TpCgcontractst> st = tpCgcontractstMapper.selectBycConnum(cConnum);
//		if (st.size() == 0) {
//			return builder.data(st).errcode(Errcode.FailParameterError).msg("查询失败").build();
//		}
		
		return builder.data(st).errcode(Errcode.Success).msg("查询成功").build();
	}

	@Override
	@Transactional 
	public ResponseObject<EmptyTag, EmptyData> S1S21HB(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractst tpCgcontractst = requestObject.getData().getTpCgcontractst();
		List<TpCgcontractst> shipnum = requestObject.getData().getShipnum();
		TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByPrimaryKey(shipnum.get(0).getcMtid());
		if(tpCgcontractmtt != null) {
			return builder.msg("有拟合同不能在此操作！").errcode(Errcode.FailShowWarningMsg).build();
		}
		String line = "";
		String sw02 = "";//请购物资主键
		String sw03 = "";//请购单号
		for (TpCgcontractst tstt : shipnum) {
			if(tstt.getcConline().indexOf("-") != -1) {
				return builder.msg("已拆分，请先撤销拆分再进行合并！").errcode(Errcode.FailShowWarningMsg).build();
			}
			List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(tstt.getcConnum(), tstt.getcConline());
			if(booklist.size() > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailShowWarningMsg).msg("已有到货无法合并").build();
			}
			CG_CK_M1S1 cgck = new CG_CK_M1S1();
			cgck.setcConnum(tstt.getcConnum());
			cgck.setcConline(tstt.getcConline());
			List<CG_CK_M1S1> cgckList = cgckMapper.selectByConnumline(cgck);
			if(cgckList.size() > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailShowWarningMsg).msg("已有出库无法合并").build();
			}
		}
		
		for (TpCgcontractst tstt : shipnum) {
			
			
			if(tstt.getcConline() != null) {
				line += tstt.getcConline()+"/";
			}
			if(tstt.getcSw02() != null) {
				sw02 += tstt.getcSw02()+"/";
			}
			if(tstt.getcSw03() != null) {
				sw03 += tstt.getcSw03()+"/";
			}
		}
		if(line.length() > 0) {
			line = line.substring(0, line.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		if(sw02.length() > 0) {
			sw02 = sw02.substring(0, sw02.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		if(sw03.length() > 0) {
			sw03 = sw03.substring(0, sw03.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		if(tpCgcontractst.getcGoodsname() != null ) {
			tpCgcontractst.setcSw08(tpCgcontractst.getcGoodsname());
		}	
		if(tpCgcontractst.getcSpec() != null) {
			tpCgcontractst.setcCuspec(tpCgcontractst.getcSpec());
		}
		if(tpCgcontractst.getcUnit() != null) {
			tpCgcontractst.setcUnitspec(tpCgcontractst.getcUnit());
		}
		if(tpCgcontractst.getcGoodsnum() != null) {
			tpCgcontractst.setcResiduenum(tpCgcontractst.getcGoodsnum());
		}
		tpCgcontractst.setcConnum(shipnum.get(0).getcConnum());
		tpCgcontractst.setcMtid(shipnum.get(0).getcMtid());
		tpCgcontractst.setcSw02(sw02);
		tpCgcontractst.setcSw03(sw03);	
		tpCgcontractst.setcConline(line);
		tpCgcontractst.setcState("3");
		tpCgcontractst.setcCreater(user.getUserName());
		tpCgcontractst.setcCreatetime(new Date());
		tpCgcontractst.setcGroudtotalnum("0");
		int row = tpCgcontractstMapper.insertSelective(tpCgcontractst);
		if(row > 0 ) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.msg("合并失败！").errcode(Errcode.FailParameterError).build();
		}
		for (TpCgcontractst tstt : shipnum) {
			int row2 = tpCgcontractstMapper.deleteByUpdate(tstt.getcId());
			if(row2 > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("合并失败！").errcode(Errcode.FailParameterError).build();
			}
		}		
		return builder.msg("合并成功！").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional 
	public ResponseObject<EmptyTag, EmptyData> S1S21CF(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractst tpCgcontractst = requestObject.getData().getTpCgcontractst();
		List<TpCgcontractst> shipnum = requestObject.getData().getShipnum();
		
		if(tpCgcontractst.getcConline().indexOf("/") != -1) {
			return builder.msg("已合并，请先撤销合并再进行拆分！").errcode(Errcode.FailShowWarningMsg).build();
		}
		
		//判断合同是否有拟合同
		TpCgcontractmtt tpCgcontractmtt = tpCgcontractmttMapper.selectByPrimaryKey(tpCgcontractst.getcMtid());
		if(tpCgcontractmtt != null) {
			return builder.msg("有拟合同不能在此操作！").errcode(Errcode.FailShowWarningMsg).build();
		}
		
		//判断物资有没有到货详情
		List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(tpCgcontractst.getcConnum(), tpCgcontractst.getcConline());
		if(booklist.size() > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailShowWarningMsg).msg("已有到货无法合并").build();
		}
		//判断物资有没有出库详情
		CG_CK_M1S1 cgck = new CG_CK_M1S1();
		cgck.setcConnum(tpCgcontractst.getcConnum());
		cgck.setcConline(tpCgcontractst.getcConline());
		List<CG_CK_M1S1> cgckList = cgckMapper.selectByConnumline(cgck);
		if(cgckList.size() > 0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailShowWarningMsg).msg("已有出库无法合并").build();
		}
		
		int i = 0;//合同行号
		if(tpCgcontractst.getcConline().trim().length() > 5) {
			List<TpCgcontractst> tpCgcont = tpCgcontractstMapper.selectByConline(tpCgcontractst.getcConnum(), tpCgcontractst.getcConline().substring(0, 5));
			i = tpCgcont.size();
		}else {
			int row2 = tpCgcontractstMapper.deleteByUpdate(tpCgcontractst.getcId());
			if (row2 >= 0) {
				return builder.msg("拆分失败").errcode(Errcode.FailParameterError).build();
			}
		}
		for (TpCgcontractst tstt : shipnum) {
			if(tstt.getcGoodsname() != null) {
				tstt.setcSw08(tstt.getcGoodsname());
			}
			if(tstt.getcUnit() != null ) {
				tstt.setcUnitspec(tstt.getcUnit());
			}
			if(tstt.getcSpec() != null ) {
				tstt.setcCuspec(tstt.getcSpec());
			}
			if(tstt.getcConnum() == null) {
				tstt.setcConnum(tpCgcontractst.getcConnum());
			}
			if(tstt.getcGoodsnum() != null) {
				tstt.setcResiduenum(tstt.getcGoodsnum());
			}
			if ((i + 1) < 10) {
				tstt.setcConline(tpCgcontractst.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A000" + (i + 1));
			}
			if (10 <= (i + 1) && (i + 1) < 100) {
				tstt.setcConline(tpCgcontractst.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A00" + (i + 1));
			}
			if (100 <= (i + 1) && (i + 1) < 1000) {
				tstt.setcConline(tpCgcontractst.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A0" + (i + 1));
			}
			if (1000 <= (i + 1) && (i + 1) < 10000) {
				tstt.setcConline(tpCgcontractst.getcConline().substring(0, 5).replaceAll(" ", "").replaceAll("[\\r]", "")
						.replaceAll("[\\n]", "") + "-A" + (i + 1));
			}
			i++;//合同行号加1			
			tstt.setcMtid(tpCgcontractst.getcMtid());
			if(tpCgcontractst.getcSw02() != null) {
				tstt.setcSw02(tpCgcontractst.getcSw02());
			}
			if(tpCgcontractst.getcSw03() != null) {
				tstt.setcSw03(tpCgcontractst.getcSw03());
			}
			if(tpCgcontractst.getcSw05() != null) {
				tstt.setcSw05(tpCgcontractst.getcSw05());
			}		
			tstt.setcState("3");
			tstt.setcCreater(user.getUserName());
			tstt.setcCreatetime(new Date());
			tstt.setcGroudtotalnum("0");
			int row = tpCgcontractstMapper.insertSelective(tstt);
			if (row >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("拆分失败").errcode(Errcode.FailParameterError).build();
			}
		}
		return builder.msg("拆分成功！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> S1S21CXHB(User user,RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> shipnum = requestObject.getData().getShipnum();
		TpCgcontractst contractst = new TpCgcontractst();
		for (TpCgcontractst tpCgcontractst : shipnum) {
			if(tpCgcontractst.getcConline().length() > 5) {
				if(tpCgcontractst.getcConline().indexOf("-") != -1) {
									
					int row1 = tpCgcontractstMapper.updateByDelete(tpCgcontractst);
					if(row1 >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
					List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByConline(tpCgcontractst.getcConnum(),tpCgcontractst.getcConline().substring(0, 5));
					if(tstlist.size() == 0) {
						contractst.setcConline(tpCgcontractst.getcConline().substring(0, 5));
						contractst.setcConnum(tpCgcontractst.getcConnum());				
						int row0 = tpCgcontractstMapper.updateByNumLine(contractst);
						if(row0 >= 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
						}
					}
					
				}
				if(tpCgcontractst.getcConline().indexOf("/") != -1) {
					String[] str = tpCgcontractst.getcConline().split("/");	
					for (String string : str) {
						contractst.setcConnum(tpCgcontractst.getcConnum());
						contractst.setcConline(string);		
						int row0 = tpCgcontractstMapper.updateByNumLine(contractst);
						if(row0 >= 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
						}
					}
					int row1 = tpCgcontractstMapper.updateByDelete(tpCgcontractst);
					if(row1 >= 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销失败！").errcode(Errcode.FailParameterError).build();
					}
				}
			}
		}
		return builder.msg("撤销成功！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21select(
			RequestObject<EmptyTag, ExcelCONST> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgcontractst tpCgcontractst = requestObject.getData().getTpCgcontractst();
		TpCgcontractmt tpCgcontractmt = requestObject.getData().getStList().get(0);
		tpCgcontractst.setcMtid(tpCgcontractmt.getcId());
		List<TpCgcontractst> tstlist = tpCgcontractstMapper.selectByS1S21(tpCgcontractst);
		return builder.data(tstlist).errcode(Errcode.Success).msg("查询成功").build();
	}

	
}

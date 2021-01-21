package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CLAUSE_M1S1;
import code_fb.mapper.CLAUSE_Mapper;
import code_fb_cg.entity.ContractVoBean;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpSettlement;
import code_fb_cg.mapper.TbCgcontractMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCguserMapper;
import code_fb_cg.mapper.TpChorderstMapper;
import code_fb_cg.mapper.TpSettlementMapper;
import code_fb_cg.request.DelInformation;
import code_fb_cg.request.OrderBeforeRequest;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.TpCgorderRequest;
import code_fb_cg.request.TpCgorderbeforeCondition;
import code_fb_cg.request.YDJ_Req;
import code_fb_cg.service.TpCgorderbeforeService;
import code_fb_cg.util.ClauseUtil;
import code_fb_cg.util.ContractUtil;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service
public class TpCgorderbeforeServiceImpl implements TpCgorderbeforeService {

	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	@Autowired // 请购单主表
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired // 请购单子表
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired // 合同主表
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired // 合同子表
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired 
	private TpCguserMapper tpCguserMapper;
	@Autowired
	private TbCgcontractMapper tbCgcontractMapper;
	@Autowired //拟合同主表
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired //拟合同子表
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	//结算协议
	@Autowired
	private TpSettlementMapper tpSettlementMapper;
	@Autowired
	private CLAUSE_Mapper clauseMapper;
	@Autowired
	private TpChorderstMapper tpChorderstMapper;
	
	public ResponseObject<EmptyTag, List<TpCgorderbefore>> getByCondition(TpCgorderbeforeCondition condition,
			String session) {

		ResponseObjectBuilder<EmptyTag, List<TpCgorderbefore>> buidler = ResponseObjectBuilder.create();

		List<TpCgorderbefore> result = tpCgorderbeforeMapper.getByCondition(condition);

		if (result.isEmpty()) {

			return buidler.errcode(Errcode.FailParameterError).msg("没有记录").session(session).build();
		}

		return buidler.data(result).errcode(Errcode.Success).session(session).build();

	}

	public ResponseObject<EmptyTag, EmptyData> save(YDJ_Req ydj_req, String session) {

		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		RandomId sss = new RandomId();
		String ss = sss.getRandomId();

		// ydj_req.getTpCgorderbefore().setcState("0");//预登记状态
		// ydj_req.getTpCgorderbefore().setcSw02(ss);//预登记统一的号码
		// int row = 0;
		// for(int i= 0 ;i<ydj_req.getTpCgorderst().size();i++)
		// {
		// row =
		// tpCgorderbeforeMapper.insertSelective(ydj_req.getTpCgorderbefore(),ydj_req.getTpCgorderst().get(i));
		// //更新st的状态
		// int row1 =
		// tpCgorderbeforeMapper.update_st_Cstate(ydj_req.getTpCgorderst().get(i).getcId());
		// //是否能更新mt的状态
		// List <TpCgorderst> tpCgorderst =
		// tpCgorderbeforeMapper.IFORNOT_tpCgordermt_Cstate(ydj_req.getTpCgorderst().get(i).getcMtid());
		// if (tpCgorderst.size()==0) {
		// int row2=
		// tpCgorderbeforeMapper.update_tpCgordermt_Cstate(ydj_req.getTpCgorderst().get(i).getcMtid());
		// }
		// }
		// if(row < 0){
		//
		// return buidler.msg("添加成功").errcode(Errcode.Success).session(session).build();
		// }

		return buidler.msg("添加失败").errcode(Errcode.FailParameterError).session(session).build();
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> saveContract(YDJ_Req ydj_Req, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 查询权限信息
		int row;
		ContractVoBean conadd = ydj_Req.getContractID();// 模态框传的值
		TpCgcontractmt tpCgcontractmt;
		tpCgcontractmt = new TpCgcontractmt();
		// 合同子表
		TpCgcontractst tpCgcontractst;
		tpCgcontractst = new TpCgcontractst();
		// 实例化合同ID主键
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		
		List<TpCgorderst> rstList = new ArrayList<TpCgorderst>();
		// 选中的请购单及物资信息
		for (ContractVoBean cvb : ydj_Req.getContractVoBean()) {
			// 请购单主表
			// TpCgordermt tpCgordermt =
			// tpCgordermtMapper.selectByPrimaryKey(cvb.getcMtid());
			// 请购单子表
			// TpCgorderst tpCgorderst = tpCgorderstMapper.selectByPrimaryKey(cvb.getcId());
			// 查询合同号是否已存在
			List<TpCgcontractmt> b = tpCgcontractmtMapper.selectByConnum(conadd.getcConnum());

			// 特殊合同不需要存在校验
			if (b.size() != 0) {
				return buidler.msg("合同号已存在").errcode(Errcode.FailParameterError).session(session).build();
			}
			// 合同ID
			tpCgcontractmt.setcId(id);
			// 设置合同号
			tpCgcontractmt.setcConnum(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			tpCgcontractmt.setcSw03(conadd.getcSw03().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 货物名称
			// 签订公司
			tpCgcontractmt.setcCludecom(conadd.getcCludecom().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			// //到货地点 目的地
			tpCgcontractmt.setcCludeaddr(conadd.getcCludeaddr());
			// 供应商z
			tpCgcontractmt.setcSupplier(conadd.getcSupplier().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			BigDecimal money;
			BigDecimal sw1;
			if ("".equals(conadd.getcConmoney()) || conadd.getcConmoney() == null
					|| conadd.getcConmoney().indexOf(" ") == 0) {
				conadd.setcConmoney("0");
				money = new BigDecimal(conadd.getcConmoney().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 合同金额
			} else {
				if (conadd.getcConmoney().indexOf(" ") != -1) {
					money = new BigDecimal(conadd.getcConmoney().replaceAll(" ", ""));// 合同金额 如果字符串中存在空格" " 则全部替换""
				} else {
					money = new BigDecimal(conadd.getcConmoney().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 合同金额
				}
			}
			//已付款金额
			if ("".equals(conadd.getcSw01()) || conadd.getcSw01() == null || conadd.getcSw01().indexOf(" ") == 0) {
				conadd.setcSw01("0");
				sw1 = new BigDecimal(conadd.getcSw01());
			} else {
				if (conadd.getcSw01().indexOf(" ") != -1) {
					sw1 = new BigDecimal(conadd.getcSw01().replaceAll(" ", ""));// 实付金额
				} else {
					sw1 = new BigDecimal(conadd.getcSw01());// 实付金额
				}
			}

			String sss = ri.formatForTwo(money.subtract(sw1));
			// 实际合同金额
			tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
			// 合同金额
			tpCgcontractmt.setcSw09(ri.formatForTwo(money));
			// 实付金额
			// tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
			// 未付金额
			// tpCgcontractmt.setcSw02(sss);

			if (money.subtract(sw1).intValue() == 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				if (sss.indexOf("-.") != -1) {
					StringBuilder sb = new StringBuilder(sss);// 构造一个StringBuilder对象
					tpCgcontractmt.setcSw02((sb.insert(1, "0")).toString());
				} else {
					tpCgcontractmt.setcSw02(sss);
				}
				tpCgcontractmt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() < 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() > 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmt.setcSignstep("2");
			}
			if(sw1.compareTo(new BigDecimal("0")) == 0) {
				// 签字步骤-付款情况
				tpCgcontractmt.setcSignstep("0");
			}
			// 付款方式
			tpCgcontractmt.setcPayway(conadd.getcPayway());
			
			//tpCgcontractmt.setcSw09(conadd.getcSw09());
			// 预计到货时间
			tpCgcontractmt.setcDr(conadd.getcDr());
			// 签订时间
			if(conadd.getcCludetime() == null) {
				tpCgcontractmt.setcCludetime(new Date());
			}else {
				tpCgcontractmt.setcCludetime(conadd.getcCludetime());
			}		
			// 采购员
			tpCgcontractmt.setcSw10(conadd.getcSw10());
			// 验收方式
			tpCgcontractmt.setcCheckway("0");
			
			// 运输方式-开票信息
			tpCgcontractmt.setcTransway("0");
			// 传给国外时间
			// tpCgcontractmt.setcForinland(null);
			// 国外回传时间
			// tpCgcontractmt.setcForoutland(null);
			// 备注
			tpCgcontractmt.setcRemark(null);
			// 合同状态
			tpCgcontractmt.setcState("3");
			// 时间戳
			// tpCgcontractmt.setcTimestamp(null);
			// 创建人
			tpCgcontractmt.setcCreater(cvb.getcCreater());
			// 创建时间
			tpCgcontractmt.setcCreatetime(new Date());
			// 船号-货物名称
			// tpCgcontractmt.setcSw03(null);
			// 出船日期
			tpCgcontractmt.setcSw04(null);
			// 外贸号-存档号
			tpCgcontractmt.setcSw05(cvb.getcNo());
			// 作废人
			tpCgcontractmt.setcSw06(null);
			// 作废时间
			tpCgcontractmt.setcSw07(null);
			// 作废原因
			tpCgcontractmt.setcSw08(null);
			// 预计到货说明
			tpCgcontractmt.setcSw11(null);
			// 删除标识
			tpCgcontractmt.setcSw14("0");
			try {
				if (conadd.getcDr() != null && conadd.getcGettime() != null) {
					BIGString bigs = new BIGString();
					int i = bigs.compare_date(conadd.getcDr(), conadd.getcGettime());
					if (i == 1) {
						// 相差的天数
						int daysBetween = bigs.daysBetween(conadd.getcGettime(), conadd.getcDr());
						tpCgcontractmt.setcSw12("+" + String.valueOf(daysBetween) + "天");
					} else if (i == -1) {
						int daysBetween;
						daysBetween = bigs.daysBetween(conadd.getcDr(), conadd.getcGettime());
						tpCgcontractmt.setcSw12("-" + String.valueOf(daysBetween) + "天");
					} else {
						int daysBetween = 0;
						tpCgcontractmt.setcSw12(String.valueOf(daysBetween) + "天");
					}
				}
			} catch (ParseException e) {
				System.out.println("转合同：计算提前/延迟时间-时异常：" + e.getMessage());
				e.printStackTrace();
			}
			if (conadd.getcDr() == null || conadd.getcGettime() == null) {
				tpCgcontractmt.setcSw12(null);
			}
			// 最后到货时间
			tpCgcontractmt.setcGettime(conadd.getcGettime());
			// 请购主表主键
			// tpCgcontractmt.setcOrmtid(contractVoBean.getcOrmtid());
			// 请购子表主键
			// tpCgcontractmt.setcOrstid(tpCgorderst.getcId());
			// 合同主表
			row = tpCgcontractmtMapper.insertSelective(tpCgcontractmt);

			if (row < 1) {
				for (int i = 0; i < ydj_Req.getContractVoBean().size(); i++) {
					ContractVoBean contractVoBean = ydj_Req.getContractVoBean().get(i);
					// 合同主表主键
					tpCgcontractst.setcMtid(id);
					// 物资名称
					tpCgcontractst.setcGoodsname(contractVoBean.getcGoodsname());
					tpCgcontractst.setcSw08(contractVoBean.getcGoodsname());
					// 规格型号
					tpCgcontractst.setcSpec(contractVoBean.getcSpec());
					// 单位
//					if(contractVoBean.getcUnit() != null && contractVoBean.getcUnit() != "") {
//						String dw = contractVoBean.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//						TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//						if(thority != null) {
					tpCgcontractst.setcUnit(contractVoBean.getcUnit());// 单位						
//						}else {
//							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//							return buidler.msg("物资名称为: "+contractVoBean.getcGoodsname()+ "的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).session(session).build();
//						}
//					}else {
//						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return buidler.msg("物资名称为: "+contractVoBean.getcGoodsname()+ "的物资单位不能为空").errcode(Errcode.FailShowWarningMsg).session(session).build();
//					}
					// 单价
					tpCgcontractst.setcPrice(null);
					// 合同行号
					b = tpCgcontractmtMapper.selectByConnum(contractVoBean.getcConnum());
					if (b.size() == 1) {
						List<TpCgcontractst> num = tpCgcontractstMapper.selectByCountSt(contractVoBean.getcConnum());
						if (num.size() < 10) {
							// 合同行号
							if ((num.size() + 1) == 10) {
								tpCgcontractst.setcConline("000" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("0000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 9 && num.size() < 100) {
							// 合同行号
							if ((num.size() + 1) == 100) {
								tpCgcontractst.setcConline("00" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 99 && num.size() < 1000) {
							// 合同行号
							if ((num.size() + 1) == 1000) {
								tpCgcontractst.setcConline("0" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("00" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 999 && num.size() < 10000) {
							if ((num.size() + 1) == 10000) {
								tpCgcontractst.setcConline(String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("0" + String.valueOf(num.size() + 1));
							}
						}
					}
					if (b.size() == 0) {
						if ((i + 1) == 10) {
							tpCgcontractst.setcConline("000" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 100) {
								tpCgcontractst.setcConline("00" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 1000) {
									tpCgcontractst.setcConline("0" + String.valueOf(i + 1));
								} else {
									if ((i + 1) == 10000) {
										tpCgcontractst.setcConline(String.valueOf(i + 1));
									} else {
										if ((i + 1) < 10) {
											tpCgcontractst.setcConline("0000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10) {
											tpCgcontractst.setcConline("000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 100) {
											tpCgcontractst.setcConline("00" + String.valueOf(i + 1));
										}
										if ((i + 1) > 1000) {
											tpCgcontractst.setcConline("0" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10000) {
											tpCgcontractst.setcConline(String.valueOf(i + 1));
										}
									}
								}
							}
						}
						// tpCgcontractst.setcConline("0000"+String.valueOf(i+1));
					}
					// 订货数量
					tpCgcontractst.setcGoodsnum(contractVoBean.getcNum());
					// 订货情况
					tpCgcontractst.setcGoodscase(null);
					// 含税总价
					tpCgcontractst.setcSumprice(null);
					// 预计到货时间
					tpCgcontractst.setcBeforearrtime(null);
					// 预计到货说明
					tpCgcontractst.setcArrgoodsex(null);
					// 到货时间
					tpCgcontractst.setcArrgoodstime(null);
					// 累计到货量
					tpCgcontractst.setcGroudtotalnum("0");
					// 剩余数量
					tpCgcontractst.setcResiduenum(contractVoBean.getcNum());
					// 是/否到齐
					tpCgcontractst.setcArrallyorn("0");
					// 备注
					tpCgcontractst.setcRemark(null);
					// 预登记状态
					tpCgcontractst.setcState("3");
					// 是/否验收
					tpCgcontractst.setcCheckyorn("0");
					// 质保期限
					tpCgcontractst.setcQuadealline(null);
					// 请购单号ID
					tpCgcontractst.setcOrid(contractVoBean.getcMtid());
					// 删除标识
					tpCgcontractst.setcDr("0");
					// 时间戳
					tpCgcontractst.setcTimestamp(new Date());
					// 物资单号
					tpCgcontractst.setcSw02(contractVoBean.getcId());
					// 请购单号
					tpCgcontractst.setcSw03(contractVoBean.getcOrdernum());
					// 是否有出船记录
					tpCgcontractst.setcSw04("0");
					// 外贸号-存档号
					tpCgcontractst.setcSw05(contractVoBean.getcNo());
					//累计出库量
					tpCgcontractst.setcSw09("0");
					// 创建人
					tpCgcontractst.setcCreater(contractVoBean.getcCreater());
					// 创建时间
					tpCgcontractst.setcCreatetime(new Date());
					// 合同号
					tpCgcontractst.setcConnum(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					row = tpCgcontractstMapper.insertSelective(tpCgcontractst);
					TpCgorderst rst = new TpCgorderst();
					rst.setcId(contractVoBean.getcId());
					rst.setcState("1");
					rst.setcSw10(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					rst.setcManor(conadd.getcSw10());
					rstList.add(rst);
//					TpCgorderbefore list = new TpCgorderbefore();
//					list.setcOrstid(contractVoBean.getcId());
//					int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
//					if (row0 == 0) {
//						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
//					}
				}
				if(rstList.size() > 0) {
					int row0 = tpCgorderstMapper.updateTpCgorderst(rstList);
					if (row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
					}
				}
				if (row < 0) {
					return buidler.msg("转合同成功").errcode(Errcode.Success).session(session).build();
				} else {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
				}
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
			}
		}
		return null;

	}

	public ResponseObject<EmptyTag, EmptyData> saveAdd(OrderBeforeRequest data, String session) {
		// TODO 追加预登记
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 获取预登记的信息中 供货商和签订公司
		String gong = data.getList2().get(0).getcSupplier();// 供应商
		String qian = data.getList2().get(0).getcCludecom();// 签订公司
		String num = data.getList2().get(0).getcSw02();// 预登记号
		// 获取需要执行预登记的信息
		List<TpCgorderst> stList = data.getList();
		List<TpCgorderbefore> foreList = new ArrayList<TpCgorderbefore>();
		for (TpCgorderst st : stList) {
			TpCgorderbefore fore = new TpCgorderbefore();
			fore.setcSupplier(gong);
			fore.setcCludecom(qian);
			fore.setcSw02(num);
			fore.setcOrmtid(st.getcMtid());
			fore.setcOrstid(st.getcId());
			fore.setcGoodsname(st.getcGoodsname());
			fore.setcSpec(st.getcSpec());
			fore.setcUnit(st.getcUnit());
			fore.setcSum(st.getcNum());
			fore.setcOrman(st.getcManor());
			fore.setcPhone(st.getcPhone());
			fore.setcState("0");
			fore.setcCreater(data.getList2().get(0).getcCreater());
			fore.setcCreatetime(new Date());
			fore.setcSw03(st.getcSw04());
			fore.setcSw01(st.getcMustneed());
			foreList.add(fore);
			// 更新st的状态
			int row1 = tpCgorderbeforeMapper.update_st_Cstate(st.getcId());
			// 是否能更新mt的状态
			List<TpCgorderst> tpCgorderst = tpCgorderbeforeMapper.IFORNOT_tpCgordermt_Cstate(st.getcMtid());
			if (tpCgorderst.size() == 0) {
				int row2 = tpCgorderbeforeMapper.update_tpCgordermt_Cstate(st.getcMtid());
			}
		}
		// 生成预登记信息
		int row = tpCgorderbeforeMapper.insertAdd(foreList);
		if (row == 0) {
			return buidler.errcode(Errcode.FailParameterError).msg("追加预登记失败").build();
		}
		return buidler.errcode(Errcode.Success).msg("追加预登记成功").build();
	}

	public ResponseObject<EmptyTag, EmptyData> saveDel(OrderBeforeRequest data, String session) {
		// TODO 删除预登记
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 获取已经预登记的信息
		List<TpCgorderbefore> foreList = data.getList2();
		// 删除预登记的信息
		int row1 = tpCgorderbeforeMapper.deleteBefore(foreList);
		if (row1 == 0) {
			return buidler.errcode(Errcode.FailParameterError).msg("删除预登记失败").build();
		}
		for (TpCgorderbefore tpCgorderbefore : foreList) {
			// 还原请购单和物资的状态
			int row2 = tpCgorderbeforeMapper.update_st_Cstate2(tpCgorderbefore.getcOrstid());
			if (row1 == 0) {
				return buidler.errcode(Errcode.FailParameterError).msg("删除预登记失败st").build();
			}
			// List <TpCgorderst> tpCgorderst =
			// tpCgorderbeforeMapper.IFORNOT_tpCgordermt_Cstate(tpCgorderbefore.getcOrmtid());
			// if (tpCgorderst.size()!=0) {
			int row3 = tpCgorderbeforeMapper.update_tpCgordermt_Cstate2(tpCgorderbefore.getcOrmtid());
			if (row1 == 0) {
				return buidler.errcode(Errcode.FailParameterError).msg("删除预登记失败mt").build();
			}
			// }
		}
		return buidler.errcode(Errcode.Success).msg("删除预登记成功").build();
	}

	public ResponseObject<EmptyTag, EmptyData> tSaveContract(YDJ_Req ydj_Req, String session) {

		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 查询权限信息
		int row;
		ContractVoBean conadd = ydj_Req.getContractID();// 模态框传的值
		TpCgcontractmt tpCgcontractmt;
		tpCgcontractmt = new TpCgcontractmt();
		// 合同子表
		TpCgcontractst tpCgcontractst;
		tpCgcontractst = new TpCgcontractst();
		// 实例化合同ID主键
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		// 选中的请购单及物资信息
		for (ContractVoBean cvb : ydj_Req.getContractVoBean()) {
			// 请购单主表
			// TpCgordermt tpCgordermt =
			// tpCgordermtMapper.selectByPrimaryKey(cvb.getcMtid());
			// 请购单子表
			// TpCgorderst tpCgorderst = tpCgorderstMapper.selectByPrimaryKey(cvb.getcId());
			// 查询合同号是否已存在
			List<TpCgcontractmt> b = tpCgcontractmtMapper.selectByConnum(conadd.getcConnum());

			// 特殊合同不需要存在校验
			/*
			 * if(b.size()!=0) { return
			 * buidler.msg("合同号已存在").errcode(Errcode.FailParameterError).session(session).
			 * build(); }
			 */
			// 合同ID
			tpCgcontractmt.setcId(id);
			// 设置合同号
			tpCgcontractmt.setcConnum(cvb.getcConnum());
			tpCgcontractmt.setcSw03(conadd.getcSw03());// 货物名称
			// 签订公司
			tpCgcontractmt.setcCludecom(conadd.getcCludecom());
			// 到货地址
			tpCgcontractmt.setcCludeaddr(conadd.getcCludeaddr());
			// 供应商z
			tpCgcontractmt.setcSupplier(conadd.getcSupplier());
			BigDecimal money;
			BigDecimal sw1;
			if ("".equals(conadd.getcConmoney()) || conadd.getcConmoney() == null
					|| conadd.getcConmoney().indexOf(" ") == 0) {
				conadd.setcConmoney("0");
				money = new BigDecimal(conadd.getcConmoney());// 合同金额
			} else {
				if (conadd.getcConmoney().indexOf(" ") != -1) {
					money = new BigDecimal(conadd.getcConmoney().replaceAll(" ", ""));// 合同金额 如果字符串中存在空格" " 则全部替换""
				} else {
					money = new BigDecimal(conadd.getcConmoney());// 合同金额
				}
			}
			if ("".equals(conadd.getcSw01()) || conadd.getcSw01() == null || conadd.getcSw01().indexOf(" ") == 0) {
				conadd.setcSw01("0");
				sw1 = new BigDecimal(conadd.getcSw01());
			} else {
				if (conadd.getcSw01().indexOf(" ") != -1) {
					sw1 = new BigDecimal(conadd.getcSw01().replaceAll(" ", ""));// 实付金额
				} else {
					sw1 = new BigDecimal(conadd.getcSw01());// 实付金额
				}
			}

			String sss = ri.formatForTwo(money.subtract(sw1));
			// 实际合同金额
			tpCgcontractmt.setcConmoney(ri.formatForTwo(money));
			// 合同金额
			tpCgcontractmt.setcSw09(ri.formatForTwo(money));
			// 实付金额
			// tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
			// 未付金额
			// tpCgcontractmt.setcSw02(sss);

			if (money.subtract(sw1).intValue() == 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				if (sss.indexOf("-.") != -1) {
					StringBuilder sb = new StringBuilder(sss);// 构造一个StringBuilder对象
					tpCgcontractmt.setcSw02((sb.insert(1, "0")).toString());
				} else {
					tpCgcontractmt.setcSw02(sss);
				}
				tpCgcontractmt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() < 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() > 0) {
				tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmt.setcSignstep("0");
			}

			// 付款方式
			tpCgcontractmt.setcPayway(conadd.getcPayway());
//			tpCgcontractmt.setcSw09(conadd.getcSw09());
			// 预计到货时间
			tpCgcontractmt.setcDr(conadd.getcDr());
			// 签订时间
			if(conadd.getcCludetime() == null) {
				tpCgcontractmt.setcCludetime(new Date());
			}else {
				tpCgcontractmt.setcCludetime(conadd.getcCludetime());
			}
			
			// 采购员
			tpCgcontractmt.setcSw10(conadd.getcSw10());
			// 验收方式
			tpCgcontractmt.setcCheckway("0");
			// 签字步骤-付款情况
			tpCgcontractmt.setcSignstep("0");
			// 运输方式-开票信息
			tpCgcontractmt.setcTransway("0");
			// 传给国外时间
			// tpCgcontractmt.setcForinland(null);
			// 国外回传时间
			// tpCgcontractmt.setcForoutland(null);
			// 备注
			tpCgcontractmt.setcRemark(null);
			// 合同状态
			tpCgcontractmt.setcState("3");
			// 时间戳
			// tpCgcontractmt.setcTimestamp(null);
			// 创建人
			tpCgcontractmt.setcCreater(cvb.getcCreater());
			// 创建时间
			tpCgcontractmt.setcCreatetime(new Date());
			// 船号-货物名称
			// tpCgcontractmt.setcSw03(null);
			// 出船日期
			tpCgcontractmt.setcSw04(null);
			// 外贸号-存档号
			tpCgcontractmt.setcSw05(cvb.getcNo());
			// 作废人
			tpCgcontractmt.setcSw06(null);
			// 作废时间
			tpCgcontractmt.setcSw07(null);
			// 作废原因
			tpCgcontractmt.setcSw08(null);
			// 预计到货说明
			tpCgcontractmt.setcSw11(null);
			// 删除标识
			tpCgcontractmt.setcSw14("0");
			try {
				if (conadd.getcDr() != null && conadd.getcGettime() != null) {
					BIGString bigs = new BIGString();
					int i = bigs.compare_date(conadd.getcDr(), conadd.getcGettime());
					if (i == 1) {
						// 相差的天数
						int daysBetween = bigs.daysBetween(conadd.getcGettime(), conadd.getcDr());
						tpCgcontractmt.setcSw12("+" + String.valueOf(daysBetween) + "天");
					} else if (i == -1) {
						int daysBetween;
						daysBetween = bigs.daysBetween(conadd.getcDr(), conadd.getcGettime());
						tpCgcontractmt.setcSw12("-" + String.valueOf(daysBetween) + "天");
					} else {
						int daysBetween = 0;
						tpCgcontractmt.setcSw12(String.valueOf(daysBetween) + "天");
					}
				}
			} catch (ParseException e) {
				System.out.println("转合同：计算提前/延迟时间-时异常：" + e.getMessage());
				e.printStackTrace();
			}
			if (conadd.getcDr() == null || conadd.getcGettime() == null) {
				tpCgcontractmt.setcSw12(null);
			}
			// 最后到货时间
			tpCgcontractmt.setcGettime(conadd.getcGettime());
			// 请购主表主键
			// tpCgcontractmt.setcOrmtid(contractVoBean.getcOrmtid());
			// 请购子表主键
			// tpCgcontractmt.setcOrstid(tpCgorderst.getcId());
			// 合同主表
			row = tpCgcontractmtMapper.insertSelective(tpCgcontractmt);

			if (row < 1) {
				for (int i = 0; i < ydj_Req.getContractVoBean().size(); i++) {
					ContractVoBean contractVoBean = ydj_Req.getContractVoBean().get(i);
					// 合同主表主键
					tpCgcontractst.setcMtid(id);
					// 物资名称
					tpCgcontractst.setcGoodsname(contractVoBean.getcGoodsname());
					// 规格型号
					tpCgcontractst.setcSpec(contractVoBean.getcSpec());
					// 单位
					tpCgcontractst.setcUnit(contractVoBean.getcUnit());
					// 单价
					tpCgcontractst.setcPrice(null);
					// 合同行号
					b = tpCgcontractmtMapper.selectByConnum(contractVoBean.getcConnum());
					if (b.size() == 1) {
						List<TpCgcontractst> num = tpCgcontractstMapper.selectByCountSt(contractVoBean.getcConnum());
						if (num.size() < 10) {
							// 合同行号
							if ((num.size() + 1) == 10) {
								tpCgcontractst.setcConline("000" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("0000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 9 && num.size() < 100) {
							// 合同行号
							if ((num.size() + 1) == 100) {
								tpCgcontractst.setcConline("00" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 99 && num.size() < 1000) {
							// 合同行号
							if ((num.size() + 1) == 1000) {
								tpCgcontractst.setcConline("0" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("00" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 999 && num.size() < 10000) {
							if ((num.size() + 1) == 10000) {
								tpCgcontractst.setcConline(String.valueOf(num.size() + 1));
							} else {
								tpCgcontractst.setcConline("0" + String.valueOf(num.size() + 1));
							}
						}
					}
					if (b.size() == 0) {
						if ((i + 1) == 10) {
							tpCgcontractst.setcConline("000" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 100) {
								tpCgcontractst.setcConline("00" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 1000) {
									tpCgcontractst.setcConline("0" + String.valueOf(i + 1));
								} else {
									if ((i + 1) == 10000) {
										tpCgcontractst.setcConline(String.valueOf(i + 1));
									} else {
										if ((i + 1) < 10) {
											tpCgcontractst.setcConline("0000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10) {
											tpCgcontractst.setcConline("000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 100) {
											tpCgcontractst.setcConline("00" + String.valueOf(i + 1));
										}
										if ((i + 1) > 1000) {
											tpCgcontractst.setcConline("0" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10000) {
											tpCgcontractst.setcConline(String.valueOf(i + 1));
										}
									}
								}
							}
						}
						// tpCgcontractst.setcConline("0000"+String.valueOf(i+1));
					}
					// 订货数量
					tpCgcontractst.setcGoodsnum(contractVoBean.getcNum());
					// 订货情况
					tpCgcontractst.setcGoodscase(null);
					// 含税总价
					tpCgcontractst.setcSumprice(null);
					// 预计到货时间
					tpCgcontractst.setcBeforearrtime(null);
					// 预计到货说明
					tpCgcontractst.setcArrgoodsex(null);
					// 到货时间
					tpCgcontractst.setcArrgoodstime(null);
					// 累计到货量
					tpCgcontractst.setcGroudtotalnum("0");
					// 剩余数量
					tpCgcontractst.setcResiduenum(contractVoBean.getcNum());
					// 是/否到齐
					tpCgcontractst.setcArrallyorn("0");
					// 备注
					tpCgcontractst.setcRemark(conadd.getcRemark());
					// 预登记状态
					tpCgcontractst.setcState("3");
					// 是/否验收
					tpCgcontractst.setcCheckyorn("0");
					// 质保期限
					tpCgcontractst.setcQuadealline(null);
					// 请购单号ID
					tpCgcontractst.setcOrid(contractVoBean.getcMtid());
					// 删除标识
					tpCgcontractst.setcDr("0");
					// 时间戳
					tpCgcontractst.setcTimestamp(new Date());
					// 物资单号
					tpCgcontractst.setcSw02(contractVoBean.getcId());
					// 请购单号
					tpCgcontractst.setcSw03(contractVoBean.getcOrdernum());
					// 是否有出船记录
					tpCgcontractst.setcSw04("0");
					// 外贸号-存档号
					tpCgcontractst.setcSw05(contractVoBean.getcNo());
					// 创建人
					tpCgcontractst.setcCreater(contractVoBean.getcCreater());
					// 创建时间
					tpCgcontractst.setcCreatetime(new Date());
					// 合同号
					tpCgcontractst.setcConnum(contractVoBean.getcConnum());
					row = tpCgcontractstMapper.insertSelective(tpCgcontractst);
					TpCgorderbefore list = new TpCgorderbefore();
					list.setcOrstid(contractVoBean.getcId());
					int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
					if (row0 == 0) {
						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
					}
				}
				if (row < 0) {
					return buidler.msg("转合同成功").errcode(Errcode.Success).session(session).build();
				} else {
					return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
				}
			} else {
				return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
			}
		}
		return null;
	}

	/**
	 * 模拟合同----合同物资合并版
	 */
	@Transactional

	public ResponseObject<EmptyTag, EmptyData> saveContract(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		BIGString bigs = new BIGString();
		//合同主表
		TpCgcontractmt tpCgcontractmtt  = new TpCgcontractmt();
		tP_SimContract.getTpCgcontractmt();
		//合同子表
		TpCgcontractst tpCgcontractst = new TpCgcontractst();
		List<TpCgcontractst> contractstList = new ArrayList<TpCgcontractst>();
		try {
			DelInformation delInformation = new DelInformation();
			//1.获取合同主表合同号，需方，签订时间，供方，签订地址信息
			tP_SimContract.getTpCgcontractmt();
			//2.判断合同号是否重复----合同号不能为空
			List<TpCgcontractmt> selectByConnum = tpCgcontractmtMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			System.out.println("list长度：："+selectByConnum.size());
			if(selectByConnum.size() > 0) {
				return buidler.msg("该合同号已存在!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
			//3.合同主表中添加信息
			//签订公司
			tP_SimContract.getTpCgcontractmt().setcCludecom(get_data_value(tP_SimContract.getTpCgcontractmt().getcCludecom(),"签订公司").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			ContractUtil contractUtil = new ContractUtil();
			for (TpCgorderRequest tpCgcontractmt : tP_SimContract.getTpCgorderRequest()) {
				System.out.println("含税总价：：："+tpCgcontractmt.getcSumprice());
			}
			
			TpCgcontractmtt addTpCgcontractmt = contractUtil.addTpCgcontractmt(user, tP_SimContract, delInformation, tpCgcontractmtt);
			int row = tpCgcontractmttMapper.insertSelective(addTpCgcontractmt);
			System.out.println("添加成功返回的参数：："+row);
			if(row>1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//4.合同详细表中添加信息
//			List<TbCgcontract> addTbCgcontract = contractUtil.addTbCgcontract(user, tP_SimContract.getTpCgcontractmt());
			 List<TbCgcontract> addTbCgcontract = contractUtil.addTbCgcontract(user, tP_SimContract);
			int insertrow = tbCgcontractMapper.insertTbCgcontract(addTbCgcontract);
			System.out.println("添加合同详情返回参数::"+insertrow);
			if(insertrow >1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//5.合同子表中添加信息
			//先添加数据再考虑合并现象
			//合同主表
			List<TpCgcontractmt> getByConnum = tpCgcontractmtMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			//合同子表
			System.out.println("单价和总价：：：："+tP_SimContract.getTpCgorderRequest().get(0).getcPrice()+"::::"+ tP_SimContract.getTpCgorderRequest().get(0).getcSumprice());
			//添加合同子表信息
//			List<TpCgcontractst> tpCgcontractstList  = new ArrayList<TpCgcontractst>();
			for (int i = 0; i <tP_SimContract.getTpCgorderRequest().size(); i++) {
				TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(i);
				TpCgcontractstt tpCgcontract =  new TpCgcontractstt();
				// 合同主表主键
				tpCgcontract.setcMtid(addTpCgcontractmt.getcId());
				// 物资名称
				tpCgcontract.setcGoodsname(tpCgorderRequest.getcGoodsname());
				// 规格型号
				tpCgcontract.setcSpec(tpCgorderRequest.getcSpec());
				// 单位
				tpCgcontract.setcUnit(tpCgorderRequest.getcUnit());
				// 含税单价
				tpCgcontract.setcPrice(tpCgorderRequest.getcPrice());
				if(getByConnum.size() == 1) { 
					List<TpCgcontractst> selectByCountSt =  tpCgcontractstMapper.selectByCountSt(tP_SimContract.getTpCgcontractmt().getcConnum());
					if (selectByCountSt.size() < 10) {
						// 合同行号
						if ((selectByCountSt.size() + 1) == 10) {
							tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
						} else {
							tpCgcontract.setcConline("0000" + String.valueOf(selectByCountSt.size() + 1));
						}
						if (selectByCountSt.size() > 9 && selectByCountSt.size() < 100) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 100) {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 99 && selectByCountSt.size() < 1000) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 999 && selectByCountSt.size() < 10000) {
							if ((selectByCountSt.size() + 1) == 10000) {
								tpCgcontract.setcConline(String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
					}
				}
				if (getByConnum.size() == 0) {
					if ((i + 1) == 10) {
						tpCgcontract.setcConline("000" + String.valueOf(i + 1));
					} else {
						if ((i + 1) == 100) {
							tpCgcontract.setcConline("00" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 10000) {
									tpCgcontract.setcConline(String.valueOf(i + 1));
								} else {
									if ((i + 1) < 10) {
										tpCgcontract.setcConline("0000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10) {
										tpCgcontract.setcConline("000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 100) {
										tpCgcontract.setcConline("00" + String.valueOf(i + 1));
									}
									if ((i + 1) > 1000) {
										tpCgcontract.setcConline("0" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10000) {
										tpCgcontract.setcConline(String.valueOf(i + 1));
									}
								}
							}
						}
					}
				
				}
				
				// 订货数量
				tpCgcontract.setcGoodsnum(tpCgorderRequest.getcNum());
				// 订货情况
				tpCgcontract.setcGoodscase(null);
				// 含税总价
				tpCgcontract.setcSumprice(tpCgorderRequest.getcSumprice());
				// 预计到货时间
				tpCgcontract.setcBeforearrtime(null);
				// 预计到货说明
				tpCgcontract.setcArrgoodsex(null);
				// 到货时间
				tpCgcontract.setcArrgoodstime(null);
				// 累计到货量
				tpCgcontract.setcGroudtotalnum("0");
				// 剩余数量
				tpCgcontract.setcResiduenum(tpCgorderRequest.getcNum());
				// 是/否到齐
				tpCgcontract.setcArrallyorn("0");
				// 备注
				tpCgcontract.setcRemark(tpCgorderRequest.getcRemarkc());
				// 预登记状态
				tpCgcontract.setcState("3");
				// 是/否验收
				tpCgcontract.setcCheckyorn("0");
				// 质保期限
				tpCgcontract.setcQuadealline(null);
				// 请购单号ID
				tpCgcontractst.setcOrid(tpCgorderRequest.getcMtid());
				// 删除标识
				tpCgcontract.setcDr("0");
				// 时间戳
				tpCgcontract.setcTimestamp(new Date());
				// 物资单号
				tpCgcontract.setcSw02(tpCgorderRequest.getcId());
				// 请购单号
				tpCgcontract.setcSw03(tpCgorderRequest.getcOrdernum());
				// 是否有出船记录
				tpCgcontract.setcSw04("0");
				// 外贸号-存档号
				tpCgcontract.setcSw05(tpCgorderRequest.getcNo());
				// 创建人
				tpCgcontract.setcCreater(user.getUserName());
				// 创建时间
				tpCgcontract.setcCreatetime(new Date());
				// 合同号
				tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				 int introw =  tpCgcontractsttMapper.insertSelective(tpCgcontract);
				 System.out.println("合同物资添加:::"+introw);
				 if(introw>0) {
					 return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
			}
			//合并问题 ------ 报关物资名称，报关物资规格相同的合并
			//1.获取传过来的物资数据，对报关物资名称，报关物资规格型号，备注
			//获取传过来的物资数据
			Map<String, List<TpCgorderRequest>> map1 = bigs.groupBillingDataBycCustoms(tP_SimContract.getTpCgorderRequest());
			System.out.println("报关物资名称::"+map1);
			Set<String> keySet1 = map1.keySet();
			Iterator<String> it1 = keySet1.iterator();
			while(it1.hasNext()) {
				String key1 = it1.next();
				List<TpCgorderRequest> value1 = map1.get(key1);
				//根据报关物资规格型号进行分组
				Map<String, List<TpCgorderRequest>> map11 = bigs.groupBillingDataByExcpBatchCodecCuspec(value1);
				System.out.println("报关物资规格::"+map11);
				Set<String> keySet11 = map11.keySet();
				Iterator<String> it11 = keySet11.iterator();
				while(it11.hasNext()) {
					String key11 = it11.next();
					List<TpCgorderRequest> value11 = map11.get(key11);
					Map<String, List<TpCgorderRequest>> map111 = bigs.groupBillingDataByExcpBatchCodeForcRemark(value11);
					System.out.println("报关物资备注::"+map11);
					Set<String> keySet111 = map111.keySet();
					Iterator<String> it111 = keySet111.iterator();
					while(it111.hasNext()) {
						String key111 = it111.next();
						List<TpCgorderRequest> value111 = map111.get(key111);
						System.out.println(key111+";"+value111);
						
						List<TpCgcontractstt> newList2 = new ArrayList<TpCgcontractstt>();
						
						for (int i = 0; i < value111.size(); i++) {
							//查询要合并的物资信息
							TpCgcontractstt conList2 = tpCgcontractsttMapper.getForGoodsnameAndSpec(
									null,
									null,
									value111.get(i).getcOrdernum(),
									value111.get(i).getcId());
							if(conList2 == null) {
								return buidler.msg("合同中没有对应的物资！！！").errcode(Errcode.FailParameterError).session(session).build();
							}
							newList2.add(conList2);
						}
						//工具类
						TpCgcontractstt tcst = contractUtil.addTpCgcontractst(newList2, value111, user, map1);
						System.out.println("备注:::::"+newList2.get(0).getcRemark());
						int inrows = tpCgcontractsttMapper.insertSelective(tcst);
						if(inrows>0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						}
						for (TpCgcontractstt tpCgcontract : newList2) {
							System.out.println("合同物资ID：：：："+tpCgcontract.getcId());
							int updaterows = tpCgcontractsttMapper.deleteByUpdate(tpCgcontract.getcId());
							if(updaterows>1) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
							}
						}
						
					}
				}
			}
			//6.更新请购物资表中的信息
			List<TpCgorderst> updateTpCgorderst = contractUtil.updateTpCgorderst(user, tP_SimContract.getTpCgcontractmt(), tP_SimContract.getTpCgorderRequest());
			int uprow = tpCgorderstMapper.updateTpCgorderst(updateTpCgorderst);
			System.out.println("更新物资表:::"+uprow);
			if(uprow >=0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			}
			return buidler.msg("模拟合同创建成功！！！").errcode(Errcode.Success).session(session).build();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
		
	}
	
	
	
	@SuppressWarnings("unused")
	private String get_data_value(String csubitemdes, String citemdes) {
		List<TpCgordermt> mt = tpCgordermtMapper.get_data_value(csubitemdes, citemdes);
		if (mt.size() > 0) {
			return mt.get(0).getcComname();
		}
		return "Err"; 
	}
	@SuppressWarnings("unused")
	private String get_data_subitemid (String subitemid, String citemdes) {
		List<TpCgordermt> mt = tpCgordermtMapper.get_data_subitemid(subitemid, citemdes);
		if (mt.size() > 0) {
			return mt.get(0).getcComname();
		}
		return "Err";
	}
	//转模拟合同
	public ResponseObject<EmptyTag, EmptyData> saveContractt(YDJ_Req data, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 查询权限信息
		int row;
		ContractVoBean conadd = data.getContractID();// 模态框传的值
		TpCgcontractmtt tpCgcontractmtt;
		tpCgcontractmtt = new TpCgcontractmtt();
		// 合同子表
		TpCgcontractstt tpCgcontractstt;
		tpCgcontractstt = new TpCgcontractstt();
		// 实例化合同ID主键
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		
		List<TpCgorderst> rstList = new ArrayList<TpCgorderst>();
		// 选中的请购单及物资信息
		for (ContractVoBean cvb : data.getContractVoBean()) {
			// 请购单主表
			// TpCgordermt tpCgordermt =
			// tpCgordermtMapper.selectByPrimaryKey(cvb.getcMtid());
			// 请购单子表
			// TpCgorderst tpCgorderst = tpCgorderstMapper.selectByPrimaryKey(cvb.getcId());
			// 查询合同号是否已存在
			List<TpCgcontractmtt> b = tpCgcontractmttMapper.selectByConnum(conadd.getcConnum());

			// 特殊合同不需要存在校验
			if (b.size() != 0) {
				return buidler.msg("合同号已存在").errcode(Errcode.FailParameterError).session(session).build();
			}
			// 合同ID
			tpCgcontractmtt.setcId(id);
			// 设置合同号
			tpCgcontractmtt.setcConnum(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			tpCgcontractmtt.setcSw03(conadd.getcSw03().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 货物名称
			// 签订公司
			tpCgcontractmtt.setcCludecom(conadd.getcCludecom().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			// mudidi
			tpCgcontractmtt.setcCludeaddr(conadd.getcSw09());
			// 供应商z
			tpCgcontractmtt.setcSupplier(conadd.getcSupplier().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			BigDecimal money;
			BigDecimal sw1;
			if ("".equals(conadd.getcConmoney()) || conadd.getcConmoney() == null
					|| conadd.getcConmoney().indexOf(" ") == 0) {
				conadd.setcConmoney("0");
				money = new BigDecimal(conadd.getcConmoney().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 合同金额
			} else {
				if (conadd.getcConmoney().indexOf(" ") != -1) {
					money = new BigDecimal(conadd.getcConmoney().replaceAll(" ", ""));// 合同金额 如果字符串中存在空格" " 则全部替换""
				} else {
					money = new BigDecimal(conadd.getcConmoney().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));// 合同金额
				}
			}
			//已付款金额
			if ("".equals(conadd.getcSw01()) || conadd.getcSw01() == null || conadd.getcSw01().indexOf(" ") == 0) {
				conadd.setcSw01("0");
				sw1 = new BigDecimal(conadd.getcSw01());
			} else {
				if (conadd.getcSw01().indexOf(" ") != -1) {
					sw1 = new BigDecimal(conadd.getcSw01().replaceAll(" ", ""));// 实付金额
				} else {
					sw1 = new BigDecimal(conadd.getcSw01());// 实付金额
				}
			}

			String sss = ri.formatForTwo(money.subtract(sw1));
			// 合同金额
			tpCgcontractmtt.setcConmoney(ri.formatForTwo(money));
			// 实付金额
			// tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
			// 未付金额
			// tpCgcontractmt.setcSw02(sss);

			if (money.subtract(sw1).intValue() == 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				if (sss.indexOf("-.") != -1) {
					StringBuilder sb = new StringBuilder(sss);// 构造一个StringBuilder对象
					tpCgcontractmtt.setcSw02((sb.insert(1, "0")).toString());
				} else {
					tpCgcontractmtt.setcSw02(sss);
				}
				tpCgcontractmtt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() < 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmtt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmtt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() > 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmtt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmtt.setcSignstep("2");
			}
			if(sw1.compareTo(new BigDecimal("0")) == 0) {
				// 签字步骤-付款情况
				tpCgcontractmtt.setcSignstep("0");
			}
			// 付款方式
			tpCgcontractmtt.setcPayway(conadd.getcPayway());
			// //送/收货地点 目的地
//			tpCgcontractmtt.setcSw09(conadd.getcSw09());
			// 预计到货时间
			tpCgcontractmtt.setcDr(conadd.getcDr());
			// 签订时间
			tpCgcontractmtt.setcCludetime(conadd.getcCludetime());
			// 采购员
			tpCgcontractmtt.setcSw10(conadd.getcSw10());
			// 验收方式
			tpCgcontractmtt.setcCheckway("0");
			
			// 运输方式-开票信息
			tpCgcontractmtt.setcTransway("0");
			// 传给国外时间
			// tpCgcontractmt.setcForinland(null);
			// 国外回传时间
			// tpCgcontractmt.setcForoutland(null);
			// 备注
			tpCgcontractmtt.setcRemark(null);
			// 合同状态
			tpCgcontractmtt.setcState("3");
			// 时间戳
			// tpCgcontractmt.setcTimestamp(null);
			// 创建人
			tpCgcontractmtt.setcCreater(cvb.getcCreater());
			// 创建时间
			tpCgcontractmtt.setcCreatetime(new Date());
			// 船号-货物名称
			// tpCgcontractmt.setcSw03(null);
			// 出船日期
			tpCgcontractmtt.setcSw04(null);
			// 外贸号-存档号
			tpCgcontractmtt.setcSw05(cvb.getcNo());
			// 作废人
			tpCgcontractmtt.setcSw06(null);
			// 作废时间
			tpCgcontractmtt.setcSw07(null);
			// 作废原因
			tpCgcontractmtt.setcSw08(null);
			// 预计到货说明
			tpCgcontractmtt.setcSw11(null);
			// 天数
			try {
				if (conadd.getcDr() != null && conadd.getcGettime() != null) {
					BIGString bigs = new BIGString();
					int i = bigs.compare_date(conadd.getcDr(), conadd.getcGettime());
					if (i == 1) {
						// 相差的天数
						int daysBetween = bigs.daysBetween(conadd.getcGettime(), conadd.getcDr());
						tpCgcontractmtt.setcSw12("+" + String.valueOf(daysBetween) + "天");
					} else if (i == -1) {
						int daysBetween;
						daysBetween = bigs.daysBetween(conadd.getcDr(), conadd.getcGettime());
						tpCgcontractmtt.setcSw12("-" + String.valueOf(daysBetween) + "天");
					} else {
						int daysBetween = 0;
						tpCgcontractmtt.setcSw12(String.valueOf(daysBetween) + "天");
					}
				}
			} catch (ParseException e) {
				System.out.println("转合同：计算提前/延迟时间-时异常：" + e.getMessage());
				e.printStackTrace();
			}
			if (conadd.getcDr() == null || conadd.getcGettime() == null) {
				tpCgcontractmtt.setcSw12(null);
			}
			// 最后到货时间
			tpCgcontractmtt.setcGettime(conadd.getcGettime());
			// 请购主表主键
			// tpCgcontractmt.setcOrmtid(contractVoBean.getcOrmtid());
			// 请购子表主键
			// tpCgcontractmt.setcOrstid(tpCgorderst.getcId());
			// 合同主表
			row = tpCgcontractmttMapper.insertSelective(tpCgcontractmtt);

			if (row < 1) {
				for (int i = 0; i < data.getContractVoBean().size(); i++) {
					ContractVoBean contractVoBean = data.getContractVoBean().get(i);
					// 合同主表主键
					tpCgcontractstt.setcMtid(id);
					// 物资名称
					tpCgcontractstt.setcGoodsname(contractVoBean.getcGoodsname());
					// 规格型号
					tpCgcontractstt.setcSpec(contractVoBean.getcSpec());
					// 单位
					tpCgcontractstt.setcUnit(contractVoBean.getcUnit());
					// 单价
					tpCgcontractstt.setcPrice(null);
					// 合同行号
					b = tpCgcontractmttMapper.selectByConnum(contractVoBean.getcConnum());
					if (b.size() == 1) {
						List<TpCgcontractstt> num = tpCgcontractsttMapper.selectByCountSt(contractVoBean.getcConnum());
						if (num.size() < 10) {
							// 合同行号
							if ((num.size() + 1) == 10) {
								tpCgcontractstt.setcConline("000" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("0000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 9 && num.size() < 100) {
							// 合同行号
							if ((num.size() + 1) == 100) {
								tpCgcontractstt.setcConline("00" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 99 && num.size() < 1000) {
							// 合同行号
							if ((num.size() + 1) == 1000) {
								tpCgcontractstt.setcConline("0" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("00" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 999 && num.size() < 10000) {
							if ((num.size() + 1) == 10000) {
								tpCgcontractstt.setcConline(String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("0" + String.valueOf(num.size() + 1));
							}
						}
					}
					if (b.size() == 0) {
						if ((i + 1) == 10) {
							tpCgcontractstt.setcConline("000" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 100) {
								tpCgcontractstt.setcConline("00" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 1000) {
									tpCgcontractstt.setcConline("0" + String.valueOf(i + 1));
								} else {
									if ((i + 1) == 10000) {
										tpCgcontractstt.setcConline(String.valueOf(i + 1));
									} else {
										if ((i + 1) < 10) {
											tpCgcontractstt.setcConline("0000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10) {
											tpCgcontractstt.setcConline("000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 100) {
											tpCgcontractstt.setcConline("00" + String.valueOf(i + 1));
										}
										if ((i + 1) > 1000) {
											tpCgcontractstt.setcConline("0" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10000) {
											tpCgcontractstt.setcConline(String.valueOf(i + 1));
										}
									}
								}
							}
						}
						// tpCgcontractst.setcConline("0000"+String.valueOf(i+1));
					}
					// 订货数量
					tpCgcontractstt.setcGoodsnum(contractVoBean.getcNum());
					// 订货情况
					tpCgcontractstt.setcGoodscase(null);
					// 含税总价
					tpCgcontractstt.setcSumprice(null);
					// 预计到货时间
					tpCgcontractstt.setcBeforearrtime(null);
					// 预计到货说明
					tpCgcontractstt.setcArrgoodsex(null);
					// 到货时间
					tpCgcontractstt.setcArrgoodstime(null);
					// 累计到货量
					tpCgcontractstt.setcGroudtotalnum("0");
					// 剩余数量
					tpCgcontractstt.setcResiduenum(contractVoBean.getcNum());
					// 是/否到齐
					tpCgcontractstt.setcArrallyorn("0");
					// 备注
					tpCgcontractstt.setcRemark(null);
					// 预登记状态
					tpCgcontractstt.setcState("3");
					// 是/否验收
					tpCgcontractstt.setcCheckyorn("0");
					// 质保期限
					tpCgcontractstt.setcQuadealline(null);
					// 请购单号ID
					tpCgcontractstt.setcOrid(contractVoBean.getcMtid());
					// 删除标识
					tpCgcontractstt.setcDr("0");
					// 时间戳
					tpCgcontractstt.setcTimestamp(new Date());
					// 物资单号
					tpCgcontractstt.setcSw02(contractVoBean.getcId());
					// 请购单号
					tpCgcontractstt.setcSw03(contractVoBean.getcOrdernum());
					// 是否有出船记录
					tpCgcontractstt.setcSw04("0");
					// 外贸号-存档号
					tpCgcontractstt.setcSw05(contractVoBean.getcNo());
					// 创建人
					tpCgcontractstt.setcCreater(contractVoBean.getcCreater());
					// 创建时间
					tpCgcontractstt.setcCreatetime(new Date());
					// 合同号
					tpCgcontractstt.setcConnum(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					row = tpCgcontractsttMapper.insertSelective(tpCgcontractstt);
					TpCgorderst rst = new TpCgorderst();
					rst.setcId(contractVoBean.getcId());
					rst.setcState("1");
					rst.setcSw10(conadd.getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					rst.setcManor(conadd.getcSw10());
					rstList.add(rst);
//					TpCgorderbefore list = new TpCgorderbefore();
//					list.setcOrstid(contractVoBean.getcId());
//					int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
//					if (row0 == 0) {
//						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
//					}
				}
				if(rstList.size() > 0) {
					int row0 = tpCgorderstMapper.updateTpCgorderst(rstList);
					if (row0 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
					}
				}
				if (row < 0) {
					return buidler.msg("转合同成功").errcode(Errcode.Success).session(session).build();
				} else {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
				}
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
			}
		}
		return buidler.msg("转合同成功").errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> tSaveContractt(YDJ_Req data, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		// 查询权限信息
		int row;
		ContractVoBean conadd = data.getContractID();// 模态框传的值
		TpCgcontractmtt tpCgcontractmtt;
		tpCgcontractmtt = new TpCgcontractmtt();
		// 合同子表
		TpCgcontractstt tpCgcontractstt;
		tpCgcontractstt = new TpCgcontractstt();
		// 实例化合同ID主键
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		// 选中的请购单及物资信息
		for (ContractVoBean cvb : data.getContractVoBean()) {
			// 请购单主表
			// TpCgordermt tpCgordermt =
			// tpCgordermtMapper.selectByPrimaryKey(cvb.getcMtid());
			// 请购单子表
			// TpCgorderst tpCgorderst = tpCgorderstMapper.selectByPrimaryKey(cvb.getcId());
			// 查询合同号是否已存在
			List<TpCgcontractmtt> b = tpCgcontractmttMapper.selectByConnum(conadd.getcConnum());

			// 特殊合同不需要存在校验
			/*
			 * if(b.size()!=0) { return
			 * buidler.msg("合同号已存在").errcode(Errcode.FailParameterError).session(session).
			 * build(); }
			 */
			// 合同ID
			tpCgcontractmtt.setcId(id);
			// 设置合同号
			tpCgcontractmtt.setcConnum(cvb.getcConnum());
			tpCgcontractmtt.setcSw03(conadd.getcSw03());// 货物名称
			// 签订公司
			tpCgcontractmtt.setcCludecom(conadd.getcCludecom());
			// mudidi
			tpCgcontractmtt.setcCludeaddr(conadd.getcSw09());
			// 供应商z
			tpCgcontractmtt.setcSupplier(conadd.getcSupplier());
			BigDecimal money;
			BigDecimal sw1;
			if ("".equals(conadd.getcConmoney()) || conadd.getcConmoney() == null
					|| conadd.getcConmoney().indexOf(" ") == 0) {
				conadd.setcConmoney("0");
				money = new BigDecimal(conadd.getcConmoney());// 合同金额
			} else {
				if (conadd.getcConmoney().indexOf(" ") != -1) {
					money = new BigDecimal(conadd.getcConmoney().replaceAll(" ", ""));// 合同金额 如果字符串中存在空格" " 则全部替换""
				} else {
					money = new BigDecimal(conadd.getcConmoney());// 合同金额
				}
			}
			if ("".equals(conadd.getcSw01()) || conadd.getcSw01() == null || conadd.getcSw01().indexOf(" ") == 0) {
				conadd.setcSw01("0");
				sw1 = new BigDecimal(conadd.getcSw01());
			} else {
				if (conadd.getcSw01().indexOf(" ") != -1) {
					sw1 = new BigDecimal(conadd.getcSw01().replaceAll(" ", ""));// 实付金额
				} else {
					sw1 = new BigDecimal(conadd.getcSw01());// 实付金额
				}
			}

			String sss = ri.formatForTwo(money.subtract(sw1));
			// 合同金额
			tpCgcontractmtt.setcConmoney(ri.formatForTwo(money));
			// 实付金额
			// tpCgcontractmt.setcSw01(ri.formatForTwo(sw1));
			// 未付金额
			// tpCgcontractmt.setcSw02(sss);

			if (money.subtract(sw1).intValue() == 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				if (sss.indexOf("-.") != -1) {
					StringBuilder sb = new StringBuilder(sss);// 构造一个StringBuilder对象
					tpCgcontractmtt.setcSw02((sb.insert(1, "0")).toString());
				} else {
					tpCgcontractmtt.setcSw02(sss);
				}
				tpCgcontractmtt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() < 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmtt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmtt.setcSignstep("1");
			}
			if (money.subtract(sw1).intValue() > 0) {
				tpCgcontractmtt.setcSw01(ri.formatForTwo(sw1));
				tpCgcontractmtt.setcSw02(ri.formatForTwo(money.subtract(sw1)));
				tpCgcontractmtt.setcSignstep("0");
			}

			// 付款方式
			tpCgcontractmtt.setcPayway(conadd.getcPayway());
			// //送/收货地点 目的地
//			tpCgcontractmtt.setcSw09(conadd.getcSw09());
			// 预计到货时间
			tpCgcontractmtt.setcDr(conadd.getcDr());
			// 签订时间
			tpCgcontractmtt.setcCludetime(conadd.getcCludetime());
			// 采购员
			tpCgcontractmtt.setcSw10(conadd.getcSw10());
			// 验收方式
			tpCgcontractmtt.setcCheckway("0");
			// 签字步骤-付款情况
			tpCgcontractmtt.setcSignstep("0");
			// 运输方式-开票信息
			tpCgcontractmtt.setcTransway("0");
			// 传给国外时间
			// tpCgcontractmt.setcForinland(null);
			// 国外回传时间
			// tpCgcontractmt.setcForoutland(null);
			// 备注
			tpCgcontractmtt.setcRemark(null);
			// 合同状态
			tpCgcontractmtt.setcState("3");
			// 时间戳
			// tpCgcontractmt.setcTimestamp(null);
			// 创建人
			tpCgcontractmtt.setcCreater(cvb.getcCreater());
			// 创建时间
			tpCgcontractmtt.setcCreatetime(new Date());
			// 船号-货物名称
			// tpCgcontractmt.setcSw03(null);
			// 出船日期
			tpCgcontractmtt.setcSw04(null);
			// 外贸号-存档号
			tpCgcontractmtt.setcSw05(cvb.getcNo());
			// 作废人
			tpCgcontractmtt.setcSw06(null);
			// 作废时间
			tpCgcontractmtt.setcSw07(null);
			// 作废原因
			tpCgcontractmtt.setcSw08(null);
			// 预计到货说明
			tpCgcontractmtt.setcSw11(null);
			// 天数
			try {
				if (conadd.getcDr() != null && conadd.getcGettime() != null) {
					BIGString bigs = new BIGString();
					int i = bigs.compare_date(conadd.getcDr(), conadd.getcGettime());
					if (i == 1) {
						// 相差的天数
						int daysBetween = bigs.daysBetween(conadd.getcGettime(), conadd.getcDr());
						tpCgcontractmtt.setcSw12("+" + String.valueOf(daysBetween) + "天");
					} else if (i == -1) {
						int daysBetween;
						daysBetween = bigs.daysBetween(conadd.getcDr(), conadd.getcGettime());
						tpCgcontractmtt.setcSw12("-" + String.valueOf(daysBetween) + "天");
					} else {
						int daysBetween = 0;
						tpCgcontractmtt.setcSw12(String.valueOf(daysBetween) + "天");
					}
				}
			} catch (ParseException e) {
				System.out.println("转合同：计算提前/延迟时间-时异常：" + e.getMessage());
				e.printStackTrace();
			}
			if (conadd.getcDr() == null || conadd.getcGettime() == null) {
				tpCgcontractmtt.setcSw12(null);
			}
			// 最后到货时间
			tpCgcontractmtt.setcGettime(conadd.getcGettime());
			// 请购主表主键
			// tpCgcontractmt.setcOrmtid(contractVoBean.getcOrmtid());
			// 请购子表主键
			// tpCgcontractmt.setcOrstid(tpCgorderst.getcId());
			// 合同主表
			row = tpCgcontractmttMapper.insertSelective(tpCgcontractmtt);

			if (row < 1) {
				TpCgorderst tpCgorderst = new TpCgorderst();
				for (int i = 0; i < data.getContractVoBean().size(); i++) {
					ContractVoBean contractVoBean = data.getContractVoBean().get(i);
					// 合同主表主键
					tpCgcontractstt.setcMtid(id);
					// 物资名称
					tpCgcontractstt.setcGoodsname(contractVoBean.getcGoodsname());
					// 规格型号
					tpCgcontractstt.setcSpec(contractVoBean.getcSpec());
					// 单位
					tpCgcontractstt.setcUnit(contractVoBean.getcUnit());
					// 单价
					tpCgcontractstt.setcPrice(null);
					// 合同行号
					b = tpCgcontractmttMapper.selectByConnum(contractVoBean.getcConnum());
					if (b.size() == 1) {
						List<TpCgcontractst> num = tpCgcontractstMapper.selectByCountSt(contractVoBean.getcConnum());
						if (num.size() < 10) {
							// 合同行号
							if ((num.size() + 1) == 10) {
								tpCgcontractstt.setcConline("000" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("0000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 9 && num.size() < 100) {
							// 合同行号
							if ((num.size() + 1) == 100) {
								tpCgcontractstt.setcConline("00" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("000" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 99 && num.size() < 1000) {
							// 合同行号
							if ((num.size() + 1) == 1000) {
								tpCgcontractstt.setcConline("0" + String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("00" + String.valueOf(num.size() + 1));
							}
						}
						if (num.size() > 999 && num.size() < 10000) {
							if ((num.size() + 1) == 10000) {
								tpCgcontractstt.setcConline(String.valueOf(num.size() + 1));
							} else {
								tpCgcontractstt.setcConline("0" + String.valueOf(num.size() + 1));
							}
						}
					}
					if (b.size() == 0) {
						if ((i + 1) == 10) {
							tpCgcontractstt.setcConline("000" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 100) {
								tpCgcontractstt.setcConline("00" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 1000) {
									tpCgcontractstt.setcConline("0" + String.valueOf(i + 1));
								} else {
									if ((i + 1) == 10000) {
										tpCgcontractstt.setcConline(String.valueOf(i + 1));
									} else {
										if ((i + 1) < 10) {
											tpCgcontractstt.setcConline("0000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10) {
											tpCgcontractstt.setcConline("000" + String.valueOf(i + 1));
										}
										if ((i + 1) > 100) {
											tpCgcontractstt.setcConline("00" + String.valueOf(i + 1));
										}
										if ((i + 1) > 1000) {
											tpCgcontractstt.setcConline("0" + String.valueOf(i + 1));
										}
										if ((i + 1) > 10000) {
											tpCgcontractstt.setcConline(String.valueOf(i + 1));
										}
									}
								}
							}
						}
						// tpCgcontractst.setcConline("0000"+String.valueOf(i+1));
					}
					// 订货数量
					tpCgcontractstt.setcGoodsnum(contractVoBean.getcNum());
					// 订货情况
					tpCgcontractstt.setcGoodscase(null);
					// 含税总价
					tpCgcontractstt.setcSumprice(null);
					// 预计到货时间
					tpCgcontractstt.setcBeforearrtime(null);
					// 预计到货说明
					tpCgcontractstt.setcArrgoodsex(null);
					// 到货时间
					tpCgcontractstt.setcArrgoodstime(null);
					// 累计到货量
					tpCgcontractstt.setcGroudtotalnum("0");
					// 剩余数量
					tpCgcontractstt.setcResiduenum(contractVoBean.getcNum());
					// 是/否到齐
					tpCgcontractstt.setcArrallyorn("0");
					// 备注
					tpCgcontractstt.setcRemark(conadd.getcRemark());
					// 预登记状态
					tpCgcontractstt.setcState("3");
					// 是/否验收
					tpCgcontractstt.setcCheckyorn("0");
					// 质保期限
					tpCgcontractstt.setcQuadealline(null);
					// 请购单号ID
					tpCgcontractstt.setcOrid(contractVoBean.getcMtid());
					// 删除标识
					tpCgcontractstt.setcDr("0");
					// 时间戳
					tpCgcontractstt.setcTimestamp(new Date());
					// 物资单号
					tpCgcontractstt.setcSw02(contractVoBean.getcId());
					// 请购单号
					tpCgcontractstt.setcSw03(contractVoBean.getcOrdernum());
					// 是否有出船记录
					tpCgcontractstt.setcSw04("0");
					// 外贸号-存档号
					tpCgcontractstt.setcSw05(contractVoBean.getcNo());
					// 创建人
					tpCgcontractstt.setcCreater(contractVoBean.getcCreater());
					// 创建时间
					tpCgcontractstt.setcCreatetime(new Date());
					// 合同号
					tpCgcontractstt.setcConnum(contractVoBean.getcConnum());
					row = tpCgcontractsttMapper.insertSelective(tpCgcontractstt);
					TpCgorderbefore list = new TpCgorderbefore();
					list.setcOrstid(contractVoBean.getcId());
					int row0 = tpCgorderbeforeMapper.update_st_Cstate(list.getcOrstid());
					if (row0 == 0) {
						return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
					}
					tpCgorderst.setcId(contractVoBean.getcId());
					tpCgorderst.setcState("1");
					tpCgorderst.setcSw11("");
					int srow = 0;
					srow = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
					if(srow == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
					}
				}
				if (row < 0) {
					return buidler.msg("转合同成功").errcode(Errcode.Success).session(session).build();
				} else {
					return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
				}
			} else {
				return buidler.msg("转合同失败").errcode(Errcode.FailParameterError).session(session).build();
			}
		}
		return null;
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> simContract(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		BIGString bigs = new BIGString();
		List<TpCgcontractst> contractstList = new ArrayList<TpCgcontractst>();
		try {
			DelInformation delInformation = new DelInformation();
			TpCgcontractmt 	tpCgcontractmt  = new TpCgcontractmt();
			//1.获取合同主表合同号，需方，签订时间，供方，签订地址信息
		
			//2.判断合同号是否重复----合同号不能为空
			List<TpCgcontractmtt> selectByConnum = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			System.out.println("list长度：："+selectByConnum.size());
			if(selectByConnum.size() > 0) {
				return buidler.msg("该合同号已存在!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
			//3.合同主表中添加信息
		
			//签订公司
			tpCgcontractmt.setcCludecom(get_data_value(tP_SimContract.getTpCgcontractmt().getcCludecom(),"签订公司").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("交货地点-------"+tP_SimContract.getDelInformation().getcDelivplace());
			if(tP_SimContract.getDelInformation().getcDelivplace()==null) {
				tP_SimContract.getDelInformation().setcDelivplace("");
			}else {
				delInformation.setcDelivplace(get_data_subitemid(tP_SimContract.getDelInformation().getcDelivplace(),"交货地点").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
//				tP_SimContract.getDelInformation().setcDelivplace(tP_SimContract.getDelInformation().getcDelivplace());
			}
			
			ContractUtil contractUtil = new ContractUtil();
			/*for (TpCgorderRequest tpCgcontractmt : tP_SimContract.getTpCgorderRequest()) {
				System.out.println("含税总价：：："+tpCgcontractmt.getcSumprice());
			}*/
		
			TpCgcontractmtt addTpCgcontractmt = contractUtil.addTpCgcontractmt(user, tP_SimContract, delInformation, tpCgcontractmt);
			int row = tpCgcontractmttMapper.insertSelective(addTpCgcontractmt);
			System.out.println("添加成功返回的参数：："+row);
			if(row>1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同中合同信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//4.合同详细表中添加信息
			//
//			tP_SimContract.getDelInformation().setcDelivplace(get_data_value(tP_SimContract.getDelInformation().getcDelivplace(),"交货地点").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("交货地点========"+tP_SimContract.getDelInformation().getcDelivplace());
//			List<TbCgcontract> addTbCgcontract = contractUtil.addTbCgcontract(user, tP_SimContract.getTpCgcontractmt());
			 List<TbCgcontract> addTbCgcontract = contractUtil.addTbCgcontract(user, tP_SimContract);
//			get_data_subitemid(tP_SimContract.getDelInforma().getcDelivdate(),"交货期限");
			int insertrow = tbCgcontractMapper.insertTbCgcontract(addTbCgcontract);
			System.out.println("添加合同详情返回参数::"+insertrow);
			if(insertrow >1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//5.合同子表中添加信息
			//先添加数据再考虑合并现象
			//合同主表
			List<TpCgcontractmtt> getByConnum = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			//合同子表
			System.out.println("单价和总价：：：："+tP_SimContract.getTpCgorderRequest().get(0).getcPrice()+"::::"+ tP_SimContract.getTpCgorderRequest().get(0).getcSumprice());
			TpCgorderst tpCgorderst = new TpCgorderst();
			//添加合同子表信息
			for (int i = 0; i <tP_SimContract.getTpCgorderRequest().size(); i++) {
				TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(i);
				TpCgcontractstt tpCgcontract =  new TpCgcontractstt();
				// 合同主表主键
				tpCgcontract.setcMtid(addTpCgcontractmt.getcId());
				// 物资名称
				tpCgcontract.setcGoodsname(tpCgorderRequest.getcGoodsname());
				// 报关规格型号
				tpCgcontract.setcSpec(tpCgorderRequest.getcCuspec());
				//物资规格型号
				tpCgcontract.setcCuspec(tpCgorderRequest.getcSpec());
				//报关单位
				if(tpCgorderRequest.getcUnitspec() == null) {
					tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				}else {
					String dw = tpCgorderRequest.getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
					if(thority != null) {
						tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
					}else {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("物资名称为: "+tpCgorderRequest.getcGoodsname()+" 的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).session(session).build();
					}
				}
				
				// 单位
				tpCgcontract.setcUnit(tpCgorderRequest.getcUnit());// 单位	
//				//报关单位
//				tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				// 含税单价
				tpCgcontract.setcPrice(tpCgorderRequest.getcPrice());
				if(getByConnum.size() == 1) { 
					List<TpCgcontractstt> selectByCountSt =  tpCgcontractsttMapper.selectByCountSt(tP_SimContract.getTpCgcontractmt().getcConnum());
					if(selectByCountSt == null ) {
						tpCgcontract.setcConline("00001");
					}
//					if (selectByCountSt.size() > 0) {
						// 合同行号
						if ((selectByCountSt.size() + 1) == 10) {
							tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
						} else {
							tpCgcontract.setcConline("0000" + String.valueOf(selectByCountSt.size() + 1));
						}
						if (selectByCountSt.size() > 9 && selectByCountSt.size() < 100) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 100) {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 99 && selectByCountSt.size() < 1000) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 999 && selectByCountSt.size() < 10000) {
							if ((selectByCountSt.size() + 1) == 10000) {
								tpCgcontract.setcConline(String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
//					}
				}
				if (getByConnum.size() == 0) {
					if ((i + 1) == 10) {
						tpCgcontract.setcConline("000" + String.valueOf(i + 1));
					} else {
						if ((i + 1) == 100) {
							tpCgcontract.setcConline("00" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 10000) {
									tpCgcontract.setcConline(String.valueOf(i + 1));
								} else {
									if ((i + 1) < 10) {
										tpCgcontract.setcConline("0000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10) {
										tpCgcontract.setcConline("000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 100) {
										tpCgcontract.setcConline("00" + String.valueOf(i + 1));
									}
									if ((i + 1) > 1000) {
										tpCgcontract.setcConline("0" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10000) {
										tpCgcontract.setcConline(String.valueOf(i + 1));
									}
								}
							}
						}
					}
				
				}
				
				// 订货数量
				tpCgcontract.setcGoodsnum(tpCgorderRequest.getcNum());
				////报关物资名称
				if(tpCgorderRequest.getcCustoms() == null) {
					tpCgcontract.setcSw08("");
				}else {
					tpCgcontract.setcSw08(tpCgorderRequest.getcCustoms());
				}
				//信息卡品名
				tpCgcontract.setcName(tpCgcontract.getcSw08());
				// 订货情况
				tpCgcontract.setcGoodscase(null);
				// 含税总价
				tpCgcontract.setcSumprice(tpCgorderRequest.getcSumprice());
				// 预计到货时间
				tpCgcontract.setcBeforearrtime(null);
				// 预计到货说明
				tpCgcontract.setcArrgoodsex(null);
				// 到货时间
				tpCgcontract.setcArrgoodstime(null);
				// 累计到货量
				tpCgcontract.setcGroudtotalnum("0");
				// 剩余数量
				tpCgcontract.setcResiduenum(tpCgorderRequest.getcNum());
				// 是/否到齐
				tpCgcontract.setcArrallyorn("0");
				// 备注
				tpCgcontract.setcRemark(tpCgorderRequest.getcRemark());
				// 预登记状态
				tpCgcontract.setcState("3");
				// 是/否验收
				tpCgcontract.setcCheckyorn("0");
				// 质保期限
				tpCgcontract.setcQuadealline(null);
				// 请购单号ID
				tpCgcontract.setcOrid(tpCgorderRequest.getcMtid());
				// 删除标识
				tpCgcontract.setcDr("0");
				// 时间戳
				tpCgcontract.setcTimestamp(new Date());
				// 物资单号
				tpCgcontract.setcSw02(tpCgorderRequest.getcId());
				// 请购单号
				tpCgcontract.setcSw03(tpCgorderRequest.getcOrdernum());
				// 是否有出船记录
				tpCgcontract.setcSw04("0");
				// 外贸号-存档号
				tpCgcontract.setcSw05(tpCgorderRequest.getcNo());
				// 创建人
				tpCgcontract.setcCreater(user.getUserName());
				// 创建时间
				tpCgcontract.setcCreatetime(new Date());
				// 合同号
				tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				 int introw =  tpCgcontractsttMapper.insertSelective(tpCgcontract);
				 System.out.println("合同物资添加:::"+introw);
				 if(introw>0) {
					 return buidler.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
				 tpCgorderst.setcId(tpCgorderRequest.getcId());
				 tpCgorderst.setcState("1");
				 tpCgorderst.setcSw11("");
				 int srow = 0;
				 srow = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				 if(srow == 0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return buidler.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
			}
			//6.更新请购物资表中的信息
			List<TpCgorderst> updateTpCgorderst = contractUtil.updateTpCgorderst(user, tP_SimContract.getTpCgcontractmt(), tP_SimContract.getTpCgorderRequest());
			int uprow = tpCgorderstMapper.updateTpCgorderst(updateTpCgorderst);
			System.out.println("更新物资表:::"+uprow);
			if(uprow >=0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			}
			return buidler.msg("模拟合同创建成功！！！").errcode(Errcode.Success).session(session).build();
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateContract(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		BIGString bigs = new BIGString();
		List<TpCgcontractst> contractstList = new ArrayList<TpCgcontractst>();
		try {
			DelInformation delInformation = new DelInformation();
			TpCgcontractmt 	tpCgcontractmt  = new TpCgcontractmt();
			//1.获取合同主表合同号，需方，签订时间，供方，签订地址信息
			//2.判断合同号是否重复----合同号不能为空
			List<TpCgcontractmtt> selectByConnum = tpCgcontractmttMapper.selectByConnum(respUtil(tP_SimContract.getTpCgcontractmt().getcConnum()));
			System.out.println("list长度：："+selectByConnum.size());
			if(selectByConnum.size() > 0) {
				return buidler.msg("该合同号已存在!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
			List<TpCgcontractmt> tmt = tpCgcontractmtMapper.selectByConnum(respUtil(tP_SimContract.getTpCgcontractmt().getcConnum()));
			if(tmt.size() > 0) {
				return buidler.msg("该合同号已有正式合同!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
			//3.合同主表中添加信息
			//签订公司
			tpCgcontractmt.setcCludecom(get_data_value(tP_SimContract.getTpCgcontractmt().getcCludecom(),"签订公司").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("交货地点-------"+tP_SimContract.getDelInformation().getcDelivplace());
			//交货地点一是在合同条框进行维护  二是单独维护   --单独维护要替换合同条框中的交货地点，交货期限，付款方式
			if(tP_SimContract.getDelInformation().getcDelivplace()==null) {
				tP_SimContract.getDelInformation().setcDelivplace("");
			}else {
				delInformation.setcDelivplace(get_data_subitemid(tP_SimContract.getDelInformation().getcDelivplace(),"交货地点").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			ContractUtil contractUtil = new ContractUtil();
			TpCgcontractmtt addTpCgcontractmt = contractUtil.addTpCgcontractmt2(user, tP_SimContract, delInformation, tpCgcontractmt);
			int row = tpCgcontractmttMapper.insertSelective(addTpCgcontractmt);
			if(row>1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同中合同信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//4.合同详细表中添加信息----该信息有变化，其中合同条款是直接维护的
			System.out.println("交货地点========"+tP_SimContract.getDelInformation().getcDelivplace());
			//数据字典  查询交货期限
//			List<TpCgauthority> tpCgauthority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("JHQX", tP_SimContract.getTpCgcontractmtt().getcDelivery().trim());
//			if(tpCgauthority.size() > 0) {
//				delInformation.setcDelivdate(tpCgauthority.get(0).getcSubitemdes());
//			}
			List<TpCgauthority> tpCgauthority  = new ArrayList<>();
			if(tP_SimContract.getClause_M1S1().getcSw50TpCgclausedata() !=null && !"".equals(tP_SimContract.getClause_M1S1().getcSw50TpCgclausedata().trim())) {
				tpCgauthority= tpCgauthorityMapper.getDictionaryInfoWithItemNos("HTLB", tP_SimContract.getClause_M1S1().getcSw50TpCgclausedata().trim());
			}
			 List<TbCgcontract> addTbCgcontract = contractUtil.addTbCgcontract2(user, tP_SimContract, delInformation,tpCgauthority.get(0));
				int insertrow = tbCgcontractMapper.insertTbCgcontract(addTbCgcontract);
				if(insertrow >1) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("模拟合同创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
				TbCgcontract tbCgcontract =  new TbCgcontract();
				List<TbCgcontract> selectcConnum = tbCgcontractMapper.selectcConnum(addTbCgcontract.get(0).getcConnum());
				System.out.println("模板查询::::"+selectcConnum.size());
				if(!selectcConnum.isEmpty()) {
					tbCgcontract = 	selectcConnum.get(0);	
				}else {
					tbCgcontract = addTbCgcontract.get(0);
				}
				 //5.另保存合同条款中的信息
				 CLAUSE_M1S1 updateCLAUSE_M1S1 = contractUtil.updateCLAUSE_M1S1(user, tbCgcontract,addTpCgcontractmt);
				 List<CLAUSE_M1S1> m1s11qclause_M1S2 = clauseMapper.M1S11QCLAUSE_M1S2(updateCLAUSE_M1S1);
				 if(m1s11qclause_M1S2.size()<=0) {
					 //无添加一条
					 List<CLAUSE_M1S1> addClause = new ArrayList<>();
					 addClause.add(updateCLAUSE_M1S1);
					 int clause = clauseMapper.M1S11ACLAUSE_M1S1(addClause);
					 if(clause>0) {
						 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return buidler.msg("模拟合同修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
					 }
				 }else {
					//有直接修改
					 CLAUSE_M1S1 updateCLAUSE_M1S12 = contractUtil.updateCLAUSE_M1S12(user, tbCgcontract,addTpCgcontractmt);
					 updateCLAUSE_M1S12.setcIdTpCgclausedata(m1s11qclause_M1S2.get(0).getcIdTpCgclausedata());
					 int m1s11uclause_M1S3 = clauseMapper.M1S11UCLAUSE_M1S3(updateCLAUSE_M1S12);
					 if(m1s11uclause_M1S3>0) {
						 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return buidler.msg("模拟合同修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
					 }
				 }
				 
				 
//				 addTbCgcontract.get(0).setcContype(updateCLAUSE_M1S1.getcContypeTpCgclausedata());
//				 System.out.println("新模板：：：：："+addTbCgcontract.get(0).getcContype());
//				 int updatecContype = tbCgcontractMapper.updatecContype(addTbCgcontract.get(0));
//				 System.out.println("新模板的返回值:::::;"+updatecContype);
//				 if(updatecContype >0) {
//					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return buidler.msg("合同模板修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
//				 }
//				 int clause = clauseMapper.M1S11UCLAUSE_M1S2(updateCLAUSE_M1S1);
//				 if(clause>0) {
//					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//						return buidler.msg("模拟合同创建修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
//				 }
			//6.合同子表中添加信息
			//先添加数据再考虑合并现象
			//合同主表
			List<TpCgcontractmtt> getByConnum = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			//合同子表
			System.out.println("单价和总价：：：："+tP_SimContract.getTpCgorderRequest().get(0).getcPrice()+"::::"+ tP_SimContract.getTpCgorderRequest().get(0).getcSumprice());
			TpCgorderst tpCgorderst = new TpCgorderst();
			//添加合同子表信息
			for (int i = 0; i <tP_SimContract.getTpCgorderRequest().size(); i++) {
				TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(i);
				TpCgcontractstt tpCgcontract =  new TpCgcontractstt();
				// 合同主表主键
				tpCgcontract.setcMtid(addTpCgcontractmt.getcId());
				// 物资名称
				tpCgcontract.setcGoodsname(tpCgorderRequest.getcGoodsname());
				if(tpCgorderRequest.getcCuspec() != null && tpCgorderRequest.getcCuspec().indexOf("*") != -1) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("报关规格不能带“*”号！！！").errcode(Errcode.FailShowWarningMsg).session(session).build();
				}
				// 报关规格型号
				tpCgcontract.setcSpec(tpCgorderRequest.getcCuspec());
				//物资规格型号
				tpCgcontract.setcCuspec(tpCgorderRequest.getcSpec());
				// 单位
				tpCgcontract.setcUnit(tpCgorderRequest.getcUnit());
				//报关单位
//				tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				if(tpCgorderRequest.getcUnitspec() == null) {
					tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
				}else {
					String dw = tpCgorderRequest.getcUnitspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
					if(thority != null) {
						tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
					}else {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("物资名称为: "+tpCgorderRequest.getcGoodsname()+" 的物资单位不在指定单位表中").errcode(Errcode.FailShowWarningMsg).session(session).build();
					}
				}
				// 含税单价
				tpCgcontract.setcPrice(tpCgorderRequest.getcPrice());
				if(getByConnum.size() == 1) { 
					List<TpCgcontractstt> selectByCountSt =  tpCgcontractsttMapper.selectByCountSt(tP_SimContract.getTpCgcontractmt().getcConnum());
					if(selectByCountSt == null ) {
						tpCgcontract.setcConline("00001");
					}
//					if (selectByCountSt.size() > 0) {
						// 合同行号
						if ((selectByCountSt.size() + 1) == 10) {
							tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
						} else {
							tpCgcontract.setcConline("0000" + String.valueOf(selectByCountSt.size() + 1));
						}
						if (selectByCountSt.size() > 9 && selectByCountSt.size() < 100) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 100) {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("000" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 99 && selectByCountSt.size() < 1000) {
							// 合同行号
							if ((selectByCountSt.size() + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("00" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
						if (selectByCountSt.size() > 999 && selectByCountSt.size() < 10000) {
							if ((selectByCountSt.size() + 1) == 10000) {
								tpCgcontract.setcConline(String.valueOf(selectByCountSt.size() + 1));
							} else {
								tpCgcontract.setcConline("0" + String.valueOf(selectByCountSt.size() + 1));
							}
						}
//					}
				}
				if (getByConnum.size() == 0) {
					if ((i + 1) == 10) {
						tpCgcontract.setcConline("000" + String.valueOf(i + 1));
					} else {
						if ((i + 1) == 100) {
							tpCgcontract.setcConline("00" + String.valueOf(i + 1));
						} else {
							if ((i + 1) == 1000) {
								tpCgcontract.setcConline("0" + String.valueOf(i + 1));
							} else {
								if ((i + 1) == 10000) {
									tpCgcontract.setcConline(String.valueOf(i + 1));
								} else {
									if ((i + 1) < 10) {
										tpCgcontract.setcConline("0000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10) {
										tpCgcontract.setcConline("000" + String.valueOf(i + 1));
									}
									if ((i + 1) > 100) {
										tpCgcontract.setcConline("00" + String.valueOf(i + 1));
									}
									if ((i + 1) > 1000) {
										tpCgcontract.setcConline("0" + String.valueOf(i + 1));
									}
									if ((i + 1) > 10000) {
										tpCgcontract.setcConline(String.valueOf(i + 1));
									}
								}
							}
						}
					}
				
				}
				// 订货数量
				tpCgcontract.setcGoodsnum(tpCgorderRequest.getcNum());
				////报关物资名称
				if(tpCgorderRequest.getcCustoms() == null) {
					tpCgcontract.setcSw08("");
				}else {
					tpCgcontract.setcSw08(tpCgorderRequest.getcCustoms());
				}
				//信息卡品名
				tpCgcontract.setcName(tpCgcontract.getcSw08());
				// 订货情况
				tpCgcontract.setcGoodscase(null);
				// 含税总价
				tpCgcontract.setcSumprice(tpCgorderRequest.getcSumprice());
				// 预计到货时间
				tpCgcontract.setcBeforearrtime(null);
				// 预计到货说明
				tpCgcontract.setcArrgoodsex(null);
				// 到货时间
				tpCgcontract.setcArrgoodstime(null);
				// 累计到货量
				tpCgcontract.setcGroudtotalnum("0");
				// 剩余数量
				tpCgcontract.setcResiduenum(tpCgorderRequest.getcNum());
				// 是/否到齐
				tpCgcontract.setcArrallyorn("0");
				// 备注
				tpCgcontract.setcRemark(tpCgorderRequest.getcRemark());
				// 预登记状态
				tpCgcontract.setcState("3");
				// 是/否验收
				tpCgcontract.setcCheckyorn("0");
				// 质保期限
				tpCgcontract.setcQuadealline(null);
				// 请购单号ID
				if(tpCgorderRequest.getcMtid() != null) {
					tpCgcontract.setcOrid(tpCgorderRequest.getcMtid());
				}				
				// 删除标识
				tpCgcontract.setcDr("0");
				// 时间戳
				tpCgcontract.setcTimestamp(new Date());
				// 物资单号
				if(tpCgorderRequest.getcId() != null) {
					tpCgcontract.setcSw02(tpCgorderRequest.getcId());
				}			
				// 请购单号
				if(tpCgorderRequest.getcOrdernum() != null) {
					tpCgcontract.setcSw03(tpCgorderRequest.getcOrdernum());
				}
				
				// 是否有出船记录
				tpCgcontract.setcSw04("0");
				// 外贸号-存档号
				if(tpCgorderRequest.getcNo() != null) {
					tpCgcontract.setcSw05(tpCgorderRequest.getcNo());
				}				
				// 创建人
				tpCgcontract.setcCreater(user.getUserName());
				// 创建时间
				tpCgcontract.setcCreatetime(new Date());
				// 合同号
				tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
				 int introw =  tpCgcontractsttMapper.insertSelective(tpCgcontract);
				 System.out.println("合同物资添加:::"+introw);
				 if(introw>0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return buidler.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
				 tpCgorderst.setcId(tpCgorderRequest.getcId());
				 //拟合同
				 tpCgorderst.setcState("6");
				 tpCgorderst.setcSw10(tP_SimContract.getTpCgcontractmt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
				 tpCgorderst.setcSw11("");
				 tpCgorderst.setcSw13("");
				 int srow = 0;
				 srow = tpCgorderstMapper.updateByPrimaryKeySelective(tpCgorderst);
				 if(srow == 0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return buidler.msg("模拟合同物资信息创建失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
			}
			//6.更新请购物资表中的信息
			List<TpCgorderst> updateTpCgorderst = contractUtil.updateTpCgorderst(user, tP_SimContract.getTpCgcontractmt(), tP_SimContract.getTpCgorderRequest());
			int uprow = tpCgorderstMapper.updateTpCgorderst(updateTpCgorderst);
			System.out.println("更新物资表:::"+uprow);
			if(uprow >=0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			}
			int deleteByPrimaryKey = tpChorderstMapper.deleteByPrimaryKey(updateTpCgorderst);
			System.out.println("删除物资详情:::::"+deleteByPrimaryKey);
			if(deleteByPrimaryKey >0) {
				return buidler.msg("删除失败！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			return buidler.msg("模拟合同创建成功！！！").errcode(Errcode.Success).session(session).build();	
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateContractU(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
//		BIGString bigs = new BIGString();
		List<TpCgcontractst> contractstList = new ArrayList<TpCgcontractst>();
		try {
			DelInformation delInformation = new DelInformation();
			TpCgcontractmt 	tpCgcontractmt  = new TpCgcontractmt();
			//1.获取合同主表的相关信息 判断该合同号是否存在--旧合同号
			System.out.println("以前合同号:::::"+tP_SimContract.getTpCgcontractmt().getcConnum());
			List<TpCgcontractmtt> selectByConnum = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			System.out.println("获取的长度大小:::"+selectByConnum.size());
			if(selectByConnum.size()  < 0) {
				return buidler.msg("该合同号不存在!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
			if(!tP_SimContract.getTpCgcontractmt().getcConnum().trim().equals(tP_SimContract.getTpCgcontractmtt().getcConnum().trim())) {
				List<TpCgcontractmtt> tractmtt = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmtt().getcConnum().trim());
				if(tractmtt.size()  > 0) {
					return buidler.msg("该合同号已存在!!!").errcode(Errcode.FailParameterError).session(session).build();
				}
			}
			//3.合同主表中修改信息
			//签订公司
			tpCgcontractmt.setcCludecom(get_data_value(tP_SimContract.getTpCgcontractmtt().getcCludecom(),"签订公司"));
			//旧id
			tpCgcontractmt.setcId(selectByConnum.get(0).getcId());
			if(tP_SimContract.getDelInformation().getcDelivplace()==null) {
				tP_SimContract.getDelInformation().setcDelivplace("");
			}else {
				delInformation.setcDelivplace(get_data_subitemid(tP_SimContract.getDelInformation().getcDelivplace(),"交货地点").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			ContractUtil contractUtil = new ContractUtil();
			TpCgcontractmtt addTpCgcontractmt = contractUtil.updateTpCgcontractmtt(user, tP_SimContract, delInformation, tpCgcontractmt);
			int row = tpCgcontractmttMapper.updateTpCgcontractmtt(addTpCgcontractmt);
			if(row>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同中合同信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			//4.合同详细表中添加信息----该信息有变化，其中合同条款是直接维护的
			List<TbCgcontract> selectBycConnum = tbCgcontractMapper.selectcConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
			if(selectBycConnum.size()!=1) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("合同条款中该合同号不存在或者存在多条!!!").errcode(Errcode.FailParameterError).session(session).build();
			}
//			System.out.println("交货地点========"+tP_SimContract.getDelInformation().getcDelivplace());
			//数据字典 查询交货期限
//			List<TpCgauthority> tpCgauthority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("JHQX", tP_SimContract.getContractmtt().getcDelivery().trim());
//			if(tpCgauthority.size() > 0) {
//				delInformation.setcDelivdate(tpCgauthority.get(0).getcSubitemdes());
//			}
			 List<TbCgcontract> addTbCgcontract = contractUtil.updateTbCgcontract2(user, tP_SimContract, delInformation);
			 List<TpCgauthority> tpCgauthority = tpCgauthorityMapper.getDictionaryInfoWithItemNos("HTLB", addTbCgcontract.get(0).getcContclass().trim());
				if(tpCgauthority.size() > 0) {
					addTbCgcontract.get(0).setcContype(addTbCgcontract.get(0).getcSupplier()+"-"+tpCgauthority.get(0).getcSubitemdes());;
				}
				System.out.println("修改后的模板::"+addTbCgcontract.get(0).getcContype());
				int insertrow = tbCgcontractMapper.updatebCgcontract(addTbCgcontract);
				if(insertrow >0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("模拟合同创建修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
			//修改请购物资中的合同号
			 int updaterow = tpCgorderstMapper.updateTpCgorderstMapper(addTbCgcontract.get(0));
			 if(updaterow >0 ) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("模拟合同创建修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
//			 System.out.println("模板：："+addTbCgcontract.get(0).getcConsultrmb().trim());
//			 String cConsultrmb = addTbCgcontract.get(0).getcConsultrmb().trim();
			 /*List<TbCgcontract> addTbCgcontract2 = tbCgcontractMapper.selectcConsultrmb(addTbCgcontract.get(0));
			 System.out.println("=====:::::"+addTbCgcontract2.size());*/
			 //5.修改添加合同条款中的信息
			 CLAUSE_M1S1 updateCLAUSE_M1S1 = contractUtil.updateCLAUSE_M1S1(user, addTbCgcontract.get(0), addTpCgcontractmt);
			 List<CLAUSE_M1S1> m1s11qclause_M1S2 = clauseMapper.M1S11QCLAUSE_M1S2(updateCLAUSE_M1S1);
			 if(m1s11qclause_M1S2.size()<=0) {
				 //无添加一条
				 List<CLAUSE_M1S1> addClause = new ArrayList<>();
				 addClause.add(updateCLAUSE_M1S1);
				 int clause = clauseMapper.M1S11ACLAUSE_M1S1(addClause);
				 if(clause>0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("模拟合同修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
			 }else {
				//有直接修改
				 updateCLAUSE_M1S1.setcIdTpCgclausedata(m1s11qclause_M1S2.get(0).getcIdTpCgclausedata());
				 int m1s11uclause_M1S3 = clauseMapper.M1S11UCLAUSE_M1S3(updateCLAUSE_M1S1);
				 if(m1s11uclause_M1S3>0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return buidler.msg("模拟合同修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
			 }
			 
			//6.合同子表中添加信息
			//合同主表
				List<TpCgcontractstt>  list = new ArrayList<TpCgcontractstt>();
				for (TpCgorderRequest tpCgorderRequest : tP_SimContract.getTpCgorderRequest()) {
//				}
//				for (int i = 0; i <tP_SimContract.getTpCgorderRequest().size(); i++) {
//					TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(i);
					TpCgcontractstt tpCgcontract =  new TpCgcontractstt();
					// 合同物资主表主键
//					tpCgcontract.setcMtid(addTpCgcontractmt.getcId());
					tpCgcontract.setcId(tpCgorderRequest.getcId());
					// 物资名称
					tpCgcontract.setcGoodsname(tpCgorderRequest.getcGoodsname());
					// 报关规格型号
					System.out.println(tpCgorderRequest.getcSpec() + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
					if(tpCgorderRequest.getcSpec() != null) {
						if(tpCgorderRequest.getcSpec().indexOf("*") != -1) {
							System.out.println(tpCgorderRequest.getcSpec().indexOf("*") + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab");
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return buidler.msg("报关规格不能带“*”号！！！").errcode(Errcode.FailShowWarningMsg).session(session).build();
						}	
					}
					tpCgcontract.setcSpec(tpCgorderRequest.getcSpec());
					//物资规格型号
					tpCgcontract.setcCuspec(tpCgorderRequest.getcCuspec());
					// 单位
					tpCgcontract.setcUnit(tpCgorderRequest.getcUnit());
					//报关单位
					tpCgcontract.setcUnitspec(tpCgorderRequest.getcUnitspec());
					// 含税单价
					tpCgcontract.setcPrice(tpCgorderRequest.getcPrice());
					// 订货数量
					tpCgcontract.setcGoodsnum(tpCgorderRequest.getcGoodsnum());
					////报关物资名称
					if(tpCgorderRequest.getcSw08() == null) {
						tpCgcontract.setcSw08("");
					}else {
						tpCgcontract.setcSw08(tpCgorderRequest.getcSw08());
					}
					//信息卡品名
					tpCgcontract.setcName(tpCgcontract.getcSw08());
					// 订货情况
					tpCgcontract.setcGoodscase(null);
					// 含税总价
					tpCgcontract.setcSumprice(tpCgorderRequest.getcSumprice());
					// 预计到货时间
					tpCgcontract.setcBeforearrtime(null);
					// 预计到货说明
					tpCgcontract.setcArrgoodsex(null);
					// 到货时间
					tpCgcontract.setcArrgoodstime(null);
					// 累计到货量
					tpCgcontract.setcGroudtotalnum("0");
					// 剩余数量
					tpCgcontract.setcResiduenum(tpCgorderRequest.getcGoodsnum());
					// 是/否到齐
					tpCgcontract.setcArrallyorn("0");
					// 备注
					tpCgcontract.setcRemark(tpCgorderRequest.getcRemark());
					// 预登记状态
					tpCgcontract.setcState("3");
					// 是/否验收
					tpCgcontract.setcCheckyorn("0");
					// 质保期限
					tpCgcontract.setcQuadealline(null);
					// 请购单号ID
					tpCgcontract.setcOrid(tpCgorderRequest.getcOrid());
					// 删除标识
//					tpCgcontract.setcDr(tpCgorderRequest.);
					// 时间戳
					tpCgcontract.setcTimestamp(new Date());
					// 物资单号
					tpCgcontract.setcSw02(tpCgorderRequest.getcSw02());
					// 请购单号
					tpCgcontract.setcSw03(tpCgorderRequest.getcSw03());
					// 是否有出船记录
					tpCgcontract.setcSw04(tpCgorderRequest.getcSw04());
					// 外贸号-存档号
					tpCgcontract.setcSw05(tpCgorderRequest.getcSw05());
					// 创建人
					tpCgcontract.setcCreater(user.getUserName());
					// 创建时间
					tpCgcontract.setcCreatetime(new Date());
					// 合同号
					tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmtt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
					list.add(tpCgcontract);
				}
				 int introw =  tpCgcontractsttMapper.updatetpCgcontractstt(list);
				 if(introw>0) {
					 TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					 return buidler.msg("模拟合同物资信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				 }
				 return buidler.msg("模拟合同物资信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
	}

	@Override
	public ResponseObject<EmptyTag, List<TbCgcontract>> getTbContractInfo(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, List<TbCgcontract>> buidler = ResponseObjectBuilder.create();
		TbCgcontract tpCgcontract =new TbCgcontract();
		tpCgcontract.setcContype(tP_SimContract.getClause_M1S1().getcContypeTpCgclausedata());
		tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
		List<TbCgcontract> selectTbCgcontract = tbCgcontractMapper.selectTbCgcontract(tpCgcontract);
		if (selectTbCgcontract.isEmpty()) {
			return buidler.errcode(Errcode.FailParameterError).msg("没有记录").session(session).build();
		}
		return buidler.data(selectTbCgcontract).errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TbCgcontract>> getCompInfo(User user, TP_SimContract tP_SimContract, String session) {
		ResponseObjectBuilder<EmptyTag, List<TbCgcontract>> buidler = ResponseObjectBuilder.create();
//		TbCgcontract tpCgcontract =new TbCgcontract();
//		tpCgcontract.setcContype(tP_SimContract.getClause_M1S1().getcContypeTpCgclausedata());
//		tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
		List<TbCgcontract> selectTbCgcontract = tbCgcontractMapper.selectcConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
		if (selectTbCgcontract.isEmpty()) {
			return buidler.errcode(Errcode.FailParameterError).msg("没有记录").session(session).build();
		}
		return buidler.data(selectTbCgcontract).errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TbCgcontract>> getSupplierInfo(User user, TP_SimContract tP_SimContract,
			String session) {
		ResponseObjectBuilder<EmptyTag, List<TbCgcontract>> buidler = ResponseObjectBuilder.create();
		List<TbCgcontract> selectTbCgcontract = tbCgcontractMapper.selectcConnum(tP_SimContract.getTpCgcontractmt().getcConnum());
		if (selectTbCgcontract.isEmpty()) {
			return buidler.errcode(Errcode.FailParameterError).msg("没有记录").session(session).build();
		}
		return buidler.data(selectTbCgcontract).errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, EmptyData> addJSXY(User user, TpSettlement tpSettlement, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		List<TpSettlement> selectBycConnum = tpSettlementMapper.selectBycConnum(tpSettlement.getcConnum());
		if(selectBycConnum.size()>0) {
			return buidler.errcode(Errcode.FailParameterError).msg("该合同已做过结算协议，请修改已有的结算协议！！！").session(session).build();
		}
		tpSettlement.setcCreater(user.getUserName());
		tpSettlement.setcCreatetime(new Date());
		int insertSelective = tpSettlementMapper.insertSelective(tpSettlement);
		if(insertSelective>0) {
			return buidler.errcode(Errcode.FailParameterError).msg("添加失败！！！").session(session).build();
		}
		TpCgcontractmt tpCgcontractmt = new TpCgcontractmt();
		tpCgcontractmt.setcConnum(tpSettlement.getcConnum());
		tpCgcontractmt.setcSw28("JSXY001");
		//已付金额
		tpCgcontractmt.setcSw01(tpSettlement.getcPaymoney());
		//未付金额
		tpCgcontractmt.setcSw02(tpSettlement.getcResidualq());
		//结算金额
		tpCgcontractmt.setcConmoney(tpSettlement.getcSettlemoney());
		int updateJSXY = tpCgcontractmtMapper.updateJSXY(tpCgcontractmt);
		if(updateJSXY>0) {
			return buidler.errcode(Errcode.FailParameterError).msg("修改失败！！！！").session(session).build();
		}
		return buidler.errcode(Errcode.Success).session(session).build();
	}
	
	private int  BusinessJudge(String connum) {
		List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectByConnum(connum);
		if(selectInfo.size() == 1) {
			String xxkState = selectInfo.get(0).getcStatexxk().trim();
			String state = "";
			if(selectInfo.get(0).getcMadestate() != null ) {
				state = selectInfo.get(0).getcMadestate().trim();
			}
			
			//判断拟合同状态 状态为 xxk06：生成正式合同 或 xxk03:信息卡审核通过 时  返回 1
			if("xxk06".equals(xxkState) || "xxk03".equals(xxkState)) {
				return 1;
			}
			//xxk02 : 未审核 状态
			if("xxk02".equals(xxkState)) {
//				/
//				List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(connum);
//				if(tbDocumeform.size() == 1 ) {
					//当拟合同状态为 xxk02 : 未审核 状态
					//判断相对应 信息卡制作人完成状态， 当信息卡制作人完成状态为mk002 : 未审核(已提交) 或  mk003 : 审核通过  返回 2 
					//其它信息卡状态返回 3
					if("mk002".equals(state) || "mk003".equals(state)) {
						return 2;
					}else {
						//把信息卡状态改为 xxk08 : 	变更申请   添加变更原因 C_CSUBMITTIME
//						selectInfo.get(0).setcStatexxk("xxk08");
//						selectInfo.get(0).setcMadestate("mk007");
//						selectInfo.get(0).setcCsubmittime(new Date());
//						selectInfo.get(0).setcSw18(msg);
//						System.out.println("123123");
//						int row = tpCgcontractmttMapper.updateTpCgcontractmtt(selectInfo.get(0));
//						if(row >= 0) {
//							System.out.println("拟合同的信息卡状态改变失败");
//							return 4;
//						}
						return 3;
					}

//				}
			}
		}
		//其它 返回 0
		return 0;
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateJSXY(User user, TpSettlement tpSettlement, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		tpSettlement.setcModifier(user.getUserName());
		tpSettlement.setcModifytime(new Date());
		int settlement = tpSettlementMapper.updateTpSettlement(tpSettlement);
		if(settlement>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return buidler.errcode(Errcode.FailParameterError).msg("修改失败！！！").session(session).build();
		}
		TpCgcontractmt tpCgcontractmt = new TpCgcontractmt();
		tpCgcontractmt.setcConnum(tpSettlement.getcConnum());
		tpCgcontractmt.setcSw28("JSXY001");
		//已付金额
		tpCgcontractmt.setcSw01(tpSettlement.getcPaymoney());
		//未付金额
		tpCgcontractmt.setcSw02(tpSettlement.getcResidualq());
		//结算金额
		tpCgcontractmt.setcConmoney(tpSettlement.getcSettlemoney());
		int updateJSXY = tpCgcontractmtMapper.updateJSXY(tpCgcontractmt);
		if(updateJSXY>0) {
			return buidler.errcode(Errcode.FailParameterError).msg("修改失败！！！！").session(session).build();
		}
		return buidler.errcode(Errcode.Success).session(session).build();
	}
	
	private static String respUtil(String str) {
		if(str==null) {
			str ="";
		}else{
			str=str.replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
		}
		return str;
	}

}
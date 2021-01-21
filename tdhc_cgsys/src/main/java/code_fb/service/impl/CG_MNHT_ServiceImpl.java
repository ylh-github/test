
package code_fb.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb.entity.CLAUSE_M1S1;
import code_fb.mapper.CG_MNHT_Mapper;
import code_fb.mapper.CLAUSE_Mapper;
import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb.request.CG_MNHT_Request_S1S2;
import code_fb.response.CG_MNHT_Response_M1S1;
import code_fb.response.CG_MNHT_Response_S1S2;
import code_fb.service.CG_MNHT_Service;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.mapper.TbCgcontractMapper;
import code_fb_cg.mapper.TbDocumeformMapper;
import code_fb_cg.mapper.TbDocumeformsonMapper;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractmttMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpSettlementMapper;
import code_fb_cg.request.DelInformation;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.TpCgorderRequest;
import code_fb_cg.request.Xxk_Cont_Request;
import code_fb_cg.util.ContractUtil;
import code_fb_customer.CG_MNHT_Customer;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("cgMnhtService")
public class CG_MNHT_ServiceImpl implements CG_MNHT_Service {
	@Autowired
	@Qualifier("cgMnhtMapper")
	public CG_MNHT_Mapper frcDao;
	@Autowired
	public CG_MNHT_Customer cgMnhtCustomer;
	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	@Autowired
	private TbDocumeformsonMapper tbDocumeformsonMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgcontractmttMapper tpCgcontractmttMapper;
	@Autowired
	private TbCgcontractMapper tbCgcontractMapper;
	@Autowired
	private TbDocumeformMapper tbDocumeformMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private CLAUSE_Mapper clause_Mapper;
	@Autowired
	private TpSettlementMapper tpSettlementMapper;
	@Autowired
	@Qualifier("tpCgauthorityMapper")
	private TpCgauthorityMapper tpCgauthorityMapper;

	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		String msg = "查询成功";
		String getcSubitemid = "";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_MNHT_M1S1> m1s11qcg_MNHT_M1S1 = new ArrayList<CG_MNHT_M1S1>();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
		System.out.println(user.getUserName());
		TpCgauthority tpCgauthority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		if(tpCgauthority != null) {
			getcSubitemid = tpCgauthority.getcSubitemid();
		}else {
			getcSubitemid = null;
		}
		if(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcStatexxk() == null ) {
			m1s11qcg_MNHT_M1S1 = frcDao.M1S11QCG_MNHT_M1S12(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
					cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime(),getcSubitemid);
		}else {
			m1s11qcg_MNHT_M1S1 = frcDao.M1S11QCG_MNHT_M1S1(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
					cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime(),getcSubitemid);
		}
		return builder.data(m1s11qcg_MNHT_M1S1).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q2(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
		data.setCgMnhtM1s1(frcDao.M1S11Q2CG_MNHT_M1S1(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
				cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime()));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S11Q3(User user,CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
		/*if("杨晓琴".equals(user.getUserName())) {
			//该用户查询的是已转正式合同的拟合同
			List<CG_MNHT_M1S1> m1s11qcg_MNHT_M1S1 = frcDao.M1S11QCG_MNHT_M1S14(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
					cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime());
			return builder.data(m1s11qcg_MNHT_M1S1).msg(msg).errcode(Errcode.Success).session(session).build();
		}*/
		List<CG_MNHT_M1S1> m1s11qcg_MNHT_M1S1 = frcDao.M1S11QCG_MNHT_M1S13(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0),
				cgMnhtRequestM1s1.getStartTime(), cgMnhtRequestM1s1.getEndTime());
		return builder.data(m1s11qcg_MNHT_M1S1).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11A(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<CG_MNHT_M1S1> cgMnhtM1s1 = cgMnhtRequestM1s1.getCgMnhtM1s1();
			System.out.println("合同号：："+cgMnhtM1s1.get(0).getcConnum()+"信息卡状态"+cgMnhtM1s1.get(0).getcStatexxk()+"外贸合同号:"+cgMnhtM1s1.get(0).getcOutconnum());
			//根据合同号查询正式数据库中的数据----判断是否重复
			List<TpCgcontractmt> selectByConnum = tpCgcontractmtMapper.selectByConnum(cgMnhtM1s1.get(0).getcConnum());
			if(selectByConnum.size()>0) {
				return builder.errcode(Errcode.FailParameterError).msg("该合同已存在！！！！！").session(session).build();
			}
			//将国内合同排除
			if(cgMnhtM1s1.get(0).getcOutconnum()!=null ) {
				//先判断印度的，走印度的合同，不经过信息卡。
				int indexOf = cgMnhtM1s1.get(0).getcOutconnum().indexOf("-");
				String substring = cgMnhtM1s1.get(0).getcOutconnum().substring(0, indexOf);//截取信息
				if(cgMnhtM1s1.get(0).getcConnum().contains("CSPL") && substring.contains("CSPL")) {
					//根据合同号查询拟合同的物质信息 然后添加到正式库的合同数据--list批量添加
					List<TpCgcontractstt> s1s21q2cg_MNHT_S1S2 = tpCgcontractsttMapper.S1S21Q2CG_MNHT_S1S2(cgMnhtM1s1.get(0));
					//添加正式库合同信息
					for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
						if(cg_MNHT_M1S1.getcConmoney() != null) {
							cg_MNHT_M1S1.setcSw09(cg_MNHT_M1S1.getcConmoney());
						}
						if(s1s21q2cg_MNHT_S1S2.get(0).getcSw08() != null) {
							cg_MNHT_M1S1.setcSw03(s1s21q2cg_MNHT_S1S2.get(0).getcSw08());
						}else if(s1s21q2cg_MNHT_S1S2.get(0).getcGoodsname() != null) {
							cg_MNHT_M1S1.setcSw03(s1s21q2cg_MNHT_S1S2.get(0).getcGoodsname());
						}	
						cg_MNHT_M1S1.setcSw01("0");
						cg_MNHT_M1S1.setcSw02(cg_MNHT_M1S1.getcConmoney());
						cg_MNHT_M1S1.setcCreatetime(new Date());
						cg_MNHT_M1S1.setcDr(null);
					}
					int m1s12acg_MNHT_M1S1 = tpCgcontractmtMapper.M1S12ACG_MNHT_M1S1(cgMnhtM1s1);
					System.out.println("添加合同的返回值：："+m1s12acg_MNHT_M1S1);
					if(m1s12acg_MNHT_M1S1>0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("合同信息添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
					}
					//添加正式库物资信息
					List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(cgMnhtM1s1.get(0).getcConnum());
					String mtid = null;
					if(tmtlist.size() > 0) {
						mtid = tmtlist.get(0).getcId();
					}
					for (TpCgcontractstt tpCgcontractstt : s1s21q2cg_MNHT_S1S2) {
						String unit = tpCgcontractstt.getcUnit();
						if(mtid != null) {
							tpCgcontractstt.setcMtid(mtid);
						}		
						if(tpCgcontractstt.getcUnitspec() != null) {
							tpCgcontractstt.setcUnit(tpCgcontractstt.getcUnitspec());
						}	
						tpCgcontractstt.setcUnitspec(unit);
						tpCgcontractstt.setcGroudtotalnum("0");
						tpCgcontractstt.setcResiduenum(tpCgcontractstt.getcGoodsnum());
						TpCgorderst tp = new TpCgorderst();
						//修改请购单中的采购状态-已转合同
						if(tpCgcontractstt.getcSw02()!= null && !"".equals(tpCgcontractstt.getcSw02()) ) {
							if(tpCgcontractstt.getcSw02().indexOf("/")!=-1) {
								String[] split = tpCgcontractstt.getcSw02().split("/");
								
								for (String string : split) {
									tp.setcId(string);
									tp.setcState("1");
									tpCgorderstMapper.updateByPrimaryKeySelective(tp);
								}
							}else {
								tp.setcId(tpCgcontractstt.getcSw02());
								tp.setcState("1");
								tpCgorderstMapper.updateByPrimaryKeySelective(tp);
							}
						}
					}
					System.out.println(s1s21q2cg_MNHT_S1S2.size() + "aaaaaaaaaaaaa");
					System.out.println("印度合同直接生成正式合同");
					int m1s12acg_MNHT_M1S12 = tpCgcontractstMapper.M1S12ACG_MNHT_M1S1(s1s21q2cg_MNHT_S1S2);
					if(m1s12acg_MNHT_M1S12 > 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("合同信息物资添加失败添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
					}
					System.out.println("添加合同物资的返回值:::"+m1s12acg_MNHT_M1S12);
					//修改信息卡状态、修改退单状态
					cgMnhtM1s1.get(0).setcStatexxk("xxk06");
					cgMnhtM1s1.get(0).setcBackstate("td001");
					cgMnhtM1s1.get(0).setcModifier(user.getUserName());
					cgMnhtM1s1.get(0).setcModifytime(new Date());
					int row0 = frcDao.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
					if (row0 > 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败！！！").session(session).build();
					}
					return builder.msg("合同添加成功！！！").errcode(Errcode.Success).session(session).build();
				}
			}
			
			//国内合同，审核通过，被撤回的合同
			if(cgMnhtM1s1.get(0).getcOutconnum()!=null && !"xxk03".equals(cgMnhtM1s1.get(0).getcStatexxk()) && !"xxk07".equals(cgMnhtM1s1.get(0).getcStatexxk())) {
				return builder.msg("该合同有信息卡未审核，或者生成正式合同失败 ！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
				//根据合同号查询拟合同的物质信息 然后添加到正式库的合同数据--list批量添加
				List<TpCgcontractstt> s1s21q2cg_MNHT_S1S2 = tpCgcontractsttMapper.S1S21Q2CG_MNHT_S1S2(cgMnhtM1s1.get(0));
				//添加正式库合同信息
				for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
					if(cg_MNHT_M1S1.getcConmoney() != null) {
						cg_MNHT_M1S1.setcSw09(cg_MNHT_M1S1.getcConmoney());
					}
					if(s1s21q2cg_MNHT_S1S2.get(0).getcSw08() != null) {
						cg_MNHT_M1S1.setcSw03(s1s21q2cg_MNHT_S1S2.get(0).getcSw08());
					}else if(s1s21q2cg_MNHT_S1S2.get(0).getcGoodsname() != null) {
						cg_MNHT_M1S1.setcSw03(s1s21q2cg_MNHT_S1S2.get(0).getcGoodsname());
					}	
					cg_MNHT_M1S1.setcSw01("0");
					cg_MNHT_M1S1.setcSw02(cg_MNHT_M1S1.getcConmoney());		
					cg_MNHT_M1S1.setcCreatetime(new Date());
					cg_MNHT_M1S1.setcDr(null);
//					if("qx02".equals(cg_MNHT_M1S1.getcDelivery()) && cgMnhtRequestM1s1.getDeliverytime() != null) {						
//						System.out.println(cgMnhtRequestM1s1.getDeliverytime() + "AAAAAAAAAAA");
//						cg_MNHT_M1S1.setcDeliverytime(cgMnhtRequestM1s1.getDeliverytime());
//						cg_MNHT_M1S1.setcDr(ContractUtil.dateUnit(Integer.parseInt(cg_MNHT_M1S1.getcDeliveryday().trim()), cgMnhtRequestM1s1.getDeliverytime()));
//						System.out.println(cg_MNHT_M1S1.getcDr() + "BBBBBBBB");
//					}
				}
				int m1s12acg_MNHT_M1S1 = tpCgcontractmtMapper.M1S12ACG_MNHT_M1S1(cgMnhtM1s1);
				System.out.println("添加合同的返回值：："+m1s12acg_MNHT_M1S1);
				if(m1s12acg_MNHT_M1S1>0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("合同信息添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
				//添加正式库物资信息
				List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectByConnum(cgMnhtM1s1.get(0).getcConnum());
				String mtid = null;
				if(tmtlist.size() > 0) {
					mtid = tmtlist.get(0).getcId();
				}
				for (TpCgcontractstt tpCgcontractstt : s1s21q2cg_MNHT_S1S2) {
					String unit = tpCgcontractstt.getcUnit();
					if(mtid != null) {
						tpCgcontractstt.setcMtid(mtid);
					}		
					if(tpCgcontractstt.getcUnitspec() != null) {
						tpCgcontractstt.setcUnit(tpCgcontractstt.getcUnitspec());
					}	
					tpCgcontractstt.setcUnitspec(unit);
					tpCgcontractstt.setcGroudtotalnum("0");
					tpCgcontractstt.setcResiduenum(tpCgcontractstt.getcGoodsnum());
					TpCgorderst tp = new TpCgorderst();
					//修改请购单中的采购状态-已转合同
					if(tpCgcontractstt.getcSw02()!= null && !"".equals(tpCgcontractstt.getcSw02()) ) {
						if(tpCgcontractstt.getcSw02().indexOf("/")!=-1) {
							String[] split = tpCgcontractstt.getcSw02().split("/");
							
							for (String string : split) {
								tp.setcId(string);
								tp.setcState("1");
								tpCgorderstMapper.updateByPrimaryKeySelective(tp);
							}
						}else {
							tp.setcId(tpCgcontractstt.getcSw02());
							tp.setcState("1");
							tpCgorderstMapper.updateByPrimaryKeySelective(tp);
						}
					}
				}
				System.out.println(s1s21q2cg_MNHT_S1S2.size() + "aaaaaaaaaaaaa");
				int m1s12acg_MNHT_M1S12 = tpCgcontractstMapper.M1S12ACG_MNHT_M1S1(s1s21q2cg_MNHT_S1S2);
				if(m1s12acg_MNHT_M1S12 > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("合同信息物资添加失败添加失败！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
				System.out.println("添加合同物资的返回值:::"+m1s12acg_MNHT_M1S12);
				//修改信息卡状态、修改退单状态
				cgMnhtM1s1.get(0).setcStatexxk("xxk06");
				cgMnhtM1s1.get(0).setcBackstate("td001");
				cgMnhtM1s1.get(0).setcModifier(user.getUserName());
				cgMnhtM1s1.get(0).setcModifytime(new Date());
			int row0 = frcDao.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
				if (row0 > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("添加失败！！！").session(session).build();
				}
			return builder.msg("合同添加成功！！！").errcode(Errcode.Success).session(session).build();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
		
	}
@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11U(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			//查询拟合同和信息卡已存在的信息
			List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectInfo(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
			List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
			String cDenycauseCMT;
			String cDenycauseXXT ;
			int getcDenynum = selectInfo.get(0).getcDenynum();
			getcDenynum+=1;
			System.out.println("信息卡长度：："+seletByeCconnum.size());
			if(selectInfo.get(0).getcDenycause() == null) {
				cDenycauseCMT = "";
			}else {
				cDenycauseCMT = selectInfo.get(0).getcDenycause();
			}
			if(seletByeCconnum.size()<= 0 || seletByeCconnum.get(0).getcDenycause()  == null) {
				cDenycauseXXT = "";
			}else {
				cDenycauseXXT = seletByeCconnum.get(0).getcDenycause();
			}
			SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日  HH:mm");
			  String  denyTime=dateformat.format(new Date());
			List<TbDocumeform> tbDocumeformList = new ArrayList<TbDocumeform>();
			//1.修改拟合同的驳回信息
			List<CG_MNHT_M1S1> cgMnhtM1s1 = new ArrayList<CG_MNHT_M1S1>();
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtRequestM1s1.getCgMnhtM1s1()) {
				TbDocumeform tbDocumeform = new TbDocumeform();
				CG_MNHT_M1S1 cgMNHTM1S1 = new CG_MNHT_M1S1();
				//驳回人
				cgMNHTM1S1.setcDenyer(user.getUserName());
				//驳回时间
				cgMNHTM1S1.setcDenytime(new Date());
				//驳回状态---已驳回
				cgMNHTM1S1.setcStatexxk("xxk05");
				cgMNHTM1S1.setcMadestate("mk006");
				cgMNHTM1S1.setcDenynum(getcDenynum);
				//将拟合同中已存在的驳回原因和新增加的驳回原因进行合并
				cgMNHTM1S1.setcDenycause("驳回人:"+user.getUserName()+",时间:"+denyTime+",原因:"+cg_MNHT_M1S1.getCausecDeny()+";"+cDenycauseCMT);//驳回原因
				cgMNHTM1S1.setcConnum(cg_MNHT_M1S1.getcConnum());
				//----信息卡主表
				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());//合同号
				//将信息卡中已存在的驳回原因和新增加的驳回原因进行合并
				tbDocumeform.setcDenycause("驳回人:"+user.getUserName()+",时间:"+denyTime+",原因:"+cg_MNHT_M1S1.getCausecDeny()+";"+cDenycauseXXT);//驳回原因
				tbDocumeform.setcDenytime(new Date());//驳回时间
				tbDocumeform.setcDenyer(user.getUserName());//驳回人
				//制作人状态---驳回状态已驳回
				tbDocumeform.setcMadestate("mk006");
				tbDocumeform.setcDenynum(getcDenynum);
				tbDocumeform.setcCheckstate("");
				tbDocumeformList.add(tbDocumeform);
				
				cgMnhtM1s1.add(cgMNHTM1S1);
			}
			int row0 = frcDao.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
			if (row0 > 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("反驳失败！！！").session(session).build();
			}
			
			//2.修改信息卡的相关信息
			
			int updaterown= tbDocumeformMapper.updateTbDocumeform(tbDocumeformList);
			if(updaterown >0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("反驳失败！！！").session(session).build();
			}
			
			return builder.errcode(Errcode.Success).msg("反驳成功！！！").session(session).build();	
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("添加失败！！！");
		}
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_MNHT_M1S1> cgMnhtM1s1 = cgMnhtRequestM1s1.getCgMnhtM1s1();
		String ss_ret0 = "";
		ss_ret0 = cgMnhtCustomer.check_M1S11D_CG_MNHT_M1S1(cgMnhtRequestM1s1);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.M1S11DCG_MNHT_M1S1(cgMnhtM1s1);
			if (row0 < 0) {
				msg = msg + "CG_MNHT_M1S1删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21Q(CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,
			String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_S1S2 s1s2 = new CG_MNHT_S1S2();
		if(cgMnhtRequestS1s2.getCgMnhtM1s1().getcConnum() == null) {
			s1s2.setcConnum("");
		}else {
			s1s2.setcConnum(cgMnhtRequestS1s2.getCgMnhtM1s1().getcConnum());
		}
		
		s1s2.setcGoodsname(cgMnhtRequestS1s2.getcGoodsname());
		CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
		data.setCgMnhtS1s2(frcDao.S1S21QCG_MNHT_S1S2(s1s2));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21A(User user, CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,
			String session) {
		
		String msg = "";
		RandomId ri = new RandomId();
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_MNHT_S1S2> cgMnhtS1s2 = cgMnhtRequestS1s2.getCgMnhtS1s2();
		CG_MNHT_M1S1 cgMnhtM1s1 = cgMnhtRequestS1s2.getCgMnhtM1s1();
		
		//防错处理
		String msgg = "添加一条新物资";
		//BusinessJudge()方法放回值有4个
		//BusinessJudge()方法放回值有5个
		//返回值 0  直接放行  不影响代码
		//返回值1  结束执行后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
		//放回值2  结束执行后续代码 并返回 “信息卡已提交，无法操作！”
		//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
		//返回值4 sql语句执行出错
		int fd = BusinessJudge(cgMnhtM1s1.getcConnum().trim(),msgg);
		if(fd == 1 ) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("信息卡审核通过或已生成正式合同，无法添加").build();
		}else if(fd == 2) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("信息卡已提交，无法添加").build();
		}else if(fd == 4) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("添加失败").build();
		}
		
		BigDecimal sum;//数量
		BigDecimal price;//单价
		BigDecimal sumprice;//总价
		BigDecimal money;//合同金额
		cgMnhtS1s2.get(0).setcState("3");//可见
		cgMnhtS1s2.get(0).setcMtid(cgMnhtM1s1.getcId());//合同主键
		cgMnhtS1s2.get(0).setcCreater(user.getUserName());
		cgMnhtS1s2.get(0).setcCreatetime(new Date());
		if(cgMnhtS1s2.get(0).getcGoodsnum() != null && cgMnhtS1s2.get(0).getcPrice() != null && cgMnhtS1s2.get(0).getcGoodsnum() != "" && cgMnhtS1s2.get(0).getcPrice() != "") {
			sum = new BigDecimal(cgMnhtS1s2.get(0).getcGoodsnum());//获取数量
			price = new BigDecimal(cgMnhtS1s2.get(0).getcPrice());//获取单价
			sumprice = sum.multiply(price);//得到总价
			cgMnhtS1s2.get(0).setcSumprice(ri.formatForTwo(sumprice));//物资总价
			if(cgMnhtM1s1.getcConmoney() != null) {
				money = new BigDecimal(cgMnhtM1s1.getcConmoney());//获取合同金额
				cgMnhtM1s1.setcConmoney(ri.formatForTwo(money.add(sumprice)));
			}
			
		}
		if(cgMnhtS1s2.get(0).getcSw08() != null) {
			cgMnhtS1s2.get(0).setcName(cgMnhtS1s2.get(0).getcSw08());
		}
		if(cgMnhtS1s2.get(0).getcUnitspec() != null && cgMnhtS1s2.get(0).getcUnitspec() != "") {
			String unitsoec = cgMnhtS1s2.get(0).getcUnitspec();
			TpCgauthority thority = tpCgauthorityMapper.selectDanWei(unitsoec, "DW");
			if(thority == null) {
				return builder.errcode(Errcode.FailParameterError).msg("报关单位错误").build();
			}
		}
		List<TpCgcontractstt> num1  = tpCgcontractsttMapper.selectByColine(cgMnhtM1s1.getcConnum());
		List<TpCgcontractstt> num2  = tpCgcontractsttMapper.selectByCountState(cgMnhtM1s1.getcConnum());
		int len;
		int len1;
		int len2;
		if(num2.size() == 0) {
			len = Integer.parseInt(num1.get((num1.size()-1)).getcConline());
		}else {
			len2 = Integer.parseInt(num2.get((num2.size()-1)).getcConline());
			if(num1.get((num1.size()-1)).getcConline().length() > 5) {
				len1 = Integer.parseInt(num1.get((num1.size()-1)).getcConline().substring(0, 5));
			}else {
				len1 = Integer.parseInt(num1.get((num1.size()-1)).getcConline());
			}
			if(len1 > len2) {
				len = len1;
			}else {
				len = len2;
			}
		}
			if(len<10) {
				//合同行号
				if((len+1)==10) {
					cgMnhtS1s2.get(0).setcConline("000"+String.valueOf(len+1));
				}else {
					cgMnhtS1s2.get(0).setcConline("0000"+String.valueOf(len+1));
				}
			}
			if(len>9 && len<100) {
				//合同行号
				if((len+1)==100) {
					cgMnhtS1s2.get(0).setcConline("00"+String.valueOf(len+1));
				}else {
					cgMnhtS1s2.get(0).setcConline("000"+String.valueOf(len+1));
				}
			}
			if(len>99 && len<1000) {
				//合同行号
				if((len+1)==1000) {
					cgMnhtS1s2.get(0).setcConline("0"+String.valueOf(len+1));
				}else {
					cgMnhtS1s2.get(0).setcConline("00"+String.valueOf(len+1));
				}
			}
			if(len>999 && len<10000) {
				//合同行号
				cgMnhtS1s2.get(0).setcConline("0"+String.valueOf(len+1));
			}
			cgMnhtS1s2.get(0).setcCreater(user.getUserName());
			cgMnhtS1s2.get(0).setcCreatetime(new Date());
			
			if(fd == 3) {
				cgMnhtM1s1.setcStatexxk("xxk08");
				cgMnhtM1s1.setcMadestate("mk007");
				cgMnhtM1s1.setcCsubmittime(new Date());
				cgMnhtM1s1.setcSw18(msgg);
			}
			
					
			
			int mrow = frcDao.M1S11UCG_MNHT_M1S3(cgMnhtM1s1);
			if(mrow >= 0) {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
			row0 = frcDao.S1S21ACG_MNHT_S1S2(cgMnhtS1s2);
			if (row0 < 0) {
				
				
				
				if(fd == 3) {
					return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").session(session).build();
				}
				
				
				
				msg = msg + "CG_MNHT_S1S2保存成功";
				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21U(User user, CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_MNHT_S1S2> cgMnhtS1s2 = cgMnhtRequestS1s2.getCgMnhtS1s2();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgMnhtCustomer.check_S1S21U_CG_MNHT_S1S2(cgMnhtRequestS1s2);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.S1S21UCG_MNHT_S1S2(cgMnhtS1s2);
			if (row0 < 0) {
				msg = msg + "CG_MNHT_S1S2修改成功";

				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21D(User user, CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,
			String session) {
		String msg = "";

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_MNHT_S1S2> cgMnhtS1s2 = cgMnhtRequestS1s2.getCgMnhtS1s2();
		String ss_ret0 = "";
		ss_ret0 = cgMnhtCustomer.check_S1S21D_CG_MNHT_S1S2(cgMnhtRequestS1s2);
		if (ss_ret0.indexOf("success") != -1) {
			if (ss_ret0.length() > 10) {
				msg = ss_ret0;
			}

			row0 = frcDao.S1S21DCG_MNHT_S1S2(cgMnhtS1s2);
			if (row0 < 0) {
				msg = msg + "CG_MNHT_S1S2删除成功";

			} else {
				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
		}
		return builder.errcode(Errcode.Success).msg(msg).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QConnum(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		cgMnhtRequestM1s1.getCgMnhtM1s1();
		int num = 0;
		CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
		List<CG_MNHT_S1S2> s1s21qcg_MNHT = frcDao.S1S21QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
		for (CG_MNHT_S1S2 cg_MNHT_S1S2 : s1s21qcg_MNHT) {
			cg_MNHT_S1S2.setNumber(++num);
		}
		System.out.println("序号::"+num);
		data.setCgMnhtS1s2(s1s21qcg_MNHT);
		return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
	}

//信息卡合同查询物资
	public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> M1S1S12(
			RequestObject<EmptyTag, Xxk_Cont_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
		data.setCgXXK_Request(frcDao.M1S1S12(requestObject.getData().getCg_MNHT_M1S1()));
		return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21CX(User user, CG_MNHT_Request_S1S2 cgMnhtRequestS1s2,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		BigDecimal sumprice;//总价
		BigDecimal money;//总价
		List<CG_MNHT_S1S2> cgMnhtS1s2 = cgMnhtRequestS1s2.getCgMnhtS1s2();
		CG_MNHT_M1S1 cgMnhtM1s1 = cgMnhtRequestS1s2.getCgMnhtM1s1();
		//防错处理
				String msgg = "撤销了" + cgMnhtS1s2.size() + "条物资";
				//BusinessJudge()方法放回值有4个
				//BusinessJudge()方法放回值有5个
				//返回值 0  直接放行  不影响代码
				//返回值1  结束执行后续代码 并返回 “信息卡审核通过或已生成正式合同，无法添加”
				//放回值2  结束执行后续代码 并返回 “信息卡已提交，无法操作！”
				//返回值3  继续执行  更改合同状态为  xxk08 : 变更申请  并返回 “合同状态已变更”
				//返回值4 sql语句执行出错
				int fd = BusinessJudge(cgMnhtM1s1.getcConnum().trim(),msgg);
				if(fd == 1) {
					return builder.errcode(Errcode.FailParameterError).msg("无法撤销拟合同物资!!!请撤回信息卡！！！").build();
				}else if(fd == 2) {
					return builder.errcode(Errcode.FailParameterError).msg("已生成正式合同，无法撤回拟合同物资信息！！！！").build();
				}else if(fd == 4) {
					return builder.errcode(Errcode.FailParameterError).msg("撤销失败").build();
				}
		
		
		for (CG_MNHT_S1S2 cg_MNHT_S1S2 : cgMnhtS1s2) {
			if(cg_MNHT_S1S2.getcQid() != null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("无法撤销原合同物资").errcode(Errcode.FailParameterError).build();
			}
			if(cg_MNHT_S1S2.getcConline().length() > 5) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("已合并/拆分，无法撤销").errcode(Errcode.FailParameterError).build();
			}
			//根据请购物资的主键，撤回物资中相应的合同信息，并标注未采购
			if(cg_MNHT_S1S2.getcSw02() != null) {
				int row0 = tpCgorderbeforeMapper.update_st_Cstate2(cg_MNHT_S1S2.getcSw02());
				if(row0 == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("撤销物资失败").errcode(Errcode.FailParameterError).build();	
				}
			}
			//根据主键删除拟合同物资信息
			int row1 = frcDao.S1S21DCG_MNHT_S1S21(cg_MNHT_S1S2);
			if(row1 == 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销物资失败").errcode(Errcode.FailParameterError).build();	
			}
			//修改拟合同价格
			if(cg_MNHT_S1S2.getcSumprice() != null && cgMnhtM1s1.getcConmoney() != null) {
				sumprice = new BigDecimal(cg_MNHT_S1S2.getcSumprice());
				money = new BigDecimal(cgMnhtM1s1.getcConmoney());
				cgMnhtM1s1.setcConmoney(ri.formatForTwo(money.subtract(sumprice)));
			}
		}
		//修改状态
//		if(fd == 3) {
//			cgMnhtM1s1.setcStatexxk("xxk08");
//			cgMnhtM1s1.setcMadestate("mk007");
//			cgMnhtM1s1.setcCsubmittime(new Date());
//			cgMnhtM1s1.setcSw18(msgg);
//		}
		//修改拟合同主表信息
		int mrow = frcDao.M1S11UCG_MNHT_M1S3(cgMnhtM1s1);
		if(mrow >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("撤销合同失败").session(session).build();
		}
		//修改拟合同信息
		List<CG_MNHT_S1S2> list = frcDao.S1S21QCONNUM(cgMnhtS1s2.get(0));
		if(list.size() == 0) {
			
			//查询逻辑删除的物资 并物理删除
			List<TpCgcontractstt> tst = tpCgcontractsttMapper.selectFakedeath(cgMnhtM1s1.getcConnum());
			if(tst.size()>0) {
				for (TpCgcontractstt tpCgcontractstt : tst) {
					int row1 = tpCgcontractsttMapper.deleteByPrimaryKey(tpCgcontractstt.getcId());
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
					}
				}
			}
			int row2 = frcDao.M1S11DCG(cgMnhtS1s2.get(0).getcMtid());
			if(row2 >= 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("撤销物资失败").errcode(Errcode.FailParameterError).build();	
			}
			//撤回供应商，签订合同公司等信息
			TpCgcontractmtt tpCgcontractmtt = new TpCgcontractmtt();
			tpCgcontractmtt.setcConnum(cgMnhtS1s2.get(0).getcConnum());
			List<TbCgcontract> selectBycConnum = tbCgcontractMapper.selectBycConnum(tpCgcontractmtt);
			if(selectBycConnum.size()>0) {
				int deleteBycConnum = tbCgcontractMapper.deleteBycConnum(tpCgcontractmtt.getcConnum());
				if(deleteBycConnum > 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
			//删除信息卡信息 
			List<TbDocumeform> form = tbDocumeformMapper.seletByeCconnum(tpCgcontractmtt.getcConnum());
			if(form.size() > 0) {
				List<TbDocumeformson> formson = tbDocumeformsonMapper.M1S21Q4(form.get(0));
				if(formson.size() > 0) {
					int rows = tbDocumeformsonMapper.M1S21D(formson);
					if(rows > 0) {
						return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
					}
				}
				int rown = tbDocumeformMapper.deleteByPrimaryKey(form.get(0).getcId());
				if(rown > 0) {
					return builder.msg("撤销合同失败").errcode(Errcode.FailParameterError).build();	
				}
			}
		}
		
		if(fd== 3) {
			return builder.errcode(Errcode.FailShowWarningMsg).msg("状态已变更").session(session).build();
		}
		return builder.errcode(Errcode.Success).msg("撤销物资成功").session(session).build();
	}
//信息卡审核通过
	public ResponseObject<EmptyTag, EmptyData> M1S11U_XXK(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//1.信息卡审核通过--拟合同
		List<TbDocumeform> tbDocumeformList = new ArrayList<TbDocumeform>();
		List<CG_MNHT_M1S1> cgMnhtM1s1 = new  ArrayList<CG_MNHT_M1S1>();
		for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtRequestM1s1.getCgMnhtM1s1()) {
			//拟合同 信息卡
			CG_MNHT_M1S1 cgMNHTM1S1 = new CG_MNHT_M1S1();
			TbDocumeform tbDocumeform = new TbDocumeform();
			cgMNHTM1S1.setcConnum(cg_MNHT_M1S1.getcConnum());
			//拟合同信息卡状态--审核通过
			cgMNHTM1S1.setcStatexxk("xxk04");
			cgMNHTM1S1.setcMadestate("mk005");
			tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
			//制作人完成状态----已审核
			tbDocumeform.setcMadestate("mk005");
			tbDocumeform.setcCheckstate("xcc003");
			tbDocumeform.setcChiede(user.getUserName());
			tbDocumeformList.add(tbDocumeform);
			cgMnhtM1s1.add(cgMNHTM1S1);
		}
		int row0 = frcDao.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
		if (row0 >0) {
			return builder.errcode(Errcode.FailParameterError).msg("审核失败！！！").session(session).build();
		}
		//2.修改信息卡制作人的制作状态---审核通过
		int updateRown= tbDocumeformMapper.updateTbDocumeform(tbDocumeformList);
		if(updateRown>0) {
			return builder.errcode(Errcode.FailParameterError).msg("审核失败！！！").session(session).build();
		}
		return builder.errcode(Errcode.Success).msg("审核通过！！！").session(session).build();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgMnhtCustomer.check_M1S11U_CG_MNHT_M1S1(cgMnhtRequestM1s1);
//		if (ss_ret0.indexOf("success") != -1) {
//			if (ss_ret0.length() > 10) {
//				msg = ss_ret0;
//			}
//
//			row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
//			if (row0 < 0) {
//				msg = msg + "CG_MNHT_M1S1修改成功";
//
//				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
		
	}
	//拟合同提交
	public ResponseObject<EmptyTag, EmptyData> M1S11U2(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_MNHT_M1S1> cgMnhtM1s1 = cgMnhtRequestM1s1.getCgMnhtM1s1();
		if(!cgMnhtM1s1.get(0).getcStatexxk().equals("xxk01")) {
			return builder.errcode(Errcode.FailParameterError).msg("该合同已经提交过信息卡，请走信息卡变更流程！！！").session(session).build();
		}
		
		List<TbDocumeform> tbDocumeformList = new ArrayList<TbDocumeform>();
		List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
		//判断拟合同中的信息卡审核状态是否是已驳回-----1.修改拟合同中的信息卡审核状态（未审核），制作人完成状态--部分完成
		System.out.println("信息卡审核状态:"+cgMnhtM1s1.get(0).getcStatexxk());
		if(seletByeCconnum.size() <= 0 && cgMnhtM1s1.get(0).getcStatexxk().equals("xxk05")) {
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				TbDocumeform tbDocumeform = new TbDocumeform();
				//制作人完成状态
				cg_MNHT_M1S1.setcMadestate("mk001");
				cg_MNHT_M1S1.setcStatexxk("xxk02");//未审核
				cg_MNHT_M1S1.setcCsubmittime(new  Date());
				//合同号
				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
				//制作人完成状态----部分完成
				tbDocumeform.setcMadestate("mk001");
				tbDocumeformList.add(tbDocumeform);
			}
		}else if(seletByeCconnum.size()>0 && cgMnhtM1s1.get(0).getcStatexxk().equals("xxk05")){
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				TbDocumeform tbDocumeform = new TbDocumeform();
				//制作人完成状态
				cg_MNHT_M1S1.setcMadestate("mk004");
				cg_MNHT_M1S1.setcStatexxk("xxk02");//未审核
				cg_MNHT_M1S1.setcCsubmittime(new  Date());//提交时间
				//合同号
				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
				//制作人完成状态----部分完成
				tbDocumeform.setcMadestate("mk004");
				tbDocumeformList.add(tbDocumeform);
			}
		}else {
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				TbDocumeform tbDocumeform = new TbDocumeform();
				//制作人完成状态
				cg_MNHT_M1S1.setcMadestate("mk001");
				cg_MNHT_M1S1.setcStatexxk("xxk02");//未审核
				cg_MNHT_M1S1.setcCsubmittime(new  Date());//提交时间
				//合同号
				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
				//制作人完成状态----部分完成
				tbDocumeform.setcMadestate("mk001");
				tbDocumeformList.add(tbDocumeform);
			}
		}
		int row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
		if (row0 >0) {
			return builder.errcode(Errcode.FailParameterError).msg("提交失败！！！").session(session).build();
		}
		//2.修改信息卡制作人的制作状态---未完成
		int updateRown= tbDocumeformMapper.updateTbDocumeform(tbDocumeformList);
		if(updateRown>0) {
			return builder.errcode(Errcode.FailParameterError).msg("提交失败！！！").session(session).build();
		}
		return builder.errcode(Errcode.Success).msg("提交通过！！！").session(session).build();
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgMnhtCustomer.check_M1S11U_CG_MNHT_M1S1(cgMnhtRequestM1s1);
//		if (ss_ret0.indexOf("success") != -1) {
//			if (ss_ret0.length() > 10) {
//				msg = ss_ret0;
//			}
//
//			row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
//			if (row0 < 0) {
//				msg = msg + "CG_MNHT_M1S1修改成功";
//
//				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
		
	}

	@Override
	@Transactional 
	public ResponseObject<EmptyTag, EmptyData> M1S11U3(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_MNHT_M1S1> cgMnhtM1s1 = cgMnhtRequestM1s1.getCgMnhtM1s1();
		String cDenycauseCMT;
		String cDenycause = "";
		String[] cause = cgMnhtRequestM1s1.getCause();
		List<String> strlist = new ArrayList<String>();//页面传过来的选中的原因
		List<String> bgcause = new ArrayList<String>();//查询数据字典  物资变更的选项（分组为1）
		System.out.println("长度"+cause.length);
		for (int i = 0; i < cause.length; i++){
			TpCgauthority tpCgauthority = tpCgauthorityMapper.selectcItemidSubitemid(cause[i],"BGCAUSE");
			cDenycause += tpCgauthority.getcSubitemdes()+",";
			strlist.add(cause[i]);
		}
		System.out.println("变更原因::"+cDenycause);
		List<TpCgauthority> cgauthority = tpCgauthorityMapper.selectBybgcause("BGCAUSE");
		if(cgauthority.size() > 0) {
			for (TpCgauthority tpCgauthority : cgauthority) {
				bgcause.add(tpCgauthority.getcSubitemid());
			}
		}else if(cgauthority.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("请在数据字典页面对物资变更的状态进行分组标记为“1”").session(session).build();
		}
		//求两个集合的交集
		strlist.retainAll(bgcause);
		//当交集为0时  根据拟合同信息更新信息卡主表信息，不改变拟合同和信息卡的状态，保留变更原因和次数
		//当交集大于0时，根基拟合同信息更新信息卡主表、子表的相关数据，状态也进行变更
		if(strlist.size() == 0) {
			List<CG_MNHT_M1S1> m1s1list = frcDao.M1S11QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
			int getcCsubmitnum = m1s1list.get(0).getcCsubmitnum();
			if(m1s1list.get(0).getcSw18() == null) {
				cDenycauseCMT = "";
			}else {
				cDenycauseCMT = m1s1list.get(0).getcSw18();
			}
			SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日  HH:mm");
			  String  denyTime=dateformat.format(new Date());		
			//拟合同变更提交，变更提交，变更原因
			String statexxk = cgMnhtM1s1.get(0).getcStatexxk().trim();
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				if("xxk05".equals(cg_MNHT_M1S1.getcStatexxk().trim())) {
					cg_MNHT_M1S1.setcMadestate("mk007");
					cg_MNHT_M1S1.setcStatexxk("xxk08");//未审核
				}				
				cg_MNHT_M1S1.setcCsubmittime(new Date());
				cg_MNHT_M1S1.setcModifier(user.getUserName());
				cg_MNHT_M1S1.setcModifytime(new Date());
				cg_MNHT_M1S1.setcSw18("时间:"+denyTime+cDenycause+";"+cDenycauseCMT);//变更原因
				cg_MNHT_M1S1.setcCsubmitnum(++getcCsubmitnum);
			}
			int row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
			if (row0 >0) {
				return builder.errcode(Errcode.FailParameterError).msg("申请失败！！！").session(session).build();
			}
			//修改信息卡信息
			List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeConId(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcId());
			if(seletByeCconnum.size() == 0) {
				seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
			}
			String connum = "";
			//修改信息卡主表信息
			if(seletByeCconnum.size() > 0) {
				connum =seletByeCconnum.get(0).getcConnum().trim();
				seletByeCconnum.get(0).setcConnum(m1s1list.get(0).getcConnum());//合同号
				seletByeCconnum.get(0).setcConmoney(m1s1list.get(0).getcConmoney());//合同金额
				seletByeCconnum.get(0).setcSupplier(m1s1list.get(0).getcSupplier());//供应商
				seletByeCconnum.get(0).setcComphone(m1s1list.get(0).getcSupphone());//联系电话
//				seletByeCconnum.get(0).setcComphone(m1s1list.get(0).getcSupaddress());//供应商地址
				seletByeCconnum.get(0).setcShname(m1s1list.get(0).getcSw17());//收货单位
				seletByeCconnum.get(0).setcOutconnum(m1s1list.get(0).getcOutconnum());//外贸号
				seletByeCconnum.get(0).setcExporter(m1s1list.get(0).getcCludecom());//采购单位
				seletByeCconnum.get(0).setcSw10("1");
				if(m1s1list.get(0).getcSw05() != null) {
					seletByeCconnum.get(0).setcSw07(m1s1list.get(0).getcSw05());//转卖合同号
					String str = m1s1list.get(0).getcConnum()+"、"+m1s1list.get(0).getcSw05();
					seletByeCconnum.get(0).setcSw06(str);//转卖内贸合同号
					//收货单位
					int indexOf1 = m1s1list.get(0).getcSw05().indexOf("-");
					int indexOf2 = m1s1list.get(0).getcSw05().indexOf("-",indexOf1+1);
					String substring = m1s1list.get(0).getcSw05().substring(indexOf1+1, indexOf2);
					seletByeCconnum.get(0).setcShname(substring);
				}else {
					seletByeCconnum.get(0).setcSw07("");
					seletByeCconnum.get(0).setcSw06("");
//					seletByeCconnum.get(0).setcShname("");
				}
				//出口商
				if(m1s1list.get(0).getcSw21() != null) {
					seletByeCconnum.get(0).setcSw05(m1s1list.get(0).getcSw21());
				}else {
					seletByeCconnum.get(0).setcSw05("");
				}
				if("xxk05".equals(statexxk)|| "xxk07".equals(statexxk)) {
					seletByeCconnum.get(0).setcMadestate("mk007");//制作人完成状态----变更申请
				}				
				int roww =  tbDocumeformMapper.updateByPrimaryKeySelective(seletByeCconnum.get(0));
				if(roww > 0 ) {				
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();				
				}
				//如果合同号发生变更，把信息卡物资的中的合同进行变更
			
				if(!m1s1list.get(0).getcConnum().trim().equals(connum)) {
					System.out.println("---------------------------------------------------");
					System.out.println(m1s1list.get(0).getcConnum());
					System.out.println(seletByeCconnum.get(0).getcId());
				
					System.out.println("---------------------------------------------------");
					int rowson = tbDocumeformsonMapper.updateBycFatherid(m1s1list.get(0).getcConnum(), seletByeCconnum.get(0).getcId());
					if(rowson > 0 ) {				
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();				
					}
				}
			}
			
	    }else if(strlist.size() > 0) {
			
	    	List<CG_MNHT_M1S1> m1s1list = frcDao.M1S11QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
			int getcCsubmitnum = m1s1list.get(0).getcCsubmitnum();
			if(m1s1list.get(0).getcSw18() == null) {
				cDenycauseCMT = "";
			}else {
				cDenycauseCMT = m1s1list.get(0).getcSw18();
			}
			
			System.out.println("信息卡审核状态:"+cgMnhtM1s1.get(0).getcStatexxk());
			SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日  HH:mm");
			  String  denyTime=dateformat.format(new Date());		
			//拟合同变更提交，状态变成变更提交，信息卡变更人制作状态，变更提交，变更原因
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				//制作人完成状态
				cg_MNHT_M1S1.setcMadestate("mk007");
				cg_MNHT_M1S1.setcStatexxk("xxk08");//未审核
				cg_MNHT_M1S1.setcCsubmittime(new Date());
				cg_MNHT_M1S1.setcModifier(user.getUserName());
				cg_MNHT_M1S1.setcModifytime(new Date());
				cg_MNHT_M1S1.setcSw18("时间:"+denyTime+cDenycause+";"+cDenycauseCMT);//变更原因
				cg_MNHT_M1S1.setcCsubmitnum(++getcCsubmitnum);
				//合同号
//				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
//				//制作人完成状态----变更申请
//				tbDocumeform.setcMadestate("mk007");
//				tbDocumeformList.add(tbDocumeform);
			}
			int row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
			if (row0 >0) {
				return builder.errcode(Errcode.FailParameterError).msg("申请失败！！！").session(session).build();
			}
			
			//2.修改信息卡制作人的制作状态---变更提交
			List<TbDocumeformson> tbDocumeformAdd = new ArrayList<TbDocumeformson>();//需要添加的信息卡物资
			List<TbDocumeformson> tbDocumeformUpd = new ArrayList<TbDocumeformson>();//需要修改的信息卡物资
			List<TbDocumeformson> tbDocumeformDel = new ArrayList<TbDocumeformson>();//需要删除的信息卡物资
			List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeConId(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcId());
//			List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
			if(seletByeCconnum.size() == 0) {
				seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
			}
			//修改信息卡主表信息
			if(seletByeCconnum.size() > 0) {
				seletByeCconnum.get(0).setcConnum(m1s1list.get(0).getcConnum());//合同号
				seletByeCconnum.get(0).setcConmoney(m1s1list.get(0).getcConmoney());//合同金额
				seletByeCconnum.get(0).setcSupplier(m1s1list.get(0).getcSupplier());//供应商
				seletByeCconnum.get(0).setcComphone(m1s1list.get(0).getcSupphone());//联系电话
//				seletByeCconnum.get(0).setcComphone(m1s1list.get(0).getcSupaddress());//供应商地址
				seletByeCconnum.get(0).setcShname(m1s1list.get(0).getcSw17());//收货单位
				seletByeCconnum.get(0).setcOutconnum(m1s1list.get(0).getcOutconnum());//外贸号
				seletByeCconnum.get(0).setcExporter(m1s1list.get(0).getcCludecom());//采购单位
				if(m1s1list.get(0).getcSw05() != null) {
					seletByeCconnum.get(0).setcSw07(m1s1list.get(0).getcSw05());//转卖合同号
					String str = m1s1list.get(0).getcConnum()+"、"+m1s1list.get(0).getcSw05();
					seletByeCconnum.get(0).setcSw06(str);//转卖内贸合同号
					//收货单位
					int indexOf1 = m1s1list.get(0).getcSw05().indexOf("-");
					int indexOf2 = m1s1list.get(0).getcSw05().indexOf("-",indexOf1+1);
					String substring = m1s1list.get(0).getcSw05().substring(indexOf1+1, indexOf2);
					seletByeCconnum.get(0).setcShname(substring);
				}else {
					seletByeCconnum.get(0).setcSw07("");
					seletByeCconnum.get(0).setcSw06("");
//					seletByeCconnum.get(0).setcShname("");
				}
				//出口商
				if(m1s1list.get(0).getcSw21() != null) {
					seletByeCconnum.get(0).setcSw05(m1s1list.get(0).getcSw21());
				}else {
					seletByeCconnum.get(0).setcSw05("");
				}
				seletByeCconnum.get(0).setcMadestate("mk007");//制作人完成状态----变更申请
				
				Date date = new Date(System.currentTimeMillis());
				seletByeCconnum.get(0).setcTimestamp(date);
				int roww =  tbDocumeformMapper.updateByPrimaryKeySelective(seletByeCconnum.get(0));
				if(roww > 0 ) {				
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();				
				}
				
				List<TbDocumeformson> m1s21q = tbDocumeformsonMapper.M1S21Q5(seletByeCconnum.get(0).getcId());
//				System.out.println(m1s21q.size() + " aaaaaaaaaaaaaaaaaa");
				//是否存在
				for (TbDocumeformson documeformson : m1s21q) {
					String csw01 = documeformson.getcSw01();
					if(csw01.indexOf(",") != -1) {
						int rwo = tbDocumeformsonMapper.updateDelete(documeformson);
						if(rwo > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();
						}
						String[] sw01 = csw01.split(",");
						for (String str : sw01) {
							int rwou = tbDocumeformsonMapper.updateBycId(str);
							if(rwou > 0) {
								TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
								return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();
							}
						}
					}
				}
				//物资信息
				List<TbDocumeformson> m1s22q = tbDocumeformsonMapper.M1S21Q5(seletByeCconnum.get(0).getcId());
//				System.out.println(m1s22q.size() + " cccccccccccccccccccc");
				List<CG_MNHT_S1S2> s1s21qcg = frcDao.S1S21QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
//				System.out.println(s1s21qcg.size() + " bbbbbbbbbbbbbbbb");
					for (CG_MNHT_S1S2 s1s2 : s1s21qcg) {
						List<TbDocumeformson> formson = tbDocumeformsonMapper.M1S21Q6(s1s2.getcId(),seletByeCconnum.get(0).getcId());
						if(formson.size() == 0) {
							TbDocumeformson form = new TbDocumeformson();
							form.setcGoodsname(s1s2.getcSw08());
							form.setcName(s1s2.getcSw08());
							form.setcSpec(s1s2.getcSpec());
							form.setcNum(s1s2.getcGoodsnum());
							form.setcUnit(s1s2.getcUnitspec());
							form.setcSw04(s1s2.getcSumprice());
							form.setcConnum(seletByeCconnum.get(0).getcConnum());
							form.setcSw01(s1s2.getcId());
							form.setcFatherid(seletByeCconnum.get(0).getcId());
							form.setcCreater(user.getUserName());
							form.setcCreatetime(new Date());
							tbDocumeformAdd.add(form);
						}
						if(formson.size() > 0) {
							formson.get(0).setcGoodsname(s1s2.getcSw08());
							formson.get(0).setcName(s1s2.getcSw08());
							formson.get(0).setcSpec(s1s2.getcSpec());
							formson.get(0).setcNum(s1s2.getcGoodsnum());
							formson.get(0).setcUnit(s1s2.getcUnitspec());
							formson.get(0).setcSw04(s1s2.getcSumprice());
							formson.get(0).setcConnum(seletByeCconnum.get(0).getcConnum());
							tbDocumeformUpd.add(formson.get(0));
						}
					}
					for (TbDocumeformson documeformson : m1s22q) {
						int i = 0;
						for (CG_MNHT_S1S2 s1s2 : s1s21qcg) {
							if(s1s2.getcId().equals(documeformson.getcSw01())) {
								i = 1;
							}
						}
						if(i == 0) {
							tbDocumeformDel.add(documeformson);
						}
					}
					//添加信息卡物资
					if(tbDocumeformAdd.size() > 0) {
						int insertSelective = tbDocumeformsonMapper.insertSelective(tbDocumeformAdd);
						if(insertSelective > 0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("变更失败！！！").errcode(Errcode.FailParameterError).session(session).build();
						}
					}
					
					//修改信息卡物资
					if(tbDocumeformUpd.size() > 0) {
						int rown = tbDocumeformsonMapper.updateByPrimaryKeySelective2(tbDocumeformUpd);
						if(rown>0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("变更失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
						}
					}
//					System.out.println(tbDocumeformDel.size() + " dddddddddddddddddddddddd");
					//删除信息卡物资
					if(tbDocumeformDel.size() > 0) {
						int rowd = tbDocumeformsonMapper.M1S21D(tbDocumeformDel);
						if(rowd>0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.msg("变更失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
						}
					}
					
					
			}
	    	
		}
				
		

		return builder.errcode(Errcode.Success).msg("申请成功！！！").session(session).build();
	}
	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S31Q(EmptyData emptyData, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
//		frcDao.M1S31QCG_MNHT_M1S1(); 原来的SQL语句
		data.setListResponse(tpCgcontractmttMapper.selectInfoTime());
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S3S32QConnum(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		cgMnhtRequestM1s1.getCgMnhtM1s1();
		CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
		data.setCgMnhtS1s2(frcDao.S1S21QCG_MNHT(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0)));
		return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> S3S32Q(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		String msg = "查询成功";
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
		data.setCgMnhtM1s1(frcDao.M1S32QCG_MNHT_M1S1(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).session(session).build();
	}

	
@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S21U(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			//查询拟合同和信息卡已存在的信息
			List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectInfo(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
			List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
			//判断合同的
			String cBackcauseCMT;
			String cBackcauseXXT ;
			String msg = "";
			int cBacknum = selectInfo.get(0).getcBackenum();
			cBacknum+=1;
			System.out.println("退单次数:"+cBacknum);
			if(selectInfo.get(0).getcBackcause() == null) {
				cBackcauseCMT = "";
			}else {
				cBackcauseCMT = selectInfo.get(0).getcBackcause();
			}
			if(selectInfo.size()<= 0 && selectInfo.get(0).getcBackcause()  == null) {
				cBackcauseXXT = "";
			}else {
				cBackcauseXXT = seletByeCconnum.get(0).getcBackcause();
			}
			SimpleDateFormat dateformat=new SimpleDateFormat("yyyy年MM月dd日");
			  String  denyTime=dateformat.format(new Date());
			//1.拟合同退单状态
			List<TbDocumeform> tbDocumeformList = new ArrayList<TbDocumeform>();
			//2.信息卡的退单状态
			List<CG_MNHT_M1S1> cgMnhtM1s1 = cgMnhtRequestM1s1.getCgMnhtM1s1();
			for (CG_MNHT_M1S1 cg_MNHT_M1S1 : cgMnhtM1s1) {
				TbDocumeform tbDocumeform = new TbDocumeform();
				//退单人
				cg_MNHT_M1S1.setcBacker(user.getUserName());
				//退单时间
				cg_MNHT_M1S1.setcBacktime(new Date());
				//退单状态
				cg_MNHT_M1S1.setcBackstate("td002");
				cg_MNHT_M1S1.setcBackenum(cBacknum);
				cg_MNHT_M1S1.setcBackcause("退单人:"+user.getUserName()+",时间:"+denyTime+",原因:"+cg_MNHT_M1S1.getcBackecause()+";"+cBackcauseCMT);//退单原因
				//信息卡
				tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
				tbDocumeform.setcBackstate("td002");
				tbDocumeform.setcBackcause("退单人:"+user.getUserName()+",时间:"+denyTime+",原因:"+cg_MNHT_M1S1.getcBackecause()+";"+cBackcauseXXT);//驳回原因
//				tbDocumeform.setcBackcause(cg_MNHT_M1S1.getcBackcause());
				tbDocumeform.setcBackenum(cBacknum);
				tbDocumeform.setcBacker(user.getUserName());
				tbDocumeform.setcBacketime(new Date());
				tbDocumeformList.add(tbDocumeform);
			}
			int m1s21ucg_MNHT_M1S1 = frcDao.M1S21UCG_MNHT_M1S1(cgMnhtM1s1);
			if(m1s21ucg_MNHT_M1S1 >0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("退单失败！！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			int updateRown = tbDocumeformMapper.updateTbDocumeform(tbDocumeformList);
			if(updateRown>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("退单失败！！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			
			return builder.msg("退单成功！！！！！！！").errcode(Errcode.Success).session(session).build();
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("退单失败！！！");
		}
	
//		int row0 = 0;
//		String ss_ret0 = "";
//		ss_ret0 = cgMnhtCustomer.check_M1S11U_CG_MNHT_M1S1(cgMnhtRequestM1s1);
//		if (ss_ret0.indexOf("success") != -1) {
//			if (ss_ret0.length() > 10) {
//				msg = ss_ret0;
//			}
//
//			row0 = frcDao.M1S11UCG_MNHT_M1S1(cgMnhtM1s1);
//			if (row0 < 0) {
//				msg = msg + "CG_MNHT_M1S1修改成功";
//
//				return builder.errcode(Errcode.Success).msg(msg).session(session).build();
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg(msg).session(session).build();
//			}
//		} else {
//			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
//		}
		
	}

public ResponseObject<EmptyTag, CG_MNHT_Response_M1S1> M1S312Q(EmptyData emptyData, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
//	System.out.println("信息卡状态：：："+cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcStatexxk());
	CG_MNHT_Response_M1S1 data = new CG_MNHT_Response_M1S1();
	data.setCgMnhtM1s1(frcDao.M1S312QCG_MNHT_M1S1());
	return builder.data(data).msg("查询成功！！！").errcode(Errcode.Success).session(session).build();
}
@Transactional
public ResponseObject<EmptyTag, EmptyData> updateContract(User user, TP_SimContract tP_SimContract, String session) {
	ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
	
	try {
		DelInformation delInformation = new DelInformation();
		TpCgcontractmt 	tpCgcontractmt  = new TpCgcontractmt();
		System.out.println("合同号：：：：："+	tP_SimContract.getTpCgcontractmtt().getcConnum());
		//1.获取合同主表的相关信息 判断该合同号是否存在
		List<TpCgcontractmtt> selectByConnum = tpCgcontractmttMapper.selectByConnum(tP_SimContract.getTpCgcontractmtt().getcConnum());
		System.out.println("合同号返回值：：："+selectByConnum.size());
		if(selectByConnum.size()  < 0) {
			return buidler.msg("该合同号不存在!!!").errcode(Errcode.FailParameterError).session(session).build();
		}
		tpCgcontractmt.setcCludecom(get_data_value(tP_SimContract.getTpCgcontractmt().getcCludecom(),"签订公司"));
		System.out.println("修改时签订公司:"+tpCgcontractmt.getcCludecom());
		if(tP_SimContract.getDelInformation().getcDelivplace()==null) {
			tP_SimContract.getDelInformation().setcDelivplace("");
		}else {
			delInformation.setcDelivplace(get_data_subitemid(tP_SimContract.getDelInformation().getcDelivplace(),"交货地点").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
		}
		//工具类
		ContractUtil contractUtil = new ContractUtil();
		TpCgcontractmtt addTpCgcontractmt = contractUtil.updateTpCgcontractmt(user, tP_SimContract, delInformation, tpCgcontractmt);
		System.out.println("签订公司--------"+addTpCgcontractmt.getcCludecom());

		
		int updateTpCgcontractmtt = tpCgcontractmttMapper.updateTpCgcontractmtt(addTpCgcontractmt);
		if(updateTpCgcontractmtt>0) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return buidler.msg("模拟合同中合同信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		//3.获取辅助表的相关信息
		 List<TbCgcontract> addTbCgcontract = contractUtil.uppdateTbCgcontract(user, tP_SimContract);
		 System.out.println("交货地点========"+addTbCgcontract.get(0).getcDelivplace()+"交货期限：++++"+addTbCgcontract.get(0).getcDelivdate());
		 System.out.println("合同号：：："+addTbCgcontract.get(0).getcConnum());
			int insertrow = tbCgcontractMapper.updatebCgcontract(addTbCgcontract);
			if(insertrow >0 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return buidler.msg("模拟合同创建修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
			}
			 int updaterow = tpCgorderstMapper.updateTpCgorderstMapper(addTbCgcontract.get(0));
			 if(updaterow >0 ) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("模拟合同创建修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
		//2.获取子表的相关信息
//		System.out.println("单价和总价：：：："+tP_SimContract.getTpCgorderRequest().get(0).getcPrice()+"::::"+ tP_SimContract.getTpCgorderRequest().get(0).getcSumprice()
//				+"Id::"+tP_SimContract.getTpCgorderRequest().get(0).getcId());
		List<TpCgcontractstt>  list = new ArrayList<TpCgcontractstt>();
		for (TpCgorderRequest tpCgorderRequest : tP_SimContract.getTpCgorderRequest()) {
//		}
//		for (int i = 0; i <tP_SimContract.getTpCgorderRequest().size(); i++) {
//			TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(i);
			TpCgcontractstt tpCgcontract =  new TpCgcontractstt();
			// 合同物资主表主键
//			tpCgcontract.setcMtid(addTpCgcontractmt.getcId());
			tpCgcontract.setcId(tpCgorderRequest.getcId());
			// 物资名称
			tpCgcontract.setcGoodsname(tpCgorderRequest.getcGoodsname());
			// 报关规格型号
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
//			tpCgcontract.setcDr(tpCgorderRequest.);
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
			tpCgcontract.setcConnum(tP_SimContract.getTpCgcontractmt().getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			list.add(tpCgcontract);
		}
		 int introw =  tpCgcontractsttMapper.updatetpCgcontractstt(list);
		 if(introw>0) {
			 return buidler.msg("模拟合同物资信息修改失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
		 }
		 return buidler.msg("模拟合同物资信息修改成功！！！！").errcode(Errcode.Success).session(session).build();
		 
		 
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

public ResponseObject<EmptyTag, EmptyData> M1S11U_XXK2(User user, CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	//1.信息卡审核通过--拟合同
	List<TbDocumeform> tbDocumeformList = new ArrayList<TbDocumeform>();
	List<CG_MNHT_M1S1> cgMnhtM1s1 = new  ArrayList<CG_MNHT_M1S1>();
	List<CG_MNHT_M1S1> m1s32 = frcDao.M1S32QCG_MNHT_M1S1(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0));
	if(m1s32.isEmpty()) {
		return builder.errcode(Errcode.FailParameterError).msg("合同信息已被采购员删除，请撤回信息卡通知相关人员删除该信息卡信息！！！").session(session).build();
	}
//	List<TbDocumeform> seletByeCconnum = tbDocumeformMapper.seletByeCconnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
	
	//流程  1.信息卡审核流程，获取的是信息卡审核页面中的数据--合同号 2.根据合同号查询拟合同信息是否存在，若不存在请撤回信息卡然后删除信息卡 
	//3. 审核通过修改拟合同的HS审核状态，修改信息卡对应的状态
/*	if(m1s32.get(0).getcStatexxk().equals("xxk06")) {
		
		for (CG_MNHT_M1S1 cg_MNHT_M1S1 : m1s32) {
			//拟合同 信息卡
			CG_MNHT_M1S1 cgMNHTM1S1 = new CG_MNHT_M1S1();
			TbDocumeform tbDocumeform = new TbDocumeform();
			cgMNHTM1S1.setcConnum(cg_MNHT_M1S1.getcConnum());
			//拟合同信息卡状态--审核通过
			//cgMNHTM1S1.setcStatexxk("xxk03");
			cgMNHTM1S1.setcMadestate("mk003");
			tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
			//制作人完成状态----已审核
			tbDocumeform.setcMadestate("mk003");
			tbDocumeform.setcCheckstate("xcc002");
			tbDocumeform.setcIndida(user.getUserName());
			tbDocumeformList.add(tbDocumeform);
			cgMnhtM1s1.add(cgMNHTM1S1);
		}
	}else {*/
		for (CG_MNHT_M1S1 cg_MNHT_M1S1 : m1s32) {
			//拟合同 信息卡
			CG_MNHT_M1S1 cgMNHTM1S1 = new CG_MNHT_M1S1();
			TbDocumeform tbDocumeform = new TbDocumeform();
			cgMNHTM1S1.setcConnum(cg_MNHT_M1S1.getcConnum());
			//拟合同信息卡状态--审核通过
			cgMNHTM1S1.setcStatexxk("xxk03");
			cgMNHTM1S1.setcMadestate("mk003");
			tbDocumeform.setcConnum(cg_MNHT_M1S1.getcConnum());
			//制作人完成状态----已审核
			tbDocumeform.setcMadestate("mk003");
			tbDocumeform.setcCheckstate("xcc002");
			tbDocumeform.setcIndida(user.getUserName());
			tbDocumeform.setcSw10("");
			tbDocumeform.setcChecktime(new Date());
			tbDocumeformList.add(tbDocumeform);
			cgMnhtM1s1.add(cgMNHTM1S1);
		}
	/*}*/
	System.out.println("扩展字段1::"+cgMnhtM1s1.get(0).getcSw01());
	int row0 = frcDao.M1S11UCG_MNHT_M1S2(cgMnhtM1s1);
	if (row0 >0) {
		return builder.errcode(Errcode.FailParameterError).msg("审核失败！！！").session(session).build();
	}
	for (TbDocumeform tbDocumeform : tbDocumeformList) {
		tbDocumeform.setcIndida(user.getUserName());
	}
	//2.修改信息卡制作人的制作状态---审核通过
	int updateRown= tbDocumeformMapper.updateTbDocumeform(tbDocumeformList);
	if(updateRown>0) {
		return builder.errcode(Errcode.FailParameterError).msg("审核失败！！！").session(session).build();
	}
	return builder.errcode(Errcode.Success).msg("审核通过！！！").session(session).build();
}
@Override
public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QCause(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	cgMnhtRequestM1s1.getCgMnhtM1s1();
	CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
	
	if(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcContype()== null) {
		ContractUtil contractUtil = new ContractUtil();
		//标准合同模板信息，其中交货期限，交货地点，付款方式需要修改一下
		List<CLAUSE_M1S1> standardInfo = clause_Mapper.getStandardInfo();
		if(standardInfo.size()==0) {
			return builder.data(data).msg("该合同无条款信息！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		List<TbCgcontract> selectcConnum = tbCgcontractMapper.selectcConnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum());
		if(selectcConnum.size()==0) {
			return builder.data(data).msg("该合同无拟合同信息！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		System.out.println("交货地点：:"+selectcConnum.get(0).getcDelivplace());
		//交货地点
		String cDelivplace = get_data_subitemid(selectcConnum.get(0).getcDelivplace(),"交货地点");
		System.out.println("cDelivplace:::::::"+cDelivplace);
		TbCgcontract addClauseInfo = contractUtil.addClauseInfo(standardInfo.get(0), selectcConnum.get(0), cDelivplace);
		List<TbCgcontract>  listData = new ArrayList<>();
		listData.add(addClauseInfo);
		data.setTbCgcontract(listData);
		return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
	}else {
		//根据合同类型和合同号查询信息
		data.setTbCgcontract(tbCgcontractMapper.S1S21QCG_MNHT_Cause(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0)));
//		data.setCgMnhtS1s2(frcDao.S1S21QCG_MNHT_Cause(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0)));
		return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
	}
	
}
@Override
public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> getTbContractCom(User user, TP_SimContract cgMnhtRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	TbCgcontract tbCgcontract = new TbCgcontract();
	tbCgcontract.setcConnum(cgMnhtRequestM1s1.getcConnum());
	tbCgcontract.setcCludecom(cgMnhtRequestM1s1.getcCludecom());
	tbCgcontract.setcSupplier(cgMnhtRequestM1s1.getcSupplier());
	CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
	System.out.println("合同号：："+cgMnhtRequestM1s1.getcConnum());
	
	List<TbCgcontract> selectcConnum = tbCgcontractMapper.selecttbCgcontract(tbCgcontract);
	List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectByConnum(cgMnhtRequestM1s1.getcConnum());
	for (TbCgcontract tpCgcontract : selectcConnum) {
		tpCgcontract.setcSignplace(selectInfo.get(0).getcSignplace());
	}
	if(selectcConnum.size()>1 || selectcConnum.size()<= 0) {
		return builder.msg("该合同条款有多条，或者没有该合同条款信息 ！！").errcode(Errcode.FailParameterError).session(session).build();
	}
	data.setTbCgcontract(selectcConnum);
	return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
}

private int  BusinessJudge(String connum, String msg) {
	List<TpCgcontractmtt> selectInfo = tpCgcontractmttMapper.selectByConnum(connum);
	if(selectInfo.size() == 1) {
		String xxkState = selectInfo.get(0).getcStatexxk().trim();
//		String state = "";
//		if(selectInfo.get(0).getcMadestate() != null ) {
//			state = selectInfo.get(0).getcMadestate().trim();
//		}
		//xxk06 : 已生成正式合同 状态
		if(selectInfo.get(0).getcOutconnum()==null) {
			return 3;
		}
		
		if(selectInfo.get(0).getcConnum().contains("CSPL")) {
			return 5;
		}
		if("xxk06".equals(xxkState)) {
			return 2;
		}
		//判断拟合同状态 状态为 xxk05：信息卡驳回  或 xxk01:未提交信息卡  返回 1  xxk07被正式合同撤回
		if(!"xxk05".equals(xxkState) && !"xxk01".equals(xxkState) && !"xxk07".equals(xxkState)) {
			return 1;
		}
		
//			/
//			List<TbDocumeform> tbDocumeform = tbDocumeformMapper.seletByeCconnum(connum);
//			if(tbDocumeform.size() == 1 ) {
				//当拟合同状态为 xxk02 : 未审核 状态
				//判断相对应 信息卡制作人完成状态， 当信息卡制作人完成状态为mk002 : 未审核(已提交) 或  mk003 : 审核通过  返回 2 
				//其它信息卡状态返回 3
//				if("mk002".equals(state) || "mk003".equals(state)) {
//					return 2;
//				}else {
					//把信息卡状态改为 xxk08 : 	变更申请   添加变更原因 C_CSUBMITTIME
//					selectInfo.get(0).setcStatexxk("xxk08");
//					selectInfo.get(0).setcMadestate("mk007");
//					selectInfo.get(0).setcCsubmittime(new Date());
//					selectInfo.get(0).setcSw18(msg);
//					int row = tpCgcontractmttMapper.updateTpCgcontractmtt(selectInfo.get(0));
//					if(row >= 0) {
//						System.out.println("拟合同的信息卡状态改变失败");
//						return 4;
//					}
//					return 3;
//				}

//			}
//		}
	}
	//其它 返回 0
	return 0;
}

@Override
public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> S1S21QSettlement(CG_MNHT_Request_M1S1 cgMnhtRequestM1s1, String session) {
	ResponseObjectBuilder builder = ResponseObjectBuilder.create();
	cgMnhtRequestM1s1.getCgMnhtM1s1();
	CG_MNHT_Response_S1S2 data = new CG_MNHT_Response_S1S2();
	data.setTpSettlement(tpSettlementMapper.selectBycConnum(cgMnhtRequestM1s1.getCgMnhtM1s1().get(0).getcConnum()));
	return builder.data(data).msg("查询成功").errcode(Errcode.Success).session(session).build();
}
@Override
public ResponseObject<EmptyTag, CG_MNHT_Response_S1S2> alterContract(User user, TP_SimContract data, String session) {
	ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
	//1、获取
	return null;
}
}
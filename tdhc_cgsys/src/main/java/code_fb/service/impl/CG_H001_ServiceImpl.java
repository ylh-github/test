package code_fb.service.impl;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_CK_M1S1;
import code_fb.entity.CG_H001_M1S1;
import code_fb.entity.CG_H001_S1S2;
import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb.mapper.CG_CK_Mapper;
import code_fb.mapper.CG_H001_Mapper;
import code_fb.mapper.CG_MNHT_Mapper;
import code_fb.request.CG_H001_Request;
import code_fb.request.CG_H001_Request_C001;
import code_fb.request.CG_H001_Request_C002;
import code_fb.request.CG_H001_Request_C003;
import code_fb.request.CG_H001_Request_C004;
import code_fb.request.CG_H001_Request_C005;
import code_fb.request.CG_H001_Request_M1S1;
import code_fb.request.CG_H001_Request_S1S2;
import code_fb.request.H002request;
import code_fb.response.CG_H001_Response_C001;
import code_fb.response.CG_H001_Response_C002;
import code_fb.response.CG_H001_Response_C003;
import code_fb.response.CG_H001_Response_C004;
import code_fb.response.CG_H001_Response_C005;
import code_fb.response.CG_H001_Response_M1S1;
import code_fb.response.CG_H001_Response_S1S2;
import code_fb.service.CG_H001_Service;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgmoneybook;
import code_fb_cg.entity.TpCgmoneyinvbook;
import code_fb_cg.entity.TpCgorderbefore;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.entity.TpConrevocare;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgcontractsttMapper;
import code_fb_cg.mapper.TpCgmoneybookMapper;
import code_fb_cg.mapper.TpCgmoneyinvbookMapper;
import code_fb_cg.mapper.TpCgorderbeforeMapper;
import code_fb_cg.mapper.TpCgordermtMapper;
import code_fb_cg.mapper.TpCgorderstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;
import code_fb_customer.CG_H001_Customer;
import transfer.BIGString;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service("cgH001Service")
public class CG_H001_ServiceImpl implements CG_H001_Service {
	@Autowired
	@Qualifier("cgH001Mapper")
	private CG_H001_Mapper frcDao;
	@Autowired
	@Qualifier("cgCkMapper")
	public CG_CK_Mapper cgckMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	@Autowired
	private TpCgcontractsttMapper tpCgcontractsttMapper;
	@Autowired
	private TpCgordermtMapper tpCgordermtMapper;
	@Autowired
	private TpCgorderstMapper tpCgorderstMapper;
	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	private TpCgmoneyinvbookMapper tpCgmoneyinvbookMapper;
	@Autowired
	private TpCgmoneybookMapper tpCgmoneybookMapper;
	@Autowired
	private TpCgauthorityMapper tpCgauthorityMapper;
	@Autowired
	private TpCgorderbeforeMapper tpCgorderbeforeMapper;
	CG_H001_Customer cgH001Customer = new CG_H001_Customer();

	public ResponseObject<EmptyTag, CG_H001_Response_C001> C0011Q(CG_H001_Request_C001 cgH001RequestC001,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_C001 data = new CG_H001_Response_C001();
		data.setCgH001C001(frcDao.C0011QCG_H001_C001("到齐状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_C002> C0021Q(CG_H001_Request_C002 cgH001RequestC002,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_C002 data = new CG_H001_Response_C002();
		data.setCgH001C002(frcDao.C0021QCG_H001_C002("验收状态", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_C003> C0031Q(CG_H001_Request_C003 cgH001RequestC003,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_C003 data = new CG_H001_Response_C003();
		data.setCgH001C003(frcDao.C0031QCG_H001_C003("0", "完成状态"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_C004> C0041Q(CG_H001_Request_C004 cgH001RequestC004,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_C004 data = new CG_H001_Response_C004();
		data.setCgH001C004(frcDao.C0041QCG_H001_C004("验收方式", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_C005> C0051Q(CG_H001_Request_C005 cgH001RequestC005,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_C005 data = new CG_H001_Response_C005();
		data.setCgH001C005(frcDao.C0051QCG_H001_C005("运输方式", "0"));
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S11Q(CG_H001_Request cgH001RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		//签订公司
		if(cgH001RequestM1s1.getH002request().get(0).getcCludecom()!=null) {
			String cCludecomstr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCludecom().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCludecom()) {
					cCludecomstr =  cCludecomstr + str + "','";
				}
				cCludecomstr = cCludecomstr.substring(0, cCludecomstr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCludecom().isEmpty()) {
				cCludecomstr = "";
			}
			System.out.println("签订公司="+cCludecomstr);
			cgH001RequestM1s1.getH002request().get(0).setcCludecomstr(cCludecomstr);//将转换的值赋值给str
		}
		//到货情况
		if(cgH001RequestM1s1.getH002request().get(0).getcCheckway()!=null) {
			String cCheckwaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCheckway()) {
					cCheckwaystr = cCheckwaystr + str + "','";
				}
				cCheckwaystr = cCheckwaystr.substring(0, cCheckwaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				cCheckwaystr = "";
			}
			System.out.println("到货情况="+cCheckwaystr);
			cgH001RequestM1s1.getH002request().get(0).setcCheckwaystr(cCheckwaystr);//将转换的值赋值给str
		}
		//付款情况
		if(cgH001RequestM1s1.getH002request().get(0).getcSignstep()!=null) {
			String cSignstepstr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcSignstep().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcSignstep()) {
					cSignstepstr = cSignstepstr + str + "','";
				}
				cSignstepstr = cSignstepstr.substring(0, cSignstepstr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcSignstep().isEmpty()) {
				cSignstepstr = "";
			}
			System.out.println("付款情况="+cSignstepstr);
			cgH001RequestM1s1.getH002request().get(0).setcSignstepstr(cSignstepstr);//将转换的值赋值给str
		}
		//开票情况
		if(cgH001RequestM1s1.getH002request().get(0).getcTransway()!=null) {
			String cTranswaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcTransway()) {
					cTranswaystr = cTranswaystr + str + "','";
				}
				cTranswaystr = cTranswaystr.substring(0, cTranswaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
				cTranswaystr = "";
			}
			System.out.println("开票情况="+cTranswaystr);
			cgH001RequestM1s1.getH002request().get(0).setcTranswaystr(cTranswaystr);//将转换的值赋值给str
		}
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		if(cgH001RequestM1s1.getH002request().get(0).getcConnum() != null) {			
			cgH001RequestM1s1.getH002request().get(0).setcConnum(cgH001RequestM1s1.getH002request().get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").replaceAll("	", ""));
		}
		List<CG_H001_M1S1> list = new ArrayList<CG_H001_M1S1>();
		if(cgH001RequestM1s1.getH002request().get(0).getcOrdernum() != null) {
			list = frcDao.M1S11QCG_H001_M1S1BycOrdernum(cgH001RequestM1s1.getH002request().get(0));
		}else {
			list = frcDao.M1S11QCG_H001_M1S1(cgH001RequestM1s1.getH002request().get(0));
		}	
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}	
		
		data.setCgH001M1s1(list);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();

	}

	@Override
	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> selectHtInfo(CG_H001_Request cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		System.out.println("具体项目:::"+cgH001RequestM1s1.getItemRequestObject().getcDepartment());
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		if("".equals(cgH001RequestM1s1.getItemRequestObject().getGsId()) || cgH001RequestM1s1.getItemRequestObject().getGsId() ==null) {
			List<CG_H001_M1S1> selectHtInfo = frcDao.selectHtInfo(cgH001RequestM1s1.getItemRequestObject());
			data.setCgH001M1s1(selectHtInfo);
			return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();
		}else {
			List<CG_H001_M1S1> selectHtInfo = frcDao.selectHtInfo(cgH001RequestM1s1.getItemRequestObject());
			data.setCgH001M1s1(selectHtInfo);
		}
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();
	}
	public ResponseObject<EmptyTag, EmptyData> M1S11A(CG_H001_Request_M1S1 cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		int row0 = 0;
		List<CG_H001_M1S1> cgH001M1s1 = cgH001RequestM1s1.getCgH001M1s1();
		List<TpCgmoneybook> bookList = new ArrayList<TpCgmoneybook>();
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_M1S11A_CG_H001_M1S1(cgH001M1s1);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgH001Customer.check_M1S11A_CG_H001_M1S1(cgH001M1s1))) {
				for (CG_H001_M1S1 cg_H001_M1S1 : cgH001M1s1) {
					cg_H001_M1S1.setcId(id);
					cg_H001_M1S1.setcCreatetime(new Date());
					cgH001M1s1.get(0).setcState("3");
					if(cgH001M1s1.get(0).getcConmoney().indexOf(" ") != -1) {
						cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""))));
					}else {
						cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney())));
					}
					if(cgH001M1s1.get(0).getcSw01()==null || cgH001M1s1.get(0).getcSw01()== "") {
						cgH001M1s1.get(0).setcSw01(ri.formatForTwo(new BigDecimal("0")));
						if(cgH001M1s1.get(0).getcConmoney().indexOf(" ") != -1) {
							cgH001M1s1.get(0).setcSw02(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""))));							
						}else {
							cgH001M1s1.get(0).setcSw02(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney())));
						}
						cgH001M1s1.get(0).setcSignstep("0");
					}else {
						BigDecimal money;
						BigDecimal sw1;
						if(cgH001M1s1.get(0).getcConmoney().indexOf(" ") != -1) {
							money = new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""));//合同金额
						}else {
							money = new BigDecimal(cgH001M1s1.get(0).getcConmoney());//合同金额
						}
						if(cgH001M1s1.get(0).getcSw01().indexOf(" ") != -1) {
							sw1 = new BigDecimal(cgH001M1s1.get(0).getcSw01().replaceAll(" ", ""));//实付金额
						}else {
							sw1 = new BigDecimal(cgH001M1s1.get(0).getcSw01());//实付金额
						}
//						if(money.intValue()-sw1.intValue()<0) {
//							return builder.errcode(Errcode.FailParameterError).msg("付款金额大于合同金额！！").session(session).build();
//						}
						String sss = ri.formatForTwo(money.subtract(sw1));
						if(money.compareTo(sw1)==0) {
							cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
							if(sss.indexOf("-.")!=-1) {
								StringBuilder sb = new StringBuilder(sss);//构造一个StringBuilder对象
								cgH001M1s1.get(0).setcSw02((sb.insert(1, "0")).toString());
							}else {
								cgH001M1s1.get(0).setcSw02(sss);
							}
							cgH001M1s1.get(0).setcSignstep("1");
						}else {
							cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
							cgH001M1s1.get(0).setcSw02(ri.formatForTwo(money.subtract(sw1)));
							cgH001M1s1.get(0).setcSignstep("0");
						}
						TpCgmoneybook book = new TpCgmoneybook();
						book.setcConmtid(cgH001M1s1.get(0).getcId());
						book.setcConnum(cgH001M1s1.get(0).getcConnum());
						book.setcPaytime(new Date());
						book.setcClearmoney(ri.formatForTwo(sw1));
						book.setcCreater(cgH001M1s1.get(0).getcCreater());
						book.setcCreatetime(cgH001M1s1.get(0).getcCreatetime());
						bookList.add(book);
//						if((money.subtract(sw1)).intValue()==0) {
//							cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(money));
//							cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
//							cgH001M1s1.get(0).setcSw02(ri.formatForTwo(new BigDecimal("0")));
//							cgH001M1s1.get(0).setcSignstep("1");
//						}else {
//							cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(money));
//							cgH001M1s1.get(0).setcSignstep("0");
//							cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
//							cgH001M1s1.get(0).setcSw02(ri.formatForTwo(money.subtract(sw1)));
//						}
					}
					row0 = frcDao.M1S11ACG_H001_M1S1(cgH001M1s1);
					if (row0 < 0) {
					} else {
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
					}
				}
				if(bookList.size() > 0) {
					int row1 = tpCgmoneybookMapper.ADDfukuan(bookList);
					if(row1 == 0) {
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
					}
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11U(CG_H001_Request_M1S1 cgH001RequestM1s1, String session) throws ParseException {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_H001_M1S1> cgH001M1s1 = cgH001RequestM1s1.getCgH001M1s1();
		int row0 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_M1S11U_CG_H001_M1S1(cgH001M1s1);
		if ("success".equals(ss_ret0)) {
			
			//如果修改合同号，同时修改合同物资的合同号
			H002request h002request = new H002request();
			h002request.setcID(cgH001M1s1.get(0).getcId());
			List<CG_H001_M1S1> list = frcDao.M1S11QCG_H001_M1S11(h002request);
			if(list.size() > 0) {
				String con = list.get(0).getcConnum();
				String con2 = cgH001M1s1.get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
				if(!con2.equals(con)) {
					//修改物资合同号
					CG_H001_S1S2 connum = new CG_H001_S1S2();
					connum.setcMtid(list.get(0).getcId());
					connum.setcConnum(con);
					connum.setcConnum2(con2);
					List<CG_H001_S1S2> m1s1List = frcDao.S1S21QCG_H001_S1S2(connum);
					if(m1s1List.size() > 0) {
						int row2 = frcDao.S1S21UCG_H001_S1S21(connum);
						if(row2 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改合同号失败").session(session).build();
						}
					}
					//修改到货详情的合同号
					List<TpCgreceivebook> receivebookList = tpCgreceivebookMapper.selectByNum(list.get(0).getcConnum());
					System.err.println(receivebookList.size() + "  aaaaaaaaaaaaaaaaaaa2");
					if(receivebookList.size() > 0) {
						TpCgreceivebook receivebook = new TpCgreceivebook();
						receivebook.setcConnum(con);
						receivebook.setcConnum2(con2);
						int row3 = tpCgreceivebookMapper.updateByCconnum(receivebook);
						if(row3 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改合同号失败").session(session).build();
						}
					}
					//修改发票的合同号
					TpCgmoneyinvbook moneyinvbook = new TpCgmoneyinvbook();
					moneyinvbook.setcConmtid(list.get(0).getcId());
					List<TpCgmoneyinvbook> moneyinvbookList = tpCgmoneyinvbookMapper.selectConmtid(moneyinvbook);
					if(moneyinvbookList.size() > 0) {
						moneyinvbook.setcConnum(con);
						moneyinvbook.setcConnum2(con2);
						int row4 = tpCgmoneyinvbookMapper.uodatecConnum(moneyinvbook);
						if(row4 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改合同号失败").session(session).build();
						}
					}
					//修改付款详情的合同号
					TpCgmoneybook moneybook = new TpCgmoneybook();
					moneybook.setcConmtid(list.get(0).getcId());
					List<TpCgmoneybook> data = tpCgmoneybookMapper.selectForMoneyBook(moneybook);
					if(data.size() > 0) {
						moneybook.setcConnum(con);
						moneybook.setcConnum2(con2);
						int row5 = tpCgmoneybookMapper.updateBycConnum(moneybook);
						if(row5 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改合同号失败").session(session).build();
						}
					}
					//修改出库详情
					CG_CK_M1S1 cgck = new CG_CK_M1S1();
					cgck.setcConnum(con);
					cgck.setcConnum2(con2);
					List<CG_CK_M1S1> cgckList = cgckMapper.M1S11QCG_CK_M1S1(cgck);
					if(cgckList.size() > 0) {
						int row6 = cgckMapper.updateBycConnum(cgck);
						if(row6 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改合同号失败").session(session).build();
						}
					}
				}
			}
			//如果修改合同采购员，同时修改请购单中采购员
			//1.根据合同查询合同物资信息
			List<TpCgcontractst> stList = tpCgcontractstMapper.selectByCountSt(cgH001M1s1.get(0).getcConnum());
			if(stList.size() > 0) {
				for (TpCgcontractst tpCgcontractst : stList) {
					TpCgorderst orderst = tpCgorderstMapper.selectByPrimaryKey(tpCgcontractst.getcSw02());
					if(orderst != null) {
						orderst.setcManor(cgH001M1s1.get(0).getcSw10());
						orderst.setcSw10(cgH001M1s1.get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
						//将合同修改的采购员同时修改相应请购单物资中的采购员
						int row1 = tpCgorderstMapper.updateByPrimaryKeySelective(orderst);
						if(row1 ==0) {
							TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
							return builder.errcode(Errcode.FailParameterError).msg("修改采购员失败").session(session).build();
						}
					}
				}
			}
			if(cgH001M1s1.get(0).getcDr()!=null) {
				if (cgH001M1s1.get(0).getcDr() != null) {
					int i = BIGString.compare_date(cgH001M1s1.get(0).getcDr(), new Date());
					if (i == 1) {
						int daysBetween = BIGString.daysBetween(new Date(), cgH001M1s1.get(0).getcDr());
						cgH001M1s1.get(0).setcSw30("+" + String.valueOf(daysBetween)+ "天");
					} else if (i == -1) {
						int daysBetween = BIGString.daysBetween(cgH001M1s1.get(0).getcDr(), new Date());
						if(daysBetween == 0) {
							cgH001M1s1.get(0).setcSw30(String.valueOf(daysBetween)+ "天");
						}else {
							cgH001M1s1.get(0).setcSw30("-" + String.valueOf(daysBetween)+ "天");
						}
						
					} else {
						int daysBetween = 0;
						cgH001M1s1.get(0).setcSw30(String.valueOf(daysBetween)+ "天");
					}
				}
			}else {
				cgH001M1s1.get(0).setcSw30("");
			}
			//修改时，判断预计到货时间和最终到货时间是否都有值，如果有，则计算时间差（提前或延迟天数）
			if(cgH001M1s1.get(0).getcDr()!=null && cgH001M1s1.get(0).getcGettime()!=null) {
				BIGString bigs = new BIGString();
				int i = bigs.compare_date(cgH001M1s1.get(0).getcDr(), cgH001M1s1.get(0).getcGettime());
				if(i==1) {
					//相差的天数
					int daysBetween = bigs.daysBetween(cgH001M1s1.get(0).getcGettime(), cgH001M1s1.get(0).getcDr());
					cgH001M1s1.get(0).setcSw12("+"+String.valueOf(daysBetween)+"天");
				}else if(i==-1) {
					int daysBetween = bigs.daysBetween(cgH001M1s1.get(0).getcDr(), cgH001M1s1.get(0).getcGettime());
					cgH001M1s1.get(0).setcSw12("-"+String.valueOf(daysBetween)+"天");
				}else {
					int daysBetween = 0;
					cgH001M1s1.get(0).setcSw12(String.valueOf(daysBetween)+"天");
				}
			}else if(cgH001M1s1.get(0).getcGettime() == null) {
				cgH001M1s1.get(0).setcSw12("");
			}
			//处理合同金额小数点后保留几位问题
			RandomId ri = new RandomId();
			BigDecimal money;
			BigDecimal sw1;
			if(cgH001M1s1.get(0).getcConmoney().indexOf(" ")!= -1) {
				cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""))));				
			}else {
				cgH001M1s1.get(0).setcConmoney(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney())));
			}
			if(cgH001M1s1.get(0).getcSw01()==null || cgH001M1s1.get(0).getcSw01()=="") {
				cgH001M1s1.get(0).setcSw01(ri.formatForTwo(new BigDecimal("0")));
				if(cgH001M1s1.get(0).getcConmoney().indexOf(" ") !=-1) {
					cgH001M1s1.get(0).setcSw02(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""))));
				}else {
					cgH001M1s1.get(0).setcSw02(ri.formatForTwo(new BigDecimal(cgH001M1s1.get(0).getcConmoney())));
				}
				cgH001M1s1.get(0).setcSignstep("0");
			}else {
				
				if(cgH001M1s1.get(0).getcConmoney().indexOf(" ") != -1) {
					money =new BigDecimal(cgH001M1s1.get(0).getcConmoney().replaceAll(" ", ""));					
				}else {
					money =new BigDecimal(cgH001M1s1.get(0).getcConmoney());
				}
				if(cgH001M1s1.get(0).getcSw01().indexOf(" ") != -1) {
					sw1 = new BigDecimal(cgH001M1s1.get(0).getcSw01().replaceAll(" ", ""));
				}else {
					sw1 = new BigDecimal(cgH001M1s1.get(0).getcSw01());
				}
//				if(money.subtract(sw1).intValue()<0) {
//					return builder.errcode(Errcode.FailParameterError).msg("付款金额大于合同金额！！").session(session).build();
//				}
				String sss = ri.formatForTwo(money.subtract(sw1));
				if(money.subtract(sw1).intValue()==0) {
					cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
					
					if(sss.indexOf("-.")!=-1) {
						StringBuilder sb = new StringBuilder(sss);//构造一个StringBuilder对象
						cgH001M1s1.get(0).setcSw02((sb.insert(1, "0")).toString());
					}else {
						cgH001M1s1.get(0).setcSw02(sss);
					}
					cgH001M1s1.get(0).setcSignstep("1");
				}
				if(money.subtract(sw1).intValue()<0) {
					cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
					cgH001M1s1.get(0).setcSw02(ri.formatForTwo(money.subtract(sw1)));
					cgH001M1s1.get(0).setcSignstep("1");
				}
				if(money.subtract(sw1).intValue()>0) {
					cgH001M1s1.get(0).setcSw01(ri.formatForTwo(sw1));
					cgH001M1s1.get(0).setcSw02(ri.formatForTwo(money.subtract(sw1)));
					cgH001M1s1.get(0).setcSignstep("2");
				}
				if(sw1.compareTo(new BigDecimal("0")) == 0) {
					cgH001M1s1.get(0).setcSignstep("0");
				}
			}
			//判断发票金额和合同和是否一样  如果一样把发票状态改为到齐
			BigDecimal fpje = new BigDecimal("0");
			TpCgmoneyinvbook moneyinvbook = new TpCgmoneyinvbook();
			moneyinvbook.setcConmtid(list.get(0).getcId());
			List<TpCgmoneyinvbook> moneyinvbookList = tpCgmoneyinvbookMapper.selectConmtid(moneyinvbook);
			if(moneyinvbookList.size() > 0) {
				for (TpCgmoneyinvbook tpCgmoneyinvbook : moneyinvbookList) {
					fpje = fpje.add(new BigDecimal(tpCgmoneyinvbook.getcMoney()));
				}				
			}
			money =new BigDecimal(cgH001M1s1.get(0).getcConmoney());
			if(money.compareTo(fpje) == 0) {
				cgH001M1s1.get(0).setcTransway("1");
			}
			//判断合同是否到齐 如果到齐把物资状态改为到齐
			if(cgH001M1s1.get(0).getcCheckway().equals("1")) {
				List<TpCgcontractst> tstList = tpCgcontractstMapper.selectByCountSt(cgH001M1s1.get(0).getcConnum());
				List<TpCgreceivebook> booktList = new ArrayList<TpCgreceivebook>();
				BigDecimal goodsnum;
				BigDecimal groudtotalnum;
				for(TpCgcontractst tst : tstList) {
					goodsnum = new BigDecimal(tst.getcGoodsnum());
					groudtotalnum = new BigDecimal(tst.getcGroudtotalnum());
					if(!tst.getcState().equals("5")) {
						tst.setcState("1");
						if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
							if(groudtotalnum.compareTo(goodsnum) == 1) {	
								tst.setcGroudtotalnum(ri.formatToFour(groudtotalnum));
								tst.setcResiduenum(ri.formatToFour(new BigDecimal(tst.getcResiduenum())));
							}else {
								tst.setcGroudtotalnum(ri.formatToFour(new BigDecimal(tst.getcGoodsnum())));
								tst.setcResiduenum(ri.formatToFour(new BigDecimal("0")));
							}
						}else {
							if(groudtotalnum.compareTo(goodsnum) == 1) {
								tst.setcGroudtotalnum(ri.formatForTwo(groudtotalnum));
								tst.setcResiduenum(ri.formatForTwo(new BigDecimal(tst.getcResiduenum())));
							}else {
								tst.setcGroudtotalnum(ri.formatForTwo(new BigDecimal(tst.getcGoodsnum())));
								tst.setcResiduenum(ri.formatForTwo(new BigDecimal("0")));
							}
						}
					}
					if(tst.getcGroudtotalnum() == "" || tst.getcGroudtotalnum() == null) {
						tst.setcGroudtotalnum("0");
					}
					if(goodsnum.compareTo(groudtotalnum) == 1) {
						if(!tst.getcState().equals("5")) {
							TpCgreceivebook book = new TpCgreceivebook();			
							book.setcConnum(tst.getcConnum());
							book.setcConline(tst.getcConline());
							book.setcSw02(tst.getcGoodsname());
							book.setcGoodscleck(tst.getcSw08());
							if(tst.getcUnit().equals("吨") || tst.getcUnit().equals("立方米") || tst.getcUnit().equals("米")) {
								book.setcArrivalnum(ri.formatToFour(goodsnum.subtract(groudtotalnum)));
							}else {
								book.setcArrivalnum(ri.formatForTwo(goodsnum.subtract(groudtotalnum)));
							}
							book.setcDeltime(cgH001M1s1.get(0).getcGettime());
							book.setcSw03(tst.getcUnit());
							book.setcCreater(cgH001M1s1.get(0).getcModifier());
							book.setcCreatetime(cgH001M1s1.get(0).getcModifytime());
							booktList.add(book);
						}
					}
				}
				int row2 = tpCgcontractstMapper.S1S21DH(tstList);
				if(row2 == 0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
				}
				if(booktList.size() > 0) {
					int row1 = tpCgreceivebookMapper.insertFinashi(booktList);
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
					}
				}
				if(!"4".equals(cgH001M1s1.get(0).getcState())) {
					if(cgH001M1s1.get(0).getcTransway().equals("1") && cgH001M1s1.get(0).getcSignstep().equals("1")) {
						cgH001M1s1.get(0).setcState("1");
					}else {
						cgH001M1s1.get(0).setcState("3");
					}
				}
				
			}
			
			row0 = frcDao.M1S11UCG_H001_M1S1(cgH001M1s1);
			if (row0 < 0) {
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("修改失败").session(session).build();
			}
		} else {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> M1S11D(CG_H001_Request_M1S1 cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_H001_M1S1> cgH001M1s1 = cgH001RequestM1s1.getCgH001M1s1();
		//根据选择的合同查询该合同所有物资数据
		List<TpCgcontractst> st = tpCgcontractstMapper.selectByCountSt(cgH001M1s1.get(0).getcConnum());
//		for (TpCgcontractst tpCgcontractst : st) {
		if(st.size() > 0) {			
			int row1 = tpCgcontractstMapper.deleteUpdate(st.get(0).getcMtid());
			if(row1==0) {
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").session(session).build();
			}
		}
//		}
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_M1S11D_CG_H001_M1S1(cgH001M1s1);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.M1S11DUpdate(cgH001M1s1);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("删除失败").session(session).build();
			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_S1S2> S1S21Q(CG_H001_Request_S1S2 cgH001RequestS1s2,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_H001_Response_S1S2 data = new CG_H001_Response_S1S2();
		CG_H001_S1S2 s1s2 = new CG_H001_S1S2();
		s1s2.setcId(cgH001RequestS1s2.getTmtlist().get(0).getcId());
		s1s2.setcConnum(cgH001RequestS1s2.getTmtlist().get(0).getcConnum());
		List<CG_H001_S1S2> cgH001S1s2 = frcDao.S1S21QCG_H001_S1S2(s1s2);	
		List<CG_H001_S1S2> list = new ArrayList<CG_H001_S1S2>();
	
		
		if(cgH001RequestS1s2.getTmtlist().get(0).getcDr() != null) {
			if(!"1".equals(cgH001RequestS1s2.getTmtlist().get(0).getcCheckway())) {
				BigDecimal num; //订货数量
				BigDecimal gnum;// 累计到货量
				BigDecimal rnum;// 剩余数量
				long tmtTime = cgH001RequestS1s2.getTmtlist().get(0).getcDr().getTime();
				long time = 0;
				for (CG_H001_S1S2 cg_H001_S1S2 : cgH001S1s2) {
					if("3".equals(cg_H001_S1S2.getcState())) {
						//判断字符串是否为数字类型
						if(BIGString.isNumeric(cg_H001_S1S2.getcResiduenum().trim())) {
							rnum = new BigDecimal(cg_H001_S1S2.getcResiduenum());//获取剩余数量
							if(rnum.compareTo(BigDecimal.ZERO) == 0) {
								cg_H001_S1S2.setcState("1");
							}
						}
						
						
//						else if(rnum.compareTo(BigDecimal.ZERO) < 0){
//							cg_H001_S1S2.setcState("5");
//						}
					}
					if("3".equals(cg_H001_S1S2.getcState())) {//再次判断是否还是3 （3代表未到货）
						time = new Date().getTime();
						if(time > tmtTime && !"2".equals(cg_H001_S1S2.getcSw19())) {
							cg_H001_S1S2.setcSw19("2");
							cg_H001_S1S2.setcSw20("已超预计到货时间");
							cg_H001_S1S2.setcSw21(new Date());
							list.add(cg_H001_S1S2);
						}
					}
				}	
			}
		}		
		if(list.size()>0) {
			int row = 0;
			row = frcDao.S1S21UCG_H001_S1S2(list);
			if(row == 0) {
				return builder.errcode(Errcode.FailParameterError).session(session).build();
			}
		}	
		data.setCgH001S1s2(cgH001S1s2);
		return builder.data(data).errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> S1S21A(CG_H001_Request_S1S2 cgH001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		int row0 = 0;
		List<CG_H001_S1S2> cgH001S1s2 = cgH001RequestS1s2.getCgH001S1s2();
		List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_S1S21A_CG_H001_S1S2(cgH001S1s2);
		if ("success".equals(ss_ret0))
			if ("success".equals(cgH001Customer.check_S1S21A_CG_H001_S1S2(cgH001S1s2))) {
//				List<TpCgcontractst> tst = new ArrayList<TpCgcontractst>();
				List<TpCgcontractst> tst1  = tpCgcontractstMapper.selectByColine(cgH001S1s2.get(0).getcConnum());
				List<TpCgcontractst> tst2  = tpCgcontractstMapper.selectByCountState(cgH001S1s2.get(0).getcConnum());
				
				if(tst2.size() == 0 && tst1.size() == 0) {
					cgH001S1s2.get(0).setcConline("00001");
				}else {
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
					}else{
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
				
						if(len<10) {
							//合同行号
							if((len+1)==10) {
								cgH001S1s2.get(0).setcConline("000"+String.valueOf(len+1));
							}else {
								cgH001S1s2.get(0).setcConline("0000"+String.valueOf(len+1));
							}
						}
						if(len>9 && len<100) {
							//合同行号
							if((len+1)==100) {
								cgH001S1s2.get(0).setcConline("00"+String.valueOf(len+1));
							}else {
								cgH001S1s2.get(0).setcConline("000"+String.valueOf(len+1));
							}
						}
						if(len>99 && len<1000) {
							//合同行号
							if((len+1)==1000) {
								cgH001S1s2.get(0).setcConline("0"+String.valueOf(len+1));
							}else {
								cgH001S1s2.get(0).setcConline("00"+String.valueOf(len+1));
							}
						}
						if(len>999 && len<10000) {
							//合同行号
							cgH001S1s2.get(0).setcConline("0"+String.valueOf(len+1));
						}
				}

				if(cgH001S1s2.get(0).getcGroudtotalnum() == null || "0".equals(cgH001S1s2.get(0).getcGroudtotalnum())) {
					cgH001S1s2.get(0).setcGroudtotalnum("0");
				}else {
					String groudtotalnum;
					if(cgH001S1s2.get(0).getcGroudtotalnum().indexOf(" ") != -1) {
						groudtotalnum = cgH001S1s2.get(0).getcGroudtotalnum().replaceAll(" ", "");
					}else {
						groudtotalnum = cgH001S1s2.get(0).getcGroudtotalnum();
					}
					TpCgreceivebook book = new TpCgreceivebook();
					book.setcConmtid(cgH001S1s2.get(0).getcMtid());//到货记录合同主键
					book.setcConnum(cgH001S1s2.get(0).getcConnum());//合同号
					book.setcConline(cgH001S1s2.get(0).getcConline());//合同行号
					if (cgH001S1s2.get(0).getcUnit().equals("吨") || cgH001S1s2.get(0).getcUnit().equals("立方米") || cgH001S1s2.get(0).getcUnit().equals("米")) {
						book.setcArrivalnum(ri.formatToFour(new BigDecimal(groudtotalnum)));//到货量=本次到货量
					}else {
						book.setcArrivalnum(ri.formatForTwo(new BigDecimal(groudtotalnum)));//到货量=本次到货量
					}
					book.setcSw03(cgH001S1s2.get(0).getcUnit());//单位
					book.setcDeltime(new Date());//到货时间
					book.setcSw02(cgH001S1s2.get(0).getcGoodsname());//物资名称
					book.setcGoodscleck(cgH001S1s2.get(0).getcSw08());//报关名称
					booklist.add(book);
				}
				BigDecimal num1;
				BigDecimal num2;
				if(cgH001S1s2.get(0).getcGroudtotalnum().indexOf(" ") != -1) {
					num1 = new BigDecimal(cgH001S1s2.get(0).getcGroudtotalnum().replaceAll(" ", ""));//累计到货量
				}else {
					num1 = new BigDecimal(cgH001S1s2.get(0).getcGroudtotalnum());//累计到货量
				}
				if(cgH001S1s2.get(0).getcGoodsnum().indexOf(" ") != -1) {
					num2 = new BigDecimal(cgH001S1s2.get(0).getcGoodsnum().replaceAll(" ", ""));//订购数量
				}else {
					num2 = new BigDecimal(cgH001S1s2.get(0).getcGoodsnum());//订购数量
				}
				if(cgH001S1s2.get(0).getcUnit().equals("吨") || cgH001S1s2.get(0).getcUnit().equals("立方米") || cgH001S1s2.get(0).getcUnit().equals("米")) {
					cgH001S1s2.get(0).setcResiduenum(ri.formatToFour(num2.subtract(num1)));
				}else {
					cgH001S1s2.get(0).setcResiduenum(ri.formatToFour(num2.subtract(num1)));
				}
				cgH001S1s2.get(0).setcState("3");
				cgH001S1s2.get(0).setcSw06(null);
				row0 = frcDao.S1S21ACG_H001_S1S2(cgH001S1s2);
				if (row0 < 0) {
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
				}
				if(booklist.size()!=0) {
					int row1 = tpCgreceivebookMapper.insertFinashi(booklist);
					if(row1 ==0) {
						return builder.errcode(Errcode.FailParameterError).msg("记录到货信息失败").build();
					}
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
			}
		return builder.errcode(Errcode.Success).session(session).build();
	}
	@Transactional
	@SuppressWarnings("unchecked")
	public ResponseObject<EmptyTag, EmptyData> S1S21U(CG_H001_Request_S1S2 cgH001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<CG_H001_S1S2> cgH001S1s2 = cgH001RequestS1s2.getCgH001S1s2();
		TpCgcontractmt tmt = cgH001RequestS1s2.getTmtlist().get(0);
		int row0 = 0;
		int row1 = 0;
		int row2 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_S1S21U_CG_H001_S1S2(cgH001S1s2);
		if ("success".equals(ss_ret0)) {
			List<CG_H001_S1S2> list = new ArrayList<CG_H001_S1S2>();
			List<TpCgreceivebook> booklist = new ArrayList<TpCgreceivebook>();
			List<CG_CK_M1S1> cklist = new ArrayList<CG_CK_M1S1>();
			for (CG_H001_S1S2 cg_H001_S1S2 : cgH001S1s2) {
				//判断单位是否正确
//				if(cg_H001_S1S2.getcUnit() != null && cg_H001_S1S2.getcUnit() != "") {
//					String dw = cg_H001_S1S2.getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
//					TpCgauthority thority = tpCgauthorityMapper.selectDanWei(dw, "DW");
//					if(thority != null) {
//						cg_H001_S1S2.setcUnit(dw);// 单位						
//					}else {
//						return builder.errcode(Errcode.FailParameterError).msg("合同行号为:"+cg_H001_S1S2.getcConline()+"的物资单位错误，请重新确认单位").build();
//					}
//				}else {
//					return builder.errcode(Errcode.FailParameterError).msg("合同行号为:"+cg_H001_S1S2.getcConline()+"的数据单位不可为空").session(session).build();
//				}
				//物资单位改变时  到货详情的对应数据的单位也改变 
				List<TpCgreceivebook> receivebooklist = tpCgreceivebookMapper.selectByPrimary(cg_H001_S1S2.getcConnum(),cg_H001_S1S2.getcConline());
				if(receivebooklist.size() > 0) {
					for (TpCgreceivebook tpCgreceivebook : receivebooklist) {
						tpCgreceivebook.setcSw03(cg_H001_S1S2.getcUnit());
					}
					row1 = tpCgreceivebookMapper.S1S51U(receivebooklist);
					if(row1 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
					}
				}
				//物资单位改变时  出库详情的对应数据的单位也改变 
				CG_CK_M1S1 m1s1 = new CG_CK_M1S1();
				m1s1.setcConnum(cg_H001_S1S2.getcConnum());
				m1s1.setcConline(cg_H001_S1S2.getcConline());
				List<CG_CK_M1S1> cgcklist = cgckMapper.selectByConnumline(m1s1);
				if(cgcklist.size() > 0) {
					for (CG_CK_M1S1 cg_CK_M1S1 : cgcklist) {
						cg_CK_M1S1.setcUnit(cg_H001_S1S2.getcUnit());
					}
					row2 = cgckMapper.M1S11UCG_CK_M1S1(cgcklist);
					if(row2 == 0) {
						TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
						return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
					}
				}
				
				
				
				BigDecimal connum;//合同数量
				BigDecimal dao;//累计到货量
				BigDecimal sheng;//剩余到货量
				cg_H001_S1S2.setcQuadealline("");
					if(!BIGString.vd(cg_H001_S1S2.getcGoodsnum()) && !BIGString.vd(cg_H001_S1S2.getcGroudtotalnum()) ) {
						if(cg_H001_S1S2.getcGoodsnum().indexOf(" ") != -1) {
							connum = new BigDecimal(cg_H001_S1S2.getcGoodsnum().replaceAll(" ", ""));//合同数量
						}else {
							connum = new BigDecimal(cg_H001_S1S2.getcGoodsnum());//合同数量
						}
						
						if(cg_H001_S1S2.getcGroudtotalnum().indexOf(" ") != -1) {
							dao = new BigDecimal(cg_H001_S1S2.getcGroudtotalnum().replaceAll(" ", ""));//累计到货量
						}else {
							dao = new BigDecimal(cg_H001_S1S2.getcGroudtotalnum());//累计到货量
						}
						sheng = connum.subtract(dao);
						
						cg_H001_S1S2.setcQuadealline(null);
						if(cg_H001_S1S2.getcUnit().equals("吨") || cg_H001_S1S2.getcUnit().equals("立方米") || cg_H001_S1S2.getcUnit().equals("米")) {
							if(sheng.compareTo(BigDecimal.ZERO) < 0 && sheng.compareTo(new BigDecimal(-1)) > 0) {
								cg_H001_S1S2.setcResiduenum(sheng.toString());
							}else {
								cg_H001_S1S2.setcResiduenum(ri.formatToFour(sheng));
							}
							cg_H001_S1S2.setcGoodsnum(ri.formatToFour(connum));
							cg_H001_S1S2.setcGroudtotalnum(ri.formatToFour(dao));
						}else {
							if(sheng.compareTo(BigDecimal.ZERO) < 0 && sheng.compareTo(new BigDecimal(-1)) > 0) {
								cg_H001_S1S2.setcResiduenum(sheng.toString());
							}else {
								cg_H001_S1S2.setcResiduenum(ri.formatForTwo(sheng));
							}
							cg_H001_S1S2.setcGoodsnum(ri.formatForTwo(connum));
							cg_H001_S1S2.setcGroudtotalnum(ri.formatForTwo(dao));
						}
					}else {
						cg_H001_S1S2.setcGoodsnum(cg_H001_S1S2.getcGoodsnum());
						cg_H001_S1S2.setcGroudtotalnum(cg_H001_S1S2.getcGroudtotalnum());
						cg_H001_S1S2.setcQuadealline(null);
						cg_H001_S1S2.setcResiduenum(cg_H001_S1S2.getcGoodsnum());	
						
					}
				
//				if(cg_H001_S1S2.getcQuadealline()!=null) {
//					TpCgreceivebook book = new TpCgreceivebook();
//					book.setcConmtid(cg_H001_S1S2.getcMtid());//到货记录合同主键
//					book.setcConnum(cg_H001_S1S2.getcConnum());//合同号
//					book.setcConline(cg_H001_S1S2.getcConline());//合同行号
//					if(cg_H001_S1S2.getcUnit().equals("吨") || cg_H001_S1S2.getcUnit().equals("立方米")) {
//						book.setcArrivalnum(ri.formatToFour(new BigDecimal(cg_H001_S1S2.getcQuadealline())));//到货量=本次到货量
//					}else {
//						book.setcArrivalnum(ri.formatForTwo(new BigDecimal(cg_H001_S1S2.getcQuadealline())));//到货量=本次到货量
//					}
//					book.setcSw03(cg_H001_S1S2.getcUnit());//单位
//					book.setcSw02(cg_H001_S1S2.getcGoodsname());//物资名称
//					book.setcGoodscleck(cg_H001_S1S2.getcSw08());//报关名称
//					book.setcCreater(cg_H001_S1S2.getcModifier());//创建人
//					book.setcCreatetime(new Date());//创建时间
//					BigDecimal benci;//本次到货数量
//					if(!BIGString.vd(cg_H001_S1S2.getcGoodsnum()) && !BIGString.vd(cg_H001_S1S2.getcGroudtotalnum()) ) {
//						if(cg_H001_S1S2.getcGoodsnum().indexOf(" ") != -1) {
//							connum = new BigDecimal(cg_H001_S1S2.getcGoodsnum().replaceAll(" ", ""));//合同数量
//						}else {
//							connum = new BigDecimal(cg_H001_S1S2.getcGoodsnum());//合同数量
//						}
//						if(cg_H001_S1S2.getcGroudtotalnum().indexOf(" ") != -1) {
//							dao = new BigDecimal(cg_H001_S1S2.getcGroudtotalnum().replaceAll(" ", ""));//累计到货量
//						}else {
//							dao = new BigDecimal(cg_H001_S1S2.getcGroudtotalnum());//累计到货量
//						}
//						if(cg_H001_S1S2.getcQuadealline().indexOf(" ") != -1) {
//							benci = new BigDecimal(cg_H001_S1S2.getcQuadealline().replaceAll(" ", ""));//本次到货数量
//						}else {
//							benci = new BigDecimal(cg_H001_S1S2.getcQuadealline());//本次到货数量
//						}
//						sheng = connum.subtract(dao.add(benci));
//						cg_H001_S1S2.setcQuadealline("");//本次到货量，每次填写后都清空该值
//						if(cg_H001_S1S2.getcUnit().equals("吨") || cg_H001_S1S2.getcUnit().equals("立方米")) {
//							cg_H001_S1S2.setcGoodsnum(ri.formatToFour(connum));//订购数量
//							cg_H001_S1S2.setcGroudtotalnum(ri.formatToFour(dao.add(benci)));//累计到货量
//							if(sheng.compareTo(BigDecimal.ZERO) < 0 && sheng.compareTo(new BigDecimal(-1)) > 0) {
//								cg_H001_S1S2.setcResiduenum(sheng.toString());
//							}else {
//								cg_H001_S1S2.setcResiduenum(ri.formatToFour(sheng));
//							}
//						}else {
//							cg_H001_S1S2.setcGoodsnum(ri.formatForTwo(connum));//订购数量
//							cg_H001_S1S2.setcGroudtotalnum(ri.formatForTwo(dao.add(benci)));//累计到货量
//							if(sheng.compareTo(BigDecimal.ZERO) < 0 && sheng.compareTo(new BigDecimal(-1)) > 0) {
//								cg_H001_S1S2.setcResiduenum(sheng.toString());
//							}else {
//								cg_H001_S1S2.setcResiduenum(ri.formatForTwo(sheng));
//							}
//						}
//					}else {
//						cg_H001_S1S2.setcGoodsnum(cg_H001_S1S2.getcGoodsnum());
//						cg_H001_S1S2.setcGroudtotalnum(cg_H001_S1S2.getcGroudtotalnum());
//					}
//					booklist.add(book);
//				}
//				if(cg_H001_S1S2.getcSw10() != null) {
//					BigDecimal csw09;//累计出库量
//					BigDecimal csw10;//当前出库量
//					csw09 = new BigDecimal(cg_H001_S1S2.getcSw09());
//					csw10 = new BigDecimal(cg_H001_S1S2.getcSw10());
//					CG_CK_M1S1 ck = new CG_CK_M1S1();
//					ck.setcConnum(cg_H001_S1S2.getcConnum());//合同号
//					ck.setcConline(cg_H001_S1S2.getcConline());//合同行号
//					ck.setcMtid(cg_H001_S1S2.getcMtid());//合同主键
//					ck.setcGoodsname(cg_H001_S1S2.getcGoodsname());//物资名称
//					ck.setcSpec(cg_H001_S1S2.getcSpec());//规格型号
//					ck.setcUnit(cg_H001_S1S2.getcUnit());//单位
//					ck.setcOuttime(new Date());//出库时间
//					ck.setcCreater(cg_H001_S1S2.getcModifier());//创建人
//					ck.setcCreatetime(new Date());//创建时间
//					if(cg_H001_S1S2.getcSw09() == null || cg_H001_S1S2.getcSw09() == "") {
//						cg_H001_S1S2.setcSw09("0");
//					}
//					if(cg_H001_S1S2.getcUnit().equals("吨") || cg_H001_S1S2.getcUnit().equals("立方米")) {
//						ck.setcOutsum(ri.formatToFour(csw10));//出库量
//						cg_H001_S1S2.setcSw09(ri.formatToFour(csw09.add(csw10)));
//					}else {
//						ck.setcOutsum(ri.formatForTwo(csw10));//出库量
//						cg_H001_S1S2.setcSw09(ri.formatForTwo(csw09.add(csw10)));
//					}
//					cg_H001_S1S2.setcSw10("");
//					cklist.add(ck);
//				}
				list.add(cg_H001_S1S2);
			}
//			if(booklist.size()!=0) {
//				int row1 = tpCgreceivebookMapper.insertFinashi(booklist);
//				if(row1 ==0) {
//					return builder.errcode(Errcode.FailParameterError).msg("记录到货信息失败").session(session).build();
//				}
//			}
//			if(cklist.size() > 0) {
//				int row2 = 0;
//				row2 = cgckMapper.M1S11ACG_CK_M1S1(cklist);
//				if(row2 == 0) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.errcode(Errcode.FailParameterError).msg("记录出库信息失败").session(session).build();
//				}
//			}
			row0 = frcDao.S1S21UCG_H001_S1S2(list);
			if (row0 < 0) {
			} else {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
			}
			
//			TpCgcontractst tst = new TpCgcontractst();
//			tst.setcConnum(cgH001S1s2.get(0).getcConnum());
//			List<TpCgcontractst> stList = tpCgcontractstMapper.selectByConSTone(tst);
//			BigDecimal goodsnum;//订购数量
//			BigDecimal groudtotalnum;//累计到货量
//			boolean isok = true;
//			if(booklist.size() > 0) {
//				TpCgcontractmt tractmt = new TpCgcontractmt();
//				int row2 = 0;
//				for(TpCgcontractst tsts : stList) {
//					goodsnum = new BigDecimal(tsts.getcGoodsnum());
//					groudtotalnum = new BigDecimal(tsts.getcGroudtotalnum());
//					if(goodsnum.compareTo(groudtotalnum) != 0) {
//						isok = !isok;
//						break;
//					}
//				}			
//				tractmt.setcId(cgH001S1s2.get(0).getcMtid());	
//				tractmt.setcCheckway("2");
//				row2 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tractmt);
//				if(isok) {
//					tractmt.setcCheckway("1");
//					if(tmt.getcTransway().equals("1") && tmt.getcSignstep().equals("1")) {
//						tractmt.setcState("1");
//					}else {
//						tractmt.setcState("0");
//					}
//					row2 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tractmt);
//				}else {
//					tractmt.setcCheckway("0");
//					tractmt.setcState("0");
//					row2 = tpCgcontractmtMapper.updateByPrimaryKeySelective(tractmt);
//				}
//				if(row2 == 0) {
//					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
//					return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//				}
//			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, EmptyData> S1S21D(CG_H001_Request_S1S2 cgH001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int row0 = 0;
		List<CG_H001_S1S2> cgH001S1s2 = cgH001RequestS1s2.getCgH001S1s2();
		
			for(CG_H001_S1S2 s1s2 : cgH001S1s2) {
				TpCgcontractstt tpCgcontractstt = tpCgcontractsttMapper.selectNumber_Line(s1s2.getcConnum(), s1s2.getcConline());
				if(tpCgcontractstt != null) {
					return builder.errcode(Errcode.FailShowWarningMsg).msg("无法撤销，请撤回拟合同进行操作").session(session).build();
				}
				List<TpCgreceivebook> booklist = tpCgreceivebookMapper.selectByPrimary(s1s2.getcConnum(), s1s2.getcConline());
				if(booklist.size() > 0) {
					return builder.errcode(Errcode.FailShowWarningMsg).msg("已有到货无法撤销").session(session).build();
				}
				CG_CK_M1S1 cgck = new CG_CK_M1S1();
				cgck.setcConnum(s1s2.getcConnum());
				List<CG_CK_M1S1> cgckList = cgckMapper.M1S11QCG_CK_M1S1(cgck);
				if(cgckList.size() > 0) {
					return builder.errcode(Errcode.FailShowWarningMsg).msg("已有出库无法撤销").session(session).build();
				}
				int rowf = tpCgorderbeforeMapper.update_st_Cstate2(s1s2.getcSw02());
				if (rowf == 0) {
					return builder.msg("撤销合同物资失败").errcode(Errcode.FailParameterError).build();
				}
			}
			row0 = frcDao.S1S21UCG_DELETE(cgH001S1s2);
			if (row0 < 0) {
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("撤销失败").session(session).build();
			}
		
		return builder.errcode(Errcode.Success).session(session).build();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public ResponseObject<EmptyTag, EmptyData> S1S22MSG(CG_H001_Request_S1S2 cgH001RequestS1s2, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<CG_H001_S1S2> cgH001S1s2 = cgH001RequestS1s2.getCgH001S1s2();
		//如果合同主表下的合同物资全部为 采购完成  则修改合同 完成状态 为 已完成
		TpCgcontractst st = new TpCgcontractst();
		st.setcConnum(cgH001S1s2.get(0).getcConnum());
		List<TpCgcontractst> stList = tpCgcontractstMapper.selectByCountStForSTATE(cgH001S1s2.get(0).getcConnum());
		Integer s1s2 = cgH001S1s2.size();//采购完成的合同物资数
		Integer stnum = stList.size();//该合同共有多少条 未采购完成 物资
		int row0 = 0;
		int row1 = 0;
		String ss_ret0 = "";
		ss_ret0 = cgH001Customer.check_S1S22MSG_CG_H001_S1S2(cgH001S1s2);
		if ("success".equals(ss_ret0)) {
			row0 = frcDao.S1S22MSGCG_H001_S1S2(cgH001S1s2);//采购完成
			if((s1s2-stnum)==0) {//两者相等 则修改合同状态为已完成
				TpCgcontractmt mt = new TpCgcontractmt();
				mt.setcState("1");//修改为已完成
				mt.setcId(cgH001S1s2.get(0).getcMtid());//将前端传的物资数据中的合同主键放到合同的ID中
				row1 = tpCgcontractmtMapper.updateSTATE(mt);//根据合同ID修改合同
			}
			//下面为操作一条数据时的代码  上面修改的可以进行批量操作  采购完成
//			if (row0 < 0) {
//				String cConnum = cgH001S1s2.get(0).getcConnum();
//				int count = frcDao.count(cConnum);
//				if(count == 0 ) {
//					frcDao.updateState(cConnum);
//				}
//				
//			} else {
//				return builder.errcode(Errcode.FailParameterError).msg("添加失败").session(session).build();
//			}
		} else {
			return builder.errcode(Errcode.FailParameterError).msg(ss_ret0).session(session).build();
		}
		return builder.errcode(Errcode.Success).session(session).build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S11Q1(CG_H001_Request cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		H002request h002 = new H002request();
		//开票情况
//		if(cgH001RequestM1s1.getH002request().get(0).getcTransway()!=null) {
//			String cTranswaystr = "'";
//			if(!cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
//				for (String str : cgH001RequestM1s1.getH002request().get(0).getcTransway()) {
//					cTranswaystr = cTranswaystr + str + "','";
//				}
//				cTranswaystr = cTranswaystr.substring(0, cTranswaystr.length()-3) + "'";
//			}
//			if(cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
//				cTranswaystr = "'2'";
//			}
//			System.out.println("开票情况="+cTranswaystr);
//			cgH001RequestM1s1.getH002request().get(0).setcTranswaystr(cTranswaystr);//将转换的值赋值给str
//		}
		h002.setcTranswaystr("'2'");
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		List<CG_H001_M1S1> list = frcDao.M1S11QCG_H001_M1S1(h002);
		List<CG_H001_M1S1> m1s1List = new ArrayList<CG_H001_M1S1>();
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}	
		BigDecimal money;//累计出库量
		BigDecimal lnmoney;//当前出库量
		TpCgmoneyinvbook book = new TpCgmoneyinvbook();
		for (CG_H001_M1S1 cg_H001_M1S1 : list) {
			money = new BigDecimal(cg_H001_M1S1.getcConmoney());
			lnmoney = new BigDecimal(0);
			book.setcConmtid(cg_H001_M1S1.getcId());
			List<TpCgmoneyinvbook> lsit = tpCgmoneyinvbookMapper.selectConmtid(book);
			if(lsit.size() > 0) {
				for (TpCgmoneyinvbook tpCgmoneyinvbook : lsit) {
					lnmoney = lnmoney.add(new BigDecimal(tpCgmoneyinvbook.getcMoney()));
				}
				if(money.compareTo(lnmoney) < 0) {
					m1s1List.add(cg_H001_M1S1);
				}
			}
		}
		if(m1s1List.size() == 0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}
		data.setCgH001M1s1(m1s1List);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();
	}

	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S11Q11(CG_H001_Request cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		
		//到货情况
		if(cgH001RequestM1s1.getH002request().get(0).getcCheckway()!=null) {
			String cCheckwaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCheckway()) {
					cCheckwaystr = cCheckwaystr + str + "','";
				}
				cCheckwaystr = cCheckwaystr.substring(0, cCheckwaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				cCheckwaystr = "";
			}
			System.out.println("到货情况="+cCheckwaystr);
			cgH001RequestM1s1.getH002request().get(0).setcCheckwaystr(cCheckwaystr);//将转换的值赋值给str
		}
		if(cgH001RequestM1s1.getH002request().get(0).getcConnum() != null) {
			cgH001RequestM1s1.getH002request().get(0).setcConnum(cgH001RequestM1s1.getH002request().get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").replaceAll("	", ""));
		}
		
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		List<CG_H001_M1S1> list = frcDao.M1S11QCG_H001_M1S111(cgH001RequestM1s1.getH002request().get(0));
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}	
		
		data.setCgH001M1s1(list);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();

	}

	@Override
	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S12Q(User user, CG_H001_Request cgH001RequestM1s1, String session) {

		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		/*String getcSubitemid = "";
		TpCgauthority tpCgauthority = tpCgauthorityMapper.selectSubitemid(user.getUserName());
		if(tpCgauthority != null) {
			getcSubitemid = tpCgauthority.getcSubitemid();
		}else {
			getcSubitemid = null;
		}*/
		//签订公司
		if(cgH001RequestM1s1.getH002request().get(0).getcCludecom()!=null) {
			String cCludecomstr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCludecom().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCludecom()) {
					cCludecomstr =  cCludecomstr + str + "','";
				}
				cCludecomstr = cCludecomstr.substring(0, cCludecomstr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCludecom().isEmpty()) {
				cCludecomstr = "";
			}
			System.out.println("签订公司="+cCludecomstr);
			cgH001RequestM1s1.getH002request().get(0).setcCludecomstr(cCludecomstr);//将转换的值赋值给str
		}
		//到货情况
		if(cgH001RequestM1s1.getH002request().get(0).getcCheckway()!=null) {
			String cCheckwaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCheckway()) {
					cCheckwaystr = cCheckwaystr + str + "','";
				}
				cCheckwaystr = cCheckwaystr.substring(0, cCheckwaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				cCheckwaystr = "";
			}
			System.out.println("到货情况="+cCheckwaystr);
			cgH001RequestM1s1.getH002request().get(0).setcCheckwaystr(cCheckwaystr);//将转换的值赋值给str
		}
		//付款情况
		if(cgH001RequestM1s1.getH002request().get(0).getcSignstep()!=null) {
			String cSignstepstr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcSignstep().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcSignstep()) {
					cSignstepstr = cSignstepstr + str + "','";
				}
				cSignstepstr = cSignstepstr.substring(0, cSignstepstr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcSignstep().isEmpty()) {
				cSignstepstr = "";
			}
			System.out.println("付款情况="+cSignstepstr);
			cgH001RequestM1s1.getH002request().get(0).setcSignstepstr(cSignstepstr);//将转换的值赋值给str
		}
		//开票情况
		if(cgH001RequestM1s1.getH002request().get(0).getcTransway()!=null) {
			String cTranswaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcTransway()) {
					cTranswaystr = cTranswaystr + str + "','";
				}
				cTranswaystr = cTranswaystr.substring(0, cTranswaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcTransway().isEmpty()) {
				cTranswaystr = "";
			}
			System.out.println("开票情况="+cTranswaystr);
			cgH001RequestM1s1.getH002request().get(0).setcTranswaystr(cTranswaystr);//将转换的值赋值给str
		}
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		if(cgH001RequestM1s1.getH002request().get(0).getcConnum() != null) {			
			cgH001RequestM1s1.getH002request().get(0).setcConnum(cgH001RequestM1s1.getH002request().get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").replaceAll("	", ""));
		}
		List<CG_H001_M1S1> list = new ArrayList<CG_H001_M1S1>();
		if(cgH001RequestM1s1.getH002request().get(0).getcOrdernum() != null) {
			list = frcDao.M1S11QCG_H001_M1S1BycOrdernum(cgH001RequestM1s1.getH002request().get(0));
		}else {
			list = frcDao.M1S11QCG_H001_M1S1(cgH001RequestM1s1.getH002request().get(0));
		}	
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}	
		
		data.setCgH001M1s1(list);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();
	}

	@Override
	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S11QBJ(CG_H001_Request cgH001RequestM1s1, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		
		//到货情况
		if(cgH001RequestM1s1.getH002request().get(0).getcCheckway()!=null) {
			String cCheckwaystr = "'";
			if(!cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				for (String str : cgH001RequestM1s1.getH002request().get(0).getcCheckway()) {
					cCheckwaystr = cCheckwaystr + str + "','";
				}
				cCheckwaystr = cCheckwaystr.substring(0, cCheckwaystr.length()-3) + "'";
			}
			if(cgH001RequestM1s1.getH002request().get(0).getcCheckway().isEmpty()) {
				cCheckwaystr = "";
			}
			System.out.println("到货情况="+cCheckwaystr);
			cgH001RequestM1s1.getH002request().get(0).setcCheckwaystr(cCheckwaystr);//将转换的值赋值给str
		}
		if(cgH001RequestM1s1.getH002request().get(0).getcConnum() != null) {
			cgH001RequestM1s1.getH002request().get(0).setcConnum(cgH001RequestM1s1.getH002request().get(0).getcConnum().replace(" ", "").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "").replaceAll("	", ""));
		}
		
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		List<CG_H001_M1S1> list = frcDao.M1S11QBJ(cgH001RequestM1s1.getH002request().get(0));
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}	
		
		data.setCgH001M1s1(list);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();

	}

	@Override
	public ResponseObject<EmptyTag, CG_H001_Response_M1S1> M1S11Q111(CG_H001_Request cg_H001_Request, String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpConrevocare conrevocare = cg_H001_Request.getConrevocare();
		List<CG_H001_M1S1> list = frcDao.selectByconnum(conrevocare.getcConnum());
		if(list.size()==0) {
			return builder.errcode(Errcode.SuccessShowInfoMsg).session(session).msg("查询成功,无数据").build();
		}		
		CG_H001_Response_M1S1 data = new CG_H001_Response_M1S1();
		data.setCgH001M1s1(list);
		return builder.data(data).errcode(Errcode.Success).session(session).msg("查询成功").build();
	}



	 
}
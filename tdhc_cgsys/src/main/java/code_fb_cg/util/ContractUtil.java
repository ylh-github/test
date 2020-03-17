package code_fb_cg.util;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;

import com.mchange.v2.sql.filter.SynchronizedFilterDataSource;

import code_fb.entity.CLAUSE_M1S1;
import code_fb_cg.entity.TbCgcontract;
import code_fb_cg.entity.TbSupplier;
import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.request.DelInformation;
import code_fb_cg.request.TP_SimContract;
import code_fb_cg.request.TpCgorderRequest;
import transfer.BIGString;
import transfer.RandomId;
import vip.toda.piper.auth.web.client.User;

/**
 * 模拟合同时的工具类
 * @author lhb
 * @时间：2019年2月19日上午11:02:22
 */
public class ContractUtil {
	BIGString bigs = new BIGString();
	// 实例化合同ID主键
	RandomId ri = new RandomId();
	String id = ri.getRandomId();
	/**
	 * 添加合同主表信息
	 * @param tpCgorderRequest 
	 * @param user 
	 * @param delInformation 
	 * @param tpCgcontractmt 
	 * @param tpCgcontractmt
	 * @return
	 */
//	public TpCgcontractmt addTpCgcontractmt(User user, TpCgcontractmt data, List<TpCgorderRequest> list) {
	public TpCgcontractmtt addTpCgcontractmt(User user, TP_SimContract tP_SimContract, DelInformation delInformation, TpCgcontractmt tpCgcontractmt) {
		RandomId ri = new RandomId();
		TpCgcontractmtt tpCgcontract = new TpCgcontractmtt();
		TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();
		TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(0);
		tpCgcontract.setcId(id);
		tpCgcontract.setcConnum(data.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
		//签订公司
		if(tpCgcontractmt.getcCludecom() == null) {
			tpCgcontract.setcCludecom("");
		}else {
			tpCgcontract.setcCludecom(tpCgcontractmt.getcCludecom());
		}
		//外贸合同号
		if("".equals(data.getcOutconnum()) || data.getcOutconnum()== null) {
			tpCgcontract.setcOutconnum("");
			tpCgcontract.setcSw17("");
		}else {
			tpCgcontract.setcOutconnum(data.getcOutconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			//收货单位
			if(tpCgcontract.getcOutconnum().contains("-")) {
				int indexOf = tpCgcontract.getcOutconnum().indexOf("-");//- 第一次出现的位置
				String substring = tpCgcontract.getcOutconnum().substring(0, indexOf);//截取信息
				tpCgcontract.setcSw17(substring);
			}
		}
		//签订地址
//		if(data.getcCludeaddr() == null) {
//			tpCgcontract.setcCludeaddr("");
//		}else {
//			tpCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
//		}
		if(data.getcSignplace() == null) {
			tpCgcontract.setcSignplace("");
		}else {
			tpCgcontract.setcSignplace(data.getcSignplace());//签订地址
		}
		System.out.println();
		//签订时间
		if(data.getcCludetime() == null) {
			tpCgcontract.setcCludetime(null);
		}else {
			tpCgcontract.setcCludetime(data.getcCludetime());
		}
		//预计到货时间
//		if(data.getcDr() == null) {
//			tpCgcontract.setcDr(null);
//		}else {
//			tpCgcontract.setcDr(data.getcDr());
//		}
		if(data.getcSupplier() == null) {
			tpCgcontract.setcSupplier("");
		}else {
			tpCgcontract.setcSupplier(data.getcSupplier());//供应商
		}
		if(data.getcSw20() == null) {
			tpCgcontract.setcSw20("");
		}else {
			tpCgcontract.setcSw20(data.getcSw20().trim());
		}
		if(tpCgorderRequest.getcGoodsname() == null) {
			tpCgcontract.setcSw03("");
		}else {
			tpCgcontract.setcSw03(tpCgorderRequest.getcGoodsname());// 货物名称
		}
		if(tpCgorderRequest.getcManor() == null) {
			tpCgcontract.setcSw10("");
		}else {
			tpCgcontract.setcSw10(tpCgorderRequest.getcManor());//采购员
		}
		
		if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
			tpCgcontract.setcPayway("");
		}else {
			tpCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
		}
		BigDecimal bigValue = new BigDecimal(0);
		for (TpCgorderRequest tpCgorder : tP_SimContract.getTpCgorderRequest()) {
			String getcSumprice = tpCgorder.getcSumprice();
			if(getcSumprice == null) {
				getcSumprice ="0";
			}
			System.out.println("getcSumprice::::"+getcSumprice);
			bigValue = bigValue.add(new BigDecimal(getcSumprice));
			System.out.println("合同金额累加:::"+bigValue);
		}
		System.out.println("合同金额累加后的金额:::"+bigValue);
		tpCgcontract.setcConmoney(ri.formatForTwo(bigValue));
		
		//送/收货地点 目的地
		System.out.println("交货地点：：：：："+delInformation.getcDelivplace());
		if(delInformation.getcDelivplace() == null) {
			tpCgcontract.setcCludeaddr("");
//			tpCgcontract.setcSw09("");
		}else {
			tpCgcontract.setcCludeaddr(delInformation.getcDelivplace());//交货地点
//			tpCgcontract.setcSw09(delInformation.getcDelivplace());
		}
		// 验收方式
		tpCgcontract.setcCheckway("0");
		// 签字步骤-付款情况
		tpCgcontract.setcSignstep("0");
		// 运输方式-开票信息
		tpCgcontract.setcTransway("0");
		// 备注
		tpCgcontract.setcRemark(null);
		// 合同状态
		tpCgcontract.setcState("3");
		tpCgcontract.setcCreater(user.getUserName());
		// 创建时间
		tpCgcontract.setcCreatetime(new Date());
		// 外贸号-存档号
		tpCgcontract.setcSw05(tpCgorderRequest.getcNo());
		
		return tpCgcontract;
		
	}

	/**
	 * 添加合同详情表
	 * @param user
	 * @param tpCgcontractmt
	 * @param tpCgorderRequest
	 * @param tbSupplier
	 */
	/*public List<TbCgcontract> addTbCgcontract(User user, TpCgcontractmt data, List<TpCgorderRequest> tpCgorderRequest,
	 * TbSupplier tbSupplier) */
	
	public List<TbCgcontract> addTbCgcontract(User user, TP_SimContract tP_SimContract) {
			//合同物资信息
		  List<TpCgorderRequest> tpCgorderRequest = tP_SimContract.getTpCgorderRequest();
		  //合同号等基本信息
		  TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();
		  //供应商
		  TbSupplier tbSupplier = tP_SimContract.getTbSupplier();
		  //合同条款
		  CLAUSE_M1S1 clause_M1S1 = tP_SimContract.getClause_M1S1();
		  List<TbCgcontract> tbCgcontractList = new ArrayList<TbCgcontract>();
//		for (TpCgorderRequest tpCgorder : tpCgorderRequest) {
			TbCgcontract tbCgcontract = new TbCgcontract();
			//签订公司
//			tbCgcontract.setcCludecom(get_data_value(data.getcCludecom(),"签订公司").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("签订公司+++++++++++++"+data.getcCludecom());
			
			
			
			if(data.getcCludecom() == null) {
				tbCgcontract.setcCludecom("");
			}else {
				tbCgcontract.setcCludecom(data.getcCludecom());
			}
			//合同号
			if(data.getcConnum() == null) {
				tbCgcontract.setcConnum("");
			}else {
				tbCgcontract.setcConnum(data.getcConnum());
			}
			if(data.getcCludeaddr() == null) {
				tbCgcontract.setcCludeaddr("");
			}else {
				tbCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
			}
			tbCgcontract.setcCludetime(data.getcCludetime());//签订时间
			if(data.getcSupplier() == null) {
				tbCgcontract.setcSupplier("");
			}else{
				tbCgcontract.setcSupplier(data.getcSupplier());//供应商
			}
			if(tP_SimContract.getDelInformation().getcDelivdate() == null) {
				tbCgcontract.setcDelivdate("");
			}else {
				tbCgcontract.setcDelivdate(tP_SimContract.getDelInformation().getcDelivdate());//交货期限
			}
			//交货地点
			System.out.println("工具类交货地点：：："+tP_SimContract.getDelInformation().getcDelivplace());
			if(tP_SimContract.getDelInformation().getcDelivplace() == null) {
				tbCgcontract.setcDelivplace("");
			}else {
				tbCgcontract.setcDelivplace(tP_SimContract.getDelInformation().getcDelivplace());
			}
			if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
				tbCgcontract.setcPayway("");
			}else {
				tbCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
			}
//			if(tP_SimContract.getSignplaceRequest().getcSignplace()==null) {
//				tbCgcontract.setcSignplace("");
//			}else {
//				tbCgcontract.setcSignplace(tP_SimContract.getSignplaceRequest().getcSignplace());//验收地点
//			}
			if(tbSupplier.getcAccountno()==null) {
				tbCgcontract.setcAccountnor("");
			}else {
				tbCgcontract.setcAccountnor(tbSupplier.getcAccountno());//供应商账号号
			}
			
			if(tbSupplier.getcSupaddress() == null) {
				tbCgcontract.setcSupaddress("");
			}else {
				tbCgcontract.setcSupaddress(tbSupplier.getcSupaddress());//供应商地址
			}
			if(tbSupplier.getcBankname()==null) {
				tbCgcontract.setcBanknamer("");
			}else {
				tbCgcontract.setcBanknamer(tbSupplier.getcBankname());//供应商开户行
			}
			System.out.println("供应商开户行：：："+tbCgcontract.getcBanknamer());
			if(tbSupplier.getcSupphone() == null) {
				tbCgcontract.setcSupphone("");
			}else {
				tbCgcontract.setcSupphone(tbSupplier.getcSupphone());//供应商电话 
			}
			
			tbCgcontract.setcTaxnumber(tbSupplier.getcTaxnumber());//供应商税号
			tbCgcontract.setcFaxnor(tbSupplier.getcFaxno());//供应商传真
			tbCgcontract.setcBankname(tP_SimContract.getTbCludecompany().getcCombankname());//需方开户行
			tbCgcontract.setcAccountno(tP_SimContract.getTbCludecompany().getcComaccountno());//需方账号
			tbCgcontract.setcTaxnumbe(tP_SimContract.getTbCludecompany().getcComtaxnumber());//需方税号
			tbCgcontract.setcPhoner(tP_SimContract.getTbCludecompany().getcComphone());//需方电话
			tbCgcontract.setcAddressr(tP_SimContract.getTbCludecompany().getcComaddress());//需方地址
			tbCgcontract.setcFaxno(tP_SimContract.getTbCludecompany().getcComfaxno());//需方传真
//			tbCgcontract.setcSw10(tpCgorder.getcManor());//采购员
			tbCgcontract.setcCreater(user.getUserName());//创建人
			tbCgcontract.setcCreatetime(new Date());//创建时间
			tbCgcontract.setcState("3");// 合同状态
			/*if(clause_M1S1.getcContypeTpCgclausedata() == null) {
				tbCgcontract.setcContype("");
			}else {
				tbCgcontract.setcContype(clause_M1S1.getcContypeTpCgclausedata());//合同模板类型
			}*/
			
//			if(clause_M1S1.getcSw01TpCgclausedata() == null) {
//				tbCgcontract.setcSw01("");
//			}else {
//				tbCgcontract.setcSw01(clause_M1S1.getcSw01TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw02TpCgclausedata() == null) {
//				tbCgcontract.setcSw02("");
//			}else {
//				tbCgcontract.setcSw02(clause_M1S1.getcSw02TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw03TpCgclausedata() == null ) {
//				tbCgcontract.setcSw03("");
//			}else {
//				tbCgcontract.setcSw03(clause_M1S1.getcSw03TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw04TpCgclausedata() == null) {
//				tbCgcontract.setcSw04("");
//			}else {
//				tbCgcontract.setcSw04(clause_M1S1.getcSw04TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw05TpCgclausedata() == null) {
//				tbCgcontract.setcSw05("");
//			}else {
//				tbCgcontract.setcSw05(clause_M1S1.getcSw05TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw06TpCgclausedata() == null) {
//				tbCgcontract.setcSw06("");
//			}else {
//				tbCgcontract.setcSw06(clause_M1S1.getcSw06TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw07TpCgclausedata() == null) {
//				tbCgcontract.setcSw07("");
//			}else {
//				tbCgcontract.setcSw07(clause_M1S1.getcSw07TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw08("");
//			}else {
//				tbCgcontract.setcSw08(clause_M1S1.getcSw08TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw10TpCgclausedata() == null) {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw11TpCgclausedata() == null ) {
//				tbCgcontract.setcSw11("");
//			}else {
//				tbCgcontract.setcSw11(clause_M1S1.getcSw11TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw12TpCgclausedata() == null) {
//				tbCgcontract.setcSw12("");
//			}else {
//				tbCgcontract.setcSw12(clause_M1S1.getcSw12TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw13TpCgclausedata() == null) {
//				tbCgcontract.setcSw13("");
//			}else {
//				tbCgcontract.setcSw13(clause_M1S1.getcSw13TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw14TpCgclausedata() == null) {
//				tbCgcontract.setcSw14("");
//			}else {
//				tbCgcontract.setcSw14(clause_M1S1.getcSw14TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw15TpCgclausedata() == null) {
//				tbCgcontract.setcSw15("");
//			}else {
//				tbCgcontract.setcSw15(clause_M1S1.getcSw15TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw16TpCgclausedata() == null) {
//				tbCgcontract.setcSw16("");
//			}else {
//				tbCgcontract.setcSw16(clause_M1S1.getcSw16TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw17TpCgclausedata()== null) {
//				tbCgcontract.setcSw17("");
//			}else {
//				tbCgcontract.setcSw17(clause_M1S1.getcSw17TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw18TpCgclausedata() == null) {
//				tbCgcontract.setcSw18("");
//			}else {
//				tbCgcontract.setcSw18(clause_M1S1.getcSw18TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw19TpCgclausedata() == null) {
//				tbCgcontract.setcSw19("");
//			}else {
//				tbCgcontract.setcSw19(clause_M1S1.getcSw19TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw20TpCgclausedata() == null) {
//				tbCgcontract.setcSw20("");
//			}else {
//				tbCgcontract.setcSw20(clause_M1S1.getcSw20TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw21TpCgclausedata() == null) {
//				tbCgcontract.setcSw21("");
//			}else {
//				tbCgcontract.setcSw21(clause_M1S1.getcSw21TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw22TpCgclausedata() == null) {
//				tbCgcontract.setcSw22("");
//			}else {
//				tbCgcontract.setcSw22(clause_M1S1.getcSw22TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw23TpCgclausedata() == null) {
//				tbCgcontract.setcSw23("");
//			}else {
//				tbCgcontract.setcSw23(clause_M1S1.getcSw23TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw24TpCgclausedata() == null) {
//				tbCgcontract.setcSw24("");
//			}else {
//				tbCgcontract.setcSw24(clause_M1S1.getcSw24TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw25TpCgclausedata() == null) {
//				tbCgcontract.setcSw25("");
//			}else {
//				tbCgcontract.setcSw25(clause_M1S1.getcSw25TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw26TpCgclausedata() == null) {
//				tbCgcontract.setcSw26("");
//			}else {
//				tbCgcontract.setcSw26(clause_M1S1.getcSw26TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw27TpCgclausedata() == null) {
//				tbCgcontract.setcSw27("");
//			}else {
//				tbCgcontract.setcSw27(clause_M1S1.getcSw27TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw28TpCgclausedata() == null) {
//				tbCgcontract.setcSw28("");
//			}else {
//				tbCgcontract.setcSw28(clause_M1S1.getcSw28TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw29TpCgclausedata() == null) {
//				tbCgcontract.setcSw29("");
//			}else {
//				tbCgcontract.setcSw29(clause_M1S1.getcSw29TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw30TpCgclausedata() == null) {
//				tbCgcontract.setcSw30("");
//			}else {
//				tbCgcontract.setcSw30(clause_M1S1.getcSw30TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw31TpCgclausedata() == null) {
//				tbCgcontract.setcSw31("");
//			}else {
//				tbCgcontract.setcSw31(clause_M1S1.getcSw31TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw32TpCgclausedata() == null) {
//				tbCgcontract.setcSw32("");
//			}else {
//				tbCgcontract.setcSw32(clause_M1S1.getcSw32TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw33TpCgclausedata() == null) {
//				tbCgcontract.setcSw33("");
//			}else {
//				tbCgcontract.setcSw33(clause_M1S1.getcSw33TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw34TpCgclausedata() == null) {
//				tbCgcontract.setcSw34("");
//			}else {
//				tbCgcontract.setcSw34(clause_M1S1.getcSw34TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw35TpCgclausedata() == null) {
//				tbCgcontract.setcSw35("");
//			}else {
//				tbCgcontract.setcSw35(clause_M1S1.getcSw35TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw36TpCgclausedata() == null) {
//				tbCgcontract.setcSw36("");
//			}else {
//				tbCgcontract.setcSw36(clause_M1S1.getcSw36TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw37TpCgclausedata() == null) {
//				tbCgcontract.setcSw37("");
//			}else {
//				tbCgcontract.setcSw37(clause_M1S1.getcSw37TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw38TpCgclausedata() == null) {
//				tbCgcontract.setcSw38("");
//			}else {
//				tbCgcontract.setcSw38(clause_M1S1.getcSw38TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw39TpCgclausedata() == null) {
//				tbCgcontract.setcSw39("");
//			}else {
//				tbCgcontract.setcSw39(clause_M1S1.getcSw39TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw40TpCgclausedata() == null) {
//				tbCgcontract.setcSw40("");
//			}else {
//				tbCgcontract.setcSw40(clause_M1S1.getcSw40TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw41TpCgclausedata() == null) {
//				tbCgcontract.setcSw41("");
//			}else {
//				tbCgcontract.setcSw41(clause_M1S1.getcSw41TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw42TpCgclausedata() == null) {
//				tbCgcontract.setcSw42("");
//			}else {
//				tbCgcontract.setcSw42(clause_M1S1.getcSw42TpCgclausedata());
//			}
//			if(clause_M1S1.getcSw43TpCgclausedata() == null) {
//				tbCgcontract.setcSw43("");
//			}else {
//				tbCgcontract.setcSw43(clause_M1S1.getcSw43TpCgclausedata());
//			}
			
			tbCgcontractList.add(tbCgcontract);
			
//		}
		return tbCgcontractList;
	}

	/**
	 * 合同添加数据时，更新请购物资表
	 * @param list 
	 * @param tpCgcontractmtt 
	 * @param user 
	 * 
	 */
	public List<TpCgorderst> updateTpCgorderst(User user, TpCgcontractmtt tpCgcontractmtt, List<TpCgorderRequest> list) {
		List<TpCgorderst>  tpCgorderstList = new ArrayList<TpCgorderst>();
		for (TpCgorderRequest tpCgorderRequest : list) {
			TpCgorderst tpCgorderst = new TpCgorderst();
			tpCgorderst.setcId(tpCgorderRequest.getcId());//物资主键
			tpCgorderst.setcSw10(tpCgcontractmtt.getcConnum());//合同号
			tpCgorderst.setcState("6");//状态-拟合同状态
			tpCgorderst.setcModifier(user.getUserName());
			tpCgorderst.setcModifytime(new Date());
//			tpCgorderst.setcManor(user.getUserName());
			tpCgorderstList.add(tpCgorderst);
		}
		
		return tpCgorderstList;
		
	}

	/**
	 * 模拟合同添加时合并的问题
	 * @param newList2
	 * @param value111
	 * @param user
	 * @param map1 
	 */
	public TpCgcontractstt addTpCgcontractst(List<TpCgcontractstt> newList2, List<TpCgorderRequest> value111, User user, Map<String, List<TpCgorderRequest>> map1) {
		TpCgcontractstt tcst = new TpCgcontractstt();
		String spec = "";// 合并后的规格
		String num = "";// 合并后的数量
		String sw02 = "";// 合并后的物资单号
		String sw03 = "";// 合并后的请购单号
		String line = "";// 合并后的合同行号
		String unit = value111.get(0).getcUnit().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]","");// 合并后的单位
		String name = value111.get(0).getcCustoms().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");// 报关物资名称
		//报关物资规格
		if (value111.get(0).getcCuspec() == null) {
			tcst.setcSpec(null);
		} else {
			tcst.setcSpec(value111.get(0).getcCuspec().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]",""));
		}
		String yname = "";//合并后的物资名称
		String orid = "";//合并后的合同行号
		for (int i = 0; i < value111.size(); i++) {
			if (value111.get(i).getcNum()!= null) {
				num += value111.get(i).getcNum() + "/";
			}
		}
		
		for (int j = 0; j < value111.size(); j++) {
			if (newList2.get(j).getcSpec() != null) {
				spec += newList2.get(j).getcSpec() + "/";
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
		
		if (spec.equals("")) {
			spec = null;
		} else {
			spec = spec.substring(0, spec.length() - 1).replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "");
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
			System.out.println("合并后的数量：："+num);
		}
		String sss = bigs.get_Goodsnum2(unit, num);// 合并后的数量
		System.out.println(sss);
		if (newList2.get(0).getcMtid() == null) {
			
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
			tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N000" + (map1.size()));
		}
		if (10 <= (newList2.size()) && (newList2.size()) < 100) {
			tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N00" + (map1.size()));
		}
		if (100 <= (newList2.size()) && (newList2.size()) < 1000) {
			tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N0" + (map1.size()));
		}
		if (1000 <= (newList2.size()) && (newList2.size()) < 10000) {
			tcst.setcSw05(newList2.get(0).getcSw05().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", "") + "-N" + (map1.size()));
		}
		tcst.setcConnum(newList2.get(0).getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
		
		if(newList2.get(0).getcRemark()==null) {
			tcst.setcRemark(value111.get(0).getcRemark());
		}else {
			tcst.setcRemark(newList2.get(0).getcRemark());
		}
		return tcst;
	}
//拟合同修改-固定板
	public TpCgcontractmtt updateTpCgcontractmt(User user, TP_SimContract tP_SimContract, DelInformation delInformation, TpCgcontractmt tpCgcontractmt) {
		TpCgcontractmtt tpCgcontract = new TpCgcontractmtt();
		//合同信息-模态框里的
		TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();
		TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(0);
//		tpCgcontract.setcId(id);
		tpCgcontract.setcConnum(data.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
		//签订公司
		tpCgcontract.setcCludecom(tpCgcontractmt.getcCludecom());
		//外贸合同号
		if(data.getcOutconnum()== null) {
			tpCgcontract.setcOutconnum("");
			tpCgcontract.setcSw17("");
		}else {
			tpCgcontract.setcOutconnum(data.getcOutconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			//收货单位
			if(tpCgcontract.getcOutconnum().contains("-")) {
				int indexOf = tpCgcontract.getcOutconnum().indexOf("-");//- 第一次出现的位置
				String substring = tpCgcontract.getcOutconnum().substring(0, indexOf);//截取信息
				tpCgcontract.setcSw17(substring);
			}
		}
		//签订地址
//		if(data.getcCludeaddr() == null) {
//			tpCgcontract.setcCludeaddr("");
//		}else {
//			tpCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
//		}
		if(data.getcSignplace() == null) {
			tpCgcontract.setcSignplace("");
		}else {
			tpCgcontract.setcSignplace(data.getcSignplace());//签订地址
		}
		//签订时间
		if(data.getcCludetime() == null) {
			tpCgcontract.setcCludetime(null);
		}else {
			tpCgcontract.setcCludetime(data.getcCludetime());
		}
		//预计到货时间
//		if(data.getcDr() == null) {
//			tpCgcontract.setcDr(null);
//		}else {
//			tpCgcontract.setcDr(data.getcDr());
//		}
		if(data.getcSw20() == null) {
			tpCgcontract.setcSw20("");
		}else {
			tpCgcontract.setcSw20(data.getcSw20());
		}
		if(data.getcSupplier() == null) {
			tpCgcontract.setcSupplier("");
		}else {
			tpCgcontract.setcSupplier(data.getcSupplier());//供应商
		}
		if(tpCgorderRequest.getcGoodsname() == null) {
			tpCgcontract.setcSw03("");
		}else {
			tpCgcontract.setcSw03(tpCgorderRequest.getcGoodsname());// 货物名称
		}
//		System.out.println("采购员：："+data.getcSw10());
		//采购员
		if(data.getcSw10() == null) {
			tpCgcontract.setcSw10("");
		}else {
			tpCgcontract.setcSw10(tP_SimContract.getTpCgcontractmt().getcSw10());
		}
//		System.out.println("采购员======="+data.getcSw10());
		if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
			tpCgcontract.setcPayway("");
		}else {
			tpCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
		}
		BigDecimal bigValue = new BigDecimal(0);
		for (TpCgorderRequest tpCgorder : tP_SimContract.getTpCgorderRequest()) {
			String getcSumprice = tpCgorder.getcSumprice();
			if(getcSumprice == null) {
				getcSumprice ="0.00";
			}
			bigValue = bigValue.add(new BigDecimal(getcSumprice));
			System.out.println("合同金额累加:::"+bigValue);
		}
		tpCgcontract.setcConmoney(ri.formatForTwo(bigValue));
		//送/收货地点 目的地
//		System.out.println("交货地点;;;;;;;;;;;"+delInformation.getcDelivplace());
		if(delInformation.getcDelivplace() == null) {
			tpCgcontract.setcCludeaddr("");
//			tpCgcontract.setcSw09("");
		}else {
			tpCgcontract.setcCludeaddr(delInformation.getcDelivplace());//交货地点
//			tpCgcontract.setcSw09(delInformation.getcDelivplace());
		}
		// 验收方式
		tpCgcontract.setcCheckway("0");
		// 签字步骤-付款情况
		tpCgcontract.setcSignstep("0");
		// 运输方式-开票信息
		tpCgcontract.setcTransway("0");
		// 备注
		tpCgcontract.setcRemark(null);
		// 合同状态
		tpCgcontract.setcState("3");
//		tpCgcontract.setcCreater(user.getUserName());
//		// 创建时间
//		tpCgcontract.setcCreatetime(new Date());
		tpCgcontract.setcModifier(user.getUserName());
		tpCgcontract.setcModifytime(new Date());
		// 外贸号-存档号
		tpCgcontract.setcSw05(tpCgorderRequest.getcNo());
		//现有合同的id
		tpCgcontract.setcId(tP_SimContract.getTpCgcontractmtt().getcId());
		return tpCgcontract;
	}
	
//修改
	public List<TbCgcontract> uppdateTbCgcontract(User user, TP_SimContract tP_SimContract) {
		  List<TpCgorderRequest> tpCgorderRequest = tP_SimContract.getTpCgorderRequest();//合同物资信息
		  TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();//合同号等基本信息
		  TbSupplier tbSupplier = tP_SimContract.getTbSupplier();//供应商
		  List<TbCgcontract> tbCgcontractList = new ArrayList<TbCgcontract>();
//		for (TpCgorderRequest tpCgorder : tpCgorderRequest) {
			TbCgcontract tbCgcontract = new TbCgcontract();
			//新合同号
			if(data.getcConnum() == null) {
				tbCgcontract.setcConnum("");
			}else {
				tbCgcontract.setcConnum(data.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
			}
			//旧合同号
			tbCgcontract.setcConsultrmb(tP_SimContract.getTpCgcontractmtt().getcConnum());
			//签订公司
//			tbCgcontract.setcCludecom(get_data_value(data.getcCludecom(),"签订公司").replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			System.out.println("签订公司+++++++++++++"+data.getcCludecom());
			if(data.getcCludecom() == null) {
				tbCgcontract.setcCludecom("");
			}else {
				tbCgcontract.setcCludecom(data.getcCludecom());
			}
			if(data.getcCludeaddr() == null) {
				tbCgcontract.setcCludeaddr("");
			}else {
				tbCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
			}
			tbCgcontract.setcCludetime(data.getcCludetime());//签订时间
			if(data.getcSupplier() == null) {
				tbCgcontract.setcSupplier("");
			}else{
				tbCgcontract.setcSupplier(data.getcSupplier());//供应商
			}
//			if(tpCgorder.getcGoodsname() == null) {
//				tbCgcontract.setcGoodsname("");
//			}else {
//				tbCgcontract.setcGoodsname(tpCgorder.getcGoodsname());// 货物名称
//			}
//			if(tpCgorder.getcCustoms() == null) {
//				tbCgcontract.setcSw08("");
//			}else {
//				tbCgcontract.setcSw08(tpCgorder.getcCustoms());//报关物资名称
//			}
//			if(tpCgorder.getcNum() == null) {
//				tbCgcontract.setcNum("");
//			}else {
//				tbCgcontract.setcNum(tpCgorder.getcNum());//订购数量
//			}
//			if(tpCgorder.getcUnit() == null) {
//				tbCgcontract.setcUnit("");
//			}else {
//				tbCgcontract.setcUnit(tpCgorder.getcUnit());//单位
//			}
//			if(tpCgorder.getcSpec() == null) {
//				tbCgcontract.setcSpec("");
//			}else {
//				tbCgcontract.setcSpec(tpCgorder.getcSpec());//规格
//			}
//			if(tpCgorder.getcPrice() == null) {
//				tbCgcontract.setcUnitprice("");
//			}else {
//				tbCgcontract.setcUnitprice(tpCgorder.getcPrice());//含税单价
//			}
//			if(tpCgorder.getcSumprice() == null) {
//				tbCgcontract.setcTotaltax("");
//			}else {
//				tbCgcontract.setcTotaltax(tpCgorder.getcSumprice());//含税总价
//			}
//			if(tpCgorder.getcRemark() == null) {
//				tbCgcontract.setcRemark("");	
//			}else {
//				tbCgcontract.setcRemark(tpCgorder.getcRemarkc());//备注
//			}
//			if(tP_SimContract.getTechnology().getcSw01() == null) {
//				tbCgcontract.setcSw01("");
//			}else {
//				tbCgcontract.setcSw01(tP_SimContract.getTechnology().getcSw01());//质量技术
//			}
//			if(tP_SimContract.getTechnology().getcSw02()==null) {
//				tbCgcontract.setcSw02("");
//			}else {
//				tbCgcontract.setcSw02(tP_SimContract.getTechnology().getcSw02());//供方承诺
//			}
//			if(tP_SimContract.getBaoZInfo().getcSw03() == null) {
//				tbCgcontract.setcSw03("");
//			}else {
//				tbCgcontract.setcSw03(tP_SimContract.getBaoZInfo().getcSw03());//包装1
//			}
//			if(tP_SimContract.getBaoZInfo().getcSw04() == null) {
//				tbCgcontract.setcSw04("");
//			}else {
//				tbCgcontract.setcSw04(tP_SimContract.getBaoZInfo().getcSw04());//包装2
//			}
			if(tP_SimContract.getDelInformation().getcDelivdate() == null) {
				tbCgcontract.setcDelivdate("");
			}else {
				tbCgcontract.setcDelivdate(tP_SimContract.getDelInformation().getcDelivdate());//交货期限
			}
			//交货地点
			System.out.println("工具类交货地点：：："+tP_SimContract.getDelInformation().getcDelivplace());
			if(tP_SimContract.getDelInformation().getcDelivplace() == null) {
				tbCgcontract.setcDelivplace("");
			}else {
				tbCgcontract.setcDelivplace(tP_SimContract.getDelInformation().getcDelivplace());
			}
			if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
				tbCgcontract.setcPayway("");
			}else {
				tbCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
			}
//			if(tP_SimContract.getSignplaceRequest().getcSignplace()==null) {
//				tbCgcontract.setcSignplace("");
//			}else {
//				tbCgcontract.setcSignplace(tP_SimContract.getSignplaceRequest().getcSignplace());//验收地点
//			}
			if(tbSupplier.getcAccountno()==null) {
				tbCgcontract.setcAccountnor("");
			}else {
				tbCgcontract.setcAccountnor(tbSupplier.getcAccountno());//供应商账号号
			}
			if(tbSupplier.getcSupaddress() == null) {
				tbCgcontract.setcSupaddress("");
			}else {
				tbCgcontract.setcSupaddress(tbSupplier.getcSupaddress());//供应商地址
			}
			if(tbSupplier.getcBankname()==null) {
				tbCgcontract.setcBanknamer("");
			}else {
				tbCgcontract.setcBanknamer(tbSupplier.getcBankname());//供应商开户行
			}
			if(tbSupplier.getcSupphone() == null) {
				tbCgcontract.setcSupphone("");
			}else {
				tbCgcontract.setcSupphone(tbSupplier.getcSupphone());//供应商电话 
			}
			
			tbCgcontract.setcTaxnumber(tbSupplier.getcTaxnumber());//供应商税号
			tbCgcontract.setcFaxnor(tbSupplier.getcFaxno());//供应商传真
			tbCgcontract.setcBankname(tP_SimContract.getTbCludecompany().getcCombankname());//需方开户行
			tbCgcontract.setcAccountno(tP_SimContract.getTbCludecompany().getcComaccountno());//需方账号
			tbCgcontract.setcTaxnumbe(tP_SimContract.getTbCludecompany().getcComtaxnumber());//需方税号
			tbCgcontract.setcPhoner(tP_SimContract.getTbCludecompany().getcComphone());//需方电话
			tbCgcontract.setcAddressr(tP_SimContract.getTbCludecompany().getcComaddress());//需方地址
			tbCgcontract.setcFaxno(tP_SimContract.getTbCludecompany().getcComfaxno());//需方传真
//			tbCgcontract.setcSw10(tpCgorder.getcManor());//采购员
			tbCgcontract.setcCreater(user.getUserName());//创建人
			tbCgcontract.setcCreatetime(new Date());//创建时间
			tbCgcontract.setcState("3");// 合同状态
			tbCgcontractList.add(tbCgcontract);
//		}
		return tbCgcontractList;
	}

	/**
	 * 动态模板合同
	 * @param user
	 * @param tP_SimContract
	 * @param delInformation
	 * @param tpCgcontractmt
	 * @return
	 */
	public TpCgcontractmtt addTpCgcontractmt2(User user, TP_SimContract tP_SimContract, DelInformation delInformation,
			TpCgcontractmt tpCgcontractmt) {
		TpCgcontractmtt tpCgcontract = new TpCgcontractmtt();
		TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();
//		TpCgcontractmtt cgcontractmtt = tP_SimContract.getTpCgcontractmtt();
		TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(0);
		tpCgcontract.setcId(id);
		tpCgcontract.setcConnum(data.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
		//签订公司
		if(tpCgcontractmt.getcCludecom() == null) {
			tpCgcontract.setcCludecom("");
		}else {
			tpCgcontract.setcCludecom(tpCgcontractmt.getcCludecom());
		}
		//外贸合同号
		if("".equals(data.getcOutconnum()) || data.getcOutconnum() == null) {
			tpCgcontract.setcOutconnum("");
			tpCgcontract.setcSw17("");
		}else {
			tpCgcontract.setcOutconnum(data.getcOutconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			//收货单位
			String getcConnum = tpCgcontract.getcConnum();
			int indexOf1 = getcConnum.indexOf("-");
			int indexOf2 = getcConnum.indexOf("-",indexOf1+1);
			String substring = getcConnum.substring(indexOf1+1, indexOf2);
			tpCgcontract.setcSw17(substring);
		}
		
		//签订地址
//		if(data.getcCludeaddr() == null) {
//			tpCgcontract.setcCludeaddr("");
//		}else {
//			tpCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
//		}
		if(data.getcSignplace() == null) {
			tpCgcontract.setcSignplace("");
		}else {
			tpCgcontract.setcSignplace(data.getcSignplace());//签订地址
		}
		//签订时间
		if(data.getcCludetime() == null) {
			tpCgcontract.setcCludetime(null);
		}else {
			tpCgcontract.setcCludetime(data.getcCludetime());
		}
		//预计到货时间
//		if(data.getcCludetime() != null && tP_SimContract.getDelInformation().getcDelivdate() != null) {
//			tpCgcontract.setcDr(dateUnit(tP_SimContract.getDelInformation().getcDelivdate(),data.getcCludetime()));
//		}
		if(data.getcDr() == null) {
			tpCgcontract.setcDr(null);
		}else {
			tpCgcontract.setcDr(data.getcDr());
		}
		if(data.getcSupplier() == null) {
			tpCgcontract.setcSupplier("");
		}else {
			tpCgcontract.setcSupplier(data.getcSupplier());//供应商
		}
		if(data.getcSw20() == null) {
			tpCgcontract.setcSw20("");
		}else {
			tpCgcontract.setcSw20(data.getcSw20().trim());		
		}
		if(tpCgorderRequest.getcGoodsname() == null) {
			tpCgcontract.setcSw03("");
		}else {
			tpCgcontract.setcSw03(tpCgorderRequest.getcGoodsname());// 货物名称
		}
		if(tpCgorderRequest.getcManor() == null) {
			if(tP_SimContract.getcSw10() != null) {
				tpCgcontract.setcSw10(tP_SimContract.getcSw10());
			}
			
		}else {
			tpCgcontract.setcSw10(tpCgorderRequest.getcManor());//采购员
		}
		//付款方式
		if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
			tpCgcontract.setcPayway("");
		}else {
			tpCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
		}
		//交货期限
		if(tP_SimContract.getDelInformation().getcDelivdate()==null) {
			tpCgcontract.setcSw22("");
		}else {
			tpCgcontract.setcSw22(tP_SimContract.getDelInformation().getcDelivdate());//交货期限
		}
//		Double dbValue = 0.000;
		BigDecimal bigValue = new BigDecimal(0);
		for (TpCgorderRequest tpCgorder : tP_SimContract.getTpCgorderRequest()) {
			String getcSumprice = tpCgorder.getcSumprice();
			if(getcSumprice == null) {
				getcSumprice ="0.00";
			}
			bigValue = bigValue.add(new BigDecimal(getcSumprice));
		}
		tpCgcontract.setcConmoney(ri.formatForTwo(bigValue));
		//送/收货地点 目的地
		System.out.println("交货地点：：：：："+delInformation.getcDelivplace());
		if(delInformation.getcDelivplace() == null) {
			tpCgcontract.setcCludeaddr("");
//			tpCgcontract.setcSw09("");
		}else {
			tpCgcontract.setcCludeaddr(delInformation.getcDelivplace());//交货地点
//			tpCgcontract.setcSw09(delInformation.getcDelivplace());
		}
		// 到货情况
		tpCgcontract.setcCheckway("0");
		// 签字步骤-付款情况
		tpCgcontract.setcSignstep("0");
		// 运输方式-开票信息
		tpCgcontract.setcTransway("0");
		// 备注
		tpCgcontract.setcRemark(null);
		// 合同状态
		tpCgcontract.setcState("3");
		tpCgcontract.setcCreater(user.getUserName());
		// 创建时间
		tpCgcontract.setcCreatetime(new Date());
		// 转签合同号
		if(!"".equals(tP_SimContract.getcZqconnum())&&tP_SimContract.getcZqconnum() != null) {
			tpCgcontract.setcSw05(tP_SimContract.getcZqconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			//收货单位
			String getcConnum = tP_SimContract.getcZqconnum();
			int indexOf1 = getcConnum.indexOf("-");
			int indexOf2 = getcConnum.indexOf("-",indexOf1+1);
			String substring = getcConnum.substring(indexOf1+1, indexOf2);
			tpCgcontract.setcSw17(substring);
			//出口商
			String str = getcConnum.substring(0,indexOf1);
			String cks = ri.getCKS(str);
			if(cks == null) {
				tpCgcontract.setcSw21("");
			}else {
				tpCgcontract.setcSw21(cks);
			}
		}else {
			tpCgcontract.setcSw05("");
			tpCgcontract.setcSw21("");
		}
		
//		if(cgcontractmtt.getcDelivery() != null) {
//			tpCgcontract.setcDelivery(cgcontractmtt.getcDelivery());//交货期限-下拉框
//			if("qx03".equals(cgcontractmtt.getcDelivery())) {
//				if(cgcontractmtt.getcDeliverytime() != null) {
//					tpCgcontract.setcDeliverytime(cgcontractmtt.getcDeliverytime());//交货期限-日期
//					tpCgcontract.setcDr(cgcontractmtt.getcDeliverytime());//预计到货时间
//				}
//			}else {
//				if(cgcontractmtt.getcDeliveryday() != null) {
//					tpCgcontract.setcDeliveryday(cgcontractmtt.getcDeliveryday());//交货期限-天数
//				}
//			}
//		}
		return tpCgcontract;
	}

	/**
	 * 动态版
	 * @param user
	 * @param tP_SimContract
	 * @param delInformation 
	 * @param tpCgauthority 
	 * @return
	 */
	public List<TbCgcontract> addTbCgcontract2(User user, TP_SimContract tP_SimContract, DelInformation delInformation, TpCgauthority tpCgauthority) {
		//合同物资信息
		  List<TpCgorderRequest> tpCgorderRequest = tP_SimContract.getTpCgorderRequest();
		  //合同号等基本信息
		  TpCgcontractmtt data = tP_SimContract.getTpCgcontractmt();
//		  TpCgcontractmtt contractmtt = tP_SimContract.getTpCgcontractmtt();
		  //供应商
		  TbSupplier tbSupplier = tP_SimContract.getTbSupplier();
		  //合同条款
		  CLAUSE_M1S1 clause_M1S1 = tP_SimContract.getClause_M1S1();
		  List<TbCgcontract> tbCgcontractList = new ArrayList<>();
			TbCgcontract tbCgcontract = new TbCgcontract();
			//签订公司
			System.out.println("签订公司+++++++++++++"+data.getcCludecom());
			if(data.getcCludecom() == null) {
				tbCgcontract.setcCludecom("");
			}else {
				tbCgcontract.setcCludecom(data.getcCludecom());
			}
			//合同号
			if(data.getcConnum() == null) {
				tbCgcontract.setcConnum("");
			}else {
				tbCgcontract.setcConnum(data.getcConnum());
			}
			
			//签订地址
			if(data.getcCludeaddr() == null) {
				tbCgcontract.setcCludeaddr("");
			}else {
				tbCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			//签订时间
			tbCgcontract.setcCludetime(data.getcCludetime());
			//供应商
			if(data.getcSupplier() == null) {
				tbCgcontract.setcSupplier("");
			}else{
				tbCgcontract.setcSupplier(data.getcSupplier());
			}
			//合同模板类型
			if(!"".equals(clause_M1S1.getcSw50TpCgclausedata())&& clause_M1S1.getcSw50TpCgclausedata()!=null) {
				tbCgcontract.setcContype(tbCgcontract.getcSupplier()+"-"+tpCgauthority.getcSubitemdes());
			}
			/*if("".equals(data.getcOutconnum()) || data.getcOutconnum()== null) {
				tbCgcontract.setcContype(tbCgcontract.getcSupplier()+"-国内模板");
			}else {
				tbCgcontract.setcContype(tbCgcontract.getcSupplier()+"-外贸模板");
			}
			System.out.println("动态新增模板:::::"+tbCgcontract.getcContype());*/
//			if(tP_SimContract.getSignplaceRequest().getcSignplace()==null) {
//				tbCgcontract.setcSignplace("");
//			}else {
//				tbCgcontract.setcSignplace(tP_SimContract.getSignplaceRequest().getcSignplace());//验收地点
//			}
			//供应商账号号
			if(tbSupplier.getcAccountno()==null) {
				tbCgcontract.setcAccountnor("");
			}else {
				tbCgcontract.setcAccountnor(tbSupplier.getcAccountno());
			}
			//供应商地址
			if(tbSupplier.getcSupaddress() == null) {
				tbCgcontract.setcSupaddress("");
			}else {
				tbCgcontract.setcSupaddress(tbSupplier.getcSupaddress());
			}
			//供应商开户行
			if(tbSupplier.getcBankname()==null) {
				tbCgcontract.setcBanknamer("");
			}else {
				tbCgcontract.setcBanknamer(tbSupplier.getcBankname());
			}
			//供应商电话 
			if(tbSupplier.getcSupphone() == null) {
				tbCgcontract.setcSupphone("");
			}else {
				tbCgcontract.setcSupphone(tbSupplier.getcSupphone());
			}
			//供应商税号
			tbCgcontract.setcTaxnumber(tbSupplier.getcTaxnumber());
			//供应商传真
			tbCgcontract.setcFaxnor(tbSupplier.getcFaxno());
			//需方开户行
			tbCgcontract.setcBankname(tP_SimContract.getTbCludecompany().getcCombankname());
			//需方账号
			tbCgcontract.setcAccountno(tP_SimContract.getTbCludecompany().getcComaccountno());
			//需方税号
			tbCgcontract.setcTaxnumbe(tP_SimContract.getTbCludecompany().getcComtaxnumber());
			//需方电话
			tbCgcontract.setcPhoner(tP_SimContract.getTbCludecompany().getcComphone());
			//需方地址
			tbCgcontract.setcAddressr(tP_SimContract.getTbCludecompany().getcComaddress());
			//需方传真
			tbCgcontract.setcFaxno(tP_SimContract.getTbCludecompany().getcComfaxno());
//			tbCgcontract.setcSw10(tpCgorder.getcManor());//采购员
			//创建人
			tbCgcontract.setcCreater(user.getUserName());
			//创建时间
			tbCgcontract.setcCreatetime(new Date());
			// 合同状态
			tbCgcontract.setcState("3");
			
			String cDelivdate;//交货期限
			String cDelivplace;//交货地点
			String cPayway;//付款方式
			//交货期限
//			if(contractmtt.getcDelivery() != null && delInformation.getcDelivdate() != null && "qx03".endsWith(contractmtt.getcDelivery())) {
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
//				String asd = sdf.format(contractmtt.getcDeliverytime());
//				System.out.println(asd + " aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//				tbCgcontract.setcDelivdate(delInformation.getcDelivdate().replace("****年**月**日",asd));
//			}else if(contractmtt.getcDelivery() != null && delInformation.getcDelivdate() != null) {
//				if(delInformation.getcDelivdate().indexOf("*") != -1 && contractmtt.getcDeliveryday() != null) {
//					System.out.println(contractmtt.getcDeliveryday() + "  天数");
//					System.out.println(delInformation.getcDelivdate().replace("*", contractmtt.getcDeliveryday()) + " aaaaaaaaaaaaaaaaaaaaaa");
//					tbCgcontract.setcDelivdate(delInformation.getcDelivdate().replace("*", contractmtt.getcDeliveryday()));
//				}
//			}
			if(tP_SimContract.getDelInformation().getcDelivdate() == null) {
				tbCgcontract.setcDelivdate("");
			}else {
				tbCgcontract.setcDelivdate(tP_SimContract.getDelInformation().getcDelivdate());
			}
			cDelivdate = tbCgcontract.getcDelivdate();
			//交货地点
			System.out.println("工具类交货地点：：："+tP_SimContract.getDelInformation().getcDelivplace());
			if(tP_SimContract.getDelInformation().getcDelivplace() == null) {
				tbCgcontract.setcDelivplace("");
			}else {
				tbCgcontract.setcDelivplace(tP_SimContract.getDelInformation().getcDelivplace());
			}
			cDelivplace = delInformation.getcDelivplace();
			//付款方式
			if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
				tbCgcontract.setcPayway("");
			}else {
				tbCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());
			}
			cPayway = tbCgcontract.getcPayway();
//			if(clause_M1S1.getcSw01TpCgclausedata() == null) {
//				tbCgcontract.setcSw01("");
//			}else {
//				tbCgcontract.setcSw01(clause_M1S1.getcSw01TpCgclausedata());
//			}
			tbCgcontract.setcSw01(judgeUtil(clause_M1S1.getcSw01TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw02TpCgclausedata() == null) {
//				tbCgcontract.setcSw02("");
//			}else {
//				tbCgcontract.setcSw02(clause_M1S1.getcSw02TpCgclausedata());
//			}
			tbCgcontract.setcSw02(judgeUtil(clause_M1S1.getcSw02TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw03TpCgclausedata() == null ) {
//				tbCgcontract.setcSw03("");
//			}else {
//				tbCgcontract.setcSw03(clause_M1S1.getcSw03TpCgclausedata());
//			}
			tbCgcontract.setcSw03(judgeUtil(clause_M1S1.getcSw03TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw04TpCgclausedata() == null) {
//				tbCgcontract.setcSw04("");
//			}else {
//				tbCgcontract.setcSw04(clause_M1S1.getcSw04TpCgclausedata());
//			}
			tbCgcontract.setcSw04(judgeUtil(clause_M1S1.getcSw04TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw05TpCgclausedata() == null) {
//				tbCgcontract.setcSw05("");
//			}else {
//				tbCgcontract.setcSw05(clause_M1S1.getcSw05TpCgclausedata());
//			}
			tbCgcontract.setcSw05(judgeUtil(clause_M1S1.getcSw05TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw06TpCgclausedata() == null) {
//				tbCgcontract.setcSw06("");
//			}else {
//				tbCgcontract.setcSw06(clause_M1S1.getcSw06TpCgclausedata());
//			}
			tbCgcontract.setcSw06(judgeUtil(clause_M1S1.getcSw06TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw07TpCgclausedata() == null) {
//				tbCgcontract.setcSw07("");
//			}else {
//				tbCgcontract.setcSw07(clause_M1S1.getcSw07TpCgclausedata());
//			}
			tbCgcontract.setcSw07(judgeUtil(clause_M1S1.getcSw07TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw08("");
//			}else {
//				tbCgcontract.setcSw08(clause_M1S1.getcSw08TpCgclausedata());
//			}
			tbCgcontract.setcSw08(judgeUtil(clause_M1S1.getcSw08TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}
			tbCgcontract.setcSw09(judgeUtil(clause_M1S1.getcSw09TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw10TpCgclausedata() == null) {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}
			tbCgcontract.setcSw10(judgeUtil(clause_M1S1.getcSw10TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw11TpCgclausedata() == null ) {
//				tbCgcontract.setcSw11("");
//			}else {
//				tbCgcontract.setcSw11(clause_M1S1.getcSw11TpCgclausedata());
//			}
			tbCgcontract.setcSw11(judgeUtil(clause_M1S1.getcSw11TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw12TpCgclausedata() == null) {
//				tbCgcontract.setcSw12("");
//			}else {
//				tbCgcontract.setcSw12(clause_M1S1.getcSw12TpCgclausedata());
//			}
			tbCgcontract.setcSw12(judgeUtil(clause_M1S1.getcSw12TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw13TpCgclausedata() == null) {
//				tbCgcontract.setcSw13("");
//			}else {
//				tbCgcontract.setcSw13(clause_M1S1.getcSw13TpCgclausedata());
//			}
			tbCgcontract.setcSw13(judgeUtil(clause_M1S1.getcSw13TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw14TpCgclausedata() == null) {
//				tbCgcontract.setcSw14("");
//			}else {
//				tbCgcontract.setcSw14(clause_M1S1.getcSw14TpCgclausedata());
//			}
			tbCgcontract.setcSw14(judgeUtil(clause_M1S1.getcSw14TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw15TpCgclausedata() == null) {
//				tbCgcontract.setcSw15("");
//			}else {
//				tbCgcontract.setcSw15(clause_M1S1.getcSw15TpCgclausedata());
//			}
			tbCgcontract.setcSw15(judgeUtil(clause_M1S1.getcSw15TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw16TpCgclausedata() == null) {
//				tbCgcontract.setcSw16("");
//			}else {
//				tbCgcontract.setcSw16(clause_M1S1.getcSw16TpCgclausedata());
//			}
			tbCgcontract.setcSw16(judgeUtil(clause_M1S1.getcSw16TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw17TpCgclausedata()== null) {
//				tbCgcontract.setcSw17("");
//			}else {
//				tbCgcontract.setcSw17(clause_M1S1.getcSw17TpCgclausedata());
//			}
			tbCgcontract.setcSw17(judgeUtil(clause_M1S1.getcSw17TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw18TpCgclausedata() == null) {
//				tbCgcontract.setcSw18("");
//			}else {
//				tbCgcontract.setcSw18(clause_M1S1.getcSw18TpCgclausedata());
//			}
			tbCgcontract.setcSw18(judgeUtil(clause_M1S1.getcSw18TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw19TpCgclausedata() == null) {
//				tbCgcontract.setcSw19("");
//			}else {
//				tbCgcontract.setcSw19(clause_M1S1.getcSw19TpCgclausedata());
//			}
			tbCgcontract.setcSw19(judgeUtil(clause_M1S1.getcSw19TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw20TpCgclausedata() == null) {
//				tbCgcontract.setcSw20("");
//			}else {
//				tbCgcontract.setcSw20(clause_M1S1.getcSw20TpCgclausedata());
//			}
			tbCgcontract.setcSw20(judgeUtil(clause_M1S1.getcSw20TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw21TpCgclausedata() == null) {
//				tbCgcontract.setcSw21("");
//			}else {
//				tbCgcontract.setcSw21(clause_M1S1.getcSw21TpCgclausedata());
//			}
			tbCgcontract.setcSw21(judgeUtil(clause_M1S1.getcSw21TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw22TpCgclausedata() == null) {
//				tbCgcontract.setcSw22("");
//			}else {
//				tbCgcontract.setcSw22(clause_M1S1.getcSw22TpCgclausedata());
//			}
			tbCgcontract.setcSw22(judgeUtil(clause_M1S1.getcSw22TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw23TpCgclausedata() == null) {
//				tbCgcontract.setcSw23("");
//			}else {
//				tbCgcontract.setcSw23(clause_M1S1.getcSw23TpCgclausedata());
//			}
			tbCgcontract.setcSw23(judgeUtil(clause_M1S1.getcSw23TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw24TpCgclausedata() == null) {
//				tbCgcontract.setcSw24("");
//			}else {
//				tbCgcontract.setcSw24(clause_M1S1.getcSw24TpCgclausedata());
//			}
			tbCgcontract.setcSw24(judgeUtil(clause_M1S1.getcSw24TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw25TpCgclausedata() == null) {
//				tbCgcontract.setcSw25("");
//			}else {
//				tbCgcontract.setcSw25(clause_M1S1.getcSw25TpCgclausedata());
//			}
			tbCgcontract.setcSw25(judgeUtil(clause_M1S1.getcSw25TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw26TpCgclausedata() == null) {
//				tbCgcontract.setcSw26("");
//			}else {
//				tbCgcontract.setcSw26(clause_M1S1.getcSw26TpCgclausedata());
//			}
			tbCgcontract.setcSw26(judgeUtil(clause_M1S1.getcSw26TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw27TpCgclausedata() == null) {
//				tbCgcontract.setcSw27("");
//			}else {
//				tbCgcontract.setcSw27(clause_M1S1.getcSw27TpCgclausedata());
//			}
			tbCgcontract.setcSw27(judgeUtil(clause_M1S1.getcSw27TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw28TpCgclausedata() == null) {
//				tbCgcontract.setcSw28("");
//			}else {
//				tbCgcontract.setcSw28(clause_M1S1.getcSw28TpCgclausedata());
//			}
			tbCgcontract.setcSw28(judgeUtil(clause_M1S1.getcSw28TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw29TpCgclausedata() == null) {
//				tbCgcontract.setcSw29("");
//			}else {
//				tbCgcontract.setcSw29(clause_M1S1.getcSw29TpCgclausedata());
//			}
			tbCgcontract.setcSw29(judgeUtil(clause_M1S1.getcSw29TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw30TpCgclausedata() == null) {
//				tbCgcontract.setcSw30("");
//			}else {
//				tbCgcontract.setcSw30(clause_M1S1.getcSw30TpCgclausedata());
//			}
			tbCgcontract.setcSw30(judgeUtil(clause_M1S1.getcSw30TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw31TpCgclausedata() == null) {
//				tbCgcontract.setcSw31("");
//			}else {
//				tbCgcontract.setcSw31(clause_M1S1.getcSw31TpCgclausedata());
//			}
			tbCgcontract.setcSw31(judgeUtil(clause_M1S1.getcSw31TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw32TpCgclausedata() == null) {
//				tbCgcontract.setcSw32("");
//			}else {
//				tbCgcontract.setcSw32(clause_M1S1.getcSw32TpCgclausedata());
//			}
			tbCgcontract.setcSw32(judgeUtil(clause_M1S1.getcSw32TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw33TpCgclausedata() == null) {
//				tbCgcontract.setcSw33("");
//			}else {
//				tbCgcontract.setcSw33(clause_M1S1.getcSw33TpCgclausedata());
//			}
			tbCgcontract.setcSw33(judgeUtil(clause_M1S1.getcSw33TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw34TpCgclausedata() == null) {
//				tbCgcontract.setcSw34("");
//			}else {
//				tbCgcontract.setcSw34(clause_M1S1.getcSw34TpCgclausedata());
//			}
			tbCgcontract.setcSw34(judgeUtil(clause_M1S1.getcSw34TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw35TpCgclausedata() == null) {
//				tbCgcontract.setcSw35("");
//			}else {
//				tbCgcontract.setcSw35(clause_M1S1.getcSw35TpCgclausedata());
//			}
			tbCgcontract.setcSw35(judgeUtil(clause_M1S1.getcSw35TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw36TpCgclausedata() == null) {
//				tbCgcontract.setcSw36("");
//			}else {
//				tbCgcontract.setcSw36(clause_M1S1.getcSw36TpCgclausedata());
//			}
			tbCgcontract.setcSw36(judgeUtil(clause_M1S1.getcSw36TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw37TpCgclausedata() == null) {
//				tbCgcontract.setcSw37("");
//			}else {
//				tbCgcontract.setcSw37(clause_M1S1.getcSw37TpCgclausedata());
//			}
			tbCgcontract.setcSw37(judgeUtil(clause_M1S1.getcSw37TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw38TpCgclausedata() == null) {
//				tbCgcontract.setcSw38("");
//			}else {
//				tbCgcontract.setcSw38(clause_M1S1.getcSw38TpCgclausedata());
//			}
			tbCgcontract.setcSw38(judgeUtil(clause_M1S1.getcSw38TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw39TpCgclausedata() == null) {
//				tbCgcontract.setcSw39("");
//			}else {
//				tbCgcontract.setcSw39(clause_M1S1.getcSw39TpCgclausedata());
//			}
			tbCgcontract.setcSw39(judgeUtil(clause_M1S1.getcSw39TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw40TpCgclausedata() == null) {
//				tbCgcontract.setcSw40("");
//			}else {
//				tbCgcontract.setcSw40(clause_M1S1.getcSw40TpCgclausedata());
//			}
			tbCgcontract.setcSw40(judgeUtil(clause_M1S1.getcSw40TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw41TpCgclausedata() == null) {
//				tbCgcontract.setcSw41("");
//			}else {
//				tbCgcontract.setcSw41(clause_M1S1.getcSw41TpCgclausedata());
//			}
			tbCgcontract.setcSw41(judgeUtil(clause_M1S1.getcSw41TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw42TpCgclausedata() == null) {
//				tbCgcontract.setcSw42("");
//			}else {
//				tbCgcontract.setcSw42(clause_M1S1.getcSw42TpCgclausedata());
//			}
			tbCgcontract.setcSw42(judgeUtil(clause_M1S1.getcSw42TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw43TpCgclausedata() == null) {
//				tbCgcontract.setcSw43("");
//			}else {
//				tbCgcontract.setcSw43(clause_M1S1.getcSw43TpCgclausedata());
//			}
			tbCgcontract.setcSw43(judgeUtil(clause_M1S1.getcSw43TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw44(judgeUtil(clause_M1S1.getcSw44TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw45(judgeUtil(clause_M1S1.getcSw45TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw46(judgeUtil(clause_M1S1.getcSw46TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw47(judgeUtil(clause_M1S1.getcSw47TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw48(judgeUtil(clause_M1S1.getcSw48TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw49(judgeUtil(clause_M1S1.getcSw49TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw50(judgeUtil(clause_M1S1.getcSw51TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcContclass(judgeUtil2(clause_M1S1.getcSw50TpCgclausedata()));
			tbCgcontractList.add(tbCgcontract);
			
//		}
		return tbCgcontractList;
	}

	private static String judgeUtil(String str, String cDelivdate,String cDelivplace,String cPayway) {
		if(str==null) {
			str ="";
		}else if(str.contains("交货期限")){
			str="1、交货期限: "+cDelivdate;
		}else if(str.contains("交货地点:")) {
			str = "2、交货地点: " + cDelivplace;
		}else if(str.contains("付款方式")) {
			str = "1、付款方式: "+cPayway;
		}else {
			
		}
		return str;
	}

	public static String judgeUtil2(String str) {
		
		if(str==null) {
			str ="";
		}
		return str;
		
	}
	public List<TbCgcontract> updateTbCgcontract2(User user, TP_SimContract tP_SimContract,
			DelInformation delInformation) {
		  //合同号等基本信息
		  TpCgcontractmtt data = tP_SimContract.getTpCgcontractmtt();
//		  TpCgcontractmtt contractmtt = tP_SimContract.getContractmtt();
		  //供应商
		  TbSupplier tbSupplier = tP_SimContract.getTbSupplier();
		  //合同条款
		  CLAUSE_M1S1 clause_M1S1 = tP_SimContract.getClause_M1S1();
		  List<TbCgcontract> tbCgcontractList = new ArrayList<>();
			TbCgcontract tbCgcontract = new TbCgcontract();
			//签订公司
			if(data.getcCludecom() == null) {
				tbCgcontract.setcCludecom("");
			}else {
				tbCgcontract.setcCludecom(data.getcCludecom());
			}
			//合同号
			if(data.getcConnum() == null) {
				tbCgcontract.setcConnum("");
			}else {
				tbCgcontract.setcConnum(data.getcConnum());
			}
			//旧合同
			tbCgcontract.setcConsultrmb(tP_SimContract.getTpCgcontractmt().getcConnum());
			System.out.println("新合同："+tbCgcontract.getcConnum()+"旧合同："+tbCgcontract.getcConsultrmb());
			//签订地址
			if(data.getcCludeaddr() == null) {
				tbCgcontract.setcCludeaddr("");
			}else {
				tbCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			}
			//签订时间
			tbCgcontract.setcCludetime(data.getcCludetime());
			//供应商
			if(data.getcSupplier() == null) {
				tbCgcontract.setcSupplier("");
			}else{
				tbCgcontract.setcSupplier(data.getcSupplier());
			}
			/*if("".equals(data.getcOutconnum()) || data.getcOutconnum()== null) {
				tbCgcontract.setcContype(tbCgcontract.getcSupplier()+"-国内模板");
			}else {
				tbCgcontract.setcContype(tbCgcontract.getcSupplier()+"-外贸模板");
			}
			System.out.println("修改后的模板::::"+tbCgcontract.getcContype());*/
//			tbCgcontract.setcContype(tbCgcontract.getcSupplier());
//			if(tP_SimContract.getSignplaceRequest().getcSignplace()==null) {
//				tbCgcontract.setcSignplace("");
//			}else {
//				tbCgcontract.setcSignplace(tP_SimContract.getSignplaceRequest().getcSignplace());//验收地点
//			}
			//供应商账号号
			if(tbSupplier.getcAccountno()==null) {
				tbCgcontract.setcAccountnor("");
			}else {
				tbCgcontract.setcAccountnor(tbSupplier.getcAccountno());
			}
			//供应商地址
			if(tbSupplier.getcSupaddress() == null) {
				tbCgcontract.setcSupaddress("");
			}else {
				tbCgcontract.setcSupaddress(tbSupplier.getcSupaddress());
			}
			//供应商开户行
			if(tbSupplier.getcBankname()==null) {
				tbCgcontract.setcBanknamer("");
			}else {
				tbCgcontract.setcBanknamer(tbSupplier.getcBankname());
			}
			//供应商电话 
			if(tbSupplier.getcSupphone() == null) {
				tbCgcontract.setcSupphone("");
			}else {
				tbCgcontract.setcSupphone(tbSupplier.getcSupphone());
			}
			//供应商税号
			tbCgcontract.setcTaxnumber(tbSupplier.getcTaxnumber());
			//供应商传真
			tbCgcontract.setcFaxnor(tbSupplier.getcFaxno());
			//需方开户行
			tbCgcontract.setcBankname(judgeUtil2(tP_SimContract.getTbCludecompany().getcCombankname()));
			//需方账号
			tbCgcontract.setcAccountno(judgeUtil2(tP_SimContract.getTbCludecompany().getcComaccountno()));
			//需方税号
			tbCgcontract.setcTaxnumbe(judgeUtil2(tP_SimContract.getTbCludecompany().getcComtaxnumber()));
			//需方电话
			tbCgcontract.setcPhoner(judgeUtil2(tP_SimContract.getTbCludecompany().getcComphone()));
			//需方地址
			tbCgcontract.setcAddressr(judgeUtil2(tP_SimContract.getTbCludecompany().getcComaddress()));
			//需方传真
			tbCgcontract.setcFaxno(judgeUtil2(tP_SimContract.getTbCludecompany().getcComfaxno()));
//			tbCgcontract.setcSw10(tpCgorder.getcManor());//采购员
			//修改人
			tbCgcontract.setcModifier(user.getUserName());
			//创建时间
			tbCgcontract.setcModifytime(new Date());
			// 合同状态
			tbCgcontract.setcState("3");
			
			String cDelivdate;//交货期限
			String cDelivplace;//交货地点
			String cPayway;//付款方式
			//交货期限
//			if(contractmtt.getcDelivery() != null && delInformation.getcDelivdate() != null && "qx03".endsWith(contractmtt.getcDelivery())) {
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
//				String asd = sdf.format(contractmtt.getcDeliverytime());
//				System.out.println(asd + " aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//				tbCgcontract.setcDelivdate(delInformation.getcDelivdate().replace("****年**月**日",asd));
//			}else if(contractmtt.getcDelivery() != null && delInformation.getcDelivdate() != null) {
//				if(delInformation.getcDelivdate().indexOf("*") != -1 && contractmtt.getcDeliveryday() != null) {
////					delInformation.getcDelivdate().replace("*", contractmtt.getcDeliveryday());
//					System.out.println(contractmtt.getcDeliveryday() + "  天数");
//					System.out.println(delInformation.getcDelivdate().replace("*", contractmtt.getcDeliveryday()) + " aaaaaaaaaaaaaaaaaaaaaa");
//					tbCgcontract.setcDelivdate(delInformation.getcDelivdate().replace("*", contractmtt.getcDeliveryday()));
//				}
//			}
			if(tP_SimContract.getDelInformation().getcDelivdate() == null) {
				tbCgcontract.setcDelivdate("");
			}else {
				tbCgcontract.setcDelivdate(tP_SimContract.getDelInformation().getcDelivdate());
			}
			cDelivdate = tbCgcontract.getcDelivdate();
			//交货地点
			System.out.println("工具类交货地点：：："+tP_SimContract.getDelInformation().getcDelivplace());
			if(tP_SimContract.getDelInformation().getcDelivplace() == null) {
				tbCgcontract.setcDelivplace("");
			}else {
				tbCgcontract.setcDelivplace(tP_SimContract.getDelInformation().getcDelivplace());
			}
			cDelivplace = delInformation.getcDelivplace();
			//付款方式
			if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
				tbCgcontract.setcPayway("");
			}else {
				tbCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());
			}
			cPayway = tbCgcontract.getcPayway();
			//合同模板类型
//			if(clause_M1S1.getcContypeTpCgclausedata() == null) {
//				tbCgcontract.setcContype("");
//			}else {
			
//			}
//			if(clause_M1S1.getcSw01TpCgclausedata() == null) {
//				tbCgcontract.setcSw01("");
//			}else {
//				tbCgcontract.setcSw01(clause_M1S1.getcSw01TpCgclausedata());
//			}
			tbCgcontract.setcSw01(judgeUtil(clause_M1S1.getcSw01TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw02TpCgclausedata() == null) {
//				tbCgcontract.setcSw02("");
//			}else {
//				tbCgcontract.setcSw02(clause_M1S1.getcSw02TpCgclausedata());
//			}
			tbCgcontract.setcSw02(judgeUtil(clause_M1S1.getcSw02TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw03TpCgclausedata() == null ) {
//				tbCgcontract.setcSw03("");
//			}else {
//				tbCgcontract.setcSw03(clause_M1S1.getcSw03TpCgclausedata());
//			}
			tbCgcontract.setcSw03(judgeUtil(clause_M1S1.getcSw03TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw04TpCgclausedata() == null) {
//				tbCgcontract.setcSw04("");
//			}else {
//				tbCgcontract.setcSw04(clause_M1S1.getcSw04TpCgclausedata());
//			}
			tbCgcontract.setcSw04(judgeUtil(clause_M1S1.getcSw04TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw05TpCgclausedata() == null) {
//				tbCgcontract.setcSw05("");
//			}else {
//				tbCgcontract.setcSw05(clause_M1S1.getcSw05TpCgclausedata());
//			}
			tbCgcontract.setcSw05(judgeUtil(clause_M1S1.getcSw05TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw06TpCgclausedata() == null) {
//				tbCgcontract.setcSw06("");
//			}else {
//				tbCgcontract.setcSw06(clause_M1S1.getcSw06TpCgclausedata());
//			}
			tbCgcontract.setcSw06(judgeUtil(clause_M1S1.getcSw06TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw07TpCgclausedata() == null) {
//				tbCgcontract.setcSw07("");
//			}else {
//				tbCgcontract.setcSw07(clause_M1S1.getcSw07TpCgclausedata());
//			}
			tbCgcontract.setcSw07(judgeUtil(clause_M1S1.getcSw07TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw08("");
//			}else {
//				tbCgcontract.setcSw08(clause_M1S1.getcSw08TpCgclausedata());
//			}
			tbCgcontract.setcSw08(judgeUtil(clause_M1S1.getcSw08TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw08TpCgclausedata() == null) {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw09(clause_M1S1.getcSw08TpCgclausedata());
//			}
			tbCgcontract.setcSw09(judgeUtil(clause_M1S1.getcSw09TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw10TpCgclausedata() == null) {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}else {
//				tbCgcontract.setcSw10(clause_M1S1.getcSw10TpCgclausedata());
//			}
			tbCgcontract.setcSw10(judgeUtil(clause_M1S1.getcSw10TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw11TpCgclausedata() == null ) {
//				tbCgcontract.setcSw11("");
//			}else {
//				tbCgcontract.setcSw11(clause_M1S1.getcSw11TpCgclausedata());
//			}
			tbCgcontract.setcSw11(judgeUtil(clause_M1S1.getcSw11TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw12TpCgclausedata() == null) {
//				tbCgcontract.setcSw12("");
//			}else {
//				tbCgcontract.setcSw12(clause_M1S1.getcSw12TpCgclausedata());
//			}
			tbCgcontract.setcSw12(judgeUtil(clause_M1S1.getcSw12TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw13TpCgclausedata() == null) {
//				tbCgcontract.setcSw13("");
//			}else {
//				tbCgcontract.setcSw13(clause_M1S1.getcSw13TpCgclausedata());
//			}
			tbCgcontract.setcSw13(judgeUtil(clause_M1S1.getcSw13TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw14TpCgclausedata() == null) {
//				tbCgcontract.setcSw14("");
//			}else {
//				tbCgcontract.setcSw14(clause_M1S1.getcSw14TpCgclausedata());
//			}
			tbCgcontract.setcSw14(judgeUtil(clause_M1S1.getcSw14TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw15TpCgclausedata() == null) {
//				tbCgcontract.setcSw15("");
//			}else {
//				tbCgcontract.setcSw15(clause_M1S1.getcSw15TpCgclausedata());
//			}
			tbCgcontract.setcSw15(judgeUtil(clause_M1S1.getcSw15TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw16TpCgclausedata() == null) {
//				tbCgcontract.setcSw16("");
//			}else {
//				tbCgcontract.setcSw16(clause_M1S1.getcSw16TpCgclausedata());
//			}
			tbCgcontract.setcSw16(judgeUtil(clause_M1S1.getcSw16TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw17TpCgclausedata()== null) {
//				tbCgcontract.setcSw17("");
//			}else {
//				tbCgcontract.setcSw17(clause_M1S1.getcSw17TpCgclausedata());
//			}
			tbCgcontract.setcSw17(judgeUtil(clause_M1S1.getcSw17TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw18TpCgclausedata() == null) {
//				tbCgcontract.setcSw18("");
//			}else {
//				tbCgcontract.setcSw18(clause_M1S1.getcSw18TpCgclausedata());
//			}
			tbCgcontract.setcSw18(judgeUtil(clause_M1S1.getcSw18TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw19TpCgclausedata() == null) {
//				tbCgcontract.setcSw19("");
//			}else {
//				tbCgcontract.setcSw19(clause_M1S1.getcSw19TpCgclausedata());
//			}
			tbCgcontract.setcSw19(judgeUtil(clause_M1S1.getcSw19TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw20TpCgclausedata() == null) {
//				tbCgcontract.setcSw20("");
//			}else {
//				tbCgcontract.setcSw20(clause_M1S1.getcSw20TpCgclausedata());
//			}
			tbCgcontract.setcSw20(judgeUtil(clause_M1S1.getcSw20TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw21TpCgclausedata() == null) {
//				tbCgcontract.setcSw21("");
//			}else {
//				tbCgcontract.setcSw21(clause_M1S1.getcSw21TpCgclausedata());
//			}
			tbCgcontract.setcSw21(judgeUtil(clause_M1S1.getcSw21TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw22TpCgclausedata() == null) {
//				tbCgcontract.setcSw22("");
//			}else {
//				tbCgcontract.setcSw22(clause_M1S1.getcSw22TpCgclausedata());
//			}
			tbCgcontract.setcSw22(judgeUtil(clause_M1S1.getcSw22TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw23TpCgclausedata() == null) {
//				tbCgcontract.setcSw23("");
//			}else {
//				tbCgcontract.setcSw23(clause_M1S1.getcSw23TpCgclausedata());
//			}
			tbCgcontract.setcSw23(judgeUtil(clause_M1S1.getcSw23TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw24TpCgclausedata() == null) {
//				tbCgcontract.setcSw24("");
//			}else {
//				tbCgcontract.setcSw24(clause_M1S1.getcSw24TpCgclausedata());
//			}
			tbCgcontract.setcSw24(judgeUtil(clause_M1S1.getcSw24TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw25TpCgclausedata() == null) {
//				tbCgcontract.setcSw25("");
//			}else {
//				tbCgcontract.setcSw25(clause_M1S1.getcSw25TpCgclausedata());
//			}
			tbCgcontract.setcSw25(judgeUtil(clause_M1S1.getcSw25TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw26TpCgclausedata() == null) {
//				tbCgcontract.setcSw26("");
//			}else {
//				tbCgcontract.setcSw26(clause_M1S1.getcSw26TpCgclausedata());
//			}
			tbCgcontract.setcSw26(judgeUtil(clause_M1S1.getcSw26TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw27TpCgclausedata() == null) {
//				tbCgcontract.setcSw27("");
//			}else {
//				tbCgcontract.setcSw27(clause_M1S1.getcSw27TpCgclausedata());
//			}
			tbCgcontract.setcSw27(judgeUtil(clause_M1S1.getcSw27TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw28TpCgclausedata() == null) {
//				tbCgcontract.setcSw28("");
//			}else {
//				tbCgcontract.setcSw28(clause_M1S1.getcSw28TpCgclausedata());
//			}
			tbCgcontract.setcSw28(judgeUtil(clause_M1S1.getcSw28TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw29TpCgclausedata() == null) {
//				tbCgcontract.setcSw29("");
//			}else {
//				tbCgcontract.setcSw29(clause_M1S1.getcSw29TpCgclausedata());
//			}
			tbCgcontract.setcSw29(judgeUtil(clause_M1S1.getcSw29TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw30TpCgclausedata() == null) {
//				tbCgcontract.setcSw30("");
//			}else {
//				tbCgcontract.setcSw30(clause_M1S1.getcSw30TpCgclausedata());
//			}
			tbCgcontract.setcSw30(judgeUtil(clause_M1S1.getcSw30TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw31TpCgclausedata() == null) {
//				tbCgcontract.setcSw31("");
//			}else {
//				tbCgcontract.setcSw31(clause_M1S1.getcSw31TpCgclausedata());
//			}
			tbCgcontract.setcSw31(judgeUtil(clause_M1S1.getcSw31TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw32TpCgclausedata() == null) {
//				tbCgcontract.setcSw32("");
//			}else {
//				tbCgcontract.setcSw32(clause_M1S1.getcSw32TpCgclausedata());
//			}
			tbCgcontract.setcSw32(judgeUtil(clause_M1S1.getcSw32TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw33TpCgclausedata() == null) {
//				tbCgcontract.setcSw33("");
//			}else {
//				tbCgcontract.setcSw33(clause_M1S1.getcSw33TpCgclausedata());
//			}
			tbCgcontract.setcSw33(judgeUtil(clause_M1S1.getcSw33TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw34TpCgclausedata() == null) {
//				tbCgcontract.setcSw34("");
//			}else {
//				tbCgcontract.setcSw34(clause_M1S1.getcSw34TpCgclausedata());
//			}
			tbCgcontract.setcSw34(judgeUtil(clause_M1S1.getcSw34TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw35TpCgclausedata() == null) {
//				tbCgcontract.setcSw35("");
//			}else {
//				tbCgcontract.setcSw35(clause_M1S1.getcSw35TpCgclausedata());
//			}
			tbCgcontract.setcSw35(judgeUtil(clause_M1S1.getcSw35TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw36TpCgclausedata() == null) {
//				tbCgcontract.setcSw36("");
//			}else {
//				tbCgcontract.setcSw36(clause_M1S1.getcSw36TpCgclausedata());
//			}
			tbCgcontract.setcSw36(judgeUtil(clause_M1S1.getcSw36TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw37TpCgclausedata() == null) {
//				tbCgcontract.setcSw37("");
//			}else {
//				tbCgcontract.setcSw37(clause_M1S1.getcSw37TpCgclausedata());
//			}
			tbCgcontract.setcSw37(judgeUtil(clause_M1S1.getcSw37TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw38TpCgclausedata() == null) {
//				tbCgcontract.setcSw38("");
//			}else {
//				tbCgcontract.setcSw38(clause_M1S1.getcSw38TpCgclausedata());
//			}
			tbCgcontract.setcSw38(judgeUtil(clause_M1S1.getcSw38TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw39TpCgclausedata() == null) {
//				tbCgcontract.setcSw39("");
//			}else {
//				tbCgcontract.setcSw39(clause_M1S1.getcSw39TpCgclausedata());
//			}
			tbCgcontract.setcSw39(judgeUtil(clause_M1S1.getcSw39TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw40TpCgclausedata() == null) {
//				tbCgcontract.setcSw40("");
//			}else {
//				tbCgcontract.setcSw40(clause_M1S1.getcSw40TpCgclausedata());
//			}
			tbCgcontract.setcSw40(judgeUtil(clause_M1S1.getcSw40TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw41TpCgclausedata() == null) {
//				tbCgcontract.setcSw41("");
//			}else {
//				tbCgcontract.setcSw41(clause_M1S1.getcSw41TpCgclausedata());
//			}
			tbCgcontract.setcSw41(judgeUtil(clause_M1S1.getcSw41TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw42TpCgclausedata() == null) {
//				tbCgcontract.setcSw42("");
//			}else {
//				tbCgcontract.setcSw42(clause_M1S1.getcSw42TpCgclausedata());
//			}
			tbCgcontract.setcSw42(judgeUtil(clause_M1S1.getcSw42TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
//			if(clause_M1S1.getcSw43TpCgclausedata() == null) {
//				tbCgcontract.setcSw43("");
//			}else {
//				tbCgcontract.setcSw43(clause_M1S1.getcSw43TpCgclausedata());
//			}
			tbCgcontract.setcSw43(judgeUtil(clause_M1S1.getcSw43TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw44(judgeUtil(clause_M1S1.getcSw44TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw45(judgeUtil(clause_M1S1.getcSw45TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw46(judgeUtil(clause_M1S1.getcSw46TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw47(judgeUtil(clause_M1S1.getcSw47TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw48(judgeUtil(clause_M1S1.getcSw48TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw49(judgeUtil(clause_M1S1.getcSw49TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcSw50(judgeUtil(clause_M1S1.getcSw51TpCgclausedata(),cDelivdate,cDelivplace,cPayway));
			tbCgcontract.setcContclass(judgeUtil2(clause_M1S1.getcSw50TpCgclausedata()));
			tbCgcontractList.add(tbCgcontract);
			
//		}
		return tbCgcontractList;
	}

	public TpCgcontractmtt updateTpCgcontractmtt(User user, TP_SimContract tP_SimContract,
			DelInformation delInformation, TpCgcontractmt tpCgcontractmt) {
		TpCgcontractmtt tpCgcontract = new TpCgcontractmtt();
		//合同主表信息
		TpCgcontractmtt data = tP_SimContract.getTpCgcontractmtt();
		//合同物资信息
		TpCgorderRequest tpCgorderRequest = tP_SimContract.getTpCgorderRequest().get(0);
		//新合同号
		tpCgcontract.setcConnum(data.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//合同号
		//签订公司
//		System.out.println("签订公司========="+tpCgcontractmt.getcCludecom());
		tpCgcontract.setcCludecom(tpCgcontractmt.getcCludecom());
		//外贸合同号
		if("".equals(data.getcOutconnum())||data.getcOutconnum()== null) {
			tpCgcontract.setcOutconnum("");
			tpCgcontract.setcSw17("");
		}else {
			tpCgcontract.setcOutconnum(data.getcOutconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			String getcConnum = tpCgcontract.getcConnum();
			int indexOf1 = getcConnum.indexOf("-");
			int indexOf2 = getcConnum.indexOf("-",indexOf1+1);
			String substring = getcConnum.substring(indexOf1+1, indexOf2);
			tpCgcontract.setcSw17(substring);
		}
		//签订地址
//		if(data.getcCludeaddr() == null) {
//			tpCgcontract.setcCludeaddr("");
//		}else {
//			tpCgcontract.setcCludeaddr(data.getcCludeaddr().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));//签订地址
//		}
		if(data.getcSignplace() == null) {
			tpCgcontract.setcSignplace("");
		}else {
			tpCgcontract.setcSignplace(data.getcSignplace());//签订地址
		}
		//签订时间
		if(data.getcCludetime() == null) {
			tpCgcontract.setcCludetime(null);
		}else {
			tpCgcontract.setcCludetime(data.getcCludetime());
		}
		//预计到货时间
//		if("qx03".equals(contractmtt.getcDelivery()) && contractmtt.getcDeliverytime() != null ) {
//			tpCgcontract.setcDelivery(contractmtt.getcDelivery());
//			tpCgcontract.setcDeliverytime(contractmtt.getcDeliverytime());
//			tpCgcontract.setcDr(contractmtt.getcDeliverytime());
//			tpCgcontract.setcDeliveryday("");
//		}else if(!"qx03".equals(contractmtt.getcDelivery()) && contractmtt.getcDeliveryday() != null ){
//			tpCgcontract.setcDelivery(contractmtt.getcDelivery());
//			tpCgcontract.setcDeliveryday(contractmtt.getcDeliveryday());
//			tpCgcontract.setcDeliverytime(null);
//		}
		if(data.getcDr() == null ) {
			tpCgcontract.setcDr(null);
		}else {
			tpCgcontract.setcDr(data.getcDr());
		}
		if(data.getcSupplier() == null) {
			tpCgcontract.setcSupplier("");
		}else {
			tpCgcontract.setcSupplier(data.getcSupplier());//供应商
		}
		if(tpCgorderRequest.getcGoodsname() == null) {
			tpCgcontract.setcSw03("");
		}else {
			tpCgcontract.setcSw03(tpCgorderRequest.getcGoodsname());// 货物名称
		}
		if(data.getcSw20() == null) {
			tpCgcontract.setcSw20("");
		}else {
			tpCgcontract.setcSw20(data.getcSw20());
		}
		//采购员
		tpCgcontract.setcSw10(tP_SimContract.getTpCgcontractmt().getcSw10());
		if(tP_SimContract.getPaywayRequest().getcPayway()==null) {
			tpCgcontract.setcPayway("");
		}else {
			tpCgcontract.setcPayway(tP_SimContract.getPaywayRequest().getcPayway());//付款方式
		}
		if(tP_SimContract.getDelInformation().getcDelivdate()==null) {
			tpCgcontract.setcSw22("");
		}else {
			tpCgcontract.setcSw22(tP_SimContract.getDelInformation().getcDelivdate());//交货期限
		}
		BigDecimal bigValue = new BigDecimal(0);
		for (TpCgorderRequest tpCgorder : tP_SimContract.getTpCgorderRequest()) {
			String getcSumprice = tpCgorder.getcSumprice();
			if(getcSumprice == null) {
				getcSumprice ="0.00";
			}
			bigValue = bigValue.add(new BigDecimal(getcSumprice));
		}
		tpCgcontract.setcConmoney(ri.formatForTwo(bigValue));
		//送/收货地点 目的地
		if(delInformation.getcDelivplace() == null) {
			tpCgcontract.setcCludeaddr("");
//			tpCgcontract.setcSw09("");
		}else {
			tpCgcontract.setcCludeaddr(delInformation.getcDelivplace());//交货地点
//			tpCgcontract.setcSw09(delInformation.getcDelivplace());
		}
		// 验收方式
		tpCgcontract.setcCheckway("0");
		// 签字步骤-付款情况
		tpCgcontract.setcSignstep("0");
		// 运输方式-开票信息
		tpCgcontract.setcTransway("0");
		// 备注
		tpCgcontract.setcRemark(null);
		// 合同状态
		tpCgcontract.setcState("3");
//		tpCgcontract.setcCreater(user.getUserName());
//		// 创建时间
//		tpCgcontract.setcCreatetime(new Date());
		//修改时间
		tpCgcontract.setcModifier(user.getUserName());
		tpCgcontract.setcModifytime(new Date());
		// 转卖合同号
		if( "".equals(tP_SimContract.getcZqconnum()) || tP_SimContract.getcZqconnum() == null) {
			tpCgcontract.setcSw05("");
			tpCgcontract.setcSw21("");
		}else {
			tpCgcontract.setcSw05(tP_SimContract.getcZqconnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
			String getcConnum = tP_SimContract.getcZqconnum();
			int indexOf1 = getcConnum.indexOf("-");
			int indexOf2 = getcConnum.indexOf("-",indexOf1+1);
			String substring = getcConnum.substring(indexOf1+1, indexOf2);
			tpCgcontract.setcSw17(substring);
			//出口商
			String cks = getcConnum.substring(0,indexOf1);
			String str = ri.getCKS(cks);
			System.out.println("出口商1111：：：：："+str);
			if(str == null) {
				tpCgcontract.setcSw21("");
			}else {
				tpCgcontract.setcSw21(str);
			}
			System.out.println("出口商2：：：；"+tpCgcontract.getcSw21());
		}
		tpCgcontract.setcId(tpCgcontractmt.getcId());
		return tpCgcontract;
	}
/**
 * 合同条款维护
 * @param user
 * @param tbCgcontract
 * @param addTpCgcontractmt 
 * @return
 */
	public CLAUSE_M1S1 updateCLAUSE_M1S1(User user, TbCgcontract tbCgcontract, TpCgcontractmtt addTpCgcontractmt) {
		 CLAUSE_M1S1 clause_M1S1 = new  CLAUSE_M1S1();
//		String str =  addTpCgcontractmt.getcConnum() + addTpCgcontractmt.getcSupplier();
//		if("".equals(addTpCgcontractmt.getcOutconnum()) || addTpCgcontractmt.getcOutconnum() == null) {
//			clause_M1S1.setcContypeTpCgclausedata(addTpCgcontractmt.getcSupplier()+"-国内模板");
//		}else {
//			clause_M1S1.setcContypeTpCgclausedata(addTpCgcontractmt.getcSupplier()+"-外贸模板");
//		}
		 clause_M1S1.setcContypeTpCgclausedata(tbCgcontract.getcContype());
		System.out.println("新增新模板类型:::"+clause_M1S1.getcContypeTpCgclausedata());
		 
//		 clause_M1S1.setcModifierTpCgclausedata(user.getUserName());
//		 clause_M1S1.setcModifydateTpCgclausedata(new Date());
		 clause_M1S1.setcCreaterTpCgclausedata(user.getUserName());
		 clause_M1S1.setcCreatetimeTpCgclausedata(new Date());
		 clause_M1S1.setcSw01TpCgclausedata(judgeUtil2(tbCgcontract.getcSw01()));
		 clause_M1S1.setcSw02TpCgclausedata(judgeUtil2(tbCgcontract.getcSw02()));
		 clause_M1S1.setcSw03TpCgclausedata(judgeUtil2(tbCgcontract.getcSw03()));
		 clause_M1S1.setcSw04TpCgclausedata(judgeUtil2(tbCgcontract.getcSw04()));
		 clause_M1S1.setcSw05TpCgclausedata(judgeUtil2(tbCgcontract.getcSw05()));
		 clause_M1S1.setcSw06TpCgclausedata(judgeUtil2(tbCgcontract.getcSw06()));
		 clause_M1S1.setcSw07TpCgclausedata(judgeUtil2(tbCgcontract.getcSw07()));
		 clause_M1S1.setcSw08TpCgclausedata(judgeUtil2(tbCgcontract.getcSw08()));
		 clause_M1S1.setcSw09TpCgclausedata(judgeUtil2(tbCgcontract.getcSw09()));
		 clause_M1S1.setcSw10TpCgclausedata(judgeUtil2(tbCgcontract.getcSw10()));
		 clause_M1S1.setcSw11TpCgclausedata(judgeUtil2(tbCgcontract.getcSw11()));
		 clause_M1S1.setcSw12TpCgclausedata(judgeUtil2(tbCgcontract.getcSw12()));
		 clause_M1S1.setcSw13TpCgclausedata(judgeUtil2(tbCgcontract.getcSw13()));
		 clause_M1S1.setcSw14TpCgclausedata(judgeUtil2(tbCgcontract.getcSw14()));
		 clause_M1S1.setcSw15TpCgclausedata(judgeUtil2(tbCgcontract.getcSw15()));
		 clause_M1S1.setcSw16TpCgclausedata(judgeUtil2(tbCgcontract.getcSw16()));
		 clause_M1S1.setcSw17TpCgclausedata(judgeUtil2(tbCgcontract.getcSw17()));
		 clause_M1S1.setcSw18TpCgclausedata(judgeUtil2(tbCgcontract.getcSw18()));
		 clause_M1S1.setcSw19TpCgclausedata(judgeUtil2(tbCgcontract.getcSw19()));
		 clause_M1S1.setcSw20TpCgclausedata(judgeUtil2(tbCgcontract.getcSw20()));
		 clause_M1S1.setcSw21TpCgclausedata(judgeUtil2(tbCgcontract.getcSw21()));
		 clause_M1S1.setcSw22TpCgclausedata(judgeUtil2(tbCgcontract.getcSw22()));
		 clause_M1S1.setcSw23TpCgclausedata(judgeUtil2(tbCgcontract.getcSw23()));
		 clause_M1S1.setcSw24TpCgclausedata(judgeUtil2(tbCgcontract.getcSw24()));
		 clause_M1S1.setcSw25TpCgclausedata(judgeUtil2(tbCgcontract.getcSw25()));
		 clause_M1S1.setcSw26TpCgclausedata(judgeUtil2(tbCgcontract.getcSw26()));
		 clause_M1S1.setcSw27TpCgclausedata(judgeUtil2(tbCgcontract.getcSw27()));
		 clause_M1S1.setcSw28TpCgclausedata(judgeUtil2(tbCgcontract.getcSw28()));
		 clause_M1S1.setcSw29TpCgclausedata(judgeUtil2(tbCgcontract.getcSw29()));
		 clause_M1S1.setcSw30TpCgclausedata(judgeUtil2(tbCgcontract.getcSw30()));
		 clause_M1S1.setcSw31TpCgclausedata(judgeUtil2(tbCgcontract.getcSw31()));
		 clause_M1S1.setcSw32TpCgclausedata(judgeUtil2(tbCgcontract.getcSw32()));
		 clause_M1S1.setcSw33TpCgclausedata(judgeUtil2(tbCgcontract.getcSw33()));
		 clause_M1S1.setcSw34TpCgclausedata(judgeUtil2(tbCgcontract.getcSw34()));
		 clause_M1S1.setcSw35TpCgclausedata(judgeUtil2(tbCgcontract.getcSw35()));
		 clause_M1S1.setcSw36TpCgclausedata(judgeUtil2(tbCgcontract.getcSw36()));
		 clause_M1S1.setcSw37TpCgclausedata(judgeUtil2(tbCgcontract.getcSw37()));
		 clause_M1S1.setcSw38TpCgclausedata(judgeUtil2(tbCgcontract.getcSw38()));
		 clause_M1S1.setcSw39TpCgclausedata(judgeUtil2(tbCgcontract.getcSw39()));
		 clause_M1S1.setcSw40TpCgclausedata(judgeUtil2(tbCgcontract.getcSw40()));
		 clause_M1S1.setcSw41TpCgclausedata(judgeUtil2(tbCgcontract.getcSw41()));
		 clause_M1S1.setcSw42TpCgclausedata(judgeUtil2(tbCgcontract.getcSw42()));
		 clause_M1S1.setcSw43TpCgclausedata(judgeUtil2(tbCgcontract.getcSw43()));
		 clause_M1S1.setcSw44TpCgclausedata(judgeUtil2(tbCgcontract.getcSw44()));
		 clause_M1S1.setcSw45TpCgclausedata(judgeUtil2(tbCgcontract.getcSw45()));
		 clause_M1S1.setcSw46TpCgclausedata(judgeUtil2(tbCgcontract.getcSw46()));
		 clause_M1S1.setcSw47TpCgclausedata(judgeUtil2(tbCgcontract.getcSw47()));
		 clause_M1S1.setcSw48TpCgclausedata(judgeUtil2(tbCgcontract.getcSw48()));
		 clause_M1S1.setcSw49TpCgclausedata(judgeUtil2(tbCgcontract.getcSw49()));
		 clause_M1S1.setcSw51TpCgclausedata(judgeUtil2(tbCgcontract.getcSw50()));
		 clause_M1S1.setcSw50TpCgclausedata(judgeUtil2(tbCgcontract.getcContclass()));
		return clause_M1S1;
	}

	public CLAUSE_M1S1 updateCLAUSE_M1S1(User user, TbCgcontract tbCgcontract) {
		 CLAUSE_M1S1 clause_M1S1 = new  CLAUSE_M1S1();
		 clause_M1S1.setcContypeTpCgclausedata(tbCgcontract.getcContype());
		 clause_M1S1.setcModifierTpCgclausedata(user.getUserName());
		 clause_M1S1.setcModifydateTpCgclausedata(new Date());
		 clause_M1S1.setcSw01TpCgclausedata(judgeUtil2(tbCgcontract.getcSw01()));
		 clause_M1S1.setcSw02TpCgclausedata(judgeUtil2(tbCgcontract.getcSw02()));
		 clause_M1S1.setcSw03TpCgclausedata(judgeUtil2(tbCgcontract.getcSw03()));
		 clause_M1S1.setcSw04TpCgclausedata(judgeUtil2(tbCgcontract.getcSw04()));
		 clause_M1S1.setcSw05TpCgclausedata(judgeUtil2(tbCgcontract.getcSw05()));
		 clause_M1S1.setcSw06TpCgclausedata(judgeUtil2(tbCgcontract.getcSw06()));
		 clause_M1S1.setcSw07TpCgclausedata(judgeUtil2(tbCgcontract.getcSw07()));
		 clause_M1S1.setcSw08TpCgclausedata(judgeUtil2(tbCgcontract.getcSw08()));
		 clause_M1S1.setcSw09TpCgclausedata(judgeUtil2(tbCgcontract.getcSw09()));
		 clause_M1S1.setcSw10TpCgclausedata(judgeUtil2(tbCgcontract.getcSw10()));
		 clause_M1S1.setcSw11TpCgclausedata(judgeUtil2(tbCgcontract.getcSw11()));
		 clause_M1S1.setcSw12TpCgclausedata(judgeUtil2(tbCgcontract.getcSw12()));
		 clause_M1S1.setcSw13TpCgclausedata(judgeUtil2(tbCgcontract.getcSw13()));
		 clause_M1S1.setcSw14TpCgclausedata(judgeUtil2(tbCgcontract.getcSw14()));
		 clause_M1S1.setcSw15TpCgclausedata(judgeUtil2(tbCgcontract.getcSw15()));
		 clause_M1S1.setcSw16TpCgclausedata(judgeUtil2(tbCgcontract.getcSw16()));
		 clause_M1S1.setcSw17TpCgclausedata(judgeUtil2(tbCgcontract.getcSw17()));
		 clause_M1S1.setcSw18TpCgclausedata(judgeUtil2(tbCgcontract.getcSw18()));
		 clause_M1S1.setcSw19TpCgclausedata(judgeUtil2(tbCgcontract.getcSw19()));
		 clause_M1S1.setcSw20TpCgclausedata(judgeUtil2(tbCgcontract.getcSw20()));
		 clause_M1S1.setcSw21TpCgclausedata(judgeUtil2(tbCgcontract.getcSw21()));
		 clause_M1S1.setcSw22TpCgclausedata(judgeUtil2(tbCgcontract.getcSw22()));
		 clause_M1S1.setcSw23TpCgclausedata(judgeUtil2(tbCgcontract.getcSw23()));
		 clause_M1S1.setcSw24TpCgclausedata(judgeUtil2(tbCgcontract.getcSw24()));
		 clause_M1S1.setcSw25TpCgclausedata(judgeUtil2(tbCgcontract.getcSw25()));
		 clause_M1S1.setcSw26TpCgclausedata(judgeUtil2(tbCgcontract.getcSw26()));
		 clause_M1S1.setcSw27TpCgclausedata(judgeUtil2(tbCgcontract.getcSw27()));
		 clause_M1S1.setcSw28TpCgclausedata(judgeUtil2(tbCgcontract.getcSw28()));
		 clause_M1S1.setcSw29TpCgclausedata(judgeUtil2(tbCgcontract.getcSw29()));
		 clause_M1S1.setcSw30TpCgclausedata(judgeUtil2(tbCgcontract.getcSw30()));
		 clause_M1S1.setcSw31TpCgclausedata(judgeUtil2(tbCgcontract.getcSw31()));
		 clause_M1S1.setcSw32TpCgclausedata(judgeUtil2(tbCgcontract.getcSw32()));
		 clause_M1S1.setcSw33TpCgclausedata(judgeUtil2(tbCgcontract.getcSw33()));
		 clause_M1S1.setcSw34TpCgclausedata(judgeUtil2(tbCgcontract.getcSw34()));
		 clause_M1S1.setcSw35TpCgclausedata(judgeUtil2(tbCgcontract.getcSw35()));
		 clause_M1S1.setcSw36TpCgclausedata(judgeUtil2(tbCgcontract.getcSw36()));
		 clause_M1S1.setcSw37TpCgclausedata(judgeUtil2(tbCgcontract.getcSw37()));
		 clause_M1S1.setcSw38TpCgclausedata(judgeUtil2(tbCgcontract.getcSw38()));
		 clause_M1S1.setcSw39TpCgclausedata(judgeUtil2(tbCgcontract.getcSw39()));
		 clause_M1S1.setcSw40TpCgclausedata(judgeUtil2(tbCgcontract.getcSw40()));
		 clause_M1S1.setcSw41TpCgclausedata(judgeUtil2(tbCgcontract.getcSw41()));
		 clause_M1S1.setcSw42TpCgclausedata(judgeUtil2(tbCgcontract.getcSw42()));
		 clause_M1S1.setcSw43TpCgclausedata(judgeUtil2(tbCgcontract.getcSw43()));
		 clause_M1S1.setcSw44TpCgclausedata(judgeUtil2(tbCgcontract.getcSw44()));
		 clause_M1S1.setcSw45TpCgclausedata(judgeUtil2(tbCgcontract.getcSw45()));
		 clause_M1S1.setcSw46TpCgclausedata(judgeUtil2(tbCgcontract.getcSw46()));
		 clause_M1S1.setcSw47TpCgclausedata(judgeUtil2(tbCgcontract.getcSw47()));
		 clause_M1S1.setcSw48TpCgclausedata(judgeUtil2(tbCgcontract.getcSw48()));
		 clause_M1S1.setcSw49TpCgclausedata(judgeUtil2(tbCgcontract.getcSw49()));
		 clause_M1S1.setcSw51TpCgclausedata(judgeUtil2(tbCgcontract.getcSw50()));
		return clause_M1S1;
	}

	/**
	 * 修改返回值
	 * @param clause_M1S1
	 * @param tbCgcontract
	 * @param cDelivplace
	 * @return
	 */
public TbCgcontract addClauseInfo(CLAUSE_M1S1 clause_M1S1, TbCgcontract tbCgcontractdate, String cDelivplace) {
	TbCgcontract tbCgcontract = new TbCgcontract();
	tbCgcontract.setcSw01(judgeUtil(clause_M1S1.getcSw01TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw02(judgeUtil(clause_M1S1.getcSw02TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw03(judgeUtil(clause_M1S1.getcSw03TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw04(judgeUtil(clause_M1S1.getcSw04TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw05(judgeUtil(clause_M1S1.getcSw05TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw06(judgeUtil(clause_M1S1.getcSw06TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw07(judgeUtil(clause_M1S1.getcSw07TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw08(judgeUtil(clause_M1S1.getcSw08TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw09(judgeUtil(clause_M1S1.getcSw09TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw10(judgeUtil(clause_M1S1.getcSw10TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw11(judgeUtil(clause_M1S1.getcSw11TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw12(judgeUtil(clause_M1S1.getcSw12TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw13(judgeUtil(clause_M1S1.getcSw13TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw14(judgeUtil(clause_M1S1.getcSw14TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw15(judgeUtil(clause_M1S1.getcSw15TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw16(judgeUtil(clause_M1S1.getcSw16TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw17(judgeUtil(clause_M1S1.getcSw17TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw18(judgeUtil(clause_M1S1.getcSw18TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw19(judgeUtil(clause_M1S1.getcSw19TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw20(judgeUtil(clause_M1S1.getcSw20TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw21(judgeUtil(clause_M1S1.getcSw21TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw22(judgeUtil(clause_M1S1.getcSw22TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw23(judgeUtil(clause_M1S1.getcSw23TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw24(judgeUtil(clause_M1S1.getcSw24TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw25(judgeUtil(clause_M1S1.getcSw25TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw26(judgeUtil(clause_M1S1.getcSw26TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw27(judgeUtil(clause_M1S1.getcSw27TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw28(judgeUtil(clause_M1S1.getcSw28TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw29(judgeUtil(clause_M1S1.getcSw29TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw30(judgeUtil(clause_M1S1.getcSw30TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw31(judgeUtil(clause_M1S1.getcSw31TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw32(judgeUtil(clause_M1S1.getcSw32TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw33(judgeUtil(clause_M1S1.getcSw33TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw34(judgeUtil(clause_M1S1.getcSw34TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw35(judgeUtil(clause_M1S1.getcSw35TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw36(judgeUtil(clause_M1S1.getcSw36TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw37(judgeUtil(clause_M1S1.getcSw37TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw38(judgeUtil(clause_M1S1.getcSw38TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw39(judgeUtil(clause_M1S1.getcSw39TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw40(judgeUtil(clause_M1S1.getcSw40TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw41(judgeUtil(clause_M1S1.getcSw41TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw42(judgeUtil(clause_M1S1.getcSw42TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw43(judgeUtil(clause_M1S1.getcSw43TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw44(judgeUtil(clause_M1S1.getcSw44TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw45(judgeUtil(clause_M1S1.getcSw45TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw46(judgeUtil(clause_M1S1.getcSw46TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw47(judgeUtil(clause_M1S1.getcSw47TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw48(judgeUtil(clause_M1S1.getcSw48TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw49(judgeUtil(clause_M1S1.getcSw49TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	tbCgcontract.setcSw50(judgeUtil(clause_M1S1.getcSw51TpCgclausedata(),tbCgcontractdate.getcDelivdate(),cDelivplace,tbCgcontractdate.getcPayway()));
	return tbCgcontract;
	
}
public static Date dateUnit(int str,Date date) {
	if(str >= 0) {
		Calendar rightNow = Calendar.getInstance();
        rightNow.setTime(date);
        rightNow.add(Calendar.DAY_OF_YEAR,str);//日期加固定天数天
        Date dt=rightNow.getTime();
		return dt;
	}
	return date;
}

public CLAUSE_M1S1 updateCLAUSE_M1S12(User user, TbCgcontract tbCgcontract, TpCgcontractmtt addTpCgcontractmt) {
	 CLAUSE_M1S1 clause_M1S1 = new  CLAUSE_M1S1();
//	String str =  addTpCgcontractmt.getcConnum() + addTpCgcontractmt.getcSupplier();
	 clause_M1S1.setcContypeTpCgclausedata(tbCgcontract.getcContype());
	 System.out.println("新模板类型"+clause_M1S1.getcContypeTpCgclausedata());
	 clause_M1S1.setcModifierTpCgclausedata(user.getUserName());
	 clause_M1S1.setcModifydateTpCgclausedata(new Date());
//	 clause_M1S1.setcCreaterTpCgclausedata(user.getUserName());
//	 clause_M1S1.setcCreatetimeTpCgclausedata(new Date());
	 clause_M1S1.setcSw01TpCgclausedata(judgeUtil2(tbCgcontract.getcSw01()));
	 clause_M1S1.setcSw02TpCgclausedata(judgeUtil2(tbCgcontract.getcSw02()));
	 clause_M1S1.setcSw03TpCgclausedata(judgeUtil2(tbCgcontract.getcSw03()));
	 clause_M1S1.setcSw04TpCgclausedata(judgeUtil2(tbCgcontract.getcSw04()));
	 clause_M1S1.setcSw05TpCgclausedata(judgeUtil2(tbCgcontract.getcSw05()));
	 clause_M1S1.setcSw06TpCgclausedata(judgeUtil2(tbCgcontract.getcSw06()));
	 clause_M1S1.setcSw07TpCgclausedata(judgeUtil2(tbCgcontract.getcSw07()));
	 clause_M1S1.setcSw08TpCgclausedata(judgeUtil2(tbCgcontract.getcSw08()));
	 clause_M1S1.setcSw09TpCgclausedata(judgeUtil2(tbCgcontract.getcSw09()));
	 clause_M1S1.setcSw10TpCgclausedata(judgeUtil2(tbCgcontract.getcSw10()));
	 clause_M1S1.setcSw11TpCgclausedata(judgeUtil2(tbCgcontract.getcSw11()));
	 clause_M1S1.setcSw12TpCgclausedata(judgeUtil2(tbCgcontract.getcSw12()));
	 clause_M1S1.setcSw13TpCgclausedata(judgeUtil2(tbCgcontract.getcSw13()));
	 clause_M1S1.setcSw14TpCgclausedata(judgeUtil2(tbCgcontract.getcSw14()));
	 clause_M1S1.setcSw15TpCgclausedata(judgeUtil2(tbCgcontract.getcSw15()));
	 clause_M1S1.setcSw16TpCgclausedata(judgeUtil2(tbCgcontract.getcSw16()));
	 clause_M1S1.setcSw17TpCgclausedata(judgeUtil2(tbCgcontract.getcSw17()));
	 clause_M1S1.setcSw18TpCgclausedata(judgeUtil2(tbCgcontract.getcSw18()));
	 clause_M1S1.setcSw19TpCgclausedata(judgeUtil2(tbCgcontract.getcSw19()));
	 clause_M1S1.setcSw20TpCgclausedata(judgeUtil2(tbCgcontract.getcSw20()));
	 clause_M1S1.setcSw21TpCgclausedata(judgeUtil2(tbCgcontract.getcSw21()));
	 clause_M1S1.setcSw22TpCgclausedata(judgeUtil2(tbCgcontract.getcSw22()));
	 clause_M1S1.setcSw23TpCgclausedata(judgeUtil2(tbCgcontract.getcSw23()));
	 clause_M1S1.setcSw24TpCgclausedata(judgeUtil2(tbCgcontract.getcSw24()));
	 clause_M1S1.setcSw25TpCgclausedata(judgeUtil2(tbCgcontract.getcSw25()));
	 clause_M1S1.setcSw26TpCgclausedata(judgeUtil2(tbCgcontract.getcSw26()));
	 clause_M1S1.setcSw27TpCgclausedata(judgeUtil2(tbCgcontract.getcSw27()));
	 clause_M1S1.setcSw28TpCgclausedata(judgeUtil2(tbCgcontract.getcSw28()));
	 clause_M1S1.setcSw29TpCgclausedata(judgeUtil2(tbCgcontract.getcSw29()));
	 clause_M1S1.setcSw30TpCgclausedata(judgeUtil2(tbCgcontract.getcSw30()));
	 clause_M1S1.setcSw31TpCgclausedata(judgeUtil2(tbCgcontract.getcSw31()));
	 clause_M1S1.setcSw32TpCgclausedata(judgeUtil2(tbCgcontract.getcSw32()));
	 clause_M1S1.setcSw33TpCgclausedata(judgeUtil2(tbCgcontract.getcSw33()));
	 clause_M1S1.setcSw34TpCgclausedata(judgeUtil2(tbCgcontract.getcSw34()));
	 clause_M1S1.setcSw35TpCgclausedata(judgeUtil2(tbCgcontract.getcSw35()));
	 clause_M1S1.setcSw36TpCgclausedata(judgeUtil2(tbCgcontract.getcSw36()));
	 clause_M1S1.setcSw37TpCgclausedata(judgeUtil2(tbCgcontract.getcSw37()));
	 clause_M1S1.setcSw38TpCgclausedata(judgeUtil2(tbCgcontract.getcSw38()));
	 clause_M1S1.setcSw39TpCgclausedata(judgeUtil2(tbCgcontract.getcSw39()));
	 clause_M1S1.setcSw40TpCgclausedata(judgeUtil2(tbCgcontract.getcSw40()));
	 clause_M1S1.setcSw41TpCgclausedata(judgeUtil2(tbCgcontract.getcSw41()));
	 clause_M1S1.setcSw42TpCgclausedata(judgeUtil2(tbCgcontract.getcSw42()));
	 clause_M1S1.setcSw43TpCgclausedata(judgeUtil2(tbCgcontract.getcSw43()));
	 clause_M1S1.setcSw44TpCgclausedata(judgeUtil2(tbCgcontract.getcSw44()));
	 clause_M1S1.setcSw45TpCgclausedata(judgeUtil2(tbCgcontract.getcSw45()));
	 clause_M1S1.setcSw46TpCgclausedata(judgeUtil2(tbCgcontract.getcSw46()));
	 clause_M1S1.setcSw47TpCgclausedata(judgeUtil2(tbCgcontract.getcSw47()));
	 clause_M1S1.setcSw48TpCgclausedata(judgeUtil2(tbCgcontract.getcSw48()));
	 clause_M1S1.setcSw49TpCgclausedata(judgeUtil2(tbCgcontract.getcSw49()));
	 clause_M1S1.setcSw51TpCgclausedata(judgeUtil2(tbCgcontract.getcSw50()));
	 clause_M1S1.setcSw50TpCgclausedata(judgeUtil2(tbCgcontract.getcContclass()));
	return clause_M1S1;
}
	

}

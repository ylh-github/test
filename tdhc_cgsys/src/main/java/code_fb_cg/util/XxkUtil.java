package code_fb_cg.util;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_XXLY_M1S1;
import code_fb.request.CG_XXLY_Request_M1S1;
import code_fb_cg.entity.CG_XXK_Request;
import code_fb_cg.entity.ItemReport;
import code_fb_cg.entity.ItemReportData;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TbItem;
import code_fb_cg.entity.TpCgauthority;
import transfer.RandomId;
import vip.toda.piper.auth.web.client.User;

public class XxkUtil {
	/**
	 * 添加到信息卡
	 * @param user
	 * @param cg_XXLY_Request_M1S1
	 * @param cg_MNHT_M1S1 
	 * @return 
	 */
	public CG_XXLY_M1S1 addCgXxlyM1s1(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, CG_MNHT_M1S1 cg_MNHT_M1S1) {
		CG_XXLY_M1S1 cg_XXLY_M1S1 = new CG_XXLY_M1S1();
		RandomId ri = new RandomId();
		String id = ri.getRandomId();
		cg_XXLY_M1S1.setcIdTbDocumeform(id);//主键
		if(cg_XXLY_Request_M1S1.getCgXXK_Request().get(0).getcMtid() != null) {
			cg_XXLY_M1S1.setcSw04TbDocumeform(cg_XXLY_Request_M1S1.getCgXXK_Request().get(0).getcMtid());
		}
		//内贸合同号
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConnumTbDocumeform() == null) {
			cg_XXLY_M1S1.setcConnumTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcConnumTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConnumTbDocumeform());
			cg_XXLY_M1S1.setcInfocardTbDocumeform(ri.getNo(cg_XXLY_M1S1.getcConnumTbDocumeform()));
		}
		//内贸转卖合同号
		if(cg_MNHT_M1S1.getcSw05()==null) {
			cg_XXLY_M1S1.setcSw06TbDocumeform(cg_MNHT_M1S1.getcConnum());
		}else {
			String str = cg_MNHT_M1S1.getcConnum()+"、"+cg_MNHT_M1S1.getcSw05();
			cg_XXLY_M1S1.setcSw06TbDocumeform(str);
			cg_XXLY_M1S1.setcSw07TbDocumeform(cg_MNHT_M1S1.getcSw05());
		}
		//出口商
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcSw05TbDocumeform() == null) {
			cg_XXLY_M1S1.setcSw05TbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcSw05TbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcSw05TbDocumeform());
		}
		//内贸金额（RMB）
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConmoneyTbDocumeform() == null) {
			cg_XXLY_M1S1.setcConmoneyTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcConmoneyTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcConmoneyTbDocumeform());
		}
		//印尼）品名
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcNameTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcNameTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcNameTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcNameTbDocumeform());
//		}
		//外贸合同号
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutconnumTbDocumeform() == null) {
			cg_XXLY_M1S1.setcOutconnumTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcOutconnumTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutconnumTbDocumeform());
		}
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutmoneyTbDocumeform() == null) {
			
		}
		//外贸金额（USD）
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutmoneyTbDocumeform() == null) {
			cg_XXLY_M1S1.setcOutmoneyTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcOutmoneyTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutmoneyTbDocumeform());
		}
		//（印尼）税号
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcComtaxnumberTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcComtaxnumberTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcComtaxnumberTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcComtaxnumberTbDocumeform());
//		}
		//供应商
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcSupplierTbDocumeform() == null) {
			cg_XXLY_M1S1.setcSupplierTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcSupplierTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcSupplierTbDocumeform());
		}
		//重量
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcWeightTbDocumeform() == null) {
			cg_XXLY_M1S1.setcWeightTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcWeightTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcWeightTbDocumeform());
		}
		//（印尼）BM
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcBmTbDocumeform() ==null) {
//			cg_XXLY_M1S1.setcBmTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcBmTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcBmTbDocumeform());
//		}
		//开票市
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcInvoicecTbDocumeform() == null) {
			cg_XXLY_M1S1.setcInvoicecTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcInvoicecTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcInvoicecTbDocumeform());
		}
		//（印尼）PPN
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcPpnTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcPpnTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcPpnTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcPpnTbDocumeform());
//		}
		//（供应商）联系电话
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcComphoneTbDocumeform() == null) {
			cg_XXLY_M1S1.setcComphoneTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcComphoneTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcComphoneTbDocumeform());
		}
		//（印尼）PPH
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcPphTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcPphTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcPphTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcPphTbDocumeform());
//		}
		//出口商
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcExporterTbDocumeform() == null) {
			cg_XXLY_M1S1.setcExporterTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcExporterTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcExporterTbDocumeform());
		}
		//是否适合办产地证
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcWhecooTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcWhecooTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcWhecooTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcWhecooTbDocumeform());
//		}
		//（印尼）合计税率
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcTotaltaxrTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcTotaltaxrTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcTotaltaxrTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcTotaltaxrTbDocumeform());
//		}
		//收货单位
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcShnameTbDocumeform() == null) {
			cg_XXLY_M1S1.setcShnameTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcShnameTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcShnameTbDocumeform());
		}
		System.out.println("收货单位：：："+cg_XXLY_M1S1.getcShnameTbDocumeform());
		//印尼进口端管制条件
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcIndimportTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcIndimportTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcIndimportTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcIndimportTbDocumeform());
//		}
		//（印尼）协定税率
//		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcAgreedtaxTbDocumeform() == null) {
//			cg_XXLY_M1S1.setcAgreedtaxTbDocumeform("");
//		}else {
//			cg_XXLY_M1S1.setcAgreedtaxTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcAgreedtaxTbDocumeform());
//		}
		//货币（RMB）
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcMoneyrmbDocumeform() == null) {
			cg_XXLY_M1S1.setcMoneyrmbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcMoneyrmbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcMoneyrmbDocumeform());
		}
		//货币（USD）
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcMoneyusdDocumeform() == null) {
			cg_XXLY_M1S1.setcMoneyusdDocumeform("");
		}else {
			cg_XXLY_M1S1.setcMoneyusdDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcMoneyusdDocumeform());
		}
		//内贸采购业务主办
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcInpbsTbDocumeform() == null) {
			cg_XXLY_M1S1.setcInpbsTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcInpbsTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcInpbsTbDocumeform());
		}
		//外贸业务主办
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutpbsTbDocumeform() == null) {
			cg_XXLY_M1S1.setcOutpbsTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcOutpbsTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcOutpbsTbDocumeform());
		}
		//中国出口报关审核人
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcChiedeTbDocumeform() == null) {
			cg_XXLY_M1S1.setcChiedeTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcChiedeTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcChiedeTbDocumeform());
		}
		//印度尼西亚进口报关审核人
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcIndidaTbDocumeform() == null) {
			cg_XXLY_M1S1.setcIndidaTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcIndidaTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcIndidaTbDocumeform());
		}
		//数据录用单证制作人签收
		if(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcDataedpTbDocumeform() == null) {
			cg_XXLY_M1S1.setcDataedpTbDocumeform("");
		}else {
			cg_XXLY_M1S1.setcDataedpTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcDataedpTbDocumeform());
		}
		//创建人
		cg_XXLY_M1S1.setcCreaterTbDocumeform(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcDataedpTbDocumeform());
		//创建时间
		cg_XXLY_M1S1.setcCreatetimeTbDocumeform(new Date());
		//制作人完成状态---部分完成
		cg_XXLY_M1S1.setcMadestateTbDocumeform("mk004");
		return cg_XXLY_M1S1;
	}
	
	/**
	 * 信息卡子表添加
	 * @param user
	 * @param cg_XXLY_Request_M1S1
	 * @param addcgXxlyM1s1
	 * @return 
	 */

	public List<TbDocumeformson> addTbDocumeformson(User user, CG_XXLY_Request_M1S1 cg_XXLY_Request_M1S1, CG_XXLY_M1S1 addcgXxlyM1s1) {
		
		List<TbDocumeformson> listTbDf = new ArrayList<TbDocumeformson>();
		for (CG_XXK_Request element : cg_XXLY_Request_M1S1.getCgXXK_Request()) {
			TbDocumeformson tbd = new TbDocumeformson();
			tbd.setcFatherid(addcgXxlyM1s1.getcIdTbDocumeform());//主键
			tbd.setcConnum(addcgXxlyM1s1.getcConnumTbDocumeform());//内贸合同
			tbd.setcOutconnum(addcgXxlyM1s1.getcOutconnumTbDocumeform());//外贸合同
			tbd.setcSw01(element.getcId());//合同物质主键
//			tbd.setcSw02(addcgXxlyM1s1.getcSw02TbDocumeform());//请购物资单号
//			tbd.setcSw03(addcgXxlyM1s1.getcSw03TbDocumeform());//请购单单号
			tbd.setcCreater(cg_XXLY_Request_M1S1.getCg_XXLY_M1S1().getcDataedpTbDocumeform());//创建人
			tbd.setcCreatetime(new Date());//创建时间
			//品名
//			if(element.getcGoodsname() ==null) {
//				tbd.setcGoodsname("");
//			}else {
//				tbd.setcGoodsname(element.getcGoodsname());
//			}
			if(element.getcSw08() == null) {
				tbd.setcGoodsname("");
			}else {
				tbd.setcGoodsname(element.getcSw08());
			}
			//规格/型号
			if(element.getcSpec() ==null) {
				tbd.setcSpec("");
			}else {
				tbd.setcSpec(element.getcSpec());
			}
			//商品和服务分类简称
			if(element.getcTypenameTbDocumeform() == null) {
				tbd.setcTypename("");
			}else {
				tbd.setcTypename(element.getcTypenameTbDocumeform());
			}
			//数量
			if(element.getcGoodsnum() == null ) {
				tbd.setcNum("0");
			}else {
				tbd.setcNum(element.getcGoodsnum());
			}
			//物资总价
			if(element.getcSumprice() == null ) {
				tbd.setcSw04("0");
			}else {
				tbd.setcSw04(element.getcSumprice());
			}
			//报关单位
			if(element.getcUnitspec() == null) {
				tbd.setcUnit("");
			}else {
				tbd.setcUnit(element.getcUnitspec());
			}
			//法定单位
			if(element.getcStaunitTbDocumeform() == null) {
				tbd.setcStaunit("");
			}else {
				tbd.setcStaunit(element.getcStaunitTbDocumeform());
			}
			//HS编码
			if(element.getcHscodeTbDocumeform() == null) {
				tbd.setcHscode("");
			}else {
				tbd.setcHscode(element.getcHscodeTbDocumeform());
			}
			//监管条件
			if(element.getcSupervisionTbDocumeform() == null) {
				tbd.setcSupervision("");
			}else {
				tbd.setcSupervision(element.getcSupervisionTbDocumeform());
			}
			//退税率
			if(element.getcTaxrateTbDocumeform() == null) {
				tbd.setcTaxrate("");
			}else {
				tbd.setcTaxrate(element.getcTaxrateTbDocumeform());
			}
			//申报要素
			if(element.getcDeclarationTbDocumeform() == null) {
				tbd.setcDeclaration("");
			}else {
				tbd.setcDeclaration(element.getcDeclarationTbDocumeform());
			}
			
			//品名
			if(element.getcName() == null) {
				tbd.setcName("");
			}else {
				tbd.setcName(element.getcName());
			}
			//税号
			if(element.getcComtaxnumber() == null) {
				tbd.setcComtaxnumber("");
			}else {
				tbd.setcComtaxnumber(element.getcComtaxnumber());
			}
			//BM
			if(element.getcBm() == null) {
				tbd.setcBm("");
			}else {
				tbd.setcBm(element.getcBm());
			}
			//PPN
			if(element.getcPpn() == null) {
				tbd.setcPpn("");
			}else {
				tbd.setcPpn(element.getcPpn());
			}
			//PPH
			if(element.getcPph() == null) {
				tbd.setcPph("");
			}else {
				tbd.setcPph(element.getcPph());
			}
			//合计税率
			if(element.getcTotaltaxr() == null) {
				tbd.setcTotaltaxr("");
			}else {
				tbd.setcTotaltaxr(element.getcTotaltaxr());
			}
			//协定税率
			if(element.getcAgreedtax() == null) {
				tbd.setcAgreedtax("");
			}else {
				tbd.setcAgreedtax(element.getcAgreedtax());
			}
			//入印尼受限否
			if(element.getcIndimport() == null) {
				tbd.setcIndimport("");
			}else {
				tbd.setcIndimport(element.getcIndimport());
			}
			//办地产正否
			if(element.getcWhecoo() == null) {
				tbd.setcWhecoo("");
			}else {
				tbd.setcWhecoo(element.getcWhecoo());
			}
			
			//替代税号
//			if(element.getcRepein() == null) {
//				tbd.setcRepein("");
//				tbd.setcRepname("");
//			}else {
//				tbd.setcRepein(element.getcRepein());
//				tbd.setcRepname(tbd.getcName()+"(替代税号)");
//			}
			listTbDf.add(tbd);
			
		}
		return listTbDf;
	}
/**
 * 修改信息卡主表
 * @param user
 * @param tbDocumeList
 * @return
 */
	public TbDocumeform updateXxk(User user, List<TbDocumeformson> tbDocumeList) {
		TbDocumeform tbDocumeform = new TbDocumeform();
		for (TbDocumeformson list : tbDocumeList) {
			//合同号
			tbDocumeform.setcConnum(list.getcConnum());
			//内贸合同金额
			tbDocumeform.setcConmoney(list.getcConmoney());
			//外贸合同
			tbDocumeform.setcOutconnum(list.getcOutconnum());
			//外贸合同金额
			tbDocumeform.setcOutmoney(list.getcOutmoney());
			//供应商
			tbDocumeform.setcSupplier(list.getcSupplier());
			//开票市
			tbDocumeform.setcInvoicec(list.getcInvoicec());
			//联系电话
			tbDocumeform.setcComphone(list.getcComphone());
			//出口商
			tbDocumeform.setcExporter(list.getcExporter());
			//收货单位
			tbDocumeform.setcShname(list.getcShname());
			//内贸采购业务主办
			tbDocumeform.setcInpbs(list.getcInpbs());
			//外贸业务主办
			tbDocumeform.setcOutpbs(list.getcOutpbs());
			//印度尼西亚进口报关审核人
			tbDocumeform.setcIndida(list.getcIndida());
			//数据录用单证制作人
			tbDocumeform.setcDataedp(list.getcDataedp());
			//修改人
			tbDocumeform.setcModifier(user.getUserName());
			//修改时间
			tbDocumeform.setcModifytime(new Date());
		}
		return tbDocumeform;
		
	}

public ItemReportData changecSubitemdes(ItemReport selectAllCount, TpCgauthority tpCgauthority, TbItem tbItem) {
	ItemReportData itemReportData = new ItemReportData();
	if("1".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes1(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum1(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney1(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay1(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay1(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("2".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes2(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum2(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney2(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay2(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay2(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("3".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes3(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum3(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney3(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay3(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay3(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("4".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes4(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum4(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney4(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay4(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay4(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("5".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes5(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum5(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney5(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay5(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay5(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("6".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes6(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum6(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney6(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay6(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay6(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("7".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes7(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum7(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney7(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay7(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay7(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("8".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes8(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum8(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney8(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay8(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay8(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("9".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes9(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum9(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney9(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay9(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay9(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("10".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes10(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum10(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney10(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay10(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay10(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("11".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes11(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum11(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney11(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay11(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay11(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("12".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes12(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum12(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney12(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay12(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay12(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("13".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes13(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum13(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney13(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay13(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay13(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("14".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes14(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum14(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney14(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay14(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay14(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("15".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes15(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum15(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney15(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay15(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay15(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("16".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes16(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum16(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney16(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay16(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay16(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("17".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes17(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum17(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney17(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay17(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay17(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("18".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes18(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum18(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney18(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay18(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay18(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	if("19".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes19(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum19(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney19(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay19(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay19(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(tbItem.getcItemdes());
		itemReportData.setcSubitemid(tbItem.getcSubitemid());
		itemReportData.setcDepartment(tbItem.getcDepartment());
	}
	return itemReportData;
}

public static BigDecimal compareTo(BigDecimal bigDecimal) {
	if(bigDecimal == null) {
		bigDecimal = new BigDecimal(0);
		return bigDecimal;
	}
	return bigDecimal;
}

public List<ItemReportData> changecSubitemdes(List<ItemReport> listItemReport, List<ItemReport> countAllCludecom,
		List<TpCgauthority> selectSubitemidAll) {
	List<ItemReportData> listData = new ArrayList<>();
	List<ItemReport> listItem = new ArrayList<>();
	/*//项目的采购项，采购金额统计
	listItemReport;
	//签订公司所签合同情况
	countAllCludecom;
	//公司描述
	selectSubitemidAll;*/
	//具体项目对应签订公司
	for (ItemReport itemReport : listItemReport) {
		;//具体项目
//		for (int i = 0; i < countAllCludecom.size()-1; i++) {
//			
//			if(countAllCludecom.get(i).getcConnum().contains(itemReport.getcDepartment())) {
//				report.setcCludecom(countAllCludecom.get(i));
//			}
//		}
		for (ItemReport reportItem : countAllCludecom) {
			ItemReport report = new ItemReport();
//			//合同号中是否包含具体项目
			if(reportItem.getcConnum().contains(itemReport.getcDepartment())) {
				report.setcCludecom(reportItem.getcCludecom());//公司
				report.setHtNum(reportItem.getHtNum());//签订合同数
				report.setcGconmoney(reportItem.getcGconmoney());;//签订总金额
//				report.setwCgoux(reportItem.getwCgoux());
				report.setYfPay(reportItem.getYfPay());//已付金额
				report.setWfPay(reportItem.getWfPay());//未付金额
				report.setcDepartment(itemReport.getcDepartment());//具体部门
				report.setcItemdes(itemReport.getcItemdes());//项目所属部
				report.setcSubitemid(itemReport.getcSubitemid());//所属项目
				report.setzQgoux(itemReport.getzQgoux());//总请购项
				report.setwCgoux(itemReport.getwCgoux());//未采购项
				report.setyCgoux(itemReport.getyCgoux());//已采购项
				report.setzConmoney(itemReport.getzConmoney());//采购总金额
				listItem.add(report);
			}
		}	
		//签订公司合并统计
	
	}
	System.out.println("拼接后的数组长度"+listItem.size());
	for (ItemReport itemReport2 : listItem) {
		ItemReportData itemReportData = change(itemReport2);
		ItemReportData change2 = change2(itemReportData, selectSubitemidAll);
		listData.add(change2);
	}
	
	System.out.println("整体数据的长度"+listData.size());
	// TODO Auto-generated method stub
	return listData;
	
}
private static ItemReportData change(ItemReport itemReport2) {
	ItemReportData itemReportData = new ItemReportData();
	BigDecimal bigHtNum = new BigDecimal(0);
	BigDecimal bigcGconmoney = new BigDecimal(0);
	BigDecimal bigYfPay = new BigDecimal(0);
	BigDecimal bigWfPay = new BigDecimal(0);
	if("1".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum1(bigHtNum);
		itemReportData.setcGconmoney1(bigcGconmoney);
		itemReportData.setYfPay1(bigYfPay);
		itemReportData.setWfPay1(bigWfPay);
		itemReportData.setcCludecom1(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	if("2".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum2(bigHtNum);
		itemReportData.setcGconmoney2(bigcGconmoney);
		itemReportData.setYfPay2(bigYfPay);
		itemReportData.setWfPay2(bigWfPay);
		itemReportData.setcCludecom2(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	if("3".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum3(bigHtNum);
		itemReportData.setcGconmoney3(bigcGconmoney);
		itemReportData.setYfPay3(bigYfPay);
		itemReportData.setWfPay3(bigWfPay);
		itemReportData.setcCludecom3(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	if("4".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum4(bigHtNum);
		itemReportData.setcGconmoney4(bigcGconmoney);
		itemReportData.setYfPay4(bigYfPay);
		itemReportData.setWfPay4(bigWfPay);
		itemReportData.setcCludecom4(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	if("5".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum5(bigHtNum);
		itemReportData.setcGconmoney5(bigcGconmoney);
		itemReportData.setYfPay5(bigYfPay);
		itemReportData.setWfPay5(bigWfPay);
		itemReportData.setcCludecom5(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	if("6".equals(itemReport2.getcCludecom())) {
		bigHtNum.add(itemReport2.getHtNum());
		bigcGconmoney.add(itemReport2.getcGconmoney());
		bigYfPay.add(itemReport2.getYfPay());
		bigWfPay.add(itemReport2.getWfPay());
		itemReportData.setHtNum6(bigHtNum);
		itemReportData.setcGconmoney6(bigcGconmoney);
		itemReportData.setYfPay6(bigYfPay);
		itemReportData.setWfPay6(bigWfPay);
		itemReportData.setcCludecom6(itemReport2.getcCludecom());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setcItemdes(itemReport2.getcItemdes());
		itemReportData.setcSubitemid(itemReport2.getcSubitemid());
		itemReportData.setcDepartment(itemReport2.getcDepartment());
		itemReportData.setzQgoux(itemReport2.getzQgoux());
		itemReportData.setyCgoux(itemReport2.getyCgoux());
		itemReportData.setwCgoux(itemReport2.getwCgoux());
		itemReportData.setzConmoney(itemReport2.getzConmoney());
	}
	return  itemReportData;
}
private ItemReportData change2(ItemReportData itemReportData, List<TpCgauthority> selectSubitemidAll) {
	for (TpCgauthority tpCgauthority : selectSubitemidAll) {
		if("1".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes1(tpCgauthority.getcSubitemdes());
		}
		if("2".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes2(tpCgauthority.getcSubitemdes());
		}
		if("3".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes3(tpCgauthority.getcSubitemdes());
		}
		if("4".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes4(tpCgauthority.getcSubitemdes());
		}
		if("5".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes5(tpCgauthority.getcSubitemdes());
		}
		if("6".equals(tpCgauthority.getcSubitemid())) {
			itemReportData.setcSubitemdes6(tpCgauthority.getcSubitemdes());
		}
	}
	return itemReportData;
	
}

public ItemReportData changecSubitemdes(ItemReport selectAllCount, TpCgauthority tpCgauthority) {
	ItemReportData itemReportData = new ItemReportData();
	if("1".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum1(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney1(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay1(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay1(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("2".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setzQgoux(compareTo(selectAllCount.getzQgoux()));//总请购项
		itemReportData.setyCgoux(compareTo(selectAllCount.getyCgoux()));//已采购项
		itemReportData.setwCgoux(compareTo(selectAllCount.getwCgoux()));//未采购项
		itemReportData.setzConmoney(compareTo(selectAllCount.getzConmoney()));//采购总金额
		itemReportData.setHtNum2(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney2(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay2(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay2(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("3".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum3(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney3(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay3(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay3(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("4".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum4(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney4(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay4(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay4(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("5".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum5(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney5(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay5(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay5(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("6".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum6(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney6(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay6(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay6(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("7".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum7(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney7(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay7(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay7(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("8".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum8(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney8(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay8(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay8(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("9".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum9(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney9(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay9(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay9(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("10".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum10(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney10(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay10(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay10(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("11".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum11(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney11(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay11(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay11(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("12".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum12(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney12(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay12(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay12(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("13".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum13(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney13(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay13(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay13(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("14".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum14(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney14(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay14(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay14(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("15".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum15(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney15(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay15(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay15(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("16".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum16(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney16(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay16(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay16(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("17".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum17(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney17(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay17(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay17(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("18".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum18(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney18(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay18(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay18(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("19".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes(tpCgauthority.getcSubitemdes());
		itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
		itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
		itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
		itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
		itemReportData.setHtNum19(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney19(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay19(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay19(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	return itemReportData;
	
}

public ItemReportData changecSubitemdes2(ItemReport selectAllCount, TpCgauthority tpCgauthority,
		ItemReportData itemReportData) {
	itemReportData.setzQgoux(selectAllCount.getzQgoux());//总请购项
	itemReportData.setyCgoux(selectAllCount.getyCgoux());//已采购项
	itemReportData.setwCgoux(selectAllCount.getwCgoux());//未采购项
	itemReportData.setzConmoney(selectAllCount.getzConmoney());//采购总金额
	if("1".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes1(tpCgauthority.getcSubitemdes());
		itemReportData.setcCludecom1(tpCgauthority.getcSubitemid());
		itemReportData.setHtNum1(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney1(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay1(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay1(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("2".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcSubitemdes2(tpCgauthority.getcSubitemdes());
		itemReportData.setcCludecom2(tpCgauthority.getcSubitemid());
		itemReportData.setHtNum2(compareTo(selectAllCount.getHtNum()));//签订合同数
		itemReportData.setcGconmoney2(compareTo(selectAllCount.getcGconmoney()));//签订金额数
		itemReportData.setYfPay2(compareTo(selectAllCount.getYfPay()));//已付金额
		itemReportData.setWfPay2(compareTo(selectAllCount.getWfPay()));//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("3".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom3(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes3(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum3(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney3(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay3(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay3(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("4".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom4(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes4(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum4(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney4(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay4(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay4(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("5".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom5(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes5(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum5(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney5(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay5(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay5(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("6".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom6(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes6(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum6(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney6(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay6(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay6(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("7".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom7(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes7(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum7(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney7(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay7(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay7(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("8".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom8(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes8(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum8(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney8(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay8(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay8(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("9".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom9(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes9(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum9(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney9(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay9(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay9(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("10".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom10(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes10(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum10(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney10(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay10(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay10(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("11".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom11(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes11(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum11(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney11(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay11(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay11(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("12".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom12(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes12(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum12(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney12(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay12(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay12(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("13".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom13(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes13(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum13(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney13(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay13(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay13(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("14".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom14(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes14(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum14(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney14(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay14(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay14(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("15".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom15(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes15(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum15(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney15(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay15(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay15(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("16".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom16(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes16(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum16(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney16(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay16(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay16(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("17".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom17(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes17(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum17(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney17(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay17(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay17(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("18".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom18(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes18(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum18(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney18(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay18(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay18(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	if("19".equals(tpCgauthority.getcSubitemid())) {
		itemReportData.setcCludecom19(tpCgauthority.getcSubitemid());
		itemReportData.setcSubitemdes19(tpCgauthority.getcSubitemdes());
		itemReportData.setHtNum19(selectAllCount.getHtNum());//签订合同数
		itemReportData.setcGconmoney19(selectAllCount.getcGconmoney());//签订金额数
		itemReportData.setYfPay19(selectAllCount.getYfPay());//已付金额
		itemReportData.setWfPay19(selectAllCount.getWfPay());//未付金额
		itemReportData.setcItemdes(selectAllCount.getcItemdes());
		itemReportData.setcSubitemid(selectAllCount.getcSubitemid());
		itemReportData.setcDepartment(selectAllCount.getcDepartment());
	}
	return itemReportData;
}

}

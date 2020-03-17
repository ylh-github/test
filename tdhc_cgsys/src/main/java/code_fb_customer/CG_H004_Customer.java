
package code_fb_customer;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import code_fb.response.TpCgreBookResponse;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgreceivebookMapper;

@Repository
public class CG_H004_Customer {

	@Autowired
	private TpCgreceivebookMapper tpCgreceivebookMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	public String check_S2S31A_CG_H004_S2S3(TpCgreBookResponse tpCgreBookResponse) {
		List<TpCgcontractst> tpCgcontractstList = tpCgreBookResponse.getTpCgcontractstList();
		List<TpCgreceivebook> tpCgreceivebookList = tpCgreBookResponse.getTpCgreceivebookList();
		List<TpCgcontractst> CG_H002_S1S2List = new ArrayList<TpCgcontractst>();
		//到货单
//		TpCgreceivebook tpCgreceivebook = new TpCgreceivebook();
		//合同子
		TpCgcontractst tpCgcontractst = new TpCgcontractst();
		Integer pums = 0;
		List<TpCgreceivebook> tpCgreceivebooklist = tpCgreceivebookMapper.selectByPrimary(tpCgcontractstList.get(0).getcConnum(), tpCgcontractstList.get(0).getcConline());
		if(tpCgreceivebooklist.size() != 0) {
			pums = Integer.parseInt(tpCgreceivebooklist.get(0).getcArrivalnum());
		}
		if (tpCgreceivebookList != null) {
			if(pums == 0) {
				for (TpCgcontractst tpCgcontractsts : tpCgcontractstList) {
					Integer pos = Integer.parseInt(tpCgreceivebookList.get(0).getcArrivalnum())+ pums;
					tpCgcontractst.setcGroudtotalnum(pos.toString());//累计到货量
					Integer pum = Integer.parseInt(tpCgcontractsts.getcGoodsnum())-pos;//剩余数量
					tpCgcontractst.setcResiduenum(pum.toString());
					tpCgcontractst.setcId(tpCgcontractsts.getcId());
					Integer p = pos/Integer.parseInt(tpCgcontractsts.getcGoodsnum());
					if(p >= 0.9) {
						tpCgcontractst.setcArrallyorn("1");
					}
					CG_H002_S1S2List.add(tpCgcontractst);
				}
			}else {
				for (TpCgcontractst tpCgcontractsts : tpCgcontractstList) {
					Integer pos = Integer.parseInt(tpCgreceivebookList.get(0).getcArrivalnum())
							+ Integer.parseInt(tpCgcontractsts.getcGroudtotalnum());
					tpCgcontractst.setcGroudtotalnum(pos.toString());
					Integer pum = Integer.parseInt(tpCgcontractsts.getcGoodsnum())- pos;
					tpCgcontractst.setcResiduenum(pum.toString());
					tpCgcontractst.setcId(tpCgcontractsts.getcId());
					Integer p = pos/Integer.parseInt(tpCgcontractsts.getcGoodsnum());
					if(p >= 0.9) {
						tpCgcontractst.setcArrallyorn("1");
					}
					CG_H002_S1S2List.add(tpCgcontractst);
				}
			}
			Integer rows = tpCgreceivebookMapper.insertSelective(tpCgreceivebookList.get(0));
			Integer row = tpCgcontractstMapper.updateByPrimaryKeySelective(CG_H002_S1S2List.get(0));
			if (rows < 0 && row < 0) {
				return "success-1";
			}
			return "success-0";
		}
		return "error";
	}

	public String check_S2S31U_CG_H004_S2S3(TpCgreBookResponse tpCgreBookResponse) {
		List<TpCgcontractst> tpCgcontractstList = tpCgreBookResponse.getTpCgcontractstList();
		List<TpCgreceivebook> tpCgreceivebookList = tpCgreBookResponse.getTpCgreceivebookList();
		List<TpCgcontractst> CG_H002_S1S2List = new ArrayList<TpCgcontractst>();
		//到货单
//		TpCgreceivebook tpCgreceivebook = new TpCgreceivebook();
		//合同子
		TpCgcontractst tpCgcontractst = new TpCgcontractst();
		 TpCgreceivebook tpCgreceivebooklist = tpCgreceivebookMapper.selectByPrimaryKey(tpCgcontractstList.get(0).getcId());
		 Integer pums = 0;
		 if(tpCgreceivebooklist != null) {
			 pums = Integer.parseInt(tpCgreceivebooklist.getcArrivalnum());
		 }
		if (tpCgreceivebookList != null) {
			for (TpCgcontractst tpCgcontractsts : tpCgcontractstList) {
				Integer pos = Integer.parseInt(tpCgcontractsts.getcGroudtotalnum()) - pums;
				Integer pinsm = pos + Integer.parseInt(tpCgreceivebookList.get(0).getcArrivalnum());
				tpCgcontractst.setcGroudtotalnum(pinsm.toString());
				Integer pum = Integer.parseInt(tpCgcontractsts.getcGoodsnum())- pinsm;
				Integer p = pinsm/Integer.parseInt(tpCgcontractsts.getcGroudtotalnum());
				if(p >= 0.9) {
					tpCgcontractst.setcArrallyorn("1");
				}
				tpCgcontractst.setcResiduenum(pum.toString());
				tpCgcontractst.setcId(tpCgcontractsts.getcId());
				CG_H002_S1S2List.add(tpCgcontractst);
			}
			Integer rows = tpCgreceivebookMapper.updateByPrimaryKeySelective(tpCgreceivebookList.get(0));
			Integer row = tpCgcontractstMapper.updateByPrimaryKeySelective(CG_H002_S1S2List.get(0));
			if (rows < 0 && row < 0) {
				return "success-1";
			}
			return "success-0";
		}
		return "error";
	}

	public String check_S2S31D_CG_H004_S2S3(TpCgreBookResponse tpCgreBookResponse) {
		List<TpCgcontractst> tpCgcontractstList = tpCgreBookResponse.getTpCgcontractstList();
		List<TpCgreceivebook> tpCgreceivebookList = tpCgreBookResponse.getTpCgreceivebookList();
		List<TpCgcontractst> CG_H002_S1S2List = new ArrayList<TpCgcontractst>();
		//到货单
//		TpCgreceivebook tpCgreceivebook = new TpCgreceivebook();
		//合同子
		TpCgcontractst tpCgcontractst = new TpCgcontractst();
		if (tpCgreceivebookList != null) {
			for (TpCgcontractst tpCgcontractsts : tpCgcontractstList) {
				Integer pos = Integer.parseInt(tpCgcontractsts.getcGroudtotalnum())
						- Integer.parseInt(tpCgreceivebookList.get(0).getcArrivalnum());
				tpCgcontractst.setcGroudtotalnum(pos.toString());
				Integer pum = Integer.parseInt(tpCgcontractsts.getcGoodsnum())+ pos;
				tpCgcontractst.setcResiduenum(pum.toString());
				tpCgcontractst.setcId(tpCgcontractsts.getcId());
				Integer p = pos/Integer.parseInt(tpCgcontractsts.getcGoodsnum());
				if(p >= 0.9) {
					tpCgcontractst.setcArrallyorn("1");
				}
				CG_H002_S1S2List.add(tpCgcontractst);
			}
			Integer rows = tpCgreceivebookMapper.deleteByPrimaryKey(tpCgreceivebookList);
			Integer row = tpCgcontractstMapper.updateByPrimaryKeySelective(CG_H002_S1S2List.get(0));
			if (rows < 0 && row < 0) {
				return "success-1";
			}
			return "success-0";
		}
		return "error";
	}
}
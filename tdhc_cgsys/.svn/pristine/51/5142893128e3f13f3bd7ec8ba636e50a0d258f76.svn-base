package code_fb_cg.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgship;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.mapper.TpCgshipMapper;
import code_fb_cg.request.ShipM2s2A;
import code_fb_cg.request.ShipM2s2Q;
import code_fb_cg.request.ShipM2s2U;
import code_fb_cg.service.TpCgshipService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
@Service("tpCgshipService")
public class TpCgshipServiceImpl implements TpCgshipService {

	@Autowired
	private TpCgshipMapper tpCgshipMapper;
	
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	
	
	public ResponseObject<EmptyTag, List<TpCgship>> selectBycondition(
			RequestObject<EmptyTag, ShipM2s2Q> requestObject) {
		// TODO 条件查询
		ResponseObjectBuilder<EmptyTag, List<TpCgship>> builder = ResponseObjectBuilder.create();
		List<TpCgship> ship = tpCgshipMapper.selectBycondition(requestObject.getData());
		if(ship.size()==0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(ship).errcode(Errcode.Success).msg("查询成功").build();
	}

	@Transactional
	public ResponseObject<EmptyTag, EmptyData> insertShip(RequestObject<EmptyTag, ShipM2s2A> requestObject) {
		// TODO 批量添加
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		//合同物资
		List<TpCgcontractst> stList = requestObject.getData().getStlist();
		TpCgship sp = requestObject.getData().getList().get(0);
		List<TpCgship> sList = new ArrayList<TpCgship>();
		for (TpCgcontractst tpCgcontractst : stList) {
			TpCgship ship = new TpCgship();
			ship.setcConmtid(tpCgcontractst.getcMtid());
			ship.setcConnum(tpCgcontractst.getcConnum());
			ship.setcConstid(tpCgcontractst.getcId());
			ship.setcContainer(sp.getcContainer());
			ship.setcCreater(sp.getcCreater());
			ship.setcCreatetime(sp.getcCreatetime());
			ship.setcFramenum(sp.getcFramenum());
			ship.setcGoodsname(tpCgcontractst.getcGoodsname());
			ship.setcGoodsnum(tpCgcontractst.getcGoodsnum());
			ship.setcOrdernum(tpCgcontractst.getcSw03());
			ship.setcShipnum(sp.getcShipnum());
			ship.setcShiptime(sp.getcShiptime());
			ship.setcSpec(tpCgcontractst.getcSpec());
			ship.setcWmnum(tpCgcontractst.getcSw05());
			sList.add(ship);
		}
		int row = tpCgcontractstMapper.updateForShip(stList);
		if(row==0) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		int row0 = tpCgshipMapper.insertShip(sList);
		if(row0 == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateForShip(RequestObject<EmptyTag, ShipM2s2U> requestObject) {
		// TODO 出船记录修改
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		List<TpCgship> shipList = requestObject.getData().getList();
		int row = tpCgshipMapper.updateForShip(shipList);
		if(row == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		return builder.errcode(Errcode.Success).msg("修改成功").build();
	}
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateByCDR(RequestObject<EmptyTag, ShipM2s2U> requestObject) {
		// TODO 批量  逻辑删除
		ResponseObjectBuilder<EmptyTag, EmptyData> builder = ResponseObjectBuilder.create();
		List<TpCgship> shipList = requestObject.getData().getList();
		List<TpCgcontractst> stList = new ArrayList<TpCgcontractst>();
		for (TpCgship tpCgship : shipList) {
			TpCgcontractst st = new TpCgcontractst();
			st.setcId(tpCgship.getcConstid());
			stList.add(st);
		}
		int row0 = tpCgcontractstMapper.updateForShip2(stList);
		if(row0==0) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		int row = tpCgshipMapper.updateByCDR(shipList);
		if(row == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		return builder.errcode(Errcode.Success).msg("删除成功").build();
	}

}

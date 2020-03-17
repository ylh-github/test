package code_fb_cg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TbGuildataRequest;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.mapper.TbGuildataMapper;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import code_fb_cg.mapper.TpCgcontractstMapper;
import code_fb_cg.service.TbGuildataService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service
public class TbGuildataServiceImp implements TbGuildataService{

	@Autowired
	private TbGuildataMapper tbGuildataMapper;
	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	@Autowired
	private TpCgcontractstMapper tpCgcontractstMapper;
	
	
	
	@Override
	public ResponseObject<EmptyTag, List<TbGuildata>> M1S11Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbGuildata> selectInfo = tbGuildataMapper.selectInfo(requestObject.getData().getListData().get(0));
		return builder.data(selectInfo).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TbGuildata>> getInfo(RequestObject<EmptyTag, EmptyData> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbGuildata> info = tbGuildataMapper.getInfo();
		return builder.data(info).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S21Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		System.out.println("到货情况：："+requestObject.getData().getTbGuildRequest().getcCheckway());
		List<TpCgcontractmt> m1s21qList = tpCgcontractmtMapper.M1S21Q(requestObject.getData().getTbGuildRequest(),
				requestObject.getData().getTbGuildata());
		if(m1s21qList.size()<= 0) {
			return builder.errcode(Errcode.Success).msg("查询成功！！无数据！！！").build();
		}
		return builder.data(m1s21qList).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag,List<TpCgcontractst>> M1S22Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> m1s22qList = tpCgcontractstMapper.M1S22Q(requestObject.getData().getTbGuildRequest(),
				requestObject.getData().getTbGuildata());
		if(m1s22qList.size()<= 0) {
			return builder.errcode(Errcode.Success).msg("查询成功！！无数据！！！").build();
		}
		return builder.data(m1s22qList).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S23(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> s1s23List = tpCgcontractstMapper.S1S23(requestObject.getData().getTpCgcontractmt());
		if(s1s23List.size()<= 0) {
			return builder.errcode(Errcode.Success).msg("查询成功！！无数据！！！").build();
		}
		return builder.data(s1s23List).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractmt>> S1S21(
			RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> s1s21List = tpCgcontractmtMapper.S1S21(requestObject.getData().getListData().get(0).getName());
		if(s1s21List.size()<= 0) {
			return builder.errcode(Errcode.Success).msg("查询成功！！无数据！！！").build();
		}
		return builder.data(s1s21List).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpCgcontractst>> S1S31(
			RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractst> s1s31List = tpCgcontractstMapper.S1S31(requestObject.getData().getListData().get(0).getName());
		if(s1s31List.size()<= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询成功！！无数据！！！").build();
		}
		return builder.data(s1s31List).errcode(Errcode.Success).msg("查询成功！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S21D(
			RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int updateGuiL = tpCgcontractmtMapper.updateGuiL(requestObject.getData().getTpCgcontractmt());
		if(updateGuiL>0) {
			return builder.errcode(Errcode.FailParameterError).msg("合同清除类别失败！！！！").build();
		}
		int row = tpCgcontractstMapper.updateGuiLTbCgcontracts(requestObject.getData().getTpCgcontractmt());
		if(row>0) {
			return builder.errcode(Errcode.FailParameterError).msg("合同物资清除类别失败！！！！").build();
		}
		return builder.errcode(Errcode.Success).msg("合同清除类别成功！！！！").build();
	}
	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S31D(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		int updateGuiList = tpCgcontractstMapper.updateGuiList(requestObject.getData().getTpCgcontractst());
		if(updateGuiList>0) {
			return builder.errcode(Errcode.FailParameterError).msg("合同物资清除类别失败！！！！").build();
		}
		return builder.errcode(Errcode.Success).msg("合同物资清除类别成功！！！！").build();
	}
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11D(RequestObject<EmptyTag, TbGuildataRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TbGuildata> listData = requestObject.getData().getListData();
		for (TbGuildata tbGuildata : listData) {
			List<TpCgcontractmt> s1s21List = tpCgcontractmtMapper.S1S21(tbGuildata.getName());
			if(s1s21List.size() > 0) {
				int updateGuiL = tpCgcontractmtMapper.updateGuiLlist(s1s21List);
				if(updateGuiL>0) {
					return builder.errcode(Errcode.FailParameterError).msg("删除类别失败！！！！").build();
				}
			}
			List<TpCgcontractst> s1s31List = tpCgcontractstMapper.S1S31(tbGuildata.getName());
			if(s1s31List.size() > 0) {
				int updateGuiList = tpCgcontractstMapper.updateGuiList(s1s31List);
				if(updateGuiList>0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return builder.errcode(Errcode.FailParameterError).msg("删除类别失败！！！！").build();
				}
			}
			int row = tbGuildataMapper.deleteByPrimaryKey(tbGuildata);
			if(row >=0 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("删除类别失败！！！！").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("删除类别成功！！！！").build();
	}
	@Override
	public ResponseObject<EmptyTag,  List<TpCgcontractmt>> M1S22S(RequestObject<EmptyTag, EmptyData> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgcontractmt> m1s22s = tpCgcontractmtMapper.M1S22S();
		return builder.data(m1s22s).errcode(Errcode.Success).msg("查询成功！！").build();
	}

}

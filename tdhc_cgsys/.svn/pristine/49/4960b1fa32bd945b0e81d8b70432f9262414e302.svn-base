package code_fb_cg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import code_fb_cg.entity.TpCgauthority;
import code_fb_cg.mapper.TpCgauthorityMapper;
import code_fb_cg.request.TpCgauthorityM1S12_Request;
import code_fb_cg.request.TpCgauthorityS1S22_Request;
import code_fb_cg.service.TpCgauthorityService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

/**
 * 
 * @author lhb
 * @时间：2018年8月19日下午6:55:20
 */
@Service("tpCgauthorityService")
public class TpCgauthorityServiceImpl implements TpCgauthorityService {
	@Autowired
	@Qualifier("tpCgauthorityMapper")
	private TpCgauthorityMapper tpCgauthorityMapper;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S12U(
			RequestObject<EmptyTag, TpCgauthorityM1S12_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		// 查询C_ITEMDES 和 C_ITEMID一样的
		for (TpCgauthority auth : requestObject.getData().getCgA001M1s1()) {
			auth.setcItemdes(auth.getcItemdes());
			auth.setcItemid(auth.getcItemid());
			auth.setcId(auth.getcId());
			auth.setcEnabled("0");
			List<TpCgauthority> data = tpCgauthorityMapper.selectDESAndID(auth);
			for (TpCgauthority tpau : data) {
				tpau.setcEnabled("0");
			}
			int row = tpCgauthorityMapper.M1S12U(data);
			if (row == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("启用失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("启用成功").build();

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S13U(
			RequestObject<EmptyTag, TpCgauthorityM1S12_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgauthority auth : requestObject.getData().getCgA001M1s1()) {
			auth.setcItemdes(auth.getcItemdes());
			auth.setcItemid(auth.getcItemid());
			auth.setcEnabled("1");
			auth.setcId(auth.getcId());
			List<TpCgauthority> data = tpCgauthorityMapper.selectDESAndID(auth);
			for (TpCgauthority tpau : data) {
				tpau.setcEnabled("1");
			}
			int row = tpCgauthorityMapper.M1S13U(data);
			if (row == 0) {
				return builder.errcode(Errcode.FailParameterError).msg("禁用失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("禁用成功").build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> S1S22U(
			RequestObject<EmptyTag, TpCgauthorityS1S22_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgauthority auth : requestObject.getData().getCgA001S1s2()) {
			auth.setcEnabled("0");
			auth.setcId(auth.getcId());
		}
		int row = tpCgauthorityMapper.S1S22U(requestObject.getData().getCgA001S1s2());
		return builder.data(row).errcode(Errcode.Success).msg("启用成功").build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, EmptyData> S1S23U(
			RequestObject<EmptyTag, TpCgauthorityS1S22_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		for (TpCgauthority auth : requestObject.getData().getCgA001S1s2()) {
			auth.setcEnabled("1");
			auth.setcId(auth.getcId());
		}
		int row = tpCgauthorityMapper.S1S23U(requestObject.getData().getCgA001S1s2());
		return builder.data(row).errcode(Errcode.Success).msg("禁用成功").build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgauthority>> selectH001FKFS(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgauthority> list = tpCgauthorityMapper.selectH001FKFS("付款方式", "0");
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCgauthority>> selectH001WCZT(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpCgauthority> list = tpCgauthorityMapper.selectH001WCZT("完成状态", "0");
		if (list.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询失败").build();
		}
		return builder.data(list).errcode(Errcode.Success).build();
	}

	public ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder<EmptyTag, List<TpCgauthority>> builder = ResponseObjectBuilder.create();

		List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos(
				requestObject.getData().getcItemid(), requestObject.getData().getcSubitemid());

		return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();

	}
	
	public ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos4(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder<EmptyTag, List<TpCgauthority>> builder = ResponseObjectBuilder.create();
		String name = requestObject.getData().getcCreater();
		if("admin".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos(requestObject.getData().getcItemid(), requestObject.getData().getcSubitemid());
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}
		if(tpCgauthorityMapper.selectFuZong(name, "CGY").size() == 1) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos3(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if(tpCgauthorityMapper.selectJingLi(name, "CGY").size() == 1) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos1(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if(tpCgauthorityMapper.selectZhuRen(name, "CGY").size() == 1) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos2(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if(tpCgauthorityMapper.selectZhuLi(name, "CGY") != null) {
			if(tpCgauthorityMapper.selectFuZong(tpCgauthorityMapper.selectZhuLi(name, "CGY").getcSw04(), "CGY").size() == 1) {
				List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos3(tpCgauthorityMapper.selectZhuLi(name, "CGY").getcSw04(), "CGY");
				return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
			}
			if(tpCgauthorityMapper.selectJingLi(tpCgauthorityMapper.selectZhuLi(name, "CGY").getcSw04(), "CGY").size() == 1) {
				List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos1(tpCgauthorityMapper.selectZhuLi(name, "CGY").getcSw04(), "CGY");
				return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
			}
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos2(tpCgauthorityMapper.selectZhuLi(name, "CGY").getcSw04(), "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos4(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}
			
		/*if("林奇聪".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos3(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if("叶春云".equals(name) || "陈志强".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos1(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if("陈双".equals(name) || "周伟龙".equals(name) || "项鑫".equals(name) || "王世逸".equals(name) || "王达超".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos2(name, "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if("黄丽丽".equals(name) || "翁东翀".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos2("王达超", "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}else if("董晓".equals(name)) {
			List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos1("陈志强", "CGY");
			return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
		}*/
		/*List<TpCgauthority> result = tpCgauthorityMapper.getDictionaryInfoWithItemNos(
				requestObject.getData().getcItemid(), requestObject.getData().getcSubitemid());

		return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();*/

	}

	public ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos1(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder<EmptyTag, List<TpCgauthority>> builder = ResponseObjectBuilder.create();

		List<TpCgauthority> result = tpCgauthorityMapper
				.getDictionaryInfoWithItemNos1(requestObject.getData().getcCreater(), "CGY");

		return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
	}

	public ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos2(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder<EmptyTag, List<TpCgauthority>> builder = ResponseObjectBuilder.create();

		List<TpCgauthority> result = tpCgauthorityMapper
				.getDictionaryInfoWithItemNos2(requestObject.getData().getcCreater(), "CGY");

		return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
	}

	public ResponseObject<EmptyTag, List<TpCgauthority>> getDictionaryInfoWithItemNos3(
			RequestObject<EmptyTag, TpCgauthority> requestObject) {
		ResponseObjectBuilder<EmptyTag, List<TpCgauthority>> builder = ResponseObjectBuilder.create();

		List<TpCgauthority> result = tpCgauthorityMapper
				.getDictionaryInfoWithItemNos3(requestObject.getData().getcCreater(), "CGY");

		return builder.data(result).msg("查询成功").errcode(Errcode.Success).session(requestObject.getSession()).build();
	}

}

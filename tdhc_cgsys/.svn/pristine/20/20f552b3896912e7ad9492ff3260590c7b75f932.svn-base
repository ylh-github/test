package code_fb_cg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code_fb_cg.entity.TbSuppmateral;
import code_fb_cg.mapper.TbSuppmateralMapper;
import code_fb_cg.request.CG_GY001_Request;
import code_fb_cg.response.CG_GY001_Response;
import code_fb_cg.service.CG_GY001_Service;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
/**
 * 供应商发货单
 * @author lhb
 * @时间：2019年3月23日下午4:15:30
 */
@Service
public class CG_GY001_ServiceImp implements CG_GY001_Service{

	@Autowired
	private TbSuppmateralMapper  tbSuppmateralMapper;

	public ResponseObject<EmptyTag, List<TbSuppmateral>> selectByCondition(
			RequestObject<EmptyTag, CG_GY001_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TbSuppmateral tbSuppmateral = requestObject.getData().getTbSuppmateral().get(0);
		List<TbSuppmateral> selectByCondition = tbSuppmateralMapper.selectByCondition(requestObject.getData(),tbSuppmateral);
		return builder.data(selectByCondition).errcode(Errcode.Success).msg("查询成功！！！").build();
	}

	public ResponseObject<EmptyTag, CG_GY001_Response> M1S1S12(
			RequestObject<EmptyTag, CG_GY001_Request> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		String msg = "查询成功！";
		CG_GY001_Response data = new CG_GY001_Response();
		data.setSuppViewEntity(tbSuppmateralMapper.selectView(requestObject.getData().getTbSuppmateral().get(0)));
		return builder.data(data).msg(msg).errcode(Errcode.Success).build();
	}

}

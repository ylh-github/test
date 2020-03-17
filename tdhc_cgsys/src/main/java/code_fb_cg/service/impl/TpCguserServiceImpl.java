package code_fb_cg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code_fb_cg.entity.TpCguser;
import code_fb_cg.mapper.TpCguserMapper;
import code_fb_cg.service.TpCguserService;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
@Service("tpCguserService")
public class TpCguserServiceImpl implements TpCguserService {

	@Autowired
	private TpCguserMapper tpCguserMapper;
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, List<TpCguser>> selectS1S2(RequestObject<EmptyTag, List<TpCguser>> requestObject) {
		// TODO 根据登录名  查询用户信息
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCguser user = tpCguserMapper.selectLoginName(requestObject.getData().get(0));
		if(user == null) {
			return builder.errcode(Errcode.FailParameterError).msg("用户不存在").build();
		}
		return builder.data(user).errcode(Errcode.FailParameterError).build();
	}

}

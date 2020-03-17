package code_fb_cg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code_fb_cg.entity.TpCgordermt3;
import code_fb_cg.entity.TpChorderst;
import code_fb_cg.mapper.TpChorderstMapper;
import code_fb_cg.request.TpCgordermtM1S13;
import code_fb_cg.service.TpChorderstService;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;

@Service
public class TpChorderstServiceImp implements TpChorderstService {
	@Autowired
	private TpChorderstMapper tpChorderstMapper;
	@Override
	public ResponseObject<EmptyTag, List<TpChorderst>> searchTpChorderst(
			User user,RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgordermt3 tpcgordermt = requestObject.getData().getCgQ001M1s14().get(0);
		tpcgordermt.setName(user.getUserName());
		List<TpChorderst> searchTpChorderst = tpChorderstMapper.searchTpChorderst(tpcgordermt);
		return builder.data(searchTpChorderst).errcode(Errcode.Success).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpChorderst>> searchTpChorderst2(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpCgordermt3 tpcgordermt = requestObject.getData().getCgQ001M1s14().get(0);
		List<TpChorderst> searchTpChorderst = tpChorderstMapper.searchTpChorderst2(tpcgordermt);
		return builder.data(searchTpChorderst).errcode(Errcode.Success).build();
	}

}

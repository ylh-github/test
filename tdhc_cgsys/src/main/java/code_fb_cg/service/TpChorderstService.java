package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpChorderst;
import code_fb_cg.request.TpCgordermtM1S13;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpChorderstService {

	ResponseObject<EmptyTag, List<TpChorderst>> searchTpChorderst(User user, RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);

	ResponseObject<EmptyTag, List<TpChorderst>> searchTpChorderst2(
			RequestObject<EmptyTag, TpCgordermtM1S13> requestObject);

}

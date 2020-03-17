package code_fb_cg.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb_cg.entity.TpConcatfj;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface FileUploadService {

	ResponseObject<EmptyTag, EmptyData> registerUpload(HttpServletRequest request, User user, TpConcatfj tpConcatfj,
			String session);

	ResponseObject<EmptyTag, List<TpConcatfj>> searchFile(RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject, String session);

	ResponseObject<EmptyTag, EmptyData> deleateFile(RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject,
			String session);

}

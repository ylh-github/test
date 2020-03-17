package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.SuppViewEntity;
import code_fb_cg.entity.TbSuppmateral;
import code_fb_cg.request.CG_GY001_Request;
import code_fb_cg.response.CG_GY001_Response;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

public interface CG_GY001_Service {

	ResponseObject<EmptyTag, List<TbSuppmateral>> selectByCondition(RequestObject<EmptyTag, CG_GY001_Request> requestObject);

	ResponseObject<EmptyTag, CG_GY001_Response> M1S1S12(RequestObject<EmptyTag, CG_GY001_Request> requestObject);

}

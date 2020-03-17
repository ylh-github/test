package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TbGuildataRequest;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractst;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

public interface TbGuildataService {

	ResponseObject<EmptyTag, List<TbGuildata>> M1S11Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, List<TbGuildata>> getInfo(RequestObject<EmptyTag, EmptyData> requestObject);

	ResponseObject<EmptyTag, List<TpCgcontractmt>> M1S21Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, List<TpCgcontractst>> M1S22Q(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S23(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, List<TpCgcontractmt>> S1S21(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S31(RequestObject<EmptyTag, TbGuildataRequest> requestObject);
	//删除类别
	ResponseObject<EmptyTag, EmptyData> M1S11D(RequestObject<EmptyTag, TbGuildataRequest> requestObject);
	ResponseObject<EmptyTag, EmptyData> M1S21D(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag, EmptyData> M1S31D(RequestObject<EmptyTag, TbGuildataRequest> requestObject);

	ResponseObject<EmptyTag,  List<TpCgcontractmt>> M1S22S(RequestObject<EmptyTag, EmptyData> requestObject);

}

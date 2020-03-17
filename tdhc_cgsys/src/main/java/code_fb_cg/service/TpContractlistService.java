package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpContractlist;
import code_fb_cg.request.TbContractlistRequest;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpContractlistService {
	//添加
	ResponseObject<EmptyTag, EmptyData> M1S11A(RequestObject<EmptyTag, TbContractlistRequest> requestObject);
	//查询
	ResponseObject<EmptyTag, List<TpContractlist>> M1S11Q(RequestObject<EmptyTag, TbContractlistRequest> requestObject);
	//修改
	ResponseObject<EmptyTag, EmptyData> M1S11U(RequestObject<EmptyTag, TbContractlistRequest> requestObject);
	//删除
	ResponseObject<EmptyTag, EmptyData> M1S11D(RequestObject<EmptyTag, TbContractlistRequest> requestObject);
	//导入
	ResponseObject<EmptyTag, EmptyData> ExcelConSt(User user,RequestObject<EmptyTag, TbContractlistRequest> requestObject);
}

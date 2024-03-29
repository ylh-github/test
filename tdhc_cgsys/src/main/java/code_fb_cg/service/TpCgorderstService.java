package code_fb_cg.service;

import java.util.List;

import code_fb.request.CG_Q001_Request_S1S2;
import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.entity.TpCgorderst;
import code_fb_cg.request.AllotForData;
import code_fb_cg.request.CG_Q001_Request_M1S2;
import code_fb_cg.request.StRequest;
import code_fb_cg.request.TpCgorderstRequest;
import code_fb_cg.request.YDJ_Req;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpCgorderstService {
	//s1s2联查
	ResponseObject<EmptyTag, List<TpCgorderst>> selectS1S2(TpCgorderstRequest tpCgorderstRequest, String string);
	
	ResponseObject<EmptyTag, List<TpCgorderst>> selectForOrderSt(RequestObject<EmptyTag, StRequest> requestObject);
	//分配前的查询
	ResponseObject<EmptyTag, List<TpCgorderst>> selectOrderStForAllot(RequestObject<EmptyTag, AllotForData> requestObject);

	ResponseObject<EmptyTag, List<TpCgordermt>> before_serDel(User user,RequestObject<EmptyTag, YDJ_Req> requestObject);
	ResponseObject<EmptyTag, List<TpCgorderst>> selectGOODSNAMEQ();

	ResponseObject<EmptyTag, EmptyData> S1S21UCF(RequestObject<EmptyTag, StRequest> requestObject);
	
	//取消采购
	ResponseObject<EmptyTag, EmptyData> S1S21Ubuy(CG_Q001_Request_S1S2 data, String session);
	//撤销取消采购
	ResponseObject<EmptyTag, EmptyData> S1S21Uagainbuy(CG_Q001_Request_S1S2 data, String session);
	//物资查询
	ResponseObject<EmptyTag, List<TpCgorderst>> M2S11Q(CG_Q001_Request_M1S2 data, String session);
	//待转合同页面物资查询
	ResponseObject<EmptyTag, List<TpCgorderst>> M2S11QDZ(User user);
	//添加到待转合同页面
	ResponseObject<EmptyTag, EmptyData> S1S21XZ(User user,RequestObject<EmptyTag, YDJ_Req> requestObject);
	//从待转合同页面撤回到请购单页面
	ResponseObject<EmptyTag, EmptyData> S1S21CH(User user,RequestObject<EmptyTag, YDJ_Req> requestObject);

	ResponseObject<EmptyTag, List<TpCgordermt>> before_serDel2(User user,
			RequestObject<EmptyTag, YDJ_Req> requestObject);
}

package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontrast;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.request.ContractmtList2;
import code_fb_cg.request.ExcelCONST;
import code_fb_cg.request.ReveiceBookList;
import code_fb_cg.request.TpCgcontrastrequest;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface TpCgcontrastService {
	//对比导入
	ResponseObject<EmptyTag, EmptyData> Dbdaoru(User user,RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//物资详情查询
	ResponseObject<EmptyTag, List<TpCgcontrast>> M1S1Q(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//物资详情查询
	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21Q(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//到货详情查询
	ResponseObject<EmptyTag, List<TpCgreceivebook>> selectList(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//一键到货
	ResponseObject<EmptyTag, EmptyData> YJdaohuo(User user,RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//到货
	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21DH(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//锁定
	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21SD(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//取消锁定
	ResponseObject<EmptyTag, List<TpCgcontractst>> S1S21QXSD(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//到货详情修改
	ResponseObject<EmptyTag, EmptyData> S1S51U(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
	//到货详情删除
	ResponseObject<EmptyTag, EmptyData> deleteByPrimaryKey(RequestObject<EmptyTag, TpCgcontrastrequest> requestObject);
}

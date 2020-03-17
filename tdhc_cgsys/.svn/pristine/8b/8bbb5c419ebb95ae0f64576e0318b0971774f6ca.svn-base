package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.TpCgship;
import code_fb_cg.request.ShipM2s2A;
import code_fb_cg.request.ShipM2s2Q;
import code_fb_cg.request.ShipM2s2U;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;

public interface TpCgshipService {

	ResponseObject<EmptyTag, List<TpCgship>> selectBycondition(RequestObject<EmptyTag, ShipM2s2Q> requestObject);
	ResponseObject<EmptyTag, EmptyData> insertShip(RequestObject<EmptyTag, ShipM2s2A> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateForShip(RequestObject<EmptyTag, ShipM2s2U> requestObject);
	ResponseObject<EmptyTag, EmptyData> updateByCDR(RequestObject<EmptyTag, ShipM2s2U> requestObject);
}

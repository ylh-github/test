package code_fb_cg.service;

import java.util.List;

import code_fb_cg.entity.ItemEntity;
import code_fb_cg.entity.OutExcel;
import code_fb_cg.entity.TbItem;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;

public interface ItemService {

	ResponseObject<EmptyTag, List<TbItem>> searchItem(RequestObject<EmptyTag, ItemEntity> requestObject);

	ResponseObject<EmptyTag, EmptyData> addItem(User user, RequestObject<EmptyTag, ItemEntity> requestObject);

	ResponseObject<EmptyTag, EmptyData> updateItem(User user, RequestObject<EmptyTag, ItemEntity> requestObject);

	ResponseObject<EmptyTag, EmptyData> deleteItem(RequestObject<EmptyTag, ItemEntity> requestObject);

	ResponseObject<EmptyTag, EmptyData> disableItem(RequestObject<EmptyTag, ItemEntity> requestObject);

	ResponseObject<EmptyTag, EmptyData> enableItem(RequestObject<EmptyTag, ItemEntity> requestObject);

}

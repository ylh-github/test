package code_fb_cg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import code_fb_cg.entity.ItemEntity;
import code_fb_cg.entity.TbItem;
import code_fb_cg.service.ItemService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;
import vip.toda.piper.auth.web.client.annotation.RequestParamUser;
@RequestMapping(value="/item")
@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;
	//查询
	@RequestMapping(value="/searchItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, List<TbItem>>  searchItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.searchItem(requestObject);
	}
	//新增
	@RequestMapping(value="/addItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, EmptyData>  addItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.addItem(user, requestObject);
	}
	//修改
	@RequestMapping(value="/updateItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, EmptyData>  updateItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.updateItem(user, requestObject);
	}
	//删除
	@RequestMapping(value="/deleteItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, EmptyData>  deleteItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.deleteItem(requestObject);
	}
	//禁用
	@RequestMapping(value="/disableItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, EmptyData>  disableItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.disableItem(requestObject);
	}
	//启用
	@RequestMapping(value="/enableItem",method=RequestMethod.POST)
	public  ResponseObject<EmptyTag, EmptyData>  enableItem(@RequestParamUser User user,@RequestBody RequestObject<EmptyTag, ItemEntity> requestObject){ 
		return itemService.enableItem(requestObject);
	}
	
}

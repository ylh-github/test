package code_fb_cg.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.ItemEntity;
import code_fb_cg.entity.TbItem;
import code_fb_cg.mapper.TbItemMapper;
import code_fb_cg.service.ItemService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service
public class ItemServiceImp implements ItemService{

	@Autowired
	private TbItemMapper tbItemMapper;
	@Override
	public ResponseObject<EmptyTag, List<TbItem>> searchItem(RequestObject<EmptyTag, ItemEntity> requestObject) {
		// TODO Auto-generated method stub
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
			List<TbItem> searchItem = tbItemMapper.searchItem(requestObject.getData().getTbItem());
			return builder.data(searchItem).msg("查询成功").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> addItem(User user,RequestObject<EmptyTag, ItemEntity> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<TbItem> listTbItem = requestObject.getData().getListTbItem();
			if(listTbItem.isEmpty()) {
				return builder.msg("新增传值异常！！！！").errcode(Errcode.FailParameterError).build();
			}
			for (TbItem tbItem : listTbItem) {
				tbItem.setcCreater(user.getUserName());
				tbItem.setcCreatetime(new Date());
			}
			int addItem = tbItemMapper.addItem(requestObject.getData().getListTbItem());
			if(addItem>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("新增失败！！！！").errcode(Errcode.FailParameterError).build();
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return builder.msg("异常！！！！").errcode(Errcode.FailParameterError).build();
		}
		
		return builder.msg("新增成功！！！！").errcode(Errcode.Success).build();
	}

	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> updateItem(User user, RequestObject<EmptyTag, ItemEntity> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<TbItem> listTbItem = requestObject.getData().getListTbItem();
			if(listTbItem.isEmpty()) {
				return builder.msg("修改传值异常！！！！").errcode(Errcode.FailParameterError).build();
			}
			for (TbItem tbItem : listTbItem) {
				tbItem.setcModifier(user.getUserName());
				tbItem.setcModifydate(new Date());
			}
			int updateItem = tbItemMapper.updateItem(requestObject.getData().getListTbItem());
			if(updateItem>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("修改失败！！！！").errcode(Errcode.FailParameterError).build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return builder.msg("异常！！！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("修改成功！！！！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> deleteItem(RequestObject<EmptyTag, ItemEntity> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<TbItem> listTbItem = requestObject.getData().getListTbItem();
			if(listTbItem.isEmpty()) {
				return builder.msg("删除传值异常！！！！").errcode(Errcode.FailParameterError).build();
			}
			int updateItem = tbItemMapper.deleteItem(requestObject.getData().getListTbItem());
			if(updateItem>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("删除失败！！！！").errcode(Errcode.FailParameterError).build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return builder.msg("异常！！！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("删除成功！！！！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> disableItem(RequestObject<EmptyTag, ItemEntity> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<TbItem> listTbItem = requestObject.getData().getListTbItem();
			if(listTbItem.isEmpty()) {
				return builder.msg("禁用传值异常！！！！").errcode(Errcode.FailParameterError).build();
			}
			for (TbItem tbItem : listTbItem) {
				tbItem.setcDr("1");
			}
			int updateItem = tbItemMapper.ableItem(listTbItem);
			if(updateItem>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("禁用失败！！！！").errcode(Errcode.FailParameterError).build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return builder.msg("异常！！！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("禁用成功！！！！").errcode(Errcode.Success).build();
	}

	@Override
	public ResponseObject<EmptyTag, EmptyData> enableItem(RequestObject<EmptyTag, ItemEntity> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		try {
			List<TbItem> listTbItem = requestObject.getData().getListTbItem();
			if(listTbItem.isEmpty()) {
				return builder.msg("启用传值异常！！！！").errcode(Errcode.FailParameterError).build();
			}
			for (TbItem tbItem : listTbItem) {
				tbItem.setcDr("0");
			}
			int updateItem = tbItemMapper.ableItem(requestObject.getData().getListTbItem());
			if(updateItem>0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.msg("启用失败！！！！").errcode(Errcode.FailParameterError).build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return builder.msg("异常！！！！").errcode(Errcode.FailParameterError).build();
		}
		return builder.msg("启用成功！！！！").errcode(Errcode.Success).build();
	}

}

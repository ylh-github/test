package code_fb_cg.service.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb_cg.entity.TpContractlist;
import code_fb_cg.mapper.TpContractlistMapper;
import code_fb_cg.request.TbContractlistRequest;
import code_fb_cg.service.TpContractlistService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RandomId;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service
public class TpContractlistServiceImpl implements TpContractlistService{
	@Autowired
	private TpContractlistMapper tpContractlistMapper;
	
	
	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> M1S11A(RequestObject<EmptyTag, TbContractlistRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpContractlist contract = requestObject.getData().getContractlist().get(0);
		BigDecimal sum;//数量
		BigDecimal price;//单价
		BigDecimal sumprice;//总价
		if(contract.getcPrice() != null) {
			price = new BigDecimal(contract.getcPrice());
			contract.setcPrice(ri.formatForTwo(price));
		}
		if(contract.getcSum() != null) {
			sum = new BigDecimal(contract.getcSum());
			if (contract.getcNuit().equals("吨") || contract.getcNuit().equals("立方米")) {
				contract.setcSum(ri.formatToFour(sum));
			}else {
				contract.setcSum(ri.formatForTwo(sum));
			}			
		}
		if(contract.getcSum() != null && contract.getcPrice() != null) {
			sum = new BigDecimal(contract.getcSum());
			price = new BigDecimal(contract.getcPrice());
			sumprice = sum.multiply(price);
			contract.setcSumprice(ri.formatForTwo(sumprice));
		}
		contract.setcConnum(contract.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
		int row = tpContractlistMapper.insertSelective(contract);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
		}
		return builder.errcode(Errcode.Success).msg("添加成功").build();
	}


	@Override
	@Transactional
	public ResponseObject<EmptyTag, List<TpContractlist>> M1S11Q(
			RequestObject<EmptyTag, TbContractlistRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		TpContractlist record = requestObject.getData().getContract();
		if(record.getcConnum() != null) {
			record.setcConnum(record.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
		}		
		List<TpContractlist> contractlist = tpContractlistMapper.selectByConnum(record);
		if(contractlist.size() == 0) {
			return builder.errcode(Errcode.FailParameterError).msg("查询成功,无数据").build();
		}
		return builder.data(contractlist).errcode(Errcode.Success).build();
	}


	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11U(RequestObject<EmptyTag, TbContractlistRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		TpContractlist contract = requestObject.getData().getContractlist().get(0);
		BigDecimal sum;//数量
		BigDecimal price;//单价
		BigDecimal sumprice;//总价
		if(contract.getcPrice() != null) {
			price = new BigDecimal(contract.getcPrice());
			contract.setcPrice(ri.formatForTwo(price));
		}
		if(contract.getcSum() != null) {
			sum = new BigDecimal(contract.getcSum());
			if (contract.getcNuit().equals("吨") || contract.getcNuit().equals("立方米")) {
				contract.setcSum(ri.formatToFour(sum));
			}else {
				contract.setcSum(ri.formatForTwo(sum));
			}			
		}
		if(contract.getcSum() != null && contract.getcPrice() != null) {
			sum = new BigDecimal(contract.getcSum());
			price = new BigDecimal(contract.getcPrice());
			sumprice = sum.multiply(price);
			contract.setcSumprice(ri.formatForTwo(sumprice));
		}
		contract.setcConnum(contract.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));
		int row = tpContractlistMapper.updateByPrimaryKeySelective(contract);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("修改失败").build();
		}
		return builder.errcode(Errcode.Success).msg("修改成功").build();
	}


	@Override
	public ResponseObject<EmptyTag, EmptyData> M1S11D(RequestObject<EmptyTag, TbContractlistRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		List<TpContractlist> contractlist = requestObject.getData().getContractlist();
		int row = tpContractlistMapper.deleteById(contractlist);
		if(row >= 0) {
			return builder.errcode(Errcode.FailParameterError).msg("删除失败").build();
		}
		return builder.errcode(Errcode.Success).msg("删除成功").build();
	}


	@Override
	@Transactional
	public ResponseObject<EmptyTag, EmptyData> ExcelConSt(User user,
			RequestObject<EmptyTag, TbContractlistRequest> requestObject) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		RandomId ri = new RandomId();
		List<TpContractlist> contractlist = requestObject.getData().getContractlist();
		BigDecimal sum;//数量
		BigDecimal price;//单价
		BigDecimal sumprice;//总价
		Date date = new Date();
		for(int i = 0;i < contractlist.size();i++) {
			TpContractlist contract = contractlist.get(i);
			contract.setcCreater(user.getUserName());
			contract.setcCreatetime(date);
			if(contract.getcPrice() != null) {
				price = new BigDecimal(contract.getcPrice());
				contract.setcPrice(ri.formatForTwo(price));
			}
			if(contract.getcSum() != null) {
				sum = new BigDecimal(contract.getcSum());
				if (contract.getcNuit().equals("吨") || contract.getcNuit().equals("立方米")) {
					contract.setcSum(ri.formatToFour(sum));
				}else {
					contract.setcSum(ri.formatForTwo(sum));
				}			
			}
			if(contract.getcSumprice() != null) {
				sumprice = new BigDecimal(contract.getcSumprice());
				contract.setcSumprice(ri.formatForTwo(sumprice));
			}
			if(contract.getcConnum() == null) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
				return builder.errcode(Errcode.FailParameterError).msg("第"+(i+1)+"条数据合同号为空").build();
			}else {
				contract.setcConnum(contract.getcConnum().replaceAll(" ", "").replaceAll("[\\r]", "").replaceAll("[\\n]", ""));

			}
			int row = tpContractlistMapper.insertSelective(contract);
			if(row >= 0) {
				
				return builder.errcode(Errcode.FailParameterError).msg("添加失败").build();
			}
		}
		return builder.errcode(Errcode.Success).msg("导入成功").build();
	}

}

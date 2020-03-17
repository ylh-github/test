
package code_fb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import code_fb.entity.CG_C002_M1S1;
import code_fb.mapper.CG_C002_Mapper;
import code_fb.request.CG_C002_Request_M1S1;
import code_fb.response.CG_C002_Response_M1S1;
import code_fb.service.CG_C002_Service;
import code_fb_cg.entity.TpCguser;
import code_fb_cg.mapper.TpCguserMapper;
import code_fb_customer.CG_C002_Customer;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

@Service("cgC002Service")
public class CG_C002_ServiceImpl implements CG_C002_Service {
	@Autowired
	@Qualifier("cgC002Mapper")
	private CG_C002_Mapper frcDao;
	@Autowired
	private TpCguserMapper tpCguserMapper;
	CG_C002_Customer cgC002Customer = new CG_C002_Customer();

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ResponseObject<EmptyTag, CG_C002_Response_M1S1> M1S11Q(CG_C002_Request_M1S1 cgC002RequestM1s1,
			String session) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();
		CG_C002_Response_M1S1 data = new CG_C002_Response_M1S1();
		//cgC002RequestM1s1.getCgC002M1s1().get(0).setcCreater(cgC002RequestM1s1.getCgC002M1s1().get(0).getcCreater());
		//请购单进度查询  只能由申请部门看到  和主管
		TpCguser user = new TpCguser();
		user.setcName(cgC002RequestM1s1.getCgC002M1s1().get(0).getcCreater());
		TpCguser us = tpCguserMapper.selectLoginName(user);
		if (us ==null )
		{
			builder.errcode(Errcode.FailParameterError).msg("无数据或无权限").build();
			return builder.data(data).errcode(Errcode.Success).session(session).build();
		}
		else
		{
	//		if(!us.getcDutyname().equals("采购主管") && !us.getcDutyname().equals("管理员")) {
				cgC002RequestM1s1.getCgC002M1s1().get(0).setcDeptapply(us.getcDeptname());
	//		}
			List<CG_C002_M1S1> row = frcDao.M1S11QCG_C002_M1S1(cgC002RequestM1s1.getCgC002M1s1().get(0));
			if(row.size()==0) {
				return builder.errcode(Errcode.FailParameterError).msg("无数据或无权限").build();
			}
			data.setCgC002M1s1(row);
			return builder.data(data).errcode(Errcode.Success).session(session).build();
		}
	}
}
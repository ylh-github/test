package cn.tdhc.quality.util1;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import code_fb_cg.entity.ItemReport;
import code_fb_cg.mapper.TpCgcontractmtMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:dispatcherServlet-servlet.xml",
		"classpath:mybatis-config.xml"}) // 加载配置
public class TestJunit {

	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;
	
//	@Test
//	public void toSearch() {
//		String cDepartment = "SMI-M";
//		String cSubitemid = "2";
//		ItemReport selectAllCount = tpCgcontractmtMapper.selectAllCount(cDepartment,cSubitemid);
//		System.out.println("合同签订数:::"+selectAllCount.getHtNum());
//		
//	}
}

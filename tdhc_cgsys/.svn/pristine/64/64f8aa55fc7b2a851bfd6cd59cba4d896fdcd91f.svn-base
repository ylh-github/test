package code_fb_cg.controller;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.mapper.TpCgcontractmtMapper;
import transfer.BIGString;

@Component
public class TimerTask {

	@Autowired
	private TpCgcontractmtMapper tpCgcontractmtMapper;

	@Scheduled(cron = "0 00 01 * * ?")
	public void ArrivalDay() {
		List<TpCgcontractmt> tmtlist = tpCgcontractmtMapper.selectNotArrival();
		System.out.println("数量有" + tmtlist.size());
		// 相差的天数
		try {
			for (TpCgcontractmt tpCgcontractmt : tmtlist) {
				if (tpCgcontractmt.getcDr() != null) {
					int i = BIGString.compare_date(tpCgcontractmt.getcDr(), new Date());
					System.out.println(i + "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
					if (i == 1) {
						int daysBetween = BIGString.daysBetween(new Date(), tpCgcontractmt.getcDr());
						tpCgcontractmt.setcSw30("+" + String.valueOf(daysBetween) + "天");
					} else if (i == -1) {
						int daysBetween = BIGString.daysBetween(tpCgcontractmt.getcDr(), new Date());
						if(daysBetween == 0) {
							tpCgcontractmt.setcSw30(String.valueOf(daysBetween)+ "天");
						}else {
							tpCgcontractmt.setcSw30("-" + String.valueOf(daysBetween)+ "天");
						}
					} else {
						int daysBetween = 0;
						tpCgcontractmt.setcSw30(String.valueOf(daysBetween)+ "天");
					}
				}
				tpCgcontractmtMapper.updateByPrimaryKeySelective(tpCgcontractmt);
				System.out.println(tpCgcontractmt.getcSw30());
			}
			System.out.println("广泛广泛受到");
//			int row  = tpCgcontractmtMapper.updatelist(tmtlist);
			
			System.out.println("gfsdsfdfsgsdg");
		} catch (ParseException e) {
			e.printStackTrace();
			System.out.println("定时出错");
		}

		
	}
}

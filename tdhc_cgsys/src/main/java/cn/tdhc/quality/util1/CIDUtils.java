package cn.tdhc.quality.util1;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class CIDUtils {
	/**
	 * 业务类型(例如：QB   QS  )只能传两位
	 * @param typeOfservice
	 * @return
	 */
	public static String getCID(String typeOfservice){
		if(typeOfservice.length()>2) {
			typeOfservice=typeOfservice.substring(typeOfservice.length()-2,typeOfservice.length());
		}
		String date=new SimpleDateFormat("yyMMddHH").format(new Date());
		String uuId = UUID.randomUUID().toString();
		uuId = uuId.substring(uuId.length()-10, uuId.length()).toUpperCase();
		
		return typeOfservice+date+uuId;
	}
}

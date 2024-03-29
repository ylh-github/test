package transfer;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;
import java.util.regex.Pattern;

public class RandomId {

	/**
	 * (CK+年月日+随机四位序号)
	 * @author lhb
	 * @date 2018年6月22日上午8:48:19
	 * @param str
	 * @return
	 */
	public String getShippingId(String str){
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        Date now = new Date();
        String date = format.format(now);
        Random random = new Random();
		int r = random.nextInt(10000);
		String s = String.valueOf(r);
		if(s.length()==3) {
			s = "0"+s;
		}
		if(s.length()==2) {
			s = "00"+s;
		}
		if(s.length()==1) {
			s = "000"+s;
		}
		return str+date+s;
	}
	/**
	 * (年月日+随机四位序号)
	 * @author lhb
	 * @date 2018年6月22日上午8:48:28
	 * @return
	 */
	public String getRandomId(){
		
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
        Date now = new Date();
        String date = format.format(now);
        Random random = new Random();
		int r = random.nextInt(1000000);
		String str = String.valueOf(r);
		if(str.length()==5) {
			str = "0"+str;
		}
		if(str.length()==4) {
			str = "00"+str;
		}
		if(str.length()==3) {
			str = "000"+str;
		}
		if(str.length()==2) {
			str = "0000"+str;
		}
		if(str.length()==1) {
			str = "00000"+str;
		}
        return date+str;
	}
	/**
	 * 含参
	 * @param str
	 * @return
	 */
	public String getNo(String str) {
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmm");
        Date now = new Date();
        String date = format.format(now);
		return str+date;
		
	}
	public String getDiffId(String typeOfservice){
		if(typeOfservice.length()>2) {
			typeOfservice=typeOfservice.substring(typeOfservice.length()-2,typeOfservice.length());
		}
		String date=new SimpleDateFormat("yyMMddHH").format(new Date());
		String uuId = UUID.randomUUID().toString();
		uuId = uuId.substring(uuId.length()-10, uuId.length()).toUpperCase();
		
		return typeOfservice+date+uuId;
	}
	//BigDecimal 保留三位小数 不足补0
	public static String formatToNumber(BigDecimal obj) {
        java.text.DecimalFormat df = new java.text.DecimalFormat("#.000");
        if(obj.compareTo(BigDecimal.ZERO)==0) {
            return "0.000";
        }else if(obj.compareTo(BigDecimal.ZERO)>0&&obj.compareTo(new BigDecimal(1))<0){
            return "0"+df.format(obj).toString();
        }else {
            return df.format(obj).toString();
        }
    }
	//BigDecimal 保留四位小数 不足补0
		public  String formatToFour(BigDecimal obj) {
	        java.text.DecimalFormat df = new java.text.DecimalFormat("#.0000");
	        if(obj.compareTo(BigDecimal.ZERO)==0) {
	            return "0.0000";
	        }else if(obj.compareTo(BigDecimal.ZERO)>0&&obj.compareTo(new BigDecimal(1))<0){
	            return "0"+df.format(obj).toString();
	        }else {
	            return df.format(obj).toString();
	        }
	    }
	//BigDecimal 保留2位小数 不足补0
	public String formatForTwo(BigDecimal obj) {
		java.text.DecimalFormat df = new java.text.DecimalFormat("#.00");
		if(obj.compareTo(BigDecimal.ZERO)==0) {
			return "0.00";
		}else if(obj.compareTo(BigDecimal.ZERO)>0&&obj.compareTo(new BigDecimal(1))<0){
			return "0"+df.format(obj).toString();
		}else {
			return df.format(obj).toString();
		}
	}
	
	/**
	 * (Y或E+年月日+五位序号)
	 * @author lhb
	 * @date 2018年6月22日上午8:48:19
	 * @param str
	 * @return
	 */
	public String getCustomerID(String string){
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyMMddss");
		 Random random = new Random();
			int r = random.nextInt(10000);
			String str = String.valueOf(r);
			if(str.length()==4) {
				str = "0"+str;
			}
			if(str.length()==3) {
				str = "00"+str;
			}
			if(str.length()==2) {
				str = "000"+str;
			}
			if(str.length()==1) {
				str = "0000"+str;
			}
			return string+format.format(date)+str;
	}
	
	//判断调拨件数是否为整数
	public boolean isInteger(String str) {    
	    Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");    
	    return pattern.matcher(str).matches();    
	}
	/**
	 * 获取出口商
	 * @param str
	 * @return
	 */
	public String getCKS(String str) {
		String string = "";
		if(str.contains("DC")) {
			string = "上海鼎信投资（集团）有限公司";
			return string;
		}
		if(str.contains("KG")) {
			string = "青山控股集团有限公司";
			return string;
		}
		if(str.contains("TSE")) {
			string = "上海腾硕恩工程技术有限公司";
			return string;
		}
		if(str.contains("TT")) {
			string = "青拓集团有限公司";
			return string;
		}
		if(str.contains("RSTC")) {
			string = "福建宁穗安物流有限公司";
			return string;
		}
		if(str.contains("EEEM")) {
			string = "福建恒卓设备制造有限公司";
			return string;
		}
		return  null;
		
	}
}

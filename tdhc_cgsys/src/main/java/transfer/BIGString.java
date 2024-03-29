package transfer;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;

import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgreceivebook;
import code_fb_cg.request.TpCgorderRequest;
/**
 * 合并合同物资时计算购买数量
 * @author lhb
 * @时间：2018年12月6日下午3:13:54
 */
public class BIGString {
	
	/**
	 * 按照货物名称对传入数据进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgcontractst>> groupBillingDataByExcpBatchCode(List<TpCgcontractst> billingList) throws Exception{
		Map<String, List<TpCgcontractst>> resultMap = new HashMap<String, List<TpCgcontractst>>();
		try{
			for(TpCgcontractst tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcGoodsname())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcGoodsname()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractst> tmpList = new ArrayList<TpCgcontractst>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcGoodsname(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	//拟合同物资按照报关货物名称对传入数据进行分组
	public Map<String, List<TpCgcontractstt>> groupBillingDataBycSw08(List<TpCgcontractstt> billingList) throws Exception{
		Map<String, List<TpCgcontractstt>> resultMap = new HashMap<String, List<TpCgcontractstt>>();
		try{
			for(TpCgcontractstt tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcSw08())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcSw08()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractstt> tmpList = new ArrayList<TpCgcontractstt>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcSw08(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	
	/**
	 * 按照规格型号对传入数据进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgcontractst>> groupBillingDataByExcpBatchCodecSpec(List<TpCgcontractst> billingList) throws Exception{
		Map<String, List<TpCgcontractst>> resultMap = new HashMap<String, List<TpCgcontractst>>();
		try{
			for(TpCgcontractst tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcSpec())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcSpec()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractst> tmpList = new ArrayList<TpCgcontractst>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcSpec(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	public Map<String, List<TpCgcontractstt>> groupBillingDataByExcpBatchCodecSpect(List<TpCgcontractstt> billingList) throws Exception{
		Map<String, List<TpCgcontractstt>> resultMap = new HashMap<String, List<TpCgcontractstt>>();
		try{
			for(TpCgcontractstt tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcSpec())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcSpec()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractstt> tmpList = new ArrayList<TpCgcontractstt>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcSpec(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	
	/**
	 * 根据报关物资进行判断
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgorderRequest>> groupBillingDataBycCustoms(List<TpCgorderRequest> billingList) throws Exception{
		Map<String, List<TpCgorderRequest>> resultMap = new HashMap<String, List<TpCgorderRequest>>();
		try{
			for(TpCgorderRequest tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcCustoms())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcCustoms()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgorderRequest> tmpList = new ArrayList<TpCgorderRequest>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcCustoms(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	/**
	 * 按照报关物资规格型号对传入数据进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgorderRequest>> groupBillingDataByExcpBatchCodecCuspec(List<TpCgorderRequest> billingList) throws Exception{
		Map<String, List<TpCgorderRequest>> resultMap = new HashMap<String, List<TpCgorderRequest>>();
		try{
			for(TpCgorderRequest tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcCuspec())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcCuspec()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgorderRequest> tmpList = new ArrayList<TpCgorderRequest>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcCuspec(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	/**
	 *  按照报关物资备注cRemark 进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgorderRequest>> groupBillingDataByExcpBatchCodeForcRemark(List<TpCgorderRequest> billingList) throws Exception{
		Map<String, List<TpCgorderRequest>> resultMap = new HashMap<String, List<TpCgorderRequest>>();
		try{
			for(TpCgorderRequest tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcRemark())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcRemark()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgorderRequest> tmpList = new ArrayList<TpCgorderRequest>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcRemarkc(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	/**
	 * 将list中的Object用  备注cRemark 进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgcontractst>> groupBillingDataByExcpBatchCodeForRemark(List<TpCgcontractst> billingList) throws Exception{
		Map<String, List<TpCgcontractst>> resultMap = new HashMap<String, List<TpCgcontractst>>();
		try{
			for(TpCgcontractst tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcRemark())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcRemark()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractst> tmpList = new ArrayList<TpCgcontractst>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcRemark(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	public Map<String, List<TpCgcontractstt>> groupBillingDataByExcpBatchCodeForRemarkt(List<TpCgcontractstt> billingList) throws Exception{
		Map<String, List<TpCgcontractstt>> resultMap = new HashMap<String, List<TpCgcontractstt>>();
		try{
			for(TpCgcontractstt tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcRemark())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcRemark()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgcontractstt> tmpList = new ArrayList<TpCgcontractstt>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcRemark(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}

	/**
	 * 按照合同行号对传入数据进行分组
	 * @param billingList
	 * @return
	 * @throws Exception
	 */
	public Map<String, List<TpCgreceivebook>> groupBillingDataByExcpBatchCodecConline(List<TpCgreceivebook> billingList) throws Exception{
		Map<String, List<TpCgreceivebook>> resultMap = new HashMap<String, List<TpCgreceivebook>>();
		try{
			for(TpCgreceivebook tmExcpNew : billingList){
				if(resultMap.containsKey(tmExcpNew.getcConline())){//map中异常批次已存在，将该数据存放到同一个key（key存放的是异常批次）的map中
					resultMap.get(tmExcpNew.getcConline()).add(tmExcpNew);
				}else{//map中不存在，新建key，用来存放数据
					List<TpCgreceivebook> tmpList = new ArrayList<TpCgreceivebook>();
					tmpList.add(tmExcpNew);
					resultMap.put(tmExcpNew.getcConline(), tmpList);
				}
			}
		}catch(Exception e){
			throw new Exception("按照异常批次号对已开单数据进行分组时出现异常", e);
		}
		return resultMap;
	}
	
	
	/**
	 * 通过判断单位是否为吨 进行String类型的数量计算
	 * @param unit
	 * @param num
	 * @return
	 */
	public String get_Goodsnum2(String unit, String num) {
		RandomId ri = new RandomId();
		if(unit.equals("吨")) {
			String s = "";
			String str = num.replaceAll("/", ",");
			List<String> sList = Arrays.asList(str.split(","));
				BigDecimal number=new BigDecimal(sList.get(0));//给加数赋初值
				BigDecimal sum=new BigDecimal("0");//给“和”定义一个变量
				int i = 0;
				while(i<sList.size()){
					sum=sum.add(number);//实现累加
					System.out.println("第"+(i+1)+"次=:"+sum);
					if(i<sList.size()) {
						if((i+1)==sList.size()) {
							number=new BigDecimal(sList.get(i));
						}else {
							number=new BigDecimal(sList.get(i+1));
						}
						i= i+1;
					}
				}
				return ri.formatToFour(sum);
		}else {
			String s = "";
			String str = num.replaceAll("/", ",");
			System.out.println("hebing :::::"+str);
			List<String> sList = Arrays.asList(str.split(","));
			BigDecimal number=new BigDecimal(sList.get(0));//给加数赋初值
			BigDecimal sum=new BigDecimal("0");//给“和”定义一个变量
			int i = 0;
			while(i<sList.size()){
				sum=sum.add(number);//实现累加
				System.out.println("第"+(i+1)+"次=:"+sum);
				if(i<sList.size()) {
					if((i+1)==sList.size()) {
						number=new BigDecimal(sList.get(i));
					}else {
						number=new BigDecimal(sList.get(i+1));
					}
					i= i+1;
				}
			}
			return ri.formatForTwo(sum);
		}
	}

	/**
	 * 通过判断单位是否为吨 进行String类型的数量计算
	 * @param unit
	 * @param num
	 * @return
	 */
	public String get_Goodsnum(String unit, String num) {
		RandomId ri = new RandomId();
		if(unit.equals("吨")) {
			String s = "";
			String str = num.replaceAll("/", ",");
			List<String> sList = Arrays.asList(str.split(","));
				BigDecimal number=new BigDecimal(sList.get(0));//给加数赋初值
				BigDecimal sum=new BigDecimal("0");//给“和”定义一个变量
				int i = 0;
				while(i<sList.size()){
					sum=sum.add(number);//实现累加
					System.out.println("第"+(i+1)+"次=:"+sum);
					if(i<sList.size()) {
						if((i+1)==sList.size()) {
							number=new BigDecimal(sList.get(i));
						}else {
							number=new BigDecimal(sList.get(i+1));
						}
						i= i+1;
					}
				}
				return ri.formatToFour(sum);
		}else {
			String s = "";
			String str = num.replaceAll("/", ",");
			List<String> sList = Arrays.asList(str.split(","));
			BigDecimal number=new BigDecimal(sList.get(0));//给加数赋初值
			BigDecimal sum=new BigDecimal("0");//给“和”定义一个变量
			int i = 0;
			while(i<sList.size()){
				sum=sum.add(number);//实现累加
				System.out.println("第"+(i+1)+"次=:"+sum);
				if(i<sList.size()) {
					if((i+1)==sList.size()) {
						number=new BigDecimal(sList.get(i));
					}else {
						number=new BigDecimal(sList.get(i+1));
					}
					i= i+1;
				}
			}
			return ri.formatForTwo(sum);
		}
	}

	
	public String get_Sumprice(String sumprice) {
		RandomId ri = new RandomId();
			String s = "";
			String str = sumprice.replaceAll("/", ",");
			List<String> sList = Arrays.asList(str.split(","));
			BigDecimal number=new BigDecimal(sList.get(0));//给加数赋初值
			BigDecimal price=new BigDecimal("0");//给“和”定义一个变量
			int i = 0;
			while(i<sList.size()){
				price=price.add(number);//实现累加
				System.out.println("第"+(i+1)+"次=:"+price);
				if(i<sList.size()) {
					if((i+1)==sList.size()) {
						number=new BigDecimal(sList.get(i));
					}else {
						number=new BigDecimal(sList.get(i+1));
					}
					i= i+1;
				}
			}
			return ri.formatForTwo(price);
		
	}
	
	
	/**
	 * 计算两个日期之间相差的天数
	 * 
	 * @param smdate
	 *            较小的时间
	 * @param bdate
	 *            较大的时间
	 * @return 相差天数
	 * @throws ParseException
	 */
	public static int daysBetween(Date smdate, Date bdate) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		smdate = sdf.parse(sdf.format(smdate));
		bdate = sdf.parse(sdf.format(bdate));
		Calendar cal = Calendar.getInstance();
		cal.setTime(smdate);
		long time1 = cal.getTimeInMillis();
		cal.setTime(bdate);
		long time2 = cal.getTimeInMillis();
		long between_days = (time2 - time1) / (1000 * 3600 * 24);

		return Integer.parseInt(String.valueOf(between_days));
	}
	
	
	/**
	 * 获取某月的第一天
	 * @param year
	 * @param month
	 * @return
	 */
	public static Date getFirstDayOfMonth(int year,int month)
    {
        Calendar cal = Calendar.getInstance();
        //设置年份
        cal.set(Calendar.YEAR,year);
        //设置月份
        cal.set(Calendar.MONTH, month-1);
        //设置月份
        cal.set(Calendar.DAY_OF_MONTH, 1);
        // 时
        cal.set(Calendar.HOUR_OF_DAY, 0);
     	// 分
        cal.set(Calendar.MINUTE, 0);
     	// 秒
        cal.set(Calendar.SECOND, 0);
        //格式化日期
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        String lastDayOfMonth = sdf.format(cal.getTime());
        return cal.getTime();
    }
	/**
	 * 获取某月的最后一天
	 * @param year
	 * @param month
	 * @return
	 */
	public static Date getLastDayOfMonth(int year,int month)
    {
        Calendar cal = Calendar.getInstance();
        //设置年份
        cal.set(Calendar.YEAR,year);
        //设置月份
        cal.set(Calendar.MONTH, month-1);
        //获取某月最大天数
        int lastDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
        //设置日历中月份的最大天数
        cal.set(Calendar.DAY_OF_MONTH, lastDay);
        // 时
        cal.set(Calendar.HOUR_OF_DAY, 23);
     	// 分
        cal.set(Calendar.MINUTE, 59);
     	// 秒
        cal.set(Calendar.SECOND, 59);
        //格式化日期
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        String lastDayOfMonth = sdf.format(cal.getTime());
        return cal.getTime();
    }
	/**
	 * 字符串的日期格式的计算
	 */
	public static int daysBetween(String smdate, String bdate) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cal = Calendar.getInstance();
		cal.setTime(sdf.parse(smdate));
		long time1 = cal.getTimeInMillis();
		cal.setTime(sdf.parse(bdate));
		long time2 = cal.getTimeInMillis();
		long between_days = (time2 - time1) / (1000 * 3600 * 24);

		return Integer.parseInt(String.valueOf(between_days));
	}
	
	//判断时间大小
	public static int compare_date(Date DATE1, Date DATE2) {
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
//            Date dt1 = df.parse(DATE1);
//            Date dt2 = df.parse(DATE2);
            if (DATE1.getTime() > DATE2.getTime()) {
//                System.out.println("dt1 在dt2前");
                return 1;
            } else if (DATE1.getTime() < DATE2.getTime()) {
//                System.out.println("dt1在dt2后");
                return -1;
            } else {
                return 0;
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return 0;
    }
	
	//判断是否为汉字
	 public static boolean vd(String str) {

	        char[] chars = str.toCharArray();
	        boolean isUtf8 = false;
	        for (int i = 0; i < chars.length; i++) {
	            byte[] bytes = ("" + chars[i]).getBytes();
	            if (bytes.length == 2) {
	                int[] ints = new int[2];
	                ints[0] = bytes[0] & 0xff;
	                ints[1] = bytes[1] & 0xff;

	                if (ints[0] >= 0x81 && ints[0] <= 0xFE && ints[1] >= 0x40 && ints[1] <= 0xFE) {
	                    isUtf8 = true;
	                    break;
	                }
	            }
	        }
	        return isUtf8;
	    }
	 //判断字符串是否为数字类型
	 public static boolean isNumeric(String str){
//		 if(str.indexOf("-") == 0) {
//			 if(str.indexOf(".") != -1) {
//				 Pattern pattern = Pattern.compile("^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$");
//				 return pattern.matcher(str).matches();  	
//			 }
//		 }
//		 Pattern pattern = Pattern.compile("-?[0-9]+.？[0-9]*");
//		 return pattern.matcher(str).matches();   
//		 return StringUtils.isNumeric(str);
//		 return str.matches("-?[0-9]+.*[0-9]*");
		 return str.matches("-[0-9]+(.[0-9]+)?|[0-9]+(.[0-9]+)?");
	 }
}

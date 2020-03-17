package cn.tdhc.quality.util1;

import org.apache.commons.lang.StringUtils;

public class AgroupIdValueUtil {

	/**
	 * 初始化33 进制数据，索引位置代表字符的数值
	 */
	private static String chars = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
	private static int scale = 34;

	/**
	 * 将带有字母的字符串转换为10进制数据
	 * 
	 * @param str
	 * @return
	 */
	public static long getStrNum(String str) {

		// 将 0 开头的字符串进行替换
		str = str.replace("^0*", "");
		long num = 0;
		int index = 0;
		for (int i = 0; i < str.length(); i++) {
			// 查找字符的索引位置
			index = chars.indexOf(str.charAt(i));
			// 索引位置代表字符的数值
			num += (long) (index * (Math.pow(scale, str.length() - i - 1)));
		}
		return num;
	}

	/**
	 * 将数字转换为33进制
	 * 
	 * @param str 要转换的数据，length 转换后的字符长度，不足左侧补0
	 *            
	 * @return 62进制字符串
	 */
	public static String getConversionNum(long num, int length) {

		StringBuilder sb = new StringBuilder();
		int remainder = 0;

		while (num > scale - 1) {

			// 对 scale 进行求余，然后将余数追加至 sb 中，由于是从末位开始追加的，因此最后需要反转（reverse）字符串
			remainder = Long.valueOf(num % scale).intValue();
			sb.append(chars.charAt(remainder));

			num = num / scale;
		}
		
		sb.append(chars.charAt(Long.valueOf(num).intValue()));
		String value = sb.reverse().toString();
		return StringUtils.leftPad(value, length, '0');

	}
}

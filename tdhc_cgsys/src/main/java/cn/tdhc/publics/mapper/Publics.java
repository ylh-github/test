
package cn.tdhc.publics.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository("publics")
public interface Publics {
	
	/**
	 * 根据访问会话标识串,动态表名,查询用户档案表图片
	 * */
	String getUserCodeWithAtoken(@Param(value = "atoken")String atoken);
	
	/**
	 * 根据动态表名,动态字段,动态值,查询并判断此值得属性
	 * 
	 * tableName : 表名
	 * 
	 * columnName : 字段名
	 * 
	 * parameter : 值得名字
	 * */
	Integer getCountTableNum(@Param(value = "tableName")String tableName,@Param(value = "columnName")String columnName
			,@Param(value = "parameter") String parameter);
	
	/**
	 * 根据动态表名,动态字段,动态值,查询并判断此值得属性  in属性
	 * 
	 * tableName : 表名
	 * 
	 * columnName : 字段名
	 * 
	 * parameter : 值得名字
	 * */
	Integer getCountTableNumList(@Param(value = "tableName")String tableName,@Param(value = "columnName")String columnName
			,@Param(value = "parameter") List<String> parameter);
}
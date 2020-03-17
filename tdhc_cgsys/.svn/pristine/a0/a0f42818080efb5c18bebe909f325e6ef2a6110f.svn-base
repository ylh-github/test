package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb_cg.entity.TpCgordermt;
import code_fb_cg.request.MtRequest;
import code_fb_cg.request.TpCgordermtM1S13_Request;
import code_fb_cg.response.HomePageResponse;
import code_fb_cg.response.HompageRequest;
import code_fb_cg.response.OutExcelResponse;
/**
 * 
 * @author lhb
 * @时间：2018年8月16日上午11:29:16
 */
@Repository("tpCgordermtMapper")
public interface TpCgordermtMapper {
    int deleteByPrimaryKey(@Param("cId")String cId);
    int insert(TpCgordermt record);
    int insertSelective(TpCgordermt record);
    TpCgordermt selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(TpCgordermt record);
    int updateByOrdernum(TpCgordermt record);
    int updateByPrimaryKey(TpCgordermt record);
    
    //导入添加请购单主表
//    int addExcelmt(@Param("ordermt")List<TpCgordermt> ordermt);
    int addExcelmt(@Param("ordermt")List<TpCgordermt> newlist);
    //提交
    int M1S11UCG_Q001_M1S13(@Param("cgQ001M1s13")TpCgordermtM1S13_Request cgQ001M1s13);
    int updateForshenhe(@Param("cgQ001M1s13")List<TpCgordermt> mt,@Param("tpCgordermt")TpCgordermt tpCgordermt);
    //预登记查询请购单
    List<TpCgordermt> selectForOrdermt(MtRequest request);
    List<TpCgordermt> selectQ001_2(@Param("cgQ001M1s13")TpCgordermt requestObject);//采购员和采购助理的查询功能
    List<TpCgordermt> selectOrdermtNum(TpCgordermt requestObject);
    //数据字典动态查询
	List<TpCgordermt> get_data_value(@Param("cSw01")String csubitemdes, @Param("cSw02") String citemdes);
	List<TpCgordermt> get_data_subitemid(@Param("cSw01") String subitemid, @Param("cSw02")String citemdes);
	List<TpCgordermt> get_data_value_phone(@Param("cSw01")String csubitemdes, @Param("cSw02") String citemdes);
	List<TpCgordermt> get_data_value_allotman(@Param("cSw01")String csubitemdes, @Param("cSw02") String citemdes);
	int updateForshenhe_not(@Param("cgQ001M1s13")List<TpCgordermt> mt,@Param("tpCgordermt")TpCgordermt tpCgordermt);
	int updateForZF(@Param("list")List<String> list);
	OutExcelResponse selectS1S2(@Param("cId") String cId);
	List<TpCgordermt> selectORDERNUM();
	List<TpCgordermt> selectCGZL(@Param("s")String s,@Param("startTime")Date startTime,@Param("endTime")Date endTime);
	//T类导入进行校验
	List<TpCgordermt> selectBycOrdernum(TpCgordermt tpcgmt);
	//修改上传时间
	int  updateBycOrdernum(@Param("selectcOrdernum") List<TpCgordermt> selectcOrdernum);
	/**
	 * 统计请购单数量
	 * @return
	 */
	HomePageResponse selecttpCgordermtSum();
	HomePageResponse tpCgordermtSum(@Param("hompageRequest")HompageRequest hompageRequest);
	
}
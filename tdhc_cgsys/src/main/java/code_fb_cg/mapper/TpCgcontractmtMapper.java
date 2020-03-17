package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.entity.ItemReport;
import code_fb_cg.entity.ItemReportData;
import code_fb_cg.entity.TbGuildata;
import code_fb_cg.entity.TpCgcontractmt;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgorderstInfo;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.request.TbGuildRequest;
import code_fb_cg.response.HomePageResponse;
import code_fb_cg.response.HompageRequest;

public interface TpCgcontractmtMapper {
    int deleteByPrimaryKey(String cId);
    //逻辑删除
    int deleteUpdate(String cId);
    int insert(TpCgcontractmt record);
    int insertSelective(TpCgcontractmt record);
    TpCgcontractmt selectByPrimaryKey(String cId);
    int updateByPrimaryKeySelective(TpCgcontractmt record);
    int updateByPrimaryKey(TpCgcontractmt record);
    int updatelist(@Param("list")List<TpCgcontractmt> mtList);
    //查询合同号是否存在
    List<TpCgcontractmt> selectByConnum(@Param("cConnum")String cConnum);
    List<TpCgcontractmt> selectNotArrival();
    int updateMoney(TpCgcontractmt requestObject);
    List<TpCgcontractmt> selectById(TpCgcontractmt requestObject);
    int updateSTATE(TpCgcontractmt requestObject);//修改合同主表状态
    //作废
    int updateContractZF(@Param("list")List<TpCgcontractmt> requestObject);
    List<ConMtAndSt> selectByMTST(ConMtAndSt conMtAndSt);
	int YJdaohuo(@Param("list")List<TpCgcontractmt> requestObject);
	int YJfapiao(@Param("list")List<TpCgcontractmt> requestObject);
	int YJfuqing(@Param("list")List<TpCgcontractmt> mtList);
	
	List<TpCgcontractmt> selectNUM();
	List<TpCgcontractmt> selectSUPPLIER();
	List<TpCgcontractmt> selectByCpayway(@Param("cPayway")String cPayway);
	int updateQXHT(@Param("list")List<TpCgcontractmt> mtList);
	List<TpCgcontractmt> selectCGZL(@Param("ss")String ss,@Param("startTime") Date startTime,@Param("endTime")Date endTime);
	List<TpCgcontractmt> selectCGZR(@Param("ss")String ss,@Param("startTime") Date startTime,@Param("endTime")Date endTime);
	List<TpCgcontractmt> selectCGJL(@Param("ss")String ss,@Param("startTime") Date startTime,@Param("endTime")Date endTime);
	/**
	 * 统计已有合同的总数
	 * @return
	 */
	HomePageResponse  selectContmtSum();
	/**
	 * 有条件，根据条件统计已有的合同总量
	 * @param data
	 * @return
	 */
	HomePageResponse selectContmtNumBy(@Param("hompageRequest") HompageRequest hompageRequest);
	/**
	 * 根据条件统计已完成的合同量
	 * @param hompageRequest
	 * @return
	 */
	HomePageResponse completedContSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 根据条件统计已到货的合同量
	 * @param hompageRequest
	 * @return
	 */
	HomePageResponse arrGoodsSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 根据条件统计已付清的合同量
	 * @param data
	 * @return
	 */
	HomePageResponse payContSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 根据条件统计已开票的合同量
	 * @param hompageRequest
	 * @return
	 */
	HomePageResponse kaipContSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 根据条件统计延迟/提前的合同量
	 * @param hompageRequest
	 * @return
	 */
	List<TpCgcontractmt> deplayContSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 根据各种条件进行统计
	 * @param hompageRequest
	 * @return
	 */
	HomePageResponse countContSum(@Param("hompageRequest")HompageRequest hompageRequest);
	/**
	 * 审核通过
	 * @param cgMnhtM1s1
	 * @return
	 */
	int  M1S12ACG_MNHT_M1S1(@Param("cgMnhtM1s1")List<CG_MNHT_M1S1> cgMnhtM1s1);
	/**
	 * 查询没有预计到货时间
	 * @param requestObject
	 * @return
	 */
	List<TpCgcontractmt> selectwdh(TpCgcontractmt requestObject);
	/**
	 * 类别查询
	 * @param tbGuildRequest
	 * @param tbGuildata 
	 * @return
	 */
	List<TpCgcontractmt> M1S21Q(@Param("tbGuildRequest") TbGuildRequest tbGuildRequest, @Param("tbGuildata")TbGuildata tbGuildata);
	List<TpCgcontractmt> S1S21(String getcSw15);
	/**
	 * 清除类别
	 * @param tpCgcontractmt
	 * @return
	 */
	int  updateGuiL(TpCgcontractmt tpCgcontractmt);
	int  updateGuiLlist(@Param("list")List<TpCgcontractmt> mtList);
	
	int M1S11UCG_MNHT_M1S12(@Param("tpCgcontractmtt") List<TpCgcontractmtt> tpCgcontractmtt);
	int M1S11UCG_MNHT_M1S13(@Param("tpCgcontractmtt") List<TpCgcontractmtt> tpCgcontractmtt);
	/**
	 * 验收单，质保金
	 * @return
	 */
	List<TpCgcontractmt> M1S22S();
	int  updateJSXY(TpCgcontractmt tpCgcontractmt);
	//项目合同统计
	List<TpCgorderstInfo> itemNameHTSum(@Param("startTime")Date startTime, @Param("endTime")Date endTime, @Param("itemName")String itemName);
	//合同项采购员统计
	List<TpCgorderstInfo> searchHTManorSum(@Param("startTime")Date startTime, @Param("endTime")Date endTime, @Param("cManor")String[] cManor);
	//合同总项统计
	List<TpCgorderstInfo> searchHTSum(@Param("startTime")Date startTime, @Param("endTime")Date endTime);
	//签订公司统计
	List<TpCgorderstInfo> searchXFSum(@Param("startTime")Date startTime, @Param("endTime")Date endTime);
	//根据时间统计出船量
	List<TpCgorderstInfo> searchCCSum(@Param("startTime")Date startTime,@Param("endTime") Date endTime);
	ItemReport selectAllCount(@Param("cDepartment")String cDepartment, @Param("cSubitemid")String cSubitemid,
			@Param("startTime")Date startTime, @Param("endTime")Date endTime);
	
	List<ItemReportData> selectBycCludecom(@Param("cDepartment")String cDepartment);
	//统计各个签订公司对应的金额
	List<ItemReport> countAllCludecom();
}
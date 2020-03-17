package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb_cg.entity.TpCgcontractmtt;
import code_fb_cg.entity.TpCgcontractmttExample;
import code_fb_cg.entity.TpCgordermt2;
import code_fb_cg.entity.TpCgorderstInfo;
import code_fb_cg.request.ConMtAndSt;
import code_fb_cg.response.TpcgcontractmttResponse;
@Repository("tpCgcontractmttMapper")
public interface TpCgcontractmttMapper {
    int countByExample(TpCgcontractmttExample example);

    int deleteByExample(TpCgcontractmttExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TpCgcontractmtt record);

    int insertSelective(TpCgcontractmtt addTpCgcontractmt);

    List<TpCgcontractmtt> selectByExample(TpCgcontractmttExample example);

    TpCgcontractmtt selectByPrimaryKey(String cId);
    //查询所有的变更协议和结算协议
    List<TpCgcontractmtt> selectByOrcId(String cId);
    TpCgcontractmtt selectAgreement(String cId);
    //根据cId 查询是否在此合同有变更协议
    TpCgcontractmtt selectByBgcId(String cId);

    int updateByExampleSelective(@Param("record") TpCgcontractmtt record, @Param("example") TpCgcontractmttExample example);

    int updateByExample(@Param("record") TpCgcontractmtt record, @Param("example") TpCgcontractmttExample example);

    int updateByPrimaryKeySelective(TpCgcontractmtt record);

    int updateByPrimaryKey(TpCgcontractmtt record);
    //添加合同报错
    int updatecuowu(TpCgcontractmtt record);
    /**
     * 根据合同号查询是否存在
     * @param getcConnum
     * @return
     */
    List<TpCgcontractmtt> selectByConnum(@Param("cConnum") String getcConnum);
	/**
	 * 根据条件查询拟合同信息
	 * @param data
	 * @return
	 */
	List<ConMtAndSt> selectByMTSTT(@Param("conMtAndSt")ConMtAndSt conMtAndSt);
/**
 * 根据合同号修改合同信息
 * @param addTpCgcontractmt
 * @return
 */
	int  updateTpCgcontractmtt(TpCgcontractmtt addTpCgcontractmt);
/**
 * 查询拟合同信息
 * @param cg_MNHT_M1S1
 * @return
 */
	List<TpCgcontractmtt> selectInfo(@Param("cg_MNHT_M1S1")CG_MNHT_M1S1 cg_MNHT_M1S1);
/**
 * 根据合同修改合同信息，自定义
 * @param addTpCgcontractmt
 * @return
 */
	int updateTpCgcontractmtt2(TpCgcontractmtt addTpCgcontractmt);

int  M1S11UCG_MNHT_M1S12(@Param("tpCgcontractmtt") List<TpCgcontractmtt> tpCgcontractmtt);

int M1S11UCG_MNHT_M1S13(@Param("tpCgcontractmtt") List<TpCgcontractmtt> tpCgcontractmtt);

List<TpCgcontractmtt> selectBycConnum(@Param("cConnum")String getcConnum);
/**
 * 统计拟合同汇总对应的合同数量
 * @param getcManor
 * @param date2 
 * @param date 
 * @return
 */
TpCgorderstInfo searchNhtnum(@Param("cManor")String getcManor, @Param("startTime")Date startTime, @Param("endTime")Date endTime);
/**
 * 维护页面每段时间自动刷新
 * @return
 */
List<TpcgcontractmttResponse> selectInfoTime();

List<CG_MNHT_M1S1> tJXxkSJ(TpCgordermt2 tpCgordermt2);

}
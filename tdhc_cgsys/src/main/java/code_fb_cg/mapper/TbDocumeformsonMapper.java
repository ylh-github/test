package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_XXLY_M1S1;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformson;
import code_fb_cg.entity.TbDocumeformsonExample;
import code_fb_cg.entity.TpCgcontractmt;
@Repository("tbDocumeformsonMapper")
public interface TbDocumeformsonMapper {
    int countByExample(TbDocumeformsonExample example);

    int deleteByExample(TbDocumeformsonExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TbDocumeformson record);

    int insertSelective(@Param("addTbDocumeformson") List<TbDocumeformson> addTbDocumeformson);

    List<TbDocumeformson> selectByExample(TbDocumeformsonExample example);

    TbDocumeformson selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TbDocumeformson record, @Param("example") TbDocumeformsonExample example);

    int updateByExample(@Param("record") TbDocumeformson record, @Param("example") TbDocumeformsonExample example);

    int updateByPrimaryKeySelective(TbDocumeformson record);

    int updateByPrimaryKey(TbDocumeformson record);
    
    int updateBycFatherid(@Param("cConnum") String cConnum,@Param("cFatherid") String cFatherid);
    /**
     * 联动
     * @param tpCgcontractmt
     * @param tpCgcontractmt2 
     * @param tpCgcTime 
     * @return
     */
	List<TbDocumeformson>  M1S21Q(@Param("tpCgcontractmt") TpCgcontractmt tpCgcontractmt, @Param("tpCgcTime")TpCgcontractmt tpCgcTime, 
			@Param("cg_MNHT_M1S1")TpCgcontractmt tpCgcontract);
	/**
	 * 逻辑删除
	 * @param cg_XXLY_M1S1
	 * @return
	 */
	int  updateDelete(TbDocumeformson record);
	int  deleteUpdate(@Param("cg_XXLY_M1S1") CG_XXLY_M1S1 cg_XXLY_M1S1);
	int  updateBycId(@Param("cId")String cId);
	int  updateBycSw01(@Param("cId")String cId);
/**
 * 审核页面联动
 * @param tpCgcontractmt
 * @param tpCgTime
 * @param cg_MNHT_M1S1
 * @return
 */
	List<TbDocumeformson> M1S21Q4(@Param("tbDocumeform")TbDocumeform tbDocumeform);
	List<TbDocumeformson> M1S21Q5(@Param("cFatherid")String cFatherid);
	List<TbDocumeformson> M1S21Q6(@Param("cSw01")String cSw01,@Param("cFatherid")String cFatherid);

	/**
	 * 信息卡子表批量修改
	 * @param tbDocumeformson
	 * @return
	 */
	int  updateByPrimaryKeySelective2(@Param("addTbDocumeformson")List<TbDocumeformson> tbDocumeformson);
/**
 * 表2查询
 * @param tpCgcontractmt
 * @param tpCgTime
 * @param tpCgcontractmt2
 * @return
 */
//	List<TbDocumeformson> M1S21QS(@Param("tpCgcontractmt")TpCgcontractmt tpCgcontractmt, @Param("tpCgcTime")TpCgcontractmt tpCgTime,
//			@Param("cg_MNHT_M1S1")TpCgcontractmt tpCgcontractmt2);
	
	List<TbDocumeformson> M1S21QS(@Param("cg_MNHT_M1S1") CG_MNHT_M1S1 cg_MNHT_M1S1);
	/**
	 * 根据合同号查询信息卡物资信息
	 * @param cg_MNHT_M1S1
	 * @return
	 */
  List<TbDocumeformson> getInfo(CG_MNHT_M1S1 cg_MNHT_M1S1);
/**
 * 物理删除信息
 * @param cgXxlyM1s1
 * @return
 */
 int  deleteInfo(@Param("cgXxlyM1s1")List<CG_XXLY_M1S1> cgXxlyM1s1);
 /**
  * 物理删除信息卡物资信息
  * @param tbDocumeformson
  * @return
  */
 int M1S21D(@Param("tbDocumeformson") List<TbDocumeformson> tbDocumeformson);

}
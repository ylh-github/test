package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_XXLY_M1S1;
import code_fb_cg.entity.TbDocumeform;
import code_fb_cg.entity.TbDocumeformExample;
import code_fb_cg.entity.TbDocumeformson;
@Repository("tbDocumeformMapper")
public interface TbDocumeformMapper {
    int countByExample(TbDocumeformExample example);

    int deleteByExample(TbDocumeformExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TbDocumeform record);

    int insertSelective(TbDocumeform record);

    List<TbDocumeform> selectByExample(TbDocumeformExample example);

    TbDocumeform selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TbDocumeform record, @Param("example") TbDocumeformExample example);

    int updateByExample(@Param("record") TbDocumeform record, @Param("example") TbDocumeformExample example);

    int updateByPrimaryKeySelective(TbDocumeform record);

    int updateByPrimaryKey(TbDocumeform record);
    /**
     * 信息卡查询
     * @param tbDocumeform
     * @param startTime
     * @param endTime
     * @return
     */
 List<TbDocumeform> M1S11QCG_XXLY_M1S1(@Param("cg_XXLY_M1S1") TbDocumeform tbDocumeform, @Param("startTime")Date startTime, @Param("endTime")Date endTime);
 	/**
 	 * 根据合同号单条修改
 	 * @param tbDocumeform
 	 * @return
 	 */
 	int  updateBycCnnumSelective(TbDocumeform tbDocumeform);
 	
 	int updateByID(TbDocumeform tbDocumeformData);
/**
 * 根据合同号批量修改信息卡
 * @param tbDocumeformList
 * @return
 */
	int  updateTbDocumeform(@Param("tbDocumeformList")List<TbDocumeform> tbDocumeformList);
/**
 * 根据合同号查询信息
 * @param string
 * @return
 */
	List<TbDocumeform> seletByeCconnum(String string);
	/**
	 * 根据合同ID查询信息
	 * @param string
	 * @return
	 */
	List<TbDocumeform> seletByeConId(@Param("cId")String cId);
/**
 * 印尼审核查询
 * @param tbDocumeform
 * @param startTime
 * @param endTime
 * @return
 */
List<TbDocumeform> M1S11QCG_XXLY_M1S15Q(@Param("cg_XXLY_M1S1") TbDocumeform tbDocumeform,  @Param("startTime")Date startTime, @Param("endTime")Date endTime);
/**
 * 维护页面的查询
 * @param tbDocumeform
 * @param startTime
 * @param endTime
 * @return
 */
List<TbDocumeform> M1S11QCG_XXLY_M1S16Q(@Param("cg_XXLY_M1S1")TbDocumeform tbDocumeform,  @Param("startTime")Date startTime, @Param("endTime")Date endTime);
/**
 * 修改
 * @param tbDocumeform
 * @return
 */
int updateBycCnnum(TbDocumeform tbDocumeform);
/**
 * 条件查询
 * @param tbDocumeform
 * @param startTime
 * @param endTime
 * @return
 */
List<TbDocumeform> M1S11QCG_XXLY_M1S11(@Param("cg_XXLY_M1S1")TbDocumeform tbDocumeform, @Param("startTime")Date startTime,  @Param("endTime")Date endTime);
/**
 * 根据提交审核时间 
 * @param tbDocumeform
 * @param startTime
 * @param endTime
 * @return
 */
List<TbDocumeform> selectm1s1(@Param("cg_XXLY_M1S1")TbDocumeform tbDocumeform, @Param("startTime")Date startTime,  @Param("endTime")Date endTime);
/**
 * 根据提交审核时间  （查询状态为 未审核 的数据）
 * @param tbDocumeform
 * @param startTime
 * @param endTime
 * @return
 */
List<TbDocumeform> selectcSw11(@Param("cg_XXLY_M1S1")TbDocumeform tbDocumeform, @Param("startTime")Date startTime,  @Param("endTime")Date endTime);
/**
 * 维护页面标记筛选
 * @return
 */
List<TbDocumeform> searchBjInfo();
/**
 * 信息卡维护页面标记处理
 * @param tbDocumeformData
 * @return
 */
int deleteBj(@Param("tbDocumeform")List<TbDocumeform> tbDocumeformData);


}
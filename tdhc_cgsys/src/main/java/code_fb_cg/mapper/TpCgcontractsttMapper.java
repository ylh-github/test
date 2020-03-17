package code_fb_cg.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.entity.CG_MNHT_S1S2;
import code_fb_cg.entity.TpCgcontractst;
import code_fb_cg.entity.TpCgcontractstt;
import code_fb_cg.entity.TpCgcontractsttExample;
import code_fb_cg.entity.TpCgorderstInfo;
@Repository("tpCgcontractsttMapper")
public interface TpCgcontractsttMapper {
    int countByExample(TpCgcontractsttExample example);

    int deleteByExample(TpCgcontractsttExample example);

    int deleteByPrimaryKey(String cId);

    int insert(TpCgcontractstt record);

    int insertSelective(TpCgcontractstt tpCgcontract);
    
    int insertlist(@Param("tpCgcontractstt") List<TpCgcontractstt> tpCgcontractstt);

    List<TpCgcontractstt> selectByExample(TpCgcontractsttExample example);

    List<TpCgcontractstt> selectByColine(@Param("cConnum")String cConnum);
    //查询逻辑删除的合同物资
    List<TpCgcontractstt> selectFakedeath(@Param("cConnum")String cConnum);
    //查询和此合同有关的所有物资
    List<TpCgcontractstt> selectBycConnum(@Param("cConnum")String cConnum);
    
    List<TpCgcontractstt> selectByCountState(@Param("cConnum")String cConnum);
    
    TpCgcontractstt selectNumber_Line(@Param("cConnum")String cConnum,@Param("cConline")String cConline);
    List<TpCgcontractstt> selectByConline(@Param("cConnum")String cConnum,@Param("cConline")String cConline);
    
    TpCgcontractstt selectByPrimaryKey(String cId);

    int updateByExampleSelective(@Param("record") TpCgcontractstt record, @Param("example") TpCgcontractsttExample example);

    int updateByExample(@Param("record") TpCgcontractstt record, @Param("example") TpCgcontractsttExample example);

    int updateByPrimaryKeySelective(TpCgcontractstt record);

    int updateByPrimaryKey(TpCgcontractstt record);

    int updateByNumLine(TpCgcontractstt requestObject);
    //逻辑删除
    int updateByDelete(TpCgcontractstt record);
    
    List<TpCgcontractstt> selectBySw02(@Param("cSw02")String cSw02);
    List<TpCgcontractstt> selectBySw02_For4(@Param("cSw02")String cSw02);
	List<TpCgcontractstt> selectByCountSt(@Param("cConnum")String getcConnum);
	//进行判断模拟合同添加时是否有异常数据
	TpCgcontractstt getForGoodsnameAndSpec(
			@Param("cConnum")String cConnum, 
			@Param("cConline")String cConline, 
			@Param("cOrdernum")String cOrdernum, 
			@Param("cId")String cId
			);
	
	//进行判断合同物资导入时，excel表格中是否存在错误数据
		List<TpCgcontractstt> selNAMEASPECANUMALINE(
				@Param("cConnum")String cConnum, 
				@Param("cConline")String cConline,
				@Param("cGoodsname")String cGoodsname,
				@Param("cCuspec")String cCuspec
				);
	
	//根据合同物资名称和规格型号查询一条物资信息
		TpCgcontractstt selForGoodsnameAndSpec(
				@Param("cGoodsname")String cGoodsname,
				@Param("cCuspec")String cCuspec,
				@Param("cConnum")String cConnum, 
				@Param("cConline")String cConline);
	//合同物资合并时假删
	int deleteByUpdate(@Param("cId")String cId);

	List<TpCgcontractstt> S1S21Q2CG_MNHT_S1S2(@Param("cg_MNHT_M1S1")CG_MNHT_M1S1 cg_MNHT_M1S1);
/**
 * 合同物资批量修改
 * @param list
 * @return 
 */
	int updatetpCgcontractstt(@Param("list") List<TpCgcontractstt> list);
/**
 * 请购单中查询物资信息
 * @param getcSw04
 * @return
 */
	List<TpCgcontractstt> selectCgcontract(@Param("getcSw04")String getcSw04);

 TpCgorderstInfo searchNht(@Param("tpCgorderstInfo")TpCgorderstInfo tpCgorderstInfo, @Param("startTime")Date startTime, @Param("endTime")Date endTime);
}
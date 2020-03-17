package cn.tdhc.publics.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;

@Repository("upLoadImgMapper")
public interface UpLoadImgMapper {
	// 通过ID查询图片
	List<IWIP_MGROUP_M1S1> selectImgById(@Param("iwipMgroupM1s1") String iwipMgroupM1s1);

	// 通过ID信息的图片
	int upDateImgMsg(@Param("iwipMgroupM1s1") List<IWIP_MGROUP_M1S1> iwipMgroupM1s1);
}

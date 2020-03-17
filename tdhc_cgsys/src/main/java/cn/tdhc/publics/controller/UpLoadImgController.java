package cn.tdhc.publics.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cn.tdhc.TB_MATTER_GROUP.entity.IWIP_MGROUP_M1S1;
import cn.tdhc.publics.mapper.UpLoadImgMapper;
import cn.tdhc.quality.util1.Picture;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;

/**
 * 图片的上传与展示
 * 
 * @author 刘慧南
 *
 */
@RequestMapping("/imgPublics")
@RestController
public class UpLoadImgController {

	@Autowired
	private UpLoadImgMapper upLoadImgMapper;

	/**
	 * 图片的上传
	 * 
	 * @param str
	 *            主键
	 * @param file
	 *            图片文件
	 * @return
	 */
	@RequestMapping(value = "/upLoadImg", method = RequestMethod.POST)
	@ResponseBody
	public ResponseObject<EmptyTag, EmptyData> upLoadImg(HttpServletRequest request,
			@RequestParam(value = "documentText", required = true) String str,
			@RequestParam(value = "idFileImg", required = true) MultipartFile file) {
		ResponseObjectBuilder builder = ResponseObjectBuilder.create();

		String fileName = file.getOriginalFilename();

		String fileNameSub = fileName.substring(fileName.lastIndexOf(".") + 1);

		if ("jpg".equals(fileNameSub) || "png".equals(fileNameSub)) {
			String pictureUrl = Picture.saveFile(request, file);
			if (pictureUrl != null) {
				List<IWIP_MGROUP_M1S1> mgroupList = new ArrayList<IWIP_MGROUP_M1S1>();
				IWIP_MGROUP_M1S1 iwip_MGROUP_M1S1 = new IWIP_MGROUP_M1S1();
				iwip_MGROUP_M1S1.setcIdTbMatterGroup(str);
				iwip_MGROUP_M1S1.setcBigimgTbMatterGroup(pictureUrl);
				mgroupList.add(iwip_MGROUP_M1S1);
				int rows = upLoadImgMapper.upDateImgMsg(mgroupList);
				if (rows < 0) {
					return builder.errcode(Errcode.Success).msg("上传成功...").session("").build();
				} else {
					return builder.errcode(Errcode.FailParameterError).msg("上传失败...").session("").build();
				}
			} else {
				return builder.errcode(Errcode.FailParameterError).msg("上传文件格式不正确,只支持.jpg和.png图片").session("").build();
			}

		}
		return null;
	}

	/**
	 * 根据主键查询并展示图片
	 * 
	 * @param str
	 *            主键
	 * @return
	 */
	@RequestMapping(value = "/selectShowImg", method = RequestMethod.GET)
	@ResponseBody
	public void selectShowImg(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "documentText", required = true) String str) {
	}
}

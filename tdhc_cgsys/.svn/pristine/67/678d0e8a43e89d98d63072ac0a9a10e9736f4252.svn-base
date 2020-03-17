package code_fb_cg.service.impl;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import code_fb.entity.CG_MNHT_M1S1;
import code_fb.request.CG_MNHT_Request_M1S1;
import code_fb_cg.entity.TpConcatfj;
import code_fb_cg.mapper.TpConcatfjMapper;
import code_fb_cg.service.FileUploadService;
import transfer.EmptyData;
import transfer.EmptyTag;
import transfer.Errcode;
import transfer.RequestObject;
import transfer.ResponseObject;
import transfer.ResponseObjectBuilder;
import vip.toda.piper.auth.web.client.User;
@Service
public class FileUploadServiceImp implements FileUploadService{

	@Autowired
	private  TpConcatfjMapper tpConcatfjMapper;
	@Override
	public ResponseObject<EmptyTag, EmptyData> registerUpload(HttpServletRequest request, User user,
			TpConcatfj tpConcatfj, String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		//如果上传文件不为空，写入上传路径
		if(tpConcatfj.getMultFile().isEmpty()) {
			return buidler.msg("未选择要上传的文件！！！！").errcode(Errcode.FailParameterError).session(session).build();
		}
		try {
			TpConcatfj  tpConcat = new TpConcatfj();
			//上传文件路径
//			String path =request.getServletContext().getRealPath("/upload/");
			String path ="D:/upload/";
			//上传文件名
			String filename = tpConcatfj.getMultFile().getOriginalFilename();
			int indexPostion = filename.indexOf(".") + 1;
			String filenameExtension = filename.substring(indexPostion);
			System.out.println("文件格式::"+filenameExtension);
			  //暂不做文件格式限制
			 /* if(!"DOC".equals(filenameExtension)|| !"DOCX".equals(filenameExtension)) {//此时文件的扩展名为.xlsx
			  }*/
			File filepath = new File(path,filename);
			//判断路径是否存在，如果不存在就创建一个
			if(!filepath.getParentFile().exists()) {
				filepath.getParentFile().mkdir();
			}
			File fileUrl = new File(path + File.separator +filename);
			//将上传文件保存到一个目录文件当中
			tpConcatfj.getMultFile().transferTo(fileUrl);
			//文件名
			tpConcat.setcFilename(filename);
			//合同号
			tpConcat.setcConnum(tpConcatfj.getcConnum());
			//修改建人
			tpConcat.setcModifier(user.getUserName());
			//修改时间
			tpConcat.setcModifytime(new Date());
			List<TpConcatfj> selectTpConcatfj = tpConcatfjMapper.selectTpConcatfj(tpConcat);
			if(selectTpConcatfj.size()==0) {
				//版本号
				int verNumber =0;
				++verNumber;
				tpConcat.setcVersion(""+verNumber);
				int rown = tpConcatfjMapper.insertSelective(tpConcat);
				if(rown>0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("文件添加失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
				return buidler.msg("文件上传成功！！！！").errcode(Errcode.Success).session(session).build();
			}else {
				//修改
				for (TpConcatfj tpConcatfjInfo : selectTpConcatfj) {
					String getcHversion = tpConcatfjInfo.getcHversion();
					String version = tpConcatfjInfo.getcVersion();
					int parseInt = Integer.parseInt(version);
					if("".equals(getcHversion)|| getcHversion==null) {
						tpConcatfjInfo.setcHversion(String.valueOf(parseInt));
					}else {
						tpConcatfjInfo.setcHversion(tpConcatfjInfo.getcHversion()+";"+String.valueOf(parseInt));
					}
					parseInt++;
					tpConcatfjInfo.setcVersion(String.valueOf(parseInt));
					System.out.println("parseInt::::"+tpConcatfjInfo.getcVersion());
					System.out.println("getcHversion()====="+tpConcatfjInfo.getcHversion());
					tpConcatfjInfo.setcConnum(tpConcat.getcConnum());
					tpConcatfjInfo.setcFilename(tpConcat.getcFilename());
					tpConcatfjInfo.setcModifier(user.getUserName());
					tpConcatfjInfo.setcModifytime(new Date());
				}
				int updateList = tpConcatfjMapper.updateList(selectTpConcatfj);
				if(updateList>0) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();//事物回滚
					return buidler.msg("文件更新失败！！！！").errcode(Errcode.FailParameterError).session(session).build();
				}
				
			}
			
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return buidler.msg("文件上传成功！！！！").errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, List<TpConcatfj>> searchFile(
			RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject,String session) {
		ResponseObjectBuilder<EmptyTag, List<TpConcatfj>> buidler = ResponseObjectBuilder.create();
		CG_MNHT_M1S1 cg_MNHT_M1S1 = requestObject.getData().getCgMnhtM1s1().get(0);   
		List<TpConcatfj> searchFile = tpConcatfjMapper.searchFile(cg_MNHT_M1S1);
		return buidler.data(searchFile).errcode(Errcode.Success).session(session).build();
	}
	@Override
	public ResponseObject<EmptyTag, EmptyData> deleateFile(RequestObject<EmptyTag, CG_MNHT_Request_M1S1> requestObject,
			String session) {
		ResponseObjectBuilder<EmptyTag, EmptyData> buidler = ResponseObjectBuilder.create();
		TpConcatfj tpConcatfj = new TpConcatfj();
		tpConcatfj.setcConnum(requestObject.getData().getcConnum());
		tpConcatfj.setcFilename(requestObject.getData().getFilename());
		int deleateFile = tpConcatfjMapper.deleateFile(tpConcatfj);
		if(deleateFile >0) {
			buidler.errcode(Errcode.FailParameterError).msg("删除失败！！！").session(session).build();
		}
		return buidler.errcode(Errcode.Success).msg("删除失败！！！").session(session).build();
	}
	
}

package code_fb_cg.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
@WebServlet("/UploadServlet")
public class UploadServlet extends HttpServlet{
	
	private static final long serialVersionUID = 1L;
	public UploadServlet() {
		super();
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response)  throws ServletException , IOException{
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest request ,HttpServletResponse response) throws ServletException,IOException {
		//获得一个文件上上传的工厂类
		DiskFileItemFactory dfif = new DiskFileItemFactory();
		dfif.setSizeThreshold(1024*1024*8);
		dfif.setRepository(new File("java.io.tmpdir"));
		System.out.println(System.getProperty("java.io.tmpdir"));
		ServletFileUpload upload = new ServletFileUpload(dfif);
		upload.setSizeMax(1024*1024*50);
		String uploadPath = this.getServletContext().getRealPath("");
		System.out.println("当前服务器路径------》"+uploadPath);
		uploadPath = uploadPath+"..\\"+"upload";
		File uploadDir = new File(uploadPath);
		if(!uploadDir.exists()) {
			uploadDir.mkdir();
		}
		try {
			List<FileItem> formItem = upload.parseRequest(request);
			if(formItem != null && formItem.size()>0) {
				for(FileItem item:formItem) {
					if(!item.isFormField()) {
						String fileName = new File(item.getName()).getName();
						String filePath = uploadPath+"\\"+fileName;
						File storeFile = new File(filePath);
						item.write(storeFile);
						System.out.println(fileName);
						System.out.println(filePath);
					}
				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
			request.setAttribute("message", "文件上传失败:"+e.getMessage());
			request.getRequestDispatcher("error.html").forward(request, response);
		}catch(Exception e) {
			e.printStackTrace();
		}
		request.getRequestDispatcher("NewFile.html").forward(request, response);
		
	}
}
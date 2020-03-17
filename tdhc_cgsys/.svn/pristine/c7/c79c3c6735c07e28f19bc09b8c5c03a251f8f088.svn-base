package cn.tdhc.quality.util1;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

public class Picture {
	/**
     * 工具类：上传文件：改名字
     */
    public static String saveFile(HttpServletRequest request, MultipartFile file) {
        // 判断文件是否为空
        if (!file.isEmpty()) {
            try {

            	SimpleDateFormat sdf = new SimpleDateFormat("yyyymmdd");
            	
            	String contexPath= request.getSession().getServletContext().getRealPath("/");
        		
        		System.out.println(contexPath);
            	
                String separator = File.separator;
                String picPath2 = System.getProperty("catalina.home") + separator + "webapps" + File.separator;
                String directory = picPath2 + "wyInFile" + separator+ sdf.format(new Date()) + separator;
                String newPicName = "";
                if (file.getSize() != 0) {
                String originalFileNameLeft = file.getOriginalFilename();
                    // 新的图片名称
                    newPicName = UUID.randomUUID()
                            + originalFileNameLeft
                                    .substring(originalFileNameLeft
                                            .lastIndexOf("."));
                    // 新图片，写入磁盘
                    System.out.println(directory);
                    File f = new File(directory, newPicName);
                    if (!f.exists()) {
                        // 先创建文件所在的目录
                        f.getParentFile().mkdirs();
                    }
                    file.transferTo(f);
                }
                return "wyInFile" + File.separator.replace("\\", "/") +  sdf.format(new Date()) + separator.replace("\\", "/") + newPicName;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }

    /**
     * 工具类：上传文件：不改名字
     */
    public static String saveFile2(HttpServletRequest request,
            MultipartFile file) {
        // 判断文件是否为空
        if (!file.isEmpty()) {
            try {
            	
            	SimpleDateFormat sdf = new SimpleDateFormat("yyyymmdd");
            	
                String separator = File.separator;
                String picPath2 = System.getProperty("user.dir").replace("bin","webapps")+ File.separator;
                String directory = picPath2 + "wyInFile" + separator+ sdf.format(new Date()) + separator;
                String newPicName = "";
                if (file.getSize() != 0) {
                    String originalFileNameLeft = file.getOriginalFilename();
                    // 新的图片名称
                    int index = originalFileNameLeft.lastIndexOf(".");
                    newPicName = originalFileNameLeft.substring(0, index)
                            + sdf.format(new Date())
                            + originalFileNameLeft.substring(index);
                    // 新图片，写入磁盘
                    File f = new File(directory, newPicName);
                    if (!f.exists()) {
                        // 先创建文件所在的目录
                        f.getParentFile().mkdirs();
                    } else {
                        f.delete();
                    }

                    file.transferTo(f);
                }
                return sdf.format(new Date()) + separator + newPicName;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }
}

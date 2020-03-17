package code_fb_cg.page;


import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import transfer.RequestObject;
import transfer.ResponseObject;
import vip.toda.piper.auth.web.client.User;


@Aspect
@Component
public class PageAspect {
	
	@Pointcut("@annotation (code_fb_cg.page.ControllerPage)")
	//@Pointcut("@within(com.tdhc.common.page.ControllerPage)")
	public void pageAspect() {}

	@Around("pageAspect()")
	public Object Around(ProceedingJoinPoint joinPoint) throws Throwable {
		Object proceed = null;
		HttpServletRequest request = getRequest();
		String parameter = request.getParameter("pageNum");
		String parameter2 = request.getParameter("pageSize");
		if(!StringUtil.isEmpty(parameter) && !StringUtil.isEmpty(parameter2)) {
			boolean matches = Pattern.compile("[0-9]*").matcher(parameter).matches();
			boolean matches2 = Pattern.compile("[0-9]*").matcher(parameter2).matches();
			if(matches && matches2) {
				
				int pageNum = Integer.parseInt(parameter);
				
				int pageSize = Integer.parseInt(parameter2);
				
				PageHelper.startPage(pageNum,pageSize);
				
				proceed =joinPoint.proceed();
				
				if(proceed.getClass().isAssignableFrom(ResponseObject.class)) {
					
					ResponseObject<?, ?> responseObject = (ResponseObject<?,?>) proceed;
					List<?> list =(List<?>)responseObject.getData();
					PageInfo<?> pageInfo = new PageInfo<>(list);
					responseObject.setPageInfo(pageInfo);
					
					proceed=responseObject;
				}
				
				return proceed;
			}
		}
		proceed =joinPoint.proceed();
		
		return proceed;
	}
	
	private String getError(Exception e) {
		StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        e.printStackTrace(printWriter);
        String throwableinfo = stringWriter.toString();
		return throwableinfo;
	}
	/**
	 * 获取注解对象
	 * @param joinPoint
	 * @return
	 */
	private ControllerPage getMethodAnnotation(ProceedingJoinPoint joinPoint) {
		ControllerPage controllerLog = null;
		MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();  
        Method method = methodSignature.getMethod();  
        if (method.isAnnotationPresent(ControllerPage.class)) {
            //获取该方法上的注解名
        	controllerLog = method.getAnnotation(ControllerPage.class);
        	return controllerLog;
        }
        return controllerLog;
	}
	/**
	 * 获取用户
	 * @param joinPoint
	 * @return
	 */
	private Page getPage(ProceedingJoinPoint joinPoint) {
		Page page = null;
		Object[] args = joinPoint.getArgs();
		for (Object object : args) {
			if(object.getClass().isAssignableFrom(Page.class)) {
				page= (Page)object;
				return page;
			}
		}
		return page;
	}
	/**
	 * 获取请求参数
	 * @param joinPoint
	 * @return
	 */
	private String getRquestParam(ProceedingJoinPoint joinPoint) {
		Map<String, Object> map = new HashMap<String, Object>();
		Object[] args = joinPoint.getArgs();
		for (Object object : args) {
			if(object.getClass().isAssignableFrom(RequestObject.class)) {
				RequestObject<?, ?> requestObject = (RequestObject<?, ?>) object;
				map.put("requestObject", requestObject);
			}else if(object.getClass().isAssignableFrom(User.class)) {
				User user = (User)object;
				map.put("user", user);
			}
		}
		return JSON.toJSONString(map);
	}
	/**
	 * 获取HttpServletRequest对象
	 * @return
	 */
	private HttpServletRequest getRequest() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		return request;
	}
	/**
	 * 返回数据
	 * 
	 * @param retVal
	 * @return
	 */
	private String postHandle(Object retVal) {
		if (null == retVal) {
			return "";
		}
		return JSON.toJSONString(retVal);
	}
}

package cn.tdhc.quality.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class Filter
 */
public class CommonSetFilter  implements Filter {

    /**
     * Default constructor. 
     */
    public CommonSetFilter() {
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		//解决跨域问题  
        HttpServletResponse httpServletResponse =(HttpServletResponse) response; 
        // 指定允许其他域名访问   
        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");  
        // 响应类型   
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "*");  
        // 响应头设置   
        httpServletResponse.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token"); 
        
        httpServletResponse.setHeader("Access-Control-Expose-Headers", "*");
        chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

}

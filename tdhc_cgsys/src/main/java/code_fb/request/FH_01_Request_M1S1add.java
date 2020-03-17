
 
 package code_fb.request;
  import java.util.List;

import code_fb.entity.FH_excel;
import code_fb_cg.request.CG_EXCEL_Request;
  public class FH_01_Request_M1S1add {
  public List<FH_excel> excel;
  public List<FH_excel> getExcel() {
		return excel;
	}

	public void setExcel(List<FH_excel> excel) {
		this.excel = excel;
	}
  }
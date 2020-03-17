
package code_fb_customer;

import java.util.List;

import code_fb.entity.CG_H001_M1S1;
import code_fb.entity.CG_H001_S1S2;

public class CG_H001_Customer {
	public String check_M1S11A_CG_H001_M1S1(List<CG_H001_M1S1> cgH001M1s1) {
		return "success";
	}

	public String check_M1S11U_CG_H001_M1S1(List<CG_H001_M1S1> cgH001M1s1) {
		return "success";
	}

	public String check_M1S11D_CG_H001_M1S1(List<CG_H001_M1S1> cgH001M1s1) {
		return "success";
	}

	public String check_S1S21A_CG_H001_S1S2(List<CG_H001_S1S2> cgH001S1s2) {
		return "success";
	}

	public String check_S1S21U_CG_H001_S1S2(List<CG_H001_S1S2> cgH001S1s2) {
		return "success";
	}

	public String check_S1S21D_CG_H001_S1S2(List<CG_H001_S1S2> cgH001S1s2) {
		return "success";
	}

	public String check_S1S22MSG_CG_H001_S1S2(List<CG_H001_S1S2> cgH001S1s2) {
		
		
		if(cgH001S1s2 != null) {
			
			for(CG_H001_S1S2 cG_H001_S1S2 : cgH001S1s2) {
				
				cG_H001_S1S2.setcState("1");
			}
			
			return "success";
		}
		return "error";
		
	}
}
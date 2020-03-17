
package code_fb_customer;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import code_fb.entity.CG_H001_M1S1;
import code_fb.entity.CG_H002_S2S3;
import code_fb.mapper.CG_H001_Mapper;
import code_fb.mapper.CG_H002_Mapper;
import code_fb.request.H001request;
import code_fb.request.H002request;

@Repository("cG_H002_Customer")
public class CG_H002_Customer {
	
	@Autowired
	private CG_H001_Mapper cgH001Mapper;

	@Autowired
	private CG_H002_Mapper cgH002Mapper;

	public String check_S2S31A_CG_H002_S2S3(List<CG_H002_S2S3> cgH002S2s3) {

		List<CG_H001_M1S1> cGh002List = new ArrayList<CG_H001_M1S1>();

		Integer countPices = 0;

		H002request cG_H002_M1S1 = new H002request();

		cG_H002_M1S1.setcConnum(cgH002S2s3.get(0).getcConnum());

		List<CG_H001_M1S1> cGh001M1S1List = cgH001Mapper.M1S11QCG_H001_M1S1(cG_H002_M1S1);

		for (CG_H001_M1S1 cgh001M1S1 : cGh001M1S1List) {

			countPices += Integer.parseInt(cgh001M1S1.getcSw01());
		}

		if (cgH002S2s3 != null) {

			for (CG_H002_S2S3 cGh002S2S3 : cgH002S2s3) {

				CG_H001_M1S1 cGh002 = new CG_H001_M1S1();
				
				countPices += Integer.parseInt(cGh002S2S3.getcClearmoney());

				cGh002.setcSw01(cGh002S2S3.getcClearmoney() + countPices);

				cGh002.setcId(cGh002S2S3.getcId());
				
				cGh002List.add(cGh002);
			}

			Integer rows = cgH002Mapper.S2S31ACG_H002_S2S3(cgH002S2s3);
			Integer row = cgH001Mapper.M1S11UCG_H001_M1S1(cGh002List);

			if (rows < 0 && row < 0) {
				return "success-1";
			}

			return "success-0";
		}
		return "error-0";
	}

	public String check_S2S31U_CG_H002_S2S3(List<CG_H002_S2S3> cgH002S2s3) {
		
		List<CG_H001_M1S1> cGh002List = new ArrayList<CG_H001_M1S1>();


		Integer  countPices = 0;

		H002request cG_H002_M1S1 = new H002request();

		cG_H002_M1S1.setcConnum(cgH002S2s3.get(0).getcConnum());

		List<CG_H001_M1S1> cGh001M1S1List = cgH001Mapper.M1S11QCG_H001_M1S1(cG_H002_M1S1);

		for (CG_H001_M1S1 cgh001M1S1 : cGh001M1S1List) {

			countPices += Integer.parseInt(cgh001M1S1.getcSw01());
		}
		if(cgH002S2s3 != null) {
			
			List<CG_H002_S2S3> cgH002S2s3List =  cgH002Mapper.S2S31QCG_H002_S2S3(cgH002S2s3.get(0));
			
			for(CG_H002_S2S3 cG_H002_S2S3 : cgH002S2s3List) {
				Integer paint  = countPices - Integer.parseInt(cG_H002_S2S3.getcClearmoney());
				countPices = Integer.parseInt(paint.toString());
			}
			
			for(CG_H002_S2S3 cg_H002_S2S3 : cgH002S2s3) {
				
				CG_H001_M1S1 cGh002 = new CG_H001_M1S1();
				
				countPices += Integer.parseInt(cg_H002_S2S3.getcClearmoney());
				
				cGh002.setcId(cg_H002_S2S3.getcId());
				
				cGh002.setcSw01(cg_H002_S2S3.getcClearmoney() + countPices);
				
				cGh002List.add(cGh002);
			}
			
			Integer rows = cgH002Mapper.S2S31UCG_H002_S2S3(cgH002S2s3);
			Integer row = cgH001Mapper.M1S11UCG_H001_M1S1(cGh002List);
			
			if (rows < 0 && row < 0) {
				return "success-1";
			}
			
			return "success-0";
		}
		return "error";
	}

	public String check_S2S31D_CG_H002_S2S3(List<CG_H002_S2S3> cgH002S2s3) {
		List<CG_H001_M1S1> cGh002List = new ArrayList<CG_H001_M1S1>();


		Integer countPices = 0;

		H002request cG_H002_M1S1 = new H002request();

		cG_H002_M1S1.setcConnum(cgH002S2s3.get(0).getcConnum());

		List<CG_H001_M1S1> cGh001M1S1List = cgH001Mapper.M1S11QCG_H001_M1S1(cG_H002_M1S1);

		for (CG_H001_M1S1 cgh001M1S1 : cGh001M1S1List) {

			countPices += Integer.parseInt(cgh001M1S1.getcSw01());
		}

		if (cgH002S2s3 != null) {

			for (CG_H002_S2S3 cGh002S2S3 : cgH002S2s3) {

				CG_H001_M1S1 cGh002 = new CG_H001_M1S1();
				
				countPices += Integer.parseInt(cGh002S2S3.getcClearmoney());

				Integer countPlce = Integer.parseInt(cGh002S2S3.getcClearmoney()) - countPices;

				cGh002.setcSw01(countPlce.toString());

				cGh002.setcId(cGh002S2S3.getcId());
				
				cGh002List.add(cGh002);
			}

			Integer rows = cgH002Mapper.S2S31DCG_H002_S2S3(cgH002S2s3);
			Integer row = cgH001Mapper.M1S11UCG_H001_M1S1(cGh002List);

			if (rows < 0 && row < 0) {
				return "success-1";
			}
			return "success-0";
		}
		return "error";
	}
}
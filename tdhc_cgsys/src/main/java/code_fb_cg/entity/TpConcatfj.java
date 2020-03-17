package code_fb_cg.entity;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class TpConcatfj {
    private String cId;

    private String cConnum;

    private String cFilename;

    private String cFileadress;

    private String cVersion;

    private String cHversion;

    private String cDescription;

    private String cCreater;

    private Date cCreatetime;

    private String cModifier;

    private Date cModifytime;

    private String cRemark;

    private String cDr;

    private Date cTimestamp;

    private String cSw01;

    private String cSw02;

    private String cSw03;

    private String cSw04;

    private String cSw05;

    private String cSw06;

    private String cSw07;

    private String cSw08;

    private String cSw09;

    private String cSw10;

    private MultipartFile multFile;
    
    
    //method
    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId == null ? null : cId.trim();
    }

    public String getcConnum() {
        return cConnum;
    }

    public void setcConnum(String cConnum) {
        this.cConnum = cConnum == null ? null : cConnum.trim();
    }

    public String getcFilename() {
        return cFilename;
    }

    public void setcFilename(String cFilename) {
        this.cFilename = cFilename == null ? null : cFilename.trim();
    }

    public String getcFileadress() {
        return cFileadress;
    }

    public void setcFileadress(String cFileadress) {
        this.cFileadress = cFileadress == null ? null : cFileadress.trim();
    }

    public String getcVersion() {
        return cVersion;
    }

    public void setcVersion(String cVersion) {
        this.cVersion = cVersion == null ? null : cVersion.trim();
    }

    public String getcHversion() {
        return cHversion;
    }

    public void setcHversion(String cHversion) {
        this.cHversion = cHversion == null ? null : cHversion.trim();
    }

    public String getcDescription() {
        return cDescription;
    }

    public void setcDescription(String cDescription) {
        this.cDescription = cDescription == null ? null : cDescription.trim();
    }

    public String getcCreater() {
        return cCreater;
    }

    public void setcCreater(String cCreater) {
        this.cCreater = cCreater == null ? null : cCreater.trim();
    }

    public Date getcCreatetime() {
        return cCreatetime;
    }

    public void setcCreatetime(Date cCreatetime) {
        this.cCreatetime = cCreatetime;
    }

    public String getcModifier() {
        return cModifier;
    }

    public void setcModifier(String cModifier) {
        this.cModifier = cModifier == null ? null : cModifier.trim();
    }

    public Date getcModifytime() {
        return cModifytime;
    }

    public void setcModifytime(Date cModifytime) {
        this.cModifytime = cModifytime;
    }

    public String getcRemark() {
        return cRemark;
    }

    public void setcRemark(String cRemark) {
        this.cRemark = cRemark == null ? null : cRemark.trim();
    }

    public String getcDr() {
        return cDr;
    }

    public void setcDr(String cDr) {
        this.cDr = cDr == null ? null : cDr.trim();
    }

    public Date getcTimestamp() {
        return cTimestamp;
    }

    public void setcTimestamp(Date cTimestamp) {
        this.cTimestamp = cTimestamp;
    }

    public String getcSw01() {
        return cSw01;
    }

    public void setcSw01(String cSw01) {
        this.cSw01 = cSw01 == null ? null : cSw01.trim();
    }

    public String getcSw02() {
        return cSw02;
    }

    public void setcSw02(String cSw02) {
        this.cSw02 = cSw02 == null ? null : cSw02.trim();
    }

    public String getcSw03() {
        return cSw03;
    }

    public void setcSw03(String cSw03) {
        this.cSw03 = cSw03 == null ? null : cSw03.trim();
    }

    public String getcSw04() {
        return cSw04;
    }

    public void setcSw04(String cSw04) {
        this.cSw04 = cSw04 == null ? null : cSw04.trim();
    }

    public String getcSw05() {
        return cSw05;
    }

    public void setcSw05(String cSw05) {
        this.cSw05 = cSw05 == null ? null : cSw05.trim();
    }

    public String getcSw06() {
        return cSw06;
    }

    public void setcSw06(String cSw06) {
        this.cSw06 = cSw06 == null ? null : cSw06.trim();
    }

    public String getcSw07() {
        return cSw07;
    }

    public void setcSw07(String cSw07) {
        this.cSw07 = cSw07 == null ? null : cSw07.trim();
    }

    public String getcSw08() {
        return cSw08;
    }

    public void setcSw08(String cSw08) {
        this.cSw08 = cSw08 == null ? null : cSw08.trim();
    }

    public String getcSw09() {
        return cSw09;
    }

    public void setcSw09(String cSw09) {
        this.cSw09 = cSw09 == null ? null : cSw09.trim();
    }

    public String getcSw10() {
        return cSw10;
    }

    public void setcSw10(String cSw10) {
        this.cSw10 = cSw10 == null ? null : cSw10.trim();
    }

	public MultipartFile getMultFile() {
		return multFile;
	}

	public void setMultFile(MultipartFile multFile) {
		this.multFile = multFile;
	}
    
}
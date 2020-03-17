package code_fb_cg.request;
/**
 * 
 * @author lhb
 * @时间：2018年8月27日下午8:21:30
 */
public class AllotForData {

	private String cMustneed;//是否急需
	private String cGoodsname;//物资名称
	private String cTypename;//物资类型
	private String cSpec;//规格型号
	private String cManor;//采购员
	private String cAllotstate;//分配状态
	
	public String getcAllotstate() {
		return cAllotstate;
	}
	public void setcAllotstate(String cAllotstate) {
		this.cAllotstate = cAllotstate;
	}
	public String getcMustneed() {
		return cMustneed;
	}
	public void setcMustneed(String cMustneed) {
		this.cMustneed = cMustneed;
	}
	public String getcGoodsname() {
		return cGoodsname;
	}
	public void setcGoodsname(String cGoodsname) {
		this.cGoodsname = cGoodsname;
	}
	public String getcTypename() {
		return cTypename;
	}
	public void setcTypename(String cTypename) {
		this.cTypename = cTypename;
	}
	public String getcSpec() {
		return cSpec;
	}
	public void setcSpec(String cSpec) {
		this.cSpec = cSpec;
	}
	public String getcManor() {
		return cManor;
	}
	public void setcManor(String cManor) {
		this.cManor = cManor;
	}
	
}

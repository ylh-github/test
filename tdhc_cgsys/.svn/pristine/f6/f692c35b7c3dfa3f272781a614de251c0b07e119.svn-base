package transfer;

import java.util.Date;

public class RequestObject<TTag, TData> {

	private String ver;       //版本号,用于标识当前数据格式的版本号
	private String session;   //会话标识,用于表示会话顺序
	private TTag tag;         //附加数据,由前后端约定的非用户数据
	private TData data;       //数据内容

	public String getVer() {
		return ver;
	}

	public void setVer(String ver) {
		this.ver = ver;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

	public TTag getTag() {
		return tag;
	}

	public void setTag(TTag tag) {
		this.tag = tag;
	}

	public TData getData() {
		return data;
	}

	public void setData(TData data) {
		this.data = data;
	}

}

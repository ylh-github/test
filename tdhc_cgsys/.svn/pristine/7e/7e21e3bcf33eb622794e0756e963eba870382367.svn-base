package transfer;

public class ResponseObjectBuilder<TTag, TData> {


	private final ResponseObject<TTag, TData> responseObject = new ResponseObject<TTag, TData>();

	public static <TTag, TData> ResponseObjectBuilder<TTag, TData> create() {
		return new ResponseObjectBuilder<TTag, TData>();
	}

	public ResponseObjectBuilder<TTag, TData> ver(String ver) {
		responseObject.setVer(ver);
		return this;
	}

	public ResponseObjectBuilder<TTag, TData> errcode(String errcode) {
		responseObject.setErrcode(errcode);
		return this;
	}

	public ResponseObjectBuilder<TTag, TData> msg(String msg) {
		responseObject.setMsg(msg);
		return this;
	}

	public ResponseObjectBuilder<TTag, TData> session(String session) {
		responseObject.setSession(session);
		return this;
	}

	public ResponseObjectBuilder<TTag, TData> tag(TTag tag) {
		responseObject.setTag(tag);
		return this;
	}

	public ResponseObjectBuilder<TTag, TData> data(TData data) {
		responseObject.setData(data);
		return this;
	}

	public ResponseObject<TTag, TData> build() {
		return this.responseObject;
	}

}

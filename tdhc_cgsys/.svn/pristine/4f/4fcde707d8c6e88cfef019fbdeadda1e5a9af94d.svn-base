package transfer;

public class RequestObjectBuilder<TTag, TData> {

	private RequestObjectBuilder() {

	}

	private final RequestObject<TTag, TData> requestObject = new RequestObject<TTag, TData>();

	public static <TTag, TData> RequestObjectBuilder<TTag, TData> create() {
		return new RequestObjectBuilder<TTag, TData>();
	}

	public RequestObjectBuilder<TTag, TData> ver(String ver) {
		requestObject.setVer(ver);
		return this;
	}

	public RequestObjectBuilder<TTag, TData> session(String session) {
		requestObject.setSession(session);
		return this;
	}

	public RequestObjectBuilder<TTag, TData> tag(TTag tag) {
		requestObject.setTag(tag);
		return this;
	}

	public RequestObjectBuilder<TTag, TData> data(TData data) {
		requestObject.setData(data);
		return this;
	}

	public RequestObject<TTag, TData> build() {
		return this.requestObject;
	}

}

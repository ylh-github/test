package transfer;

public final class EmptyData {

	private static final EmptyData value = new EmptyData();

	public static EmptyData getValue() {
		return value;
	}

}

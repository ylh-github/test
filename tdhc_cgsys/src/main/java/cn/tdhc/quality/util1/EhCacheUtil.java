package cn.tdhc.quality.util1;

import java.net.URL;


public class EhCacheUtil {
	// ehcache.xml 保存在src/main/resources/
	private static final String path = "/ehcache.xml";

	private URL url;

//	private CacheManager manager;

	private static EhCacheUtil ehCache;

//	private EhCacheUtil(String path) {
//		url = getClass().getResource(path);
//		manager = CacheManager.create(url);
//	}

//	public static EhCacheUtil getInstance() {
//		if (ehCache == null) {
//			ehCache = new EhCacheUtil(path);
//		}
//		return ehCache;
//	}

//	public void put(String cacheName, String key, Object value) {
//		Cache cache = manager.getCache(cacheName);
//		Element element = new Element(key, value);
//		cache.put(element);
//	}

//	public Object get(String cacheName, String key) {
//		Cache cache = manager.getCache(cacheName);
//		Element element = cache.get(key);
//		return element == null ? null : element.getObjectValue();
//	}

//	public Cache get(String cacheName) {
//		return manager.getCache(cacheName);
//	}

//	public void remove(String cacheName, String key) {
//		Cache cache = manager.getCache(cacheName);
//		cache.remove(key);
//	}
}

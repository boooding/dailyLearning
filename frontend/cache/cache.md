
浏览器缓存

网页缓存，目前网站的缓存策略是什么样的

跟缓存有关
如何我设计完了一个包，你觉得我怎么发布他比较好（答：CDN服务器托管，设计缓存。）
强制缓存和协商缓存说一下。
我能不能把缓存时间设计为1年或者2年，你觉的会有啥问题？


 http缓存
第一次访问返回200并缓存资源文件
下一次访问，强缓存优先级高，首先比较cache-control中的max-age是否过期，没有就命中强缓存
协商缓存首先根据Etag判断资源有无修改，Etag一致则命中协商缓存，否则返回新的资源和Etag
没有Etag，比较Last-Modified和被请求文件最后修改时间，一致则命中协商缓存，否则返回新的资源和Last-Modified

浏览器都有哪几种缓存？区别是什么

怎样让一个页面不缓存

git 缓存区工作区

假设有一个接口，返回的数据做缓存，数据量很大，这些数据可能会变也可能不变，想要保证这个数据始终拿到的是最新的，要怎么去做
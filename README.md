#KLocation


使用正则匹配url模拟返回window.location的值


##构建状态



[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)



##使用方法

```
    <script src="./KLocation.js"></script>
```
or
```
    npm install klocation
```

##实例化：


    KLocation("https://github.com?a=1&b=2")
    
    /*Objcet{
        url:"https://github.com?a=1&b=2",
        host : "github.com",
        protocol : "https:",
        pathname : "/",
        port :  ''
        hostname : "github.com"
        }*/
        
##Method：

* getParam() // 获取url参数集合返回一个对象

  @return Object
  
```
  KLocation(url).getParam() 
    // {a:1,b:2}
```
* getHost() // 获取url对应host

  @return string
```
  KLocation(url).getHost() 
  // github.com
```
* getProtocol() // 获取url对应协议
  
  @return string
```
  KLocation(url).getProtocol()
  // https:
```
* getPort() // 获取url对应端口

  @return string
```
  KLocation(url).getPort()
  // ''
```
* getPathname() // 获取url对应pathname

  @return string
```
  KLocation(url).getPathname()
  // "/"
```
    

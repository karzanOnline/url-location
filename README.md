#KLocation
----------

使用正则匹配url模拟返回window.location的值


##构建状态
----------


[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)



##使用方法
----------
```
    <script src="./KLocation.js"></script>
```
or
```
    npm install klocation
```

##实例化：
----------

    KLocation("https://github.com?a=1&b=2")
    
    /*Objcet{
        url:"https://github.com?a=1&b=2",
        host : "github.com",
        protocol : "https:",
        pathname : "/",
        port :  ''
        hostname : "www.github.com"
        }*/
        
##Method：
----------

返回json化参数
    
    KLocation(url).getParam() 
    // {a:1,b:2}
    
返回host

    KLocation(url).getHost() 
    // github.com

返回Protocol

    KLocation(url).getProtocol()
    // https:
    
返回port
    
    KLocation(url).getPort()
    // ''
    
返回pathname
    
    KLocation(url).getPathname()
    // '/'
    
    

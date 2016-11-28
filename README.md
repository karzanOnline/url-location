
**构建状态**


[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)

**KLocation**

使用正则匹配url模拟返回window.location的值

使用方法

    <script src="./KLocation.js"></script>

实例化：

    KLocation("http://www.baidu.com?a=1&b=2")
    
    /*Objcet{
        url:"http://www.baidu.com?a=1&b=2",
        host : "www.baidu.com",
        protocol : "http:",
        pathname : "/",
        port :  ''
        hostname : "www.baidu.com"
        }*/
        
方法：

返回json化参数
    
    KLocation(url).getParam() // {a:1,b:2}
    
返回host

    KLocation(url).getHost() 

返回Protocol

    KLocation(url).getProtocol()
    
返回port
    
    KLocation(url).getPort()
    
返回pathname
    
    KLocation(url).getPathname()
    
    

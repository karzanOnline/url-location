**url-location**

使用正则匹配url模拟返回window.location的值

使用方法

    <script src="./KLocation.js"></script>

实例化：

    KLocation("http://www.baidu.com?a=1&b=2")
    
    //Objcet{
        url:"http://www.baidu.com?a=1&b=2",
        host : "www.baidu.com",
        protocol : "http:",
        pathname : //待添加,
        search : //待添加,
        port :  //待添加
        hostname : //待添加
        }
        
方法：

返回json化参数
    
    KLocation().getParam() // {a:1,b:2}
    
返回host

    KLocation().getHost() 

返回Protocol

    KLocation()。getProtocol()
    
...待我回家写完
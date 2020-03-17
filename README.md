## KLocation


将输入的字符串使用正则匹配，模拟返回window.location的值


## 构建状态

[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)



## 使用方法

```js
    <script src="./KLocation.js"></script>
```

or

```js
    npm install klocation
```

## 实例化：


    KLocation("https://github.com?a=1&b=2")
    
    /*Objcet{
        url:"https://github.com?a=1&b=2",
        host : "github.com",
        protocol : "https:",
        pathname : "/",
        port :  ''
        hostname : "github.com"
        }*/
        
## 方法：

### getParam

 获取url参数集合返回一个对象
  
```js
  KLocation(url).getParam() 
    // {a:1,b:2}
```

### getHost

获取url对应host

```js
  KLocation(url).getHost() 
  // github.com
```

### getProtocol

获取url对应协议

```
  KLocation(url).getProtocol()
  // https:
```

### getPort

获取url对应端口
 
```
  KLocation(url).getPort()
  // ''
```

### getPathname

获取url对应pathname

```
  KLocation(url).getPathname()
  // "/"
```
    

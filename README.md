## KLocation


将输入的字符串使用正则匹配，模拟返回window.location的值


## 构建状态

[![Build Status](https://travis-ci.org/karzanOnline/url-location.svg?branch=master)](https://travis-ci.org/karzanOnline/url-location)



## 使用方法

```js
<script src="./KLocation.js"></script>
```

or

```shell
npm install klocation
```

## 实例化：

```js
KLocation("https://github.com?a=1&b=2")

/*Objcet{
    url:"https://github.com?a=1&b=2",
    host : "github.com",
    protocol : "https:",
    pathname : "/",
    port :  ''
    hostname : "github.com"
    }*/
```
        
## 方法：

### getParam

 获取url参数集合返回一个对象
  
```js
KLocation(url).getParam() 

// 返回值
// {a:1,b:2}
```

### getHost

获取url对应host

```js
KLocation(url).getHost() 

// 返回值
// github.com
```

### getProtocol

获取url对应协议

```js
KLocation(url).getProtocol()

// 返回值
// https:
```

### getPort

获取url对应端口
 
```js
KLocation(url).getPort()

// 返回值
// ''
```

### getPathname

获取url对应pathname

```js
KLocation(url).getPathname()

// 返回值
// "/"
```
    

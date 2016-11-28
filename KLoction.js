/**
 * Created by caozheng on 2016/9/28.
 */
(function (root, factory) {
    if(typeof define ==='function' && define.amd){
        define(factory)
    }else if(typeof exports === 'object'){
        module.exports = factory();
    }else{
        root.KLocation = factory();
    }
})(this, function () {
    (function (win) {

        var KLocation = function ( url ) {

            return new KLocation.fn.init( url );
        };

        KLocation.fn = KLocation.prototype = {

            constructor : KLocation,

            // 检查url是否存在
            checkErr : function () {
                if(!this.url){
                    throw ('error for param from getParam');
                }
                return true
            },

            // 获取url的协议类型
            // return Number
            protocolIndex : function (boolean) {

                var re = new RegExp("[\:]","ig"),
                    urlTest = re.exec(this.url);
                if(boolean){
                    //只是检测是否有协议类型
                    if(!urlTest){
                        return 0
                    }
                }
                if(!urlTest){
                    throw ('Protocol is not find, check your code')
                }
                var index = urlTest.index;
                return index+1
            }

        };
        init = KLocation.fn.init = function () {

            if(!arguments.length){
                throw ('error for param from KL constructor')
            }

            this.url = arguments[0];
            this.protocol = this.getProtocol();
            this.host = this.hostname = this.getHost();
            this.port = this.getPort();
            this.pathname = this.getPathname();
        };
        init.prototype = KLocation.fn;

        // url参数json化
        // return Object
        init.prototype.getParam = function () {

            KLocation.fn.checkErr.call(this);
            var re = new RegExp("([?=&])([A-Za-z0-9]*)","ig"),
                rel = new RegExp("[\"\']","ig");
            arr = [],
                result = {},
                url = this.url.replace(rel,""); //去除" ' 的影响
            //to array
            while(value=re.exec(url)){
                if(value[2]==''){
                    continue;
                }
                arr.push(value[2]);
            }
            //to json
            for (var i=0;i<arr.length;i++){

                (i%2 == 0) ? (result[arr[i]] = '') : (result[arr[i-1]] = arr[i])
            }

            return result
        };

        // 返回协议类型
        // return string
        init.prototype.getProtocol = function () {
            //日常判断url是否存在
            KLocation.fn.checkErr.call(this);

            return this.url.slice(0, KLocation.fn.protocolIndex.call(this,false))
        };

        // 返回host
        // return String
        init.prototype.getHost = function () {
            // 检测
            KLocation.fn.checkErr.call(this);
            var re = /(\.([a-zA-z])+)/ig;
            var last;
            // 获取协议索引
            var index = KLocation.fn.protocolIndex.call(this,true);
            if(index){
                index = index + 2;
            }
            while(reLast = re.exec(this.url)){
                if(reLast){
                    last = reLast.index + reLast[0].length
                }
            }
            // 检查如果http:// 写成http:/ 时只需将/全局匹配掉
            var host =  this.url.slice(index, last).replace(/[/]/ig,'');
            return host
        };

        // 是否具有协议的类型
        // return Number
        init.prototype.getDeal = function () {
            // 匹配协议类型
            var re = new RegExp('(:\/\/)|(\/\/)',"ig"),
                url = this.url,
                result = re.exec(url),
                index;
            if (result){
                index = result[0].length + result.index;
                return index
            }
            return 0
        };

        // 获取端口号
        // return Number
        init.prototype.getPort = function () {
            var re = /:([0-9])+/ig,
                url = this.url,
                result = re.exec(url);

            if(result){
                return result[0]
            }
            // http 默认80端口
            // https 默认443端口

            return 0
        };

        // 获取pathname
        // return String
        init.prototype.getPathname = function () {
            var _this = this,
                url = _this.url,
                result = _this.getProtocol() + "//" + _this.getHost();
            // 去掉后面的参数
            url = url.substring(0, url.indexOf('?'));
            return url.substring(result.length, url.length) || '/'
        };

        win.KLocation = KLocation;

    })(this);

});



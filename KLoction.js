/**
 * Created by caozheng on 2016/9/28.
 */
(function (win) {
    //demo
    //oGetParam("?a=1&b=123")
    var KLocation = function ( url ) {

        return new KLocation.fn.init( url );
    };

    KLocation.fn = KLocation.prototype = {

        constructor : KLocation,

        checkErr : function () {
            if(!this.url){
                throw ('error for param from getParam');
            }
            return true
        },

        protocolIndex : function (boolean) {

            var re = new RegExp("[\:]","ig");
            var urlTest = re.exec(this.url);

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
        this.host = this.getHost();

    };
    init.prototype = KLocation.fn;

    //返回json
    //url后面的参数json化
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
            if(i%2==0){
                //even property
                result[arr[i]] = ''

            }else{
                //odd value
                result[arr[i-1]] = arr[i]
            }
        }

        return result
    };

    //返回string
    //protocol
    init.prototype.getProtocol = function () {
        //日常判断url是否存在
        KLocation.fn.checkErr.call(this);

        return this.url.slice(0, KLocation.fn.protocolIndex.call(this,false))
    };

    init.prototype.getHost = function () {

        KLocation.fn.checkErr.call(this);
        var re = new RegExp("(\.)","ig");
        var index = KLocation.fn.protocolIndex.call(this,true);
        var i = 0;
        re.exec(this.url);
        var last =  re.exec(this.url).index;

        //检查如果http:// 写成http:/ 时只需将/全局匹配掉
        var host =  this.url.slice(index, last).replace(/[/]/ig,'');
        return host
    };

    win.KLocation = KLocation;

    console.log(KLocation('http://www.baidu.com?"a"="1"&b=2'));


})(window);


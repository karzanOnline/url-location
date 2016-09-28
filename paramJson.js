/**
 * Created by caozheng on 2016/9/28.
 */
(function (win) {

    function oGetParam (url){

        let re = new RegExp("([?=&])([A-Za-z0-9]*)","ig"),
            arr = [],
            result = {};

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

    }

})(window);
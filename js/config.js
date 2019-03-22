/**
 * Created by 21213 on 2019/3/9.
 */

function getTodayMonthDays(date) {
    var tempDate = new Date("2000-1-1");
    tempDate.setFullYear(date.getFullYear());
    tempDate.setMonth(date.getMonth() + 1);
    tempDate.setDate(0);
    return tempDate.getDate();
}

function getTodayMonthOneDaysWeek(date) {
    var tempDate = new Date("2000-1-1");
    tempDate.setFullYear(date.getFullYear());
    tempDate.setMonth(date.getMonth());
    return tempDate.getDay() == 0 ? 7 : tempDate.getDay();
}


function setCookie(key, keyValue, days) {
    //获取当前时间
    var date = new Date();
    //设置cookie过期时间
    date.setDate(date.getDate() + days);
    //将数据写入cookie
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(keyValue) + ";expires=" + date + ";path=/";
}

function getCookie(key) {
    //获取cookie
    var cookieStr = document.cookie;
    //判断cookie里面是否有值
    if (cookieStr) {
        //根据"；"拆分cookie字符串
        var cookieList = cookieStr.split("; ");
        //循环遍历
        for (var i = 0; i < cookieList.length; i++) {
            //去除每个数组的值
            var item = cookieList[i];
            var itemList = item.split("=");
            if (decodeURIComponent(itemList[0]) == key) {
                //获取名称值
                var itemKey = decodeURIComponent(itemList[0]);
                //获取名称对应的值
                var itemValue = decodeURIComponent(itemList[1]);
                return itemValue;
            }
        }
        return "";
    } else {
        return "";
    }
}

function successTip(obj) {
    if (obj["code"] == 1) {
        alert(obj["msg"]);
    } else {
        alert(obj["msg"]);
    }
}


/**
 * 字母数字下划线
 */
var upperCodeList = [];
var lowerCodeList = [];
var numList = [];
var otherList = ["$", "_"];

for (var i = 65; i < (65 + 26); i++) { //A的编码为65  Z 65+25
    var upperCode = String.fromCharCode(i); //A  B  C
    var lowerCode = String.fromCharCode(i + 32); //a:97  A:65
    upperCodeList.push(upperCode);
    lowerCodeList.push(lowerCode);
    //大写的集合里面丢大写   小写的集合里面丢小写
}
for (var i = 0; i <= 9; i++) {
    numList.push(String(i)); //["0","1","2"]
}
var bigList = otherList.concat(numList, upperCodeList, lowerCodeList);

function toUpperCode(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charAt(i); //取出每一个字符
        //判断   判断是否为小写 是小写就转大写
        var index = lowerCodeList.indexOf(code); //查找一个元素在集合中的位置 如果存在就返回下标 不存在就返回-1
        if (index == -1) { //不存在
            newStr = newStr + code;
        } else { //存在就转换
            newStr = newStr + upperCodeList[index];
        }
    }
    return newStr;
}


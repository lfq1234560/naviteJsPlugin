// 查询字符串转对象
function querystringToObj(url) {
    let arr1 = url.split("&");
    let o = {};
    arr1.forEach(item => {
        let arr2 = item.split("=");
        o[arr2[0]] = arr2[1];
    });
    return o;
}
//对象转查询字符串
function objToQuerystring(obj) {
    let qs = "";
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            qs += `${key}=${obj[key]}&`
        }
    }
    return qs.slice(0, -1);
}
//数组进行去重
function arrNoRepeat(arr) {
    let newArr = [];
    arr.forEach(item => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
}
//字符串去重
function strNoReapat(str) {
    let newStr = "";
    for (let i = 0, len = str.length; i < len; i++) {
        if (newStr.indexOf(str.charAt(i)) === -1) {
            newStr += str.charAt(i)
        }
    }
    return newStr;
}
// 数组求最大值
function ArrMaxNum(arr) {
    let max = arr[0]
    arr.forEach(item => {
        if (max <= item) {
            max = item;
        }
    })
    return max;
}
//数组中元素出现的次数
function numShowTime(arr, num) {
    let newArr = [num];
    for (let item of arr) {
        if (newArr.includes(item)) {
            newArr.push(num);
        }
    }
    let time;
    if (newArr.length - 1 > 0) {
        time = newArr.length - 1
    } else if (newArr.length - 1 === 0) {
        time = 0
    }
    return time;
}
// 判断一个数为整数
function integer(num) {
    let numToString = "" + num;
    return numToString.indexOf(".") !== -1 ? false : true;
}

// 自己实现splice方法
function deleteProperty(arr, index) {
    let indexToString = "" + index;
    let flag = indexToString.indexOf(".") !== -1 ? false : true;
    if (!flag) {
        return "输入的索引错误"
    } else if (flag) {
        let newArr;
        if (index > 0 || index < -1) {
            let newArr1 = arr.slice(0, index);
            let newArr2 = arr.slice(index + 1);
            newArr = newArr1.concat(newArr2);
        } else if (index === 0) {
            newArr = arr.slice(1);
        } else if (index === -1) {
             newArr = arr.slice(0, -1);
        }
        return newArr;
    }
}
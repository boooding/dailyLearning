
// Ajax的原理
function ajax(url, callback) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else { // 兼容早期浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            callback(obj)
        }
    }
}

// var url = ''
// ajax(url, res => {
//     console.log(res)
// })

// 1 -> 2 -> 3
// callback hell
ajax('static/a.json', res => {
    console.log(res)
    ajax('static/b.json', res => {
        console.log(res)
        ajax('static/c.json', res => {
            console.log(res)
        })
    })
})

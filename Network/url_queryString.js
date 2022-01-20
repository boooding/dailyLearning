// 解析 url 中的 queryString

// input:
// "https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D"
// expected: output: {
//      name: "coder",
//      age: "20",
//      callback: "https://baidu.com?name=test",
//      list: ["a"],
//      json: {
//            str: 'abc',
//            num: 123
//      }
//  }

// url components
// protocol :// hostname:port_number / path ? query # fragment

// encodeURI
// encodeURIComponent
function queryString(url) {
    const decodeUrl = decodeURIComponent(url);
    let paramArrays;
}



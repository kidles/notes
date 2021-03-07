
- JSON 是用于存储和传输数据的格式。
- JSON 通常用于服务端向网页传递数据 。
- 由于它们很相似，所以 JavaScript 程序可以很容易的将 JSON 数据转换为 JavaScript 对象。

```javascript
{"sites":[
    {"name":"axihe", "url":"www.axihe.com"},
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

```javascript
var text = '{ "sites" : [' +
    '{ "name":"axihe" , "url":"www.axihe.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;
```

+ JOSN.parse()
  + 将一个JSON字符串转为js对象
+ JSON.stringify()
  + 将js值转为JSON字符串
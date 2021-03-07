## 唯一的标识符
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

- Symbol 不会被自动转换为字符串
- 如果我们真的想显示一个 Symbol，我们需要在它上面调用 .toString()
  - 或者获取 symbol.description 属性
- 对象中键为symbol的值在for...in中跳过
  - object.key(x)也会忽略
  - 但Object.assign会复制

## 全局symbol
```javascript
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 Symbol
alert( id === idAgain ); // true
```
### Symbol.keyFor
不适用于非全局
```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name，全局 Symbol
alert( Symbol.keyFor(localSymbol) ); // undefined，非全局

alert( localSymbol.description ); // name
```

### 其他
- 任何 Symbol 都具有 description 属性
- Symbol 不是 100% 隐藏的。有一个内置方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。
- 还有一个名为 Reflect.ownKeys(obj) 的方法可以返回一个对象的所有键，包括 Symbol


#### symbol应用场景
```javascript
let user1 = Symbol('小明');
let user2 = Symbol('小明');
let student = {
    [user1]: {
        score: 199,
        gender: 'male'
    },
    [user2]: {
        score: 100,
        gender: 'female'
    }
}
console.log(student[user1]);
console.log(student[user2]);
```

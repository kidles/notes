## 声明方式
- let,const,var

## 值类型
- string
- number
- boolean
- undefined
- null
- symbol
- BitInt

## 引用类型
- object
  - array
  - function
  - RexEx
  - 。。。

## 检测
### 检测值类型
- typeof x
- typeof(x)
### 检测原型链
- x instanceof X
- X.isPrototypeOf(X)

## 遍历方式
- for i++
- for in
- for of
  - 遍历，映射，归并，过滤
  - x.forEach
  - x.map
  - x.reduce
  - x.filter

## 转换
### 数字转字符串
- num.toString()
- String(num)
- num+''
### 字符串转数字
- +str
- Number(str)
- parseInt(str)
- parseFloat(str)
### 字符串转数组
- [...str]
- str.split('')
- Array.from(str)
### 数组转字符串
- arr.join('')
### 对象转数组
- Object.keys()
- Object.values()
- Object.entries(obj)
  - [[k1,v1],[k2,v2],...]
- Object.fromEntries(上面的逆操作)
### nodelist转数组
- [...nodelist]
- Array.form(nodelist,mapfn,this)

## 改变this
- 立即执行
  - fn.call(this,arg1,arg2...)
  - fn.apply(this,[arg1,arg2])
- 返回函数
  - fn.bind(this)
 
## 模块化
- 功能
  - 多文件开发
  - 避免多文件命名重名
  - 单独使用某个文件的某个模块
- 暴露接口
  - `export {a as default,b,c}`
- 导入模块
  - `import a,{b,c} from './xxx.js'`
  - `import * as api from './xxx.js'`
  - 必须头部加载，静态
- `import('./module/m14.js').then({site,url})`
  - 按需加载，动态
- 使用webpack打包编译成低版本浏览器能使用的版本（兼容低版本
  - 安装node，npm
  - npm 安装 webpack
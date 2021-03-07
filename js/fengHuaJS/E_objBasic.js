function Employee(name, position) {
    this.name = name;
    this.position = position;
    this.signIn = function() {
        console.log(this.name + '打卡');;
    }
}
var emp1 = new Employee('张三', '前端');
var emp2 = new Employee('李四', '后端');
console.log(emp1);
console.log(emp2);

// 给构造函数prototype添加新属性和新方法
// 加上后所有实例化对象都有
console.log(Employee.prototype);
Employee.prototype.age = 20;
console.log(emp1.age);
console.log(emp2.age);
Employee.prototype.printInfo = function() {
    console.log(this.name, this.age, this.position);
}
emp1.printInfo();
emp2.printInfo();
// 构造函数.prototype === 实例化对象.__proto__
console.log(emp1.__proto__);
console.log(Employee.prototype);
console.log(emp1.__proto__ === Employee.prototype);
console.log(Object.getPrototypeOf(emp1));

// Object.create
// 对象继承
console.clear();
console.log(emp1);
for (key in emp1) {
    console.log(key);
}

var manager = Object.create(emp1);
manager.name = '陈晓';
manager.position = '经理';
for (k in manager) {
    console.log(k);
}
manager.signIn();
console.log(Object.getOwnPropertyNames(manager));
console.log(manager);

// 原型链
console.clear();
var protoOfManager = Object.getPrototypeOf(manager);
console.log(protoOfManager);
var protoOfEMP1 = Object.getPrototypeOf(protoOfManager);
console.log(protoOfEMP1);
var protoOfEMP = Object.getPrototypeOf(protoOfEMP1);
console.log(protoOfEMP);
var protoOfObj = Object.getPrototypeOf(protoOfEMP);
console.log(protoOfObj); //null

console.log(Object.getPrototypeOf(Object.prototype)); //null

// 修改原型指向
console.clear();

function Manager() {}
Manager.prototype.department = '技术部';
Object.setPrototypeOf(manager, Manager.prototype);
console.log(manager.department);
console.log(Object.getPrototypeOf(manager));
for (key in manager) {
    console.log(key);
}

// spread 操作符
console.clear();
var post = {
    id: 1,
    title: '标题1',
    content: '这是内容'
}
console.log(post);
var postClone = {...post };
console.log(postClone);
console.log(postClone === post); //false

var post2 = {
    ...post,
    author: '峰华'
}
console.log(post2);

var arr = [1, 2, 3];
var arrClone = [...arr];
console.log(arrClone);

var arr2 = [...arr, 4, 5, 6];
console.log(arr2);

function savePost(id, title, content) {
    console.log(`保存了文章: ${id}, ${title}, ${content}`);
}
savePost(...[1, '标题', '内容内容']);

// distructing & rest
console.clear();
var post = {
        id: 1,
        title: '标题1',
        content: '这是内容',
    }
    // 必须和对象里属性一致
var { id, title } = post;
console.log(id, title);
// 别名
var { id, title: headline } = post;
console.log(id, headline);
// 没有返回默认值
var { id, title, comments = '没有评论' } = post;
console.log(comments);
var [a, b = 2] = [1];
console.log(b);

var post2 = {
    id: 2,
    title: '标题2',
    content: '内容',
    comments: [{
            userId: 1,
            comment: '评论1'
        },
        {
            userId: 2,
            comment: '评论2'
        },
        {
            userId: 3,
            comment: '评论3'
        },
    ]
}
var {
    comments: [, { comment }]
} = post2;
console.log(comment);

function getId(idKey, obj) {
    let {
        [idKey]: id
    } = obj;
    return id;
}
console.log(getId('userId', { userId: 3 }));
// 剩余给到rest
var { comments, ...rest } = post2;
console.log(rest);
// 作为参数
function savePostObj({ id, title, content, ...rest }) {
    console.log('保存了文章', id, title, content);
    console.log(rest);
}
savePostObj({
    id: 3,
    title: 'js教程',
    content: '内容区',
    author: '峰华'
})

// call | apply | bind 修改this指向
console.clear();
var emp = {
    id: 1,
    name: '峰华',
    printInfo() {
        console.log('员工姓名' + this.name);
    },
}

function printInfo(dep1, dep2, dep3) {
    console.log(`员工姓名：${this.name}`);
}
printInfo(); //全局下指向window，没有name
// 一个一个值传
printInfo.call(emp, '技术部', 'IT技术部', '总裁办公室');
// 可以传数组
printInfo.apply(emp, ['技术部', 'IT技术部', '总裁办公室']);
// 返回一个
var empPrintInfo = printInfo.bind(emp, '技术部', 'IT技术部', '总裁办公室');
empPrintInfo();
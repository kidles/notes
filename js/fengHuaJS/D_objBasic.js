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
console.log(protoOfObj);

console.log(Object.getPrototypeOf(Object.prototype)); //null

// 修改原型指向
function Manager() {

}
// this
console.clear();
var emp3 = {
    name: "李四",
    position: "后端工程师",
    signIn() {
        console.log(this.name + '上班打卡');
    }
}
emp3.signIn();

// 普通函数形式this指向该对象，
// 箭头函数形式this指向包裹他的作用域的this
// 箭头函数不适合作为对象的方法，应使用普通函数形式
emp3.goToWork = function() {
    console.log(this.name + '去上班');
}
emp3.goToWork();

// getter和setters
console.clear();
var person = {
    firstName: '张',
    secondName: '三',
    get fullname() {
        return this.firstName + this.secondName;
    },
    set fullname(fullname) {
        let [first, second] = fullname.split(' ');
        this.firstName = first;
        this.secondName = second;
    }
}
console.log(person.fullname);
person.fullname = "李 四";
console.log(person.fullname);
console.log(person.firstName, person.secondName);

// new构造函数创建的对象设置setter和getter
function Employee2(name, position) {
    this.name = name;
    this.position = position;
}
var emp5 = new Employee2('赵六', '前端工程师');

Object.defineProperty(emp5, "info", {
    get: function() {
        return this.name + ' ' + this.position;
    },
    set: function(info) {
        let [name, position] = info.split(' ');
        this.name = name;
        this.position = position;
    }
})
console.log(emp5.info);
emp5.info = '赵七 后端工程师';
console.log(emp5.name + ' ' + emp5.position);
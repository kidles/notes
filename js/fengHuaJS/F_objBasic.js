// 面向对象
// class 类
class Employee {
    constructor(name, position) {
            this.name = name;
            this.position = position;
        }
        // 成员方法
    signIn() {
            console.log(this.name + '打卡上班');
        }
        // setter和getter 伪属性不是方法！
    get info() {
        return this.name + ' ' + this.position;
    }

    set info(info) {
        let [name, position] = info.split(' ');
        this.name = name;
        this.position = position;
    }
}
// 实例化对象
var emp = new Employee('峰华', '前端工程师');
console.log(emp);
emp.signIn();
console.log(emp.info);
emp.info = '健华 菜鸟';
console.log(emp);

// 继承
class Manager extends Employee {
    // 继承属性，新属性
    constructor(name, position, dept) {
            super(name, position);
            this.dept = dept;
        }
        // 覆盖继承的方法
    signIn() {
        super.signIn();
        console.log('额外信息：经理打卡');
    }
}
var manager = new Manager('王五', '经理', '技术部');
console.log(manager);
manager.signIn();

// 成员变量（新特性
class Employee2 {
    dept = '';
}
var emp2 = new Employee2();
console.log(emp2);
emp.dept = '技术部';
console.log(emp);

// 静态变量（新特性
class Page {
    static count = 0;
    static increaseViewCount() {
        Page.count++;
    }
}

Page.count++;
console.log(Page.count);
Page.increaseViewCount();
console.log(Page.count);
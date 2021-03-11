let xj2site = 'xj2site';
class UserXJ2{
    static click = 0;
    static show() {
        console.log('UserXJ2.show方法');
    }
    showchild() {
        console.log('n');
    }
}

export { UserXJ2 as default, xj2site };
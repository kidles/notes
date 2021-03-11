let title = '后盾人';
let url = 'https://www.houdunren.com';
function show() {
    console.log(url);
}

// 一种导出方式，不一定要全暴露
// export { title, show };
export {title,url,show};


// 另一种导出方式
export let site2 = '后盾人2';
export function show2() {
    console.log('hd.show2方法');
}
export class User{
    static render() {
        return 'hd.User.render';
    }
}
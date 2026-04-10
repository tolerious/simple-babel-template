// Babel 演示代码
console.log('Hello from Babel demo!');

// 示例：使用 ES6+ 语法
const greeting = (name) => {
    return `Welcome to Babel, ${name}!`;
};

document.getElementById('app').innerHTML = `
    <p>${greeting('Developer')}</p>
    <p>打开控制台查看输出</p>
`;

console.log(greeting('Developer'));

let string = prompt("Nhập chuỗi cần thao tác")
for (let i = 0; i < string.length; i++) {
    if (string[i] === '-') {
        string[i] = '_';
    }
}
console.log(string.join(''));

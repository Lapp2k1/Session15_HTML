let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
let X = +prompt("Nhập số X?");
console.log(arr);
if (arr.includes(X)) {
  arr.splice(arr.indexOf(X), 1);
console.log(arr);
}

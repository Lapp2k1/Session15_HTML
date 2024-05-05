let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
let reversedArr = arr.reverse();

console.log(`Mảng sau khi đảo ngược: ${reversedArr}`);

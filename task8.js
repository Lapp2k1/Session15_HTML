let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
  arr.sort((a, b) => b - a)
 
  console.log(arr);

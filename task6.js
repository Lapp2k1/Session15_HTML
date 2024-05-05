let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
let X = "Nhập số X?";
if (arr.includes(X)) {
  console.log("Number X is in the array");
} else {
  console.log("Number X is not in the array");
}

let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
  }
}
console.log(`Số lượng số nguyên lớn hơn hoặc bằng 10 trong mảng là: ${count}`);

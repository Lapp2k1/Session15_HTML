let arr = prompt("Nhập các giá trị của mảng, phân tách bằng dấu phẩy:")
  .split(",")
  .map(Number);
let max = Math.max(...arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Phần tử lớn nhất trong mảng là ${max}.`);
console.log(
  `Giá trị trung bình của các phần tử trong mảng là ${sum / arr.length}.`
);

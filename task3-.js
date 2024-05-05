let arr = prompt("Nhập các giá trị của mảng:")
  .split(",");


let Count = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(+arr[i])) {
        Count++;
    }
}
console.log(`Số ký tự số trong mảng: ${Count}`);


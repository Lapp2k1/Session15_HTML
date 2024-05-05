let arr = prompt("Nhập các giá trị của mảng:")
  .split(",")
  .map(Number);
 let max = Math.max(...arr)

 let maxindex = arr.indexOf(max)
 console.log(`Phần tử lớn nhất trong mảng là ${max} tại vị trí ${maxindex}.`);
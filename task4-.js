let arr = prompt("Nhập vào chuỗi cần tách từ:")
  .split(" ");

const wordArray = arr.split(" "); // Tách chuỗi thành mảng các từ

const wordCount = wordArray.length;
console.log(`Số từ trong chuỗi: ${wordCount}`);

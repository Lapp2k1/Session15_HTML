let inputString = prompt("Nhập chuỗi:");
inputString.split("");
vowel = "aeiouAEIOU";
vowel.split("");
let count = 0;
for (let i = 0; i < inputString.length; i++) {
  if (vowel.includes(inputString[i])) {
    count++;
  }
}

console.log(`Số nguyên âm trong chuỗi là: ${count}`);

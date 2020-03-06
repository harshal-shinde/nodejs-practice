const buffer1 = Buffer.from("1234");
const buffer2 = Buffer.from("0123");

const arr = [buffer1, buffer2];

console.log(arr.sort(Buffer.compare));
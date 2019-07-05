const numbArr = [-7, 3, 5, -6, 2];

const n = Number(prompt("Enter number?"));
let foundIndex = -1;

numbArr.forEach((numb, i) => {
  if (numb === n) {
    foundIndex = i;
  }
})

if (foundIndex === -1) {
  alert("Not found!")
} else {
  console.log(`Number ${n} at ${foundIndex} position!`);
}
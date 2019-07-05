// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

// menu.forEach((food, index) => {
//   console.log(`${index + 1}. ${food}`);
// })

// const yesOrNo = prompt("Delete food? (y/n)").toLowerCase();

// if (yesOrNo === 'n') {
//   alert("Good bye!")
// } else if (yesOrNo === 'y') {
//   const iOrV = prompt("Delete by index or value? (i/v)");
//   if (iOrV === "i") {
//     const deleteIndex = prompt("Position?");
//     menu.splice(deleteIndex - 1, 1);
//     menu.forEach((food, index) => {
//       console.log(`${index + 1}. ${food}`);
//     })
//   } else if (iOrV === "v") {
//     const deleteValue = prompt("Value?");
//     const indexOfFood = menu.indexOf(deleteValue);
//     menu.splice(indexOfFood, 1);
//     menu.forEach((food, index) => {
//       console.log(`${index + 1}. ${food}`);
//     })
//   }
// }
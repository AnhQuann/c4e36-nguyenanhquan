// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

// menu.forEach((food, index) => {
//   console.log(`${index + 1}. ${food}`);
// })

// const yesOrNo = prompt("Update? (y/n)").toLowerCase();
// if (yesOrNo === 'n') {
//   alert("Good bye");
// } else if (yesOrNo === 'y') {
//   const iOrV = prompt("Index or Value? (i/v)").toLowerCase();
//   if (iOrV === 'i') {
//     const indexFood = prompt("Position?");
//     const newFood = prompt("New food?");
//     menu[indexFood - 1] = newFood;
//   } else if (iOrV === 'v') {
//     const oldFood = prompt("Old food?");
//     const newFood = prompt("New food?");
//     const indexOfFood = menu.indexOf(oldFood);
//     menu[indexOfFood] = newFood;
//   }
//   menu.forEach((food, index) => {
//     console.log(`${index + 1}. ${food}`);
//   })
// }
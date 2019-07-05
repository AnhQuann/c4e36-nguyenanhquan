const company = [
  {
    name: "Dung",
    salary: "50000",
    hours: 5,
    days: 15,
  },
  {
    name: "Duc",
    salary: "80000",
    hours: 7,
    days: 25,
  },
  {
    name: "Phong",
    salary: "60000",
    hours: 2,
    days: 30,
  }
];

// JSON
// console.log(company[2].name);

let totalSalary = 0;

company.forEach((person, index) => {
  const salary = person.salary * person.hours * person.days;
  console.log(`Lương của ${person.name} là ${salary}`);

  // totalSalary += salary;
  totalSalary = totalSalary + salary;
})

console.log(`Tổng lương của 3 người là ${totalSalary}`);
window.onload = () => {
  const x = Math.floor(Math.random() * 10) + 1;
  const y = Math.floor(Math.random() * 10) + 1;
  
  const ops = ["+", "-", "*", "/"];
  const indexOfOp = Math.floor(Math.random() * ops.length);
  const op = ops[indexOfOp];
  
  const result = calc(x, y, op);
  
  const errors = [-1, 0, 1];
  const indexOfErr = Math.floor(Math.random() * errors.length);
  const error = errors[indexOfErr];
  const displayResult = result + error;
  
  alert(`${x} ${op} ${y} = ${displayResult}`);
  
  const answer = prompt("Y/N?").toLocaleLowerCase();
  
  if (error === 0) {
    if (answer === "y") {
      alert("Good job");
    } else if (answer === "n") {
      alert("Wrong");
    }
  } else {
    if (answer === "y") {
      alert("Wrong");
    } else if (answer === "n") {
      alert("Good job");
    }
  }
}


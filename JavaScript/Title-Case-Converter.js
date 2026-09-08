function titleCase(inputString) {
  inputString = inputString.toLowerCase();

  let inputArray = inputString.split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i][0].toUpperCase() + inputArray[i].slice(1);
  }

  return inputArray.join(" ");
}

console.log(titleCase("This iS thE beGiNNing!"));

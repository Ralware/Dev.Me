function bouncer(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));

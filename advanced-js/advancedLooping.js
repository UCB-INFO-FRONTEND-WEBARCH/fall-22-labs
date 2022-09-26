const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((num) => {
  console.log("For each function");
  console.log(num);
});

for (num in array) {
  console.log("For in function");
  console.log(num);
}

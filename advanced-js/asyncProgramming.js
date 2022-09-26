const myFirstPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!"); // fulfilled
    }, 3000);
  } else {
    reject("Promise is rejected!");
  }
});

myFirstPromise.then((data) => {
  console.log({ data });
});

const testFunction = async () => {
  const data = myFirstPromise;
  console.log({ data });
};

testFunction();

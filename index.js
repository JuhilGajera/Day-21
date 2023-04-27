const promise = new Promise((resolve) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    resolve(randomNumber);
  }, 1000);
});

promise.then((randomNumber) => {
  console.log("Random number: ", randomNumber);
}).catch((error) => {
  console.error(error);
});



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber <= 5) {
      reject("The random number is less than or equal to 5");
    } else {
      resolve(randomNumber);
    }
  }, 1000);
});

promise1
  .then((randomNumber) => {
    console.log("Random number: ", randomNumber);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("TIMED OUT!");
  }, 300);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

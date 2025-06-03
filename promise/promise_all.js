/*
Promise.all() is a built-in JavaScript method used to run multiple promises in parallel and wait 
for all of them to complete.
It takes an array of promises and returns a single promise that:
•	resolves when all input promises resolve.
•	rejects immediately if any one promise rejects. 

In the below example upon running it will first print p2 as this is error, but still waits 5sec. So, it might seemt that
promise.all waiting for all promises to complete. But in relaity any rejection will short
circuit promise.all(). but the catch here is once any promise started it needs to be completed. Node doesn't
terminate abruptly unless specified explicitely with "AbortController".

So: Promise.all waits for all fulfillments (or the first rejection).
    -----------------------------------------------------------------

*/
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error in p2");
const p3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("yeah")
    }, 5000)
});

Promise.all([p1, p2, p3])
  .then(values => {
    // Won't reach here
  })
  .catch(err => {
    console.error(err); // "Error in p2"
  });
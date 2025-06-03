/*
This method waits for all promises to either resolve or reject and returns an 
array of objects that describe the outcome of each Promise.

*/
const p1 = Promise.resolve(1)
const p2 = Promise.reject(2)

Promise.allSettled([p1, p2]).then(results => {
    console.log(results)
})
const p1 = Promise.resolve(setTimeout(() =>{console.log("P1"), 1000}))
const p2 = Promise.reject(setTimeout(() => {console.log("p2")}, 4000))

Promise.race([p1, p2]).then(result => {
    console.log(result)
})
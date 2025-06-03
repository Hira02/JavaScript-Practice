// function practiceCallback(test) {
//     setTimeout(() => {
//         test('timeout for 1000ms')
//     }, 1000)
// }

// practiceCallback((result) => {
//     console.log(result)
// })

function calc(a, b, callback){
    return callback(a,b)
}

function add(a,b){
    return a+b
}
function mul(a, b){
    return a*b
}
console.log(calc(5,3,add))
console.log(calc(5,3,mul))
// const arr = [1,2,3]
// arr[10]= 
// console.log(arr)


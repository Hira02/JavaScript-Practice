function callbackTest(args, callback) { 
    const sum = args.a+args.b
    callback(null, sum)
}
callbackTest({a: 4, b: 5}, (error, data) => {
if(error){
    console.log("Error")
}
else{
    console.log(`Sum = ${data}`)
}
})


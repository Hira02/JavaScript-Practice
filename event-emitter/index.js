const EventEmitter = require("events")
const event = new EventEmitter()
event.on("login",() =>{
    console.log("User login")
})
event.emit("login")
let deskstopName = JSON.parse(localStorage.getItem("desktop")) // getting info from local storage
let cart = JSON.parse(localStorage.getItem("cart"))
localStorage.setItem("cart",JSON.stringify(desktop)) // creating a new array
let checkout = []

Object.keys() 
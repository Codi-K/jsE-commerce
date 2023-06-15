let deskstopName = JSON.parse(localStorage.getItem("desktop")) // getting info from local storage
let checkout = JSON.parse(localStorage.getItem("cart"))? JSON.parse(localStorage.getItem("cart")) : []
let clearBtn = document.querySelector('.clear')
let result = document.querySelector(".checkout")
let result2 = document.querySelector(".total")

// Clear button 
clearBtn.addEventListener('click', ()=>{
        localStorage.clear();
        localStorage.removeItem("cart")
        location.reload()
        console.log(checkout);
    })

// checkout local storage
let dChoosen = JSON.parse(localStorage.getItem("check-out"));



// price calculation
let calculatePrice = dChoosen.reduce((a,b)=>{
    return a + b.price
    
}, 0)
let total = calculatePrice
    result2.innerHTML= `
    <h4 id="total">Total Price = R${total}</h4>
    `


// Displaying Choosen products
Object.keys(dChoosen).forEach( (data) => {
    let deskTops = dChoosen[data];
    result.innerHTML += `
    <tr>
     <td><h5>${deskTops.name} </h5></td>
     <td><img src="${deskTops.imageUrl}" class="img-fluid Cimage" loading="lazy" alt="${deskTops.name} "></td>
     <td>R${deskTops.price}</td>
    </tr>
    `
})
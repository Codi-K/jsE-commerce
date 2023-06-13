//DOM 
let result = document.querySelector("#product");

// Admin Object
let  deskstopName = JSON.parse(localStorage.getItem("desktop")) ?
JSON.parse(localStorage.getItem("desktop")) :
localStorage.setItem("desktop",JSON.stringify([
    {
    id: " 1 ",
    name: " ",
    imageUrl: "",
    details: " ",
    price: " ",
    },
    {
    id: " 2 ",
    name: "  ",
    imageUrl: " ",
    details: " ",
    price: "",
    },
    {
    id: " 3 ",
    name: " ",
    imageUrl: " ",
    details: " ",
    price: " ",
    },
    {
    id: " 4 ",
    name: "  ",
    imageUrl: " ",
    details: " ",
    price: " ",
    },
    {
    id: " 5 ",
    name: " ",
    imageUrl: " ",
    details: " ",
    price: "  ",
    },
    {
    id: " 6 ",
    name: " ",
    imageUrl: " ",
    details: "  ",
    price: "",
    },
     {
    id: " 7 ",
    name: " ",
    imageUrl: " ",
    details: "  ",
    price: "",
    },
     {
    id: " 8 ",
    name: " ",
    imageUrl: " ",
    details: "  ",
    price: "",
    },
     {
    id: " 9 ",
    name: " ",
    imageUrl: " ",
    details: "  ",
    price: "",
    },
     {
    id: " 10 ",
    name: " ",
    imageUrl: " ",
    details: "  ",
    price: "",
    },
]
)); 

try{
    deskstopName.forEach((data)=>{
        result.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${data.imageUrl}" class="card-img-top" alt="${data.name}"
        <div class="card-body">
          <h5 class="card-text">${data.details}</h5>
          <h6 class="card-text">${data.price}</h6>
        </div>
      </div> 
        `
        
    })
}catch(e){
    location.reload()
}





//DOM 
let result = document.querySelector("#product");
let checkout = []

// Admin Object
let  deskstopName = JSON.parse(localStorage.getItem("desktop")) ?
JSON.parse(localStorage.getItem("desktop")) :
localStorage.setItem("desktop",JSON.stringify([
    {
    id:1,
    name: "THE HARMONY",
    imageUrl: "https://i.ibb.co/8xKY8Bd/Harmony-PC04.webp",
    details: "Intel Core i9-13900KS , ASUS RTX 4090 24GB, Platinum RGB 64GB DDR5 6000 C36 White (4x16GB), 2TB Kingston KC3000 PCIe 4.0 NVME + 2TB Kingston NV2 PCIe 4.0 NVME, ASUS ROG Strix Z790-A Gaming WiFi",
    price: 98390
    },
    {
    id:2,
    name: "Voyager Creator",
    imageUrl: "https://i.ibb.co/cXdJwF1/voyager-elite-purplegreen-product-img-cuouts.webp",
    details: "Intel Core i7-13700K, Deepcool LS720 360mm AIO Liquid Cooler, GeForce RTX™ 4070 Ti 12GB, Teamgroup Delta RGB 32GB DDR5 6000 CL38 (2x16GB), 2TB Kingston KC3000 PCIe 4.0 NVME, MSI Z790 Tomahawk Wifi DDR5",
    price: 24729
    },
    {
    id:3,
    name: "Horizon II",
    imageUrl: "https://i.ibb.co/CW5tBMY/Super-707ea901-5812-4f51-909e-66cb6946737c.webp",
    details: "Intel Core i5-12400, Deepcool AK400 Performance Air Cooler, AMD Radeon™ RX 6650 XT 8GB, Teamgroup Delta RGB 16GB DDR4 3600 CL18 (2x8GB), 1TB Teamgroup Z44A5 PCIe 4.0 NVME",
    price: 21063
    },
    {
    id:4,
    name: "Player: One",
    imageUrl: "https://i.ibb.co/yShfZ4F/CS-450-190-400.webp",
    details: "Intel® Core™ i5-12400F, NVIDIA® GeForce RTX™ 3060, 16GB (2 x 8GB) 3200 MHz (max speed), Corsair iCUE H150i Elite LCD XT 360mm AIO Liquid Cooler White, 500GB NVMe M.2 SSD ",
    price: 17397
    },
    {
    id:5,
    name: "Player: Two",
    imageUrl: "https://i.ibb.co/QC7tWRk/CS-220-112-400.webp",
    details: "AMD Ryzen™ 5 5600X, NVIDIA® GeForce RTX™ 4070, 16GB (2 x 8GB) 3200 MHz (max speed), CPU Cooler Corsair iCUE H150i Elite LCD XT 360mm AIO Liquid Cooler - White, 1TB NVMe M.2 SSD SNV2S/2000G (PCIe Gen4)",
    price: 29312
    },
    {
    id:6,
    name: " Hyper Liquid Alloy Elite",
    imageUrl: "https://i.ibb.co/w6VCGMp/CS-193-115-400-1.webp",
    details: "Intel® Core™ Processor i9-13900KF, GeForce RTX™ 4070 Ti 12GB GDDR6X Video Card, 16GB (16GBx1) DDR5/6000MHz Memory, ASUS PRIME Z790-P WIFI D5 DDR5 Motherboard, 1TB SAMSUNG 990 PRO M.2 PCIe 4.0 SSD ",
    price: 68286
    },
     {
    id:7,
    name: "Creator PC Ultimate",
    imageUrl: "https://i.ibb.co/n8dRbqK/cs-193-113-400.webp",
    details: "Intel® Core™ Processor i9-13900K, GeForce RTX™ 4090 24GB GDDR6X Video Card, 32GB (16GBx2) DDR5/6000MHz Memory, ASUS PRIME Z790-P WIFI D5 DDR5 Motherboard, 2TB Kingston SNV2S/2000G (PCIe Gen4) ",
    price: 63227
    },
     {
    id:8,
    name: "HYPER LIQUID PRO",
    imageUrl: "https://i.ibb.co/VVjjKZf/cs-193-112-400.webp",
    details: "Intel® Core™ Processor i7-13700KF, GeForce RTX™ 4070 12GB GDDR6X Video Card, 16GB (16GBx1) DDR5/6000MHz Memory, ASUS PRIME Z790-P WIFI D5 DDR5 Motherboard, 1TB SAMSUNG 980 PRO M.2 PCIe SSD",
    price: 51494
    },
     {
    id:9,
    name: "Syber M Pro 200",
    imageUrl: "https://i.ibb.co/kSbf2W0/CS-192-303-400.webp",
    details: "Intel® Core™ Processor i7-12700KF, Intel® Arc™ A770 8G GDDR6 Video Card, 16GB (16GBx1) DDR5/6000MHz Memory, ASUS PRIME Z790-P WIFI D5 DDR5 Motherboard, CPU Cooler Corsair iCUE H150i Elite LCD XT 360mm AIO Liquid Cooler, 2TB Kingston SNV2S/2000G (PCIe Gen4) ",
    price: 30046
    },
     {
    id: 10,
    name: "AMD 9X Configurator",
    imageUrl: "https://i.ibb.co/k1Ftjbj/cs-450-178-400.webp",
    details: "AMD Ryzen™ 9 7900X3D Processor, GeForce RTX™ 4070 Ti 12GB GDDR6X Video Card,  CPU Cooler Corsair 16GB (16GBx1) DDR5/6000MHz Memory, ASRock B650M-C AM5 Micro ATX Motherboard, 2TB Kingston SNV2S/2000G (PCIe Gen4) ",
    price: 41411
    }
]
)); 


// Displaying products from local storage
try{
    deskstopName.forEach((data, index)=>{
        result.innerHTML +=`
        <div class=" card text-bg-dark border-light container-fluid" style="width: 20rem;">
        <h4>${data.name}</h4>
        <img src="${data.imageUrl}" class="card-img-top" loading="lazy" alt="${data.name}">
        <div class="card-body">
          <h5 class="card-text">${data.details}</h5>
          <h6 class="card-text p-2 text-success">R${data.price}</h6>
          <center><button type="button" class="btn btn-outline-light" onclick='addToCheckout (${JSON.stringify(index)})'>Add to Cart</button></center>
        </div>
      </div> 
        `
        
    })
}catch(e){
    location.reload()
}

// checkout
function addToCheckout(index) {
  checkout.push(deskstopName[index]);
  localStorage.setItem("check-out", JSON.stringify(checkout));
  console.log(checkout);
}


                                                  // sort buttons

//price lowest to highest button
function priceLow(){
  deskstopName = deskstopName.sort((a,b) => {
      if (a.price < b.price) {
          return -1 ;
      } else {
          return 1;
      }
  });
  result.innerHTML = '';
  try{
    deskstopName.forEach((data, index)=>{
        result.innerHTML +=`
        <div class=" card text-bg-dark border-light container-fluid" style="width: 20rem;">
        <h4>${data.name}</h4>
        <img src="${data.imageUrl}" class="card-img-top" loading="lazy" alt="${data.name}">
        <div class="card-body">
          <h5 class="card-text">${data.details}</h5>
          <h6 class="card-text p-2 text-success">R${data.price}</h6>
          <center><button type="button" class="btn btn-outline-light" onclick='addToCheckout (${JSON.stringify(index)})'>Add to Cart</button></center>
        </div>
      </div> 
        `
        
    })
}catch(e){
    location.reload()
}
}

//price highest to lowest button
function priceHigh(){
  deskstopName = deskstopName.sort((a,b) => {
      if (a.price > b.price) {
          return -1 ;
      } else {
          return 1;
      }
  });
  result.innerHTML = '';
  try{
    deskstopName.forEach((data, index)=>{
        result.innerHTML +=`
        <div class=" card text-bg-dark border-light container-fluid" style="width: 20rem;">
        <h4>${data.name}</h4>
        <img src="${data.imageUrl}" class="card-img-top" loading="lazy" alt="${data.name}">
        <div class="card-body">
          <h5 class="card-text">${data.details}</h5>
          <h6 class="card-text p-2 text-success">R${data.price}</h6>
          <center><button type="button" class="btn btn-outline-light" onclick='addToCheckout (${JSON.stringify(index)})'>Add to Cart</button></center>
        </div>
      </div> 
        `
        
    })
}catch(e){
    location.reload()
}
}


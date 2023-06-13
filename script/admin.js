// // DOM
let result = document.querySelector("#products");
let addBtn = document.querySelector(".newproduct");
let tempName = document.querySelector(".inputN");
let tempImg = document.querySelector(".inputI");
let tempDet = document.querySelector(".inputD");
let tempPrice = document.querySelector(".inputP");
let deskstopName = JSON.parse(localStorage.getItem("desktop")) // getting info from local storage
let tempID = 11;


// // Adding to the a new product

addBtn.addEventListener("click", addProduct);

// Add Button
function addProduct(){
    result.innerHTML = ""
    event.preventDefault();
    if(tempName.value == '', tempImg.value == '', tempDet.value == '', tempPrice.value == ''){
        alert('Please add in a new Product!')
        adminProducts();
    } else {
        
        deskstopName.push({
               id: tempID,
               name: tempName.value,
               imageUrl: tempImg.value,
               details: tempDet.value,
               price: tempPrice.value
        });
        tempID++
        tempName.value = '', tempImg.value = '', tempDet.value = '', tempPrice.value = '';
        localStorage.setItem('desktop', JSON.stringify(deskstopName));
        adminProducts();
    }
}

// edit button
function editButtons(){
    eButton = [...document.querySelectorAll("#ebtn")];
    eButton.forEach((item)=>{
        item.addEventListener('click', editProduct)

    })
}
function editProduct(item){
    let start = deskstopName.indexOf(item);
    this.id = 
    this.name = //ADD all proteries from desktopName and and temp from top of page to it
    deskstopName[start] = Object.assign({}, this)
    localStorage.setItem('desktop', JSON.stringify(deskstopName))
    adminProducts()
} 


// delete button
function deleteButtons(){
        dButton = [...document.querySelectorAll('.dbtn')];
        dButton.forEach((item)=>{
            item.addEventListener('click', deleteProduct)
            
        })
    }
    function deleteProduct(event){
        result.innerHTML= ""
        let start = dButton.indexOf(event.target);
        deskstopName.splice(start, 1);
        localStorage.setItem('desktop', JSON.stringify(deskstopName))
        adminProducts()
    }



// Table
function adminProducts (){
deskstopName.forEach((data)=>{
    result.innerHTML +=`
     <tr>
        <td id="td2">${data.name}</td>
        <td id="td3"><img class="image-fluid image" src="${data.imageUrl}" loading="lazy" alt="${data.name}"></td>
        <td id="td4">${data.details}</td>
        <td id="td5">${data.price}</td>
        <td id="td6">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" id="ebtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Edit
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal1" tabindex="1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title text-black fs-5" id="exampleModalLabel1">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="text-black">Name</h5>
                        <input type="text"class="modal-input" placeholder="Enter name...">
                        <h5 class="text-black">ImageURL</h5>
                        <input type="text" class="modal-input"  placeholder="Enter Image URL...">
                        <h5 class="text-black">Details</h5>
                        <input type="text" class="modal-input"  placeholder="Enter details...">
                        <h5 class="text-black">Price</h5>
                        <input type="text" class="modal-input"  placeholder="Enter price...">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick='${editProduct(JSON.stringify(data))}'>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        </td>
        <td id="td7"><button type="button" class="btn btn-primary dbtn" > Delete </button></td>
     </tr>
    `
    
})
deleteButtons()
}

adminProducts()
// // DOM
let result = document.querySelector("#products");
let addBtn = document.querySelector(".newproduct");
let tempName = document.querySelector(".inputN");
let tempImg = document.querySelector(".inputI");
let tempDet = document.querySelector(".inputD");
let tempPrice = document.querySelector(".inputP");
let deskstopName = JSON.parse(localStorage.getItem("desktop")) // getting info from local storage
let tempID = 11;
// let editN = document.querySelector(".inputeN")
// let editI = document.querySelector(".inputeI")
// let editD = document.querySelector(".inputeD")
// let editP = document.querySelector(".inputeP")


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


// Sort button
function sortDesktop(){
    deskstopName = deskstopName.sort((a,b) => {
        if (a.price < b.price) {
            return -1 ;
        } else {
            return 1;
        }
    });
    result.innerHTML = '';
    adminProducts()
}


// edit button
function Editproduct(item){
    location.reload();
    let start = deskstopName.findIndex( p=>{
        return p.id == item.id
    });
    console.log(start);
    this.name = document.querySelector(`#inputeN${item.id}`).value
    this.imageUrl = document.querySelector(`#inputeI${item.id}`).value
    this.details = document.querySelector(`#inputeD${item.id}`).value
    this.price = document.querySelector(`#inputeP${item.id}`).value 
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
        <button type="button" class="btn btn-outline-light"  data-bs-toggle="modal" data-bs-target='#editModal${data.id}'>
            Edit
        </button>

        <!-- Modal -->
        <div class="modal fade" id='editModal${data.id}' tabindex="1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title text-black fs-5" id="exampleModalLabel1">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="text-black">Name</h5>
                        <input type="text"class="modal-input " id='inputeN${data.id}' placeholder="Enter name...">
                        <h5 class="text-black">ImageURL</h5>
                        <input type="text" class="modal-input " id='inputeI${data.id}'  placeholder="Enter Image URL...">
                        <h5 class="text-black">Details</h5>
                        <input type="text" class="modal-input " id='inputeD${data.id}'  placeholder="Enter details...">
                        <h5 class="text-black">Price</h5>
                        <input type="text" class="modal-input" id='inputeP${data.id}'  placeholder="Enter price...">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-secondary" onclick='new Editproduct(${JSON.stringify(data)})' data-bs-dismiss="modal">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        </td>
        <td id="td7"><button type="button" class="btn btn-outline-light dbtn" > Delete </button></td>
     </tr>
    `
    
})
deleteButtons()
}

adminProducts()
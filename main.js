var book={
     productnameinput:document.querySelector(".form-1"),
    productnameinput2:document.querySelector(".form-2"),
}



var productList=[];
if(localStorage.getItem('productlist')!=null){
    productList=JSON.parse(localStorage.getItem('productList'))
    displaydata()
    }
function addproduct(){
 var BookMark ={
    name: book.productnameinput.value,
    url: book.productnameinput2.value,
 }
 productList.push(BookMark)
 localStorage.setItem('productList',JSON.stringify(productList))
 clear();
 displaydata();

}


function clear(){
    book.productnameinput.value=null;
    book.productnameinput2.value=null;
}

document.querySelector(".btn-danger").addEventListener("click",addproduct)

function displaydata(){
  var container=``;
  var cont=0;

    for( var i=0; i<productList.length;i++){
       cont=cont+1;
        container +=`<tr>
       <td>${cont}</td>
       <td>${productList[i].name}</td>
       <td><button onclick="visite(${i})"  type="button" class="btn btn-success">Visite</button></td>
       <td><button onclick="deleteproduct(${i})"  type="button" class="btn btn-danger">Delete</button></td>
   </tr>`
    }
    document.querySelector("tbody").innerHTML =container

}
function deleteproduct(index){
productList.splice(index,1);
    localStorage.setItem('productList',JSON.stringify(productList)) 
displaydata(productList);
}

function visite(url){
   window.location.href=url.value;
    
}
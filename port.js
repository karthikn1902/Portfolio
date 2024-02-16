var button=document.getElementById("add-btn")
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var detailbox=document.getElementById("detail-box")
var fivebox=document.querySelector(".five-box")

button.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

detailbox.addEventListener("click",function(){
    fivebox.style.display="block"
  
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function update(){
    button.style.backgroundColor="black"
}

var backbtn=document.getElementById("back-btn")

backbtn.addEventListener("click",function(){
    fivebox.style.display="none";
   
})
var image=document.getElementById("fly");
var btn=document.getElementById("add");
var button=document.getElementById("sub");




btn.addEventListener("click",function(){
var width =image.width;
   image.style.width = (width + 20)+"px";

   if(image.width ===  250){
    alert("cannot zoom-in");
   }

})

button.addEventListener("click",function(){
    var width =image.width;
       image.style.width = (width - 20)+"px";
    
       if(image.width ===  150){
        alert("cannot zoom-out ");
       }
    
    })
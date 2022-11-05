var login = document.getElementById("login")
var largura = window.screen.width
var altura =  window.screen.height
var mouseY = altura/2
var mouseX = largura/2
var move = true;
addEventListener('mousemove',(event)=>{
    mouseX =( event.offsetX/largura)*80
    mouseY =( event.offsetY/altura)*80
    if(move){
        gradienteMove(mouseX,mouseY)
    }
    
   
    
});
login.addEventListener("mouseover",(e)=>{
        move=false
        moveLogin(e)
},)
login.addEventListener("mouseleave",()=>{
    move=true
},)
function gradienteMove(x,y){
   document.body.style.background= "radial-gradient( farthest-corner at "+x+"% "+y+"%,#f35 0%, #43e 100%)"
   
}

function moveLogin(e){
    console.log("Loginx:"+e)
    document.body.style.background = "radial-gradient(ellipse at 65% , rgba(88,246,126,1) 0%, rgba(6,9,27,1) 100%)"   
}

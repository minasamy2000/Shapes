// var shape = document.createElementNS("http://www.w3.org/2000/svg","path");
var rect=document.getElementById("rect")
var line=document.getElementById("line")
var Circle=document.getElementById("circle")
var bord=document.getElementById("bord")
line.onclick=function(){
    bord.innerHTML+=`	<svg width="200" height="100"> 
    <g fill="none" stroke="black"> 
<path stroke-width="2" d="M5 20 L215 0" /> 

    </g>  
</svg>`
}
Circle.onclick=function(){
    bord.innerHTML+=`<svg width="100" height="100"> 
    <circle cx="50" cy="50" r="40" stroke=“orange"  
       stroke-width="4" fill="blue" /> 
</svg`


}
rect.onclick=function(){
 bord.innerHTML+=`<svg width="200" height="100"> 
 <rect width="200" height="100"  x="50" y="20"   
 style="fill:rgb(0,0,255);stroke-width:10;"  /> 
</svg>`
}
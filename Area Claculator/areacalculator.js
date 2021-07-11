var result;
var x=0 ;

function sq(){
   x=1;
   document.querySelector(".shape").innerHTML="square";
   document.querySelector(".wid").placeholder= "side"
   document.querySelector(".cir").style.display="none";
}

function trp(){
    document.querySelector(".wid").placeholder= "dist btw PARELLELSIDES";
    document.querySelector(".len").placeholder="EQUAL SIDES";
    document.querySelector(".shape").innerHTML="trap";
    document.querySelector(".cir").style.display="initial";
   x=2;
}
function tr(){
    document.querySelector(".wid").placeholder= "BASE";
    document.querySelector(".len").placeholder="HEIGHT";
    document.querySelector(".shape").innerHTML="triangle";
    document.querySelector(".cir").style.display="initial";
   x=3;
}
function cr(){
    document.querySelector(".wid").placeholder= "RAIDUS";
    document.querySelector(".cir").style.display="none";
    document.querySelector(".shape").innerHTML="circle";
   x=4;
}
function pr(){
    x=5;
    document.querySelector(".shape").innerHTML="parrallelogram";
    document.querySelector(".wid").placeholder= "height";
    document.querySelector(".cir").style.display="initial";
    document.querySelector(".len").placeholder="length";
 }
 function rect(){
    x=5;
    document.querySelector(".wid").placeholder= "height";
    document.querySelector(".cir").style.display="initial";
    document.querySelector(".len").placeholder="length";
 }




function res(){

if(x==1)
{
    var a = document.querySelector(".wid").value;
    var b = document.querySelector(".len").value;

result=a*a;

 document.querySelector(".result").value=result;
}

if(x==2)
{
    var a = document.querySelector(".wid").value;
    var b = document.querySelector(".len").value;
result=0.5*a*b;
document.querySelector(".result").value=result;
}
if(x==3)
{
    var a = document.querySelector(".wid").value;
    var b = document.querySelector(".len").value;
result=0.5*a*b;
document.querySelector(".result").value=result;
}
if(x==4)
{
    var a = document.querySelector(".wid").value;
    result=3.14*a*a;
 document.querySelector(".result").value=result;
}
if(x==5)
{
    var a = document.querySelector(".wid").value;
    var b = document.querySelector(".len").value;
result=a*b;
document.querySelector(".result").value=result;
}
    document.querySelector(".plank").style.display="none";
document.querySelector(".result").style.display="flex";
document.querySelector("#reset").style.display="flex";
document.querySelector("#cal").style.display="none";

}
function again(){
       x=0;
       document.querySelector(".shape").innerHTML="shape";
    document.querySelector(".plank").style.display="block";
    document.querySelector(".result").style.display="none";
    document.querySelector("#reset").style.display="none";
    document.querySelector("#cal").style.display="flex";
    document.querySelector(".wid").placeholder= "side 2";
    document.querySelector(".len").placeholder="side 1";
    document.querySelector(".wid").value= null;
    document.querySelector(".len").value=null;
    document.querySelector(".cir").style.display="block";

}

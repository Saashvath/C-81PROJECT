canvas=document.getElementById("Canvas1");
ctx =canvas.getContext("2d");
var color="red"
ctx.beginPath();
ctx.strokeStyle =color ;
ctx.lineWidth= 2;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown" ,mousedown1);

function mousedown1(e)
{

    color =document.getElementById("color").value;
 
mouse_x = e.clientX -canvas.offsetLeft;
mouse_y = e.clienty -canvas.offsetTop;

console.log("X =" +mouse_x +",y"+ mouse_y);
circle(mouse_x ,mouse_y)
}




function circle()

{

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();

}


function functionclear()
{
     
ctx.clearRect(0,0,850,625);


}
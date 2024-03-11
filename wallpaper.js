var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()<>_~|\{}[]?\|",

matrix = matrix.split("");
var font_size = 10;
var columns = c.width/font_size;

var drops = [];
for (var x=0; x<columns; x++)
drops[x] = 30;

function draw(){
    ctx.fillStyle = "#0f0";
    ctx.font = font_size + "px arial";
    for(var i = 0; i<drops.length; i++){
        var text =
matrix[Math.floor(Math.random()*matrix.length)];
ctx.fillText(text,i*font_size,drops[i]*font_size)
;

        if(drops[i]*fint_size>c.height &&
Math.random()> .975)
    } 

}
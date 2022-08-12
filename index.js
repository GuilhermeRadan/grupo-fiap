
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");




requestAnimationFrame(gameLoop);

function gameLoop() {

    cardsNivel1();
    requestAnimationFrame(gameLoop);
}

function cardsNivel1 () {

    ctx.font = "48px serif";
    //ctx.textAlign = "center";
    ctx.fillText('NÍVEL 1', 200, 80);

    ctx.fillStyle = '#CD853F';
    
    ctx.fillRect(130, 150, 100, 100);
    ctx.fillRect(240, 150, 100, 100);
    ctx.fillRect(350, 150, 100, 100);

    ctx.fillRect(130, 260, 100, 100);
    ctx.fillRect(240, 260, 100, 100);    
    ctx.fillRect(350, 260, 100, 100);

    ctx.fillRect(130, 370, 100, 100);
    ctx.fillRect(240, 370, 100, 100);
    ctx.fillRect(350, 370, 100, 100);
}

function start() {
    
}





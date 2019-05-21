let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clear");

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let mouseClicked = false;
let mouseReleased = true;

c.addEventListener("click", onMouseClick, false);
c.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e){
    mouseClicked = !mouseClicked;
}

function onMouseMove(e){
    if(mouseClicked){
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 2, 0, Math.PI * 2, false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
}

function clearCanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, c.width, c.height);
}
// Send the current pixel set to the server to calculate the number! (FUN! :D)
function sendData(){
    console.log("TEST");
    let rawImageData = ctx.getImageData(0,0,200,200);
    console.log(rawImageData);
    // Remove uncessesary colours (Only use red!)
    let imageData = [];
    for(let i = 0; rawImageData.data.length > i; i = i + 4){
        imageData.push(rawImageData.data[i + 3]);   
    }

    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/classify");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            alert("YO DAWG THIS SHIT WERKIN");
        }
    }
    xhr.send(JSON.stringify(imageData));
}

submitButton.addEventListener("click", sendData);
clearButton.addEventListener("click", clearCanvas);
let rotation = 0;
function update(){
    ele = document.getElementsByClassName("bobby")[0];
    if (ele != null){
        ele.style.transform = "rotate(" + rotation + "deg)";
    }
    
    //console.log("rotate(" + rotation + "deg)");
    rotation += 1;
    requestAnimationFrame(update);
}

function main(){
    update();
}
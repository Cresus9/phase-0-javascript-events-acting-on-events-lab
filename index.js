/*const dogder = document.getElementById('dodger');
dogder.style.backgroundColor = "#FF69B4";
dogder.style.bottom = '0px';
dogder.style.left = 'opx';

document.addEventListener("keydown", function (event){
    console.log(event);
});
*/
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
        const left = parseInt(leftNumbers, 10);

        if (left>0){
            dodger.style.left = `${left - 1}`;
        }
}


function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "")
    const right = parseInt(rightNumbers, 10);

    if (right<0){
        dodger.style.left = `${left + 1}`;
    }
}
document.addEventListener("keydow", function (e){
    if (e.key === "ArrowRight"){
        moveDodgerRight
    }
});
let colors = ["deepPink", "mediumBlue", "purple"]; 
let steps = document.getElementsByTagName("td");

let index = 0;
let click = 0;

    function change() {
    
        click++;
    this.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; 
    score(); 
    document.getElementById("click").innerHTML = click;
}

for (let i = 0; i < steps.length; i++) {
    steps[i].addEventListener("click", change); 
}

    function score() {
    let firstColor = steps[0].style.backgroundColor; 
    for (let i = 1; i < steps.length; i++) {
    if (steps[i].style.backgroundColor != firstColor) {
    return; 
}

}

alert("вы сделали " + click + " кликов!");
}

    function reset() {
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.backgroundColor = ""; 
}

index = 0; 
click = 0;
document.getElementById("click").innerHTML = click; 

}
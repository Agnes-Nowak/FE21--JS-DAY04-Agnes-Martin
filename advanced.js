document.getElementById("circle").addEventListener("mouseover", showMessage);
document.getElementById("circle").addEventListener("mouseout", outMessage);
document.getElementById("circle").addEventListener("click", clickColor);
document.getElementById("circle").addEventListener("dblclick", doubleclickColor);

function outMessage () {
    document.getElementById("p").innerHTML = "You are out of the circle";
}

function showMessage () {
    document.getElementById("p").innerHTML = "You are in the circle";
}

function clickColor () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "gray";
}

function doubleclickColor () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
}
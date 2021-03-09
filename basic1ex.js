var elementLastName = document.getElementById("lastName");
elementLastName.addEventListener("input", getInput);

function getInput() {
    var valueLastName = elementLastName.value;
    document.getElementsByTagName("div")[0].innerHTML = valueLastName;

    if (5 <= valueLastName.length) {
        document.getElementsByTagName("div")[0].style.color = "green";
    }
    else {
        document.getElementsByTagName("div")[0].style.color = "red";
    }

    console.log(valueLastName);
}

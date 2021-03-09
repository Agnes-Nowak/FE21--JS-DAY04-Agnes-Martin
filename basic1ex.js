// If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red.  -->
// var nameLength = document.querySelectorAll(".lastName").length
// for (var i=0; )

// var inputArray = document.querySelector("input");
// console.log(inputArray);


// document.getElementById("lastName").addEventListener("input", function() {

//     inputLength

// });

// function inputLength (array) {
//     for (let i=0; i<array.lenght; i++ ){
//         if (i<6) {
//             red
//         }
//         else (i>=6) {
//             turn green
//         }
//     }
  
// }

var elementLastName =  document.getElementById("lastName");
elementLastName.addEventListener("input", getInput);

function getInput() {
    var valueLastName = elementLastName.value;
    document.getElementsByTagName("div")[0].innerHTML = valueLastName;

    if(5 <= valueLastName.length) {
        document.getElementsByTagName("div")[0].style.color = "green";
    }
    else {
        document.getElementsByTagName("div")[0].style.color = "red";
    }

    console.log(valueLastName);
}
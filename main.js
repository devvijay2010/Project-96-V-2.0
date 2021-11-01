var noun1 = document.getElementById("noun1").value;
var noun2 = document.getElementById("noun2").value;
var noun3 = document.getElementById("noun3").value;

random_answer = Math.floor(Math.random() * 4);

var answer = noun1, noun2, noun3;

var answer2 = answer[random_answer]; 


function Submit()
{
    document.getElementById("answer").innerHTML = "The Randomly Generated Answer Is" + answer2 + "!";
    document.getElementById("noun1").innerHTML = "";
    document.getElementById("noun2").innerHTML = "";
    document.getElementById("noun3").innerHTML = "";
}



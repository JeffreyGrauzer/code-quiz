var buttonEl = document.querySelector(".btn");
buttonEl.addEventListener("click", function() {
    for (let i = 0; i < questArray.length; i++) {
   }
});
var questArray= [];
questArray[0]= "What does DOM stand for?";
questArray[1]= "What does CDN stand for?";
questArray[2]= "What does API stand for?";
questArray[3]= "What does CSS stand for?";
questArray[4]= "Which git command creates a new folder?";



var count=30;

var counter=setInterval(timer, 1000);

function timer() {
    count=count-1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
}





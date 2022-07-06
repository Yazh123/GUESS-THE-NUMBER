const submitbutton = document.getElementById("checkButton")
console.log(submitbutton);
var randomnumber = Math.round(Math.random() * 100);
console.log(randomnumber);
var live = 10;
var text;
const message = document.getElementById("message");
const lives = document.getElementById("attemptCount");

submitbutton.onclick = () =>{
    var inputValue = document.getElementById("textBox").value ;
    console.log(inputValue);
    live --;
    if(inputValue == randomnumber){
        location.href = './win.html'
    }
    else if(live == 0){
        location.href = './lost.html'
    }
    else if(inputValue > randomnumber){
       text = `00ps ! Your guess is too high. ${live} remaining`;
    }
    else if(inputValue < randomnumber){
        text = `Your guess is too low. ${live} remaining`;
    }

message.style.display ="inherit";
message.innerHTML = text;
lives.innerHTML = live;
}

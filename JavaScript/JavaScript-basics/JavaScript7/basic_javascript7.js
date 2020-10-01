var x = 25;
var y = 39;
function sub() {
    var y = 15;
    document.getElementById("sub").innerHTML = x - y;
}

function mul() {
    var z = 2;
    document.getElementById("mul").innerHTML = y * z;
    console.log(y * z);
}

function ifMorning() {
    if (new Date().getHours() < 12) {
        document.getElementById("if-morning").innerHTML = "Good morning!";
    }
    else {
        document.getElementById("if-morning").innerHTML = "It's not morning.";
    }
}

function hunger() {
    var calorie = document.getElementById("hunger").value;
    var check;
    if (calorie < 2000 ) {
        check = "You need to eat!!!"
    }
    else {
        check = "You could probably sneak in a pizza ;)"
    }
    document.getElementById("check-hunger").innerHTML = check;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's morning!";
    }
    else if (time > 12 == time < 18) {
        reply = "It's the afternoon.";
    }
    else {
        reply = "It's the evening.";
    }
    document.getElementById("time-of-day").innerHTML = reply;
}
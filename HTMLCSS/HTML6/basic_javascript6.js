function heightCheck() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 60) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var Jack = new vehicle("Volvo", "S90", 2020, "silver");
var Emily = new vehicle("Volvo", "XC90", 2020, "black");
var Greg = new vehicle("Volvo", "V90", 2020, "dark grey");

function myFunction() {
    document.getElementById("keywords-and-constructors").innerHTML =
    "Greg drives a " + Greg.vehicleColor + " colored " + Greg.vehicleMake + "&nbsp" + Greg.vehicleModel +
    " manufactured in " + Greg.vehicleYear
}

function dog(size, coat, energy, shedding) {
    this.dogSize = size;
    this.dogCoat = coat;
    this.dogEnergy = energy;
    this.dogShedding = shedding;
}

var husky = new dog("medium", "thick coat", "high", "lots of");

function newThis() {
    document.getElementById("new-and-this").innerHTML =
    "The Husky dog breed is " + husky.dogSize + " with a " + husky.dogCoat + ". They have an " + husky.dogEnergy + " energy level for a dog and have " + husky.dogShedding + " shedding."
}

function increment(x) {
    function plusOne(y) {
        y += 1; 
        return y;
    }
    document.getElementById("nested-function").innerHTML = plusOne(x);
}
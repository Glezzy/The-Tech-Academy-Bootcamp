function my_dictionary() {
    var vehicle = {
        car:"Volvo",
        color:"White",
        fuel:"Gasoline",
        sound:"Vroom"
    };
    delete vehicle.sound;
    document.getElementById("dictionary").innerHTML = vehicle.sound;
}
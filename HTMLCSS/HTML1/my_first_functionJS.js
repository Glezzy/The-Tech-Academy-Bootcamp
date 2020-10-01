function first_function() {                                     // Defining a function and naming it 
    var str = "You're a winner!!!";                            // Defining a variable and giving it a
    var result = str.fontcolor("green");                        // string value
                                                                // Using the fontcolor method on
                                                                // str variable
    document.getElementById("Green_Text").innerHTML = result;   // Putting a value 
                                                                // of result into HTML element with "Green_Text" id
}

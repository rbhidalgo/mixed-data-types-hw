console.log("it's running!")

// 1. Data types

// A light switch that can be either on or off.
    // A boolean, if the switch is on "on" turn on the light. Else is off.
    // const lightSwitchOn = true;
    // const lightSwitchOff = false;
    // if (lightSwitchOn == true) {
    //     console.log("Turn on light")
    // } else {
    //     console.log("Turn off light")
    // }

// A user's email address.
 // A string, 
    // const userEmail = "user@email.com";

//  A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    // A Array.

    // const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"]

// A list of student names from our class.
    // A Array

    // const studentNames = ["studentName1", "studentName2", "studentName3", "studentName4", ]

//  A list of student names from our class, each with a location.
    // A Object
    // const studentsInClass = {
    // name: "studentName",
    // location: "studentLocation"
    // };

//  A list of student names from our class, each with a location and each with a list of favorite tv shows.
    // Objects
    // const StudentsInClass = {
    //     student1: {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //     student2: {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //     student3: {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //     student4: {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     }
    // }

// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
const colorsOfTheRainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// Write code that will access "blue" from the rainbow array.
console.log(colorsOfTheRainbow[4])
// Make an object that is called your name and holds the information about your favorite food, 
// a hobby, the name of the town that you live in currently, and your favorite datatype.
const roger = {
    favoriteFood: "mole",
    hobby: "lettering",
    currentCity: "los angeles",
    favDatatype: "arrays"
}
// Write code that will access your hobby from the object that you just created.
console.log(roger.hobby);
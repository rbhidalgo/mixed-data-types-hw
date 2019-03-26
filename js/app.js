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
    // const StudentsInClass = [
    //    {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //      {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //      {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     },
    //      {
    //         name: "",
    //         location: "",
    //         favoriteTvShow: "",
    //     }
    // ]

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

// 3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }
  
//   Use crazyObject to log the following.

// "omg my mouth is burning"
// "Pretty pretty prettayyyyy good"
// "Swearing at Larry and Jeff"
// "Chicken Teriyaki Boyyyyyy"
// The object the contains the name funkhauser

console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
console.log(crazyObject.larry.characters[2].favourtieHobby)
console.log(crazyObject.larry.nicknames[1])
console.log(crazyObject.larry.characters[1].name)

// 4. Object-ception

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

//  Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6)






// OPEN VIA index.HTML








// Characters
/*
mrGreen{
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg,
occupation:   "Entrepreneur",
},
drOrchid{
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg,
ocupation:   "Scientist",
},
profPlum{
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg,
occupation:   "Designer",
},
missScarlet{
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
occupation:   "Actor",
},
mrsPeacock{
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg,
occupation:   "Socialité",
},
mrMustard{
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg,
occupation:   "Retired Football player",
}
// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20



// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
const mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
    }
    
    const drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:       " http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"
    }
    
    const profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
    }
    
    const missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
    }
    
    const mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
    }
    
    const mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
    }
    
    var charactersArray = [mrGreen, drOrchid,profPlum, missScarlet,mrsPeacock,mrMustard];
    
    charactersArray[0]

// Rooms' Collection
var roomsArray = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

// Weapons Collection
const rope = {
    name:"rope",
    weight: 10
}
const knife = {
    name:"knife",
    weight: 8
}
const candlestick = {
    name:"candlestick",
    weight: 2
}
const dumpbell = {
    name:"dumpbell",
    weight: 30
}
const poison = {
    name:"poison",
    weight: 2
}
const axe = {
    name:"axe",
    weight: 15
}
const bat = {
    name:"bat",
    weight: 13
}
const trophy = {
    name:"trophy",
    weight: 25
}
const pistol = {
    name:"pistol",
    weight: 20
}

var weaponsArray = [rope, knife, candlestick, dumpbell,poison,axe,bat,trophy,pistol];

//random selector 
function randomSelector(arr){
    let randomItem = arr[Math.floor(Math.random() * arr.length)];
    return(randomItem)
  }

  //create mistery
var misteryEnvelope;

  function pickMistery(){
    misteryEnvelope = [];
    misteryEnvelope.push(randomSelector(charactersArray))
    misteryEnvelope.push(randomSelector(weaponsArray))
    misteryEnvelope.push(randomSelector(roomsArray))
   
    return(misteryEnvelope)
  }

  //reveal mistery
  function revealMistery(env){
return( env[0].first_name + " " + env[0].last_name + " killed Mr.Boddy using the " + env[1].name + " in the "+env[2]+"!!!!" )
// console.log( env[0].first_name)
  }

function execute(){
    reset()
    setup()
}


  function setup(){
    pickMistery()
    revealMistery(misteryEnvelope)

    var name = document.createElement("li");
        name.textContent = misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name
        document.querySelector(".innerContainer").appendChild(name)



        var message1 = document.createElement("li")
        message1.textContent = "murdered mr. Boddy with the"
        document.querySelector(".innerContainer").appendChild(message1)

    var weapon = document.createElement("li")
    weapon.textContent = misteryEnvelope[1].name
    document.querySelector(".innerContainer").appendChild(weapon)

    var message2 = document.createElement("li")
        message2.textContent = "in the"
        document.querySelector(".innerContainer").appendChild(message2)

        var room = document.createElement("li")
        room.textContent = misteryEnvelope[2]
        document.querySelector(".innerContainer").appendChild(room)

        document.querySelector("#p7").src = misteryEnvelope[0].image;
    }

    function reset(){
        let revealCardText = document.querySelector(".innerContainer")
    for(i=0; i<=4; i++){
        revealCardText.removeChild(revealCardText.childNodes[0])
  }
    }
  

  //visible profiles first try
  function createCharProfiles(){
      for(let i = 1; i<charactersArray.length+1; i++){
        document.querySelector("#p"+i).src = charactersArray[i-1].image;
        document.querySelector(".d" +i).style.background = charactersArray[i-1].color;

        var name = document.createElement("li");
        name.textContent = charactersArray[i-1].first_name + " " + charactersArray[i-1].last_name

        var age = document.createElement("li");
        age.textContent = charactersArray[i-1].age
        
        var occupation = document.createElement("li");
        occupation.textContent = charactersArray[i-1].occupation

        var description = document.createElement("li");
        description.textContent = "- " + charactersArray[i-1].description


        document.querySelector(".c" +i).appendChild(name)
        document.querySelector(".c" +i).appendChild(age)
        document.querySelector(".c" +i).appendChild(occupation)
        document.querySelector(".c" +i).appendChild(description)

      }

}

  createCharProfiles()
  setup()
console.log('Lets create a game');



let tamogotchi = class {
    constructor() {
        this.hunger = 0;
        this.sleepiness = 0;
        this.bored = 0;
    }
}

let myTamogotchi = new tamogotchi();
let character = prompt("what is your pet's name");
$(".character").text(`Pet's Name: ${character}`);


function petMe() {
    if (myTamogotchi.bored > 2) {
        myTamogotchi.bored -= 2;
    }
}

function turnOffTheLights() {
    if (myTamogotchi.sleepiness > 2) {
        myTamogotchi.sleepiness--;
    }
}

function feedme() {
    if (myTamogotchi.hunger > 2) {
        myTamogotchi.hunger -= 2;
    }
}

function age() {
    if (myTamogotchi.age > 2) {
        myTamogotchi.age -= 2;
    }
}


function hungerLevel() {
    myTamogotchi.hunger += 1;
    $(".hunger").text("hunger: " + myTamogotchi.hunger);
   petDied();
}
let hungerIncrease = setInterval(hungerLevel, 900);

function sleepinessLevel() {
    myTamogotchi.sleepiness += 1;
    $(".sleepiness").text("sleepiness: " + myTamogotchi.sleepiness);
    
}
let sleepinessIncrease = setInterval(sleepinessLevel, 900);


function boredLevel() {
    myTamogotchi.bored += 1;
    $(".bored").text("bored: " + myTamogotchi.bored);
   
}
let boredIncrease = setInterval(boredLevel, 900);



$(".feedme").on("click", (e) => {
    console.log("feed me BUTTON CLICKED")
    feedme();
 })


 $(".turnoffthelights").on("click", (e) => {
    console.log("turn off the lights BUTTON CLICKED")
    turnOffTheLights();
 })



$(".play").on("click", (e) => {
    console.log("Pet me BUTTON CLICKED")
    petMe();
 })


function petDied(){
    if (myTamogotchi.hunger > 9 || myTamogotchi.sleepiness > 9 || myTamogotchi.bored > 9){
        alert("Your Tamogotchi died, Try agian !!")
        clearInterval(boredIncrease);
        clearInterval(sleepinessIncrease);
        clearInterval(hungerIncrease);
    }
}
animateGif();

function animateGif() {
    $(".image2").velocity({
        translateX: [-400, 100]
    },
 
        {
            duration: 3000,
            delay: 0,
            easing: "linear",
            complate: animateGif,
            loop: true
        })
    }

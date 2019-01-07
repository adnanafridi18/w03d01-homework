console.log('Lets create a game');



let tamogotchi = class {
    constructor() {
        this.hunger = 0;
        this.sleepiness = 0;
        this.bored = 0;
        this.age = 0;
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
        myTamogotchi.sleepiness-= 2;
    }
}

function feedme() {
    if (myTamogotchi.hunger > 2) {
        myTamogotchi.hunger -= 2;
    }
}


$(".image4").hide();


function ageLevel (){
    myTamogotchi.age++;
    $(".age").text("Age: "+ myTamogotchi.age)
    
    if(myTamogotchi.age > 4){
        $(".image2").hide();
        $(".image4").show();
    }
}

let ageIncrease = setInterval(ageLevel, 2000)
    
if (myTamogotchi.age >= 20) {
        alert("Your Tamagotchi died of old age");
    }



function hungerLevel() {
    myTamogotchi.hunger += 1;
    $(".hunger").text("hunger: " + myTamogotchi.hunger);
   petDied();
}
let hungerIncrease = setInterval(hungerLevel, 1000);

function sleepinessLevel() {
    myTamogotchi.sleepiness += 1;
    $(".sleepiness").text("sleepiness: " + myTamogotchi.sleepiness);
    
}
let sleepinessIncrease = setInterval(sleepinessLevel, 1000);


function boredLevel() {
    myTamogotchi.bored += 1;
    $(".bored").text("bored: " + myTamogotchi.bored);
   
}
let boredIncrease = setInterval(boredLevel, 1000);



// function ageLevel() {
//     myTamogotchi.age += 1;
//     $(".age").text("age: " + myTamogotchi.age);
   
// }
// let ageIncrease = setInterval(ageLevel, 900);



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
    if (myTamogotchi.hunger > 10 || myTamogotchi.sleepiness > 10 || myTamogotchi.bored > 10){
        alert("Your Tamogotchi died, Try agian !!")
        clearInterval(boredIncrease);
        clearInterval(sleepinessIncrease);
        clearInterval(hungerIncrease);
        clearInterval(ageIncrease);
    }
}


function animateGif() {
    $(".image2").velocity({
        translateX: [-200, 300]
    },

        {
            duration: 4000,
            delay: 0,
            easing: "linear",
            complate: animateGif,
            loop:true
        })
    }
    animateGif();

    function animateGif1() {
        $(".image4").velocity({
            translateX: [-200, 300]
        },
    
            {
                duration: 4000,
                delay: 0,
                easing: "linear",
                complate: animateGif,
                loop:true
            })
        }
        animateGif1();

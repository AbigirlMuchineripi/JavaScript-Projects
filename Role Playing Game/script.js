let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const monsterHealthText = document.querySelector("#monsterHealth");

function goStore(){
    console.log("Going to store.");  //updated in function below
}
function goCave(){
    console.log("Going to cave.")
}
  function fightDragon(){
    console.log("Fighting dragon.")
}
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Using innerText property that controls the text that appears in an HTML element.

function goStore() {
      button1.innerText = "Buy 10 health (10 gold)";
      button2.innerText = "Buy weapon (30 gold)";
      button3.innerText = "Go to town square";

     // Updating functions that run when  the buttons are clicked again.
     button1.onclick =buyHealth;
     button2.onclick = buyWeapon;
      button3.onclick = goTown;

    //modifying your display text. Change the innerText property   
    const text = document.querySelector("#text");
    text.innerText = "You enter the store."
}
 
  
  


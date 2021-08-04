let Game = {
 setGameStart: function(name) {
  this.resetPlayer(name);
  this.setPreFight();
 },
 resetPlayer: function(name) {
   switch (name) {
     case "Charmander":
       player = new Player(name, 10, 100);
       break;
     case "Squirtle":
         player = new Player(name, 10, 100);
         break;
     case "Bulbasaur":
         player = new Player(name, 10, 100);
         break;

   }
   let getInterface = document.querySelector('#interface');
   getInterface.innerHTML = '<img src="./images/' + name.toLowerCase() + '.png" class="img-avatar"><section><h3>' + name + '</h3>';
 },
 setPreFight: function() {
   let getHeader = document.querySelector(".header")
   let getActions = document.querySelector(".actions")
   let getArena = document.querySelector(".arena")
   getHeader.innerHTML = '<p>Task: Fight!</p>';
   getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="Game.setFight()">Start batte!</a>';
   getArena.style.visibility = "visible";
 },
setFight: function() {
   let getHeader = document.querySelector(".header")
   let getActions = document.querySelector(".actions")
   let getEnemy = document.querySelector(".enemy")
   // create enemy
   let enemy00 = new Enemy("Charmeleon", 10, 100);
   let enemy01 = new Enemy("Wartortle", 10, 100);
   let enemy02 = new Enemy("Ivysaur", 10, 100);
   // generate a random enemy (3 enemies)
   let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
   console.log(chooseRandomEnemy)
   switch (chooseRandomEnemy) {
     case 0:
      enemy = enemy00
       break;
    case 1:
      enemy = enemy01;
      break;
    case 2:
      enemy = enemy02
      break;
   }
   getHeader.innerHTML = '<p>Task: Choose your move</p>'
   getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
   getEnemy.innerHTML = '<img src="./images/' + enemy.name.toLowerCase() + '.jpeg" alt="' + name +'" class="img-avatar">';
 }
}


// let player = document.querySelectorAll('.chosen-player')
// const fightButton = document.querySelector('.fight-button');

// function enableButtons() {
// 	fightButton.disabled = false;
// }


// generate a random enemy (3 enemies)
// function randomEnemy(max, min){
//
//   if(min === undefined || min === '' || min === null){
//
//     min = 0;
//   }
//
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log('you are battling against player number', randomEnemy(4, 1));


Player.prototype.death = function(){
  if(player.hitpoint <= 0) {
    alert(`You have been defeated!`)
  }
}


Enemy.prototype.death = function(){
  if(enemy.hitpoint <= 0) {
    alert(`You have won!`)
  }
}


function pAttack(event) {
  let enemy_health = document.getElementById("enemy-health")
  let attackValue = Math.floor(Math.random() * 10);
  if (attackValue > 8){
    console.log(`You got a 'Critical Hit!'`)
    attackValue = 15;
  } else {
  enemy_health.value -= attackValue;
  console.log(`Fight`)
  console.log(enemy_health)
}
eAttack();
}

function eAttack() {
  let attackValue = Math.floor(Math.random() * 10);
  if (attackValue > 8){
    console.log(`Enemy got a 'Critical Hit!'`)
    attackValue = 15;
  } else {
  const player_health = document.getElementById("player-health")
  player_health.value -= attackValue;
  console.log(`Fight`)
  console.log(player_health)
}
}



function player_select(event) {

}

// player.forEach(function(button) {
//   button.addEventListener('click', player_select)
// })



// fightButton.addEventListener('click', pAttack)



//Dropdown button
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

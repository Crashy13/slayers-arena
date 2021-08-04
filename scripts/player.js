let player;

function Player(name, attack, health) {
  this.name = name;
  this.attack = attack;
  this.health = health;
}

let PlayerMoves = {
  calcAttack: function() {
    // who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    // player attacks
    let playerAttack = function() {
      let calcBaseDamage;
      if(player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // enemy attacks
    let enemyAttack = function() {
      let calcBaseDamage;
      if(enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // get player and enemy health to change later
    let getPlayerHealth = document.querySelector(".health-bar-player");
    let getEnemyHealth = document.querySelector(".health-bar-enemy");
    // initiate attacks
    if(getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert(`You hit ${playerAttackValues[1]} times for ${playerAttackValues[0]} damage!`);
      if(enemy.health <= 0) {
        alert(`You are victorious! Refresh browser to dominate again!`);
      } else {
        getEnemyHealth = 'Health ' + enemy.health;
        // enemy attacks
        let enemyAttackValues = enemyAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        player.health = player.health - totalDamage;
        alert(`Enemy hit ${enemyAttackValues[1]} times for ${enemyAttackValues[0]} damage!`);
        if(player.health <= 0) {
          alert(`You were defeated! Refresh browser for revenge!`);
      } else {
        getPlayerSpeed.innerHTML = 'Health ' + player.health;

      }
    }
  }
  }
}

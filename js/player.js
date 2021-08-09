let player;

function Player(classType, health, magic, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.magic = magic;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function () {
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerAttack = function () {
      let calcBaseDamage;
      if (player.magic > 0) {
        calcBaseDamage = player.strength * player.magic / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.magic > 0) {
        calcBaseDamage = enemy.strength * enemy.magic / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let getPlayerHealth = document.querySelector('.health-player');
    let getEnemyHealth = document.querySelector('.health-enemy');
    // Start attack
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[1] + " times for " + playerAttackValues[0] + " damage each for a total of " + totalDamage + " total damage!");
      if (enemy.health <= 0) {
        alert("You are victorious! Refresh the browser to slay again!");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // Enemy attack
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("You have been hit " + enemyAttackValues[1] + " times for " + enemyAttackValues[0] + " damage each for a total of " + totalDamage + " total damage!");
        if (player.health <= 0) {
          alert("You have been defeated! Refresh the browser for redemption!");
          getPlayerHealth.innerHTML = 'Health: 0';
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemySpeed > getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("You have been hit " + enemyAttackValues[1] + " times for " + enemyAttackValues[0] + " damage each for a total of " + totalDamage + " total damage!");
      if (player.health <= 0) {
        alert("You have been defeated! Refresh the browser for redemption!");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // Player attack
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[1] + " times for " + playerAttackValues[0] + " damage each for a total of " + totalDamage + " total damage!");
        if (enemy.health <= 0) {
          alert("You are victorious! Refresh the browser to slay again!");
          getEnemyHealth.innerHTML = 'Health: 0';
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }

}

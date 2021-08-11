let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch(classType) {
      case "Knight":
        player = new Player(classType, 200, 0, 200, 50, 50);
        break;
      case "Archer":
        player = new Player(classType, 150, 0, 40, 150, 100);
        break;
      case "Assassin":
        player = new Player(classType, 120, 0, 20, 200, 200);
        break;
      case "Mage":
        player = new Player(classType, 100, 0, 50, 140, 50);
        break;
    }
    let getInterface = document.querySelector('.interface');
    getInterface.innerHTML = '<img src="images/player/' + classType.toLowerCase() + '.jpeg" class="image-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Magic: ' + player.magic + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getArena = document.querySelector('.arena');
    getHeader.innerHTML = '<p>Task: Find an opponent!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search For Your Opponent</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function () {
    let getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getEnemy = document.querySelector('.enemy');
    let enemy00 = new Enemy("Ogre", 130, 0, 80, 100, 100);
    let enemy01 = new Enemy("Golem", 150, 0, 100, 80, 100);
    let enemy02 = new Enemy("Dragon", 200, 0, 150, 80, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    switch(chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose Your Move</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="images/enemy/' + enemy.enemyType.toLowerCase() + '.jpeg" class="image-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Magic: ' + enemy.magic + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}

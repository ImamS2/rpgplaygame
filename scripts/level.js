/**
 * Level
 */

let initLevel = 1;
let levelPlayer;

if (getKey('level') == null) {
  setKey('level', initLevel);
  levelPlayer = initLevel;
} else {
  levelPlayer = getKey('level');
}

tbUpgrade.addEventListener('click', function () {
  upgradeLevel();
  alert('upgrade');
});

tbDowngrade.addEventListener('click', function () {
  downgradeLevel();
  alert('downgrade');
});

function upgradeLevel() {
  levelPlayer++;
  return setLevel(levelPlayer);
}

function downgradeLevel() {
  levelPlayer--;
  return setLevel(levelPlayer);
}

/**
 * Exp
 */
let initExp = 0;
let expPlayer;
let maxExp;

//****************CREATING HERO AND ENEMY*****************//
const hero = {
    name: 'Wonderwoman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'dagger',
        damage: 2
    },
    weaponEquipped: false
}

// The enemy is assigned random health and damage at each game
const enemy = {
    name: 'Meany',
    health: randomHealth(),
    damage: randomDmg()
}

//****************FUNCTION DEFINITIONS*****************//

function rest(person) {
    if (person.health === 10) {
        alert(`${person.name}'s health is already full !`)
    } else {
        feedback.innerText = `${hero.name} took some well deserved rest and restored her health`;
        person.health = 10;
    }
    displayStats();
    return person;
};

function pickUpItem(person, weapon) {
    feedback.innerText = `${hero.name} picked up a dagger and put it in her backpack !`;
    person.inventory.push(weapon);
    displayStats();
};

function equipWeapon(person) {
    if (person.inventory[0]) {
        feedback.innerText = `${hero.name} equipped a weapon and is ready to fight !`;
        hero.weaponEquipped = true;
        person.weapon = person.inventory[0];
    }
    displayStats();
};

function randomHealth() {
    return Math.floor(Math.random() * 5 + 2);
}

function randomDmg() {
    return Math.floor(Math.random() * 4 + 1);
}

function attackEnemy() {
    if(hero.weaponEquipped === false) {
        feedback.innerText = `${hero.name} cannot fight without having a weapon equipped !`;
    } else if (hero.health > 0 && enemy.health > 0) {
        feedback.innerText = `${hero.name} attacks ${enemy.name}!`;
        hero.health -= enemy.damage;
        enemy.health -= hero.weapon.damage;
        if (hero.health <= 0) {
            hero.health = 0;
            feedback.innerText = 'Sadly, our hero passed away from her injuries';
        } else if (enemy.health <= 0) {
            enemy.health = 0;
            feedback.innerText = 'Enemy defeated !';
        }
        displayStats();
        displayStatsEnemy();
    }
}

//Displaying stats
function displayStats() {
    const heroName = document.getElementById('heroName');
    heroName.innerText = hero.name;

    const heroHealth = document.getElementById('heroHealth');
    heroHealth.innerText = hero.health;

    const heroInventory = document.getElementById('heroInventory');
    hero.inventory[0] ? heroInventory.innerText = hero.inventory[0].type :
        heroInventory.innerText = 'Empty inventory';

    const heroWeapon = document.getElementById('heroWeapon');
    if(hero.weaponEquipped) {
        heroWeapon.innerText = hero.weapon.type;
    } else {
        heroWeapon.innerText = 'No weapon equipped';
    }
}
displayStats();

function updateName() {
    let newName = window.prompt('Please enter a new name');
    hero.name = newName;
    displayStats();
}

function displayStatsEnemy() {
    const enemyName = document.getElementById('enemyName');
    enemyName.innerText = enemy.name;

    const enemyHealth = document.getElementById('enemyHealth');
    enemyHealth.innerText = enemy.health;

    const enemyWeapon = document.getElementById('enemyWeapon');
    enemyWeapon.innerText = enemy.damage;
}
displayStatsEnemy();

function restartGame() {
    hero.health = 10;
    hero.inventory = [];
    hero.weaponEquipped = false;
    enemy.health = randomHealth();
    enemy.damage = randomDmg();
    feedback.innerText = 'Ready to start a new game';
    displayStats();
    displayStatsEnemy();
}

//****************EVENT HANDLERS*****************//
const inn = document.getElementById('inn');
inn.addEventListener('click', () => {
    rest(hero)
});

const dagger = document.getElementById('dagger');
dagger.addEventListener('click', () => pickUpItem(hero, hero.weapon));

const bag = document.getElementById('bag');
bag.addEventListener('click', () => equipWeapon(hero));

const attack = document.getElementById('attack');
attack.addEventListener('click', attackEnemy);

const restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);

const feedback = document.getElementById('attackFeedback');

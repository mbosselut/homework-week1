// Write your JS here
const hero = {
    name: 'Wonderwoman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'dagger',
        damage: 2
    }
}

// Function definitions
function rest(person){
    if (person.health === 10) {
        alert(`${person.name}'s health is already full !`)
    } else {
        person.health = 10;
    }
    displayStats();
    return person;
};

function pickUpItem(person, weapon){
    person.inventory.push(weapon);
    console.log(person.inventory[0].type);
    displayStats();
};

function equipWeapon(person){
    if (person.inventory[0]){
        console.log(person);
        person.weapon = person.inventory[0];
    }
    displayStats();
};

// Event handlers
const inn = document.getElementById('inn');
inn.addEventListener('click', () => {rest(hero)});

const dagger = document.getElementById('dagger');
dagger.addEventListener('click', () => pickUpItem(hero, hero.weapon));

const bag = document.getElementById('bag');
bag.addEventListener('click', () => equipWeapon(hero));

//Displaying stats
function displayStats(){
    const heroName = document.getElementById('heroName');
    heroName.innerText = hero.name;

    const heroHealth = document.getElementById('heroHealth');
    heroHealth.innerText = hero.health;

    const heroInventory = document.getElementById('heroInventory');
    // if (hero.inventory[0]) {
    //     heroInventory.innerText = hero.inventory[0].type;
    // } else {
    //     heroInventory.innerText = 'empty inventory';
    // }
    hero.inventory[0] ? heroInventory.innerText = hero.inventory[0].type
    : heroInventory.innerText = 'empty inventory';

    const heroWeapon = document.getElementById('heroWeapon');
    heroWeapon.innerText = hero.weapon.type;
}
displayStats();

function updateName(){
    let newName = window.prompt('Please enter a new name');
    hero.name = newName;
    displayStats();
}
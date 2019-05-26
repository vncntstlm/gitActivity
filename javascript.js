var myName, sport, food;


myName =[
    "Carly",
    "Saki",
    "Vincent"
];
sport = [
    "lacrosse",
    "hockey",
    "curling"
];
food = [
    "poutine",
    "maple syrup",
    "butter tarts"
];

var randomName = myName[Math.floor(Math.random() * myName.length)];
var randomSport = sport[Math.floor(Math.random() * sport.length)];
var randomFood = food[Math.floor(Math.random() * food.length)];

document.getElementById('name').innerHTML = randomName;
document.getElementById('sport').innerHTML = randomSport;
document.getElementById('food').innerHTML = randomFood;

function newPerson() {
    var randNumName = Math.floor(Math.random() * myName.length);
    var randNumSport = Math.floor(Math.random() * sport.length);
    var randNumFood = Math.floor(Math.random() * food.length);

    document.getElementById('name').innerHTML = myName[randNumName];
    document.getElementById('food').innerHTML = sport[randNumSport];
    document.getElementById('sport').innerHTML = food[randNumFood];

    document.getElementById('name').style.color = 'green';
    document.getElementById('food').style.color = 'red';
    document.getElementById('sport').style.color = 'blue';

}

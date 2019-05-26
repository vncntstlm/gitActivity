var myName, sport, food;

//lists of potential words that will appear in index.html
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

//calculates a random number according to how many items are in the array
//using that number, the page will load with some randomly selected words
var randomName = myName[Math.floor(Math.random() * myName.length)];
var randomSport = sport[Math.floor(Math.random() * sport.length)];
var randomFood = food[Math.floor(Math.random() * food.length)];

document.getElementById('name').innerHTML = randomName;
document.getElementById('sport').innerHTML = randomSport;
document.getElementById('food').innerHTML = randomFood;


//function for when the refresh button is pressed
function newPerson() {
    //finds a random number according to how many items are in the array
    var randNumName = Math.floor(Math.random() * myName.length);
    var randNumSport = Math.floor(Math.random() * sport.length);
    var randNumFood = Math.floor(Math.random() * food.length);

    //using that number, it will pick a random word from the specific array
    //and it will change the element according to the id
    document.getElementById('name').innerHTML = myName[randNumName];
    document.getElementById('food').innerHTML = sport[randNumSport];
    document.getElementById('sport').innerHTML = food[randNumFood];

    //changes colour of the text that was just changed.
    document.getElementById('name').style.color = 'green';
    document.getElementById('food').style.color = 'red';
    document.getElementById('sport').style.color = 'blue';

}

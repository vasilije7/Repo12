// Only change code below this line
var myPetsArray = [
  {
    animalType: "Dog",
    name: "Pjudo",
  },
  {
    animalType: "Cat",
    name: "Maca",
  },
  {
    animalType: "Bird",
    name: "Tweety",
  },
];
function myPetsFunction(pets) {
  return pets.name;
}
// Only change code above this line
console.log(myPetsFunction(myPetsArray[1])); //Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsFunction;

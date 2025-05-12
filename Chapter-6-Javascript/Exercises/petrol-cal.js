//assigns html ids to constant variables
const form = document.querySelector('form');
const inputCostPerL = document.querySelector('#cost-per-l');
const inputNumOfLitres = document.querySelector('#num-l')

form.addEventListener('submit', function (event) {
    
    event.preventDefault();

//assigns input values to variables 'costPerL' and 'litres'
let costPerL = inputCostPerL.value;
let litres = inputNumOfLitres.value;

//if the input to Cost per Litre is below or equal to 0 OR nothing at all, the website alerts the user to enter a valid input, then resets the form
if (costPerL <= 0 || costPerL == "") {
    alert("Invalid cost per litre. Please try again.")
    document.getElementById("form").reset();
}

//if the input to No. of Litres is below or equal to zero, the website alerts the user to enter a valid input, then resets the form
if (litres <= 0) {
    alert("Invalid number of litres. Please try again.")
    document.getElementById("form").reset();
    return; 
}

//the program multiplies the given cost per litre and number of litres to print the total cost 
total_cost = costPerL * litres;
document.getElementById("total-cost").innerHTML = "$"+total_cost;
});

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener('click', function (event) {
    form.reset();
    document.getElementById("total-cost").innerHTML = "‎";
});

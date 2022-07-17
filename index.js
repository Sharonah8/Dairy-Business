// let shedA = document.getElementById("myBtnA");
// let shedB = 308;
// let shedC = 486;
// let shedD = 572;
// let totalProduction = shedA + shedB + shedC + shedD;
let selling_price = totalProduction * 45;
let time = 7;
var userInputA = 0
var userInputB = 0
var userInputC = 0
var userInputD = 0
var totalProduction = 0


console.log(totalProduction);

function promptMeA() {
    userInputA = parseInt(prompt("Please provide amount of milk in litres"));
    alert("Your production for shed A is" + " " + userInputA + " litres per day");
};
function promptMeB() {
    userInputB = parseInt(prompt("Please provide amount of milk in litres"));
    alert("Your production for shed B is" + " " + userInputB + " litres per day");
};
function promptMeC() {
    userInputC = parseInt(prompt("Please provide amount of milk in litres"));
    alert("Your production for shed C is" + " " + userInputC + " litres per day");
};
function promptMeD() {
    userInputD = parseInt(prompt("Please provide amount of milk in litres"));
    alert("Your production for shed D is" + " " + userInputD + " litres per day");
};
function promptMeTotal() {
    totalProduction = userInputA + userInputB + userInputC + userInputD;
    alert("The total production is" + " " + totalProduction + " litres per day");
};

// function incomeOverTime() {
//     var weeklyIncome = 
// }



var incomeOverTime = function () {
    alert("Your weekly income is Ksh. " + parseInt(totalProduction * 45 * 7));
    // console.log("Your yearly income is Ksh. " + (selling_price * (time * 52)));
}
// incomeOverTime(selling_price, time);

const months = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

// let monthyIncome = function () {
//     console.log("Your income for " + Object.keys(months));
// };
// monthyIncome()

// for (let key of Object.keys(months)) {
//     console.log("Your income for " + key + " is" + monthyIncome);
// }

for (const [key, value] of Object.entries(months)) {
    display = `${key}`, `${value}`
    console.log(`${key}`, `${value}`);
}

// function loveMatch(name1, name2) {
//     name1 = prompt("Input your name");
//     name2 = prompt("Input your name");
//     var n = Math.random();
//     n = n * 100;
//     console.log("Your match is " + n);
// };
// loveMatch();


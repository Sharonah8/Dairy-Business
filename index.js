let shedA = document.getElementById("myBtnA");
let shedB = 308;
let shedC = 486;
let shedD = 572;
let totalProduction = shedA + shedB + shedC + shedD;
let selling_price = totalProduction * 45;
let time = 7;

console.log(totalProduction);

function promptMeA() {
    var userInput = prompt("Please provide amount of milk in litres");
    alert("Your production for shed A is" + " " + userInput + " litres");
};
function promptMeB() {
    var userInput = prompt("Please provide amount of milk in litres");
    alert("Your production for shed B is" + " " + userInput + " litres");
};
function promptMeC() {
    var userInput = prompt("Please provide amount of milk in litres");
    alert("Your production for shed C is" + " " + userInput + " litres");
};
function promptMeD() {
    var userInput = prompt("Please provide amount of milk in litres");
    alert("Your production for shed D is" + " " + userInput + " litres");
};



var incomeOverTime = function (selling_price, time) {
    console.log("Your weekly income is Ksh. " + (selling_price * time));
    console.log("Your yearly income is Ksh. " + (selling_price * (time * 52)));
}
incomeOverTime(selling_price, time);

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


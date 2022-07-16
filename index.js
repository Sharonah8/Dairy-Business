let shedA = 510;
let shedB = 308;
let shedC = 486;
let shedD = 572;
let totalProduction = shedA + shedB + shedC + shedD;
let selling_price = totalProduction * 45;
let time = 7;

console.log(totalProduction);

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



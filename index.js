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



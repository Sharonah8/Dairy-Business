// let shedA = document.getElementById("myBtnA");
// let shedB = 308;
// let shedC = 486;
// let shedD = 572;
// let totalProduction = shedA + shedB + shedC + shedD;
let totalProduction = 1876;
let selling_price = totalProduction * 45;
let time = 7;
// let userInputA = 0
// let userInputB = 0
// let userInputC = 0
// let userInputD = 0

// const formA = document.getElementById("formA")
// formA.addEventListener("submit", () => { promptMeA })
// console.log(userInputA.trim(), 'inputA')



function promptMeA(e) {
    let userInputA = document.getElementById("fname").value
    console.log(userInputA)
    alert("Your production for shed A is" + " " + userInputA + " litres per day");

    return userInputA
};
function promptMeB(e) {
    let userInputB = document.getElementById("fname1").value
    console.log(userInputB)
    alert("Your production for shed B is" + " " + userInputB + " litres per day");

    return userInputB
};
function promptMeC(e) {
    let userInputC = document.getElementById("fname2").value;
    console.log(userInputC)
    alert("Your production for shed C is" + " " + userInputC + " litres per day");
    return userInputC

};
function promptMeD(e) {
    let userInputD = document.getElementById("fname3").value;
    console.log(userInputD)
    alert("Your production for shed D is" + " " + userInputD + " litres per day");
    return userInputD
};

function promptMeTotal(a, b) {


    console.log(userInputA + userInputB, 'prod')
    totalProduction = parseInt(userInputA) + userInputB + userInputC + userInputD;
    console.log(totalProduction);
    //alert("The total production is " + totalProduction + " litres per day");
    return totalProduction
};

//promptMeTotal(promptMeA())




// var incomeOverTime = function () {
//     alert("Your weekly income is Ksh. " + parseInt(totalProduction * 45 * 7));
// console.log("Your yearly income is Ksh. " + (selling_price * (time * 52)));
// incomeOverTime(selling_price, time);

//const elem = document.getElementById('outputB').innerHTML = "Your production for shed D is" + " " + promptMeB() + " litres per day"

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
function monthlyIncome() {
    let title = "Your income for  ";
    let monthlyInc

    for (const [key, value] of Object.entries(months)) {
        result = 45 * totalProduction * value;
        monthlyInc = title + key + " is " + result
        // console.log(monthlyInc);
        
        
    }
    document.getElementById("monthInc").innerHTML = monthlyInc
}


for (const [key, value] of Object.entries(months)) {
    display = `${key}`, `${value}`
    // console.log(`${key}`, `${value}`);
}



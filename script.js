

document.getElementById("click").onclick=function(){
    const rentGo=document.getElementById("rent").value;
    const salaryGo=document.getElementById("salary").value;

    const electricityGo=document.getElementById("electricity").value;
    const foodGo=document.getElementById("food").value;
    const waterGo=document.getElementById("water").value;
    const wifiGo=document.getElementById("wifi").value;
    const debtGo=document.getElementById("debt").value;
    const titheGo=document.getElementById("tithe").value;
    const insuranceGo=document.getElementById("insurance").value;




    document.querySelector(".salarybefore").innerText=`Salary before Deductions KES: ${salaryGo}`
document.querySelector(".rent").innerText=`Rent KES: ${rentGo}`
document.querySelector(".electricity").innerText=`Electricity Bill KES: ${electricityGo}`
document.querySelector(".food").innerText=`Food Bill KES: ${foodGo}`
document.querySelector(".water").innerText=`Water Bill KES: ${waterGo}`
document.querySelector(".wifi").innerText=`Wifi Bill KES: ${wifiGo}`
document.querySelector(".debt").innerText=`Debt Payment KES: ${debtGo}`
document.querySelector(".tithe").innerText=`TIthe Payment KES: ${titheGo}`
document.querySelector(".insurance").innerText=`Insurance Payment KES: ${insuranceGo}`

let sallaryMain=salaryGo;
const rentAfter=sallaryMain - rentGo;


sallaryMain=rentAfter;
const electricityAfter=sallaryMain-electricityGo;

sallaryMain=electricityAfter;
const foodAfter=sallaryMain-foodGo;

sallaryMain=foodAfter;
const waterAfter=sallaryMain-waterGo;

sallaryMain=waterAfter;
const wifiAfter=sallaryMain-wifiGo;

sallaryMain=wifiAfter;
const debtAfter=sallaryMain-debtGo;


sallaryMain=debtAfter;
const titheAfter=sallaryMain-titheGo;

sallaryMain=titheAfter;
const insuranceAfter=sallaryMain-insuranceGo;



document.querySelector(".rentafter").innerText=`After paying Rent KES: ${rentAfter}`
document.querySelector(".electricityafter").innerText=`After paying Electricity KES: ${electricityAfter}`
document.querySelector(".foodafter").innerText=`After paying Food Bills KES: ${foodAfter}`
document.querySelector(".waterafter").innerText=`After paying Water Bills KES: ${waterAfter}`
document.querySelector(".wifiafter").innerText=`After paying WIFI Bills KES: ${wifiAfter}`
document.querySelector(".debtafter").innerText=`After paying Debts KES: ${debtAfter}`
document.querySelector(".titheafter").innerText=`After paying Tithe KES: ${titheAfter}`
document.querySelector(".insuranceafter").innerText=`After paying Insurance bills KES: ${insuranceAfter}`
document.querySelector(".savingsafter").innerText=`Savings KES: ${insuranceAfter}`









}
"use strict";
let barModel;
let barContainer;
const UPDATE_RATE = 500;
const MAX_RUNS = 160;
const MAX_BAR_COUNT = 40;

function getRandomCustomersNumber() {
    return Math.floor(Math.random()*36);
}

function doStart() {
    barModel = document.getElementById('bar-model').content;
    barContainer = document.getElementById('container');
    let iterator = 1;


    const doUpdateCustomerBars = setInterval(() => {
        //Stop the interval if there's no more numbers in the CUSTOMER_NUMBERS array
        if(iterator === MAX_RUNS) clearInterval(doUpdateCustomerBars);
        if(iterator > MAX_BAR_COUNT) {
            let barToRemove = document.getElementById(`bar_no${iterator - MAX_BAR_COUNT}`);
            barToRemove.parentElement.style.display = 'none';
            console.log('Removing bar no' + (iterator - MAX_BAR_COUNT));
        }
        let customersNumber = getRandomCustomersNumber();
        //Create a copy of the bar from the template
        const tempCustomerBar = barModel.cloneNode(true).firstElementChild;
        //Add a height to the new bar based upon the number in the CUSTOMER_NUMBERS array corresponding to the iterator position
        tempCustomerBar['firstElementChild'].style.height = customersNumber ? String(((customersNumber + 15) * 5) + 'px') : '1px';
        tempCustomerBar['firstElementChild'].id = 'bar_no' + iterator;
        tempCustomerBar['firstElementChild'].firstElementChild.textContent = String(customersNumber);
        //Add the new customer number bar to the html container
        barContainer.appendChild(tempCustomerBar);
        iterator++
    }, UPDATE_RATE);
}
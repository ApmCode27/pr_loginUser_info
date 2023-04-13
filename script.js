//Developer: Luis Padilla
//Date: March 2023
'use strict';

// tabs 
const elTab1 = document.querySelector('.tab--1');
const elTab2 = document.querySelector('.tab--2');
const elTab3 = document.querySelector('.tab--3');
const elTab4 = document.querySelector('.tab--4');

//buttons 

const btnNext = document.querySelector('.btn--next');
const btnPrevious=document.querySelector('.btn--previous');
const btnSubmit= document.querySelector('.btn--submit');

let currentStep = 1;

// Event listener for next button
btnNext.addEventListener('click',function() {
   
    if(currentStep< 4){
        currentStep+=1;
        //heighten the new active step
        document.querySelector(`.step--${currentStep}`).classList.add('step--active')
        // turning off previous input div
        document.querySelector(`.tab--${currentStep-1}`).classList.add('tab--hide');
        // turning on next input div
        document.querySelector(`.tab--${currentStep}`).classList.remove('tab--hide');


        if(currentStep>1){
            btnPrevious.classList.remove('btn--hide')
        }
        if(currentStep == 4  ){
            btnNext.classList.add('btn--hide');
            btnSubmit.classList.remove('btn--hide');
        }
    }
})

// Event listener for previous button 
btnPrevious.addEventListener('click', function (){
    if(currentStep < 5){
        document.querySelector(`.step--${currentStep}`).classList.remove('step--active')
        currentStep-= 1;
        // turning off previous input div
        document.querySelector(`.tab--${currentStep+1}`).classList.add('tab--hide');
        // turning on next input div
        document.querySelector(`.tab--${currentStep}`).classList.remove('tab--hide');
        
        if(currentStep === 3){
            btnNext.classList.remove('btn--hide');
            btnPrevious.classList.remove('btn--hide');
            btnSubmit.classList.add('btn--hide');
        }
        // check condition if currentstep has value of one to deactivate visibility of previous button
        if (currentStep ===1){
            btnPrevious.classList.add('btn--hide');
        }
    }
})



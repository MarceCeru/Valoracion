let numberContainer = document.querySelector('.ratinstate__number-container');
let rateNumber = document.querySelector('.thankyouState__result--number');
let submitBtn = document.querySelector('.ratinstate__button');
let ratingState = document.querySelector('.ratinstate');
let thankyouState = document.querySelector('.thankyouState');

numberContainer.addEventListener('click', event => {
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected <= 5) {
        submitBtn.addEventListener('click', () => {
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        });
    }
});


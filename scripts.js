
const ratingCard = document.getElementById('ratingCard');

const thankYouCard = document.getElementById('thankYouCard');

const form = document.getElementById('form')

const chosenRating = document.getElementById('chosenRating');

form.addEventListener('submit', handleClick);

function handleClick() {
    var ele = document.getElementsByName('ratings');

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        chosenRating.innerHTML = ele[i].value;
        ratingCard.style.display = "none"; 
        thankYouCard.style.display = "flex";
    }    
}
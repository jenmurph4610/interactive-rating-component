
const ratingCard = document.getElementById('ratingCard');

const thankYouCard = document.getElementById('thankYouCard');

const form = document.getElementById('form')

const chosenRating = document.getElementById('chosenRating');

let rating = null;

form.addEventListener('submit', handleClick);

function handleClick() {
    var ele = document.getElementsByName('ratings');

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        rating = ele[i].value;
    }

    if (rating === null) {
        document.getElementById('errorSection').innerHTML = "Please select a rating first!"
    }

    else {
    chosenRating.innerHTML = rating;
    ratingCard.style.display = "none"; 
    thankYouCard.style.display = "flex";
    }

}
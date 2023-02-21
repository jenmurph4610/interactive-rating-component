import React from 'react';
import ReactDOM from 'react-dom';

let button = document.getElementById('submitButton');
let ratingDisplay = document.getElementById('rating-selected');


//Gets and returns the chosend rating
function getRadioValue() {
    var ratingsRadioGroup = document.getElementsByName('ratings');

    for(i = 0; i < ratingsRadioGroup.length; i++) {
        if (ratingsRadioGroup[i].checked) {
            return ratingsRadioGroup[i].value;
        }
    }
}

const ratingCard = (
    <div id="ratingCard">
        <div id="ratingIcon">
          <img src="./images/icon-star.svg" alt="Rating star" />
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        <form>
        <div class="ratingButtons">
            <input type='radio' name='ratings' class='rating-radio' id='rate-one' value='1'></input>
            <label for="rate-one" class="rating-label">1</label>
                
            <input type='radio' name='ratings' class='rating-radio' id='rate-two' value='2'></input>
            <label for="rate-two" class="rating-label">2</label>
                
            <input type='radio' name='ratings' class='rating-radio' id='rate-three' value='3'></input>
            <label for="rate-three" class="rating-label">3</label>
                
            <input type='radio' name='ratings' class='rating-radio' id='rate-four' value='4'></input>
            <label for="rate-four" class="rating-label">4</label>
                
            <input type='radio' name='ratings' class='rating-radio' id='rate-five' value='5'></input>
            <label for="rate-five" class="rating-label">5</label>
          </div>
          <button id="submitButton" type="submit">SUBMIT</button>
        </form>
    </div>
);

const thankYouCard = (
    <div id="thankYouCard" >
        <img src="./images/illustration-thank-you.svg" alt="Phone with reciept and credit card" />
        <h2 id="rating-selected">You selected {getRadioValue()} out of 5</h2>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
);

ReactDOM.render(thankYouCard, document.getElementById('cardContainer'));
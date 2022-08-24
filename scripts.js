import React from 'react';
import ReactDOM from 'react-dom';

class RatingCard extends React.Component {
    render() {
        return (
            <div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
            <input type='radio' name='ratings' id='one' value='1'>1</input>
            <input type='radio' name='ratings' id='two' value='2'>2</input>
            <input type='radio' name='ratings' id='three' value='3'>3</input>
            <input type='radio' name='ratings' id='four' value='4'>4</input>
            <input type='radio' name='ratings' id='five' value='5'>5</input>
            </div>
        )
    }
}

ReactDOM.render(
    <RatingCard/>,
    document.getElementById('card-container')
  )
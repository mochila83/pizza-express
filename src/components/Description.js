import React, {Component} from 'react';
import PizzaOven from '../images/pizzaoven.jpg';

class Description extends Component {
    render() {
        return (
            <div id='description' className='description'>
                <img src={PizzaOven} alt='pizza oven' />
                <p>We are serious about pizza!</p>
            </div>
        )
    }
}

export default Description;
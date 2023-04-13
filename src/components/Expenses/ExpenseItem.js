import React from 'react';
// Import the CSS file to be used in the JSX of this file
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    // useState returns an array where the 1st index is the initial value, and the 2nd index is a function which we can call to change the initial value. The value we pass into the useState function is the intial value.
    // const [title, setTitle] = useState(props.title);

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

// Export this file to be used in the App.js file
export default ExpenseItem;
import React, {useEffect} from 'react';

// without use memo
const NoUseMemo = () => {
    const [value, setValue] = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    const factorial = findFactorial(value);
    const onChangeHandler = (e) => {
        setValue((e.target.value));
    }

    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    console.log('rendered')
    return (
        <div>
            <label>Enter a number:</label>
            <input type="text" value = {value} onChange = {onChangeHandler}  />
            <h5>Factorial is {factorial}</h5>
            <button onClick = {onClickHandler}>Clicked {counter} times</button>
            </div>
    )
}


const findFactorial = (num) => {
    let fact = 1;
    for(let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log('inside findFactorial');

    return fact;
}



export default NoUseMemo
import React, {useState} from 'react';
import {Section} from "./Section";
import {Numbers} from "./Numbers";


function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);

    return <>
        <h3>huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <div>huidige waarde van state is: {isOn ? "ON" : "OFF"}</div>
    </>;
}


function CounterDemo(props) {
    const {counter, setCounter} = props;
    return <>
        <div>counter is {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <hr/>
        <div>zelfde counter is {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
    </>;
}


export function StateDemo() {
    const [counter, setCounter] = useState(0);
    const [favoriteNumbers, setFavoriteNumbers] = useState([]);
    const isCounterFavorite = favoriteNumbers.includes(counter);
    const toggleFavoriteButtonText = isCounterFavorite ? `verwijder ${counter} als favoriet` : `kies ${counter} als favoriet`;

    function toggleFavoriteNumber() {
        if (favoriteNumbers.includes(counter))
            setFavoriteNumbers(favoriteNumbers.filter((n) => n !== counter));
        else
            setFavoriteNumbers([...favoriteNumbers, counter]);
    }

    return <Section title="state">
        <OnOffDemo/>
        <hr/>
        <CounterDemo counter={counter} setCounter={setCounter}/>
        <hr/>
        <Numbers numbers={favoriteNumbers} title="favoriete getallen"/>
        <button onClick={toggleFavoriteNumber}>{toggleFavoriteButtonText}</button>
    </Section>;
}


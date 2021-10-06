import React, {useState} from 'react';
import {Section} from "./Section";
import {Person, Persons} from "./Person";

export function PersonBrowser(props) {
    const {persons} = props;
    const [shownPerson, setShownPerson] = useState(persons[0]);
    const [favoritePersons, setFavoritePersons] = useState([])
    const isShownPersonFavorite = favoritePersons.some(p => p.id === shownPerson.id);

    function setNextShownPerson() {
        const indexOfShownPerson = persons.findIndex(p => p.id === shownPerson.id);
        const indexOfNextPerson = indexOfShownPerson < persons.length - 1 ? indexOfShownPerson + 1 : 0;
        setShownPerson(persons[indexOfNextPerson]);
    }

    function setPrevShownPerson() {
        const indexOfShownPerson = persons.findIndex(p => p.id === shownPerson.id);
        const indexOfNextPerson = indexOfShownPerson === 0 ? persons.length - 1 : indexOfShownPerson - 1;
        setShownPerson(persons[indexOfNextPerson]);
    }

    function toggleFavorite() {
        if (isShownPersonFavorite)
            setFavoritePersons(favoritePersons.filter(p => p.id !== shownPerson.id))
        else
            setFavoritePersons([...favoritePersons, shownPerson])
    }

    return <Section title="Mijn Favoriete Personen">
        <div><Persons persons={favoritePersons}/></div>
        <div className="personWithButtons">
            <div>
                <button onClick={() => setPrevShownPerson()}>&lt;</button>
            </div>
            <Person person={shownPerson} isFavorite={isShownPersonFavorite}/>
            <div>
                <button onClick={() => setNextShownPerson()}>&gt;</button>
            </div>
        </div>
        <button onClick={() => toggleFavorite()}>toggle favoriet</button>
    </Section>;
}


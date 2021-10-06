import { useState } from "react";
import { getPersonsFromDb } from "../services/firestorePersons";
import { Section } from "./Section";
import { Persons } from "./Person";


export function PersonsFromDb() {
    const [personsFromDb, setPersonsFromDB] = useState([]);

    async function LoadPersons() {
        const persons = await getPersonsFromDb();
        console.log(persons);
        setPersonsFromDB(persons);
    }


       return <Section title="personnen uit de database">
        <button onClick={() => LoadPersons()}>load</button>
        <Persons persons={personsFromDb}/>

    </Section>
}
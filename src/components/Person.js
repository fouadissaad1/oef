import {Section} from "./Section";
import {Card} from "./Card";

export function Person(props) {
    const {person, isFavorite} = props;
    const extraClass = isFavorite ? "favoritePerson" : "";
    return <Card title={person.name} extraClassName={extraClass}>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </Card>;
}

export function Persons(props) {
    const {persons, title} = props;
    return <Section title={title}>
        {persons.map(p => <Person key={p.id} person={p}/>)}
    </Section>;
}
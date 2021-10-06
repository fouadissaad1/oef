function numberOfPersonsForCity(persons, city) {
    return persons.reduce((counter, p) => counter + (p.city === city && 1), 0);
}

export function citiesFromPersonData(persons) {
    const uniqueCityNames = [...new Set(persons.map(p => p.city))];
    return uniqueCityNames.map(c => ({
        name: c,
        numberOfPersons: numberOfPersonsForCity(persons, c)
    }));
}
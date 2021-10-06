import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
const COLLECTION_PERSONS = "Persons";
export async function getPersonsFromDb() {
    if (!firestoreDatabase) return [];
    console.log(firestoreDatabase);
    const result = await firestoreDatabase.collection(COLLECTION_PERSONS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

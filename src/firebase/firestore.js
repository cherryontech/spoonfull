import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app)

// faq collection
const colRefFaq = collection(db, 'faq');
export const getFaq = async () => {
    let questions = []
    await getDocs(colRefFaq)
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                questions.push({ ...doc.data(), id: doc.id })
            })
    })
    return questions;
};

//about us collection
const colRefAboutUs = collection(db, 'bio');
export const getAboutUs = async () => {
    let bios = []
    await getDocs(colRefAboutUs)
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            bios.push({...doc.data(), id: doc.id })
        })
    })
    return(bios)
};

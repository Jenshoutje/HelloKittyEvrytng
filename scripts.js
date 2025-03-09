import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWMYvuSm2vuq85Kr3LjeZ5NyJRHn8XnJs",
  authDomain: "ontwerpgerichtonderzoek.firebaseapp.com",
  projectId: "ontwerpgerichtonderzoek",
  storageBucket: "ontwerpgerichtonderzoek.firebasestorage.app",
  messagingSenderId: "1087936453818",
  appId: "1:1087936453818:web:9ec4f6c8b8cbcc503ff683",
  measurementId: "G-078FVL26HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // Haal de waarde van het invoerveld op
    var contactInfo = document.getElementById('contact').value;

    // Voeg de gegevens toe aan Firestore
    addDoc(collection(db, "MelisaResponse"), {
        contact: contactInfo,
        timestamp: new Date()
    })
    .then((docRef) => {
        console.log("Document geschreven met ID: ", docRef.id);
        alert("Bedankt voor je bericht! Document ID: " + docRef.id);
        document.getElementById('contact-form').reset();
        
        // ID weergeven in een specifiek element
        document.getElementById('document-id-display').textContent = "Document ID: " + docRef.id;
    })
    .catch((error) => {
        console.error("Fout bij het toevoegen van document: ", error);
        alert("Er is een fout opgetreden. Probeer het later opnieuw.");
    });
}

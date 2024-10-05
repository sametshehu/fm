/* script.js */
// Firebase-Konfiguration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5asuJN_0f_wcP3KidUqAYyEsCvtPaIeI",
  authDomain: "mitgliederverwaltung-3458b.firebaseapp.com",
  projectId: "mitgliederverwaltung-3458b",
  storageBucket: "mitgliederverwaltung-3458b.appspot.com",
  messagingSenderId: "916656812587",
  appId: "1:916656812587:web:23b510f805c800f62af06e"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Mitglieder-Collection referenzieren
const membersCollection = collection(db, "members");

// Neues Mitglied hinzufügen
const addMemberForm = document.getElementById("addMemberForm");
addMemberForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    try {
        await addDoc(membersCollection, { name, email, phone });
        addMemberForm.reset();
    } catch (error) {
        console.error("Fehler beim Hinzufügen des Mitglieds: ", error);
    }
});

// Mitgliederliste anzeigen
const membersList = document.getElementById("members");
onSnapshot(membersCollection, (snapshot) => {
    membersList.innerHTML = "";
    snapshot.forEach((doc) => {
        const member = doc.data();
        const li = document.createElement("li");
        li.textContent = `${member.name} - ${member.email} - ${member.phone}`;
        membersList.appendChild(li);
    });
});

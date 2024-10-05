/* script.js */
// Firebase-Konfiguration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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

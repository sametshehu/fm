/* script.js */
// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyD5asuJN_0f_wcP3KidUqAYyEsCvtPaIeI",
  authDomain: "mitgliederverwaltung-3458b.firebaseapp.com",
  projectId: "mitgliederverwaltung-3458b",
  storageBucket: "mitgliederverwaltung-3458b.appspot.com",
  messagingSenderId: "916656812587",
  appId: "1:916656812587:web:23b510f805c800f62af06e"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Mitglieder-Collection referenzieren
const membersCollection = db.collection("members");

// Neues Mitglied hinzufügen
const addMemberForm = document.getElementById("addMemberForm");
addMemberForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    try {
        await membersCollection.add({ name, email, phone });
        addMemberForm.reset();
    } catch (error) {
        console.error("Fehler beim Hinzufügen des Mitglieds: ", error);
    }
});

// Mitgliederliste anzeigen
const membersList = document.getElementById("members");
membersCollection.onSnapshot((snapshot) => {
    membersList.innerHTML = "";
    snapshot.forEach((doc) => {
        const member = doc.data();
        const li = document.createElement("li");
        li.textContent = `${member.name} - ${member.email} - ${member.phone}`;
        membersList.appendChild(li);
    });
});

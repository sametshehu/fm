// Mitglieder Daten (extrahiert aus der Excel-Datei)
const mitgliederDaten = [
    { name: 'Abdili Sadet', id: '1035', adresse: 'Dorfstrasse 27, 6376' },
    // Füge hier weitere Mitglieder hinzu
];

// Finanzdaten (extrahiert aus der Excel-Datei)
const finanzDaten = [
    { konto: 'Konto 03', einnahmen: '18526.72', betrag: '20545.67' },
    { konto: 'Konto 05', einnahmen: '153502.68', betrag: '253286.06' },
    { konto: 'BAR', einnahmen: '6151', betrag: '4064.4' }
];

// Funktion zum Laden der Mitglieder in die Tabelle
function ladeMitglieder() {
    const mitgliederTabelle = document.getElementById('mitgliederTabelle').getElementsByTagName('tbody')[0];
    mitgliederDaten.forEach(mitglied => {
        const row = mitgliederTabelle.insertRow();
        row.insertCell(0).textContent = mitglied.name;
        row.insertCell(1).textContent = mitglied.id;
        row.insertCell(2).textContent = mitglied.adresse;
    });
}

// Funktion zum Laden der Finanzdaten in die Tabelle
function ladeFinanzdaten() {
    const finanzTabelle = document.getElementById('finanzTabelle').getElementsByTagName('tbody')[0];
    finanzDaten.forEach(finanz => {
        const row = finanzTabelle.insertRow();
        row.insertCell(0).textContent = finanz.konto;
        row.insertCell(1).textContent = finanz.einnahmen;
        row.insertCell(2).textContent = finanz.betrag;
    });
}

// Lade die Daten beim Laden der Seite
window.onload = () => {
    ladeMitglieder();
    ladeFinanzdaten();
};

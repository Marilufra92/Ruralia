
# 🌿 Ruràlia

**Ruràlia** è una mobile app pensata per censire, esplorare e valorizzare i punti di interesse (POI) dell’agro molfettese, basata su dati raccolti durante escursioni in bicicletta. 

L'obiettivo del progetto è unire tecnologia e territorio, offrendo una mappa interattiva con schede dettagliate per ogni luogo scoperto sul campo, con foto, descrizione, posizione GPS e informazioni storiche o naturalistiche.
-------------

🗺️ Ispirazione
Questo progetto nasce dall'esperienza reale di mio padre, che ha tracciato oltre 1700 punti di interesse nell’agro molfettese durante le sue esplorazioni in bicicletta, documentandoli con foto, coordinate e descrizioni. Ruràlia è un modo per digitalizzare questo lavoro e renderlo accessibile.

-------------
## 🛠️  Stack Tecnologico

### Frontend : 
 
-React (JS)
-Bootstrap 5 (UI responsive)
-Leaflet.js (per mappa interattiva)


### Backend :
- Node.js + Express (REST API)
- MySQL (archiviazione POI)
- Multer (upload immagini)
- dotenv (per gestione variabili d’ambiente)

### Dati :
- Import iniziale da file XML o Google Spreadsheet (GSX)
------------

🧩 Funzionalità principali:

Funzione	               Descrizione
- Mappa interattiva	     Visualizzazione POI tramite marker su Leaflet
- Schede POI	           Foto, nome, descrizione, coordinate, categoria
- Filtri e ricerca	     Filtra per comune/categoria, cerca per parola chiave
- Area Admin (opzionale) Login e gestione CRUD dei POI
- Responsive design	     Adattamento UI a schermi mobili con Bootstrap


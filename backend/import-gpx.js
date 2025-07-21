const fs = require("fs");
const xml2js = require("xml2js");
const db = require("./db");

const gpxFile = "./data/Punti_di_interesse_POI.gpx";

const parser = new xml2js.Parser();

fs.readFile(gpxFile, (err, data) => {
  if (err) {
    console.error("Errore nella lettura del file:", err);
    return;
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error("Errore nel parsing XML:", err);
      return;
    }

    const waypoints = result.gpx.wpt;

    waypoints.forEach((wpt) => {
      const lat = parseFloat(wpt.$.lat);
      const lon = parseFloat(wpt.$.lon);
      const nome = wpt.name?.[0]?.trim() || "Senza nome";
      const descrizione = wpt.desc?.[0]?.trim() || "";
      const categoria = wpt.sym?.[0] || "";
      const icona_url = wpt.extensions?.[0]?.["locus:icon"]?.[0] || "";

      const indirizzo = wpt.extensions?.[0]?.["gpxx:WaypointExtension"]?.[0]?.["gpxx:Address"]?.[0];
      const comune = indirizzo?.["gpxx:City"]?.[0] || "";
      const via = indirizzo?.["gpxx:StreetAddress"]?.[0] || "";

      // Inserisci nel DB
      const query = `INSERT INTO pois (nome, descrizione, lat, lon, comune, via, categoria, icona_url)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      db.query(query, [nome, descrizione, lat, lon, comune, via, categoria, icona_url], (err) => {
        if (err) {
          console.error(`Errore con il POI "${nome}":`, err);
        } else {
          console.log(`Inserito: ${nome}`);
        }
      });
    });
  });
});

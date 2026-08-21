import express from "express"; // Importation du framework Express pour créer le serveur web
import { requestLogger } from "./middleware/logger.js"; // Importation de notre middleware pour enregistrer les requêtes

const PORT = 3000; // Définition du port sur lequel le serveur va écouter
const app = express(); // Création de l'application Express

// Utilisation du middleware pour qu'il s'exécute à chaque requête reçue par le serveur
app.use(requestLogger);

// Route pour la page d'accueil (racine "/")
app.get("/", (_req, res) => {
  // Renvoie un message au format JSON
  res.json({
    message: "Serveur de journalisation Semaine 11 — Akieni",
  });
});

// Route "/sante" permettant de vérifier que le serveur fonctionne correctement
app.get("/sante", (_req, res) => {
  res.json({ ok: true });
});

// Route "/info" donnant des informations sur le projet
app.get("/info", (_req, res) => {
  res.json({
    projet: "Journalisation asynchrone des requêtes",
    consignes: "Chaque requête est enregistrée (méthode, URL, date) dans log.txt",
  });
});

// Démarrage du serveur sur l'adresse locale (127.0.0.1) et le port défini
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Serveur démarré sur http://127.0.0.1:${PORT}`); // Affiche un message dans la console quand le serveur est prêt
});

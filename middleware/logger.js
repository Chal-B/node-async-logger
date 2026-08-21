import { appendFile } from "node:fs/promises"; // Importation de la fonction pour ajouter du texte à un fichier
import path from "node:path"; // Importation du module pour gérer les chemins de fichiers

// Création du chemin complet vers le fichier "log.txt" dans le dossier actuel du projet
const logFile = path.join(process.cwd(), "log.txt");

// Exportation de la fonction middleware qui sera utilisée par Express
export function requestLogger(req, res, next) {
  // Création de la date actuelle au format ISO (ex: 2023-10-25T12:00:00.000Z)
  const date = new Date().toISOString();
  
  // Formatage de la ligne à enregistrer avec la date, la méthode HTTP (ex: GET) et l'URL demandée
  const line = `${date} ${req.method} ${req.originalUrl}\n`;

  // Ajout de la ligne dans le fichier "log.txt"
  appendFile(logFile, line, "utf8").catch((err) => {
    // Si une erreur survient (ex: problème de droits d'écriture), on l'affiche dans la console
    console.error("Erreur d'écriture du journal:", err.message);
  });

  // Appel de next() pour passer au prochain middleware ou à la route correspondante
  next();
}

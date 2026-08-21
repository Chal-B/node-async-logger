import { appendFile } from "node:fs/promises"; // Importation de la fonction pour ajouter du texte à un fichier
import path from "node:path"; // Importation du module pour gérer les chemins de fichiers

// Création du chemin complet vers le fichier "log.txt" dans le dossier actuel du projet
const logFile = path.join(process.cwd(), "log.txt");

// Exportation de la fonction middleware qui sera utilisée par Express
export function requestLogger(req, res, next) {
  // On passe d'abord à la route pour que la réponse soit traitée
  next();

  // L'événement "finish" se déclenche une fois que la réponse a été envoyée au client
  // On peut ainsi récupérer le code de statut HTTP (ex: 200, 404) de la réponse
  res.on("finish", async () => {
    // Création de la date actuelle au format ISO (ex: 2023-10-25T12:00:00.000Z)
    const date = new Date().toISOString();

    // Formatage de la ligne avec la date, la méthode HTTP, l'URL et le statut de la réponse
    const line = `${date} ${req.method} ${req.originalUrl} ${res.statusCode}\n`;

    // Affichage dans la console pour un retour immédiat en développement
    console.log(line.trim());

    // Ajout de la ligne dans le fichier "log.txt" avec async/await
    try {
      await appendFile(logFile, line, "utf8");
    } catch (err) {
      // Si une erreur survient (ex: problème de droits d'écriture), on l'affiche dans la console
      console.error("Erreur d'écriture du journal:", err.message);
    }
  });
}

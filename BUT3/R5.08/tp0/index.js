import { LoremIpsum } from 'lorem-ipsum';
import fs from 'node:fs'
	 
	const lorem = new LoremIpsum({
	  sentencesPerParagraph: {
	    max: 8,
	    min: 4
	  },
	  wordsPerSentence: {
	    max: 16,
	    min: 4
	  }
	});

// Génération de 3 paraphes
const paragraphs = `${lorem.generateParagraphs(3)}\n`;

// Enregistrer les paragraphes dans un fichier texte
fs.writeFile("lorem_ipsum.txt", paragraphs, (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture du fichier :", err);
  } else {
    console.log("Le fichier lorem_ipsum.txt a été généré avec succès !");
  }
});
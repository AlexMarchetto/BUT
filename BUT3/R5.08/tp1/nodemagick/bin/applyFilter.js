#!/usr/bin/env node
import { createCanvas, loadImage } from "canvas";
import grayscale from "../src/filters/grayscale.js";
import fs from 'node:fs';
import invert from "../src/filters/invert.js";

export function execFilter(functionName, input, output){
  loadImage(input).then((image) => {
    const canvas = createCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    // Dessiner l'image originale sur le canvas
    context.drawImage(image, 0, 0);

    // Récupérer les données d'image
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    if(functionName === 'grayscale'){
      // Appliquer le filtre de grayscale
      imageData = grayscale(imageData);
    }else if(functionName === 'invert'){
      imageData = invert(imageData);
    }
  
    // Redessiner l'image inversée sur le canvas
    context.putImageData(imageData, 0, 0);

    // Enregistrer l'image inversée
    const out = fs.createWriteStream(output);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => console.log('Image '+ functionName+' enregistrée avec succès !'));
  }).catch(err => {
    console.error('Erreur lors du chargement de l\'image :', err);
  });
}


const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];

execFilter(arg1, arg2, arg3)

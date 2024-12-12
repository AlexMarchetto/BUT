/**
 * Apply an invert filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
export const invert = function (imageData) {
    // Extract the pixels only
    const { data } = imageData;
  
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];       // Rouge
      data[i + 1] = 255 - data[i + 1]; // Vert
      data[i + 2] = 255 - data[i + 2]; // Bleu
    
    }
    return imageData;
  };
  
  export default invert;
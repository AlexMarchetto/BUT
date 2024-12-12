/**
 * Apply a grayscale filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
const grayscale = function (imageData) {
    // Extract the pixels only
    const { data } = imageData;
    
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
  
      const gray = 0.3 * red + 0.59 * green + 0.11 * blue;
  
      data[i] = data[i + 1] = data[i + 2] = gray;
    
    }
    return imageData;
  };

/**
 * Apply an invert filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
const invert = function (imageData) {
    // Extract the pixels only
    const { data } = imageData;
  
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];       // Rouge
      data[i + 1] = 255 - data[i + 1]; // Vert
      data[i + 2] = 255 - data[i + 2]; // Bleu
    
    }
    return imageData;
  };

const filters = {
  grayscale: grayscale,
  invert: invert
};

export { filters as default, filters };

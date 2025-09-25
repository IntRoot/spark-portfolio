const importImage = async (imagePath, setImageSrc) => {
    try {
      if (Array.isArray(imagePath)) {
        const importedImages = await Promise.all(
          imagePath.map(async (path) => {
            const image = await import(`../images/skills/${path}`);
            return image.default;
          })
        );
        setImageSrc(importedImages);
      } else {
        const image = await import(`../images/${imagePath}`);
        setImageSrc(image.default);
      }
    } catch (error) {
      console.error('Failed to load image:', error);
      return null;
    }
  };
  
  export default importImage;
  
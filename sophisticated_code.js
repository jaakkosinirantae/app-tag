/* sophisticated_code.js */

// This code demonstrates a sophisticated implementation of a graphic user interface (GUI) for a photo editing software.

// Class for a photo
class Photo {
  constructor(name, resolution, size) {
    this.name = name;
    this.resolution = resolution;
    this.size = size;
  }

  inspect() {
    console.log(`Photo: ${this.name}`);
    console.log(`Resolution: ${this.resolution}`);
    console.log(`Size: ${this.size}`);
  }
}

// Class for a photo editor
class PhotoEditor {
  constructor() {
    this.currentPhoto = null;
    this.openPhotos = [];
  }

  openPhoto(photo) {
    this.openPhotos.push(photo);
    this.currentPhoto = photo;
  }

  closePhoto(photo) {
    const index = this.openPhotos.indexOf(photo);
    if (index !== -1) {
      this.openPhotos.splice(index, 1);
      this.currentPhoto = null;
    }
  }

  inspectOpenPhotos() {
    console.log(`Open Photos:`);
    this.openPhotos.forEach((photo, index) => {
      console.log(`${index + 1}. ${photo.name}`);
    });
  }
}

// Usage example
const photo1 = new Photo("nature.jpg", "1920x1080", "1.5MB");
const photo2 = new Photo("portrait.jpg", "1280x720", "1.2MB");
const photo3 = new Photo("landscape.jpg", "2560x1440", "2.3MB");

const photoEditor = new PhotoEditor();

photoEditor.openPhoto(photo1);
photoEditor.openPhoto(photo2);
photoEditor.openPhoto(photo3);

photoEditor.inspectOpenPhotos();
photo1.inspect();
photoEditor.closePhoto(photo2);

photoEditor.inspectOpenPhotos();
photo3.inspect();
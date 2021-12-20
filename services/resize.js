const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');

class Resize {


  constructor(buffer) {
    this.width = 1024;
    this.height = 768;
    this.buffer = buffer;
  }
  async resizeToJpeg() {

    let data = await sharp(this.buffer)
      .resize(this.width, this.height, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .jpeg({
        quality:70
      })
      .toBuffer();
    
    return data;
  }
  static filename(extension) {
    return `${uuidv4()}.${extension}`;
  }

}
module.exports = Resize;
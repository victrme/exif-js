_This is a fork of [exif-js by @jseidelin](https://github.com/exif-js/exif-js/)_

# Exif.js

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

You can use it on images in the browser, either from an image or a file input element. Both EXIF and IPTC metadata are retrieved.

**Note**: The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2.

## Install
Install `exif-js` through [NPM](https://www.npmjs.com/#getting-started):

```bash
npm install @victr/exif-js
``` 

## Usage

Start with calling the `getData` method. You pass it an image as a parameter:
- either an image from a `<img src="image.jpg">`
- OR a user selected image in a `<input type="file">` element on your page.

You receive an object with exif, iptc, and xmp data. 
 
**JavaScript**:
```javascript
import { Exifjs } from "@victr/exif-js"

const ExifReader = new Exifjs()

async function getExif() {
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const makeAndModel = document.getElementById("makeAndModel")
    const allMetaDataSpan = document.getElementById("allMetaDataSpan")

    const { exif } = await ExifReader.getData(img)
    const make = exif["Make"]
    const model = exif["Model"]
    makeAndModel.textContent = `${make} ${model}`

    const data = await ExifReader.getData(img2)
    allMetaDataSpan.textContent = JSON.stringify(data, null, "\t")
}
```

**HTML**:
```html
<body>
    <img src="image1.jpg" id="img1" />
    <p>Make and model: <span id="makeAndModel"></span></p>

    <img src="image2.jpg" id="img2" />
    <p id="allMetaDataSpan"></p>
</body>
```

Note there are also alternate tags, such the `Exifjs.TiffTags`. See the source code for the full definition and use.
You can also get back a string with all the EXIF information in the image pretty printed by using `Exifjs.pretty`.

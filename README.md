_This is a fork of [exif-js by @jseidelin](https://github.com/exif-js/exif-js/)_

# Exif.js

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

Use it on images in the browser, either from an image or a file input element. Both EXIF and IPTC metadata are retrieved. The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2.

Test with this demo: https://exif-js.pages.dev/

## Install

- Install from jsr: https://jsr.io/@victr/exif-js
- Install from npm: https://www.npmjs.com/package/@victr/exif-js

```bash
# jsr
deno add jsr:@victr/exif-js

# npm
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

const reader = new Exifjs()

async function getExif() {
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const makeAndModel = document.getElementById("makeAndModel")
    const allMetaDataSpan = document.getElementById("allMetaDataSpan")

    const { exif } = await reader.getData(img)
    const make = exif["Make"]
    const model = exif["Model"]
    makeAndModel.textContent = `${make} ${model}`

    const data = await reader.getData(img2)
    const pretty = reader.pretty()
    allMetaDataSpan.textContent = pretty
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

## What changed

- Removed CommonJS
- Replaced global variables with self-contained Exifjs class
- Improved editor autocomplete with JSDoc
- Replaced callbacks with async
- Stronger code with stricter linter


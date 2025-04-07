declare module "exif" {
    /**
     * A tool for reading EXIF metadata from image files.
     */
    export class Exifjs {
        /**
         * @param {string} base64
         * @param {string} contentType
         * @returns {ArrayBuffer}
         */
        static base64ToArrayBuffer(base64: string, contentType: string): ArrayBuffer;
        /**
         * @param {ArrayBuffer} file
         * @returns {{exif: object, iptc: object, xmp?: object}}
         */
        static handleBinaryFile(file: ArrayBuffer): {
            exif: object;
            iptc: object;
            xmp?: object;
        };
        /**
         * @param {ArrayBuffer} file
         * @returns {object}
         */
        static findEXIFinJPEG(file: ArrayBuffer): object;
        /**
         * @param {ArrayBuffer} file
         * @returns {object}
         */
        static findIPTCinJPEG(file: ArrayBuffer): object;
        /**
         * @param {ArrayBuffer} file
         * @param {number} startOffset
         * @param {number} sectionLength
         * @returns {object}
         */
        static readIPTCData(file: ArrayBuffer, startOffset: number, sectionLength: number): object;
        /**
         * @param {DataView} file
         * @param {number} tiffStart
         * @param {number} dirStart
         * @param {object} strings
         * @param {boolean} bigEnd
         * @returns {object}
         */
        static readTags(file: DataView, tiffStart: number, dirStart: number, strings: object, bigEnd: boolean): object;
        /**
         * @param {DataView} file
         * @param {number} entryOffset
         * @param {number} tiffStart
         * @param {number} _dirStart
         * @param {boolean} bigEnd
         * @returns {number | number[] | string}
         */
        static readTagValue(file: DataView, entryOffset: number, tiffStart: number, _dirStart: number, bigEnd: boolean): number | number[] | string;
        /**
         * Given an IFD (Image File Directory) start offset
         * returns an offset to next IFD or 0 if it is the last IFD.
         *
         * @param {DataView} dataView
         * @param {number} dirStart
         * @param {number} bigEnd
         */
        static getNextIFDOffset(dataView: DataView, dirStart: number, bigEnd: number): number;
        /**
         * @param {DataView} dataView
         * @param {number} tiffStart
         * @param {number} firstIFDOffset
         * @param {boolean} bigEnd
         * @returns {object}
         */
        static readThumbnailImage(dataView: DataView, tiffStart: number, firstIFDOffset: number, bigEnd: boolean): object;
        /**
         * @param {DataView} buffer
         * @param {number} start
         * @param {number} length
         * @returns {string}
         */
        static getStringFromDB(buffer: DataView, start: number, length: number): string;
        /**
         * @param {DataView} dataview
         * @param {number} start
         * @returns {object}
         */
        static readEXIFData(dataview: DataView, start: number): object;
        /**
         * @param {File} file
         * @returns {object}
         */
        static findXMPinJPEG(file: File): object;
        /**
         * @param {DocumentFragment} xml
         * @returns {JSON}
         */
        static xml2json(xml: DocumentFragment): JSON;
        /**
         * @param {DocumentFragment} xml
         * @returns {object}
         */
        static xml2Object(xml: DocumentFragment): object;
        /**
         * @type {Record<string, string>}
         */
        static ExifTags: Record<string, string>;
        /**
         * @type {Record<string, string>}
         */
        static TiffTags: Record<string, string>;
        /**
         * @type {Record<string, string>}
         */
        static GPSTags: Record<string, string>;
        /**
         * @type {Record<string, string>}
         */
        static IFD1Tags: Record<string, string>;
        /**
         * @type {Record<string, Record<string, string>>}
         */
        static StringValues: Record<string, Record<string, string>>;
        /**
         * @param {object} options
         * @param {boolean} [options.xmp]
         */
        constructor(options?: {
            xmp?: boolean;
        });
        xmpEnabled: boolean;
        /**
         * @type {{ exif: object, iptc: object, xmp?: object }}
         */
        lastData: {
            exif: object;
            iptc: object;
            xmp?: object;
        };
        /**
         * Retreive EXIF, IPTC, & XMP info for an image
         * @param {Image | File | Blob} img
         * @returns {{ exif: object, iptc: object, xmp?: object }}
         */
        getData(img: (new (width?: number, height?: number) => HTMLImageElement) | File | Blob): {
            exif: object;
            iptc: object;
            xmp?: object;
        };
        /**
         * Can get data directly from a File
         * @param {File} file
         * @returns {object}
         */
        readFromBinaryFile(file: File): object;
        /**
         * Returns data as a pretty JSON string
         * @returns {string}
         */
        pretty(): string;
    }
}

# Filepond Image Crop Center Performance Repro

## Synopsis
Filepond slows to a crawl when using the `filepond-plugin-image-crop` method: `item.setImageCropCenter` on mouse drag. The file in [`src/CropRepositionPlugin.js`](https://github.com/hennessyevan/filepond-performance-repro) is responsible for this logic.

## Run

```bash
yarn start
or
npm start
```

## Environment

> Check dependencies in package.json

Using [Parcel](https://parceljs.org) bundler with no configuration
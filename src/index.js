import "filepond/dist/filepond.min.css";
import * as FilePond from "filepond";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";

import FilePondPluginImageCropReposition from "./CropRepositionPlugin";

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageCropReposition
);

FilePond.setOptions({
  imageResizeMode: "force",
  stylePanelLayout: "integrated",
  stylePanelAspectRatio: "1200:350",
  imageCropAspectRatio: "1200:350",
  imageResizeTargetWidth: 1200,
  imagePreviewHeight: 350,
  imageResizeTargetHeight: 350,
  instantUpload: false
});

const inputElement = document.querySelector("#app");
FilePond.create(inputElement);

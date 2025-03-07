// Import pdfjs-dist correctly using named exports instead of default export
import * as pdfjsLib from 'pdfjs-dist';

// ...existing code...

// Make sure to use pdfjsLib correctly throughout the file
// For example, replace instances like:
// pdfjsLib__default.getDocument(...)
// with:
// pdfjsLib.getDocument(...)

// ...existing code...
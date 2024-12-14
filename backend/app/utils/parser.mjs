import fs from "fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

async function readPdf(filePath) {
  try {
    // Read the PDF file into a Uint8Array buffer
    const pdfData = new Uint8Array(fs.readFileSync(filePath));

    // Load the PDF document
    const pdfDocument = await getDocument({ data: pdfData }).promise;

    // Get the number of pages in the PDF
    const numPages = pdfDocument.numPages;

    let referencesSection = "";
    let referencesFound = false;

    for (let i = 0; i < numPages; i++) {
      let index;
      const page = await pdfDocument.getPage(i + 1);
      const textContent = await page.getTextContent();

      for (let i = 0; i < textContent.items.length; i++) {
        if (textContent.items[i].str.toLowerCase().includes("references")) {
          referencesFound = true;
          index = i;
          break;
        }
      }

      if (referencesFound) {
        for (let j = index; j < textContent.items.length; j++) {
          referencesSection += textContent.items[j].str + "\n";
        }
      }
      return referencesSection;
    }
  } catch (error) {
    console.error(`Error parsing PDF: ${error.message}`);
  }
}

export default readPdf;

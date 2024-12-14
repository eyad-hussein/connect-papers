const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function writeFile(filePath, data, flag) {
  try {
    await fs.writeFile(filePath, data, { flag: flag });
  } catch (e) {
    console.error(`Got an error trying to write to a file: ${e.message}`);
  }
}

async function copyFile(source, destination) {
  try {
    const data = await fs.readFile(source, "utf8");
    const lines = data.split("\n");

    console.log(lines);
  } catch (e) {
    console.error(`Got an error trying to copy a file: ${e.message}`);
  }
}
module.exports = { readFile, writeFile, copyFile };

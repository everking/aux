const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

// Function to convert YAML to JSON
const yamlToJson = (yamlString) => {
  try {
    return JSON.stringify(yaml.load(yamlString));
  } catch (e) {
    console.error('Error parsing YAML:', e.message);
    return null;
  }
};

// Function to convert Markdown to HTML
const mdToHtml = (mdString) => {
  try {
    return marked.parse(mdString);
  } catch (e) {
    console.error('Error parsing Markdown:', e.message);
    return null;
  }
};

const basePath = "/Users/edeguzma/personal-dev/aux/src/lib/posts"
// Get the list of all .md files in the /data/ folder
const mdFiles = fs.readdirSync(basePath).filter(file => path.extname(file) === '.md');

// Process each .md file
mdFiles.forEach((file) => {
  const filePath = path.join(basePath, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Split the file content into YAML and Markdown parts
  const parts = fileContent.split('---');
  const yamlString = parts[1];
  const mdString = parts.slice(2).join('---');

  // Convert YAML to JSON and Markdown to HTML
  const jsonString = yamlToJson(yamlString);
  const bodyHtml = mdToHtml(mdString);

  // Create the JSON file with the same name as the original .md file
  const jsonFileName = path.basename(file, '.md') + '.json';
  const jsonFilePath = path.join(basePath, jsonFileName);
  fs.writeFileSync(jsonFilePath, JSON.stringify({ json: jsonString, body: bodyHtml }, null, 2));
});
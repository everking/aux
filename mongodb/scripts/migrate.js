const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

mongoose.connect('mongodb://localhost/aux', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Article schema
const articleSchema = new mongoose.Schema({
  articleId: String,
  title: String,
  date: Date,
  updated: Date,
  categories: [String],
  coverImage: String,
  coverWidth: Number,
  coverHeight: Number,
  excerpt: String,
  body: String,
});

// Create Article model
const Article = mongoose.model('Article', articleSchema);

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
  const articleId = file.replace(".md", "");
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  console.log(`articleId: ${articleId}`);
  
  // Split the file content into YAML and Markdown parts
  const parts = fileContent.split('---');
  const yamlString = parts[1];
  const mdString = parts.slice(2).join('---');

  // Convert YAML to JSON and Markdown to HTML
  const jsonString = yamlToJson(yamlString);
  const articleObject = JSON.parse(jsonString);
  articleObject.body = mdString;
  articleObject.articleId = articleId;
  articleObject.date = new Date();
  articleObject.updated = new Date();

  const article = new Article(articleObject);
  console.log(`\narticleObject: ${JSON.stringify(articleObject, null, 2)}`);
  (async ()=> {
    try {
      await article.save();
    } catch (error) {
      console.log(error);
    }
  })();
});

console.log("End!");

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/aux', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Article schema
const articleSchema = new mongoose.Schema({
  title: String,
  date: String,
  updated: String,
  categories: [String],
  coverImage: String,
  coverWidth: Number,
  coverHeight: Number,
  excerpt: String,
  body: String,
});

// Create Article model
const Article = mongoose.model('Article', articleSchema);

// GET articles
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving articles' });
  }
});

// POST article
app.post('/articles', async (req, res) => {
  const article = new Article(req.body);

  console.log(`body: ${JSON.stringify(req.body, null, 2)}`);
  console.log(`article: ${JSON.stringify(article, null, 2)}`);
  try {
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error saving article' });
  }
});

// PUT article
app.put('/articles/:id', async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error updating article' });
  }
});

// Full-text search endpoint
app.get('/search', async (req, res) => {
  const query = req.query.q;
  console.log(`query: ${query}`);
  const options = {
    score: { $meta: "textScore" },
    sort: { score: { $meta: "textScore" } },
  };

  try {
    const articles = await Article.find({ $text: { $search: query } }, null, options);
    res.status(200).json(articles);
  } catch (error) {
    console.log(`error: ${error}`);
    res.status(500).json({ message: 'Error searching articles' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
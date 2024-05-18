import { json } from '@sveltejs/kit'
import mongoose from 'mongoose';

export const prerender = false;
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

const Article = mongoose.model('Article', articleSchema);

export const GET = async () => {
  try {
    const articles = await Article.find({});
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving articles' });
  }

  return json(Object.keys(posts).length)
}

export const POST = async ({ params, request }) => {
  console.log(`body: ${JSON.stringify(req.body, null, 2)}`);
  console.log(`article: ${JSON.stringify(article, null, 2)}`);
  try {
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error saving article' });
  }
}
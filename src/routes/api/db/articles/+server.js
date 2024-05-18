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
  const articleObject = await request.json();
  console.log(`articleObject: ${JSON.stringify(articleObject, null, 2)}`)
  const article = new Article(articleObject);
 try {
    await article.save();
    return json(Object.keys(article).length)
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error saving article' });
  }
}
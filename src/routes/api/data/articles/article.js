import mongoose from 'mongoose';

// Define Article schema
const articleSchema = new mongoose.Schema({
  articleId: String,
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

let mongoHost = process.env.MONGO_HOST;
if (!mongoHost) {
  mongoHost = "localhost";
}

console.log(`MongoDB host: ${mongoHost}`);

const Article = mongoose.model('Article', articleSchema);
const connect = (mongoose) => {
  mongoose.connect(`mongodb://${mongoHost}/aux`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export {articleSchema, Article, connect};


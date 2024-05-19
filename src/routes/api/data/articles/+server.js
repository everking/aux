import { json } from '@sveltejs/kit'
import mongoose from 'mongoose';
import { Article, connect } from '../article';

export const prerender = false;
connect(mongoose);

export const GET = async () => {
  try {
    const articles = await Article.find({});
    return json(articles);
  } catch (error) {
    const logError = `${error}`;
    console.log(`logError: ${logError}`);
    return json({ error: logError }, { status: 500 });
  }
}

export const POST = async ({ params, request }) => {
  const articleObject = await request.json();
  console.log(`articleObject: ${JSON.stringify(articleObject, null, 2)}`)
  const article = new Article(articleObject);
 try {
    await article.save();
    return json(article);
  } catch (error) {
    const logError = `${error}`;
    console.log(`logError: ${logError}`);
    return json({ error: logError }, { status: 500 });
  }
}

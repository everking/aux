import { json } from '@sveltejs/kit'
import mongoose from 'mongoose';
import { Article, connect } from '../article';

export const prerender = false;
connect(mongoose);

const isId = (id) => {
  const regex = /^[0-9a-fA-F]{24}$/;
  return regex.test(id);
}

export const GET = async ({ params, request, url }) => {
  const { id } = params;

  console.log(`GET ${id}`);
  try {

    if (id === "search") {
      const options = {
        score: { $meta: "textScore" },
        sort: { score: { $meta: "textScore" } }
      };
      const queryParams = url.searchParams;
      console.log(`url: ${JSON.stringify(url, null, 2)}`);
      console.log(`params: ${JSON.stringify(params, null, 2)}`);
      console.log(`request: ${JSON.stringify(request, null, 2)}`)
      const query = queryParams.get('q');
    
      const articles = await Article.find({ $text: { $search: query } }, null, options);
      return json(articles);
    }


    const article = isId(id) ? 
      await Article.findById(id) : 
      await Article.findOne({articleId: id});
    if (article == null) {
      return json({ error: "Article not found" }, { status: 404 });
    } else {
      return json(article);
    }
  } catch (error) {
    const logError = `${error}`;
    console.log(`logError: ${logError}`);
    return json({ error: logError }, { status: 500 });
  }
}

export const PUT = async ({ params, request }) => {
  const { id } = params;
  console.log(`id: ${id}`);
  const articleObject = await request.json();
 try {
    const updatedArticle = isId(id) ? 
      await Article.findByIdAndUpdate(id, articleObject, { new: true }) :
      await Article.findOneAndUpdate({articleId: id}, articleObject, { new: true }) ;
    if (!updatedArticle) {
      return json({ error: "Article not found or error updating" }, { status: 404 });
    }
    return json(updatedArticle);
  } catch (error) {
    console.log(`error: ${error}`);
    const errorLog = `${error}`;
    return json({ error: errorLog }, { status: 500 });
  }
}
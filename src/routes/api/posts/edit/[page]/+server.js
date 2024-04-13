import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';
import { json } from '@sveltejs/kit';
import fs from 'fs';

export const prerender = false

export const GET = async ({ params }) => {
  const { page } = params || 1
  const writableStream = fs.createWriteStream('/tmp/my-file.txt');
  writableStream.write('Hello, world!');
  writableStream.close();
  return json(page) 
}

export const POST = async ({ params }) => {
  console.log(`POST ${JSON.stringify(params, null, 2)}`);
  return json({}) 
}
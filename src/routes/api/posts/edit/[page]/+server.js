import { json } from '@sveltejs/kit';
import fs from 'fs';

export const prerender = false;

const BASE_PATH = "/Users/edeguzma/personal-dev/aux/src/lib/posts";
const STARTER_HEADER = `---
title: "Sample title - change me"
date: "2023-10-26"
updated: "2023-10-26"
categories:
  - "general"
  - "family"
coverImage: "/images/zacchaeus.png"
coverWidth: 16
coverHeight: 6
excerpt: "This is an excerpt"
---
### Sub title
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis 
ullamcorper velit sed ullamcorper morbi tincidunt.
`;
export const GET = async ({  params }) => {
  const { page } = params;
  const filePath = `${BASE_PATH}/${page}.md`;
  console.log(`GET ${filePath}`);
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`data ${data}`);
  
    return json({data})   
  } else {
    saveFile(filePath, STARTER_HEADER);
    console.log(`${filePath} created.`)
    return json({});
  }
}

export const POST = async ({ params, request }) => {
  const { page } = params;
  console.log(`POST ${JSON.stringify(params, null, 2)} ==> request ${JSON.stringify(request.json, null, 2)}`);
  const content = await request.json();
  console.log(`request.json: ${JSON.stringify(content.content, null, 2)}`);
  saveFile(`${BASE_PATH}/${page}.md`, content.content);
  return json({}) 
}

const saveFile = (filePath, content) => {
  const writableStream = fs.createWriteStream(filePath, { encoding: 'utf8' });
  writableStream.write(content);
  writableStream.close();
}
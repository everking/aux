use aux;
console.log(`DB_NAME: ${DB_NAME}`);

db.createCollection('articles', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["articleId", "title", "body"],
      properties: {
        articleId: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        date: {
          bsonType: "string",
          description: "must be a string and is optional"
        },
        updated: {
          bsonType: "string",
          description: "must be a string and is optional"
        },
        categories: {
          bsonType: "array",
          description: "must be an array and is optional",
          items: {
            bsonType: "string"
          }
        },
        coverImage: {
          bsonType: "string",
          description: "must be a string and is optional"
        },
        coverWidth: {
          bsonType: "number",
          description: "must be a number and is optional"
        },
        coverHeight: {
          bsonType: "number",
          description: "must be a number and is optional"
        },
        excerpt: {
          bsonType: "string",
          description: "must be a string and is optional"
        },
        body: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
});

db.articles.createIndex({ title: "text", body: "text", articleId: "text" }, { default_language: "en" });

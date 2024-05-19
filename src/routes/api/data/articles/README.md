# Articles

"_id": {"$oid": "6649578d800b814c64d4d160"},

```
curl -i \   
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"title": "Friendship Clubs2", "date": "2023-10-26", "updated": "2023-10-26", "categories": ["general", "family"], "coverImage": "/images/zacchaeus.png", "coverWidth": 16, "coverHeight": 6, "excerpt": "Friendship Clubs", "body": "The quick brown fox jumps over the lazy dog."}' \
  http://localhost:5173/api/db/articles
```
# Articles

```
curl -i \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"title": "Friendship Clubs", "articleId": "one-direction", "date": "2023-10-26", "updated": "2023-10-26", "categories": ["general", "family"], "coverImage": "/images/zacchaeus.png", "coverWidth": 16, "coverHeight": 6, "excerpt": "Friendship Clubs", "body": "The quick brown fox jumps over the lazy dog."}' \
  https://auxilium.guide/api/data/articles
```

```
curl -i \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"articleId": "one-direction", "title": "Friendship Clubs2345", "date": "2023-10-26", "updated": "2023-10-26", "categories": ["general", "family"], "coverImage": "/images/zacchaeus.png", "coverWidth": 16, "coverHeight": 6, "excerpt": "Friendship Clubs", "body": "The quick brown fox jumps over the lazy dog."}' \
  https://auxilium.guide/api/data/articles/664a108e2a9346cbeb6edfff
```

```
curl -i \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"articleId": "one-direction", "title": "Friendship Clubs 7777", "date": "2023-10-26", "updated": "2023-10-26", "categories": ["general", "family"], "coverImage": "/images/zacchaeus.png", "coverWidth": 16, "coverHeight": 6, "excerpt": "Friendship Clubs", "body": "The quick brown fox jumps over the lazy dog."}' \
  https://auxilium.guide/api/data/articles/one-direction
```


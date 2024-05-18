curl -i \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"title": "Friendship Clubs", "date": "2023-10-26", "updated": "2023-10-26", "categories": ["general", "family"], "coverImage": "/images/zacchaeus.png", "coverWidth": 16, "coverHeight": 6, "excerpt": "Friendship Clubs", "body": "The quick brown fox jumps over the lazy dog."}' \
  http://localhost:3000/articles
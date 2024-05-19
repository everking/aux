if [ -z "${BASE_URL}" ]
then
  export BASE_URL="https://auxilium.guide"
fi

export DATA=$(cat << EOF
{
    "title": "Friendship Clubs",
    "articleId": "one-direction",
    "date": "2023-10-26",
    "updated": "2023-10-26",
    "categories": [
        "general",
        "family"
    ],
    "coverImage": "/images/zacchaeus.png",
    "coverWidth": 16,
    "coverHeight": 6,
    "excerpt": "Friendship Clubs",
    "body": "The quick brown fox jumps over the lazy dog."
}
EOF
)

echo $DATA

curl -i \
  -H "Content-Type: application/json" \
  -X POST \
  -d "${DATA}" \
  ${BASE_URL}/api/data/articles
if [ -z "${ARTICLE_ID}" ]
then
  export ARTICLE_ID="$1"
fi


if [ -z "${BASE_URL}" ]
then
  export BASE_URL="https://auxilium.guide"
fi

export URL="${BASE_URL}/api/data/articles"
if [ ! -z "${ARTICLE_ID}" ]
then
  export URL="${URL}/${ARTICLE_ID}"
fi


echo "URL=${URL}"

curl -i \
  -H "Content-Type: application/json" \
  -X GET \
  -d "${DATA}" \
  ${URL}

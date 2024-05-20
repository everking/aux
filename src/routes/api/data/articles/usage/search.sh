if [ -z "${QUERY_PARAM}" ]
then
  export QUERY_PARAM="$1"
fi


if [ -z "${BASE_URL}" ]
then
  export BASE_URL="https://auxilium.guide"
fi

export URL="${BASE_URL}/api/data/articles/search?q=${QUERY_PARAM}"

echo "URL=${URL}"

curl -i \
  -H "Content-Type: application/json" \
  -X GET \
  -d "${DATA}" \
  ${URL}

export MONGO_CONTAINER=mongodb

if [ -z "${MONGO_FOLDER}" ]
then
  export MONGO_FOLDER="$HOME/dev/${MONGO_CONTAINER}_data"
fi

echo "MongoDB folder: ${MONGO_FOLDER}"
mkdir -p ${MONGO_FOLDER}

docker run -d --name ${MONGO_CONTAINER} \
  -p 27017:27017 \
  -u root \
  -v ${MONGO_FOLDER}:/data \
  mongo

docker logs -f ${MONGO_CONTAINER}
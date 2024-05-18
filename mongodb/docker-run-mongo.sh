export MONGO_CONTAINER=mongodb

mkdir -p $HOME/dev/${MONGO_CONTAINER}

docker run -d --name ${MONGO_CONTAINER} \
  -p 27017:27017 \
  -v $HOME/dev/${MONGO_CONTAINER}:/data/db mongo

docker logs -f ${MONGO_CONTAINER}
export MONGO_CONTAINER=mongodb

if [ -z "${MONGO_FOLDER}" ]
then
  export MONGO_FOLDER="$HOME/dev/${MONGO_CONTAINER}_data"
fi

echo "kill ${MONGO_CONTAINER}"
docker kill ${MONGO_CONTAINER}

echo "rm ${MONGO_CONTAINER}"
docker rm ${MONGO_CONTAINER} 

echo "rm -rf ${MONGO_FOLDER}"
rm -rf ${MONGO_FOLDER}

echo "mkdir -p ${MONGO_FOLDER}"
mkdir -p ${MONGO_FOLDER}
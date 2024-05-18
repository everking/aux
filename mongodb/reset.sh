export MONGO_CONTAINER=mongodb
echo "kill ${MONGO_CONTAINER}"
docker kill ${MONGO_CONTAINER}
echo "rm ${MONGO_CONTAINER}"
docker rm ${MONGO_CONTAINER} 

echo "rm -rf $HOME/dev/${MONGO_CONTAINER}"
rm -rf $HOME/dev/${MONGO_CONTAINER}

echo "mkdir -p $HOME/dev/${MONGO_CONTAINER}"
mkdir -p $HOME/dev/${MONGO_CONTAINER}
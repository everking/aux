docker kill aux
docker rm aux

echo "HOME=$HOME/dev/aux-posts"

docker run --name aux -it -p 5173:5173 \
  -v $HOME/dev/aux-posts:/app/src/lib/posts \
  docker.io/everking/aux bash

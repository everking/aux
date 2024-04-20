docker kill aux
docker rm aux

echo "HOME=$HOME/dev/aux-posts"

docker run -d --name aux -it -p 5173:5173 \
  -v $HOME/dev/aux-posts:/app/src/lib/posts \
  ghcr.io/everking/aux bash

docker logs -f aux


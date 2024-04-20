docker kill aux
docker rm aux

echo "HOME=$HOME/dev/aux-posts"

export IMAGE=ghcr.io/everking/aux:latest
docker pull ${IMAGE}

echo "Run ${IMAGE}"

docker run -d --name aux -it -p 5173:5173 \
  -v $HOME/dev/aux-posts:/app/src/lib/posts \
  ${IMAGE} bash

docker logs -f aux


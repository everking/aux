set -e
docker build . -t aux
docker tag aux ghcr.io/everking/aux
docker push ghcr.io/everking/aux

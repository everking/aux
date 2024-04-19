set -e
docker build . -t aux
docker tag aux everking/aux
docker push everking/aux

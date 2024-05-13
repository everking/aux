docker kill aux
docker rm aux

echo "HOME=$HOME/dev/aux-posts"

export IMAGE=ghcr.io/everking/aux:latest
docker pull ${IMAGE}

echo "Run ${IMAGE}"

if [ -z "${SMTP_EMAIL_USER}" ]
then
  echo "SMTP_EMAIL_USER variable required."
  exit 1
fi

if [ -z "${SMTP_EMAIL_PASSWORD}" ]
then
  echo "SMTP_EMAIL_PASSWORD variable required."
  exit 1
fi

if [ -z "${SMTP_CONTACT_EMAILS}" ]
then
  echo "SMTP_CONTACT_EMAILS variable required. This is for receipients of contact us."
  exit 1
fi



docker run -d --name aux \
  -e SMTP_EMAIL_PASSWORD=${SMTP_EMAIL_PASSWORD} \
  -e SMTP_EMAIL_USER=${SMTP_EMAIL_USER} \
  -it -p 5173:5173 \
  -v $HOME/dev/aux-posts:/app/src/lib/posts \
  ${IMAGE}

docker logs -f aux


FROM node
RUN npm install -g npm@10.5.2
VOLUME /app/src/lib/posts
EXPOSE 5173
ADD . /app
WORKDIR /app
ENTRYPOINT [ "/bin/bash", "-c", "/app/entrypoint.sh" ]
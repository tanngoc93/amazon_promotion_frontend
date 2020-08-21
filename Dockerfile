FROM phusion/passenger-nodejs

ENV PORT=80 \
    NODE_ENV=production \
    APP_DIR=/home/app/html

RUN mkdir -p $APP_DIR $APP_DIR/tmp/log $APP_DIR/tmp/pids

WORKDIR $APP_DIR

RUN apt-get update && apt-get upgrade -y -o Dpkg::Options::="--force-confold"
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update && apt-get install yarn

ADD package.json $APP_DIR/package.json
ADD yarn.lock $APP_DIR/yarn.lock
RUN yarn install --production=true

COPY --chown=app:app . $APP_DIR

RUN yarn build

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE $PORT

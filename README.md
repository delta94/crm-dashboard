# Admin Seed Project

## Development

```
yarn
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Production

```
docker build . -t admin-seed
docker run -p 3000:80 -e REACT_APP_API_URL=https://staging.api.com -e REACT_APP_BASE_URL=https://base.url.com -e REACT_APP_MY_VAR=myVar -t admin-seed
```

## Environment

We use runtime environment variables on production. To achieve that we use env.sh wich generate env-config.js file with vars from .env and values of those vars from command line when Docker run.

```
# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
```

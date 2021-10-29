# cnid-tech-opt1

This project contains a frontend & backend for fetching news data across the globe using the [NewsAPI](https://newsapi.org/) service.

**Note**: `An API-KEY is needed in order for the backend service to fetch data`

## Tech

- react
- express
- typescript

## Setup

Create a `.env` file in the root directory of `server` and paste this line into the file. Make sure to replace `{your-api-key}` with your newsapi.org `API-KEY`

```.env
API_KEY={your-api-key}
```

This project uses `Yarn` for package management
Begin setup by installing the dependencies.
`cd` into the client directory & server directory

```bash
yarn
```

To run the server & client, open two different terminals and run:

```bash
yarn start
```

This will start the client on:

```bash
http://localhost:3000/
```

Server will be running on:

```bash
http://localhost:6750/
```

Server endpoints are:

**_Health_** `/`

**_Headlines_** `/api/headlines`

**_Everything_** `/api/everything`

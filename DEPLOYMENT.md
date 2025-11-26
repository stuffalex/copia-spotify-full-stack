# Deployment and Environment Variables

This project uses Vercel for hosting a static front-end (Vite) and serverless API functions.

## Required environment variables (set these in Vercel Project Settings -> Environment Variables)

- `MONGODB_URI` - your MongoDB connection string (do NOT commit this to the repo).
- `MONGODB_DB` (optional) - name of the database (default: `spotifyAula`).

## How deployment works

- The repo contains a `front-end` folder. The Vite build output is `front-end/dist`.
- The `api/` folder at project root contains Serverless Functions (`api/artists.js`, `api/songs.js`) which connect to MongoDB using `MONGODB_URI`.
- When deployed, the functions are available under `/api/artists` and `/api/songs`.

## Steps to deploy on Vercel

1. Push your code to GitHub.
2. In Vercel dashboard, import the repository.
3. In Project Settings -> Environment Variables, add:
   - `MONGODB_URI` = your connection string
   - (optional) `MONGODB_DB` = your DB name
4. Leave the build command and output directory as configured in `vercel.json` (or set Build Command to `npm i --prefix back-end && npm i --prefix front-end && npm run build --prefix front-end` and Output Directory to `front-end/dist`).
5. Deploy.

## Local testing

- To test the server locally (back-end express server):

```pwsh
# from repository root
npm i --prefix back-end
npm i --prefix front-end
# run backend server (requires MONGODB_URI set locally)
$env:MONGODB_URI = "YOUR_URI_HERE"
npm run start --prefix back-end
# in another terminal, run front-end dev
npm run dev --prefix front-end
```

- To test serverless functions locally with Vercel CLI:

```pwsh
npm i -g vercel
# set env vars for vercel dev or use .env
vercel env add MONGODB_URI
vercel dev
```

## Security note

Do not commit real credentials into the repository. Use environment variables in Vercel or local development env files that are not committed.

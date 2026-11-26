# Enterprise Cloud Service Catalog

A Node.js and Express web application serving a static Cloud Service Catalog interface alongside RESTful JSON API endpoints (`/api/services` and `/api/status`).

## Local vs. Production Port Configuration

When running locally on a developer machine, no cloud environment variables are injected into the Node.js runtime, making `process.env.PORT` undefined. Through the logical OR fallback (`process.env.PORT || 8080`), the Express server explicitly binds to custom port `8080` on `localhost`, preventing conflicts with standard default ports like `3000`. Conversely, when deployed to a Platform-as-a-Service (PaaS) provider like Vercel, the cloud infrastructure dynamically provisions containers and assigns an ephemeral internal port via the `PORT` environment variable. Vercel's edge reverse proxy then automatically routes incoming public HTTPS traffic on port 443 to that dynamically assigned application port.
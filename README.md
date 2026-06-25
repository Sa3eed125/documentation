# ECM Documentation

This repository hosts the ECM user guide and is configured as a Docusaurus site.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start local server:

```bash
npm run start
```

3. Build production output:

```bash
npm run build
```

## Production Deployment (GitHub Pages)

- The workflow in `.github/workflows/deploy.yml` auto-deploys on every push to `main`.
- Repository Pages source must be set to **GitHub Actions**.
- The live site URL is:

`https://sa3eed125.github.io/documentation/`

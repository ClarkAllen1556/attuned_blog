<img width="200" height="200" src="https://raw.githubusercontent.com/ClarkAllen1556/attunded_blog/dev/src/assets/img/logo.svg" class="jop-noMdConv">

***

# UrbanBlog

## Introduction

UrbanBlog is a mock blog single page application written in TypeScript. It uses React, React Redux, and Tailwind CSS. A live version can be found over at [attuned.urbanlife.me](https://attuned.urbanlife.me).

## Local development setup

For local development, UrbanBlog is built using NPM and [Vite](https://vitejs.dev/).

### Pre-setup

Clone the repository and install necessary dependencies.

```bash
# Clone the repository
git@github.com:ClarkAllen1556/attuned_blog.git

# From the project directory, install needed dependencies
npm install
```

### Development server

For development, you can spin up a local development server.

```bash
# Start a development server
npm run dev
```

Once running, the site can be accessed at `localhost:3000`.

### Production

To build for production use the following NPM script:

```bash
# Run the TypeScript compiler and then build
npm run build
```

The application bundle will be output to the `dist/` directory. This can then be served with any static hosting service.

## Project Details

### Deployment

The live version of UrbanBlog is continuously deployed to an Nginx server running on an Ubuntu VPS. This is done using a Jenkins build server running on a Raspberry Pi. Jenkins polls the Git repository every 5 minutes. If changes are detected, it fetches the repo, builds the release, and deploys over SSH.

### Mock API

The application uses a dummy API provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/) ([Github](https://github.com/typicode/jsonplaceholder)).

### Styling

Styling is intended to match other sites that I host on the [urbanlife.me](https://urbanlife.me) domain, such as [UrbanConversion](https://conversion.urbanlife.me). The color pallet is from Ethan Schoonover's [Solarized](https://ethanschoonover.com/solarized/), and the font family is Mozilla's [Zilla Slab](https://blog.mozilla.org/opendesign/zilla-slab-common-language-shared-font/), and the icons are from [OpenMoji](https://openmoji.org/)

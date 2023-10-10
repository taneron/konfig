# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### How to make a new page

1. Create an `.mdx` file inside [`docs/`](./docs) *(`.mdx` is just markdown with some extra support for interactivity)*
1. Modify [`sidebars.js`](./sidebars.js) to include your new documentation
1. Push changes

### How to modify a page

1. Modify the target `.mdx` file inside [`docs/`](./docs) *(`.mdx` is just markdown with some extra support for interactivity)*
1. Push changes

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

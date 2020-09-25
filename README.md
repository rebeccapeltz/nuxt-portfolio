# pxl-nuxt-portfolio

> Portfolio website template

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm dev##

# build for production and launch server
$ npm build
$ npm start

# generate static project
$ npm generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Github deployment

Installed the `gh-pages` library in devDependencies.  Add router base to `nuxt.config.js` where the base is the repo name on github.

```js
router: {
    base: "/nuxt-portfolio/",
  },
```


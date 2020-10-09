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
## Upload Widget search key
Obtain a key if you want to use google search in the upload widget: https://developers.google.com/custom-search/

export GOOGLE_API_KEY=<key from google>

## Deploy to netlify with CLI
https://5f7519f1ed608c3fa70c7236--sad-colden-25eb29.netlify.app/
```bash
npn run generate
netlify deploy --open
netlify deploy --prod
 ```

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


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).



## Upload Widget search key
Obtain a key if you want to use google search in the upload widget: https://developers.google.com/custom-search/

## Fill in variable.sh 
You can use the shell script to set up local variables referenced by `process.env` in nuxt.config.js and code by executing `variables.sh`.

First update the exports with your information.

```bash
export GOOGLE_API_KEY=<Google API KEY to allow search with permission>
export CLD_CLOUD=<Cloudinary cloud name>
export UPLOAD_PRESET=<Upload preset name>
```


## Deploy to netlify with CLI

You can deploy to netlify.  Read about it here: https://nuxtjs.org/faq/netlify-deployment/
Add the export variables in the local `variables.sh` script to the Netlify deployment settings.


```bash
npn run generate
netlify deploy --open
netlify deploy --prod
 ```

Sample deploymed app: https://5f7519f1ed608c3fa70c7236--sad-colden-25eb29.netlify.app/


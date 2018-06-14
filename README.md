# Intro

- We are using [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) together with [monorepo approach](https://hackernoon.com/one-vs-many-why-we-moved-from-multiple-git-repos-to-a-monorepo-and-how-we-set-it-up-f4abb0cfe469)
- Each folder in this repo is a separate node module if it also includes package.json
- [Next.js](https://github.com/zeit/next.js/) helps us with SSR and also with splitting the whole app into smaller peaces (apps). We were inspired by a so called [Multi Zones feature](https://github.com/zeit/next.js#multi-zones)

# Our Structure

```
-- catalog  // app for rendering shop products
-- checkout // app for handling cart and checkout process
-- core     // shared functionality
```

# Install

From a root folder:

```
yarn install
```

# Build all apps

From a root folder:

```
yarn build
```

# Run

## Run all apps simultaneously

### From a root folder

```
yarn start // run builded versions
yarn dev   // run dev versions with hot reloading
```

## Run one app separately

### From an app folder

```
cd catalog
yarn start // run builded version
yarn dev   // run dev version with hot reloading
```

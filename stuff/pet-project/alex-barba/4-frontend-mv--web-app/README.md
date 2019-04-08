# Movies web app

### What is it?

First of all... what is a web app project? For us a web app project is the project that will handle with the routing, get route requests, server side rendering and more...

### Let's start to set up our environment.

As you may imagine the first thing that we need to do is **create our repository**... we will do it in the same way as we have done it before:

`frontend-<marketplace>--web-app` in our case, for example `frontend-mv--web-app`

Then we are going to **init our npm project**:

```sh
> npm init
```

just use the default values.


Now we are going to **install some dev dependencies**....

```sh
> npm i --save-dev @s-ui/bundler @s-ui/ssr @s-ui/lint @s-ui/mono @s-ui/precommit husky
```

- **[@s-ui/bundler](https://github.com/SUI-Components/sui/tree/master/packages/sui-bundler)** - The responsible of handle with our bundling with webpack etc...

- **[@s-ui/ssr](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr)** - The responsible of set our server side rendering server creating our server folder, passing and getting context and more...

- **[@s-ui/lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint)** - The responsible of handle with our linting

- **[@s-ui/mono](https://github.com/SUI-Components/sui/tree/master/packages/sui-mono)** - The one that will handle with our commit and release flow

- **[@s-ui/precommit](https://github.com/SUI-Components/sui/tree/master/packages/sui-precommit)** - Precommit hook management

- **husky** - Git hooks management

Now that we have our dev packages let's install the ones that will go to production.

```sh
> npm i --save @s-ui/component-peer-dependencies @s-ui/hoc @s-ui/i18n @s-ui/react-initial-props isomorphic-fetch
```

- [@s-ui/component-peer-dependencies](https://github.com/SUI-Components/sui/tree/master/packages/sui-component-peer-dependencies) - Peer dependencies of frontend projects at schibsted spain, react, react-dom, react-router, proptypes and more...

- [@s-ui/hoc](https://github.com/SUI-Components/sui/tree/master/packages/sui-hoc) - Provide the context to our component tree

- [@s-ui/i18n](https://github.com/SUI-Components/sui/tree/master/packages/sui-i18n) - The isomorphic way to handle with locales.

- [@s-ui/react-initial-props](https://github.com/SUI-Components/sui/tree/master/packages/sui-react-initial-props) - Provides a way to make our app isomorphic standarizing getInitial props on client and server.

- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - An isomorphic fetcher for node and browserify.

Now that we have the packages installed let's add some scripts to our package.json.

```json
"scripts": {
    "co": "sui-mono commit",
    "test": "echo \"Error: no test specified\" && exit 1",
    "ssr": "sui-bundler build -C && sui-ssr build -C && node server/index.js --inspect `pbpaste`"
  },
```

And that's it! We have our project ready to develop.


### Project structure.

First of all we are going to set the folder structure of our project.

```
src/
  └── components/
      └── .gitkeep
  └── pages/
      └── .gitkeep
  └── routes.js
  └── app.js
  └── contextFactory.js
  └── index.html
└── .gitignore
└── .package.json
```
** Creating our INDEX.HTML**

Inside our index.html file we are going to put the next code:

```html
  <html>
    <head></head>
    <body>
      <div id="app"><!-- APP --></div>
    </body>
  </html>
```

This code will be used by our ssr logic to inject our rendered website inside the app div.

*⚠️NOTE: The usage of `<!-- APP -->` is not trivial. It MUST HAVE THIS COMMENT for server side replacement purposes. More info on the [code of the tool](https://github.com/SUI-Components/sui/blob/master/packages/sui-ssr/server/ssr/index.js#L105)*


** Creating our CONTEXTFACTORY.JS file **

First of all, what is a context factory and why do we use it?

A context factory is just a file that will return an ASYNC function with ALL the elements that we expect to be injected as a context in our react components. For example, imagine that we want to have i18n and domain in all our components as they will use or not in any moment.

So you would put them in the contextFactory file. We return async functions by convention **EVEN IF THEY DON'T IMPLEMENT ANY ASYNC OPERATION**.

So... our context file could look like this:

```js
import domain from '<marketplace-domain-package>'

export default async () => ({ domain })
```

Don't worry if you don't know how to get your domain. Ask your assigned mentor at this point if you have doubts.

** Creating our ROUTES.JS file **

At this moment and as an example we are going to put only the index route because how react-router works is not the big thing here.

```js
import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
import App from './components/App'

const LoadHomePage = loadPage(contextFactory, () => import(/* webpackChunkName: "Home" */ './pages/Home'))

export default (
  <Router>
    <Route component={App}>
      <Route path='/'>
        <IndexRoute getComponent={LoadHomePage} />
      </Route>
    </Route>
  </Router>
)
```

Okay, a lot of stuff is happening here.

First of all notice that we are importing these two things here:

```js
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
```

That will be used to inject context to the page.


The second big thing here is that we are doing a [webpack dynamic importation](https://webpack.js.org/guides/code-splitting/#dynamic-imports):

```js
const LoadHomePage = loadPage(contextFactory, () => import(/* webpackChunkName: "Home" */ './pages/Home'))
```

This is important so we will not download the chunk if we didn't navigate to the page.

The last thing that we are doing is load the page component through a sui-react-initial-props method called `loadPage`.

Load page will work in the following manner:

1 - If we are on client

    1.1 - Check if we have the __INITIAL_PROPS__ injected by ssr

        1.1.1 - Inject them to our page.

2 - If we are in server

    2.1 - Return the component and pass the initial props from context


** Creating our APP.JS file **

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    { routes, history: browserHistory },
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err)
      }

      const App = withContext(context)(Router)
      ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})
```

Let's explain what's happening here:

```js
contextFactory(createClientContextFactoryParams()).then(context => {
```

We are calling our contextFactory, and we are passing to them some params that we expect that usually are going to be used by our contextFactory.

`createClientContextFactoryParams` will return an object with the next params:

```js
  {
    cookies: document.cookie,
    isClient: true,
    pathName: window.location.pathname,
    userAgent: window.navigator.userAgent
  }
```

*⚠️NOTE: We are calling CLIENT-CONTEXT-FACTORY-PARAMS as this code will be handled in client, the 'clientContextServerParams` will be called and managed automatically by our sui-ssr package*

After that we'll call react router `match` which has the purpose of being a kind of 'middleware' between a user url access and their final page component.

After that we call `withContext` HOC passing the context and the react-router Router component. This will set the `childContextTypes` to our desired components getting as a prop our contextObject and iterating through the keys you can see the code that does that [here](https://github.com/SUI-Components/sui/blob/master/packages/sui-hoc/src/withContext.js#L6)

Then the last thing that we need now to have a little working example is to create the Home page component.

Under pages folder create another folder called Home, then create a file called `index.js` in it and paste the following example:

```js
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = (_, { i18n }) => (
  <React.Fragment>
    <Helmet>
      <link rel='canonical' href='http://spa.mock/' />
    </Helmet>
    <h1>Home test title</h1>
  </React.Fragment>
)

Home.contextTypes = { i18n: PropTypes.object }

export default Home
```

And that's it!

Run:

```sh
> npm run ssr
```

### Developing within the web-app

You can use `sui-bundler` in development mode to start your webapp locally and test it. In order to do that, you can use the following command:

```
npm run dev
```

This will launch a website in your `localhost:3000`. Like the components in sui-studio, you will need to add your dependencies in your `package.json` file and link the ones you want to use inside your pages. `sui-bundler` also supports linking packages locally with the `link-package` option:

```
npm run dev -- --link-package=/absolute_path/to/npm_package
npm run dev -- --link-package=../relative_path/to/npm_package
```

As with the components linking, you can use relative or absolute paths. If you want to link more than one package, you should add the `link-package` multiple times:

```
npm run dev -- --link-package=/absolute_path/frontend-mv--uilib-components/components/header/search \
--link-package=/absolute_path/frontend-mv--uilib-components/components/header/title \
--link-package=/absolute_path/frontend-mv--uilib-components/components/another/component
...
```

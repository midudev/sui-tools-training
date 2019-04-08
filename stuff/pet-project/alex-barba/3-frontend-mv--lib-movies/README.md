### Movies domain
The next block will go over creating the boilerplate that will host the business logic of our application.

### But first... what's a domain?

According with our [WIKI](https://github.schibsted.io/scmspain/frontend-all-wiki/wiki/Definition-and-motivation), it's the layer with all the calls to other systems to retrieve data, the place where we do all our calculations, transformations and other validations independently from the interface.

To sum up, an SDK to control the business logic of our application it's developed using only pure Javascript.

### Why is the domain important?
In order to avoid coupling our frontend solution to our logic. This will help us in order to move faster our stack to another solution in the future if we want as the Domain is written in pure Javascript. Also, this offers us to focus our logic in a single point, avoiding unnecessary noise. Furthermore, the domain provides us a single point of truth for our logic business and a perfect place to make the best test coverage of our core.

### Where do I start?
We've created @s-ui/domain that's meant to be the backbone for our domains. It provides the basic stuff and some examples to start creating a domain from the ground. Anyway, before that you'll need a great understanding of the core concepts.

**First of all is important that you read our wiki in order to have an overview of some of the core elements of our architecture click [here](https://github.schibsted.io/scmspain/frontend-all-wiki/blob/master/wiki/Domain/Concepts.md) to read it**.

Once you have the core concepts more or less clear, ask your mentor to create the boilerplate of the domain and your first use case.


### Let's build our own domain project.

Now that you know how we treat with business logic, it's time to get our hands dirty creating our DDD repository.

**Create a project called** `frontend-<marketplace>--lib-<marketplace>`.

In our case, `frontend-mv--lib-movies` for the example.

After that, there are a bunch of things that we need to do to setup our domain dev environment.


First of all, as you've done on the other projects, you need to *init your npm project*.

```sh
> npm init
```
Set the default values of the initializer wizard and it's all done.

After that open your package.json file:

And **change/add the next line to this**:

```json
  "main": "./lib/index.js",
```

After that, we are going to **install some npm packages** that will help us to build and work with our domain project.

```sh
> npm i -D @s-ui/lint @s-ui/mockmock @s-ui/mono @s-ui/precommit @s-ui/test @babel/cli babel-preset-sui babelify@8 husky validate-commit-msg
```

- @s-ui/lint - Responsible of handle with the linting of our project

- @s-ui/mockmock - Responsible to let us mock the backend requests made by our domain repository

- @s-ui/mono - Our commit and release step wizzard

- @s-ui/precommit - Our precommit git hook management package

- @s-ui/test - Responsible of abstract us of our testing library, just run sui-test browser | server and the tool will do their job

 - babel-cli - Will be the one responsible of the transpiling of our app to es5.

- babel-preset-sui - The babel preset of sui

- Babelify - Babel browserify transform

- husky - Our git hooks management package

- validate-commit-msg - Our commit message linting tool.

Once we have installed that dev packages we are going to **install the production ones**.

 ```
 > npm i --save @s-ui/domain @s-ui/js axios
 ```

- @s-ui/domain - Is the package that include the interfaces, fetcher and tools that we will use working with the domain.

- @s-ui/js - A set of common tools and libraries that will help us to treat with strings, cookies etc....

*⚠️ NOTE: There are some specific packages of our marketplace that must be installed in order to work with literals, for example but at this point you will not need them.*

**Adding the npm scripts**

Once you have this done add the next npm scripts and configs:

```json
"scripts": {
    "co": "sui-mono commit",
    "lib": "rm -Rf ./lib && babel ./src -d lib",
    "lint": "sui-lint js --fix",
    "test": "NODE_ENV=test npm run test:client && NODE_ENV=test npm run test:server",
    "test:ci": "NODE_ENV=test ./node_modules/.bin/karma start --single-run --browsers Firefox",
    "test:client": "NODE_ENV=test sui-test browser",
    "test:client:watch": "npm run test:client --watch",
    "test:server": "NODE_ENV=test sui-test server",
    "test:server:watch": "npm run test:server --watch",
    "prepublish": "npm run lib",
    "precommit": "sui-precommit run",
    "commitmsg": "validate-commit-msg"
  },
  "browser": {
    "./test/helpers/describers/index.js": "./test/helpers/describers/clientDescribers.js"
  },
  "babel": {
    "presets": [
      "sui"
    ]
  },
```

Congrats! With that you should be able to make your first use case! 🔝

## Talk with your mentor to setup the folders and first config files or to clarify the doubts or problems that you've founded on the process.




### First step, create our theme:

Here at the frontend team of *Schibsted spain* we follow a [naming convention for repositories](https://confluence.schibsted.io/display/ST/Github+Enterprise+Nomenclature) that works as follow...
```
<role>-<marketplace acronym>--<type>-<name>
```

Then, following this convention and asuming that this pet project is not owned by any marketplace we will use the acronym of mvs(movies). So, following this convention we are going to name our first repository under our own profile as:

```
frontend-mv--uilib-theme
```

Okay, now we have our first repository created but... why do we need that repository?

This repository will host our theme.

### What is a theme _based in sui-theme_ in the schibsted web convergence?

A theme is a set of variables and styling especifications based on sass preprocessor that overrides the specifications and variables defined by the [sui-theme](https://github.com/SUI-Components/sui-theme) on demand.

#### What can we do with the theme?

Basically define and override variables like colors, margins, positions etc....

#### Then... who defines the base css of our components?

The base css of our components is defined inside the own components that are hold inside our `<marketplace>-studio`

*Let's get into work!!*

### Creating the base structure of our theme:

Our theme must have the following structure:
```
src/
  └── components/
      └── .gitkeep
  └── icons/
      └── .gitkeep
  └── layout/
      └── .gitkeep
  └── settings/
      └── .gitkeep
  └── utils/
      └── .gitkeep
└── .gitignore
```

### Initializing our npm package

Inside your project root path `./`, run the following terminal command

```sh
> npm init
```

You'll be asked for some easy questions. Respond to them and continue to the next step.

### Installing our dev dependencies:
We are going to install the following packages:

    "@s-ui/lint": "2",
    "@s-ui/mono": "1",
    "@s-ui/precommit": "2",
    "cpx": "1.5.0",
    "husky": "0.13.3",
    "rimraf": "2.5.4",
    "validate-commit-msg": "2.12.2"

Run:
```sh
> npm i -D @s-ui/lint @s-ui/mono @s-ui/precommit cpx husky rimraf validate-commit-msg
```

*What do they do?*

*@s-ui/lint* - It manages the linting library, .eslintrc file and linting things in general. Run `sui-lint js`

*@s-ui/mono* - Is responsible of handling with the commits (in any repo, even multi-package). You'll `run sui-mono commit` and a wizzard that will help you in the commit process will appear.

*@s-ui/precommit* - handles with the precommit hook on our project running sui-lint and test automatically. If something fails commit will not be done.

*cpx* - Used to copy files

*husky* - Used to handle git hooks

*rimraf* - Used to remove files and folders

*validate-commit-msg* - Used to validate that our commits are written in a semantic way.


Okay, now that we have all the necessary to work with our repository... let's go to the next step!

### Defining our main folder and project scripts

Open your package.json and add the next config:

```
  "main": "lib/",
  "scripts": {
    "clean:lib": "rimraf ./lib/*",
    "co": "sui-mono commit",
    "lib": "npm run lib:styles",
    "lib:styles": "cpx './src/**/*.scss' lib/",
    "lint": "npm run lint:sass",
    "lint:sass": "sui-lint sass",
    "phoenix": "npx @s-ui/mono phoenix",
    "precommit": "sui-precommit run",
    "prelib": "npm run clean:lib -s",
    "prepublish": "npm run lib",
    "release": "sui-mono release",
    "release:check": "sui-mono check"
  },
```

And that's it! we are ready to work and publish our repository.


### Working with our `<marketplace>-theme`

#### How do our theme matches with sui-theme?

Well, we will see in next lessons but... basically what our components do inside their `index.scss` is first of all import the `sui-theme`. Then wherever you implement the component you must import the `<marketplaceA-theme` to override all the variables that the sui-theme is defining previously.

Each time that we want to override a `sui-theme`variable we will just need to create the file inside our `<marketplace>-theme` and add the same variable with our new value inside it.

#### Example:

Let's get our hands dirty!

Go to your `<marketplace>-theme` and create the next file:
```
  └── settings/
      └── _color.scss
```

_Note the underscore on the file name is a sass feature called partials. It means that the stylesheet is going to be imported (@import) to a main stylesheet i.e. styles.scss. The advantage of using partials is that you can use many files to organize your code and everything will be compiled on a single file._

Inside of it add the next TWO variables:

```sass
$c-primary: #22988a;
$c-secondary: #fec10f;
```

These two variables will OVERRIDE the base variables of sui-theme. The folder structure doesn't matter but we are keeping the same folder structure that you'll find inside sui-theme repo to be consistent.

So if we go to sui-theme we will see that under the folder `./settings/_colors.scss` we have these two variables with some default colors. Note that the folder structure is the same in both themes.

https://github.com/SUI-Components/sui-theme/blob/master/src/settings/_color.scss

_Note that the `!default` flag is important here. It means that if the variable has already been assigned to a value, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one._
      
#### Import the files

To end with our first feature on our theme we need to import theme somehow.

Create a `settings.scss` inside the `./src` path of our project and add the next import:

```
@import './settings/color';
```

That will import our color file.

Now create a `index.scss` file inside our `./src` folder to import the settings file adding the next code:

```
@import './settings';
```

And that's it! we are ready to use our theme!!


### Publishing our package - NOT RECOMMENDED FOR THE EXAMPLE.

_NOTE: Assuming that you are not the only one doing this example and to avoid have multiple examples flying over the npm registry I recommend to don't publish this example theme and use npm link instead_

If you've been using sui-mono and it was well configured... deploy to NPM our package is so easy.

```ssh
> npm run release:check
```

It will prompt us if we have some release pending to be done.

```ssh
> npm run release
```

This will make the release for us increasing the package.json version, creating the tag, pushing to our repository and runing npm publish.

### Using npm link

If you want to use npm link to 'simulate' that the package is published just run inside the `theme folder` the next command:

```
> npm link
```

Then the next time that you want to "install" that package just run inside the desired folder the command:

```
> npm link <package-name>
```

And that's it! You'll have your package installed in the same way than npm install does.

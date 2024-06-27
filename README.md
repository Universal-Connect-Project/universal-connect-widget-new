# Universal Connect Widget

## Usage
Currently, this library has a very small use-case. It is not in a state where 
it can be used outside the Universal Connect Project ecosystem. 

As such, the only way to utilize the Universal Connect Widget--which this 
library encapsulates--is to run the [UCP-App service](https://github.com/Universal-Connect-Project/ucw-app),
which depends on this NPM Package.

Eventually, this library will be refactored in such a way that allows passing configuration
into the Component via props, etc., and thus allowing for customization, and use in other projects. 

The use-case described above is currently not possible, but as this is a work-in-progress, and as this is 
the eventual goal, we will leave this usage in place for future reference.

```typescript jsx
import { ConnectWidget } from "@ucp-npm/components";

function App(): ReactElement {
  return <ConnectWidget />;
}

export default App;
```

## Contributing
### Install dependencies
```
npm ci
```

### Bundle files for npm package
_(uses [RollupJS](https://rollupjs.org/))_

```
npm run build
```
### Local development

Testing changes to a project that is normally published to NPM can be tricky, especially given the fact that you 
are using the NPM package code inside another project, but it is definitely possible.

Here are some tips on how to do this. 

The first suggestion is to run `npm install </path/to/this-project>` command in the project that is utilizing the 
Widget component (NPM package). One example of an app such as this is the `ucw-app` project, which uses the 
`@ucp-npm/components` package.

```
npm install <folder>
```

If you do this, any changes that you make to the widget code (this project) should be immediately reflected in the destination
project (`ucw-app`, for example).

For more info, please refer to the official NPM `install` docs, [here](https://docs.npmjs.com/cli/v10/commands/npm-install).

Another option is to use `npm link`. Using this method does have its limitations. Please refer to the official NPM `link` 
[docs](https://docs.npmjs.com/cli/v10/commands/npm-link) for more info.

`npm pack` is another solution, which we will discuss in the next section. This method is useful, because it creates a
version of the npm package that more closely matches the final state of the package, once published to NPM. However, 
it does not offer the benefit of updating when changes are made, as you develop.

### Testing the packed version locally 

Use the following command to build a compressed version of the npm module, which 
can then be used to test locally. This more closely mimics the final state of an NPM package.

```
npm run pack
```
Using this compresses version is similar to the `folder` method, described above.

Once you have run `npm run pack`, you can then reference the local build/package in 
a different project using the following command:

```
npm i <path-to-your-local-compressed-version>
```

Here is an example of how to use this locally, from another project:

```
npm i /Users/user.name/projects/ucw-npm-package/ucp-npm-components-0.0.1.tgz
```

You would run the above command in the root directory of another project.

See the [npm docs](https://docs.npmjs.com/cli/v10/commands/npm-pack) for more info on the `pack` command.

## Publishing

### Publish to NPM

__Publishing to NPM is automatic, and will happen when code is merged to `main`.__

__IMPORTANT__: Prior to merging your PR to main, make sure the `version` property in
 `package.json` is set to the version you would like to publish. This is where the versions for the NPM 
is pulled from. If the version in `package.json` matches a version that has already been published, 
_publishing will be skipped_.

### Publishing manually
It is strongly discouraged to publish to NPM manually, however, if you need to publish manually, you can do so with the 
following steps.

_Note that publishing is limited to members of the Universal Connect Project [organization](https://www.npmjs.com/settings/ucp-npm/members)._

Prior to publishing, you should update your `package.json` file with the new version number. 
Follow the semver spec: https://semver.org

To publish to NPM, use the following commands:
```
npm publish
```

## Troubleshooting

### `[!] SyntaxError: Unexpected token ‘with’`

If you see this error, it is likely that you are using an outdated version of Node.js. Please update to the latest LTS 
version. More specifically, the following versions support the `with` keyword. 

`v22.0.0+, v21.0.0+, v20.10.0+, v18.20.0+`

## Learn more
[https://universalconnectproject.org/](https://universalconnectproject.org/)
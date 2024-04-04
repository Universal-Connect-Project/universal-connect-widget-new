# Universal Connect Widget

## Usage
Currently, this library has a very small use-case. It is not in a state where 
it can be used outside of the Universal Connect Project ecosystem. 

As such, the only way to utilize the Universal Connect Widget--which this 
library encapsulates--is to run the [UCP-App service](https://github.com/Universal-Connect-Project/ucw-app),
which depends on this NPM Package.

Eventually, this library will be refactored in such a way that allows passing configuration
into the Component via props, etc., and thus allowing for customization, and use in other projects. 

The use-case described above is currently not possible, but as this is a work-in-progress, and as this is 
the eventual goal, we will leave this usage in place for future reference.

_Keep in mind that the API for this component is also a WIP, and is subject to change._
```typescript jsx
import { ConnectWidget } from "@ucp-npm/components";

function App(): ReactElement {
  return <ConnectWidget config={{...}}/>;
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

### Testing package locally 

Use the following command to build a compressed version of the npm module, which 
can then be used to test locally. 

```
npm run pack
```

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

## Publishing

### Publish to NPM
Publishing is limited to members of the Universal Connect Project [organization](https://www.npmjs.com/settings/ucp-npm/members).

Prior to publishing, you should update your `package.json` file with the new version number. Follow the semver spec: https://semver.org

To publish to NPM, use the following commands:
```
npm publish
```


## Learn more
[https://universalconnectproject.org/](https://universalconnectproject.org/)
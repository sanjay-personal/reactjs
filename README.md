This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Document

Creating first app in reactjs

### `How to start reactjs`
By using below command to create a App <br />
npx create-react-app first-app


### `How to use Functional and Class Component`
In components folder we have two js files functional and class <br />
functional compnonet (GreetF.js) <br/>
class compnonet (Welcome.js) <br/>
import both js files in app.js <br/>

### `How to use Props`
`Note:` Props are Immutable means can't change the value once you declare <br />
functional compnonet (PropsF.js) <br/>
class compnonet (PropsC.js) <br/>
import both js files in app.js <br/>

### `How to use state`
`Note:` <br/>
Create state object and initialize in inside the constructor with `super()` keyword
<br/>
Render in html,state object by using `this` keyword
<br/>
By using `setState` method we can change the state object
<br/>
class compnonet (StateC.js) <br/>
import js file in app.js <br/>

### `How to use EVENT Click and EVENT Bind`
`Note:` <br/>
class compnonet EVENT Click (EventsC.js) <br/>
functionl compnonet EVENT Click (EventsF.js) <br/>
class compnonet EVENTBind  (EventBindC.js) <br/>
import js file in app.js <br/>

### `How to communicate child to parent`
`Note:`  By using `Method` we can call parent component.i created button in `ChildF.js` and clicking on button calling parent  `ParentC.js`.In parent `ParentC.JS` created a method and passing `Method` in selector tag `child.js`.  <br/>
class compnonet(ParentC.js) <br/>
functionl compnonet (ChildF.js) <br/>
import js file in app.js <br/>



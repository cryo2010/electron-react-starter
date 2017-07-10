# Summary
Electron React Starter is a nodejs starter desktop app that integrates electron, react, react-redux, material-ui, and firebase authentication.  The app is divided into server and client components and is specialized for desktop applications that host the client application remotely.

# Integrated Frameworks & Libraries
- [Electron](https://electron.atom.io)
- [React](https://facebook.github.io/react)
- [React-Redux](https://github.com/reactjs/react-redux)
- [Material-UI](http://www.material-ui.com)
- [Firebase](https://firebase.google.com) (Authentication)

# Directory Structure
Directory         | Description
------------------|------------------------------------------------------------
server            | Contains all server-related files
server/public     | Contains files that are served via HTTP
server/src        | Contains the remote application that will be transpiled and bundled
client            | Contains all desktop client-related files

# Build and Start Commands
The server uses [webpack](https://webpack.github.io) and [babel](https://babeljs.io) to transpile and bundle the remote desktop app.  You can build and start the server using the below commands.
```bash
[dev@box ~/electron-react-starter]$ cd server
[dev@box ~/electron-react-starter/server]$ npm run build
[dev@box ~/electron-react-starter/server]$ npm start
```

The client currently only needs to be started.
```bash
[dev@box ~/electron-react-starter]$ cd client
[dev@box ~/electron-react-starter/client]$ npm start
```

# License
ISC



import React, { Component } from "react"
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux"
import Store from "./src/store"
import App from './App';
import { name as appName } from './app.json';

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => ReduxApp);
import React from 'react';
import ReactDOM from 'react-dom';

// Redux & Redux Saga Integration
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react';

// React Route & Configuration
import rootSaga from './sagas';
import reducers from './reducers';
import App from './routes/index';
import * as serviceWorker from './serviceWorker';

// Redux & Redux Saga - Configuration
const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authorReducer'],
    blacklist: []
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

const persistor = persistStore(store);

const AppWithProvider = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

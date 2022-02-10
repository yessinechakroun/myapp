import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger-simple";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Reducer/authReducer";
import counterReducer from "./Reducer/counterReduer";

const persistConfig = {
    key: "User",
    timeout: null,
    storage,
    whitelist: ["auth", "counter"],
    blacklist: []
};
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger)
);
const reducers = combineReducers({
    auth: authReducer,
    counter: counterReducer


});
const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducers, enhancer);



export default store
export const persistor = persistStore(store);
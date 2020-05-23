import initialState from "./state";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import memoryApp from "./reducers/reducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(state = initialState) {
  return createStore(memoryApp, state, composeEnhancer(applyMiddleware(thunk)));
}

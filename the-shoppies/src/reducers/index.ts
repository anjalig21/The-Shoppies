import { combineReducers, compose, createStore } from "redux";
import movieList from './movieList';
import trigger from "./trigger";


const rootReducer = combineReducers({
    movieList: movieList,
    trigger: trigger
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers()
);

export default store;
export type RootState = ReturnType<typeof rootReducer>
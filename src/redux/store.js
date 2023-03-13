import { combineReducers, createStore } from "redux";
import AppReducers from "./reducers/AppReducers";

const rootReducer = combineReducers({
    data: AppReducers,
});

export const store = createStore(rootReducer);
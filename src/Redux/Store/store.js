import LoginReducers from '../Reducers/LoginReducers'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    LoginReducers,
});

export const store = createStore(
    reducers,
    (
        applyMiddleware(thunk)
    )
);

export default store;
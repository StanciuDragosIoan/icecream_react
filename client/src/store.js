// store and middleware use
import { createStore, applyMiddleware } from "redux";
//redux dev tools ext
import { composeWithDevTools } from "redux-devtools-extension";
//thunk middleware
import thunk from "redux-thunk";
// root reducer to combine multiple reducers
import rootReducer from "./reducers";

const initialState = {};

//middleware
const middleware = [thunk];

//create store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

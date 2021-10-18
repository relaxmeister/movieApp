import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { rootReducer } from "./reducers";

const configureStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
};

export default configureStore;

import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from './reducers'

const middleware = [thunk]

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));
export function configureStore(initialState) {
const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

// export const wrapper = createWrapper(makeStore)
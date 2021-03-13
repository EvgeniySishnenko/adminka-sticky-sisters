import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"
import rootReducer from "./reducers"

// const composeEnhancers =
//   (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './reducers/movieReducer';
import rootSaga from './sagas/movieSagas';



const reducer = combineReducers({
    movie: movieReducer
});

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
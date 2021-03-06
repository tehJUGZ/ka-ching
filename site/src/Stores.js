import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers';
import { batchActions, enableBatching } from 'redux-batched-actions';
import api from './Api';

import history from './History';


const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware.withExtraArgument({ api, batchActions, history })
)(createStore);

export default function configureStore(initialState = {}) {
	const store = createStoreWithMiddleware(enableBatching(rootReducer), initialState);
	return store;
}
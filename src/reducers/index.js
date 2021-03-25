import { combineReducers } from 'redux';
import { AuthReducers } from './AuthReducers';
import { StreamReducers } from './StreamReducers';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
    auth: AuthReducers,
    form: FormReducer,
    streams: StreamReducers
})
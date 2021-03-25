import api from '../api/streams';
import history from '../history';


export const SignIn = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    }
}

export const SignOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { UserId } = getState().auth;
        const response = await api.post('/streams', { ...formValues, UserId });
        dispatch({ type: "CREATE_STREAM", payload: response.data })
        history.push('/')
    }
}

export const fetchStreams = () => {
    return async dispatch => {
        const response = await api.get('/streams');
        dispatch({ type: "FETCH_STREAMS", payload: response.data })
    }
}

export const fetchStream = (id) => {
    return async dispatch => {
        const response = await api.get(`/streams/${id}`);
        dispatch({ type: "FETCH_STREAM", payload: response.data })
    }
}

export const editStream = (id, formValues) => {
    return async dispatch => {
        const response = await api.patch(`/streams/${id}`, formValues);
        dispatch({ type: "EDIT_STREAM", payload: response.data })
        history.push('/')
    }
}

export const deleteStream = (id) => {
    return async dispatch => {
        await api.delete(`/streams/${id}`);
        dispatch({ type: "DELETE_STREAM", payload: id })
        history.push('/')
    }
}
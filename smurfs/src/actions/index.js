import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const fetchSmurfs = (url) => (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });

    axios.get(url)
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
};
import * as actionTypes from './actionTypes';

export const onGetTest = (value) => {
    return {
        type: actionTypes.ON_GET_TEST,
        payload: value,
    };
};

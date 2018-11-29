import { CHANGE_LOGIN, CHANGE_LOGOUT } from './constants'

const changeLogin = (value) => ({
    type: CHANGE_LOGIN,
    value
});

export const login = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/login.json?secret=M5s2sPneDE')
        .then((res)=>{
            // const list = res.data.data;
            dispatch(changeLogin(true))
        });
    }
};

export const logout = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/logout.json?secret=M5s2sPneDE')
        .then((res)=>{
            // const list = res.data.data;
            dispatch(changeLogin(false))
        });
    }
};


export const getHeaderInfo = () => {
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/islogin.json?secret=M5s2sPneDE')
        .then((res)=>{
            // const list = res.data.data;
            dispatch(changeLogin(res.data.data.login))
        });
    }
};
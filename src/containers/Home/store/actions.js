import Axios from "axios";
import { CHANGE_HOME_LIST } from './constants'

const changeList = (list) => ({
    type:CHANGE_HOME_LIST,
    list
});

export const getHomeListData = () => {
    return (dispatch) => {
        return Axios.get('http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE',)
        .then((res)=>{
            const data = res.data;
            const list = res.data.data;
            dispatch(changeList(list))
        });
    }
};
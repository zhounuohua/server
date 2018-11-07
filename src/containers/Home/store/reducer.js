import { CHANGE_HOME_LIST } from './constants'

const dufaltState = {
    newsList:[]
}

export default (state = dufaltState, action) => {
    switch(action.type) {
        case CHANGE_HOME_LIST:
            return{
                ...state,
                newsList:action.list
            }
        default:
        return state;
    }
}
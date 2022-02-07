import initialState from '../initialState';
import {ON_TITLE_CLICK} from "../actionTypes/actionTypes";

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case ON_TITLE_CLICK:
            return {
                ...state,
                droplist: [...state.droplist.map(item => {
                    if (item.id === action.id) {
                        return {...item, open: !item.open}
                    } else if (item.body){
                        return {
                            ...item,
                            body: [...item.body.map(item=>{
                                if (item.id === action.id) {
                                    return {...item, open: !item.open}
                                } else if (item.body){
                                    return {
                                        ...item,
                                        body: [...item.body.map(item=>{
                                            if (item.id === action.id) {
                                                return {...item, open: !item.open}
                                            } else return item
                                        })]
                                    }
                                }
                                return item
                            })]
                        }
                    }
                    return item
                })]
            }

        default:
            return state;
    }
}

export default rootReducer;

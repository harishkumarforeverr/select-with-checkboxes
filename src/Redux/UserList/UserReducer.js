import { FETCH_USERS_REQUEST, FETCH_USERS_LIST_FAIL, FETCH_USERS_LIST_SUCSESS } from "./UserActionTypes";
import { fetchUserRequest, fetchUserListFail, fetchUserListSuccess } from "./UserActions";
import { Action } from "history";

const intaialState = {
    loading : false,
    users : [],
    error: ""
}

const UserReducer = (state=intaialState, action) => {

    switch(action.type){
        case FETCH_USERS_REQUEST : return{
            ...state,
            loading:true,
            // data :
        }
        case FETCH_USERS_LIST_SUCSESS :  return {
            loading: false,
            users : action.payload,
            error : ""
        }
        case FETCH_USERS_LIST_FAIL : return{
            loading: false,
            users : [],
            error : action.payload
        }
        default : return state
    }
}

export default UserReducer;
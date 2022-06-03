import axios from "axios";
import { FETCH_USERS_REQUEST, FETCH_USERS_LIST_FAIL, FETCH_USERS_LIST_SUCSESS } from "./UserActionTypes";
import { useDispatch } from "react-redux";

export const fetchUserRequest = () =>{
    return{
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUserListSuccess = (users) =>{
    return{
        type : FETCH_USERS_LIST_SUCSESS,
        payload: users
    }
}

export const fetchUserListFail = (error) =>{
    return{
        type : FETCH_USERS_LIST_FAIL,
        payload :error
    }
}

export const fetchUsersData = () =>{
    // const dispatch= useDispatch();

    return(dispatch) => {
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data
            dispatch(fetchUserListSuccess(users))
        } )
        .catch( err =>{
            const error = err.message
            dispatch(fetchUserListFail(error))
        }) 
    }
}
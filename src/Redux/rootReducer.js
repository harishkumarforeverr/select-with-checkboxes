import { combineReducers } from "redux";
import PizzaReducer from "./PizzShop/PizzaReducers";
import UserReducer from "./UserList/UserReducer";

const rootReducer = combineReducers({
    pizzaa : PizzaReducer,
    UsersList : UserReducer
})

export default rootReducer;
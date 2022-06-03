// import buyPizza from "./PizzaActions";
import { BUY_PIZZA } from "./PizzaActionTypes";


const initialState = {
    count:10
}
const PizzaReducer = (state =initialState, action) => {
    switch(action.type){
        case BUY_PIZZA : return{
            ...state,
            count : (state.count - 1)  > 0 ?  state.count -1 : 0
        }
        default : return state
    }
}
export default PizzaReducer;
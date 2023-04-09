import changeTheNumber from "./Updown";
import Condition from "./Condition";
import { combineReducers} from 'redux';
import AdditionExample from "./AdditionExample";

const rootReducer = combineReducers({
    changeTheNumber,
    Condition,
    AdditionExample
})

export default rootReducer;

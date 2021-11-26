import { combineReducers } from "redux";
import chatReducer from "../reducers/chatReducer";

const rootReducer = combineReducers({
    chatReducer: chatReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import { socketReducer } from "./socketReducer";
import { chatReducer } from "./chatReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    socket: socketReducer,
    auth: authReducer,
    chat: chatReducer
});

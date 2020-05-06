import { combineReducers } from "redux";
import { socketReducer } from "./socketReducer";
import { chatReducer } from "./chatReducer";
import { authReducer } from "./authReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
    socket: socketReducer,
    auth: authReducer,
    chat: chatReducer,
    modal: modalReducer
});

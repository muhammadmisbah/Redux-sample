import {
    CHANGE_TEXT
} from '../constants';

const initialState = {
    Buttons: ["Red", "Blue", "Orange", "Green"],
    Text: "",
}

export default function Main(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            state = {
                ...state,
                Text: action.payload,
            }
            break;
        default:
            break;
    }
    return state;
}
import {
    CHANGE_TEXT
} from '../constants'


export default class Actions {

    static ChangeText(data) {
        return {
            type: CHANGE_TEXT,
            payload: data
        }
    }
}
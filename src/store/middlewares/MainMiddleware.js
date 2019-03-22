import { Actions } from '../actions';

export default class MaunMiddleware {

    static ChangeText(payload) {
        return (dispatch) => {
            dispatch(Actions.ChangeText(payload))
        }
    }

}
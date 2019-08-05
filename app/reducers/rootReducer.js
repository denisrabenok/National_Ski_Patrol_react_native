import * as actions from "../actions/action-types";
import { AsyncStorage } from "react-native"
export default function rootReducer(state, action = {}) {
    // console.warn(action.lang + '');
    switch (action.type) {
        case actions.PROGRESS:
            return state.set('progress', action.progress);
        case actions.SWITCHLANGUAGE:
            return state.withMutations(state => state
                .set('lang', action.lang));
        default:
            return state
    }
}

import * as actions from "../actions/action-types";

export function controlProgress(isShowing) {
    return {
        type: actions.PROGRESS,
        progress: isShowing
    }
}
export function switchLanguage(lang) {
    return {
        type: actions.SWITCHLANGUAGE,
        lang: lang
    }
}

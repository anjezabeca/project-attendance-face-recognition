import {combineReducers} from 'redux'
import authedUser from "./authedUser";
import course from "./course"
import section from "./section"
import registered from "./registration";
import report from "./report"

export default combineReducers({
    authedUser,
    course,
    section,
    registered,
    report
})
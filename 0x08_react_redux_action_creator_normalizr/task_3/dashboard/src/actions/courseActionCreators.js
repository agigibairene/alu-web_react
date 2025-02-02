import { SELECT_COURSE, UNSELECTED_COURSE } from "./courseActionTypes";

export function selectCourse(index){
    return {
        type: SELECT_COURSE,
        index
    };
};

export function unselectCourse(index){
    return {
        type: UNSELECTED_COURSE,
        index
    };
};
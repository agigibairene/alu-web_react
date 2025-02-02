import { SELECT_COURSE, UNSELECTED_COURSE } from "./courseActionTypes";
import {bindActionCreators} from 'redux';

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

export const bindCourseActions = (dispatch) => {
    return bindActionCreators(
      {
        selectCourse,
        unSelectCourse,
      },
      dispatch
    );
};
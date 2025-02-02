import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECTED_COURSE } from "./courseActionTypes";

describe('Course Action Creators', () => {
    it('should create an action to select a course', () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index
        };
        expect(selectCourse(index)).toEqual(expectedAction);
    });
    it('should create an action to unselect a course', () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECTED_COURSE,
            index
        };
        expect(unselectCourse(index)).toEqual(expectedAction);
    });
})
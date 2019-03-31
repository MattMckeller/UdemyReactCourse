import {EMPLOYEE_CREATED, EMPLOYEE_SAVE_SUCCESS, UPDATE_EMPLOYEE_FORM} from "../actions/types";

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};
const EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  const { prop, value } = action.payload;
  switch (action.type) {
    case UPDATE_EMPLOYEE_FORM:
      return { ...state, [prop]: value };
    case EMPLOYEE_CREATED:
      return { ...INITIAL_STATE };
    case EMPLOYEE_SAVE_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default EmployeeFormReducer;

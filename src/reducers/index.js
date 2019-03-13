import {
  LOGGING_IN,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  SET_USER_VIEW,
  UPDATE_ACCOUNT,
  ADD_REAL_ESTATE,
  UPDATING_REAL_ESTATE,
  SORT_REAL_ESTATE,
  SET_REAL_ESTATE,
  UPDATING_WIDGETS,
  SET_WIDGETS,
  MOCK_DATA_PULL
} from "../actions";

const initialState = {
  user: {
    username: "",
    organization: "",
    realEstate: { buy: [], sell: [] },
    widgets: []
  },
  userView: "buy",
  loggingIn: false,
  updatingAccount: false,
  updatingRealEstate: false,
  updatingWidgets: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOCK_DATA_PULL:
      console.log(action.payload.user);
      return {
        ...state,
        ...action.payload
      };

    // Login reducers
    case LOGGING_IN:
      return { ...state, loggingIn: true };
    case LOGIN_SUCCESSFUL:
      return { ...state, loggingIn: false, error: null, user: action.payload };
    case LOGIN_ERROR:
      return { ...state, loggingIn: false, error: action.payload };

    // Set View reducers

    // Update Account reducers
    case UPDATE_ACCOUNT:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.email
        }
      };

    // Real Estate reducers
    case UPDATING_REAL_ESTATE:
      return { ...state, updatingRealEstate: true };
    case ADD_REAL_ESTATE:
      return {
        ...state,
        updatingRealEstate: false,
        user: { ...state.user, realEstate: action.payload }
      };
    case SET_REAL_ESTATE:
      return {
        ...state,
        updatingRealEstate: false,
        user: {
          ...state.user,
          realEstate: {
            ...state.user.realEstate,
            [state.userView]: action.payload
          }
        }
      };

    // Widget reducers
    case UPDATING_WIDGETS:
    case SET_WIDGETS:
    default:
      return state;
  }
};

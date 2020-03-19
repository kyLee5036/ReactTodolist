export const initalState = {
  addList : false,
  checkList : false,
  updateList : false,
  deleteList : false,
}

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';

export const UPDATE_LIST_REQUEST = 'UPDATE_LIST_REQUEST';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const UPDATE_LIST_FAILURE = 'UPDATE_LIST_FAILURE';

export const DELETE_LIST_REQUEST = 'DELETE_LIST_REQUEST';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const DELETE_LIST_FAILURE = 'DELETE_LIST_FAILURE';

export const CHECK_LIST_REQUEST = 'CHECK_LIST_REQUEST';
export const CHECK_LIST_SUCCESS = 'CHECK_LIST_SUCCESS';
export const CHECK_LIST_FAILURE = 'CHECK_LIST_FAILURE';




const reducer = (state, initalState, action ) => {
  switch(action.type) {
    case ADD_LIST_REQUEST : {
      return {
        ...state
      };
    }
    case ADD_LIST_SUCCESS : {
      return {
        ...state
      };
    }
    case ADD_LIST_FAILURE : {
      return {
        ...state
      };
    }

    case UPDATE_LIST_REQUEST : {
      return {
        ...state
      };
    }
    case UPDATE_LIST_SUCCESS : {
      return {
        ...state
      };
    }
    case UPDATE_LIST_FAILURE : {
      return {
        ...state
      };
    }

    case DELETE_LIST_REQUEST : {
      return {
        ...state
      };
    }
    case DELETE_LIST_SUCCESS : {
      return {
        ...state
      };
    }
    case DELETE_LIST_FAILURE : {
      return {
        ...state
      };
    }

    case CHECK_LIST_REQUEST : {
      return {
        ...state
      };
    }
    case CHECK_LIST_SUCCESS : {
      return {
        ...state
      };
    }
    case CHECK_LIST_FAILURE : {
      return {
        ...state
      };
    }
    default : {
      return {
        ...state,
      };
    }
  }
}
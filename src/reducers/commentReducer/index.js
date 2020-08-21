import { actionTypes } from "../../constants"

const initState = {
  isLoading: false,
  comment: null,
  error: null
}

const commentReducer = (state = initState, action) => {
  const { comment, error } = action

  switch (action.type) {
    case actionTypes.REQUEST_NEW_COMMENT:
      return {
        isLoading: true,
        comment,
        error
      }

    case actionTypes.REQUEST_NEW_COMMENT_FAILURE:
      return {
        isLoading: false,
        comment,
        error
      }

    case actionTypes.REQUEST_NEW_COMMENT_SUCCESS:
      return {
        isLoading: false,
        comment,
        error
      }

    default:
      return state
  }
}

export { commentReducer }
import es6promise from "es6-promise"

import { toast } from "react-toastify"
import { put } from "redux-saga/effects"
import { actionTypes } from "../../constants"
import { newCommentAPI } from "../../apiServices"

es6promise.polyfill()

function *newComment (action) {
  const { id, comment: payload } = action

  try {
    const comment = yield newCommentAPI(id, payload)

    yield put({
      type: actionTypes.REQUEST_NEW_COMMENT_SUCCESS,
      comment: comment,
      error: null
    })

    toast.success("Wow, Your comment was created...")
    toast.warn("Please! Waiting for the admin to approve...")
  }
  catch (error)
  {
    yield put({
      type: actionTypes.REQUEST_NEW_COMMENT_FAILURE,
      comment: null,
      error: error
    })

    toast.error(error.message)
  }
}

export { newComment }
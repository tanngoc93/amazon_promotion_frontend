import { actionTypes } from "../../constants"

const requestNewComment = (id, comment) => {
  return {
    type: actionTypes.REQUEST_NEW_COMMENT,
    comment,
    id
  }
}

export { requestNewComment }
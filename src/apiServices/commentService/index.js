import { stringify } from "query-string"
import config from "../../reactpress/services/publicConfig"
import wpapi from "../../reactpress/services/wpapi"

const newCommentAPI = async (id, comment) => {
  return await wpapi.comments().create({
    post: id,
    content: comment.content,
    author_url: comment.author_url,
    author_email: comment.author_email,
    author_name: comment.author_name
  })
  .then((data) => {
    return data
  })
  .catch((error) => {
    throw error
  })
}

export { newCommentAPI }
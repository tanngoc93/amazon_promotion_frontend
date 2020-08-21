import WPAPI from "wpapi"
import config from "./publicConfig"

export default new WPAPI({
  endpoint: config.blogAPI
})
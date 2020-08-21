import { stringify } from "query-string"
import config from "../../reactpress/services/publicConfig"

const getCouponsAPI = (page, per, category_id) => {

  const params = stringify({
    per,
    page,
    category_id
  })

  return fetch(`${config.couponAPI}/coupons?${params}`, {
    method: "GET"
  })
  .then(response => response.json())
  .then((data) => {
    if (data.status === "error") {
      throw Error(data.message)
    }
    return data
  })
  .catch((error) => {
    throw error
  })
}

const deleteCouponAPI = (id, token) => {
  const params = stringify({ id })

  return fetch(`${config.couponAPI}/coupons?${params}`, {
    headers: {
      Authorization: `Token token=${token}`
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then((data) => {
    if (data.status === "error") {
      throw Error(data.message)
    }
    return data
  })
  .catch((error) => {
    throw error
  })
}

export { getCouponsAPI, deleteCouponAPI }
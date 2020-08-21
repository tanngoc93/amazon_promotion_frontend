import { actionTypes } from "../../constants"

const requestCoupons = (page, per, category) => {
  return {
    type: actionTypes.REQUEST_COUPONS,
    category,
    page,
    per
  }
}

const deleteCoupon = (id, token) => {
  return {
    type: actionTypes.DELETE_COUPON,
    id,
    token
  }
}

export { requestCoupons, deleteCoupon }
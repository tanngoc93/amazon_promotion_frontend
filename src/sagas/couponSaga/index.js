import es6promise from "es6-promise"

import { put } from "redux-saga/effects"
import { actionTypes } from "../../constants"
import { getCouponsAPI, deleteCouponAPI } from "../../apiServices"

es6promise.polyfill()

function *getCoupons (action) {
  const { per, page, category } = action

  try {
    const { coupons, meta } = yield getCouponsAPI(page, per, category)

    yield put({
      type: actionTypes.REQUEST_COUPONS_SUCCESS,
      meta,
      coupons,
      category,
      error: null,
    })
  } catch (error) {
    yield put({
      type: actionTypes.REQUEST_COUPONS_FAILURE,
      meta,
      coupons,
      category,
      error
    })
  }
}

function *deleteCoupon (action) {
  const { id, token } = action

  try {
    yield deleteCouponAPI(id, token)

    yield put({
      type: actionTypes.DELETE_COUPON_SUCCESS,
    })
  } catch (error) {
    yield put({
      type: actionTypes.DELETE_COUPON_FAILURE,
    })
  }
}

export { getCoupons, deleteCoupon }
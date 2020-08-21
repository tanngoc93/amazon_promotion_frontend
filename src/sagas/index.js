import es6promise from "es6-promise"

import { actionTypes } from "../constants"
import { all, takeLatest } from "redux-saga/effects"
import { getCoupons, deleteCoupon } from "./couponSaga"
import { newComment } from "./commentSaga"

es6promise.polyfill()

function *rootSaga () {
  yield all([
    takeLatest(actionTypes.REQUEST_COUPONS, getCoupons),
    takeLatest(actionTypes.DELETE_COUPON, deleteCoupon),
    takeLatest(actionTypes.REQUEST_NEW_COMMENT, newComment),
  ])
}

export default rootSaga

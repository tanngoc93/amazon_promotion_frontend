import { actionTypes } from "../../constants"

const initState = {
  coupons: [],
  hasMore: true,
  category: null,
  error: null,
  meta: null
}

const couponReducer = (state = initState, action) => {
  let {
    category,
    coupons,
    hasMore
  } = { ...state }

  hasMore = setHasMore(action)

  if (action.category === null) {
    coupons = coupons.concat(action.coupons)
  } else {
    coupons = category !== action.category ? action.coupons : coupons.concat(action.coupons)
  }

  switch (action.type) {
    case actionTypes.REQUEST_COUPONS_FAILURE:
      return {
        coupons,
        category: action.category,
        error: action.error,
        meta: action.meta,
        hasMore
      }

    case actionTypes.REQUEST_COUPONS_SUCCESS:
      return {
        coupons,
        category: action.category,
        error: action.error,
        meta: action.meta,
        hasMore
      }

    default:
      return state
  }
}

const setHasMore = (action) => {
  if (action.meta && action.meta.next_page === null) {
    return false
  }

  return true
}

export { couponReducer }
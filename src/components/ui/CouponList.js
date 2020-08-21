import moment from "moment"
import CouponItem from "./CouponItem"
import InfiniteScroll from "react-infinite-scroller"
import { getParams } from "../../utils/commons"
import { requestCoupons } from "../../actions"
import { FadeLoader } from "react-spinners"
import { connect } from "react-redux"

class CouponList extends React.Component {
  state = {
    perPage: 12,
    category: null
  }

  handleLoading (per, category) {
    let { meta, requestCoupons } = this.props

    if (this.state.category !== category) {
      meta = null; this.setState({ category })
    }

    requestCoupons((meta === null) ? 1 : meta.next_page, per, category)
  }

  render () {
    const { perPage: per, category } = this.state
    const { categories, coupons, meta, hasMore, asPath } = this.props
    const { debug, token } = getParams(asPath)

    const currentTime = moment().format()

    return (
      <div>
        <section className="coupons">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mod-filter">
                  <select
                    defaultValue="1"
                    className="custom-select"
                    onChange={(e) => this.handleLoading(per, e.target.value)}
                  >
                    {
                      categories &&
                        categories.map((category, index) => {
                          return (
                            <option key={index} value={category.id}>
                              {category.name}
                            </option>
                          )
                        })
                    }
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <InfiniteScroll
                  pageStart={0}
                  hasMore={hasMore}
                  loadMore={
                    () => this.handleLoading(per, category)
                  }
                  loader={
                    <div
                      key={0}
                      className="loader"
                    >
                      <FadeLoader
                        color={`#123abc`}
                        css={`margin: 88px auto;`}
                        loading={hasMore}
                      />
                    </div>
                  }
                >
                  <div className="row row-fixing">
                    {
                      coupons &&
                        coupons.map((coupon, index) => {
                          return (
                            <CouponItem
                              key={index}
                              debug={debug}
                              token={token}
                              currentTime={currentTime}
                              coupon={coupon}
                            />
                          )
                        })
                    }
                  </div>
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .chewy-banner {
            text-align: center;
            margin-bottom: 1rem;
          }

          .chewy-banner img {
            width: 100%;
          }

          .coupons {
            padding: 20px 0;
          }

          .mod-filter {
            overflow: hidden;
            background: transparent;
            margin-bottom: 10px;
            z-index: 8888;
          }

          .custom-select {
            width: 100%;
            position: relative;
            font-family: 'Amatic SC', handwriting;
            font-size: 1.8rem;
            font-weight: 600;
          }

          .custom-select select {
            display: none;
          }

          .select-selected {
            background-color: DodgerBlue;
          }

          .select-selected:after {
            position: absolute;
            content: "";
            top: 14px;
            right: 10px;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-color: #fff transparent transparent transparent;
          }

          .select-selected.select-arrow-active:after {
            border-color: transparent transparent #fff transparent;
            top: 7px;
          }

          .select-items div,.select-selected {
            color: #ffffff;
            padding: 8px 16px;
            border: 1px solid transparent;
            border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
            cursor: pointer;
          }

          .select-items {
            position: absolute;
            background-color: DodgerBlue;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
          }

          .select-hide {
            display: none;
          }

          .select-items div:hover, .same-as-selected {
            background-color: rgba(0, 0, 0, 0.1);
          }

          @media (min-width: 481px) {
            .row-fixing {
              margin: 0 -7.5px;
            }
          }

          @media (min-width: 992px) {
            .coupons {
              padding: 60px 0;
            }
          }

          @media (max-width: 980px) {
            .coupons {
              margin-top: 100px;
            }

            .mod-filter {
              overflow: hidden;
              padding: 0;
              background: transparent;
              position: fixed;
              top: 0;
              right: 0;
              z-index: 8888;
            }

            .custom-select {
              width: 230px;
              margin: 29.2px 16px 0 0;
              position: relative;
              font-family: 'Amatic SC', handwriting;
              font-weight: 600;
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { couponReducer } = state
  const { meta, coupons, hasMore } = couponReducer

  return {
    meta,
    coupons,
    hasMore
  }
}

export default connect(
  mapStateToProps,
  {
    requestCoupons
  }
)(CouponList)

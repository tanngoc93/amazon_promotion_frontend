import { connect } from "react-redux"
import { toast } from "react-toastify"
import { deleteCoupon } from "../../actions"
import { Link } from "../../../server/routes"
import { LazyLoadImage } from "react-lazy-load-image-component"
import config from "../../reactpress/services/publicConfig"
import Clipboard from "react-clipboard.js"
import classnames from "classnames"
import moment from "moment"

const onSuccess = () => {
  toast.success('Successfully copied...')
}

class CouponItem extends React.Component {
  state = {
    isDisabled: false,
    btnTitle: "Delete"
  }

  handleClick (id, token) {
    const { deleteCoupon } = this.props

    this.setState({
      isDisabled: true,
      btnTitle: "Deleted"
    })

    deleteCoupon(id, token)
  }

  render () {
    // ********************* //
    const { debug,
            token,
            coupon,
            currentTime,
            deleteCoupon } = this.props
    // ********************* //
    const { expires_at } = coupon
    // ********************* //
    const expiration = moment(expires_at)
    // ********************* //
    const diff = expiration.diff(currentTime)
    // Express as a duration //
    const diffDuration = moment.duration(diff)

    return (
      <div className="coupon col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <article>
          <div
            className={classnames("lazy-media text-center", {
              "featuredImg" : coupon.site_stripe === false
            })}
            dangerouslySetInnerHTML={{__html: coupon.site_stripe_content}}
          ></div>
          <div className="content text-center">
            <h6 className="name">
              <a href={coupon.link} target="_blank">
                {coupon.name.split(/,/)[0]}
              </a>
            </h6>
            <div className="disclosure">
              <span className="badge badge-warning">#CommissionsEarned</span>
            </div>
            <div className="informations">
              <span className="badge badge-danger">limited time only</span>
              <span className="badge badge-danger">
                { coupon.only_in_the_usa ? "only in the USA" : "for global users" }
              </span>
              <span className="badge badge-info">
                <b>{diffDuration.days()} days {diffDuration.hours()} hours left</b>
              </span>
              <span className="badge badge-info">
                <Clipboard
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxShadow: "none",
                    background: "none",
                    fontSize: "unset",
                    backgroundColor: "transparent",
                    color: "#FAFAFA",
                    border: "none"
                  }}
                  data-clipboard-text={coupon.code}
                  onSuccess={() => onSuccess()}
                >
                  <b>copy <i className="fa fa-copy highlight1" aria-hidden="true"></i></b>
                </Clipboard>
              </span>
            </div>
            <div className="btn-abs">
              {
                debug == "true" ? (
                  <a
                    onClick={
                      () => this.handleClick(coupon.id, token)
                    }
                    className={classnames("btn btn-check-price", {
                      "isDisabled" : this.state.isDisabled
                    })}
                  >
                    <b>{this.state.btnTitle}</b>
                  </a>
                ) : (
                  <a href={coupon.link} target="_blank" className="btn btn-check-price">
                    <b>Check Price on Amazon</b>
                  </a>
                )
              }
            </div>
          </div>
        </article>
        <style jsx>{`
          .coupon {
            display: inline;
            position: relative;
            padding-left: 0 !important;
            padding-right: 0 !important;
            background: transparent;
            margin: 7.5px 0;
          }

          .coupon article {
            min-height: 500px;
            overflow: hidden;
            padding-bottom: 250px;
            margin: 0 7.5px !important;
            box-shadow: 2px 0 20px rgba(0,0,0,0.1);
          }

          .coupon .featuredImg {
            opacity: 0.5;
            background-size: 100%;
            background-position-y: 20px;
            background-repeat: no-repeat;
            background-image: url(${config.assetPrefix}/static/images/shopping-cart.jpg);
            min-height: 288.5px !important;
          }

          .coupon .content {
            padding: 0 15px;
            position: absolute;
            bottom: 0px;
          }

          .coupon .name a {
            color: #525252 !important;
            font-size: .8em;
            font-family: "Open Sans", sans-serif;
            line-height: 1.3em;
            margin-top: .5em;
            overflow: hidden;
          }

          .coupon .disclosure span.badge,
          .coupon .informations span.badge {
            margin: .1em;
            font-size: 75%;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            padding: .3em 0.6em .3em;
            display: inline-block;
            border-radius: .25em;
            line-height: 1;
          }

          .coupon .btn-abs {
            margin: 15px 0;
          }

          .coupon .btn {
            text-align: center;
            display: inline-block;
            border: none;
            color: #ffffff;
            font-size: .8em;
            padding: 6px 10px;
            line-height: normal;
            border-radius: 5px;
            box-sizing: border-box;
            transition: background 0.3s, border-color 0.3s;
          }

          .coupon .btn.btn-check-price {
            min-width: 120px;
            border-color: #038C8C;
            border-bottom: 3px solid #004C7F;
            background-color: #04BFBF;
            display: block !important;
            padding: 5px 2px !important;
            text-transform: uppercase;
          }

          .coupon .btn.btn-check-price.isDisabled {
            color: currentColor;
            cursor: not-allowed;
            opacity: 0.5;
            text-decoration: none;
          }

          .coupon .btn.btn-check-price:hover {
            background: #FFA43E !important;
            border-color: #F28200 !important;
          }

          @media (max-width: 480px) {
            .coupon {
              margin: 0 7.5px 15px 7.5px !important;
            }
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { deleteCoupon })(CouponItem)

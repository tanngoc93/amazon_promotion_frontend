import classnames from "classnames"
import config from "../../reactpress/services/publicConfig"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { slide as Menu } from "react-burger-menu"
import { getParams } from "../../utils/commons"
import { Router } from "../../../server/routes"
import { requestCoupons } from "../../actions"
import { connect } from "react-redux"

var styles = {
  bmBurgerButton: {
    left: '20px',
  },
  bmBurgerBars: {
    background: '#2ea3f2'
  }
}

class Header extends React.Component {
  state = {
    perPage: 12
  }

  onSelect (category, page = 1) {

    const pathname = config.assetPrefix || "/"

    Router.push({
      pathname: pathname,
      query: {
        category: `${category}`,
        page: `${page}`
      }
    })

    this.onLoading(category, page)
  }

  onLoading (category, page) {
    this.props.requestCoupons(
      page,
      this.state.perPage,
      this.setCategory(category)
    )
  }

  setCategory (category, defaultValue = "any") {
    if (category === undefined) {
      return defaultValue
    }

    return category
  }

  render () {

    const {
      meta,
      categories,
      asPath
    } = this.props

    const {
      category
    } = getParams(asPath)

    return (
      <div>
        <header className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 display_table">
                <div className="header_mainmenu display_table_cell">
                  <ul className="nav">
                    {
                      config.mainMenus.map((item, index) => {
                        const { route: pathname } = item

                        if (item.enable) {
                          if (item.isLogo) {
                            return (
                              <li
                                key={index}
                                className="centered-inline-logo-wrap"
                              >
                                <div className="logo_container">
                                  <a
                                    href={pathname}
                                  >
                                    <img src={item.image} alt={item.title} data-height-percentage="100" data-actual-width="400" data-actual-height="400" />
                                  </a>
                                </div>
                              </li>
                            )
                          }

                          return(
                            <li
                              className={classnames({
                                active: item.route == "/coupons"
                              })}
                              key={pathname}
                            >
                              <a href={pathname} className="text-capitalize">
                                <b>{item.title}</b>
                              </a>
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
                  <span className="toggle_menu">
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mod-filter-dk">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 display_table">
                <select
                  className="custom-select"
                  onChange={
                    (e) => this.onSelect(e.target.value)
                  }
                  value={ this.setCategory(category) }
                >

                  <option key="default" value="any">
                    Categories
                  </option>

                  {
                    categories && categories.map((item, index) => {
                      return (
                        <option key={item.name} value={item.id}>
                          {item.name}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
        <header className="page_header_mb">
          <Menu styles={ styles }>
            {
              config.mainMenus.map((item, index) => {
                const { route: pathname } = item

                if (item.enable) {
                  if (!item.isLogo) {
                    return(
                      <a
                        key={index}
                        href={pathname}
                        className={classnames("mb_menu_item text-uppercase", {
                          active: pathname == "/coupons"
                        })}
                      >
                        {item.title}
                      </a>
                    )
                  }
                }
              })
            }
          </Menu>
          <div>
            <div className="mod-filter-mb">
              <select
                className="custom-select"
                onChange={
                  (e) => this.onSelect(e.target.value)
                }
                value={ this.setCategory(category) }
              >

                <option key="default" value="any">
                  Categories
                </option>

                {
                  categories && categories.map((category, index) => {
                    return (
                      <option key={category.name} value={category.id}>
                        {category.name}
                      </option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </header>
        <style jsx>{`
          * {
            font-family: 'Poppins', sans-serif;
          }

          a {
            color: inherit;
            background-color: transparent;
          }

          .margin_top_15 {
            margin-top: 15px;
          }

          .margin_bottom_15 {
            margin-bottom: 15px;
          }

          .padding_top_15 {
            padding-top: 15px;
          }

          .padding_bottom_15 {
            padding-bottom: 15px;
          }

          .grey {
            color: #344a5f;
            border-color: #344a5f;
          }

          .greylinks a {
            color: #667e96;
          }

          a[class*='soc-']:before {
            font-family: 'socicon';
            font-size: 14px;
            line-height: 1;
          }

          a[class*='soc-'].rounded-icon {
            border-radius: 50%;
          }

          a.social-icon {
            font-size: 0;
            line-height: 0;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            color: rgba(102,126,150,0.5) !important;
            text-decoration: none;
            margin-left: 5px;
          }

          a.border-icon:before {
            font-size: 13px;
            line-height: 16px;
          }

          a.border-icon {
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-color: rgba(102, 126, 150, 0.6);
            padding: 10px 12px;
            margin-bottom: 4px;
          }

          p {
            margin-top: 0;
            margin-bottom: 0;
          }

          p:last-child {
            padding-bottom: 0px;
          }

          .container {
            padding-left: 0;
            padding-right: 0;
          }

          .row {
            min-width: 100%;
            height: 100%;
            margin-left: 0;
            margin-right: 0;
          }

          .page_topline {
            font-size: 14px;
            position: relative;
            z-index: 999;
          }

          .page_topline .divided-content>* {
            display: inline-block;
            padding-right: 11px;
          }

          .page_topline .divided-content>*+ :before {
            content: "|";
            display: inline-block;
            padding-right: 15px;
            color: #667e96;
          }

          .page_toplogo a.logo {
            display: inline-block;
            word-break: break-word;
            font-size: 24px;
            position: relative;
            z-index: 2;
            padding: 5px 0;
          }

          .page_toplogo .inline-teasers-wrap {
            display: inline-block;
            margin-left: -15px;
            margin-right: -15px;
          }

          .page_toplogo .small-text {
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .05em;
          }

          .page_toplogo .text-highlight {
            color: #8fc424;
            font-weight: 500;
          }

          .page_toplogo .small-teaser {
            vertical-align: middle;
            display: inline-block;
            line-height: 22px;
            margin-top: 14px;
          }

          .page_header {
            color: #667e96;
            background-color: #fff;
            transition: background .2s ease-in-out 0s, margin .6s ease-in-out 0;
            top: 0;
            left: 0;
            right: 0;
            position: relative;
            z-index: 999;
            margin: 0;
            padding: 0;
            height: auto;
          }

          .page_header:before {
            content: '';
            display: block;
            position: absolute;
            height: 1px;
            left: 0;
            right: 0;
            top: 0;
            background-color: #e5e5e5;
          }

          .page_header:after {
            content: '';
            display: block;
            position: absolute;
            height: 1px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #e5e5e5;
          }

          .page_header .header_mainmenu {
            width: 10000px;
            overflow: visible;
            padding: 0 15px;
          }

          .page_header .display_table {
            padding-left: 0;
            padding-right: 0;
          }

          .page_header .display_table_cell {
            float: none;
            overflow: hidden;
            display: table-cell;
            vertical-align: middle;
            box-sizing: border-box;
            zoom: 1;
          }

          .page_header .nav {
            justify-content: center;
          }

          .page_header .nav>li {
            display: inline-block;
            font-size: 24px;
            padding: 27px 0 32px;
            word-wrap: break-word;
            font-family: 'Amatic SC',handwriting;
          }

          .page_header .nav>li.centered-inline-logo-wrap {
            width: 100px;
            height: 100px;
          }

          .page_header .nav>li>a {
            display: block;
          }

          .page_header .nav>li>a>b {
            font-family: 'Amatic SC', 'Poppins', sans-serif;
          }

          .page_header .nav>li>a.text-capitalize {
            text-transform: capitalize;
          }

          .page_header .header_right_buttons {
            white-space: nowrap;
            padding: 0 15px;
            text-align: right;
            overflow: visible;
          }

          .page_header .header_right_buttons .social-icon {
            margin-bottom: 0;
          }

          .custom-select {
            width: 100%;
            position: relative;
            font-family: 'Amatic SC', handwriting;
            font-size: 1.4rem;
            font-weight: 8  00;
          }

          .mod-filter-dk .custom-select {
            width: 300px;
            float: right;
            margin-top: 20px;
          }

          .mod-filter-mb {
            position: relative;
            float: right;
            right: 20px;
            top: 27px;
          }

          .mod-filter-mb .custom-select {
            width: 250px;
          }

          @media (max-width: 767px) {
            .page_topline,
            .page_toplogo,
            .page_header, .mod-filter-dk {
              display: none;
            }

            .page_header_mbx {
              position: absolute;
              top: 0;
            }
          }

          @media (min-width: 768px) {
            .text-sm-left {
              text-align: left;
            }
            .text-sm-right {
              text-align: right;
            }
            .page_topline {
              background: linear-gradient(90deg, #e9e9e9 66%, #f2f2f2 66%);
            }
            .page_header_mbx {
              display: none;
            }
          }

          @media (max-width: 991px) {
            .page_header .header_right_buttons {
              padding: 15px 0;
            }
            .page_header .nav>li {
              margin: 0 17px;
            }
            .page_header .nav>li.centered-inline-logo-wrap {
              display: none;
            }
          }

          @media (min-width: 992px) {
            .text-md-left {
              text-align: left;
            }
            .text-md-right {
              text-align: right;
            }
            .page_toplogo {
              white-space: nowrap;
            }
            .page_header .nav>li:first-child>a {
              margin-left: 0;
            }
            .page_header .nav>li {
              position: relative;
              white-space: nowrap;
              transition: background .2s;
              display: inline-block;
              position: relative;
              margin: 0 -2px;
            }
            .page_header .nav>li>a {
              color: #344a5f;
              margin-left: 25px;
              margin-right: 25px;
              padding: 27px 0 32px;
              text-decoration: none;
              transition-property: color, background-color, border-color, padding-top, padding-bottom;
              zoom: 1;
            }
            .page_header .nav>li:not(.active)>a {
              margin-top: 5px;
            }
            .page_header .nav>li.active>a {
              color: #2ea3f2;
              border-top: 5px solid transparent;
            }
          }

          @media (min-width: 1200px) {
            .page_toplogo .inline-teasers-wrap {
              margin-left: -25px;
              margin-right: -25px;
            }
            .page_toplogo .inline-teasers-wrap>* {
              margin: 10px 25px;
            }
          }

          @media (max-width: 980px) {
            .mod-filter-dk {
              display: none;
            }

            .page_header_mb {
              position: fixed;
              top: 0px;
              width: 100%;
              z-index: 999;
              border-bottom: 0.5px solid #17a2b8;
              background-color: #FAFAFA;
              min-height: 100px;
            }

            .page_header_mb .mb_menu_item {
              font-weight: 600;
              font-family: 'Amatic SC', handwriting;
            }
          }

          @media (min-width: 981px) {
            .page_header_mb {
              display: none;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(null, { requestCoupons })(Header)

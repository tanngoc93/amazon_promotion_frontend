import React from "react"
import fetch from "isomorphic-unfetch"
import config from "../src/reactpress/services/publicConfig"
import CouponList from "../src/components/ui/CouponList"
import Layout from "../src/components/layouts/Layout"
import { paramsRouter } from "../src/utils/commons"

import "react-toastify/dist/ReactToastify.css"

class Index extends React.Component {

  static async getInitialProps ({ ctx }) {
    const res = await fetch(`${config.couponAPI}/categories`)
    const { categories } = await res.json()

    return {
      categories,
      asPath: ctx.asPath
    }
  }

  render () {
    const { page, categories, asPath } = this.props

    return (
      <Layout
        asPath={asPath}
        body={Body({ categories, asPath })}
        title={config.site.couponPageTitle}
        description={config.site.couponPageDescription} />
    )
  }
}

const Body = (props) =>  {
  const { categories, asPath } = props

  return (
    <CouponList
      asPath={asPath}
      categories={categories} />
  )
}

export default Index
import Head from "next/head"
import config from "../../reactpress/services/publicConfig"
import { decode } from "../../utils/commons"
import { connect } from "react-redux"

import React from "react"

class Layout extends React.Component {
  render() {
    const title = `${decode(this.props.title)} - ${config.site.name}`
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={this.props.description} />
        </Head>

        { this.props.body }
      </div>
    )
  }
}

export default connect(state => state)(Layout)
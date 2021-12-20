import React from "react"
import Router from "next/router"
import { Provider } from "react-redux"
import App from "next/app"
import Head from 'next/head'
import configureStore from "../src/store"
import withRedux from "next-redux-wrapper"
import withReduxSaga from "next-redux-saga"
import Header from "../src/components/layouts/Header"
import Footer from "../src/components/layouts/Footer"
import config from "../src/reactpress/services/publicConfig"
import { setScripts } from "../src/utils/commons"
import { ToastContainer } from "react-toastify"

import "bootstrap/dist/css/bootstrap.css"

class MyApp extends App {

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    const res = await fetch(`${config.couponAPI}/categories`)

    const {
      categories
    } = await res.json()

    return {
      pageProps,
      categories,
      asPath: ctx.asPath
    }
  }

  render () {
    const { store, categories, asPath, pageProps, Component } = this.props

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Provider store={store}>
          <div>
            <Header
              asPath={asPath}
              categories={categories}
            />

            <Component {...pageProps} />

            <Footer
              asPath={asPath}
            />

            <ToastContainer />
          </div>
        </Provider>
      </>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp))

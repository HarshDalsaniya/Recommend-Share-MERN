import React from "react"
import App from 'next/app';
import { wrapper } from "../redux/store"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"
import "../assets/css/layout.css"
import "../assets/css/login.css"
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/NavBar/NavBar'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <div className="site">
          <NavBar />
            <Component {...pageProps} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);
import "../assets/css/style.css"
import "../assets/css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/login.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import React, {Component} from 'react'
import { wrapper } from "../redux/store"
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import isAuthenticate from "../helper/userAuthRedirect";

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
      isAuthenticate(ctx.pathname)
      return {
          pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
  }
  state = {
    loading: true,
    current:null
  };
  componentDidMount() {
      isAuthenticate(window.location.pathname)
      this.setState({current:localStorage.getItem('Recommend_Share_current_user')})
      this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
  }
  componentWillUnmount() {
      if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
      }
  }
  render () {
      const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <div className="site">
        {/* {console.log(this.state.current)} */}
          <NavBar localstorageItem={this.state.current}/>
          <Component { ...pageProps } />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp);

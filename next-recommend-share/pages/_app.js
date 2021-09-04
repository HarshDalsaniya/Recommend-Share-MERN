import "../assets/css/navbar.css"
import "../assets/css/style.css"
import "../assets/css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/login.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"
import 'react-toastify/dist/ReactToastify.css';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router'
import React, {Component} from 'react'
import { wrapper } from "../redux/store"
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import isAuthenticate from "../helper/userAuthRedirect";

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    await isAuthenticate(ctx.pathname)
      return {
          pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
  }
  state = {
    loading: true,
  };
  async componentDidMount() {
    await isAuthenticate(Router.pathname)
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
  }
  componentWillUnmount() {
      if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
      }
  }
  async componentDidUpdate(){
    await isAuthenticate(Router.pathname)
  }
  render () {
    
      const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        {this.state.loading==false?
          <div className="site">
          {/* {console.log(this.state.current)} */}
            <NavBar/>
            <Component { ...pageProps } />
            <Footer />
          </div>
        :null}
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp);

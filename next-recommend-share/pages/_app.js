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
import Footer from '../components/layout/Footer'
import NavBar from '../components/NavBar/NavBar'
import isAuthenticate from "../helper/userAuthRedirect";
import { Provider } from 'next-auth/client'

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
    goPath:null
  };
  componentDidMount() {
    isAuthenticate(Router.pathname)
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
  }
  componentWillUnmount() {
      if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
      }
  }
  componentDidUpdate(prevProps){
    if(prevProps.myProps !== this.props.myProp) {
      isAuthenticate(Router.pathname)
    }
  }
  render () {
    
    const { Component, pageProps, router } = this.props
    // const userAuth = isAuthenticate(router.pathname)
    //                   .then(res=>res)

    return (
      <React.Fragment>
        {this.state.loading==false?
          <div className="site">
            <NavBar/>
            <Component { ...pageProps } />
            <Footer />
          </div>
        :
        <div style={{ position: 'absolute',top: '50%',left: '50%',margin: '-50px 0px 0px -50px'}}>
          <i className="fa fa-refresh fa-spin fa-4x fa-fw" aria-hidden="true"></i>
        </div>
        }
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp);
